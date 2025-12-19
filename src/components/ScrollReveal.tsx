import { ReactNode, useRef, useEffect, useState, memo } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
}

export const ScrollReveal = memo(function ScrollReveal({ 
  children, 
  className = '', 
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '-30px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transform-gpu transition-all duration-300 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } ${className}`}
    >
      {children}
    </div>
  );
});

interface CardRevealProps {
  children: ReactNode;
  className?: string;
  index?: number;
  onVisible?: () => void;
}

export const CardReveal = memo(function CardReveal({ children, className = '', index = 0, onVisible }: CardRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Priority cards load immediately
    if (index < 8) {
      setShouldLoad(true);
      setIsVisible(true);
      onVisible?.();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          onVisible?.();
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: '200px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [onVisible, index]);

  // Staggered reveal animation
  useEffect(() => {
    if (shouldLoad && !isVisible) {
      const staggerDelay = Math.min((index % 4) * 30, 120);
      const timer = setTimeout(() => setIsVisible(true), staggerDelay);
      return () => clearTimeout(timer);
    }
  }, [shouldLoad, index, isVisible]);

  return (
    <div
      ref={ref}
      className={`transform-gpu transition-all duration-300 ease-out ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-98'
      } ${className}`}
      style={{ contain: 'layout style paint' }}
    >
      {shouldLoad ? children : <div className="h-80 bg-muted/20 rounded-2xl" />}
    </div>
  );
});
