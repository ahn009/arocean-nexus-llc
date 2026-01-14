// Custom hook for form handling

import { useState, useCallback, useRef, useEffect } from 'react';
import { useForm as useReactHookForm, UseFormReturn, FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodSchema } from 'zod';

interface UseFormOptions<T extends FieldValues> {
  schema: ZodSchema<T>;
  defaultValues?: Partial<T>;
  mode?: 'onChange' | 'onBlur' | 'onSubmit' | 'onTouched' | 'all';
  reValidateMode?: 'onChange' | 'onBlur' | 'onSubmit';
  shouldFocusError?: boolean;
  delay?: number; // Debounce delay for validation
}

interface UseFormReturnExtended<T extends FieldValues> extends Omit<UseFormReturn<T>, 'handleSubmit'> {
  isSubmitting: boolean;
  submitError: string | null;
  submitSuccess: boolean;
  handleSubmit: (onSubmit: (data: T) => Promise<void> | void) => (e?: React.BaseSyntheticEvent) => Promise<void>;
  resetForm: () => void;
  setFormError: (error: string | null) => void;
}

export function useForm<T extends FieldValues>({
  schema,
  defaultValues,
  mode = 'onSubmit',
  reValidateMode = 'onChange',
  shouldFocusError = true,
  delay = 0,
}: UseFormOptions<T>): UseFormReturnExtended<T> {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const form = useReactHookForm<T>({
    resolver: zodResolver(schema) as any,
    defaultValues: (defaultValues || {}) as any,
    mode,
    reValidateMode,
    shouldFocusError,
    delayError: delay,
  });

  const { handleSubmit: reactHookFormSubmit } = form;

  const handleSubmit = useCallback(
    (onSubmit: (data: T) => Promise<void> | void) => {
      return reactHookFormSubmit(async (data) => {
        setIsSubmitting(true);
        setSubmitError(null);
        setSubmitSuccess(false);

        try {
          await onSubmit(data);
          setSubmitSuccess(true);
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : 'An error occurred';
          setSubmitError(errorMessage);
        } finally {
          setIsSubmitting(false);
        }
      });
    },
    [reactHookFormSubmit]
  );

  const resetForm = useCallback(() => {
    form.reset();
    setSubmitError(null);
    setSubmitSuccess(false);
    setIsSubmitting(false);
  }, [form]);

  const setFormError = useCallback((error: string | null) => {
    setSubmitError(error);
  }, []);

  // Auto-clear success message after 5 seconds
  useEffect(() => {
    if (submitSuccess) {
      const timer = setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitSuccess]);

  return {
    ...form,
    isSubmitting,
    submitError,
    submitSuccess,
    handleSubmit,
    resetForm,
    setFormError,
  };
}

// Hook for form auto-save
export function useFormAutoSave<T extends Record<string, any>>(
  form: UseFormReturn<T>,
  {
    storageKey,
    debounceMs = 1000,
    enabled = true,
  }: {
    storageKey: string;
    debounceMs?: number;
    enabled?: boolean;
  }
) {
  const { watch, getValues } = form;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Load saved data on mount
  useEffect(() => {
    if (!enabled) return;

    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const data = JSON.parse(saved);
        Object.keys(data).forEach((key) => {
          const value = getValues(key as any);
          if (value !== data[key]) {
            form.setValue(key as any, data[key]);
          }
        });
      }
    } catch (error) {
      console.error('Failed to load saved form data:', error);
    }
  }, [storageKey, enabled, form, getValues]);

  // Auto-save on form changes
  useEffect(() => {
    if (!enabled) return;

    const subscription = watch((value) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        try {
          localStorage.setItem(storageKey, JSON.stringify(value));
        } catch (error) {
          console.error('Failed to save form data:', error);
        }
      }, debounceMs);
    });

    return () => {
      subscription.unsubscribe();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [watch, storageKey, debounceMs, enabled]);

  // Clear saved data
  const clearSavedData = useCallback(() => {
    localStorage.removeItem(storageKey);
  }, [storageKey]);

  return { clearSavedData };
}

