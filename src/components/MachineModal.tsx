import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { X, MapPin, Clock, Send, ChevronLeft, ChevronRight, Shield, Truck, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useCallback, useEffect } from 'react';
import type { Machine } from './MachineCard';

interface MachineModalProps {
  machine: Machine | null;
  isOpen: boolean;
  onClose: () => void;
}

export function MachineModal({ machine, isOpen, onClose }: MachineModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [dragDirection, setDragDirection] = useState(0);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      
      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.overflow = '';
        document.body.style.touchAction = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setCurrentImageIndex(0);
    onClose();
  }, [onClose]);

  const scrollToContact = useCallback((prefillMessage?: string) => {
    handleClose();
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        if (prefillMessage) {
          window.dispatchEvent(new CustomEvent('prefillContactForm', { detail: { message: prefillMessage } }));
        }
      }
    }, 300);
  }, [handleClose]);

  if (!machine) return null;

  const images = machine.gallery || [machine.image];

  const handleRequestQuote = () => {
    const message = `Hi! I'm interested in the ${machine.year} ${machine.name} listed at $${machine.price.toLocaleString()}. Is it still available?`;
    scrollToContact(message);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleDragEnd = (_: any, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x < -threshold) {
      nextImage();
    } else if (info.offset.x > threshold) {
      prevImage();
    }
    setDragDirection(0);
  };

  const handleDrag = (_: any, info: PanInfo) => {
    setDragDirection(info.offset.x);
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-background/95 backdrop-blur-xl"
          onClick={handleClose}
        >
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="relative w-full max-w-3xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden rounded-2xl bg-card border border-border/50 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 z-20 p-2 rounded-full bg-background/90 backdrop-blur-sm border border-border/50 shadow-lg active:scale-95 transition-transform duration-100"
            >
              <X className="w-4 h-4 text-foreground" />
            </button>

            <div className="flex flex-col md:flex-row h-full max-h-[95vh] sm:max-h-[90vh]">
              {/* Image Gallery */}
              <div className="relative h-[35vh] md:h-auto md:w-1/2 flex-shrink-0 overflow-hidden bg-muted/20 flex items-center justify-center">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={currentImageIndex}
                    className="w-full h-full cursor-grab active:cursor-grabbing overflow-hidden"
                    initial={{ opacity: 0, x: dragDirection > 0 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: dragDirection > 0 ? 30 : -30 }}
                    transition={{ duration: 0.15 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDrag={handleDrag}
                    onDragEnd={handleDragEnd}
                  >
                    <img
                      src={images[currentImageIndex]}
                      alt={machine.name}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: machine.imagePosition || 'center' }}
                      loading={currentImageIndex === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                    />
                  </motion.div>
                </AnimatePresence>
                
                {/* Gradient fade on mobile */}
                <div className="md:hidden absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-card via-card/80 to-transparent pointer-events-none" />
                
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-background/90 backdrop-blur-sm border border-border/50 shadow-lg items-center justify-center active:scale-95 transition-transform duration-100"
                    >
                      <ChevronLeft className="w-4 h-4 text-foreground" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-background/90 backdrop-blur-sm border border-border/50 shadow-lg items-center justify-center active:scale-95 transition-transform duration-100"
                    >
                      <ChevronRight className="w-4 h-4 text-foreground" />
                    </button>
                    
                    {/* Image indicators */}
                    <div className="absolute bottom-14 md:bottom-3 left-1/2 -translate-x-1/2 flex gap-1 px-2 py-0.5 rounded-full bg-background/80 backdrop-blur-sm">
                      {images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`h-1.5 rounded-full transition-all duration-150 ${
                            idx === currentImageIndex 
                              ? 'bg-primary w-3' 
                              : 'bg-foreground/30 w-1.5'
                          }`}
                        />
                      ))}
                    </div>

                    <div className="md:hidden absolute bottom-16 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground bg-background/80 px-2 py-0.5 rounded-full">
                      ← Swipe →
                    </div>
                  </>
                )}

                {/* Discount badge */}
                <div className="absolute top-2 left-2 px-2 py-1 rounded-full bg-primary font-bold text-primary-foreground text-xs shadow-lg">
                  −{machine.discount}% OFF
                </div>
              </div>

              {/* Details - Compact Layout */}
              <div className="flex-1 p-3 sm:p-4 flex flex-col overflow-y-auto">
                {/* Title & Tags */}
                <div className="mb-2">
                  <h2 className="text-lg sm:text-xl font-black text-foreground leading-tight mb-1.5">
                    {machine.name}
                  </h2>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="flex items-center gap-1 text-[10px] text-muted-foreground bg-muted/50 px-2 py-0.5 rounded-full">
                      <Clock className="w-3 h-3 text-primary" />
                      {machine.year} • {machine.miles ? `${machine.miles.toLocaleString()} mi` : `${machine.hours.toLocaleString()} hrs`}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] text-muted-foreground bg-muted/50 px-2 py-0.5 rounded-full">
                      <MapPin className="w-3 h-3 text-accent" />
                      {machine.location}
                    </span>
                  </div>
                </div>

                {/* Description - 2 lines max */}
                {machine.description && (
                  <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-2 mb-2">
                    {machine.description}
                  </p>
                )}

                {/* Price + CTA Button */}
                <div className="py-2 px-3 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 mb-2">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl sm:text-2xl font-black text-primary">
                          ${machine.price.toLocaleString()}
                        </span>
                        <span className="text-sm line-through text-muted-foreground">
                          ${machine.originalPrice.toLocaleString()}
                        </span>
                      </div>
                      <p className="text-[10px] font-semibold text-green-500 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        Save ${(machine.originalPrice - machine.price).toLocaleString()}
                      </p>
                    </div>
                    <Button
                      onClick={handleRequestQuote}
                      size="sm"
                      className="h-9 px-4 text-sm font-bold bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-colors duration-100"
                    >
                      <Send className="w-3.5 h-3.5 mr-1.5" />
                      Quote
                    </Button>
                  </div>
                </div>

                {/* Key Specs - Compact Grid */}
                {machine.specs && Object.keys(machine.specs).length > 3 && (
                  <div className="flex-1 min-h-0 mb-2">
                    <h3 className="text-[10px] font-bold text-foreground uppercase tracking-wide flex items-center gap-1 mb-1.5">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      Specifications
                    </h3>
                    <div className="grid grid-cols-2 gap-x-3 gap-y-0.5 text-[10px] overflow-y-auto max-h-24 sm:max-h-32 pr-1">
                      {machine.specs.engine && (
                        <div className="flex justify-between py-0.5 border-b border-border/20 col-span-2">
                          <span className="text-muted-foreground">Engine</span>
                          <span className="font-medium text-foreground text-right max-w-[60%] truncate">{machine.specs.engine}</span>
                        </div>
                      )}
                      {machine.specs.power && (
                        <div className="flex justify-between py-0.5 border-b border-border/20">
                          <span className="text-muted-foreground">Power</span>
                          <span className="font-medium text-foreground">{machine.specs.power}</span>
                        </div>
                      )}
                      {machine.specs.weight && (
                        <div className="flex justify-between py-0.5 border-b border-border/20">
                          <span className="text-muted-foreground">Weight</span>
                          <span className="font-medium text-foreground">{machine.specs.weight}</span>
                        </div>
                      )}
                      {machine.specs.maxDiggingDepth && (
                        <div className="flex justify-between py-0.5 border-b border-border/20">
                          <span className="text-muted-foreground">Dig Depth</span>
                          <span className="font-medium text-foreground">{machine.specs.maxDiggingDepth}</span>
                        </div>
                      )}
                      {machine.specs.maxReach && (
                        <div className="flex justify-between py-0.5 border-b border-border/20">
                          <span className="text-muted-foreground">Max Reach</span>
                          <span className="font-medium text-foreground">{machine.specs.maxReach}</span>
                        </div>
                      )}
                      {machine.specs.bucketCapacity && (
                        <div className="flex justify-between py-0.5 border-b border-border/20">
                          <span className="text-muted-foreground">Bucket</span>
                          <span className="font-medium text-foreground">{machine.specs.bucketCapacity}</span>
                        </div>
                      )}
                      {machine.specs.travelSpeed && (
                        <div className="flex justify-between py-0.5 border-b border-border/20">
                          <span className="text-muted-foreground">Speed</span>
                          <span className="font-medium text-foreground">{machine.specs.travelSpeed}</span>
                        </div>
                      )}
                      {machine.specs.fuelTank && (
                        <div className="flex justify-between py-0.5 border-b border-border/20">
                          <span className="text-muted-foreground">Fuel</span>
                          <span className="font-medium text-foreground">{machine.specs.fuelTank}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Basic Specs for machines without detailed specs */}
                {(!machine.specs || Object.keys(machine.specs).length <= 3) && (
                  <div className="grid grid-cols-4 gap-1.5 mb-2">
                    <div className="p-2 rounded-lg bg-muted/30 border border-border/30 text-center">
                      <span className="text-[9px] text-muted-foreground uppercase">Year</span>
                      <p className="font-bold text-xs text-foreground">{machine.year}</p>
                    </div>
                    <div className="p-2 rounded-lg bg-muted/30 border border-border/30 text-center">
                      <span className="text-[9px] text-muted-foreground uppercase">{machine.miles ? 'Miles' : 'Hrs'}</span>
                      <p className="font-bold text-xs text-foreground">{machine.miles ? machine.miles.toLocaleString() : machine.hours.toLocaleString()}</p>
                    </div>
                    <div className="p-2 rounded-lg bg-muted/30 border border-border/30 text-center">
                      <span className="text-[9px] text-muted-foreground uppercase">Cond.</span>
                      <p className="font-bold text-xs text-green-500">A+</p>
                    </div>
                    <div className="p-2 rounded-lg bg-muted/30 border border-border/30 text-center">
                      <span className="text-[9px] text-muted-foreground uppercase">Stock</span>
                      <p className="font-bold text-xs text-green-500">✓</p>
                    </div>
                  </div>
                )}

                {/* Trust badges */}
                <div className="mt-auto pt-1 flex gap-3" style={{ paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))' }}>
                  <div className="flex items-center gap-1 text-[9px] text-muted-foreground">
                    <Shield className="w-3 h-3 text-green-500" />
                    150-Point Inspection
                  </div>
                  <div className="flex items-center gap-1 text-[9px] text-muted-foreground">
                    <Truck className="w-3 h-3 text-primary" />
                    Nationwide Shipping
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
