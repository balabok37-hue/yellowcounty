import { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { MapPin, Send, ChevronLeft, ChevronRight, Shield, Truck, CheckCircle2, Clock, ZoomIn, ArrowLeft, X, Gavel } from 'lucide-react';
import { USAFlag } from '@/components/icons/USAFlag';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Header } from '@/components/Header';
import { Footer } from '@/components/sections/Footer';
import { MachineCard } from '@/components/MachineCard';
import { allMachines } from '@/data/machines';
import { findMachineBySlug, generateMachineSlug } from '@/lib/machine-utils';
import { useGalleryPreload } from '@/hooks/useCriticalImagePreload';
import type { Machine } from '@/components/MachineCard';

export default function MachinePage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoadStates, setImageLoadStates] = useState<Record<string, boolean>>({});
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showBidInput, setShowBidInput] = useState(false);
  const [bidAmount, setBidAmount] = useState('');
  
  // Touch/swipe handling
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const minSwipeDistance = 50;

  // Drag scroll for thumbnails on PC
  const thumbnailsRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!thumbnailsRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - thumbnailsRef.current.offsetLeft;
    scrollLeft.current = thumbnailsRef.current.scrollLeft;
    thumbnailsRef.current.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !thumbnailsRef.current) return;
    e.preventDefault();
    const x = e.pageX - thumbnailsRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    thumbnailsRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    if (thumbnailsRef.current) {
      thumbnailsRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    if (thumbnailsRef.current) {
      thumbnailsRef.current.style.cursor = 'grab';
    }
  };

  // Find machine by slug
  const machine: Machine | undefined = slug ? findMachineBySlug(allMachines, slug) : undefined;

  // Build gallery
  const images = machine?.gallery && machine.gallery.length > 0 
    ? machine.gallery 
    : machine?.image ? [machine.image] : [];

  // Reset state when slug changes (navigating to different machine)
  useEffect(() => {
    setCurrentImageIndex(0);
    setImageLoadStates({});
    setIsFullscreen(false);
    window.scrollTo(0, 0);
  }, [slug]);

  // Check for cached images on mount or when images change
  useEffect(() => {
    if (images.length === 0) return;
    
    images.forEach((imgUrl) => {
      const img = new Image();
      img.src = imgUrl;
      if (img.complete && img.naturalHeight !== 0) {
        setImageLoadStates(prev => ({ 
          ...prev, 
          [imgUrl]: true,
          [`thumb-${imgUrl}`]: true 
        }));
      }
    });
  }, [images]);

  // Preload adjacent images
  useGalleryPreload(images, currentImageIndex, 2);
  // Get similar machines (same category, excluding current) - fallback to other categories if none
  const similarMachines = useMemo(() => {
    if (!machine) return [];
    
    // First try same category
    const sameCategory = allMachines
      .filter(m => 
        m.id !== machine.id && 
        m.category === machine.category && 
        !m.isSold && 
        !m.isReserved
      )
      .slice(0, 4);
    
    // If not enough, add from other categories
    if (sameCategory.length < 4) {
      const otherMachines = allMachines
        .filter(m => 
          m.id !== machine.id && 
          m.category !== machine.category && 
          !m.isSold && 
          !m.isReserved &&
          !sameCategory.find(sm => sm.id === m.id)
        )
        .slice(0, 4 - sameCategory.length);
      return [...sameCategory, ...otherMachines];
    }
    
    return sameCategory;
  }, [machine]);

  // Check if bidding is available (not 2025 models)
  const canBid = machine ? machine.year < 2025 : false;

  // Update page title and meta for SEO
  useEffect(() => {
    if (machine) {
      const modelName = machine.name.replace(/^\d{4}\s+/, '');
      document.title = `${machine.year} ${modelName} - $${machine.price.toLocaleString()} | YellowStone Equipment`;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      const description = `Buy ${machine.year} ${modelName} for $${machine.price.toLocaleString()}. ${machine.hours ? `${machine.hours} hours` : machine.miles ? `${machine.miles} miles` : ''}. USA Stock. Premium used heavy equipment.`;
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    }
    
    return () => {
      document.title = 'YellowStone County Equipment';
    };
  }, [machine]);

  // Scroll to top when page loads or machine changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);


  // Close fullscreen on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);

  const scrollToContact = useCallback((prefillMessage?: string) => {
    navigate('/', { state: { scrollTo: 'contact' } });
    if (prefillMessage) {
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('prefillContactForm', { detail: { message: prefillMessage } }));
      }, 500);
    }
  }, [navigate]);

  // Touch handlers for swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe && images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
    if (isRightSwipe && images.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
    
    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!machine) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="container px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Machine Not Found</h1>
          <p className="text-muted-foreground mb-8">The machine you're looking for doesn't exist or has been removed.</p>
          <Link to="/#catalog" className="inline-flex items-center gap-2 text-primary hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Back to Catalog
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const handleRequestQuote = () => {
    const message = `Hi! I'm interested in the ${machine.year} ${modelName} listed at $${machine.price.toLocaleString()}. Is it still available?`;
    scrollToContact(message);
  };

  const handlePlaceBid = () => {
    setShowBidInput(true);
  };

  const handleSubmitBid = () => {
    if (!bidAmount) return;
    const message = `BID REQUEST: I would like to place a bid on the ${machine.year} ${modelName} (listed at $${machine.price.toLocaleString()}). My offer is: $${bidAmount}`;
    scrollToContact(message);
    setShowBidInput(false);
    setBidAmount('');
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const selectImage = (idx: number) => {
    setCurrentImageIndex(idx);
  };

  const handleImageLoad = (key: string) => {
    setImageLoadStates(prev => ({ ...prev, [key]: true }));
  };

  const modelName = machine.name.replace(/^\d{4}\s+/, '');

  // Scroll thumbnails with arrows
  const scrollThumbnails = (direction: 'left' | 'right') => {
    if (!thumbnailsRef.current) return;
    const scrollAmount = 200;
    thumbnailsRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-[100dvh] bg-background text-foreground w-full max-w-full overflow-x-hidden">
      <Header />
      
      <main key={slug} className="w-full max-w-full px-4 py-6 animate-fade-in overflow-x-hidden mx-auto" style={{ maxWidth: 'min(1280px, 100%)' }}>
        {/* Back Button */}
        <Link 
          to="/#catalog" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Catalog
        </Link>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 w-full max-w-full">
          {/* Image Gallery Section */}
          <div className="space-y-3 sm:space-y-4 w-full max-w-full overflow-hidden">
            {/* Main Image with swipe support */}
            <div 
              className="relative aspect-[4/3] max-h-[50dvh] sm:max-h-none bg-muted rounded-xl overflow-hidden cursor-zoom-in group touch-pan-y will-change-transform"
              onClick={() => setIsFullscreen(true)}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {/* Loading shimmer - always present for smooth transitions */}
              <div 
                className={`absolute inset-0 bg-muted transition-opacity duration-300 ${
                  imageLoadStates[images[currentImageIndex]] ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
              >
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, hsl(var(--muted-foreground)/0.08) 50%, transparent 100%)',
                    animation: 'shimmer 1.5s infinite',
                  }}
                />
              </div>
              <img
                key={`main-${images[currentImageIndex]}`}
                src={images[currentImageIndex]}
                alt={`${machine.name} - Image ${currentImageIndex + 1}`}
                className={`w-full h-full object-cover transition-opacity duration-200 select-none will-change-opacity ${
                  imageLoadStates[images[currentImageIndex]] ? 'opacity-100' : 'opacity-0'
                }`}
                loading="eager"
                decoding="async"
                draggable={false}
                onLoad={() => handleImageLoad(images[currentImageIndex])}
                onError={() => handleImageLoad(images[currentImageIndex])}
              />
              
              {/* Zoom indicator - hidden on mobile */}
              <div className="absolute bottom-3 left-3 px-2 py-1 rounded-lg bg-card/80 text-xs font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity hidden sm:flex items-center gap-1">
                <ZoomIn className="w-3 h-3" />
                Click to zoom
              </div>

              {/* Swipe hint on mobile */}
              {images.length > 1 && (
                <div className="absolute bottom-3 left-3 px-2 py-1 rounded-lg bg-card/80 text-xs font-medium text-foreground sm:hidden flex items-center gap-1">
                  Swipe to browse
                </div>
              )}
              
              {/* Navigation Arrows - hidden on mobile */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-card/95 shadow-lg hover:bg-card transition-colors hidden sm:block"
                  >
                    <ChevronLeft className="w-5 h-5 text-foreground" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-card/95 shadow-lg hover:bg-card transition-colors hidden sm:block"
                  >
                    <ChevronRight className="w-5 h-5 text-foreground" />
                  </button>
                </>
              )}

              {/* Discount badge */}
              {machine.discount > 0 && (
                <div className="absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-destructive font-bold text-destructive-foreground text-sm shadow-lg">
                  −{machine.discount}% OFF
                </div>
              )}

              {/* Image counter */}
              <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-card/90 text-sm font-medium text-foreground">
                {currentImageIndex + 1} / {images.length}
              </div>

              {/* Dot indicators for mobile */}
              {images.length > 1 && (
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-1.5 sm:hidden">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => { e.stopPropagation(); selectImage(idx); }}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === currentImageIndex 
                          ? 'bg-primary w-4' 
                          : 'bg-card/60'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Thumbnail Gallery with navigation arrows */}
            {images.length > 1 && (
              <div className="relative group/thumbnails">
                {/* Left Arrow - Desktop only */}
                <button
                  onClick={() => scrollThumbnails('left')}
                  className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 items-center justify-center bg-background/90 hover:bg-background border border-border rounded-full shadow-md opacity-0 group-hover/thumbnails:opacity-100 transition-opacity -translate-x-1/2"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div 
                  ref={thumbnailsRef}
                  className="flex gap-2 pb-2 overflow-x-auto overflow-y-hidden cursor-grab select-none px-1"
                  style={{ 
                    WebkitOverflowScrolling: 'touch',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                  }}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseLeave}
                >
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        if (!isDragging.current) selectImage(idx);
                      }}
                      className={`flex-shrink-0 w-14 h-14 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        idx === currentImageIndex 
                          ? 'border-primary ring-2 ring-primary/30' 
                          : 'border-transparent hover:border-muted-foreground/30'
                      }`}
                    >
                      <div className="relative w-full h-full bg-muted">
                        <div 
                          className={`absolute inset-0 bg-muted transition-opacity duration-200 ${
                            imageLoadStates[`thumb-${img}`] ? 'opacity-0' : 'opacity-100'
                          }`}
                        />
                        <img
                          src={img}
                          alt={`Thumbnail ${idx + 1}`}
                          className={`w-full h-full object-cover transition-opacity duration-200 pointer-events-none ${
                            imageLoadStates[`thumb-${img}`] ? 'opacity-100' : 'opacity-0'
                          }`}
                          loading="eager"
                          decoding="async"
                          draggable={false}
                          onLoad={() => handleImageLoad(`thumb-${img}`)}
                          onError={() => handleImageLoad(`thumb-${img}`)}
                        />
                      </div>
                    </button>
                  ))}
                </div>

                {/* Right Arrow - Desktop only */}
                <button
                  onClick={() => scrollThumbnails('right')}
                  className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 items-center justify-center bg-background/90 hover:bg-background border border-border rounded-full shadow-md opacity-0 group-hover/thumbnails:opacity-100 transition-opacity translate-x-1/2"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Details Section */}
          <div className="space-y-6">
            {/* Title & Year */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 bg-primary text-primary-foreground text-xs font-bold rounded">
                  {machine.year}
                </span>
                {machine.year >= 2023 && (
                  <span className="px-2 py-0.5 bg-accent text-accent-foreground text-xs font-bold rounded">
                    NEW
                  </span>
                )}
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground leading-tight break-words hyphens-auto">
                {modelName}
              </h1>
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>{machine.miles ? `${machine.miles.toLocaleString()} Miles` : `${machine.hours?.toLocaleString()} Hours`}</span>
              </div>
              <div className="flex items-center gap-1.5 text-accent font-medium">
                <USAFlag className="w-5 h-3.5" />
                USA Stock
              </div>
            </div>

            {/* Available Zones */}
            {machine.availableZones && machine.availableZones.length > 0 && (
              <div>
                <h2 className="text-sm font-bold text-foreground uppercase tracking-wide mb-2">
                  Available Region
                </h2>
                <div className="flex flex-wrap gap-2">
                  {machine.availableZones.map((zone) => (
                    <span 
                      key={zone}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full capitalize border border-border"
                    >
                      {zone.replace(/-/g, ' ')}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Price Block */}
            <div className="py-4 px-4 sm:py-5 sm:px-5 rounded-xl bg-muted/50 border border-border">
              <div className="flex flex-col gap-4">
                <div>
                  <div className="flex items-baseline gap-2 flex-wrap min-w-0">
                    <span className="text-2xl sm:text-3xl font-bold text-foreground">
                      ${machine.price.toLocaleString()}
                    </span>
                    {machine.discount > 0 && (
                      <span className="text-base line-through text-muted-foreground">
                        ${machine.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  {machine.discount > 0 && (
                    <p className="text-sm font-semibold text-accent flex items-center gap-1 mt-1">
                      <CheckCircle2 className="w-4 h-4" />
                      Save ${(machine.originalPrice - machine.price).toLocaleString()}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-3">
                  <Button
                    onClick={handleRequestQuote}
                    size="lg"
                    className="w-full h-14 sm:h-12 text-base sm:text-sm font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg rounded-xl sm:rounded-lg transition-all active:scale-[0.98]"
                  >
                    <Send className="w-5 h-5 sm:w-4 sm:h-4 mr-2" />
                    Get Quote
                  </Button>
                  {canBid ? (
                    <Button
                      onClick={handlePlaceBid}
                      size="lg"
                      variant="outline"
                      className="w-full h-14 sm:h-12 text-base sm:text-sm font-bold border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded-xl sm:rounded-lg transition-all active:scale-[0.98]"
                    >
                      <Gavel className="w-5 h-5 sm:w-4 sm:h-4 mr-2" />
                      Place Bid
                    </Button>
                  ) : (
                    <div className="w-full h-14 sm:h-12 flex items-center justify-center px-4 rounded-xl sm:rounded-lg bg-muted border border-border text-muted-foreground text-base sm:text-sm font-medium">
                      <Gavel className="w-5 h-5 sm:w-4 sm:h-4 mr-2 opacity-50" />
                      2025 Model – Price Firm
                    </div>
                  )}
                </div>

                {/* Bid Input */}
                {showBidInput && canBid && (
                  <div className="mt-4 p-4 rounded-lg bg-accent/10 border border-accent/30">
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Enter your bid amount:
                    </label>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <div className="relative flex-1">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">$</span>
                        <Input
                          type="number"
                          placeholder="Your offer"
                          value={bidAmount}
                          onChange={(e) => setBidAmount(e.target.value)}
                          className="pl-7"
                          min="1"
                        />
                      </div>
                      <Button
                        onClick={handleSubmitBid}
                        disabled={!bidAmount}
                        className="font-bold bg-accent text-accent-foreground hover:bg-accent/90"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Submit Bid
                      </Button>
                    </div>
                    <button 
                      onClick={() => { setShowBidInput(false); setBidAmount(''); }}
                      className="text-xs text-muted-foreground hover:text-foreground mt-2"
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Description */}
            {machine.description && (
              <div>
                <h2 className="text-sm font-bold text-foreground uppercase tracking-wide mb-2">
                  Description
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {machine.description}
                </p>
              </div>
            )}

            {/* Specifications */}
            {machine.specs && Object.keys(machine.specs).length > 0 && (
              <div>
                <h2 className="text-sm font-bold text-foreground uppercase tracking-wide mb-3">
                  Specifications
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 lg:gap-x-6 gap-y-0.5 text-sm w-full max-w-full overflow-hidden">
                  {Object.entries(machine.specs).map(([key, value]) => {
                    if (!value) return null;
                    const label = key
                      .replace(/([A-Z])/g, ' $1')
                      .replace(/^./, str => str.toUpperCase())
                      .trim();
                    return (
                      <div key={key} className="flex flex-col py-2 border-b border-border/50 min-w-0 overflow-hidden">
                        <span className="text-muted-foreground text-xs">{label}</span>
                        <span className="font-medium text-foreground break-words overflow-wrap-anywhere" style={{ overflowWrap: 'anywhere' }}>{value}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Trust badges */}
            <div className="pt-4 flex flex-wrap gap-4 border-t border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-accent" />
                150-Point Inspection
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Truck className="w-4 h-4 text-primary" />
                Nationwide Shipping
              </div>
            </div>
          </div>
        </div>

        {/* Similar Machines Section - always show since we fallback to other categories */}
        <section className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-border w-full max-w-full overflow-hidden">
          <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6">
            {similarMachines.some(m => m.category === machine.category) 
              ? 'Similar Equipment' 
              : 'More Equipment'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {similarMachines.map((m, index) => (
              <MachineCard
                key={m.id}
                machine={m}
                priority={index < 2}
                index={index}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Fullscreen Lightbox with swipe */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center backdrop-blur-sm"
          onClick={() => setIsFullscreen(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          style={{ touchAction: 'pan-y' }}
        >
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors active:scale-95"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors hidden sm:block active:scale-95"
              >
                <ChevronLeft className="w-8 h-8 text-white" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors hidden sm:block active:scale-95"
              >
                <ChevronRight className="w-8 h-8 text-white" />
              </button>
            </>
          )}

          <img
            src={images[currentImageIndex]}
            alt={`${machine.name} - Fullscreen`}
            className="max-w-[95vw] max-h-[90vh] object-contain select-none will-change-transform"
            onClick={(e) => e.stopPropagation()}
            draggable={false}
            loading="eager"
            decoding="async"
          />

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium backdrop-blur-sm">
            {currentImageIndex + 1} / {images.length}
          </div>

          {/* Dot indicators in fullscreen for mobile */}
          {images.length > 1 && (
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 sm:hidden">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); selectImage(idx); }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    idx === currentImageIndex 
                      ? 'bg-white w-5' 
                      : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      )}

      <Footer />
    </div>
  );
}