import { motion } from 'framer-motion';
import { MachineCard } from '@/components/MachineCard';
import { featuredMachines } from '@/data/machines';
import { CardReveal } from '@/components/ScrollReveal';
import type { Machine } from '@/components/MachineCard';

interface FeaturedSectionProps {
  onViewDetails: (machine: Machine) => void;
}

export function FeaturedSection({ onViewDetails }: FeaturedSectionProps) {
  return (
    <section id="featured" className="py-12 sm:py-20 md:py-32 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 mb-4 sm:mb-5 text-xs sm:text-sm font-semibold text-primary bg-primary/10 rounded-full border border-primary/20"
            style={{ boxShadow: '0 0 20px hsl(45 100% 50% / 0.1)' }}
          >
            <span className="w-2 h-2 rounded-full bg-accent" />
            LIMITED TIME OFFERS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground mb-3 sm:mb-4">
            TODAY'S <span className="text-gradient-gold">HOTTEST</span> DEALS
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground">
            <span className="text-primary font-bold">20% OFF</span> Market Price — Verified & Ready to Ship
          </p>
        </motion.div>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
          {featuredMachines.map((machine, index) => (
            <CardReveal key={machine.id} index={index}>
              <MachineCard
                machine={machine}
                index={index}
                onViewDetails={onViewDetails}
              />
            </CardReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
