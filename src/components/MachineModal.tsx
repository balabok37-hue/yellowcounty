import { X, MapPin, Send, ChevronLeft, ChevronRight, Shield, Truck, CheckCircle2, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useCallback, useEffect, memo } from 'react';
import type { Machine } from './MachineCard';
import { useGalleryPreload } from '@/hooks/useCriticalImagePreload';

interface MachineModalProps {
  machine: Machine | null;
  isOpen: boolean;
  onClose: () => void;
}

export function MachineModal({ machine, isOpen, onClose }: MachineModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Build gallery - always include main image first, then add gallery images
  const images = machine?.gallery && machine.gallery.length > 0 
    ? machine.gallery 
    : machine?.image ? [machine.image] : [];

  // Preload adjacent images for smooth navigation - MUST be called before any conditional returns
  useGalleryPreload(images, currentImageIndex, 2);

  // Reset image index when machine changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [machine?.id]);

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

  if (!machine || !isOpen) return null;

  const handleRequestQuote = () => {
    const message = `Hi! I'm interested in the ${machine.year} ${machine.name} listed at $${machine.price.toLocaleString()}. Is it still available?`;
    scrollToContact(message);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const selectImage = (idx: number) => {
    setCurrentImageIndex(idx);
  };

  // Extract model name
  const modelName = machine.name.replace(/^\d{4}\s+/, '');

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-foreground/60 backdrop-blur-sm overflow-hidden"
      onClick={handleClose}
    >
      {/* Modal */}
      <div
        className="relative w-full max-w-5xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden rounded-xl bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-30 p-2 rounded-full bg-card shadow-lg border border-border hover:bg-muted transition-colors"
        >
          <X className="w-5 h-5 text-foreground" />
        </button>

        <div className="flex flex-col lg:flex-row h-full max-h-[95vh] sm:max-h-[90vh]">
          {/* Image Gallery Section */}
          <div className="relative lg:w-[55%] flex-shrink-0 bg-muted flex flex-col">
            {/* Main Image */}
            <div className="relative h-[35vh] sm:h-[40vh] lg:h-[350px] flex items-center justify-center overflow-hidden">
              <img
                key={currentImageIndex}
                src={images[currentImageIndex]}
                alt={`${machine.name} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover bg-muted"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                width={600}
                height={400}
              />
              
              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-card/95 shadow-lg hover:bg-card transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-foreground" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-card/95 shadow-lg hover:bg-card transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-foreground" />
                  </button>
                </>
              )}

              {/* Discount badge */}
              {machine.discount > 0 && (
                <div className="absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-destructive font-bold text-destructive-foreground text-sm shadow-lg">
                  −{machine.discount}% OFF
                </div>
              )}

              {/* Image counter */}
              <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-card/90 text-sm font-medium text-foreground">
                {currentImageIndex + 1} / {images.length}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            {images.length > 1 && (
              <div className="flex gap-2 p-3 overflow-x-auto bg-card/50">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => selectImage(idx)}
                    className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      idx === currentImageIndex 
                        ? 'border-primary ring-2 ring-primary/30' 
                        : 'border-transparent hover:border-muted-foreground/30'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      width={80}
                      height={80}
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Specifications - moved here to fill space below thumbnails */}
            {machine.specs && Object.keys(machine.specs).length > 0 && (
              <div className="hidden lg:flex flex-1 p-4 bg-card/30 overflow-y-auto flex-col">
                <h3 className="text-sm font-bold text-foreground uppercase tracking-wide mb-3">
                  Specifications
                </h3>
                <div className="grid grid-cols-2 gap-x-6 gap-y-0.5 text-sm">
                  {Object.entries(machine.specs).map(([key, value]) => {
                    if (!value) return null;
                    const label = key
                      .replace(/([A-Z])/g, ' $1')
                      .replace(/^./, str => str.toUpperCase())
                      .trim();
                    return (
                      <div key={key} className="flex flex-col py-1.5 border-b border-border/50">
                        <span className="text-muted-foreground text-xs">{label}</span>
                        <span className="font-medium text-foreground break-words">{value}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Details Section */}
          <div className="flex-1 p-4 sm:p-6 flex flex-col overflow-y-auto lg:max-h-[90vh]">
            {/* Title & Year */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 bg-primary text-primary-foreground text-xs font-bold rounded">
                  {machine.year}
                </span>
                {machine.year >= 2023 && (
                  <span className="px-2 py-0.5 bg-accent text-accent-foreground text-xs font-bold rounded">
                    NEW
                  </span>
                )}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground leading-tight">
                {modelName}
              </h2>
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-3 mb-4 text-sm">
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>{machine.miles ? `${machine.miles.toLocaleString()} Miles` : `${machine.hours.toLocaleString()} Hours`}</span>
              </div>
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>{machine.location}</span>
              </div>
            </div>

            {/* Price Block */}
            <div className="py-4 px-4 rounded-xl bg-muted/50 border border-border mb-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
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
                  size="lg"
                  className="font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Get Quote
                </Button>
              </div>
            </div>

            {/* Description */}
            {machine.description && (
              <div className="mb-4">
                <h3 className="text-sm font-bold text-foreground uppercase tracking-wide mb-2">
                  Description
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {machine.description}
                </p>
              </div>
            )}

            {/* Specifications - Mobile only */}
            {machine.specs && Object.keys(machine.specs).length > 0 && (
              <div className="lg:hidden mb-4">
                <h3 className="text-sm font-bold text-foreground uppercase tracking-wide mb-3">
                  Specifications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-0.5 text-sm">
                  {Object.entries(machine.specs).map(([key, value]) => {
                    if (!value) return null;
                    const label = key
                      .replace(/([A-Z])/g, ' $1')
                      .replace(/^./, str => str.toUpperCase())
                      .trim();
                    return (
                      <div key={key} className="flex flex-col py-1.5 border-b border-border/50">
                        <span className="text-muted-foreground text-xs">{label}</span>
                        <span className="font-medium text-foreground break-words">{value}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Trust badges */}
            <div className="mt-auto pt-4 flex flex-wrap gap-4 border-t border-border">
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
