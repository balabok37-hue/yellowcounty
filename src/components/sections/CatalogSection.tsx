import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { MachineCard } from '@/components/MachineCard';
import { catalogMachines } from '@/data/machines';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { CardReveal } from '@/components/ScrollReveal';
import type { Machine } from '@/components/MachineCard';

interface CatalogSectionProps {
  isOpen: boolean;
  onToggle: () => void;
  onViewDetails: (machine: Machine) => void;
}

export function CatalogSection({ isOpen, onToggle, onViewDetails }: CatalogSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30 };
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]), springConfig);
  const y = useSpring(useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [80, 0, 0, -80]), springConfig);

  return (
    <section ref={sectionRef} className="pb-12 sm:pb-20 md:pb-32">
      <div className="container px-4 sm:px-6">
        {/* Toggle Button */}
        <motion.div
          style={{ opacity, y, willChange: 'transform, opacity' }}
          className="text-center mb-10 sm:mb-16"
        >
          <motion.div
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.02 }}
          >
            <Button
              size="lg"
              onClick={onToggle}
              className="w-full sm:w-auto btn-glow bg-secondary hover:bg-secondary/80 text-secondary-foreground font-bold text-sm sm:text-lg px-6 sm:px-10 py-5 sm:py-7 rounded-2xl border border-primary/30 min-h-[56px] touch-manipulation"
            >
              {isOpen ? (
                <>
                  HIDE FULL CATALOG
                  <ChevronUp className="ml-2 w-5 h-5" />
                </>
              ) : (
                <>
                  <span className="hidden sm:inline">VIEW FULL CATALOG → 16 MORE PREMIUM UNITS</span>
                  <span className="sm:hidden">VIEW ALL 16+ UNITS</span>
                  <ChevronDown className="ml-2 w-5 h-5" />
                </>
              )}
            </Button>
          </motion.div>
        </motion.div>

        {/* Catalog Grid */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="text-center mb-8 sm:mb-12"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-3 sm:mb-4">
                  FULL INVENTORY
                </h2>
                <p className="text-sm sm:text-lg text-muted-foreground px-4">
                  16 more hand-picked machines ready for immediate delivery
                </p>
              </motion.div>

              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
                {catalogMachines.map((machine, index) => (
                  <CardReveal key={machine.id} index={index}>
                    <MachineCard
                      machine={machine}
                      index={index}
                      onViewDetails={onViewDetails}
                    />
                  </CardReveal>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
