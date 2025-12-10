import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MapPin, Clock, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { OptimizedImage } from './OptimizedImage';

export interface Machine {
  id: number;
  name: string;
  year: number;
  hours: number;
  location: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  imageFit?: 'cover' | 'contain';
  isHotOffer?: boolean;
  imagePosition?: string;
  description?: string;
  specs?: {
    engine?: string;
    power?: string;
    weight?: string;
    capacity?: string;
    maxDiggingDepth?: string;
    maxReach?: string;
    maxDumpingHeight?: string;
    bucketCapacity?: string;
    bucketDiggingForce?: string;
    armDiggingForce?: string;
    swingSpeed?: string;
    travelSpeed?: string;
    tailSwing?: string;
    transportDimensions?: string;
    trackWidth?: string;
    fuelTank?: string;
    hydraulicTank?: string;
    // Wheel loader specific
    grossTorque?: string;
    displacement?: string;
    breakoutForce?: string;
    tippingLoad?: string;
    maxDumpHeight?: string;
    maxLiftHeight?: string;
    maxSpeed?: string;
    turningRadius?: string;
    tireSize?: string;
    // Telehandler specific
    maxLiftCapacity?: string;
    liftHeight?: string;
    forwardReach?: string;
    capacityAtMaxReach?: string;
    transmission?: string;
    outriggers?: string;
    hydraulicFlow?: string;
    // Forklift specific
    driveSteer?: string;
    frameLeveling?: string;
    tires?: string;
    capacityAtMaxHeight?: string;
    groundClearance?: string;
    // Tractor specific
    frontAxle?: string;
    cab?: string;
    pto?: string;
    // Semi truck specific
    rearAxleRatio?: string;
    wheelbase?: string;
    suspension?: string;
    brakes?: string;
    wheels?: string;
    sleeper?: string;
    gvwr?: string;
    rearAxles?: string;
    exhaust?: string;
    // Dump truck specific
    ratio?: string;
    dumpBody?: string;
    status?: string;
    stockNumber?: string;
    // Roller specific
    drumWidth?: string;
    frequency?: string;
    centrifugalForce?: string;
    waterTank?: string;
    cabRops?: string;
    features?: string;
  };
  gallery?: string[];
}

interface MachineCardProps {
  machine: Machine;
  index: number;
  onViewDetails: (machine: Machine) => void;
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 80, 
    scale: 0.8,
    rotateX: 15,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: [0.16, 1, 0.3, 1], // Smooth spring-like easing
      opacity: { duration: 0.5 },
      scale: { duration: 0.6 },
      rotateX: { duration: 0.8 },
    },
  }),
};

