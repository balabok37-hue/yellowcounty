import { useState, useCallback } from 'react';

// Preload a single image
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => resolve();
    img.src = src;
  });
};

// Preload multiple images in parallel
export const preloadImages = async (sources: string[]): Promise<void> => {
  await Promise.all(sources.map(preloadImage));
};

// Hook for tracking preload state
export function useImagePreloader() {
  const [isPreloading, setIsPreloading] = useState(false);
  const [preloadedSets, setPreloadedSets] = useState<Set<string>>(new Set());

  const preload = useCallback(async (sources: string[], setName: string) => {
    if (preloadedSets.has(setName)) return; // Already preloaded
    
    setIsPreloading(true);
    await preloadImages(sources);
    setPreloadedSets(prev => new Set(prev).add(setName));
    setIsPreloading(false);
  }, [preloadedSets]);

  return { isPreloading, preload, isPreloaded: (name: string) => preloadedSets.has(name) };
}
