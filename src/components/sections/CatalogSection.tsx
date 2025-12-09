import { motion, AnimatePresence } from 'framer-motion';
import { MachineCard } from '@/components/MachineCard';
import { catalogMachines } from '@/data/machines';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { Machine } from '@/components/MachineCard';

interface CatalogSectionProps {
  isOpen: boolean;
  onToggle: () => void;
  onViewDetails: (machine: Machine) => void;
}

export function CatalogSection({ isOpen, onToggle, onViewDetails }: CatalogSectionProps) {
  return (
    <section className="pb-20 md:pb-32">
      <div className="container px-4">
        {/* Toggle Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Button
            size="lg"
            onClick={onToggle}
            className="btn-glow bg-secondary hover:bg-secondary/80 text-secondary-foreground font-bold text-lg px-10 py-7 rounded-2xl border border-primary/30"
          >
            {isOpen ? (
              <>
                HIDE FULL CATALOG
                <ChevronUp className="ml-2 w-5 h-5" />
              </>
            ) : (
              <>
                VIEW FULL CATALOG → 16 MORE PREMIUM UNITS
                <ChevronDown className="ml-2 w-5 h-5" />
              </>
            )}
          </Button>
        </motion.div>

        {/* Catalog Grid */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-center mb-12"
              >
                <h2 className="section-title text-foreground mb-4">
                  FULL INVENTORY
                </h2>
                <p className="text-lg text-muted-foreground">
                  16 more hand-picked machines ready for immediate delivery
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {catalogMachines.map((machine, index) => (
                  <MachineCard
                    key={machine.id}
                    machine={machine}
                    index={index}
                    onViewDetails={onViewDetails}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
