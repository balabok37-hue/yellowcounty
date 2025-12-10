import { motion } from 'framer-motion';
import { MapPin, Clock, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { categoryInfo } from '@/data/machines';

export type MachineCategory = 'earthmoving' | 'loaders' | 'telehandlers' | 'trucks' | 'specialty';

export interface Machine {
  id: number;
  name: string;
  year: number;
  hours: number;
  miles?: number;
  location: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  imageFit?: 'cover' | 'contain';
  isHotOffer?: boolean;
  imagePosition?: string;
  category?: MachineCategory;
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
    grossTorque?: string;
    displacement?: string;
    breakoutForce?: string;
    tippingLoad?: string;
    maxDumpHeight?: string;
    maxLiftHeight?: string;
    maxSpeed?: string;
    turningRadius?: string;
    tireSize?: string;
    maxLiftCapacity?: string;
    liftHeight?: string;
    forwardReach?: string;
    capacityAtMaxReach?: string;
    transmission?: string;
    outriggers?: string;
    hydraulicFlow?: string;
    driveSteer?: string;
    frameLeveling?: string;
    tires?: string;
    capacityAtMaxHeight?: string;
    groundClearance?: string;
    frontAxle?: string;
    cab?: string;
    pto?: string;
    rearAxleRatio?: string;
    wheelbase?: string;
    suspension?: string;
    brakes?: string;
    wheels?: string;
    sleeper?: string;
    gvwr?: string;
    rearAxles?: string;
    exhaust?: string;
    ratio?: string;
    dumpBody?: string;
    status?: string;
    stockNumber?: string;
    drumWidth?: string;
    frequency?: string;
    centrifugalForce?: string;
    waterTank?: string;
    cabRops?: string;
    features?: string;
    package?: string;
    interior?: string;
    towingCapacity?: string;
    warranty?: string;
    carfax?: string;
    drivetrain?: string;
    aerialDevice?: string;
    utilityBody?: string;
  };
  gallery?: string[];
}

interface MachineCardProps {
  machine: Machine;
  index: number;
  onViewDetails: (machine: Machine) => void;
}

export function MachineCard({ machine, index, onViewDetails }: MachineCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.05,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      onClick={() => onViewDetails(machine)}
      className="group cursor-pointer touch-manipulation"
    >
      <div className="glass-card overflow-hidden relative transition-transform duration-200 ease-out active:scale-[0.98] hover:scale-[1.02]">
        {/* Full background image */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="w-full h-full transition-transform duration-300 ease-out group-hover:scale-105">
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
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 via-50% to-background" />
        </div>
          
        {/* Discount Badge */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 badge-discount z-10">
          −{machine.discount}%
        </div>

        {/* Category Badge */}
        {machine.category && (
          <div className="absolute top-12 left-3 sm:top-14 sm:left-4 px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 text-[10px] sm:text-xs font-medium text-muted-foreground z-10">
            {categoryInfo[machine.category]?.label || machine.category}
          </div>
        )}

        {/* Hot deal indicator */}
        {machine.isHotOffer && (
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-3 py-1.5 rounded-full bg-destructive text-[10px] sm:text-xs font-bold text-destructive-foreground z-10">
            🔥 HOT OFFER
          </div>
        )}

        {/* Spacer */}
        <div className="h-64 sm:h-72 md:h-80" />

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 relative z-10">
          <h3 
            className="text-lg sm:text-xl font-bold text-foreground leading-tight line-clamp-2 min-h-[2.75rem] sm:min-h-[3rem]"
            style={{ textShadow: '0 2px 8px hsl(0 0% 0%)' }}
          >
            {machine.name}
          </h3>

          <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm">
            <span className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-background/60 backdrop-blur-sm border border-border/30">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
              {machine.year} • {machine.miles ? `${machine.miles.toLocaleString()} mi` : `${machine.hours.toLocaleString()} hrs`}
            </span>
            <span className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-background/60 backdrop-blur-sm border border-border/30">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground" />
              {machine.location}
            </span>
          </div>

          <div className="flex items-baseline gap-2 sm:gap-3">
            <span className="text-2xl sm:text-3xl font-black text-primary">
              ${machine.price.toLocaleString()}
            </span>
            <span className="text-sm sm:text-lg line-through text-muted-foreground">
              ${machine.originalPrice.toLocaleString()}
            </span>
          </div>

          <div className="pt-2">
            <Button
              className="w-full h-12 sm:h-14 text-base sm:text-lg font-bold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
            >
              <Eye className="w-5 h-5 mr-2" />
              View Details
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
