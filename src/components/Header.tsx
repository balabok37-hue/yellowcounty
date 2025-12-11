import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X, Mail, MapPin, MessageCircle, FileText, Package, Send, Truck } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: 'Equipment', href: '/#featured', icon: Package },
    { label: 'Contact', href: '/#contact', icon: Send },
    { label: 'Partners', href: '/#partners', icon: Truck },
    { label: 'Documents', href: '/documents', isRoute: true, icon: FileText },
  ];

  const handleNavClick = (href: string, isRoute?: boolean) => {
    if (isRoute) {
      if (href === '/documents' && location.pathname === '/documents') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate(href);
      }
    } else if (href.startsWith('/#')) {
      const sectionId = href.substring(2);
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollTo: sectionId } });
      } else {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50"
      >
        <div className="container px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="text-xl md:text-2xl font-bold text-foreground">
                Yellow<span className="text-primary">Stone</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => handleNavClick('/#featured')}
                className="text-foreground/80 hover:text-primary transition-colors duration-200 flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border/30 hover:border-primary/50 bg-background/50"
              >
                <Package className="w-4 h-4" />
                Equipment
              </button>
              <button 
                onClick={() => handleNavClick('/#contact')}
                className="text-foreground/80 hover:text-primary transition-colors duration-200 flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border/30 hover:border-primary/50 bg-background/50"
              >
                <Send className="w-4 h-4" />
                Contact
              </button>
              <button 
                onClick={() => handleNavClick('/#partners')}
                className="text-foreground/80 hover:text-primary transition-colors duration-200 flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border/30 hover:border-primary/50 bg-background/50"
              >
                <Truck className="w-4 h-4" />
                Partners
              </button>
              <Link 
                to="/documents"
                className="text-foreground/80 hover:text-primary transition-colors duration-200 flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border/30 hover:border-primary/50 bg-background/50"
              >
                <FileText className="w-4 h-4" />
                Documents
              </Link>
              <Button 
                variant="outline" 
                size="sm" 
                className="border-primary/50 text-primary hover:bg-primary/10 transition-colors duration-200"
                onClick={() => setIsCallModalOpen(true)}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden w-12 h-12 flex items-center justify-center rounded-xl bg-card/50 border border-border/50 active:scale-95 transition-transform duration-150"
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
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-background"
          >
            {/* Header */}
            <div className="flex items-center justify-between h-16 px-4 border-b border-border/50">
              <span className="text-xl font-bold text-foreground">
                Yellow<span className="text-primary">Stone</span>
              </span>
              <button
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-card border border-border active:scale-95 transition-transform duration-150"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="w-6 h-6 text-foreground" />
              </button>
            </div>

            {/* Menu Content */}
            <div className="p-6 space-y-3">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.25 }}
                  onClick={() => handleNavClick(item.href, item.isRoute)}
                  className="flex items-center justify-between p-5 rounded-2xl bg-card border border-border/50 active:bg-card/80 transition-colors duration-150 w-full text-left"
                >
                  <span className="text-lg font-semibold text-foreground flex items-center gap-2">
                    {item.icon && <item.icon className="w-5 h-5" />}
                    {item.label}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary">→</span>
                  </div>
                </motion.button>
              ))}

              {/* Contact Actions */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.25 }}
                className="pt-6 space-y-3"
              >
                <a
                  href="tel:+12402427810"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-primary text-primary-foreground active:opacity-90 transition-opacity duration-150"
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
                  className="flex items-center gap-4 p-5 rounded-2xl bg-[#25D366] text-white active:opacity-90 transition-opacity duration-150"
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
                  className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50 active:bg-card/80 transition-colors duration-150"
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
              className="flex items-center gap-4 p-4 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors duration-200"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Call us</div>
                <div className="font-semibold text-foreground">+1 (240) 242-7810</div>
              </div>
            </a>
            
            <a 
              href="mailto:sales@yellowcounty.com"
              className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-200"
            >
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
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
