import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Send, Loader2, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { generateEventId, hashUserData, parseFullName, storeLeadData } from '@/lib/meta-pixel';

export function ContactSection() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Listen for prefill events from MachineModal
  useEffect(() => {
    const handlePrefill = (e: CustomEvent<{ message: string }>) => {
      setFormData(prev => ({ ...prev, message: e.detail.message }));
    };
    window.addEventListener('prefillContactForm', handlePrefill as EventListener);
    return () => window.removeEventListener('prefillContactForm', handlePrefill as EventListener);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const eventId = generateEventId();
      const { firstName, lastName } = parseFullName(formData.name);
      const hashedUserData = await hashUserData({
        email: formData.email,
        phone: formData.phone || undefined,
        firstName,
        lastName: lastName || undefined
      });

      storeLeadData({ eventId, hashedUserData });

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

      const { error: metaError } = await supabase.functions.invoke('meta-conversions-api', {
        body: {
          event_name: 'Lead',
          event_id: eventId,
          user_data: hashedUserData,
          event_source_url: window.location.href,
          custom_data: {
            content_name: 'Contact Form',
            content_category: 'Equipment'
          }
        },
      });

      if (metaError) {
        console.error('Meta CAPI error:', metaError);
      }

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

      setFormData({ name: '', email: '', phone: '', message: '' });
      navigate('/thank-you');
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-muted">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">
            Ready to find your next machine? Contact us today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card rounded-lg shadow-md p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Name
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Smith"
                    className="bg-background border-border"
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
                    className="bg-background border-border"
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
                  className="bg-background border-border"
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
                  className="bg-background border-border"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
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
          </div>

          {/* Map & Contact Info */}
          <div className="space-y-6">
            <div className="bg-card rounded-lg shadow-md overflow-hidden aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2843.8876513523456!2d-108.5576!3d45.7851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5345e899e0000001%3A0x1234567890abcdef!2s5150%20Midland%20Rd%2C%20Billings%2C%20MT%2059101!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="YellowStone County Equipment Location"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card rounded-lg shadow-md p-4 text-center">
                <Phone className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-xs text-muted-foreground">Phone</div>
                <a href="tel:+16783106065" className="font-semibold text-foreground hover:text-primary transition-colors text-sm">
                  +1 (678) 310-6065
                </a>
              </div>
              <div className="bg-card rounded-lg shadow-md p-4 text-center">
                <MessageCircle className="w-6 h-6 text-[#25D366] mx-auto mb-2" />
                <div className="text-xs text-muted-foreground">WhatsApp</div>
                <a href="https://wa.me/15797013943" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:text-[#25D366] transition-colors text-sm">
                  +1 (579) 701-3943
                </a>
              </div>
              <div className="bg-card rounded-lg shadow-md p-4 text-center">
                <Mail className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-xs text-muted-foreground">Email</div>
                <a href="mailto:sales@yellowstone.equipment" className="font-semibold text-foreground hover:text-primary transition-colors text-sm truncate block">
                  sales@yellowstone.equipment
                </a>
              </div>
              <div className="bg-card rounded-lg shadow-md p-4 text-center">
                <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-xs text-muted-foreground">Location</div>
                <div className="font-semibold text-foreground text-sm">
                  Billings, MT 59101
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
