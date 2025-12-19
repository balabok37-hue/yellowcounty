import { useMemo, useState, useRef, useEffect, useCallback } from 'react';
import { MachineCard } from '@/components/MachineCard';
import { catalogMachines, categoryInfo } from '@/data/machines';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Search, ChevronDown, Filter, X } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { Machine, MachineCategory } from '@/components/MachineCard';

type SortOption = 'featured' | 'price-low' | 'price-high' | 'newest' | 'lowest-hours';
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
  { value: 'lowest-hours', label: 'Lowest Hours' },
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

// Simple search match
const searchMatch = (text: string, query: string): boolean => {
  return text.toLowerCase().includes(query.toLowerCase());
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
    case 'lowest-hours':
      return sorted.sort((a, b) => (a.hours || 0) - (b.hours || 0));
    default:
      return sorted;
  }
};

export function CatalogSection({ isOpen, onToggle, onViewDetails, urlSearchQuery = '', urlCategory = '', onSearchChange, onCategoryChange }: CatalogSectionProps) {
  const [searchQuery, setSearchQuery] = useState(urlSearchQuery);
  const [activeCategory, setActiveCategory] = useState<string>(urlCategory || 'all');
  const [activeBrand, setActiveBrand] = useState<string>('all');
  const [condition, setCondition] = useState<ConditionFilter>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([minPrice, maxPrice]);
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSearchQuery(urlSearchQuery);
  }, [urlSearchQuery]);

  useEffect(() => {
    setActiveCategory(urlCategory || 'all');
  }, [urlCategory]);

  const handleSearchChange = useCallback((value: string) => {
    setSearchQuery(value);
    onSearchChange?.(value);
  }, [onSearchChange]);

  const handleCategoryChange = useCallback((value: string) => {
    setActiveCategory(value);
    onCategoryChange?.(value);
  }, [onCategoryChange]);

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
    
    // Filter by condition
    if (condition === 'new') {
      machines = machines.filter(m => m.year >= 2023);
    } else if (condition === 'used') {
      machines = machines.filter(m => m.year < 2023);
    }
    
    // Filter by price
    machines = machines.filter(m => m.price >= priceRange[0] && m.price <= priceRange[1]);
    
    // Search
    if (searchQuery.trim()) {
      const query = searchQuery.trim();
      machines = machines.filter(m => 
        searchMatch(m.name, query) ||
        m.year.toString().includes(query) ||
        searchMatch(m.location, query)
      );
    }
    
    return sortMachines(machines, sortBy);
  }, [activeCategory, activeBrand, condition, priceRange, searchQuery, sortBy]);

  const catalogCount = catalogMachines.length;

  // Sidebar content
  const FilterSidebar = ({ className = '' }: { className?: string }) => (
    <div className={`filter-sidebar space-y-6 ${className}`}>
      {/* Equipment Count */}
      <div className="text-lg font-bold text-foreground">
        {filteredMachines.length} Equipment Found
      </div>

      {/* Search */}
      <div>
        <Label className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-2 block">
          Search Make/Model
        </Label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="pl-10 bg-background border-border"
          />
        </div>
      </div>

      {/* Category Filter */}
      <div>
        <Label className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-2 block">
          Equipment Type
        </Label>
        <Select value={activeCategory} onValueChange={handleCategoryChange}>
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
        <Select value={activeBrand} onValueChange={setActiveBrand}>
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
              onCheckedChange={() => setCondition('all')}
            />
            <Label htmlFor="condition-all" className="text-sm cursor-pointer">All</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox 
              id="condition-new" 
              checked={condition === 'new'}
              onCheckedChange={() => setCondition('new')}
            />
            <Label htmlFor="condition-new" className="text-sm cursor-pointer">New</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox 
              id="condition-used" 
              checked={condition === 'used'}
              onCheckedChange={() => setCondition('used')}
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
            value={priceRange}
            onValueChange={(value) => setPriceRange(value as [number, number])}
            min={minPrice}
            max={maxPrice}
            step={5000}
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
        onClick={() => {
          handleCategoryChange('all');
          setActiveBrand('all');
          setCondition('all');
          setPriceRange([minPrice, maxPrice]);
          handleSearchChange('');
        }}
        className="w-full py-2 text-sm text-primary hover:underline"
      >
        Reset Filters
      </button>
    </div>
  );

  return (
    <section id="catalog" className="py-8 scroll-mt-20" ref={filterRef}>
      <div className="container px-4">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="section-title mb-2">Heavy Equipment For Sale</h1>
          <p className="text-muted-foreground">{catalogCount} units available for immediate delivery</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <FilterSidebar />
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
                  <FilterSidebar />
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
                />
              ))}
            </div>

            {/* No Results */}
            {filteredMachines.length === 0 && (
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground">No equipment found matching your criteria.</p>
                <button
                  onClick={() => {
                    handleCategoryChange('all');
                    setActiveBrand('all');
                    setCondition('all');
                    setPriceRange([minPrice, maxPrice]);
                    handleSearchChange('');
                  }}
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
