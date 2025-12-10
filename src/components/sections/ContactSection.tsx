import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { useState, useRef } from 'react';
import { toast } from 'sonner';
import { ScrollReveal, CardReveal } from '@/components/ScrollReveal';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30 };
  const headerOpacity = useSpring(useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]), springConfig);
  const headerY = useSpring(useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [60, 0, 0, -60]), springConfig);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section ref={sectionRef} id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container px-4 relative z-10">
        <motion.div
          style={{ opacity: headerOpacity, y: headerY, willChange: 'transform, opacity' }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to find your next machine? Contact us today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <ScrollReveal direction="left">
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Name
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Smith"
                    className="bg-background/50 border-border/50"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Phone
                  </label>
                  <Input
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="bg-background/50 border-border/50"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@company.com"
                  className="bg-background/50 border-border/50"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about the equipment you're looking for..."
                  rows={4}
                  className="bg-background/50 border-border/50"
                  required
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full btn-glow bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </ScrollReveal>

          {/* Map & Contact Info */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
              <div className="glass-card overflow-hidden aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2843.8876513523456!2d-108.5576!3d45.7851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5345e899e0000001%3A0x1234567890abcdef!2s5150%20Midland%20Rd%2C%20Billings%2C%20MT%2059101!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(1) contrast(1.1)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="YellowStone County Equipment Location"
                />
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { icon: MapPin, label: 'Location', value: '5150 Midland Rd, Billings, MT 59101' },
                  { icon: Phone, label: 'Phone', value: '+1 (240) 242-7810', href: 'tel:+12402427810' },
                  { icon: Mail, label: 'Email', value: 'sales@yellowcounty.com', href: 'mailto:sales@yellowcounty.com' }
                ].map((item, index) => (
                  <CardReveal key={index} index={index}>
                    <div className="glass-card p-6 text-center h-full">
                      <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="font-semibold text-foreground hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <div className="font-semibold text-foreground">{item.value}</div>
                      )}
                    </div>
                  </CardReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
