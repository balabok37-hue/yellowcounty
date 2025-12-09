import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

export function HeroSection() {
  const scrollToDeals = () => {
    document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay - Preloaded with eager loading */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Heavy machinery" 
          className="w-full h-full object-cover object-center"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        {/* Primary color tint overlay */}
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
        {/* Vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_100%)] opacity-60" />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 text-center px-4 sm:px-6 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto space-y-5 sm:space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[11px] sm:text-sm font-medium text-primary">
              #1 Heavy Equipment Dealer in USA
            </span>
          </motion.div>

          {/* Main Headline - Simple and reliable */}
          <motion.h1 
            className="text-[1.75rem] leading-[1.15] sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight sm:tracking-tighter text-foreground px-2 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Heavy Machinery
            <br />
            <span className="text-gradient-gold">That Pays For Itself</span>
          </motion.h1>

          {/* Subheadline - Better mobile sizing */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-sm sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-2"
          >
            Hand-selected premium units — <span className="text-primary font-semibold">20% below market</span>
          </motion.p>

          {/* CTA Button - Mobile optimized */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            whileTap={{ scale: 0.97 }}
          >
            <Button
              size="lg"
              onClick={scrollToDeals}
              className="btn-glow bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm sm:text-lg px-6 sm:px-10 py-5 sm:py-7 rounded-2xl min-h-[52px] sm:min-h-[56px] touch-manipulation"
            >
              See Today's Best Deals
              <ChevronDown className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </motion.div>

          {/* Stats - Mobile grid with better spacing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="grid grid-cols-3 gap-2 sm:gap-4 sm:flex sm:flex-wrap sm:justify-center md:gap-16 pt-6 sm:pt-12"
          >
            {[
              { value: '500+', label: 'Units Sold' },
              { value: '$50M+', label: 'Equipment Value' },
              { value: '98%', label: 'Satisfaction' },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + index * 0.1, duration: 0.4 }}
              >
                <div className="text-lg sm:text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-[10px] sm:text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
