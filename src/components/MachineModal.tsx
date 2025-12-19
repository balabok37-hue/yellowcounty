import { AnimatePresence, PanInfo } from 'framer-motion';
import { X, MapPin, Send, ChevronLeft, ChevronRight, Shield, Truck, CheckCircle2 } from 'lucide-react';
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

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';
      
      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.overflow = '';
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

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-foreground/50 backdrop-blur-sm overflow-hidden"
      onClick={handleClose}
    >
      {/* Modal */}
      <div
        className="relative w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden rounded-lg bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-20 p-2 rounded-full bg-card shadow-md border border-border hover:bg-muted transition-colors"
        >
          <X className="w-5 h-5 text-foreground" />
        </button>

        <div className="flex flex-col md:flex-row h-full max-h-[95vh] sm:max-h-[90vh]">
          {/* Image Gallery */}
          <div className="relative h-[40vh] md:h-auto md:w-1/2 flex-shrink-0 overflow-hidden bg-muted flex items-center justify-center">
            <img
              src={images[currentImageIndex]}
              alt={machine.name}
              className="w-full h-full object-cover"
              style={{ objectPosition: machine.imagePosition || 'center' }}
            />
            
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/90 shadow-md hover:bg-card transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-foreground" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/90 shadow-md hover:bg-card transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-foreground" />
                </button>
                
                {/* Image indicators */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 px-3 py-1.5 rounded-full bg-card/90">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        idx === currentImageIndex ? 'bg-primary' : 'bg-muted-foreground/40'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}

            {/* Discount badge */}
            {machine.discount > 0 && (
              <div className="absolute top-3 left-3 px-3 py-1 rounded bg-destructive font-bold text-destructive-foreground text-sm">
                −{machine.discount}% OFF
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex-1 p-4 sm:p-6 flex flex-col overflow-y-auto">
            {/* Title */}
            <div className="mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground leading-tight mb-2">
                {machine.name}
              </h2>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                  {machine.year}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                  <MapPin className="w-3 h-3" />
                  {machine.location}
                </span>
              </div>
            </div>

            {/* Description */}
            {machine.description && (
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {machine.description}
              </p>
            )}

            {/* Price */}
            <div className="py-4 px-4 rounded-lg bg-muted mb-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-2xl sm:text-3xl font-bold text-foreground">
                      ${machine.price.toLocaleString()}
                    </span>
                    {machine.discount > 0 && (
                      <span className="text-base line-through text-muted-foreground">
                        ${machine.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  {machine.discount > 0 && (
                    <p className="text-sm font-semibold text-accent flex items-center gap-1 mt-1">
                      <CheckCircle2 className="w-4 h-4" />
                      Save ${(machine.originalPrice - machine.price).toLocaleString()}
                    </p>
                  )}
                </div>
                <Button
                  onClick={handleRequestQuote}
                  className="h-11 px-6 font-bold bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Get Quote
                </Button>
              </div>
            </div>

            {/* Specs */}
            {machine.specs && Object.keys(machine.specs).length > 0 && (
              <div className="flex-1 min-h-0 mb-4">
                <h3 className="text-sm font-bold text-foreground uppercase tracking-wide mb-3">
                  Specifications
                </h3>
                <div className="grid grid-cols-2 gap-2 text-sm overflow-y-auto max-h-40 pr-2">
                  {machine.specs.engine && (
                    <div className="flex justify-between py-1.5 border-b border-border col-span-2">
                      <span className="text-muted-foreground">Engine</span>
                      <span className="font-medium text-foreground text-right">{machine.specs.engine}</span>
                    </div>
                  )}
                  {machine.specs.power && (
                    <div className="flex justify-between py-1.5 border-b border-border">
                      <span className="text-muted-foreground">Power</span>
                      <span className="font-medium text-foreground">{machine.specs.power}</span>
                    </div>
                  )}
                  {machine.specs.weight && (
                    <div className="flex justify-between py-1.5 border-b border-border">
                      <span className="text-muted-foreground">Weight</span>
                      <span className="font-medium text-foreground">{machine.specs.weight}</span>
                    </div>
                  )}
                  {machine.specs.maxDiggingDepth && (
                    <div className="flex justify-between py-1.5 border-b border-border">
                      <span className="text-muted-foreground">Dig Depth</span>
                      <span className="font-medium text-foreground">{machine.specs.maxDiggingDepth}</span>
                    </div>
                  )}
                  {machine.specs.maxReach && (
                    <div className="flex justify-between py-1.5 border-b border-border">
                      <span className="text-muted-foreground">Max Reach</span>
                      <span className="font-medium text-foreground">{machine.specs.maxReach}</span>
                    </div>
                  )}
                  {machine.specs.bucketCapacity && (
                    <div className="flex justify-between py-1.5 border-b border-border">
                      <span className="text-muted-foreground">Bucket</span>
                      <span className="font-medium text-foreground">{machine.specs.bucketCapacity}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Trust badges */}
            <div className="mt-auto pt-4 flex gap-4 border-t border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-accent" />
                150-Point Inspection
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Truck className="w-4 h-4 text-primary" />
                Nationwide Shipping
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
