import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown, Star, Award, TrendingUp } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';
import { useRef } from 'react';

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const scrollToDeals = () => {
    document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={containerRef} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Parallax Background Image - Brighter */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, scale }}
      >
        <img 
          src={heroBackground} 
          alt="Premium heavy machinery fleet" 
          className="w-full h-full object-cover object-center brightness-110 contrast-105"
          loading="eager"
          decoding="async"
        />
        {/* Lighter overlay for brighter image */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/90" />
        <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,hsl(var(--background))_100%)] opacity-60" />
      </motion.div>

      {/* Geometric Decorative Elements */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        {/* Large hexagon top right */}
        <motion.div 
          className="absolute -top-20 -right-20 w-[400px] h-[400px] border-2 border-primary/20"
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        />
        
        {/* Diamond shape left */}
        <motion.div 
          className="absolute top-1/3 -left-16 w-32 h-32 border-2 border-primary/25 rotate-45"
          animate={{ 
            y: [0, 30, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        {/* Circle with border bottom left */}
        <motion.div 
          className="absolute bottom-40 left-10 w-24 h-24 rounded-full border-2 border-secondary/30"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        {/* Triangle top left */}
        <motion.div 
          className="absolute top-24 left-1/4 w-0 h-0"
          style={{ 
            borderLeft: '30px solid transparent',
            borderRight: '30px solid transparent',
            borderBottom: '52px solid hsl(48 100% 50% / 0.15)'
          }}
          animate={{ 
            rotate: [0, 180, 360],
            y: [0, -20, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
        
        {/* Small squares pattern right side */}
        <motion.div 
          className="absolute top-1/2 right-20 w-8 h-8 border-2 border-primary/30"
          animate={{ rotate: [0, 90, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div 
          className="absolute top-1/2 right-36 mt-12 w-6 h-6 bg-primary/20"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        {/* Horizontal line accent */}
        <motion.div 
          className="absolute top-1/4 left-0 w-40 h-[2px] bg-gradient-to-r from-primary/50 to-transparent"
          animate={{ x: [-160, 0, -160] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        {/* Dotted circle right */}
        <svg className="absolute bottom-1/4 right-1/4 w-48 h-48 opacity-20" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="hsl(48 100% 50%)" strokeWidth="1" strokeDasharray="5 5">
            <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="30s" repeatCount="indefinite"/>
          </circle>
        </svg>
        
        {/* Corner bracket top right */}
        <div className="absolute top-20 right-40 w-16 h-16 border-t-2 border-r-2 border-primary/30" />
        
        {/* Corner bracket bottom left */}
        <div className="absolute bottom-32 left-40 w-16 h-16 border-b-2 border-l-2 border-secondary/30" />
      </div>

      {/* Golden accent line bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent z-10" />
      
      {/* Content with fade on scroll */}
      <motion.div 
        className="container relative z-10 text-center px-4 sm:px-6 py-12 sm:py-20"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto space-y-5 sm:space-y-8"
        >
          {/* Premium Badge with glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-primary/15 border border-primary/40 backdrop-blur-sm"
            style={{ boxShadow: '0 0 40px hsl(48 100% 50% / 0.2)' }}
          >
            <Award className="w-4 h-4 text-primary" />
            <span className="text-xs sm:text-sm font-bold text-primary tracking-wide">
              #1 HEAVY EQUIPMENT DEALER IN USA
            </span>
            <Star className="w-4 h-4 text-primary fill-primary" />
          </motion.div>

          {/* Main Headline with luxury styling */}
          <motion.h1 
            className="text-[1.75rem] leading-[1.1] sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight sm:tracking-tighter text-foreground px-2 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Heavy Machinery
            <br />
            <span className="text-gradient-gold relative">
              That Pays For Itself
              {/* Underline accent */}
              <motion.div 
                className="absolute -bottom-2 left-1/4 right-1/4 h-1 rounded-full bg-gradient-to-r from-primary/0 via-primary to-primary/0"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              />
            </span>
          </motion.h1>

          {/* Subheadline with premium touch */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-sm sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-2"
          >
            Hand-selected premium units — <span className="text-primary font-bold">20% below market</span>
          </motion.p>

          {/* Premium CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            whileTap={{ scale: 0.97 }}
          >
            <Button
              size="lg"
              onClick={scrollToDeals}
              className="relative btn-glow bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm sm:text-lg px-8 sm:px-12 py-6 sm:py-8 rounded-2xl min-h-[56px] sm:min-h-[64px] touch-manipulation overflow-hidden group"
              style={{ boxShadow: '0 0 50px hsl(48 100% 50% / 0.35), 0 15px 50px hsl(0 0% 0% / 0.4)' }}
            >
              {/* Shine effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
              />
              <span className="relative flex items-center gap-2">
                See Today's Best Deals
                <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" />
              </span>
            </Button>
          </motion.div>

          {/* Stats with luxury cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="grid grid-cols-3 gap-3 sm:gap-6 pt-8 sm:pt-14 max-w-3xl mx-auto"
          >
            {[
              { value: '500+', label: 'Units Sold', icon: TrendingUp },
              { value: '$50M+', label: 'Equipment Value', icon: Award },
              { value: '98%', label: 'Satisfaction', icon: Star },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center p-3 sm:p-5 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.4 }}
                whileHover={{ 
                  scale: 1.05, 
                  borderColor: 'hsl(48 100% 50% / 0.4)',
                  boxShadow: '0 0 40px hsl(48 100% 50% / 0.15)'
                }}
              >
                <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary mx-auto mb-1 sm:mb-2" />
                <div className="text-lg sm:text-3xl md:text-4xl font-black text-primary" style={{ textShadow: '0 0 25px hsl(48 100% 50% / 0.35)' }}>
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-sm text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Premium scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-7 h-12 rounded-full border-2 border-primary/40 flex justify-center pt-3 bg-background/30 backdrop-blur-sm"
          style={{ boxShadow: '0 0 25px hsl(48 100% 50% / 0.15)' }}
        >
          <motion.div 
            className="w-1.5 h-3 rounded-full bg-primary"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}