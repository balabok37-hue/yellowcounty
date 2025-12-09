import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Shield, Truck, BadgeCheck, Headphones, DollarSign, Wrench } from 'lucide-react';
import { useRef } from 'react';
import { CardReveal } from '@/components/ScrollReveal';

const features = [
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    description: 'Every machine undergoes 150-point inspection before listing',
    color: 'from-primary/20 to-primary/5',
  },
  {
    icon: Truck,
    title: 'Nationwide Delivery',
    description: 'Door-to-door shipping anywhere in the continental US',
    color: 'from-accent/20 to-accent/5',
  },
  {
    icon: BadgeCheck,
    title: 'Verified History',
    description: 'Complete maintenance records and ownership documentation',
    color: 'from-green-500/20 to-green-500/5',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Dedicated account managers available around the clock',
    color: 'from-blue-500/20 to-blue-500/5',
  },
  {
    icon: DollarSign,
    title: 'Best Pricing',
    description: 'Consistently 20% below market on certified equipment',
    color: 'from-primary/20 to-primary/5',
  },
  {
    icon: Wrench,
    title: 'Service Network',
    description: 'Access to 200+ certified service centers nationwide',
    color: 'from-accent/20 to-accent/5',
  },
];

export function WhyChooseSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30 };
  const backgroundY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -150]), springConfig);
  const headerOpacity = useSpring(useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]), springConfig);
  const headerY = useSpring(useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [60, 0, 0, -60]), springConfig);

  return (
    <section ref={containerRef} className="py-20 md:py-32 relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0" 
        style={{ y: backgroundY, willChange: 'transform' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </motion.div>
      
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container px-4 relative z-10">
        <motion.div
          style={{ opacity: headerOpacity, y: headerY, willChange: 'transform, opacity' }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-1.5 mb-4 text-xs sm:text-sm font-semibold text-primary bg-primary/10 rounded-full border border-primary/20"
          >
            WHY CHOOSE US
          </motion.span>
          <h2 className="section-title text-foreground mb-4">
            Why Dealers & Contractors Choose Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry-leading service that keeps your operations running
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <CardReveal key={index} index={index}>
              <motion.div
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="group h-full"
              >
                <div className="glass-card p-8 h-full hover-lift relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <motion.div 
                    className="relative w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    style={{ boxShadow: '0 0 20px hsl(45 100% 50% / 0.1)' }}
                  >
                    <feature.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  
                  <h3 className="relative text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="relative text-muted-foreground">
                    {feature.description}
                  </p>

                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            </CardReveal>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
}