export function MachineCard({ machine, index, onViewDetails }: MachineCardProps) {
  // 3D Tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      custom={index}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onViewDetails(machine)}
      className="group cursor-pointer touch-manipulation perspective-1000"
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="glass-card overflow-hidden relative"
      >
        {/* Premium border glow on hover */}
        <motion.div 
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
          style={{ 
            background: 'linear-gradient(135deg, hsl(48 100% 50% / 0.15), transparent, hsl(48 100% 50% / 0.15))',
            boxShadow: 'inset 0 0 40px hsl(48 100% 50% / 0.08)'
          }}
        />

        {/* 3D highlight layer */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none z-20"
          style={{
            background: 'linear-gradient(135deg, hsl(0 0% 100% / 0.15) 0%, transparent 50%, hsl(0 0% 0% / 0.2) 100%)',
            opacity: 0,
          }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Full background image with lazy loading and blur placeholder */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="w-full h-full group-hover:scale-110 transition-transform duration-700">
            {/* Image container with bottom crop to hide watermarks */}
            <div className="w-full h-full relative overflow-hidden" style={{ marginBottom: '-30px', paddingBottom: '30px' }}>
              <img
                src={machine.image}
                alt={machine.name}
                className={`w-full h-full ${machine.imageFit === 'contain' ? 'object-contain' : 'object-cover'} scale-105`}
                style={{ objectPosition: 'center' }}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          
          {/* Gradient fade where text starts */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 via-50% to-background" />
        </div>
          
        {/* Discount Badge with pulse */}
        <motion.div 
          className="absolute top-3 left-3 sm:top-4 sm:left-4 badge-discount z-10"
          animate={{ 
            boxShadow: [
              "0 0 20px hsl(48 100% 50% / 0.4)",
              "0 0 35px hsl(48 100% 50% / 0.6)",
              "0 0 20px hsl(48 100% 50% / 0.4)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          −{machine.discount}%
        </motion.div>

        {/* Premium hot deal indicator - only show for hot offers */}
        {machine.isHotOffer && (
          <motion.div 
            className="absolute top-3 right-3 sm:top-4 sm:right-4 px-3 py-1.5 rounded-full bg-destructive text-[10px] sm:text-xs font-bold text-destructive-foreground backdrop-blur-sm border border-destructive/50 z-10"
            animate={{ 
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 0 15px hsl(0 84% 60% / 0.4)",
                "0 0 25px hsl(0 84% 60% / 0.7)",
                "0 0 15px hsl(0 84% 60% / 0.4)"
              ]
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            🔥 HOT OFFER
          </motion.div>
        )}

        {/* Fixed height spacer for consistent card sizes */}
        <div className="h-64 sm:h-72 md:h-80" />

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 relative z-10" style={{ transform: 'translateZ(30px)' }}>
          {/* Title with fixed height for consistency */}
          <h3 
            className="text-lg sm:text-xl font-bold text-foreground leading-tight line-clamp-2 min-h-[2.75rem] sm:min-h-[3rem]"
            style={{ textShadow: '0 0 8px hsl(0 0% 0%), 0 0 16px hsl(0 0% 0% / 0.8), 0 2px 4px hsl(0 0% 0%)' }}
          >
            {machine.name}
          </h3>

          {/* Meta info with premium styling */}
          <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm">
            <span 
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-background/60 backdrop-blur-sm border border-border/30"
              style={{ textShadow: '0 1px 3px hsl(0 0% 0%)' }}
            >
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
              {machine.year} • {machine.hours.toLocaleString()} hrs
            </span>
            <span 
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-background/60 backdrop-blur-sm border border-border/30"
              style={{ textShadow: '0 1px 3px hsl(0 0% 0%)' }}
            >
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground" />
              {machine.location}
            </span>
          </div>

          {/* Price with luxury glow */}
          <div className="flex items-baseline gap-2 sm:gap-3">
            <span 
              className="text-2xl sm:text-3xl font-black text-primary"
              style={{ textShadow: '0 0 30px hsl(48 100% 50% / 0.4), 0 0 8px hsl(0 0% 0%), 0 2px 4px hsl(0 0% 0%)' }}
            >
              ${machine.price.toLocaleString()}
            </span>
            <span 
              className="text-sm sm:text-lg line-through text-muted-foreground"
              style={{ textShadow: '0 1px 3px hsl(0 0% 0%)' }}
            >
              ${machine.originalPrice.toLocaleString()}
            </span>
          </div>

          {/* Premium CTA Button */}
          <motion.div 
            className="pt-2"
            whileTap={{ scale: 0.97 }}
          >
            <Button
              className="w-full h-12 sm:h-14 text-base sm:text-lg font-bold rounded-xl bg-primary text-primary-foreground shadow-lg relative overflow-hidden group/btn hover:bg-primary/90"
              style={{ 
                boxShadow: '0 0 30px hsl(48 100% 50% / 0.3), 0 6px 25px hsl(0 0% 0% / 0.4)' 
              }}
            >
              {/* Shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
              <span className="relative flex items-center justify-center gap-2">
                <Eye className="w-5 h-5" />
                View Details
              </span>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}