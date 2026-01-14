// Custom hook for Intersection Observer

import { useEffect, useRef, useState } from 'react';

interface UseIntersectionOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
  threshold?: number | number[];
  rootMargin?: string;
}

export function useIntersection({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = false,
  ...options
}: UseIntersectionOptions = {}) {
  const [isIntersecting, setIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
        
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
        
        if (triggerOnce && entry.isIntersecting) {
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin,
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce, hasIntersected, options]);

  return { ref, isIntersecting, hasIntersected };
}

// Hook for scroll-triggered animations
export function useScrollAnimation({
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  triggerOnce = true,
}: UseIntersectionOptions = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}

// Hook for multiple elements intersection
export function useMultipleIntersections(
  elements: React.RefObject<HTMLElement>[],
  options: UseIntersectionOptions = {}
) {
  const [intersections, setIntersections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    elements.forEach((elementRef, index) => {
      if (!elementRef.current) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          setIntersections(prev => ({
            ...prev,
            [index]: entry.isIntersecting,
          }));
        },
        {
          threshold: options.threshold || 0.1,
          rootMargin: options.rootMargin || '0px',
        }
      );

      observer.observe(elementRef.current);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [elements, options]);

  return intersections;
}