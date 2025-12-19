import { useMemo, useState, useRef, useEffect, useCallback } from 'react';
import { MachineCard } from '@/components/MachineCard';
import { catalogMachines, categoryInfo } from '@/data/machines';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronDown, ChevronUp, Shovel, Truck, Forklift, Loader, Search, X, Factory, ArrowUpDown, ArrowUp, Mountain, Tractor, Construction, Drum } from 'lucide-react';
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

// Extract brand from machine name
const extractBrand = (name: string): string => {
  const parts = name.split(' ');
  return parts[1] || 'Unknown';
};

// Get unique brands - memoized outside component
const uniqueBrands = [...new Set(catalogMachines.map(m => extractBrand(m.name)))].sort();

// Simple search match
const searchMatch = (text: string, query: string): boolean => {
  return text.toLowerCase().includes(query.toLowerCase());
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

  const handleSearchChange = useCallback((value: string) => {
    setSearchQuery(value);
    onSearchChange?.(value);
  }, [onSearchChange]);

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
    
    // Search
    if (searchQuery.trim()) {
      const query = searchQuery.trim();
      machines = machines.filter(m => 
        searchMatch(m.name, query) ||
        m.year.toString().includes(query) ||
        searchMatch(m.location, query)
      );
    }
    
    // Apply sorting
    return sortMachines(machines, sortBy);
  }, [activeCategory, activeBrand, searchQuery, sortBy]);

  const scrollToFilters = useCallback(() => {
    filterRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const catalogCount = catalogMachines.length;

  return (
    <section id="catalog" className="pb-12 sm:pb-20 md:pb-32 scroll-mt-20">
      <div className="container px-4 sm:px-6">
        {/* Toggle Button */}
        <div className="text-center mb-10 sm:mb-16">
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
        </div>

        {/* Catalog Grid */}
        {isOpen && (
          <div className="animate-fade-in">
            <div className="text-center mb-8 sm:mb-12">
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
                  className={`rounded-full px-4 sm:px-6 transition-all duration-150 shadow-sm ${activeCategory === 'all' ? 'bg-primary text-primary-foreground shadow-md ring-2 ring-primary/30' : 'border-primary/40 bg-card/80 hover:bg-primary/10 hover:border-primary/60 text-foreground'}`}
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
                      className={`rounded-full px-3 sm:px-5 transition-all duration-150 shadow-sm ${activeCategory === cat ? 'bg-primary text-primary-foreground shadow-md ring-2 ring-primary/30' : 'border-primary/40 bg-card/80 hover:bg-primary/10 hover:border-primary/60 text-foreground'}`}
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
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
              {filteredMachines.map((machine, index) => (
                <CardReveal key={machine.id} index={index}>
                  <MachineCard
                    machine={machine}
                    onViewDetails={onViewDetails}
                    priority={index < 8}
                  />
                </CardReveal>
              ))}
            </div>

            {/* Scroll to Top Button */}
            {filteredMachines.length > 8 && (
              <div className="flex justify-center mt-8">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={scrollToFilters}
                  className="rounded-full border-border/50 hover:bg-muted/50"
                >
                  <ArrowUp className="w-4 h-4 mr-2" />
                  Back to Filters
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
