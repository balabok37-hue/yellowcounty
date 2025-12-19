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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Mark for loading immediately when visible
          setShouldLoad(true);
          onVisible?.();
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: '100px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [onVisible]);

  // Staggered reveal animation after shouldLoad is set
  useEffect(() => {
    if (shouldLoad) {
      const staggerDelay = (index % 4) * 50;
      const timer = setTimeout(() => setIsVisible(true), staggerDelay);
      return () => clearTimeout(timer);
    }
  }, [shouldLoad, index]);

  return (
    <div
      ref={ref}
      className={`transform-gpu transition-all duration-500 ease-out will-change-transform ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
      } ${className}`}
      style={{ contain: 'layout style paint' }}
    >
      {shouldLoad ? children : <div className="h-80 bg-muted/30 rounded-2xl animate-pulse" />}
    </div>
  );
});
