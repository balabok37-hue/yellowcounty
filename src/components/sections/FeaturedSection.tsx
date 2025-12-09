import { motion } from 'framer-motion';
import { MachineCard } from '@/components/MachineCard';
import { featuredMachines } from '@/data/machines';
import type { Machine } from '@/components/MachineCard';

interface FeaturedSectionProps {
  onViewDetails: (machine: Machine) => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export function FeaturedSection({ onViewDetails }: FeaturedSectionProps) {
  return (
    <section id="featured" className="py-12 sm:py-20 md:py-32">
      <div className="container px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block px-3 sm:px-4 py-1 mb-3 sm:mb-4 text-xs sm:text-sm font-semibold text-primary bg-primary/10 rounded-full"
          >
            LIMITED TIME OFFERS
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-3 sm:mb-4">
            TODAY'S HOTTEST DEALS
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground">
            <span className="text-primary font-semibold">20% OFF</span> Market Price
          </p>
        </motion.div>

        {/* Featured Grid - 1 col mobile, 2 col tablet, 4 col desktop */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featuredMachines.map((machine, index) => (
            <MachineCard
              key={machine.id}
              machine={machine}
              index={index}
              onViewDetails={onViewDetails}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
