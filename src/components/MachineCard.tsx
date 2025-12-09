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
  specs?: {
    engine?: string;
    weight?: string;
    capacity?: string;
  };
  gallery?: string[];
}

interface MachineCardProps {
  machine: Machine;
  index: number;
  onViewDetails: (machine: Machine) => void;
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: [0.25, 0.46, 0.45, 0.94],
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

        {/* Image Container with lazy loading */}
        <div className="relative overflow-hidden" style={{ transform: 'translateZ(20px)' }}>
          <OptimizedImage
            src={machine.image}
            alt={machine.name}
            className="group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Discount Badge with pulse */}
          <motion.div 
            className="absolute top-3 left-3 sm:top-4 sm:left-4 badge-discount"
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

          {/* Premium hot deal indicator */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-3 py-1.5 rounded-full bg-secondary/90 text-[10px] sm:text-xs font-bold text-foreground backdrop-blur-sm border border-border/30">
            HOT DEAL
          </div>

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 relative" style={{ transform: 'translateZ(30px)' }}>
          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-foreground leading-tight line-clamp-2">
            {machine.name}
          </h3>

          {/* Meta info with premium styling */}
          <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5 bg-muted/40 px-2.5 py-1.5 rounded-full border border-border/20">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
              {machine.year} • {machine.hours.toLocaleString()} hrs
            </span>
            <span className="flex items-center gap-1.5 bg-muted/40 px-2.5 py-1.5 rounded-full border border-border/20">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground" />
              {machine.location}
            </span>
          </div>

          {/* Price with luxury glow */}
          <div className="flex items-baseline gap-2 sm:gap-3">
            <span 
              className="text-2xl sm:text-3xl font-black text-primary"
              style={{ textShadow: '0 0 30px hsl(48 100% 50% / 0.4)' }}
            >
              ${machine.price.toLocaleString()}
            </span>
            <span className="text-sm sm:text-lg line-through text-muted-foreground/70">
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