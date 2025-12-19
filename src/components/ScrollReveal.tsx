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
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Use IntersectionObserver for ALL cards - load what's visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          onVisible?.();
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: '100px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [onVisible, index]);

  return (
    <div
      ref={ref}
      className={`transform-gpu ${className}`}
    >
      {shouldLoad ? children : (
        <div className="glass-card overflow-hidden h-80">
          <div className="absolute inset-0 bg-muted/30 animate-pulse" />
          <div className="h-48" />
          <div className="p-4 space-y-3">
            <div className="h-5 bg-muted/40 rounded w-3/4 animate-pulse" />
            <div className="h-4 bg-muted/30 rounded w-1/2 animate-pulse" />
            <div className="h-8 bg-muted/40 rounded w-1/3 animate-pulse" />
            <div className="h-10 bg-primary/20 rounded-lg animate-pulse" />
          </div>
        </div>
      )}
    </div>
  );
});
