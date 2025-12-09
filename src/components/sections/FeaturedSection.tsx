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
    <section id="featured" className="py-12 sm:py-20 md:py-32 relative">
      {/* Premium decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 mb-4 sm:mb-5 text-xs sm:text-sm font-semibold text-primary bg-primary/10 rounded-full border border-primary/20"
            style={{ boxShadow: '0 0 20px hsl(45 100% 50% / 0.1)' }}
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            LIMITED TIME OFFERS
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground mb-3 sm:mb-4">
            TODAY'S <span className="text-gradient-gold">HOTTEST</span> DEALS
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground">
            <span className="text-primary font-bold">20% OFF</span> Market Price — Verified & Ready to Ship
          </p>
        </motion.div>

        {/* Featured Grid */}
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
