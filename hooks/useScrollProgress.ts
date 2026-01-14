// Custom hook for scroll progress tracking

import { useEffect, useState, useCallback, useRef } from 'react';

interface ScrollProgressOptions {
  smooth?: boolean;
  throttle?: number;
}

export function useScrollProgress({
  smooth = false,
  throttle = 16, // ~60fps
}: ScrollProgressOptions = {}) {
  const [progress, setProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollProgress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

    setProgress(Math.min(100, Math.max(0, scrollProgress)));

    // Detect scroll direction
    if (scrollTop > lastScrollY) {
      setScrollDirection('down');
    } else if (scrollTop < lastScrollY) {
      setScrollDirection('up');
    }

    setLastScrollY(scrollTop);
    setIsScrolling(true);

    // Clear scrolling state after a delay
    setTimeout(() => {
      setIsScrolling(false);
    }, 150);
  }, [lastScrollY]);

  // Throttle scroll handler
  const throttledScroll = useCallback(
    throttle ? (() => {
      let timeoutId: NodeJS.Timeout | null = null;
      return () => {
        if (timeoutId) return;
        timeoutId = setTimeout(() => {
          handleScroll();
          timeoutId = null;
        }, throttle);
      };
    })() : handleScroll,
    [handleScroll, throttle]
  );

  useEffect(() => {
    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [throttledScroll, handleScroll]);

  return {
    progress,
    isScrolling,
    scrollDirection,
  };
}

// Hook for scroll-to-top functionality
export function useScrollToTop(threshold = 300) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = useCallback(() => {
    if (window.pageYOffset > threshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [threshold]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [toggleVisibility]);

  return {
    isVisible,
    scrollToTop,
  };
}

// Hook for scroll position
export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({
        x: window.pageXOffset || document.documentElement.scrollLeft,
        y: window.pageYOffset || document.documentElement.scrollTop,
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial position
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPosition;
}

// Hook for scroll velocity
export function useScrollVelocity() {
  const [velocity, setVelocity] = useState(0);
  const lastScrollY = useRef(0);
  const lastTime = useRef(Date.now());

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      const currentTime = Date.now();
      
      const deltaY = currentScrollY - lastScrollY.current;
      const deltaTime = currentTime - lastTime.current;
      
      if (deltaTime > 0) {
        setVelocity(deltaY / deltaTime);
      }
      
      lastScrollY.current = currentScrollY;
      lastTime.current = currentTime;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return velocity;
}

// Hook for element scroll progress
export function useElementScrollProgress(ref: React.RefObject<HTMLElement>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const handleScroll = () => {
      const elementTop = element.offsetTop;
      const elementHeight = element.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollTop = window.pageYOffset;

      const elementBottom = elementTop + elementHeight;
      const windowBottom = scrollTop + windowHeight;

      if (scrollTop + windowHeight < elementTop) {
        setProgress(0);
      } else if (scrollTop > elementBottom) {
        setProgress(100);
      } else {
        const visibleHeight = Math.min(windowBottom, elementBottom) - Math.max(scrollTop, elementTop);
        const progressPercent = (visibleHeight / elementHeight) * 100;
        setProgress(progressPercent);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref]);

  return progress;
}

// Hook for scroll lock
export function useScrollLock() {
  const lockScroll = useCallback(() => {
    if (typeof window === 'undefined') return;
    
    const scrollBarCompensation = window.innerWidth - document.body.offsetWidth;
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollBarCompensation}px`;
  }, []);

  const unlockScroll = useCallback(() => {
    if (typeof window === 'undefined') return;
    
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  }, []);

  return { lockScroll, unlockScroll };
}

// Hook for infinite scroll
export function useInfiniteScroll(
  callback: () => void,
  options: {
    threshold?: number;
    hasMore?: boolean;
    isLoading?: boolean;
  } = {}
) {
  const { threshold = 0.9, hasMore = true, isLoading = false } = options;
  const observer = useRef<IntersectionObserver | null>(null);

  const lastElementRef = useCallback(
    (node: HTMLElement | null) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore) {
            callback();
          }
        },
        {
          rootMargin: `${(1 - threshold) * 100}%`,
        }
      );

      if (node) observer.current.observe(node);
    },
    [callback, hasMore, isLoading, threshold]
  );

  return lastElementRef;
}