import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Phone, Mail, MapPin, MessageCircle, Clock, Building2 } from 'lucide-react';

interface CompanyInfoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CompanyInfoModal({ open, onOpenChange }: CompanyInfoModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">YS</span>
            </div>
            YellowStone Equipment
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* About */}
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
              About Us
            </h3>
            <p className="text-foreground">
              Premium heavy equipment dealer specializing in hand-selected excavators, 
              dozers, loaders, and more. Quality machines at below-market prices with 
              nationwide delivery.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Contact Information
            </h3>
            
            <a 
              href="tel:+16783106065" 
              className="flex items-center gap-3 p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
            >
              <Phone className="w-5 h-5 text-primary" />
              <div>
                <div className="font-semibold text-foreground">+1 (678) 310-6065</div>
                <div className="text-sm text-muted-foreground">Main Phone</div>
              </div>
            </a>

            <a 
              href="https://wa.me/15797013943" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
              <div>
                <div className="font-semibold text-foreground">+1 (579) 701-3943</div>
                <div className="text-sm text-muted-foreground">WhatsApp</div>
              </div>
            </a>

            <a 
              href="mailto:sales@yellowstone.equipment"
              className="flex items-center gap-3 p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
            >
              <Mail className="w-5 h-5 text-primary" />
              <div>
                <div className="font-semibold text-foreground">sales@yellowstone.equipment</div>
                <div className="text-sm text-muted-foreground">Email</div>
              </div>
            </a>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
              <MapPin className="w-5 h-5 text-primary" />
              <div>
                <div className="font-semibold text-foreground">Billings, MT 59101</div>
                <div className="text-sm text-muted-foreground">Location</div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Business Hours
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-foreground">Monday - Friday</div>
              <div className="text-muted-foreground">8:00 AM - 6:00 PM CST</div>
              <div className="text-foreground">Saturday</div>
              <div className="text-muted-foreground">9:00 AM - 4:00 PM CST</div>
              <div className="text-foreground">Sunday</div>
              <div className="text-muted-foreground">Closed</div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2 flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              Services
            </h3>
            <ul className="text-sm text-foreground space-y-1">
              <li>• Equipment Sales & Financing</li>
              <li>• Nationwide Delivery</li>
              <li>• Equipment Inspection Reports</li>
              <li>• Trade-In Available</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}