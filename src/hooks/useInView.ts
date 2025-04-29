import { useState, useEffect, RefObject } from 'react';

interface InViewOptions {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
}

export function useInView(
  ref: RefObject<Element>,
  options: InViewOptions = {}
): boolean {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: options.threshold || 0,
        root: options.root || null,
        rootMargin: options.rootMargin || '0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
      observer.disconnect();
    };
  }, [ref, options.threshold, options.root, options.rootMargin]);

  return isInView;
}