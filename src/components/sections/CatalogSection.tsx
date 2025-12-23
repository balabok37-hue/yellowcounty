import { useMemo, useState, useRef, useEffect, useCallback } from 'react';
import { MachineCard } from '@/components/MachineCard';
import { useCriticalImagePreload } from '@/hooks/useCriticalImagePreload';
import { catalogMachines, categoryInfo } from '@/data/machines';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Search, Filter, X } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { Machine, MachineCategory } from '@/components/MachineCard';

type SortOption = 'featured' | 'price-low' | 'price-high' | 'newest';
type ConditionFilter = 'all' | 'new' | 'used';

interface CatalogSectionProps {
  isOpen: boolean;
  onToggle: () => void;
  onViewDetails: (machine: Machine) => void;
  urlSearchQuery?: string;
  urlCategory?: string;
  onSearchChange?: (query: string) => void;
  onCategoryChange?: (category: string) => void;
}

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest First' },
];

// Extract brand from machine name
const extractBrand = (name: string): string => {
  const parts = name.split(' ');
  return parts[1] || 'Unknown';
};

// Get unique brands
const uniqueBrands = [...new Set(catalogMachines.map(m => extractBrand(m.name)))].sort();

// Get price range
const allPrices = catalogMachines.map(m => m.price);
const minPrice = Math.min(...allPrices);
const maxPrice = Math.max(...allPrices);

// Brand aliases for smart search
const brandAliases: Record<string, string[]> = {
  'caterpillar': ['cat', 'caterpillar'],
  'john deere': ['deere', 'jd', 'john deere'],
  'kubota': ['kubota'],
  'bobcat': ['bobcat'],
  'case': ['case'],
  'komatsu': ['komatsu'],
  'volvo': ['volvo'],
  'hitachi': ['hitachi'],
  'sany': ['sany'],
  'develon': ['develon', 'doosan'],
  'manitou': ['manitou'],
  'jcb': ['jcb'],
  'merlo': ['merlo'],
  'asv': ['asv'],
  'mack': ['mack'],
  'peterbilt': ['peterbilt', 'pete'],
};

// Smart search - matches all words in query against machine data
const smartSearch = (machine: Machine, query: string): boolean => {
  const searchText = `${machine.name} ${machine.year} ${machine.location}`.toLowerCase();
  const words = query.toLowerCase().trim().split(/\s+/).filter(w => w.length > 0);
  
  // Each word must match something
  return words.every(word => {
    // Direct match in name/year/location
    if (searchText.includes(word)) return true;
    
    // Check brand aliases (e.g., "cat" matches "caterpillar")
    for (const [brand, aliases] of Object.entries(brandAliases)) {
      if (aliases.includes(word) && searchText.includes(brand)) return true;
      // Also check if alias itself is in name
      if (aliases.includes(word)) {
        for (const alias of aliases) {
          if (searchText.includes(alias)) return true;
        }
      }
    }
    
    return false;
  });
};

// Sort machines
const sortMachines = (machines: Machine[], sortBy: SortOption): Machine[] => {
  const sorted = [...machines];
  switch (sortBy) {
    case 'featured':
      return sorted.sort((a, b) => {
        if (a.isHotOffer && !b.isHotOffer) return -1;
        if (!a.isHotOffer && b.isHotOffer) return 1;
        return (b.discount || 0) - (a.discount || 0);
      });
    case 'price-low':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-high':
      return sorted.sort((a, b) => b.price - a.price);
    case 'newest':
      return sorted.sort((a, b) => b.year - a.year);
    default:
      return sorted;
  }
};

// Filter sidebar content - extracted as inline JSX to prevent re-mounting
interface FilterContentProps {
  filteredCount: number;
  searchInput: string;
  onSearchInputChange: (value: string) => void;
  onSearchSubmit: (e: React.FormEvent) => void;
  activeCategory: string;
  onCategoryChange: (value: string) => void;
  activeBrand: string;
  onBrandChange: (value: string) => void;
  condition: ConditionFilter;
  onConditionChange: (value: ConditionFilter) => void;
  priceRange: [number, number];
  onPriceRangeChange: (value: [number, number]) => void;
  onReset: () => void;
  className?: string;
}

