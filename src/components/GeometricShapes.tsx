import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface GeometricShapesProps {
  variant?: 'hero' | 'section';
  intensity?: number;
}

export function GeometricShapes({ variant = 'section', intensity = 1 }: GeometricShapesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [100 * intensity, -100 * intensity]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-80 * intensity, 80 * intensity]);
  const y3 = useTransform(scrollYProgress, [0, 1], [60 * intensity, -60 * intensity]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 180 * intensity]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -120 * intensity]);
  const scale1 = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const isHero = variant === 'hero';

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large hexagon */}
      <motion.div 
        className={`absolute ${isHero ? '-top-20 -right-20' : 'top-10 right-10'} ${isHero ? 'w-[400px] h-[400px]' : 'w-[300px] h-[300px]'} border-2 border-primary/30`}
        style={{ 
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          y: y1,
          rotate: rotate1,
          opacity
        }}
      />
      
      {/* Diamond shape */}
      <motion.div 
        className={`absolute ${isHero ? 'top-1/3 -left-16' : 'top-1/4 left-10'} ${isHero ? 'w-32 h-32' : 'w-24 h-24'} border-2 border-primary/40 rotate-45`}
        style={{ y: y2, opacity }}
        animate={{ 
          boxShadow: ['0 0 20px hsl(48 100% 50% / 0.2)', '0 0 40px hsl(48 100% 50% / 0.4)', '0 0 20px hsl(48 100% 50% / 0.2)']
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      {/* Glowing circle */}
      <motion.div 
        className={`absolute ${isHero ? 'bottom-40 left-10' : 'bottom-20 left-1/4'} ${isHero ? 'w-24 h-24' : 'w-20 h-20'} rounded-full border-2 border-primary/35`}
        style={{ y: y3, scale: scale1, opacity }}
        animate={{ 
          boxShadow: ['0 0 30px hsl(48 100% 50% / 0.3)', '0 0 60px hsl(48 100% 50% / 0.5)', '0 0 30px hsl(48 100% 50% / 0.3)']
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      {/* Triangle */}
      <motion.div 
        className="absolute top-24 left-1/4 w-0 h-0"
        style={{ 
          borderLeft: '35px solid transparent',
          borderRight: '35px solid transparent',
          borderBottom: '60px solid hsl(48 100% 50% / 0.25)',
          y: y2,
          rotate: rotate2,
          opacity
        }}
      />
      
      {/* Animated squares */}
      <motion.div 
        className={`absolute ${isHero ? 'top-1/2 right-20' : 'top-1/3 right-16'} w-10 h-10 border-2 border-primary/40`}
        style={{ y: y1, rotate: rotate1, opacity }}
        animate={{ 
          boxShadow: ['0 0 15px hsl(48 100% 50% / 0.2)', '0 0 30px hsl(48 100% 50% / 0.4)', '0 0 15px hsl(48 100% 50% / 0.2)']
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div 
        className={`absolute ${isHero ? 'top-1/2 right-36 mt-12' : 'bottom-1/3 right-24'} w-6 h-6 bg-primary/30`}
        style={{ y: y3, scale: scale1, opacity }}
      />
      
      {/* Horizontal line accents */}
      <motion.div 
        className="absolute top-1/4 left-0 w-48 h-[3px] bg-gradient-to-r from-primary/60 to-transparent"
        style={{ y: y2, opacity }}
        animate={{ x: [-200, 0, -200] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-0 w-48 h-[3px] bg-gradient-to-l from-primary/60 to-transparent"
        style={{ y: y1, opacity }}
        animate={{ x: [200, 0, 200] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      {/* Rotating dotted circle */}
      <motion.svg 
        className={`absolute ${isHero ? 'bottom-1/4 right-1/4' : 'top-1/2 right-1/3'} ${isHero ? 'w-48 h-48' : 'w-36 h-36'}`}
        viewBox="0 0 100 100"
        style={{ opacity }}
      >
        <motion.circle 
          cx="50" cy="50" r="45" 
          fill="none" 
          stroke="hsl(48 100% 50% / 0.35)" 
          strokeWidth="2" 
          strokeDasharray="8 8"
          style={{ rotate: rotate1 }}
        />
      </motion.svg>
      
      {/* Corner brackets */}
      <motion.div 
        className="absolute top-16 right-32 w-20 h-20 border-t-2 border-r-2 border-primary/40"
        style={{ y: y3, opacity }}
      />
      <motion.div 
        className="absolute bottom-24 left-32 w-20 h-20 border-b-2 border-l-2 border-primary/40"
        style={{ y: y1, opacity }}
      />
      
      {/* Plus signs */}
      <motion.div 
        className="absolute top-1/3 right-1/4"
        style={{ y: y2, rotate: rotate2, opacity }}
      >
        <div className="w-8 h-[3px] bg-primary/50 absolute top-1/2 left-0 -translate-y-1/2" />
        <div className="h-8 w-[3px] bg-primary/50 absolute left-1/2 top-0 -translate-x-1/2" />
      </motion.div>
      
      {/* Floating dots */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary/50"
          style={{
            left: `${15 + i * 20}%`,
            top: `${20 + (i % 3) * 30}%`,
            y: i % 2 === 0 ? y1 : y2,
            opacity
          }}
          animate={{
            scale: [1, 1.5, 1],
            boxShadow: ['0 0 10px hsl(48 100% 50% / 0.3)', '0 0 20px hsl(48 100% 50% / 0.6)', '0 0 10px hsl(48 100% 50% / 0.3)']
          }}
          transition={{ duration: 2 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
        />
      ))}
    </div>
  );
}