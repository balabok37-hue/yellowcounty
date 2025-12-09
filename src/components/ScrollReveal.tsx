import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode, useMemo } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  parallax?: boolean;
  parallaxIntensity?: number;
}

export function ScrollReveal({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up',
  parallax = false,
  parallaxIntensity = 30
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Optimized transforms with GPU acceleration
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);
  
  const directions = useMemo(() => ({
    up: { y: [60, 0, 0, -60] },
    down: { y: [-60, 0, 0, 60] },
    left: { x: [60, 0, 0, -60] },
    right: { x: [-60, 0, 0, 60] }
  }), []);

  const translateY = useTransform(
    scrollYProgress, 
    [0, 0.2, 0.8, 1], 
    direction === 'up' || direction === 'down' ? directions[direction].y : [0, 0, 0, 0]
  );
  
  const translateX = useTransform(
    scrollYProgress, 
    [0, 0.2, 0.8, 1], 
    direction === 'left' || direction === 'right' ? directions[direction].x : [0, 0, 0, 0]
  );

  const parallaxY = useTransform(scrollYProgress, [0, 1], [parallaxIntensity, -parallaxIntensity]);

  return (
    <motion.div
      ref={ref}
      style={{ 
        opacity,
        scale,
        x: translateX,
        y: parallax ? parallaxY : translateY,
        willChange: 'transform, opacity',
        transform: 'translateZ(0)'
      }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Optimized card reveal for grids
interface CardRevealProps {
  children: ReactNode;
  className?: string;
  index?: number;
}

export function CardReveal({ children, className = '', index = 0 }: CardRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [80, 0, 0, -80]);
  const scale = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.85, 1, 1, 0.85]);

  return (
    <motion.div
      ref={ref}
      style={{ 
        opacity,
        y,
        scale,
        willChange: 'transform, opacity',
        transform: 'translateZ(0)'
      }}
      transition={{ delay: index * 0.05 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
