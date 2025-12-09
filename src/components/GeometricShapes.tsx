import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useMemo } from 'react';

interface GeometricShapesProps {
  variant?: 'hero' | 'section';
  intensity?: number;
}

export function GeometricShapes({ variant = 'section', intensity = 1 }: GeometricShapesProps) {
  const { scrollY } = useScroll();
  
  // Smooth spring config for buttery animations
  const springConfig = { stiffness: 50, damping: 30, mass: 1 };
  
  // Raw transforms based on scroll position
  const rawY1 = useTransform(scrollY, [0, 3000], [0, -400 * intensity]);
  const rawY2 = useTransform(scrollY, [0, 3000], [0, 300 * intensity]);
  const rawY3 = useTransform(scrollY, [0, 3000], [0, -200 * intensity]);
  const rawRotate1 = useTransform(scrollY, [0, 3000], [0, 360 * intensity]);
  const rawRotate2 = useTransform(scrollY, [0, 3000], [0, -180 * intensity]);
  
  // Apply springs for smooth movement
  const y1 = useSpring(rawY1, springConfig);
  const y2 = useSpring(rawY2, springConfig);
  const y3 = useSpring(rawY3, springConfig);
  const rotate1 = useSpring(rawRotate1, springConfig);
  const rotate2 = useSpring(rawRotate2, springConfig);

  const isHero = variant === 'hero';

  const shapes = useMemo(() => [
    // Large hexagon - top right
    {
      type: 'hexagon',
      className: `absolute ${isHero ? '-top-10 -right-10' : 'top-[5%] right-[5%]'} ${isHero ? 'w-[350px] h-[350px]' : 'w-[280px] h-[280px]'} border-2 border-primary/40`,
      style: { clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' },
      parallax: 'y1',
      rotate: 'rotate1',
      glow: true
    },
    // Diamond - left side
    {
      type: 'diamond',
      className: `absolute ${isHero ? 'top-[30%] -left-8' : 'top-[20%] left-[8%]'} ${isHero ? 'w-28 h-28' : 'w-20 h-20'} border-2 border-primary/50 rotate-45`,
      parallax: 'y2',
      pulseGlow: true
    },
    // Large circle - bottom left
    {
      type: 'circle',
      className: `absolute ${isHero ? 'bottom-[25%] left-[5%]' : 'bottom-[30%] left-[15%]'} ${isHero ? 'w-20 h-20' : 'w-16 h-16'} rounded-full border-2 border-primary/45`,
      parallax: 'y3',
      pulseGlow: true
    },
    // Small squares cluster - right side
    {
      type: 'square',
      className: `absolute ${isHero ? 'top-[45%] right-[10%]' : 'top-[40%] right-[12%]'} w-8 h-8 border-2 border-primary/50`,
      parallax: 'y1',
      rotate: 'rotate1',
      pulseGlow: true
    },
    {
      type: 'squareFilled',
      className: `absolute ${isHero ? 'top-[50%] right-[15%]' : 'top-[45%] right-[18%]'} w-5 h-5 bg-primary/40`,
      parallax: 'y3'
    },
    // Corner brackets - decorative
    {
      type: 'bracket',
      className: 'absolute top-[10%] right-[20%] w-16 h-16 border-t-2 border-r-2 border-primary/45',
      parallax: 'y3'
    },
    {
      type: 'bracket',
      className: 'absolute bottom-[15%] left-[20%] w-16 h-16 border-b-2 border-l-2 border-primary/45',
      parallax: 'y1'
    },
    // Plus sign
    {
      type: 'plus',
      className: `absolute ${isHero ? 'top-[35%] right-[25%]' : 'top-[25%] right-[30%]'}`,
      parallax: 'y2',
      rotate: 'rotate2'
    },
    // Line accents
    {
      type: 'lineLeft',
      className: 'absolute top-[20%] left-0 w-40 h-[2px] bg-gradient-to-r from-primary/60 to-transparent',
      parallax: 'y2',
      animate: 'slideX'
    },
    {
      type: 'lineRight',
      className: 'absolute bottom-[20%] right-0 w-40 h-[2px] bg-gradient-to-l from-primary/60 to-transparent',
      parallax: 'y1',
      animate: 'slideX'
    }
  ], [isHero]);

  const getParallax = (type: string) => {
    switch(type) {
      case 'y1': return y1;
      case 'y2': return y2;
      case 'y3': return y3;
      default: return y1;
    }
  };

  const getRotate = (type: string) => {
    switch(type) {
      case 'rotate1': return rotate1;
      case 'rotate2': return rotate2;
      default: return undefined;
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ willChange: 'transform' }}>
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className={shape.className}
          style={{
            y: getParallax(shape.parallax || 'y1'),
            rotate: shape.rotate ? getRotate(shape.rotate) : undefined,
            ...shape.style,
            willChange: 'transform',
            transform: 'translateZ(0)'
          }}
          animate={shape.pulseGlow ? {
            boxShadow: ['0 0 20px hsl(48 100% 50% / 0.3)', '0 0 40px hsl(48 100% 50% / 0.5)', '0 0 20px hsl(48 100% 50% / 0.3)']
          } : shape.animate === 'slideX' ? {
            x: shape.className.includes('left-0') ? [-100, 0, -100] : [100, 0, 100]
          } : undefined}
          transition={shape.pulseGlow ? { duration: 3, repeat: Infinity, ease: 'easeInOut' } : { duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          {shape.type === 'plus' && (
            <>
              <div className="w-6 h-[2px] bg-primary/55 absolute top-1/2 left-0 -translate-y-1/2" />
              <div className="h-6 w-[2px] bg-primary/55 absolute left-1/2 top-0 -translate-x-1/2" />
            </>
          )}
        </motion.div>
      ))}

      {/* Dotted rotating circle */}
      <motion.svg 
        className={`absolute ${isHero ? 'bottom-[30%] right-[30%]' : 'top-[60%] right-[25%]'} ${isHero ? 'w-40 h-40' : 'w-32 h-32'}`}
        viewBox="0 0 100 100"
        style={{ y: y2, willChange: 'transform' }}
      >
        <motion.circle 
          cx="50" cy="50" r="45" 
          fill="none" 
          stroke="hsl(48 100% 50% / 0.40)" 
          strokeWidth="2" 
          strokeDasharray="6 6"
          style={{ rotate: rotate1 }}
        />
      </motion.svg>

      {/* Triangle */}
      <motion.div 
        className="absolute top-[15%] left-[30%] w-0 h-0"
        style={{ 
          borderLeft: '25px solid transparent',
          borderRight: '25px solid transparent',
          borderBottom: '45px solid hsl(48 100% 50% / 0.30)',
          y: y2,
          rotate: rotate2,
          willChange: 'transform'
        }}
      />

      {/* Floating dots */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-2 h-2 rounded-full bg-primary/55"
          style={{
            left: `${12 + i * 15}%`,
            top: `${15 + (i % 4) * 22}%`,
            y: i % 2 === 0 ? y1 : y3,
            willChange: 'transform'
          }}
          animate={{
            scale: [1, 1.4, 1],
            boxShadow: ['0 0 8px hsl(48 100% 50% / 0.4)', '0 0 16px hsl(48 100% 50% / 0.6)', '0 0 8px hsl(48 100% 50% / 0.4)']
          }}
          transition={{ duration: 2 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
        />
      ))}
    </div>
  );
}
