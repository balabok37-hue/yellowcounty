import { Phone, Mail, MapPin, MessageCircle, FileText, ShieldCheck, BadgeCheck, Star } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import centralDispatchLogo from '@/assets/partners/central-dispatch.svg';

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
    <footer className="py-12 bg-secondary text-secondary-foreground">
      <div className="container px-4">
        {/* Trust Badges & Ratings */}
        <div className="mb-10 pb-10 border-b border-secondary-foreground/20">
          {/* Rating Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-foreground/10 border border-secondary-foreground/20">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-[hsl(45,100%,50%)] text-[hsl(45,100%,50%)]" />
                ))}
              </div>
              <span className="text-sm font-semibold">4.9/5</span>
              <span className="text-xs text-secondary-foreground/70">Average Rating</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-sm text-secondary-foreground/70">
                <ShieldCheck className="w-4 h-4 text-green-400" />
                <span>Verified Seller</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-secondary-foreground/70">
                <BadgeCheck className="w-4 h-4 text-blue-400" />
                <span>Licensed Dealer</span>
              </div>
            </div>
          </div>

          {/* Shipping Partners */}
          <div id="partners" className="text-center scroll-mt-24">
            <p className="text-xs text-secondary-foreground/60 mb-4 uppercase tracking-wider">Trusted Shipping Partners</p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <a 
                href="https://www.centraldispatch.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center px-5 py-3 rounded-lg bg-white/90 hover:bg-white transition-colors h-14 min-w-[160px]"
              >
                <img src={centralDispatchLogo} alt="Central Dispatch" className="h-6 w-auto" width="141" height="24" />
              </a>
              <a 
                href="https://www.montway.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center px-5 py-3 rounded-lg bg-[#00263A] hover:opacity-90 transition-opacity h-14 min-w-[160px]"
              >
                <span className="text-white font-bold text-lg tracking-tight">MONTWAY</span>
              </a>
              <a 
                href="https://www.readylogistics.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center px-5 py-3 rounded-lg bg-[#950e14] hover:opacity-90 transition-opacity h-14 min-w-[160px]"
              >
                <span className="text-white font-bold text-lg tracking-tight">Ready Logistics</span>
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Yellow<span className="text-[hsl(45,100%,50%)]">Stone</span> County Equipment
            </h3>
            <p className="text-secondary-foreground/70 mb-4 max-w-md">
              Montana's premier destination for premium used and new heavy equipment. 
              Hand-selected machines, verified quality, unbeatable pricing.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-green-400" />
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <BadgeCheck className="w-5 h-5 text-blue-400" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-secondary-foreground/70">
              <li>
                <button 
                  onClick={() => handleNavClick('catalog')}
                  className="hover:text-[hsl(45,100%,50%)] transition-colors text-left"
                >
                  Equipment Catalog
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('contact')}
                  className="hover:text-[hsl(45,100%,50%)] transition-colors text-left"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <Link to="/documents" className="hover:text-[hsl(45,100%,50%)] transition-colors flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  Company Documents
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('contact')}
                  className="hover:text-[hsl(45,100%,50%)] transition-colors text-left"
                >
                  Financing Options
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-secondary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[hsl(45,100%,50%)]" />
                <a href="tel:+16783106065" className="hover:text-[hsl(45,100%,50%)] transition-colors">
                  +1 (678) 310-6065
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <a href="https://wa.me/15797013943" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors">
                  +1 (579) 701-3943 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[hsl(45,100%,50%)]" />
                <a href="mailto:sales@yellowcounty.com" className="hover:text-[hsl(45,100%,50%)] transition-colors">
                  sales@yellowcounty.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[hsl(45,100%,50%)] mt-0.5" />
                <span>5150 Midland Rd, Billings, MT 59101</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/20 text-center text-secondary-foreground/60 text-sm">
          © 2026 YellowStone County Equipment. All rights reserved. Premium Used & New Equipment.
        </div>
      </div>
    </footer>
  );
}
