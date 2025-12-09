import { motion } from 'framer-motion';
import { MapPin, Clock, MessageCircle, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface Machine {
  id: number;
  name: string;
  year: number;
  hours: number;
  location: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  specs?: {
    engine?: string;
    weight?: string;
    capacity?: string;
  };
  gallery?: string[];
}

interface MachineCardProps {
  machine: Machine;
  index: number;
  onViewDetails: (machine: Machine) => void;
}

export function MachineCard({ machine, index, onViewDetails }: MachineCardProps) {
  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in the ${machine.year} ${machine.name} listed at $${machine.price.toLocaleString()}. Is it still available?`
  );
  const whatsappUrl = `https://wa.me/+12029322837?text=${whatsappMessage}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="glass-card hover-lift overflow-hidden">
        {/* Image Container */}
        <div className="relative img-zoom-container aspect-[4/3]">
          <img
            src={machine.image}
            alt={machine.name}
            className="w-full h-full object-cover"
          />
          {/* Discount Badge */}
          <div className="absolute top-4 left-4 badge-discount">
            −{machine.discount}%
          </div>
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Title */}
          <h3 className="text-xl font-bold text-foreground leading-tight">
            {machine.name}
          </h3>

          {/* Meta info */}
          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-primary" />
              {machine.year} • {machine.hours.toLocaleString()} hrs
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-accent" />
              {machine.location}
            </span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3">
            <span className="price-main">${machine.price.toLocaleString()}</span>
            <span className="price-strike">${machine.originalPrice.toLocaleString()}</span>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-2">
            <Button
              asChild
              className="flex-1 bg-[#25D366] hover:bg-[#22c55e] text-primary-foreground font-semibold"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </Button>
            <Button
              variant="outline"
              className="flex-1 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => onViewDetails(machine)}
            >
              <Eye className="w-4 h-4 mr-2" />
              Details
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
