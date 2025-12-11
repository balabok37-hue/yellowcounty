import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, FileText, ShieldCheck, BadgeCheck, Star, Truck } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container px-4">
        {/* Trust Badges & Ratings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 pb-10 border-b border-border/30"
        >
          {/* Rating Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className={`w-4 h-4 ${star <= 5 ? 'fill-primary text-primary' : 'fill-primary/50 text-primary/50'}`} />
                ))}
              </div>
              <span className="text-sm font-semibold text-foreground">4.9/5</span>
              <span className="text-xs text-muted-foreground">Average Rating</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <ShieldCheck className="w-4 h-4 text-green-500" />
                <span>Verified Seller</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <BadgeCheck className="w-4 h-4 text-blue-500" />
                <span>Licensed Dealer</span>
              </div>
            </div>
          </div>

          {/* Shipping Partners */}
          <div id="partners" className="text-center scroll-mt-24">
            <p className="text-xs text-muted-foreground mb-4 uppercase tracking-wider">Trusted Shipping Partners</p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border/50">
                <Truck className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">Central Dispatch</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border/50">
                <Truck className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">Montway</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border/50">
                <Truck className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">Ready Logistics</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8"
        >
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Yellow<span className="text-primary">Stone</span> County Equipment
            </h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Montana's premier destination for premium used and new heavy equipment. 
              Hand-selected machines, verified quality, unbeatable pricing.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                <ShieldCheck className="w-5 h-5 text-green-500" />
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                <BadgeCheck className="w-5 h-5 text-blue-500" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <button 
                  onClick={() => handleNavClick('featured')}
                  className="hover:text-primary transition-colors text-left"
                >
                  Featured Equipment
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('contact')}
                  className="hover:text-primary transition-colors text-left"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <Link to="/documents" className="hover:text-primary transition-colors flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  Company Documents
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('contact')}
                  className="hover:text-primary transition-colors text-left"
                >
                  Financing Options
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+12402427810" className="hover:text-primary transition-colors">
                  +1 (240) 242-7810
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <a href="https://wa.me/15797013943" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors">
                  +1 (579) 701-3943 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:sales@yellowcounty.com" className="hover:text-primary transition-colors">
                  sales@yellowcounty.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>5150 Midland Rd, Billings, MT 59101</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-border/30 text-center text-muted-foreground text-sm"
        >
          © 2026 YellowStone County Equipment. All rights reserved. Premium Used & New Equipment.
        </motion.div>
      </div>
    </footer>
  );
}
