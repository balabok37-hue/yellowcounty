import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { X, MapPin, Clock, MessageCircle, Phone, ChevronLeft, ChevronRight, Shield, Truck, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useCallback } from 'react';
import type { Machine } from './MachineCard';
import { OptimizedImage } from './OptimizedImage';

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
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
          onClick={handleClose}
        >
          {/* Backdrop with blur animation */}
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-background/95"
          />

          {/* Animated glow behind modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="absolute w-[600px] h-[600px] rounded-full bg-primary/20 blur-[100px] pointer-events-none"
          />

          {/* Modal with premium animation */}
          <motion.div
            initial={{ 
              opacity: 0, 
              y: "100%",
              scale: 0.9,
              rotateX: 10,
            }}
            animate={{ 
              opacity: 1, 
              y: 0,
              scale: 1,
              rotateX: 0,
            }}
            exit={{ 
              opacity: 0, 
              y: "100%",
              scale: 0.95,
              transition: { duration: 0.3, ease: "easeIn" }
            }}
            transition={{ 
              type: 'spring', 
              damping: 28, 
              stiffness: 250,
              mass: 0.8,
            }}
            style={{ perspective: 1000 }}
            className="relative w-full sm:max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden rounded-t-3xl sm:rounded-3xl bg-card border border-border/50 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <motion.button
              onClick={handleClose}
              whileTap={{ scale: 0.9 }}
              className="absolute top-4 right-4 z-20 p-3 rounded-full bg-background/90 backdrop-blur-sm border border-border/50 shadow-lg"
            >
              <X className="w-5 h-5 text-foreground" />
            </motion.button>

            {/* Drag handle for mobile */}
            <div className="sm:hidden absolute top-2 left-1/2 -translate-x-1/2 z-20">
              <div className="w-12 h-1 bg-muted-foreground/30 rounded-full" />
            </div>

            <div className="overflow-y-auto max-h-[95vh] sm:max-h-[90vh]">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Gallery with Swipe */}
                <div className="relative aspect-square md:aspect-auto md:min-h-[500px] overflow-hidden bg-muted/20">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={currentImageIndex}
                      className="w-full h-full cursor-grab active:cursor-grabbing overflow-hidden"
                      initial={{ opacity: 0, x: dragDirection > 0 ? -100 : 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: dragDirection > 0 ? 100 : -100 }}
                      transition={{ duration: 0.3 }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.2}
                      onDrag={handleDrag}
                      onDragEnd={handleDragEnd}
                    >
                      {/* Image container with bottom crop to hide watermark */}
                      <div className="w-full h-full relative" style={{ marginBottom: '-40px', paddingBottom: '40px' }}>
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
                  
                  {images.length > 1 && (
                    <>
                      {/* Navigation buttons - hidden on mobile, visible on desktop */}
                      <motion.button
                        onClick={prevImage}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/90 backdrop-blur-sm border border-border/50 shadow-lg items-center justify-center"
                      >
                        <ChevronLeft className="w-5 h-5 text-foreground" />
                      </motion.button>
                      <motion.button
                        onClick={nextImage}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/90 backdrop-blur-sm border border-border/50 shadow-lg items-center justify-center"
                      >
                        <ChevronRight className="w-5 h-5 text-foreground" />
                      </motion.button>
                      
                      {/* Image indicators */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm">
                        {images.map((_, idx) => (
                          <motion.button
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            whileTap={{ scale: 0.8 }}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                              idx === currentImageIndex 
                                ? 'bg-primary w-6' 
                                : 'bg-foreground/30 hover:bg-foreground/50'
                            }`}
                          />
                        ))}
                      </div>

                      {/* Swipe hint on mobile */}
                      <div className="sm:hidden absolute bottom-16 left-1/2 -translate-x-1/2 text-xs text-muted-foreground bg-background/80 px-3 py-1 rounded-full">
                        ← Swipe to see more →
                      </div>
                    </>
                  )}

                  {/* Discount badge */}
                  <motion.div 
                    className="absolute top-4 left-4 px-4 py-2 rounded-full bg-primary font-bold text-primary-foreground text-lg shadow-lg"
                    animate={{ 
                      boxShadow: [
                        "0 0 15px hsl(45 100% 50% / 0.4)",
                        "0 0 25px hsl(45 100% 50% / 0.6)",
                        "0 0 15px hsl(45 100% 50% / 0.4)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    −{machine.discount}% OFF
                  </motion.div>
                </div>

                {/* Details */}
                <div className="p-6 sm:p-8 space-y-5">
                  {/* Header */}
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-3 leading-tight">
                      {machine.name}
                    </h2>
                    <div className="flex flex-wrap gap-3 sm:gap-4">
                      <span className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full">
                        <Clock className="w-4 h-4 text-primary" />
                        {machine.year} • {machine.hours.toLocaleString()} hrs
                      </span>
                      <span className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full">
                        <MapPin className="w-4 h-4 text-accent" />
                        {machine.location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  {machine.description && (
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {machine.description}
                    </p>
                  )}

                  {/* Price */}
                  <div className="py-5 px-4 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="text-3xl sm:text-4xl font-black text-primary" style={{ textShadow: '0 0 30px hsl(45 100% 50% / 0.4)' }}>
                        ${machine.price.toLocaleString()}
                      </span>
                      <span className="text-lg sm:text-xl line-through text-muted-foreground">
                        ${machine.originalPrice.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-green-500 flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" />
                      You save ${(machine.originalPrice - machine.price).toLocaleString()}!
                    </p>
                  </div>

                  {/* Detailed Specs Table */}
                  {machine.specs && Object.keys(machine.specs).length > 3 && (
                    <div className="space-y-3">
                      <h3 className="text-sm font-bold text-foreground uppercase tracking-wide flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        Technical Specifications
                      </h3>
                      <div className="grid grid-cols-1 gap-2 text-sm max-h-[200px] overflow-y-auto pr-2 scrollbar-thin">
                        {machine.specs.engine && (
                          <div className="flex justify-between py-2 border-b border-border/30">
                            <span className="text-muted-foreground">Engine</span>
                            <span className="font-medium text-foreground text-right max-w-[60%]">{machine.specs.engine}</span>
                          </div>
                        )}
                        {machine.specs.power && (
                          <div className="flex justify-between py-2 border-b border-border/30">
                            <span className="text-muted-foreground">Power</span>
                            <span className="font-medium text-foreground">{machine.specs.power}</span>
                          </div>
                        )}
                        {machine.specs.weight && (
                          <div className="flex justify-between py-2 border-b border-border/30">
                            <span className="text-muted-foreground">Operating Weight</span>
                            <span className="font-medium text-foreground">{machine.specs.weight}</span>
                          </div>
                        )}
                        {machine.specs.maxDiggingDepth && (
                          <div className="flex justify-between py-2 border-b border-border/30">
                            <span className="text-muted-foreground">Max Digging Depth</span>
                            <span className="font-medium text-foreground">{machine.specs.maxDiggingDepth}</span>
                          </div>
                        )}
                        {machine.specs.maxReach && (
                          <div className="flex justify-between py-2 border-b border-border/30">
                            <span className="text-muted-foreground">Max Reach</span>
                            <span className="font-medium text-foreground">{machine.specs.maxReach}</span>
                          </div>
                        )}
                        {machine.specs.bucketCapacity && (
                          <div className="flex justify-between py-2 border-b border-border/30">
                            <span className="text-muted-foreground">Bucket Capacity</span>
                            <span className="font-medium text-foreground">{machine.specs.bucketCapacity}</span>
                          </div>
                        )}
                        {machine.specs.bucketDiggingForce && (
                          <div className="flex justify-between py-2 border-b border-border/30">
                            <span className="text-muted-foreground">Bucket Digging Force</span>
                            <span className="font-medium text-foreground">{machine.specs.bucketDiggingForce}</span>
                          </div>
                        )}
                        {machine.specs.travelSpeed && (
                          <div className="flex justify-between py-2 border-b border-border/30">
                            <span className="text-muted-foreground">Travel Speed</span>
                            <span className="font-medium text-foreground">{machine.specs.travelSpeed}</span>
                          </div>
                        )}
                        {machine.specs.fuelTank && (
                          <div className="flex justify-between py-2 border-b border-border/30">
                            <span className="text-muted-foreground">Fuel Tank</span>
                            <span className="font-medium text-foreground">{machine.specs.fuelTank}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Basic Specs Grid (for machines without detailed specs) */}
                  {(!machine.specs || Object.keys(machine.specs).length <= 3) && (
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-4 rounded-xl bg-muted/30 border border-border/30">
                        <span className="text-xs text-muted-foreground uppercase tracking-wide">Year</span>
                        <p className="font-bold text-lg text-foreground">{machine.year}</p>
                      </div>
                      <div className="p-4 rounded-xl bg-muted/30 border border-border/30">
                        <span className="text-xs text-muted-foreground uppercase tracking-wide">Hours</span>
                        <p className="font-bold text-lg text-foreground">{machine.hours.toLocaleString()}</p>
                      </div>
                      <div className="p-4 rounded-xl bg-muted/30 border border-border/30">
                        <span className="text-xs text-muted-foreground uppercase tracking-wide">Condition</span>
                        <p className="font-bold text-lg text-green-500">Excellent</p>
                      </div>
                      <div className="p-4 rounded-xl bg-muted/30 border border-border/30">
                        <span className="text-xs text-muted-foreground uppercase tracking-wide">Status</span>
                        <p className="font-bold text-lg text-green-500">In Stock ✓</p>
                      </div>
                    </div>
                  )}

                  {/* Trust badges */}
                  <div className="flex flex-wrap gap-3 py-2">
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Shield className="w-4 h-4 text-primary" />
                      Verified Seller
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Truck className="w-4 h-4 text-primary" />
                      Shipping Available
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Inspected
                    </span>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col gap-3 pt-2">
                    <motion.div whileTap={{ scale: 0.98 }}>
                      <Button
                        asChild
                        size="lg"
                        className="w-full h-14 sm:h-16 text-lg font-bold rounded-2xl bg-[#25D366] hover:bg-[#22c55e] text-white shadow-xl"
                        style={{ boxShadow: '0 0 20px rgba(37, 211, 102, 0.4)' }}
                      >
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                          <MessageCircle className="w-6 h-6" />
                          Message on WhatsApp
                        </a>
                      </Button>
                    </motion.div>
                    <motion.div whileTap={{ scale: 0.98 }}>
                      <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="w-full h-14 sm:h-16 text-lg font-bold rounded-2xl border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg"
                        style={{ boxShadow: '0 0 15px hsl(45 100% 50% / 0.2)' }}
                      >
                        <a href="tel:+12029322837" className="flex items-center justify-center gap-2">
                          <Phone className="w-6 h-6" />
                          Call Now
                        </a>
                      </Button>
                    </motion.div>
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