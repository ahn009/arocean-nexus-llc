// Validation schemas for Arocean Nexus LLC

import { z } from 'zod';

// Contact form validation
export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be less than 50 characters')
    .regex(/^[a-zA-Z\s]+$/, 'First name must contain only letters and spaces'),
  
  lastName: z
    .string()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be less than 50 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Last name must contain only letters and spaces'),
  
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(100, 'Email must be less than 100 characters'),
  
  company: z
    .string()
    .max(100, 'Company name must be less than 100 characters')
    .optional()
    .or(z.literal('')),
  
  phone: z
    .string()
    .regex(/^\+?[\d\s\-\(\)]+$/, 'Please enter a valid phone number')
    .max(20, 'Phone number must be less than 20 characters')
    .optional()
    .or(z.literal('')),
  
  service: z
    .enum(['', 'publishing', 'marketing', 'software', 'it', 'consulting', 'other'])
    .optional(),
  
  budget: z
    .enum(['', 'under-5k', '5k-15k', '15k-50k', '50k-100k', 'over-100k', 'not-sure'])
    .optional(),
  
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters'),
  
  newsletter: z.boolean().optional(),
  
  agreement: z
    .boolean()
    .refine((val) => val === true, {
      message: 'You must agree to the privacy policy',
    }),
});

// Newsletter subscription validation
export const newsletterSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(100, 'Email must be less than 100 characters'),
  
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .optional()
    .or(z.literal('')),
});

// Quote request validation
export const quoteSchema = z.object({
  firstName: z
    .string()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be less than 50 characters'),
  
  lastName: z
    .string()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be less than 50 characters'),
  
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(100, 'Email must be less than 100 characters'),
  
  company: z
    .string()
    .max(100, 'Company name must be less than 100 characters')
    .optional()
    .or(z.literal('')),
  
  phone: z
    .string()
    .regex(/^\+?[\d\s\-\(\)]+$/, 'Please enter a valid phone number')
    .max(20, 'Phone number must be less than 20 characters')
    .optional()
    .or(z.literal('')),
  
  service: z
    .enum(['publishing', 'marketing', 'software', 'it'])
    .optional(),
  
  budget: z
    .enum(['under-5k', '5k-15k', '15k-50k', '50k-100k', 'over-100k', 'not-sure'])
    .optional(),
  
  timeline: z
    .enum(['asap', '1-3-months', '3-6-months', '6-12-months', 'flexible'])
    .optional(),
  
  projectDescription: z
    .string()
    .min(20, 'Project description must be at least 20 characters')
    .max(2000, 'Project description must be less than 2000 characters'),
});

// Contact form validation (alternative for different contexts)
export const simpleContactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(100, 'Email must be less than 100 characters'),
  
  subject: z
    .string()
    .min(5, 'Subject must be at least 5 characters')
    .max(200, 'Subject must be less than 200 characters'),
  
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters'),
});

// User registration validation
export const userRegistrationSchema = z.object({
  firstName: z
    .string()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be less than 50 characters')
    .regex(/^[a-zA-Z\s]+$/, 'First name must contain only letters and spaces'),
  
  lastName: z
    .string()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be less than 50 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Last name must contain only letters and spaces'),
  
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(100, 'Email must be less than 100 characters'),
  
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(100, 'Password must be less than 100 characters')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, 
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'),
  
  confirmPassword: z
    .string()
    .min(8, 'Confirm password must be at least 8 characters'),
  
  terms: z
    .boolean()
    .refine((val) => val === true, {
      message: 'You must accept the terms and conditions',
    }),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

// Login validation
export const loginSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(100, 'Email must be less than 100 characters'),
  
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(100, 'Password must be less than 100 characters'),
  
  rememberMe: z.boolean().optional(),
});

// Password reset validation
export const passwordResetSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(100, 'Email must be less than 100 characters'),
});