function FilterContent({
  filteredCount,
  searchInput,
  onSearchInputChange,
  onSearchSubmit,
  activeCategory,
  onCategoryChange,
  activeBrand,
  onBrandChange,
  condition,
  onConditionChange,
  priceRange,
  onPriceRangeChange,
  onReset,
  className = '',
}: FilterContentProps) {
  return (
    <div className={`filter-sidebar space-y-6 ${className}`}>
      {/* Equipment Count */}
      <div className="text-lg font-bold text-foreground">
        {filteredCount} Equipment Found
      </div>

      {/* Search */}
      <form onSubmit={onSearchSubmit}>
        <Label className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-2 block">
          Search Make/Model
        </Label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search... (press Enter)"
            value={searchInput}
            onChange={(e) => onSearchInputChange(e.target.value)}
            className="pl-10 bg-background border-border"
          />
        </div>
      </form>

      {/* Category Filter */}
      <div>
        <Label className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-2 block">
          Equipment Type
        </Label>
        <Select value={activeCategory} onValueChange={onCategoryChange}>
          <SelectTrigger className="w-full bg-background border-border">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent className="bg-card border-border z-50">
            <SelectItem value="all">All Categories</SelectItem>
            {Object.entries(categoryInfo).map(([key, info]) => (
              <SelectItem key={key} value={key}>
                {info.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Brand Filter */}
      <div>
        <Label className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-2 block">
          Brand
        </Label>
        <Select value={activeBrand} onValueChange={onBrandChange}>
          <SelectTrigger className="w-full bg-background border-border">
            <SelectValue placeholder="All Brands" />
          </SelectTrigger>
          <SelectContent className="bg-card border-border z-50">
            <SelectItem value="all">All Brands</SelectItem>
            {uniqueBrands.map(brand => (
              <SelectItem key={brand} value={brand}>
                {brand}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Condition Filter */}
      <div>
        <Label className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-3 block">
          By Condition
        </Label>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Checkbox 
              id="condition-all" 
              checked={condition === 'all'}
              onCheckedChange={() => onConditionChange('all')}
            />
            <Label htmlFor="condition-all" className="text-sm cursor-pointer">All</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox 
              id="condition-new" 
              checked={condition === 'new'}
              onCheckedChange={() => onConditionChange('new')}
            />
            <Label htmlFor="condition-new" className="text-sm cursor-pointer">New</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox 
              id="condition-used" 
              checked={condition === 'used'}
              onCheckedChange={() => onConditionChange('used')}
            />
            <Label htmlFor="condition-used" className="text-sm cursor-pointer">Used</Label>
          </div>
        </div>
      </div>

      {/* Price Range */}
      <div>
        <Label className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-3 block">
          By Price
        </Label>
        <div className="px-1">
          <Slider
            key={`${priceRange[0]}-${priceRange[1]}`}
            defaultValue={priceRange}
            onValueCommit={(value) => onPriceRangeChange(value as [number, number])}
            min={minPrice}
            max={maxPrice}
            step={100}
            className="mb-3"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>${priceRange[0].toLocaleString()}</span>
            <span>${priceRange[1].toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Reset Filters */}
      <button
        onClick={onReset}
        className="w-full py-2 text-sm text-primary hover:underline"
      >
        Reset Filters
      </button>
    </div>
  );
}

export function CatalogSection({ isOpen, onToggle, onViewDetails, urlSearchQuery = '', urlCategory = '', onSearchChange, onCategoryChange }: CatalogSectionProps) {
  const [searchQuery, setSearchQuery] = useState(urlSearchQuery);
  const [searchInput, setSearchInput] = useState(urlSearchQuery);
  const [activeCategory, setActiveCategory] = useState<string>(urlCategory || 'all');
  const [activeBrand, setActiveBrand] = useState<string>('all');
  const [condition, setCondition] = useState<ConditionFilter>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([minPrice, maxPrice]);
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSearchQuery(urlSearchQuery);
    setSearchInput(urlSearchQuery);
  }, [urlSearchQuery]);

  useEffect(() => {
    setActiveCategory(urlCategory || 'all');
  }, [urlCategory]);

  const handleSearchSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(searchInput);
    onSearchChange?.(searchInput);
  }, [searchInput, onSearchChange]);

  const handleCategoryChange = useCallback((value: string) => {
    setActiveCategory(value);
    onCategoryChange?.(value);
  }, [onCategoryChange]);

  const filteredMachines = useMemo(() => {
    let machines = catalogMachines;

    if (activeCategory !== 'all') {
      machines = machines.filter(m => m.category === activeCategory);
    }

    if (activeBrand !== 'all') {
      machines = machines.filter(m => extractBrand(m.name) === activeBrand);
    }

    if (condition === 'new') {
      machines = machines.filter(m => m.year >= 2023);
    } else if (condition === 'used') {
      machines = machines.filter(m => m.year < 2023);
    }

    machines = machines.filter(m => m.price >= priceRange[0] && m.price <= priceRange[1]);

    if (searchQuery.trim()) {
      machines = machines.filter(m => smartSearch(m, searchQuery));
    }

    return sortMachines(machines, sortBy);
  }, [activeCategory, activeBrand, condition, priceRange, searchQuery, sortBy]);

  const catalogCount = catalogMachines.length;

  useCriticalImagePreload(filteredMachines, 6);

  const resetFilters = useCallback(() => {
    handleCategoryChange('all');
    setActiveBrand('all');
    setCondition('all');
    setPriceRange([minPrice, maxPrice]);
    setSearchInput('');
    setSearchQuery('');
    onSearchChange?.('');
  }, [handleCategoryChange, onSearchChange]);

  const filterProps = {
    filteredCount: filteredMachines.length,
    searchInput,
    onSearchInputChange: setSearchInput,
    onSearchSubmit: handleSearchSubmit,
    activeCategory,
    onCategoryChange: handleCategoryChange,
    activeBrand,
    onBrandChange: setActiveBrand,
    condition,
    onConditionChange: setCondition,
    priceRange,
    onPriceRangeChange: setPriceRange,
    onReset: resetFilters,
  };

  return (
    <section id="catalog" className="py-8 scroll-mt-20" ref={filterRef}>
      <div className="container px-4">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="section-title mb-2">Heavy Equipment For Sale</h1>
          <p className="text-muted-foreground">{catalogCount} units available for immediate delivery</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Desktop Sidebar - STICKY */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <div className="sticky top-20">
              <FilterContent {...filterProps} />
            </div>
          </aside>

          {/* Mobile Filter Button */}
          <div className="lg:hidden flex items-center justify-between mb-4">
            <button
              onClick={() => setShowMobileFilters(true)}
              className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium"
            >
              <Filter className="w-4 h-4" />
              Filters
            </button>
            
            <Select value={sortBy} onValueChange={(v) => setSortBy(v as SortOption)}>
              <SelectTrigger className="w-40 bg-card border-border">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border z-50">
                {sortOptions.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Mobile Filters Drawer */}
          {showMobileFilters && (
            <div className="fixed inset-0 z-[100] lg:hidden">
              <div 
                className="absolute inset-0 bg-foreground/50"
                onClick={() => setShowMobileFilters(false)}
              />
              <div className="absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-background overflow-y-auto">
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <span className="font-bold text-foreground">Filters</span>
                  <button onClick={() => setShowMobileFilters(false)}>
                    <X className="w-5 h-5 text-foreground" />
                  </button>
                </div>
                <div className="p-4">
                  <FilterContent {...filterProps} />
                </div>
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className="flex-1">
            {/* Sort Bar (Desktop) */}
            <div className="hidden lg:flex items-center justify-between mb-6 pb-4 border-b border-border">
              <span className="text-sm text-muted-foreground">
                Showing {filteredMachines.length} of {catalogCount} results
              </span>
              <Select value={sortBy} onValueChange={(v) => setSortBy(v as SortOption)}>
                <SelectTrigger className="w-48 bg-card border-border">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border z-50">
                  {sortOptions.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredMachines.map((machine, index) => (
                <MachineCard
                  key={machine.id}
                  machine={machine}
                  onViewDetails={onViewDetails}
                  priority={index < 6}
                  index={index}
                />
              ))}
            </div>

            {/* No Results */}
            {filteredMachines.length === 0 && (
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground">No equipment found matching your criteria.</p>
                <button
                  onClick={resetFilters}
                  className="mt-4 text-primary hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
