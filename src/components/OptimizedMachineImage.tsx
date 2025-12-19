import { memo, useState, useCallback, useEffect, useRef } from 'react';

interface OptimizedMachineImageProps {
  src: string;
  alt: string;
  imageFit?: 'cover' | 'contain';
  onLoad?: () => void;
  priority?: boolean;
}

export const OptimizedMachineImage = memo(function OptimizedMachineImage({
  src,
  alt,
  imageFit = 'cover',
  onLoad,
  priority = false,
}: OptimizedMachineImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleLoad = useCallback(() => {
    setLoaded(true);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setError(true);
    onLoad?.(); // Still trigger onLoad to show content
  }, [onLoad]);

  // Check if image is already cached
  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current?.naturalHeight !== 0) {
      handleLoad();
    }
  }, [handleLoad]);

  return (
    <div className="w-full h-full relative">
      {/* Skeleton placeholder */}
      {!loaded && !error && (
        <div className="absolute inset-0 bg-muted/40 animate-pulse" />
      )}
      
      {/* Main image */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`w-full h-full ${imageFit === 'contain' ? 'object-contain' : 'object-cover'} scale-105 transition-opacity duration-300 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ objectPosition: 'center' }}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'low'}
        onLoad={handleLoad}
        onError={handleError}
        // Reduce image quality via CSS rendering
        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
      />
    </div>
  );
});
