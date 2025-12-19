import { memo, useState, useCallback, useEffect, useRef } from 'react';

interface OptimizedMachineImageProps {
  src: string;
  alt: string;
  imageFit?: 'cover' | 'contain';
  onLoad?: () => void;
  priority?: boolean;
}

// Low quality placeholder - subtle gradient matching card background
const PLACEHOLDER_GRADIENT = 'linear-gradient(135deg, hsl(var(--muted)/0.6) 0%, hsl(var(--muted)/0.3) 100%)';

export const OptimizedMachineImage = memo(function OptimizedMachineImage({
  src,
  alt,
  imageFit = 'cover',
  onLoad,
  priority = false,
}: OptimizedMachineImageProps) {
  const [loadState, setLoadState] = useState<'loading' | 'loaded' | 'error'>('loading');
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [shouldLoad, setShouldLoad] = useState(priority);

  // Check if image is already cached
  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current?.naturalHeight !== 0) {
      setLoadState('loaded');
      onLoad?.();
    }
  }, [onLoad]);

  // Intersection observer for lazy loading
  useEffect(() => {
    if (priority || shouldLoad) return;

    const img = imgRef.current;
    if (!img) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observerRef.current?.disconnect();
          }
        });
      },
      { rootMargin: '200px', threshold: 0 }
    );

    observerRef.current.observe(img);

    return () => observerRef.current?.disconnect();
  }, [priority, shouldLoad]);

  const handleLoad = useCallback(() => {
    setLoadState('loaded');
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setLoadState('error');
    onLoad?.();
  }, [onLoad]);

  // Preload priority images
  useEffect(() => {
    if (priority && src) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      link.fetchPriority = 'high';
      document.head.appendChild(link);
      return () => {
        document.head.removeChild(link);
      };
    }
  }, [priority, src]);

  const isLoaded = loadState === 'loaded';

  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* Blur placeholder background */}
      <div 
        className={`absolute inset-0 transition-opacity duration-500 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
        style={{ background: PLACEHOLDER_GRADIENT }}
      >
        {/* Animated shimmer effect */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, hsl(var(--muted-foreground)/0.08) 50%, transparent 100%)',
            animation: 'shimmer 1.5s infinite',
          }}
        />
      </div>
      
      {/* Main image */}
      <img
        ref={imgRef}
        src={shouldLoad ? src : undefined}
        data-src={src}
        alt={alt}
        className={`w-full h-full transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ 
          objectFit: imageFit,
          objectPosition: 'center',
          transform: 'scale(1.05)',
        }}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        onLoad={handleLoad}
        onError={handleError}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
    </div>
  );
});
