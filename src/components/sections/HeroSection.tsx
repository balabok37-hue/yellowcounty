import { motion } from 'framer-motion';
import { AnimatedLetters } from '@/components/AnimatedText';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  const scrollToDeals = () => {
    document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="container relative z-10 text-center px-5 sm:px-6 py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto space-y-6 sm:space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-primary">
              #1 Heavy Equipment Dealer in USA
            </span>
          </motion.div>

          {/* Main Headline - Mobile-first sizing */}
          <h1 className="text-[2.5rem] leading-[0.95] sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground">
            <AnimatedLetters text="Heavy Machinery" delay={0.4} />
            <br />
            <span className="text-gradient-gold">
              <AnimatedLetters text="That Pays For Itself" delay={0.8} />
            </span>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="text-base sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto px-2"
          >
            Hand-selected premium units — <span className="text-primary font-semibold">20% below market</span>
          </motion.p>

          {/* CTA Button - Mobile optimized */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            whileTap={{ scale: 0.97 }}
          >
            <Button
              size="lg"
              onClick={scrollToDeals}
              className="btn-glow bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base sm:text-lg px-8 sm:px-10 py-6 sm:py-7 rounded-2xl min-h-[56px] touch-manipulation"
            >
              See Today's Best Deals
              <ChevronDown className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>

          {/* Stats - Mobile grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="grid grid-cols-3 gap-4 sm:flex sm:flex-wrap sm:justify-center sm:gap-8 md:gap-16 pt-8 sm:pt-12"
          >
            {[
              { value: '500+', label: 'Units Sold' },
              { value: '$50M+', label: 'Equipment Value' },
              { value: '98%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.9 + index * 0.1, duration: 0.4 }}
              >
                <div className="text-xl sm:text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator - hidden on very small screens */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
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
