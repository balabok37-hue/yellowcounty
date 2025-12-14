import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { X, MapPin, Clock, Send, ArrowRight, ChevronLeft, ChevronRight, Shield, Truck, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useCallback } from 'react';
import type { Machine } from './MachineCard';

interface MachineModalProps {
  machine: Machine | null;
  isOpen: boolean;
  onClose: () => void;
}

export function MachineModal({ machine, isOpen, onClose }: MachineModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [dragDirection, setDragDirection] = useState(0);

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
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-background/95 backdrop-blur-xl"
          onClick={handleClose}
        >
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full sm:max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden rounded-t-3xl sm:rounded-3xl bg-card border border-border/50 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-20 p-3 rounded-full bg-background/90 backdrop-blur-sm border border-border/50 shadow-lg active:scale-95 transition-transform duration-150"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>

            {/* Drag handle for mobile */}
            <div className="sm:hidden absolute top-2 left-1/2 -translate-x-1/2 z-20">
              <div className="w-12 h-1 bg-muted-foreground/30 rounded-full" />
            </div>

            <div className="overflow-y-auto max-h-[95vh] sm:max-h-[90vh]">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Gallery */}
                <div className="relative aspect-[4/3] sm:aspect-square md:aspect-auto md:min-h-[400px] overflow-hidden bg-muted/20 flex items-center justify-center">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={currentImageIndex}
                      className="w-full h-full cursor-grab active:cursor-grabbing overflow-hidden"
                      initial={{ opacity: 0, x: dragDirection > 0 ? -50 : 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: dragDirection > 0 ? 50 : -50 }}
                      transition={{ duration: 0.2 }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.2}
                      onDrag={handleDrag}
                      onDragEnd={handleDragEnd}
                    >
                      <div className="w-full h-full">
                        <img
                          src={images[currentImageIndex]}
                          alt={machine.name}
                          className="w-full h-full object-cover"
                          style={{ objectPosition: machine.imagePosition || 'center' }}
                          loading={currentImageIndex === 0 ? 'eager' : 'lazy'}
                          decoding="async"
                        />
                      </div>
                    </motion.div>
                  </AnimatePresence>
                  
                  {/* Gradient fade on mobile */}
                  <div className="md:hidden absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-card via-card/60 to-transparent pointer-events-none" />
                  
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/90 backdrop-blur-sm border border-border/50 shadow-lg items-center justify-center active:scale-95 transition-transform duration-150"
                      >
                        <ChevronLeft className="w-4 h-4 text-foreground" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/90 backdrop-blur-sm border border-border/50 shadow-lg items-center justify-center active:scale-95 transition-transform duration-150"
                      >
                        <ChevronRight className="w-4 h-4 text-foreground" />
                      </button>
                      
                      {/* Image indicators */}
                      <div className="absolute bottom-20 md:bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm">
                        {images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`h-2 rounded-full transition-all duration-200 ${
                              idx === currentImageIndex 
                                ? 'bg-primary w-5' 
                                : 'bg-foreground/30 w-2'
                            }`}
                          />
                        ))}
                      </div>

                      <div className="sm:hidden absolute bottom-28 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground bg-background/80 px-2 py-0.5 rounded-full">
                        ← Swipe →
                      </div>
                    </>
                  )}

                  {/* Discount badge */}
                  <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-primary font-bold text-primary-foreground text-sm shadow-lg">
                    −{machine.discount}% OFF
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 sm:p-6 space-y-3">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-foreground mb-2 leading-tight">
                      {machine.name}
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      <span className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
                        <Clock className="w-3.5 h-3.5 text-primary" />
                        {machine.year} • {machine.miles ? `${machine.miles.toLocaleString()} mi` : `${machine.hours.toLocaleString()} hrs`}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
                        <MapPin className="w-3.5 h-3.5 text-accent" />
                        {machine.location}
                      </span>
                    </div>
                  </div>

                  {machine.description && (
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                      {machine.description}
                    </p>
                  )}

                  {/* Price */}
                  <div className="py-3 px-3 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                    <div className="flex items-baseline gap-2 mb-0.5">
                      <span className="text-2xl sm:text-3xl font-black text-primary">
                        ${machine.price.toLocaleString()}
                      </span>
                      <span className="text-base sm:text-lg line-through text-muted-foreground">
                        ${machine.originalPrice.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-green-500 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      You save ${(machine.originalPrice - machine.price).toLocaleString()}!
                    </p>
                  </div>

                  {/* Specs */}
                  {machine.specs && Object.keys(machine.specs).length > 3 && (
                    <div className="space-y-2">
                      <h3 className="text-xs font-bold text-foreground uppercase tracking-wide flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Technical Specifications
                      </h3>
                      <div className="grid grid-cols-1 gap-1 text-xs max-h-[140px] overflow-y-auto pr-1">
                        {machine.specs.engine && (
                          <div className="flex justify-between py-1.5 border-b border-border/30">
                            <span className="text-muted-foreground">Engine</span>
                            <span className="font-medium text-foreground text-right max-w-[60%]">{machine.specs.engine}</span>
                          </div>
                        )}
                        {machine.specs.power && (
                          <div className="flex justify-between py-1.5 border-b border-border/30">
                            <span className="text-muted-foreground">Power</span>
                            <span className="font-medium text-foreground">{machine.specs.power}</span>
                          </div>
                        )}
                        {machine.specs.weight && (
                          <div className="flex justify-between py-1.5 border-b border-border/30">
                            <span className="text-muted-foreground">Operating Weight</span>
                            <span className="font-medium text-foreground">{machine.specs.weight}</span>
                          </div>
                        )}
                        {machine.specs.maxDiggingDepth && (
                          <div className="flex justify-between py-1.5 border-b border-border/30">
                            <span className="text-muted-foreground">Max Digging Depth</span>
                            <span className="font-medium text-foreground">{machine.specs.maxDiggingDepth}</span>
                          </div>
                        )}
                        {machine.specs.maxReach && (
                          <div className="flex justify-between py-1.5 border-b border-border/30">
                            <span className="text-muted-foreground">Max Reach</span>
                            <span className="font-medium text-foreground">{machine.specs.maxReach}</span>
                          </div>
                        )}
                        {machine.specs.bucketCapacity && (
                          <div className="flex justify-between py-1.5 border-b border-border/30">
                            <span className="text-muted-foreground">Bucket Capacity</span>
                            <span className="font-medium text-foreground">{machine.specs.bucketCapacity}</span>
                          </div>
                        )}
                        {machine.specs.travelSpeed && (
                          <div className="flex justify-between py-1.5 border-b border-border/30">
                            <span className="text-muted-foreground">Travel Speed</span>
                            <span className="font-medium text-foreground">{machine.specs.travelSpeed}</span>
                          </div>
                        )}
                        {machine.specs.fuelTank && (
                          <div className="flex justify-between py-1.5 border-b border-border/30">
                            <span className="text-muted-foreground">Fuel Tank</span>
                            <span className="font-medium text-foreground">{machine.specs.fuelTank}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Basic Specs */}
                  {(!machine.specs || Object.keys(machine.specs).length <= 3) && (
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2.5 rounded-lg bg-muted/30 border border-border/30">
                        <span className="text-[10px] text-muted-foreground uppercase tracking-wide">Year</span>
                        <p className="font-bold text-base text-foreground">{machine.year}</p>
                      </div>
                      <div className="p-2.5 rounded-lg bg-muted/30 border border-border/30">
                        <span className="text-[10px] text-muted-foreground uppercase tracking-wide">{machine.miles ? 'Miles' : 'Hours'}</span>
                        <p className="font-bold text-base text-foreground">{machine.miles ? machine.miles.toLocaleString() : machine.hours.toLocaleString()}</p>
                      </div>
                      <div className="p-2.5 rounded-lg bg-muted/30 border border-border/30">
                        <span className="text-[10px] text-muted-foreground uppercase tracking-wide">Condition</span>
                        <p className="font-bold text-base text-green-500">Excellent</p>
                      </div>
                      <div className="p-2.5 rounded-lg bg-muted/30 border border-border/30">
                        <span className="text-[10px] text-muted-foreground uppercase tracking-wide">Status</span>
                        <p className="font-bold text-base text-green-500">In Stock ✓</p>
                      </div>
                    </div>
                  )}

                  {/* Trust badges */}
                  <div className="flex gap-3 py-2">
                    <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                      <Shield className="w-3 h-3 text-green-500" />
                      150-Point Inspection
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                      <Truck className="w-3 h-3 text-primary" />
                      Nationwide Shipping
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-2 pt-1">
                    <Button
                      onClick={handleRequestQuote}
                      size="lg"
                      className="flex-1 h-11 text-sm font-bold bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-colors duration-200"
                    >
                      <Send className="w-4 h-4 mr-1.5" />
                      Request Quote
                    </Button>
                    <Button
                      onClick={() => scrollToContact()}
                      variant="outline"
                      size="lg"
                      className="h-11 px-4 font-semibold border-primary/50 text-primary hover:bg-primary/10 rounded-lg transition-colors duration-200"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Button>
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