// Hook for form field validation
export function useFieldValidation<T extends Record<string, any>>(
  form: UseFormReturn<T>,
  fieldName: keyof T,
  {
    validateOnChange = true,
    validateOnBlur = true,
    debounceMs = 300,
  }: {
    validateOnChange?: boolean;
    validateOnBlur?: boolean;
    debounceMs?: number;
  } = {}
) {
  const [isValidating, setIsValidating] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { getFieldState, trigger } = form;

  const validate = useCallback(async () => {
    setIsValidating(true);
    try {
      await trigger(fieldName as any);
    } finally {
      setIsValidating(false);
    }
  }, [trigger, fieldName]);

  const handleChange = useCallback(() => {
    if (!validateOnChange) return;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      validate();
    }, debounceMs);
  }, [validate, validateOnChange, debounceMs]);

  const handleBlur = useCallback(() => {
    if (!validateOnBlur) return;
    validate();
  }, [validate, validateOnBlur]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const fieldState = getFieldState(fieldName as any);

  return {
    isValidating,
    error: fieldState.error,
    isTouched: fieldState.isTouched,
    isDirty: fieldState.isDirty,
    handleChange,
    handleBlur,
    validate,
  };
}

// Hook for form step navigation
export function useFormSteps<T extends Record<string, any>>(
  form: UseFormReturn<T>,
  steps: (keyof T)[][] // Array of field arrays for each step
) {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === steps.length - 1;

  const validateStep = useCallback(async (stepIndex: number) => {
    const stepFields = steps[stepIndex];
    const result = await form.trigger(stepFields as any);
    return result;
  }, [form, steps]);

  const nextStep = useCallback(async () => {
    const isValid = await validateStep(currentStep);
    if (isValid && !isLastStep) {
      setCompletedSteps(prev => new Set(prev).add(currentStep));
      setCurrentStep(prev => prev + 1);
    }
    return isValid;
  }, [currentStep, isLastStep, validateStep]);

  const prevStep = useCallback(() => {
    if (!isFirstStep) {
      setCurrentStep(prev => prev - 1);
    }
  }, [isFirstStep]);

  const goToStep = useCallback(async (stepIndex: number) => {
    if (stepIndex < 0 || stepIndex >= steps.length) return false;
    
    // Validate all previous steps
    for (let i = 0; i < stepIndex; i++) {
      const isValid = await validateStep(i);
      if (!isValid) return false;
      setCompletedSteps(prev => new Set(prev).add(i));
    }
    
    setCurrentStep(stepIndex);
    return true;
  }, [steps.length, validateStep]);

  const submitForm = useCallback(async (onSubmit: (data: T) => Promise<void> | void) => {
    // Validate all steps
    const validationResults = await Promise.all(
      steps.map((_, index) => validateStep(index))
    );
    
    const allValid = validationResults.every(result => result);
    if (!allValid) return false;
    
    // Submit the form
    await form.handleSubmit(onSubmit)();
    return true;
  }, [form, steps, validateStep]);

  return {
    currentStep,
    completedSteps,
    isFirstStep,
    isLastStep,
    nextStep,
    prevStep,
    goToStep,
    submitForm,
    validateStep,
  };
}

// Hook for form field masking
export function useFieldMask(
  maskType: 'phone' | 'currency' | 'date' | 'ssn' | 'custom',
  customMask?: (value: string) => string
) {
  const applyMask = useCallback(
    (value: string): string => {
      const cleaned = value.replace(/\D/g, '');

      switch (maskType) {
        case 'phone':
          if (cleaned.length <= 3) return cleaned;
          if (cleaned.length <= 6) return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
          if (cleaned.length <= 10) return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
          return `+${cleaned.slice(0, 1)} (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7, 11)}`;

        case 'currency':
          const number = parseFloat(cleaned);
          if (isNaN(number)) return '';
          return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
          }).format(number / 100);

        case 'date':
          if (cleaned.length <= 2) return cleaned;
          if (cleaned.length <= 4) return `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
          return `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}/${cleaned.slice(4, 8)}`;

        case 'ssn':
          if (cleaned.length <= 3) return cleaned;
          if (cleaned.length <= 5) return `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
          return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 5)}-${cleaned.slice(5, 9)}`;

        case 'custom':
          return customMask ? customMask(value) : value;

        default:
          return value;
      }
    },
    [maskType, customMask]
  );

  const removeMask = useCallback((value: string): string => {
    return value.replace(/\D/g, '');
  }, []);

  return { applyMask, removeMask };
}