// New password validation
export const newPasswordSchema = z.object({
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(100, 'Password must be less than 100 characters')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, 
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'),
  
  confirmPassword: z
    .string()
    .min(8, 'Confirm password must be at least 8 characters'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

// Profile update validation
export const profileUpdateSchema = z.object({
  firstName: z
    .string()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be less than 50 characters')
    .regex(/^[a-zA-Z\s]+$/, 'First name must contain only letters and spaces')
    .optional(),
  
  lastName: z
    .string()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be less than 50 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Last name must contain only letters and spaces')
    .optional(),
  
  company: z
    .string()
    .max(100, 'Company name must be less than 100 characters')
    .optional()
    .or(z.literal('')),
  
  phone: z
    .string()
    .regex(/^\+?[\d\s\-\(\)]+$/, 'Please enter a valid phone number')
    .max(20, 'Phone number must be less than 20 characters')
    .optional()
    .or(z.literal('')),
  
  bio: z
    .string()
    .max(500, 'Bio must be less than 500 characters')
    .optional()
    .or(z.literal('')),
});

// Cookie preferences validation
export const cookiePreferencesSchema = z.object({
  essential: z.boolean().refine((val) => val === true, {
    message: 'Essential cookies are required',
  }),
  
  analytics: z.boolean().optional(),
  
  marketing: z.boolean().optional(),
  
  preferences: z.boolean().optional(),
});

// Newsletter preferences validation
export const newsletterPreferencesSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(100, 'Email must be less than 100 characters'),
  
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .optional()
    .or(z.literal('')),
  
  interests: z
    .array(z.enum(['publishing', 'marketing', 'software', 'it', 'general']))
    .optional(),
  
  frequency: z
    .enum(['weekly', 'monthly', 'quarterly'])
    .optional(),
});

// Project inquiry validation
export const projectInquirySchema = z.object({
  firstName: z
    .string()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be less than 50 characters'),
  
  lastName: z
    .string()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be less than 50 characters'),
  
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(100, 'Email must be less than 100 characters'),
  
  company: z
    .string()
    .max(100, 'Company name must be less than 100 characters')
    .optional()
    .or(z.literal('')),
  
  phone: z
    .string()
    .regex(/^\+?[\d\s\-\(\)]+$/, 'Please enter a valid phone number')
    .max(20, 'Phone number must be less than 20 characters')
    .optional()
    .or(z.literal('')),
  
  service: z
    .enum(['publishing', 'marketing', 'software', 'it'])
    .optional(),
  
  budget: z
    .enum(['under-5k', '5k-15k', '15k-50k', '50k-100k', 'over-100k', 'not-sure'])
    .optional(),
  
  timeline: z
    .enum(['asap', '1-3-months', '3-6-months', '6-12-months', 'flexible'])
    .optional(),
  
  projectType: z
    .enum(['new', 'redesign', 'maintenance', 'consultation'])
    .optional(),
  
  projectDescription: z
    .string()
    .min(20, 'Project description must be at least 20 characters')
    .max(2000, 'Project description must be less than 2000 characters'),
  
  currentWebsite: z
    .string()
    .url('Please enter a valid URL')
    .optional()
    .or(z.literal('')),
  
  referral: z
    .string()
    .max(100, 'Referral source must be less than 100 characters')
    .optional()
    .or(z.literal('')),
});

// Type exports for the schemas
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type NewsletterData = z.infer<typeof newsletterSchema>;
export type QuoteData = z.infer<typeof quoteSchema>;
export type SimpleContactData = z.infer<typeof simpleContactSchema>;
export type UserRegistrationData = z.infer<typeof userRegistrationSchema>;
export type LoginData = z.infer<typeof loginSchema>;
export type PasswordResetData = z.infer<typeof passwordResetSchema>;
export type NewPasswordData = z.infer<typeof newPasswordSchema>;
export type ProfileUpdateData = z.infer<typeof profileUpdateSchema>;
export type CookiePreferences = z.infer<typeof cookiePreferencesSchema>;
export type NewsletterPreferences = z.infer<typeof newsletterPreferencesSchema>;
export type ProjectInquiryData = z.infer<typeof projectInquirySchema>;