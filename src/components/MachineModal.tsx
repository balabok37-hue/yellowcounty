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
            className="relative w-full sm:max-w-4xl max-h-[92vh] sm:max-h-[85vh] overflow-hidden rounded-t-2xl sm:rounded-2xl bg-card border border-border/50 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 z-20 p-2.5 rounded-full bg-background/90 backdrop-blur-sm border border-border/50 shadow-lg active:scale-95 transition-transform duration-150"
            >
              <X className="w-4 h-4 text-foreground" />
            </button>

            {/* Drag handle for mobile */}
            <div className="sm:hidden absolute top-1.5 left-1/2 -translate-x-1/2 z-20">
              <div className="w-10 h-1 bg-muted-foreground/30 rounded-full" />
            </div>

            <div className="overflow-y-auto max-h-[92vh] sm:max-h-[85vh]">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Gallery */}
                <div className="relative aspect-[3/2] sm:aspect-[4/3] md:aspect-auto md:h-full md:min-h-[400px] overflow-hidden bg-muted/20 flex items-center justify-center">
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
                  <div className="md:hidden absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-card via-card/80 to-transparent pointer-events-none" />
                  
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/90 backdrop-blur-sm border border-border/50 shadow-lg items-center justify-center active:scale-95 transition-transform duration-150"
                      >
                        <ChevronLeft className="w-4 h-4 text-foreground" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/90 backdrop-blur-sm border border-border/50 shadow-lg items-center justify-center active:scale-95 transition-transform duration-150"
                      >
                        <ChevronRight className="w-4 h-4 text-foreground" />
                      </button>
                      
                      {/* Image indicators */}
                      <div className="absolute bottom-14 md:bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-sm">
                        {images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`h-1.5 rounded-full transition-all duration-200 ${
                              idx === currentImageIndex 
                                ? 'bg-primary w-4' 
                                : 'bg-foreground/30 w-1.5'
                            }`}
                          />
                        ))}
                      </div>

                      <div className="sm:hidden absolute bottom-[4.5rem] left-1/2 -translate-x-1/2 text-[9px] text-muted-foreground bg-background/80 px-2 py-0.5 rounded-full">
                        ← Swipe →
                      </div>
                    </>
                  )}

                  {/* Discount badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-primary font-bold text-primary-foreground text-xs shadow-lg">
                    −{machine.discount}% OFF
                  </div>
                </div>

                {/* Details */}
                <div className="p-3 sm:p-4 space-y-2 flex flex-col md:justify-between">
                  <div>
                    <h2 className="text-lg sm:text-xl font-black text-foreground mb-1.5 leading-tight">
                      {machine.name}
                    </h2>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="flex items-center gap-1 text-[11px] sm:text-xs text-muted-foreground bg-muted/50 px-2 py-0.5 rounded-full">
                        <Clock className="w-3 h-3 text-primary" />
                        {machine.year} • {machine.miles ? `${machine.miles.toLocaleString()} mi` : `${machine.hours.toLocaleString()} hrs`}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] sm:text-xs text-muted-foreground bg-muted/50 px-2 py-0.5 rounded-full">
                        <MapPin className="w-3 h-3 text-accent" />
                        {machine.location}
                      </span>
                    </div>
                  </div>

                  {machine.description && (
                    <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-2">
                      {machine.description}
                    </p>
                  )}

                  {/* Price */}
                  <div className="py-2 px-2.5 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl sm:text-2xl font-black text-primary">
                        ${machine.price.toLocaleString()}
                      </span>
                      <span className="text-sm line-through text-muted-foreground">
                        ${machine.originalPrice.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-[10px] font-semibold text-green-500 flex items-center gap-1 mt-0.5">
                      <CheckCircle2 className="w-2.5 h-2.5" />
                      You save ${(machine.originalPrice - machine.price).toLocaleString()}!
                    </p>
                  </div>

                  {/* Specs */}
                  {machine.specs && Object.keys(machine.specs).length > 3 && (
                    <div className="space-y-1.5 flex-1 min-h-0">
                      <h3 className="text-[10px] font-bold text-foreground uppercase tracking-wide flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-primary" />
                        Specifications
                      </h3>
                      <div className="grid grid-cols-2 gap-x-3 gap-y-0 text-[11px] overflow-y-auto max-h-28 sm:max-h-36 pr-1">
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

                  {/* Basic Specs */}
                  {(!machine.specs || Object.keys(machine.specs).length <= 3) && (
                    <div className="grid grid-cols-4 gap-1.5">
                      <div className="p-2 rounded-lg bg-muted/30 border border-border/30 text-center">
                        <span className="text-[9px] text-muted-foreground uppercase">Year</span>
                        <p className="font-bold text-sm text-foreground">{machine.year}</p>
                      </div>
                      <div className="p-2 rounded-lg bg-muted/30 border border-border/30 text-center">
                        <span className="text-[9px] text-muted-foreground uppercase">{machine.miles ? 'Miles' : 'Hrs'}</span>
                        <p className="font-bold text-sm text-foreground">{machine.miles ? machine.miles.toLocaleString() : machine.hours.toLocaleString()}</p>
                      </div>
                      <div className="p-2 rounded-lg bg-muted/30 border border-border/30 text-center">
                        <span className="text-[9px] text-muted-foreground uppercase">Cond.</span>
                        <p className="font-bold text-sm text-green-500">A+</p>
                      </div>
                      <div className="p-2 rounded-lg bg-muted/30 border border-border/30 text-center">
                        <span className="text-[9px] text-muted-foreground uppercase">Stock</span>
                        <p className="font-bold text-sm text-green-500">✓</p>
                      </div>
                    </div>
                  )}

                  {/* Trust badges + CTA Buttons */}
                  <div className="mt-auto pt-1.5 space-y-2">
                    <div className="flex gap-3">
                      <div className="flex items-center gap-1 text-[9px] text-muted-foreground">
                        <Shield className="w-2.5 h-2.5 text-green-500" />
                        150-Point Inspection
                      </div>
                      <div className="flex items-center gap-1 text-[9px] text-muted-foreground">
                        <Truck className="w-2.5 h-2.5 text-primary" />
                        Nationwide Shipping
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-2">
                      <Button
                        onClick={handleRequestQuote}
                        size="default"
                        className="flex-1 h-10 text-sm font-bold bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-colors duration-200"
                      >
                        <Send className="w-3.5 h-3.5 mr-1.5" />
                        Request Quote
                      </Button>
                      <Button
                        onClick={() => scrollToContact()}
                        variant="outline"
                        size="default"
                        className="h-10 px-3 font-semibold border-primary/50 text-primary hover:bg-primary/10 rounded-lg transition-colors duration-200"
                      >
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Button>
                    </div>
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
