import { motion, AnimatePresence } from 'framer-motion';
import { useMemo, useState, useRef, useEffect } from 'react';
import { MachineCard } from '@/components/MachineCard';
import { catalogMachines, categoryInfo } from '@/data/machines';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronDown, ChevronUp, Shovel, Truck, Forklift, Cog, Loader, Search, X, Factory, ArrowUpDown, ArrowUp, Mountain, Tractor, Construction, Drum } from 'lucide-react';
import { CardReveal } from '@/components/ScrollReveal';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { Machine, MachineCategory } from '@/components/MachineCard';

type SortOption = 'hot-first' | 'price-low' | 'price-high' | 'discount' | 'newest' | 'lowest-hours';

interface CatalogSectionProps {
  isOpen: boolean;
  onToggle: () => void;
  onHoverButton?: () => void;
  onViewDetails: (machine: Machine) => void;
  urlSearchQuery?: string;
  onSearchChange?: (query: string) => void;
}

const categoryIcons: Record<MachineCategory, React.ElementType> = {
  excavators: Shovel,
  dozers: Mountain,
  'wheel-loaders': Loader,
  'track-loaders': Tractor,
  backhoes: Construction,
  telehandlers: Forklift,
  trucks: Truck,
  compaction: Drum,
};

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'hot-first', label: 'Hot Offers First' },
  { value: 'discount', label: 'Biggest Discount' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest First' },
  { value: 'lowest-hours', label: 'Lowest Hours' },
];

// Extract brand from machine name (e.g., "2022 Sany SY80U" → "Sany")
const extractBrand = (name: string): string => {
  const parts = name.split(' ');
  // Skip year (first part), brand is second part
  return parts[1] || 'Unknown';
};

// Get unique brands from catalog
const getUniqueBrands = (): string[] => {
  const brands = catalogMachines.map(m => extractBrand(m.name));
  return [...new Set(brands)].sort();
};

// Fuzzy search: allows for typos by checking character similarity
const fuzzyMatch = (text: string, query: string): boolean => {
  const t = text.toLowerCase();
  const q = query.toLowerCase();
  
  // Direct inclusion check first
  if (t.includes(q)) return true;
  
  // Check if all query characters exist in order (allows gaps)
  let tIndex = 0;
  for (let i = 0; i < q.length; i++) {
    const char = q[i];
    const found = t.indexOf(char, tIndex);
    if (found === -1) return false;
    tIndex = found + 1;
  }
  
  // Only match if enough characters matched relative to query length
  return q.length >= 2;
};

// Levenshtein distance for typo tolerance
const levenshteinDistance = (a: string, b: string): number => {
  const matrix: number[][] = [];
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  return matrix[b.length][a.length];
};

// Check if any word in text is similar to query (with typo tolerance)
const fuzzyWordMatch = (text: string, query: string): boolean => {
  const words = text.toLowerCase().split(/\s+/);
  const q = query.toLowerCase();
  
  for (const word of words) {
    // Allow 1 typo for words 4+ chars, 0 typos for shorter
    const maxDistance = q.length >= 4 ? 1 : 0;
    if (levenshteinDistance(word.slice(0, q.length + 1), q) <= maxDistance) {
      return true;
    }
  }
  return false;
};

// Sort machines based on selected option
const sortMachines = (machines: Machine[], sortBy: SortOption): Machine[] => {
  const sorted = [...machines];
  
  switch (sortBy) {
    case 'hot-first':
      return sorted.sort((a, b) => {
        if (a.isHotOffer && !b.isHotOffer) return -1;
        if (!a.isHotOffer && b.isHotOffer) return 1;
        return (b.discount || 0) - (a.discount || 0);
      });
    case 'discount':
      return sorted.sort((a, b) => (b.discount || 0) - (a.discount || 0));
    case 'price-low':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-high':
      return sorted.sort((a, b) => b.price - a.price);
    case 'newest':
      return sorted.sort((a, b) => b.year - a.year);
    case 'lowest-hours':
      return sorted.sort((a, b) => (a.hours || 0) - (b.hours || 0));
    default:
      return sorted;
  }
};

