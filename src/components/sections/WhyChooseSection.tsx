import { motion } from 'framer-motion';
import { Shield, Truck, BadgeCheck, Headphones, DollarSign, Wrench } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    description: 'Every machine undergoes 150-point inspection before listing',
  },
  {
    icon: Truck,
    title: 'Nationwide Delivery',
    description: 'Door-to-door shipping anywhere in the continental US',
  },
  {
    icon: BadgeCheck,
    title: 'Verified History',
    description: 'Complete maintenance records and ownership documentation',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Dedicated account managers available around the clock',
  },
  {
    icon: DollarSign,
    title: 'Best Pricing',
    description: 'Consistently 20% below market on certified equipment',
  },
  {
    icon: Wrench,
    title: 'Service Network',
    description: 'Access to 200+ certified service centers nationwide',
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-foreground mb-4">
            Why Dealers & Contractors Choose Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry-leading service that keeps your operations running
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass-card p-8 h-full hover-lift">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
