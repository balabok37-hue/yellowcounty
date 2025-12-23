import { memo, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { generateMachineSlug } from '@/lib/machine-utils';
import { USAFlag } from '@/components/icons/USAFlag';

export type MachineCategory = 'excavators' | 'dozers' | 'wheel-loaders' | 'track-loaders' | 'backhoes' | 'telehandlers' | 'trucks' | 'compaction';

export type AvailableZone = 'west' | 'east' | 'south' | 'north' | 'southeast' | 'northeast' | 'midwest' | 'northwest' | 'southwest';

export interface Machine {
  id: number;
  name: string;
  year: number;
  hours?: number;
  miles?: number;
  location: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  imageFit?: 'cover' | 'contain';
  isHotOffer?: boolean;
  isSold?: boolean;
  isReserved?: boolean;
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
    // Truck-specific specs
    torque?: string;
    axles?: string;
    sleeperSize?: string;
    // Track loader specs
    ratedOperatingCapacity?: string;
    groundPressure?: string;
  };
  gallery?: string[];
  availableZones?: AvailableZone[];
}

interface MachineCardProps {
  machine: Machine;
  onViewDetails?: (machine: Machine) => void;
  onImageLoaded?: () => void;
  priority?: boolean;
  index?: number;
}

// Shimmer placeholder gradient
const SHIMMER_STYLE = {
  background: 'linear-gradient(90deg, transparent 0%, hsl(var(--muted-foreground)/0.08) 50%, transparent 100%)',
  animation: 'shimmer 1.5s infinite',
};

export const MachineCard = memo(function MachineCard({ 
  machine, 
  onViewDetails, 
  onImageLoaded, 
  priority = false,
  index = 0 
}: MachineCardProps) {
  const isUnavailable = machine.isSold || machine.isReserved;
  const [imageLoaded, setImageLoaded] = useState(false);
  const isNew = machine.year >= 2023;
  // Never show discount badge for unavailable machines
  const hasDiscount = machine.discount > 0 && !isUnavailable;
  
  // First 6 cards get priority loading, first 3 get high fetch priority
  const shouldPrioritize = priority || index < 6;
  const isHighPriority = index < 3;
  
  const machineUrl = `/machine/${generateMachineSlug(machine)}`;

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
    onImageLoaded?.();
  }, [onImageLoaded]);

  // Extract model name (remove year from name)
  const modelName = machine.name.replace(/^\d{4}\s+/, '');

  const cardContent = (
    <>
      {/* Image Container */}
      <div className="relative aspect-[4/3] bg-muted overflow-hidden flex items-center justify-center">
        {/* Loading skeleton with shimmer */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-muted">
            <div className="absolute inset-0" style={SHIMMER_STYLE} />
          </div>
        )}

        {/* Image - centered with explicit dimensions for CLS prevention */}
        <img
          src={machine.image}
          alt={machine.name}
          loading={shouldPrioritize ? 'eager' : 'lazy'}
          decoding={shouldPrioritize ? 'sync' : 'async'}
          onLoad={handleImageLoad}
          onError={handleImageLoad}
          className={`w-full h-full transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'} ${isUnavailable ? 'blur-[2px]' : ''}`}
          style={{
            objectFit: machine.imageFit || 'cover',
            objectPosition: 'center center'
          }}
          width={400}
          height={300}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* New Badge */}
        {isNew && !isUnavailable && (
          <div className="absolute top-3 left-3 badge-new z-10">
            New
          </div>
        )}

        {/* SOLD/RESERVED overlay */}
        {machine.isSold && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-foreground/60">
            <span className="text-4xl font-black text-card uppercase tracking-widest -rotate-12">
              SOLD
            </span>
          </div>
        )}
        {machine.isReserved && !machine.isSold && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-foreground/50">
            <span className="text-3xl font-black text-card uppercase tracking-widest -rotate-12">
              RESERVED
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
        {/* Price Row */}
        <div className="flex items-baseline gap-2 flex-wrap min-w-0">
          <span className="price-main">
            ${machine.price.toLocaleString()}
          </span>
          {hasDiscount && (
            <>
              <span className="text-sm line-through text-muted-foreground">
                ${machine.originalPrice.toLocaleString()}
              </span>
              <span className="badge-sale">ON SALE</span>
            </>
          )}
        </div>

        {/* Model Name */}
        <h3 className="text-base sm:text-lg font-bold text-foreground leading-tight line-clamp-2 break-words">
          {modelName}
        </h3>

        {/* USA Available Badge */}
        {!isUnavailable && (
          <div className="flex items-center gap-1.5 text-xs text-accent font-medium">
            <USAFlag className="w-5 h-3" />
            USA Available
          </div>
        )}
      </div>
    </>
  );

  // Unavailable machines are not clickable
  if (isUnavailable) {
    return (
      <div className="machine-card cursor-default opacity-75">
        {cardContent}
      </div>
    );
  }

  // Available machines link to detail page
  return (
    <Link to={machineUrl} className="machine-card cursor-pointer hover:shadow-xl block">
      {cardContent}
    </Link>
  );
});
