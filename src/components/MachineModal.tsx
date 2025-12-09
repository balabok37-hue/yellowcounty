import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Clock, MessageCircle, Phone, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import type { Machine } from './MachineCard';

interface MachineModalProps {
  machine: Machine | null;
  isOpen: boolean;
  onClose: () => void;
}

export function MachineModal({ machine, isOpen, onClose }: MachineModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!machine) return null;

  const images = machine.gallery || [machine.image];
  
  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in the ${machine.year} ${machine.name} listed at $${machine.price.toLocaleString()}. Is it still available?`
  );
  const whatsappUrl = `https://wa.me/+12029322837?text=${whatsappMessage}`;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-background/95 backdrop-blur-xl"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl glass-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-muted transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Gallery */}
              <div className="relative aspect-square md:aspect-auto">
                <img
                  src={images[currentImageIndex]}
                  alt={machine.name}
                  className="w-full h-full object-cover"
                />
                
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-muted transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-muted transition-colors"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                    
                    {/* Image indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            idx === currentImageIndex ? 'bg-primary' : 'bg-foreground/30'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}

                {/* Discount badge */}
                <div className="absolute top-4 left-4 badge-discount">
                  −{machine.discount}%
                </div>
              </div>

              {/* Details */}
              <div className="p-8 space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">
                    {machine.name}
                  </h2>
                  <div className="flex flex-wrap gap-4 text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      {machine.year} • {machine.hours.toLocaleString()} hours
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-accent" />
                      {machine.location}
                    </span>
                  </div>
                </div>

                {/* Price */}
                <div className="py-4 border-y border-border">
                  <div className="flex items-baseline gap-4">
                    <span className="text-4xl font-bold text-primary">
                      ${machine.price.toLocaleString()}
                    </span>
                    <span className="text-xl line-through text-muted-foreground">
                      ${machine.originalPrice.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    You save ${(machine.originalPrice - machine.price).toLocaleString()}
                  </p>
                </div>

                {/* Specs Table */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">Specifications</h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="p-3 rounded-lg bg-muted/50">
                      <span className="text-muted-foreground">Year</span>
                      <p className="font-semibold">{machine.year}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-muted/50">
                      <span className="text-muted-foreground">Hours</span>
                      <p className="font-semibold">{machine.hours.toLocaleString()}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-muted/50">
                      <span className="text-muted-foreground">Condition</span>
                      <p className="font-semibold">Excellent</p>
                    </div>
                    <div className="p-3 rounded-lg bg-muted/50">
                      <span className="text-muted-foreground">Availability</span>
                      <p className="font-semibold text-green-500">In Stock</p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="flex-1 bg-[#25D366] hover:bg-[#22c55e] text-primary-foreground font-bold text-lg h-14"
                  >
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Message on WhatsApp
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold text-lg h-14"
                  >
                    <a href="tel:+12029322837">
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
