import { motion } from 'framer-motion';
import { MachineCard } from '@/components/MachineCard';
import { featuredMachines } from '@/data/machines';
import type { Machine } from '@/components/MachineCard';

interface FeaturedSectionProps {
  onViewDetails: (machine: Machine) => void;
}

export function FeaturedSection({ onViewDetails }: FeaturedSectionProps) {
  return (
    <section id="featured" className="py-20 md:py-32">
      <div className="container px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-primary bg-primary/10 rounded-full"
          >
            LIMITED TIME OFFERS
          </motion.span>
          <h2 className="section-title text-foreground mb-4">
            TODAY'S HOTTEST DEALS
          </h2>
          <p className="text-xl text-muted-foreground">
            <span className="text-primary font-semibold">20% OFF</span> Market Price
          </p>
        </motion.div>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {featuredMachines.map((machine, index) => (
            <MachineCard
              key={machine.id}
              machine={machine}
              index={index}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
