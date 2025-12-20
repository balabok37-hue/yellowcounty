import { memo, useState, useCallback } from 'react';

export type MachineCategory = 'excavators' | 'dozers' | 'wheel-loaders' | 'track-loaders' | 'backhoes' | 'telehandlers' | 'trucks' | 'compaction';

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
  isSold?: boolean;
  isReserved?: boolean;
  isComingSoon?: boolean;
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
  onViewDetails: (machine: Machine) => void;
  onImageLoaded?: () => void;
  priority?: boolean;
}

export const MachineCard = memo(function MachineCard({ machine, onViewDetails, onImageLoaded, priority = false }: MachineCardProps) {
  const isUnavailable = machine.isSold || machine.isReserved;
  const [imageLoaded, setImageLoaded] = useState(false);
  const isNew = machine.year >= 2023;
  const hasDiscount = machine.discount > 0;
  
  const handleClick = () => {
    if (!isUnavailable) {
      onViewDetails(machine);
    }
  };

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
    onImageLoaded?.();
  }, [onImageLoaded]);

  // Extract model name (remove year from name)
  const modelName = machine.name.replace(/^\d{4}\s+/, '');

  return (
    <div
      onClick={handleClick}
      className={`machine-card ${isUnavailable ? 'cursor-default opacity-75' : 'cursor-pointer hover:shadow-xl'}`}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] bg-muted overflow-hidden flex items-center justify-center">
        {/* Loading skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-muted animate-pulse" />
        )}

        {/* Image - centered */}
        <img
          src={machine.image}
          alt={machine.name}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={handleImageLoad}
          onError={handleImageLoad}
          className={`w-full h-full transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{
            objectFit: machine.imageFit || 'cover',
            objectPosition: 'center center'
          }}
          width={400}
          height={300}
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
      <div className="p-4 space-y-3">
        {/* Price Row */}
        <div className="flex items-baseline gap-2 flex-wrap">
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
        <h3 className="text-lg font-bold text-foreground leading-tight line-clamp-2">
          {modelName}
        </h3>
      </div>
    </div>
  );
});
