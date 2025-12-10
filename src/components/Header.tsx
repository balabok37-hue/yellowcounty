import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);

  const menuItems = [
    { label: 'Equipment', href: '#featured' },
    { label: 'Why Us', href: '#contact' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/50"
      >
        <div className="container px-4">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <motion.a 
              href="/" 
              className="text-xl sm:text-2xl font-bold text-foreground"
              whileTap={{ scale: 0.95 }}
            >
              Yellow<span className="text-primary">Stone</span>
            </motion.a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {['Equipment', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase() === 'equipment' ? 'featured' : 'contact'}`}
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
              <Button 
                variant="outline" 
                size="sm" 
                className="border-primary/50 text-primary hover:bg-primary/10"
                onClick={() => setIsCallModalOpen(true)}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden w-12 h-12 flex items-center justify-center rounded-xl bg-card/50 border border-border/50"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6 text-foreground" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-background"
          >
            {/* Header */}
            <div className="flex items-center justify-between h-16 px-4 border-b border-border/50">
              <span className="text-xl font-bold text-foreground">
                Yellow<span className="text-primary">Stone</span>
              </span>
              <button
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-card border border-border"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="w-6 h-6 text-foreground" />
              </button>
            </div>

            {/* Menu Content */}
            <div className="p-6 space-y-3">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between p-5 rounded-2xl bg-card border border-border/50 active:bg-card/80"
                >
                  <span className="text-lg font-semibold text-foreground">{item.label}</span>
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary">→</span>
                  </div>
                </motion.a>
              ))}

              {/* Contact Actions */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-6 space-y-3"
              >
                <a
                  href="tel:+12402427810"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-primary text-primary-foreground"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm opacity-80">Call Now</div>
                    <div className="font-bold">+1 (240) 242-7810</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/15797013943"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-[#25D366] text-white"
                >
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm opacity-80">WhatsApp</div>
                    <div className="font-bold">+1 (579) 701-3943</div>
                  </div>
                </a>

                <a
                  href="mailto:sales@yellowcounty.com"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50"
                >
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                    <Mail className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email Us</div>
                    <div className="font-semibold text-foreground">sales@yellowcounty.com</div>
                  </div>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call Modal (Desktop) */}
      <Dialog open={isCallModalOpen} onOpenChange={setIsCallModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl">Contact Us</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <a 
              href="tel:+12402427810"
              className="flex items-center gap-4 p-4 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Call us</div>
                <div className="font-semibold text-foreground">+1 (240) 242-7810</div>
              </div>
            </a>
            
            <a 
              href="mailto:sales@yellowcounty.com"
              className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center group-hover:bg-muted/80 transition-colors">
                <Mail className="w-6 h-6 text-muted-foreground" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Email us</div>
                <div className="font-semibold text-foreground">sales@yellowcounty.com</div>
              </div>
            </a>
            
            <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                <MapPin className="w-6 h-6 text-muted-foreground" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Visit us</div>
                <div className="font-semibold text-foreground text-sm">5150 Midland Rd, Billings, MT 59101</div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
