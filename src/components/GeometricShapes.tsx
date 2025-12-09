import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationFrame } from 'framer-motion';
import { useRef, useMemo } from 'react';

interface GeometricShapesProps {
  variant?: 'hero' | 'section';
  intensity?: number;
}

export function GeometricShapes({ intensity = 1 }: GeometricShapesProps) {
  const { scrollY } = useScroll();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const time = useRef(0);
  
  // Track mouse for interactive parallax
  if (typeof window !== 'undefined') {
    window.addEventListener('mousemove', (e) => {
      mouseX.set((e.clientX - window.innerWidth / 2) * 0.02);
      mouseY.set((e.clientY - window.innerHeight / 2) * 0.02);
    }, { passive: true });
  }

  // Smooth spring config
  const springConfig = { stiffness: 30, damping: 20, mass: 1 };
  
  // Scroll-based parallax
  const rawY1 = useTransform(scrollY, [0, 3000], [0, -500 * intensity]);
  const rawY2 = useTransform(scrollY, [0, 3000], [0, 400 * intensity]);
  const rawY3 = useTransform(scrollY, [0, 3000], [0, -300 * intensity]);
  const rawRotate1 = useTransform(scrollY, [0, 3000], [0, 540 * intensity]);
  const rawRotate2 = useTransform(scrollY, [0, 3000], [0, -360 * intensity]);
  
  // Smooth springs
  const y1 = useSpring(rawY1, springConfig);
  const y2 = useSpring(rawY2, springConfig);
  const y3 = useSpring(rawY3, springConfig);
  const rotate1 = useSpring(rawRotate1, springConfig);
  const rotate2 = useSpring(rawRotate2, springConfig);
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 30 });

  // Animated floating values
  const float1 = useMotionValue(0);
  const float2 = useMotionValue(0);
  const float3 = useMotionValue(0);
  const pulse1 = useMotionValue(1);
  const pulse2 = useMotionValue(1);

  // Continuous animation loop for floating effect
  useAnimationFrame((t) => {
    time.current = t / 1000;
    float1.set(Math.sin(time.current * 0.5) * 20);
    float2.set(Math.cos(time.current * 0.4) * 25);
    float3.set(Math.sin(time.current * 0.6 + 1) * 15);
    pulse1.set(1 + Math.sin(time.current * 2) * 0.1);
    pulse2.set(1 + Math.cos(time.current * 1.5) * 0.15);
  });

  const shapes = useMemo(() => [
    // Large hexagon - interactive
    { id: 'hex1', type: 'hexagon', x: '85%', y: '5%', size: 320, parallax: y1, rotate: rotate1, interactive: true },
    // Diamond cluster
    { id: 'diamond1', type: 'diamond', x: '8%', y: '25%', size: 100, parallax: y2, float: float1, glow: true },
    { id: 'diamond2', type: 'diamond', x: '12%', y: '30%', size: 50, parallax: y3, float: float2 },
    // Circles with pulse
    { id: 'circle1', type: 'circle', x: '5%', y: '60%', size: 80, parallax: y3, pulse: pulse1, glow: true },
    { id: 'circle2', type: 'circle', x: '90%', y: '45%', size: 60, parallax: y1, pulse: pulse2 },
    { id: 'circle3', type: 'circle', x: '75%', y: '70%', size: 40, parallax: y2, float: float3 },
    // Squares
    { id: 'sq1', type: 'square', x: '80%', y: '35%', size: 35, parallax: y1, rotate: rotate1, glow: true },
    { id: 'sq2', type: 'squareFilled', x: '85%', y: '40%', size: 20, parallax: y3 },
    { id: 'sq3', type: 'square', x: '15%', y: '75%', size: 45, parallax: y2, rotate: rotate2 },
    // Corner brackets
    { id: 'br1', type: 'bracketTR', x: '70%', y: '10%', size: 70, parallax: y3 },
    { id: 'br2', type: 'bracketBL', x: '20%', y: '85%', size: 60, parallax: y1 },
    // Plus signs
    { id: 'plus1', type: 'plus', x: '65%', y: '30%', size: 30, parallax: y2, rotate: rotate2 },
    { id: 'plus2', type: 'plus', x: '25%', y: '50%', size: 25, parallax: y1, rotate: rotate1 },
    // Triangles
    { id: 'tri1', type: 'triangle', x: '30%', y: '15%', size: 50, parallax: y2, rotate: rotate2, float: float1 },
    { id: 'tri2', type: 'triangle', x: '60%', y: '80%', size: 35, parallax: y3, rotate: rotate1 },
  ], [y1, y2, y3, rotate1, rotate2, float1, float2, float3, pulse1, pulse2]);

  const renderShape = (shape: typeof shapes[0]) => {
    const baseStyle = {
      left: shape.x,
      top: shape.y,
      y: shape.parallax,
      rotate: shape.rotate,
      x: shape.interactive ? smoothMouseX : shape.float,
      scale: shape.pulse,
      willChange: 'transform' as const,
    };

    switch (shape.type) {
      case 'hexagon':
        return (
          <motion.div
            key={shape.id}
            className="absolute border-2 border-primary/50"
            style={{
              ...baseStyle,
              width: shape.size,
              height: shape.size,
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            }}
            animate={{ 
              boxShadow: ['0 0 30px hsl(48 100% 50% / 0.2)', '0 0 60px hsl(48 100% 50% / 0.4)', '0 0 30px hsl(48 100% 50% / 0.2)']
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
        );
      case 'diamond':
        return (
          <motion.div
            key={shape.id}
            className={`absolute border-2 border-primary/55 rotate-45`}
            style={{ ...baseStyle, width: shape.size, height: shape.size }}
            animate={shape.glow ? { 
              boxShadow: ['0 0 15px hsl(48 100% 50% / 0.3)', '0 0 35px hsl(48 100% 50% / 0.6)', '0 0 15px hsl(48 100% 50% / 0.3)']
            } : undefined}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        );
      case 'circle':
        return (
          <motion.div
            key={shape.id}
            className="absolute rounded-full border-2 border-primary/50"
            style={{ ...baseStyle, width: shape.size, height: shape.size }}
            animate={shape.glow ? { 
              boxShadow: ['0 0 20px hsl(48 100% 50% / 0.3)', '0 0 50px hsl(48 100% 50% / 0.5)', '0 0 20px hsl(48 100% 50% / 0.3)']
            } : undefined}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
        );
      case 'square':
        return (
          <motion.div
            key={shape.id}
            className="absolute border-2 border-primary/55"
            style={{ ...baseStyle, width: shape.size, height: shape.size }}
            animate={shape.glow ? { 
              boxShadow: ['0 0 15px hsl(48 100% 50% / 0.25)', '0 0 30px hsl(48 100% 50% / 0.45)', '0 0 15px hsl(48 100% 50% / 0.25)']
            } : undefined}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        );
      case 'squareFilled':
        return (
          <motion.div
            key={shape.id}
            className="absolute bg-primary/45"
            style={{ ...baseStyle, width: shape.size, height: shape.size }}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
        );
      case 'bracketTR':
        return (
          <motion.div
            key={shape.id}
            className="absolute border-t-2 border-r-2 border-primary/50"
            style={{ ...baseStyle, width: shape.size, height: shape.size }}
          />
        );
      case 'bracketBL':
        return (
          <motion.div
            key={shape.id}
            className="absolute border-b-2 border-l-2 border-primary/50"
            style={{ ...baseStyle, width: shape.size, height: shape.size }}
          />
        );
      case 'plus':
        return (
          <motion.div key={shape.id} className="absolute" style={baseStyle}>
            <div className="absolute bg-primary/55" style={{ width: shape.size, height: 2, top: '50%', left: 0, transform: 'translateY(-50%)' }} />
            <div className="absolute bg-primary/55" style={{ width: 2, height: shape.size, left: '50%', top: 0, transform: 'translateX(-50%)' }} />
          </motion.div>
        );
      case 'triangle':
        return (
          <motion.div
            key={shape.id}
            className="absolute"
            style={{
              ...baseStyle,
              width: 0,
              height: 0,
              borderLeft: `${shape.size / 2}px solid transparent`,
              borderRight: `${shape.size / 2}px solid transparent`,
              borderBottom: `${shape.size}px solid hsl(48 100% 50% / 0.35)`,
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[1]" style={{ willChange: 'transform' }}>
      {/* Render all shapes */}
      {shapes.map(renderShape)}

      {/* Dotted rotating circle - large */}
      <motion.svg 
        className="absolute w-52 h-52"
        viewBox="0 0 100 100"
        style={{ left: '70%', top: '55%', y: y2, willChange: 'transform' }}
      >
        <motion.circle 
          cx="50" cy="50" r="45" 
          fill="none" 
          stroke="hsl(48 100% 50% / 0.40)" 
          strokeWidth="1.5" 
          strokeDasharray="5 5"
          style={{ rotate: rotate1 }}
        />
      </motion.svg>

      {/* Dotted circle - small */}
      <motion.svg 
        className="absolute w-24 h-24"
        viewBox="0 0 100 100"
        style={{ left: '15%', top: '40%', y: y3, willChange: 'transform' }}
      >
        <motion.circle 
          cx="50" cy="50" r="45" 
          fill="none" 
          stroke="hsl(48 100% 50% / 0.35)" 
          strokeWidth="2" 
          strokeDasharray="3 6"
          style={{ rotate: rotate2 }}
        />
      </motion.svg>

      {/* Animated lines */}
      <motion.div 
        className="absolute top-[18%] left-0 h-[2px] bg-gradient-to-r from-primary/60 to-transparent"
        style={{ y: y2, width: 180, willChange: 'transform' }}
        animate={{ x: [-150, 50, -150], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div 
        className="absolute bottom-[22%] right-0 h-[2px] bg-gradient-to-l from-primary/60 to-transparent"
        style={{ y: y1, width: 200, willChange: 'transform' }}
        animate={{ x: [150, -50, 150], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div 
        className="absolute top-[65%] left-[40%] w-[2px] bg-gradient-to-b from-primary/50 to-transparent"
        style={{ x: smoothMouseX, height: 100, willChange: 'transform' }}
        animate={{ y: [-30, 30, -30], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full bg-primary/60"
          style={{
            left: `${8 + i * 8}%`,
            top: `${12 + (i % 5) * 18}%`,
            width: 3 + (i % 3) * 2,
            height: 3 + (i % 3) * 2,
            y: i % 3 === 0 ? y1 : i % 3 === 1 ? y2 : y3,
            willChange: 'transform'
          }}
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.4, 0.9, 0.4],
            boxShadow: ['0 0 5px hsl(48 100% 50% / 0.4)', '0 0 15px hsl(48 100% 50% / 0.8)', '0 0 5px hsl(48 100% 50% / 0.4)']
          }}
          transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.15 }}
        />
      ))}

      {/* Orbiting dots */}
      <motion.div
        className="absolute"
        style={{ left: '50%', top: '50%', willChange: 'transform' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        {[0, 120, 240].map((angle, i) => (
          <motion.div
            key={`orbit-${i}`}
            className="absolute w-2 h-2 rounded-full bg-primary/50"
            style={{
              transform: `rotate(${angle}deg) translateX(150px)`,
            }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
          />
        ))}
      </motion.div>
    </div>
  );
}
