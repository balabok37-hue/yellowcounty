import { useEffect, useRef } from 'react';
import type { Machine } from '@/components/MachineCard';

/**
 * Preloads critical images for faster LCP
 * Preloads first N machine images with high priority
 */
export function useCriticalImagePreload(machines: Machine[], count: number = 6) {
  const preloadedRef = useRef<Set<string>>(new Set());
  
  useEffect(() => {
    if (machines.length === 0) return;
    
    const criticalMachines = machines.slice(0, count);
    const links: HTMLLinkElement[] = [];
    
    criticalMachines.forEach((machine, index) => {
      const imageUrl = machine.image;
      
      // Skip if already preloaded
      if (preloadedRef.current.has(imageUrl)) return;
      
      // Create preload link
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = imageUrl;
      
      // First 3 images get high priority
      if (index < 3) {
        link.fetchPriority = 'high';
      }
      
      document.head.appendChild(link);
      links.push(link);
      preloadedRef.current.add(imageUrl);
    });
    
    return () => {
      // Cleanup preload links on unmount
      links.forEach(link => {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
    };
  }, [machines, count]);
}

/**
 * Preloads adjacent images in a gallery for smooth navigation
 * Now also preloads ALL thumbnails for instant display
 */
export function useGalleryPreload(
  images: string[],
  currentIndex: number,
  preloadCount: number = 2
) {
  const preloadedRef = useRef<Set<string>>(new Set());
  
  useEffect(() => {
    if (images.length <= 1) return;
    
    // Preload ALL images for thumbnails (they're small enough)
    images.forEach((src, idx) => {
      if (preloadedRef.current.has(src)) return;
      
      const img = new Image();
      img.src = src;
      preloadedRef.current.add(src);
    });
  }, [images]);
  
  useEffect(() => {
    if (images.length <= 1) return;
    
    const toPreload: number[] = [];
    
    // Preload next N images with high priority
    for (let i = 1; i <= preloadCount; i++) {
      const nextIndex = (currentIndex + i) % images.length;
      if (nextIndex !== currentIndex) {
        toPreload.push(nextIndex);
      }
    }
    
    // Preload previous image
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    if (prevIndex !== currentIndex && !toPreload.includes(prevIndex)) {
      toPreload.push(prevIndex);
    }
    
    // Create Image objects with high priority for adjacent images
    toPreload.forEach(idx => {
      const img = new Image();
      img.fetchPriority = 'high';
      img.src = images[idx];
    });
  }, [images, currentIndex, preloadCount]);
}