export function CatalogSection({ isOpen, onToggle, onHoverButton, onViewDetails, urlSearchQuery = '', onSearchChange }: CatalogSectionProps) {
  const [activeCategory, setActiveCategory] = useState<MachineCategory | 'all'>('all');
  const [activeBrand, setActiveBrand] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState(urlSearchQuery);
  const [sortBy, setSortBy] = useState<SortOption>('hot-first');
  const filterRef = useRef<HTMLDivElement>(null);

  // Sync with URL search query
  useEffect(() => {
    setSearchQuery(urlSearchQuery);
  }, [urlSearchQuery]);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    onSearchChange?.(value);
  };

  const uniqueBrands = useMemo(() => getUniqueBrands(), []);

  const filteredMachines = useMemo(() => {
    let machines = catalogMachines;
    
    // Filter by category
    if (activeCategory !== 'all') {
      machines = machines.filter(m => m.category === activeCategory);
    }
    
    // Filter by brand
    if (activeBrand !== 'all') {
      machines = machines.filter(m => extractBrand(m.name) === activeBrand);
    }
    
    // Fuzzy search
    if (searchQuery.trim()) {
      const query = searchQuery.trim();
      machines = machines.filter(m => 
        fuzzyMatch(m.name, query) ||
        fuzzyWordMatch(m.name, query) ||
        m.year.toString().includes(query) ||
        fuzzyMatch(m.location, query)
      );
    }
    
    // Apply sorting
    return sortMachines(machines, sortBy);
  }, [activeCategory, activeBrand, searchQuery, sortBy]);

  const scrollToFilters = () => {
    filterRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const catalogCount = catalogMachines.length;

  return (
    <section id="catalog" className="pb-12 sm:pb-20 md:pb-32 scroll-mt-20">
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
                <div ref={filterRef} className="max-w-md mx-auto mb-6 relative scroll-mt-24">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                  <Input
                    type="text"
                    placeholder="Search by name, brand, model, year..."
                    value={searchQuery}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    className="pl-12 pr-10 py-3 bg-background/50 border-border/50 rounded-full text-base"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => handleSearchChange('')}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors duration-150"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>

                {/* Brand & Sort Dropdowns */}
                <div className="flex flex-wrap justify-center gap-3 mb-6">
                  <Select value={activeBrand} onValueChange={setActiveBrand}>
                    <SelectTrigger className="w-[180px] sm:w-[200px] bg-card/80 border-primary/30 rounded-full hover:border-primary/60 transition-colors shadow-sm">
                      <Factory className="w-4 h-4 mr-2 text-primary" />
                      <SelectValue placeholder="All Brands" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border-border z-50">
                      <SelectItem value="all">All Brands ({catalogMachines.length})</SelectItem>
                      {uniqueBrands.map(brand => {
                        const count = catalogMachines.filter(m => extractBrand(m.name) === brand).length;
                        return (
                          <SelectItem key={brand} value={brand}>
                            {brand} ({count})
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>

                  <Select value={sortBy} onValueChange={(v) => setSortBy(v as SortOption)}>
                    <SelectTrigger className="w-[180px] sm:w-[200px] bg-card/80 border-primary/30 rounded-full hover:border-primary/60 transition-colors shadow-sm">
                      <ArrowUpDown className="w-4 h-4 mr-2 text-primary" />
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border-border z-50">
                      {sortOptions.map(option => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6">
                  <Button
                    variant={activeCategory === 'all' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setActiveCategory('all')}
                    className={`rounded-full px-4 sm:px-6 transition-all duration-200 shadow-sm ${activeCategory === 'all' ? 'bg-primary text-primary-foreground shadow-md ring-2 ring-primary/30' : 'border-primary/40 bg-card/80 hover:bg-primary/10 hover:border-primary/60 text-foreground'}`}
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
                        className={`rounded-full px-3 sm:px-5 transition-all duration-200 shadow-sm ${activeCategory === cat ? 'bg-primary text-primary-foreground shadow-md ring-2 ring-primary/30' : 'border-primary/40 bg-card/80 hover:bg-primary/10 hover:border-primary/60 text-foreground'}`}
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

              {/* Scroll to Top Button */}
              {filteredMachines.length > 8 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex justify-center mt-8"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={scrollToFilters}
                    className="rounded-full border-border/50 hover:bg-muted/50"
                  >
                    <ArrowUp className="w-4 h-4 mr-2" />
                    Back to Filters
                  </Button>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
