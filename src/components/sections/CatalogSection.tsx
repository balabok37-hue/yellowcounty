import { motion, AnimatePresence } from 'framer-motion';
import { useMemo, useState } from 'react';
import { MachineCard } from '@/components/MachineCard';
import { catalogMachines, categoryInfo } from '@/data/machines';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronDown, ChevronUp, Shovel, Truck, Forklift, Cog, Loader, Search, X } from 'lucide-react';
import { CardReveal } from '@/components/ScrollReveal';
import type { Machine, MachineCategory } from '@/components/MachineCard';

interface CatalogSectionProps {
  isOpen: boolean;
  onToggle: () => void;
  onHoverButton?: () => void;
  onViewDetails: (machine: Machine) => void;
}

const categoryIcons: Record<MachineCategory, React.ElementType> = {
  earthmoving: Shovel,
  loaders: Loader,
  telehandlers: Forklift,
  trucks: Truck,
  specialty: Cog,
};

export function CatalogSection({ isOpen, onToggle, onHoverButton, onViewDetails }: CatalogSectionProps) {
  const [activeCategory, setActiveCategory] = useState<MachineCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMachines = useMemo(() => {
    let machines = catalogMachines;
    
    if (activeCategory !== 'all') {
      machines = machines.filter(m => m.category === activeCategory);
    }
    
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      machines = machines.filter(m => 
        m.name.toLowerCase().includes(query) ||
        m.year.toString().includes(query) ||
        m.location.toLowerCase().includes(query)
      );
    }
    
    return machines;
  }, [activeCategory, searchQuery]);

  const catalogCount = catalogMachines.length;

  return (
    <section className="pb-12 sm:pb-20 md:pb-32">
      <div className="container px-4 sm:px-6">
        {/* Toggle Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10 sm:mb-16"
        >
          <Button
            size="lg"
            onClick={onToggle}
            onMouseEnter={onHoverButton}
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-black text-base sm:text-xl px-8 sm:px-14 py-6 sm:py-8 rounded-2xl min-h-[64px] touch-manipulation shadow-xl active:scale-[0.98] transition-transform duration-150"
          >
            {isOpen ? (
              <>
                HIDE CATALOG
                <ChevronUp className="ml-3 w-6 h-6" />
              </>
            ) : (
              <>
                <span className="hidden sm:inline">VIEW FULL CATALOG → {catalogCount} UNITS</span>
                <span className="sm:hidden">VIEW ALL {catalogCount} UNITS</span>
                <ChevronDown className="ml-3 w-6 h-6" />
              </>
            )}
          </Button>
        </motion.div>

        {/* Catalog Grid */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-center mb-8 sm:mb-12"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
                  FULL INVENTORY
                </h2>
                
                {/* Search Input */}
                <div className="max-w-md mx-auto mb-6 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                  <Input
                    type="text"
                    placeholder="Search by name, brand, model, year..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 pr-10 py-3 bg-background/50 border-border/50 rounded-full text-base"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors duration-150"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6">
                  <Button
                    variant={activeCategory === 'all' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setActiveCategory('all')}
                    className={`rounded-full px-4 sm:px-6 transition-colors duration-150 ${activeCategory === 'all' ? 'bg-primary text-primary-foreground' : 'border-border/50'}`}
                  >
                    All ({catalogCount})
                  </Button>
                  {(Object.keys(categoryInfo) as MachineCategory[]).map(cat => {
                    const Icon = categoryIcons[cat];
                    const count = catalogMachines.filter(m => m.category === cat).length;
                    if (count === 0) return null;
                    return (
                      <Button
                        key={cat}
                        variant={activeCategory === cat ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setActiveCategory(cat)}
                        className={`rounded-full px-3 sm:px-5 transition-colors duration-150 ${activeCategory === cat ? 'bg-primary text-primary-foreground' : 'border-border/50'}`}
                      >
                        <Icon className="w-4 h-4 mr-1.5" />
                        <span className="hidden sm:inline">{categoryInfo[cat].label}</span>
                        <span className="sm:hidden">{categoryInfo[cat].label.slice(0, 5)}</span>
                        <span className="ml-1.5 text-xs opacity-70">({count})</span>
                      </Button>
                    );
                  })}
                </div>

                <p className="text-sm sm:text-lg text-muted-foreground px-4">
                  {filteredMachines.length} machines ready for immediate delivery
                </p>
              </motion.div>

              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
                {filteredMachines.map((machine, index) => (
                  <CardReveal key={machine.id} index={index}>
                    <MachineCard
                      machine={machine}
                      index={index}
                      onViewDetails={onViewDetails}
                    />
                  </CardReveal>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
