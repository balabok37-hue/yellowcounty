import { memo, useState, useCallback } from 'react';
import { Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { categoryInfo } from '@/data/machines';

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
  imagePosition?: string;
  category?: MachineCategory;
  description?: string;
  specs?: Record<string, string>;
  gallery?: string[];
}

interface MachineCardProps {
  machine: Machine;
  onViewDetails: (machine: Machine) => void;
}

export const MachineCard = memo(function MachineCard({ machine, onViewDetails }: MachineCardProps) {
  const isUnavailable = machine.isSold || machine.isReserved;
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const handleClick = useCallback(() => {
    if (!isUnavailable) {
      onViewDetails(machine);
    }
  }, [isUnavailable, onViewDetails, machine]);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  return (
    <div
      onClick={handleClick}
      className={`group touch-manipulation ${isUnavailable ? 'cursor-default' : 'cursor-pointer'}`}
    >
      <div className="glass-card overflow-hidden relative transition-transform duration-300 ease-out active:scale-[0.98] hover:scale-[1.02]">
        {/* Background image with smooth fade-in */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Skeleton placeholder */}
          <div 
            className={`absolute inset-0 bg-gradient-to-br from-muted/60 to-muted/30 transition-opacity duration-500 ${
              imageLoaded ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" 
              style={{ backgroundSize: '200% 100%' }}
            />
          </div>
          
          <div className={`w-full h-full transition-all duration-500 ease-out group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}>
            <img
              src={machine.image}
              alt={machine.name}
              className={`w-full h-full ${machine.imageFit === 'contain' ? 'object-contain' : 'object-cover'}`}
              style={{ objectPosition: 'center' }}
              onLoad={handleImageLoad}
            />
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
        {machine.isHotOffer && !machine.isSold && (
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-3 py-1.5 rounded-full bg-destructive text-[10px] sm:text-xs font-bold text-destructive-foreground z-10">
            🔥 HOT OFFER
          </div>
        )}

        {/* SOLD overlay */}
        {machine.isSold && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-destructive/50 backdrop-blur-[2px]">
            <span className="text-4xl sm:text-5xl md:text-6xl font-black text-destructive-foreground uppercase tracking-widest -rotate-12 drop-shadow-lg">
              SOLD
            </span>
          </div>
        )}

        {/* RESERVED overlay */}
        {machine.isReserved && !machine.isSold && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-muted/60 backdrop-blur-[2px]">
            <span className="text-3xl sm:text-4xl md:text-5xl font-black text-muted-foreground uppercase tracking-widest -rotate-12 drop-shadow-lg">
              RESERVED
            </span>
          </div>
        )}

        {/* Spacer */}
        <div className="h-40 sm:h-48 md:h-52" />

        {/* Content */}
        <div className="p-3 sm:p-4 space-y-2 sm:space-y-3 relative z-10">
          <h3 
            className="text-base sm:text-lg font-bold text-foreground leading-tight line-clamp-2"
            style={{ textShadow: '0 2px 8px hsl(0 0% 0%)' }}
          >
            {machine.name}
          </h3>

          <div className="flex flex-wrap gap-1.5 sm:gap-2 text-[10px] sm:text-xs">
            <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-background/60 backdrop-blur-sm border border-border/30">
              {machine.year}
            </span>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-xl sm:text-2xl font-black text-primary">
              ${machine.price.toLocaleString()}
            </span>
            <span className="text-xs sm:text-sm line-through text-muted-foreground">
              ${machine.originalPrice.toLocaleString()}
            </span>
          </div>

          <Button
            className="w-full h-10 sm:h-11 text-sm sm:text-base font-bold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-150"
          >
            <Eye className="w-4 h-4 mr-1.5" />
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
});