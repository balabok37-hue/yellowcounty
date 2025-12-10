import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { useState, useRef } from 'react';
import { ScrollReveal, CardReveal } from '@/components/ScrollReveal';
import { supabase } from '@/integrations/supabase/client';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30 };
  const headerOpacity = useSpring(useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]), springConfig);
  const headerY = useSpring(useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [60, 0, 0, -60]), springConfig);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save lead to database
      const { error: dbError } = await supabase
        .from('leads')
        .insert({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          message: formData.message,
        });

      if (dbError) {
        console.error('Database error:', dbError);
        throw new Error('Failed to save lead');
      }

      // Send Telegram notification
      const { error: fnError } = await supabase.functions.invoke('send-telegram-notification', {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
      });

      if (fnError) {
        console.error('Telegram notification error:', fnError);
      }

      setShowSuccessModal(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
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
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full btn-glow bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
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

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <CardReveal index={0}>
                    <div className="glass-card p-4 sm:p-6 text-center h-full">
                      <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2 sm:mb-3" />
                      <div className="text-xs sm:text-sm text-muted-foreground">Location</div>
                      <div className="font-semibold text-foreground text-xs sm:text-sm">
                        5150 Midland Rd,<br />Billings, MT 59101
                      </div>
                    </div>
                  </CardReveal>
                  <CardReveal index={1}>
                    <div className="glass-card p-4 sm:p-6 text-center h-full">
                      <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2 sm:mb-3" />
                      <div className="text-xs sm:text-sm text-muted-foreground">Phone</div>
                      <a href="tel:+12402427810" className="font-semibold text-foreground hover:text-primary transition-colors text-xs sm:text-sm">
                        +1 (240) 242-7810
                      </a>
                    </div>
                  </CardReveal>
                </div>
                <CardReveal index={2}>
                  <div className="glass-card p-4 sm:p-6 text-center">
                    <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2 sm:mb-3" />
                    <div className="text-xs sm:text-sm text-muted-foreground">Email</div>
                    <a href="mailto:sales@yellowcounty.com" className="font-semibold text-foreground hover:text-primary transition-colors text-sm sm:text-lg">
                      sales@yellowcounty.com
                    </a>
                  </div>
                </CardReveal>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-xl">
              <CheckCircle2 className="w-8 h-8 text-green-500" />
              Message Sent!
            </DialogTitle>
          </DialogHeader>
          <div className="text-center py-4">
            <p className="text-lg text-foreground mb-2">
              Thank you for your inquiry!
            </p>
            <p className="text-muted-foreground">
              We will call you back within <span className="font-bold text-primary">2-15 minutes</span>
            </p>
          </div>
          <Button onClick={() => setShowSuccessModal(false)} className="w-full">
            Got it
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  );
}
