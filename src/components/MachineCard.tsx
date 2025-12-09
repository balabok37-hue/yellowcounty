import { motion } from 'framer-motion';
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
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      custom={index}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ 
        scale: 0.98,
        y: 0,
        transition: { duration: 0.15 }
      }}
      onClick={() => onViewDetails(machine)}
      className="group cursor-pointer touch-manipulation"
    >
      <div className="glass-card overflow-hidden relative">
        {/* Premium border glow on hover */}
        <motion.div 
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ 
            background: 'linear-gradient(135deg, hsl(45 100% 50% / 0.1), transparent, hsl(45 100% 50% / 0.1))',
            boxShadow: 'inset 0 0 30px hsl(45 100% 50% / 0.05)'
          }}
        />

        {/* Image Container with lazy loading */}
        <div className="relative overflow-hidden">
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
                "0 0 15px hsl(45 100% 50% / 0.4)",
                "0 0 25px hsl(45 100% 50% / 0.6)",
                "0 0 15px hsl(45 100% 50% / 0.4)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            −{machine.discount}%
          </motion.div>

          {/* Premium hot deal indicator */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2 py-1 rounded-full bg-accent/90 text-[10px] sm:text-xs font-bold text-white backdrop-blur-sm">
            HOT DEAL
          </div>

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 relative">
          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-foreground leading-tight line-clamp-2">
            {machine.name}
          </h3>

          {/* Meta info with premium styling */}
          <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5 bg-muted/30 px-2 py-1 rounded-full">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
              {machine.year} • {machine.hours.toLocaleString()} hrs
            </span>
            <span className="flex items-center gap-1.5 bg-muted/30 px-2 py-1 rounded-full">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" />
              {machine.location}
            </span>
          </div>

          {/* Price with luxury glow */}
          <div className="flex items-baseline gap-2 sm:gap-3">
            <span 
              className="text-2xl sm:text-3xl font-black text-primary"
              style={{ textShadow: '0 0 25px hsl(45 100% 50% / 0.4)' }}
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
              className="w-full h-12 sm:h-14 text-base sm:text-lg font-bold rounded-xl bg-gradient-to-r from-primary via-primary to-accent text-primary-foreground shadow-lg relative overflow-hidden group/btn"
              style={{ 
                boxShadow: '0 0 25px hsl(45 100% 50% / 0.3), 0 4px 20px hsl(0 0% 0% / 0.4)' 
              }}
            >
              {/* Shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
              <span className="relative flex items-center justify-center gap-2">
                <Eye className="w-5 h-5" />
                View Details
              </span>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
