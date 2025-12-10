import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X, Mail, MapPin } from 'lucide-react';
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
  
  const { scrollY } = useScroll();
  
  // Smooth spring for all transforms
  const springConfig = { stiffness: 100, damping: 30 };
  
  // Header transforms based on scroll
  const rawBackgroundOpacity = useTransform(scrollY, [0, 100], [0, 0.95]);
  const rawBlur = useTransform(scrollY, [0, 100], [0, 20]);
  const rawBorderOpacity = useTransform(scrollY, [0, 100], [0, 0.5]);
  const rawScale = useTransform(scrollY, [0, 100], [1, 0.98]);
  const rawY = useTransform(scrollY, [0, 50], [0, -5]);
  
  // Apply springs
  const backgroundOpacity = useSpring(rawBackgroundOpacity, springConfig);
  const blur = useSpring(rawBlur, springConfig);
  const borderOpacity = useSpring(rawBorderOpacity, springConfig);
  const scale = useSpring(rawScale, springConfig);
  const y = useSpring(rawY, springConfig);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        style={{
          y,
          scale,
          willChange: 'transform'
        }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        {/* Animated background */}
        <motion.div 
          className="absolute inset-0 bg-background border-b border-primary/20"
          style={{ 
            opacity: backgroundOpacity,
            backdropFilter: blur.get() > 0 ? `blur(${blur.get()}px)` : 'none',
            borderBottomColor: `hsl(48 100% 50% / ${borderOpacity.get()})`
          }}
        />
        
        {/* Glow effect on scroll */}
        <motion.div 
          className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
          style={{ opacity: borderOpacity }}
        />
        
        <div className="container px-4 relative z-10">
          <div className="flex items-center justify-between h-20">
            {/* Logo with hover effect */}
            <motion.a 
              href="/" 
              className="text-2xl font-bold text-foreground"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Yellow<span className="text-primary">Stone</span>
            </motion.a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {['Equipment', 'Contact'].map((item, i) => (
                <motion.a 
                  key={item}
                  href={`#${item.toLowerCase() === 'equipment' ? 'featured' : 'contact'}`}
                  className="text-foreground/80 hover:text-primary transition-colors relative"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  {item}
                  <motion.span 
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-primary/50 text-primary hover:bg-primary/10"
                  onClick={() => setIsCallModalOpen(true)}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </motion.div>
            </nav>

            {/* Mobile Menu Toggle */}
            <motion.button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              className="md:hidden py-6 space-y-4"
            >
              <a
                href="#featured"
                className="block text-lg text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Equipment
              </a>
              <a
                href="#contact"
                className="block text-lg text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Button 
                className="w-full bg-primary text-primary-foreground"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsCallModalOpen(true);
                }}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </motion.nav>
          )}
        </div>
      </motion.header>

      {/* Call Modal */}
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
