import { useState, useEffect, useCallback, useRef, lazy, Suspense } from 'react';
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturedSection } from '@/components/sections/FeaturedSection';
import { StaticGeometricShapes } from '@/components/StaticGeometricShapes';
import { ScrollToTop } from '@/components/ScrollToTop';
import { FloatingSearchButton } from '@/components/FloatingSearchButton';
import { useLenis } from '@/hooks/useLenis';
import { preloadImages } from '@/hooks/useImagePreloader';
import { featuredMachines, catalogMachines, allMachines } from '@/data/machines';
import { generateMachineSlug, findMachineBySlug } from '@/lib/machine-utils';
import heroBackground from '@/assets/hero-background.jpg';
import type { Machine } from '@/components/MachineCard';

// Lazy load below-the-fold sections
const CatalogSection = lazy(() => import('@/components/sections/CatalogSection').then(m => ({ default: m.CatalogSection })));
const WhyChooseSection = lazy(() => import('@/components/sections/WhyChooseSection').then(m => ({ default: m.WhyChooseSection })));
const TestimonialsSection = lazy(() => import('@/components/sections/TestimonialsSection').then(m => ({ default: m.TestimonialsSection })));
const ContactSection = lazy(() => import('@/components/sections/ContactSection').then(m => ({ default: m.ContactSection })));
const Footer = lazy(() => import('@/components/sections/Footer').then(m => ({ default: m.Footer })));
const MachineModal = lazy(() => import('@/components/MachineModal').then(m => ({ default: m.MachineModal })));

const Index = () => {
  const [isReady, setIsReady] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [selectedMachine, setSelectedMachine] = useState<Machine | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [catalogPreloaded, setCatalogPreloaded] = useState(false);
  const featuredRef = useRef<HTMLDivElement>(null);
  const lastScrollYRef = useRef(0);
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useLenis();

  const urlSearchQuery = searchParams.get('search') || '';

  // Fast initial load - only preload hero image
  useEffect(() => {
    const img = new Image();
    img.onload = () => setIsReady(true);
    img.onerror = () => setIsReady(true);
    img.src = heroBackground;
    
    // Fallback - show content after 500ms max
    const timeout = setTimeout(() => setIsReady(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  // Preload other images in background after render
  useEffect(() => {
    if (!isReady) return;
    
    // Preload featured images in background
    requestIdleCallback(() => {
      const featuredImages = featuredMachines.map(m => m.image);
      preloadImages(featuredImages);
    });
  }, [isReady]);

  const preloadCatalog = useCallback(async () => {
    if (catalogPreloaded) return;
    const catalogImages = catalogMachines.map(m => m.image);
    await preloadImages(catalogImages);
    setCatalogPreloaded(true);
  }, [catalogPreloaded]);

  useEffect(() => {
    if (!isReady) return;
    
    const machineSlug = searchParams.get('machine');
    const searchQuery = searchParams.get('search');
    
    if (machineSlug) {
      const machine = findMachineBySlug(allMachines, machineSlug);
      if (machine) {
        const fullMachine = allMachines.find(m => m.id === machine.id);
        if (fullMachine) {
          setSelectedMachine(fullMachine);
          setModalOpen(true);
          if (catalogMachines.some(m => m.id === fullMachine.id)) {
            setCatalogOpen(true);
          }
        }
      }
    }
    
    if (searchQuery) {
      setCatalogOpen(true);
      preloadCatalog();
      requestAnimationFrame(() => {
        document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }, [isReady, searchParams, preloadCatalog]);

  useEffect(() => {
    if (!isReady || !location.state?.scrollTo) return;
    
    requestAnimationFrame(() => {
      document.getElementById(location.state.scrollTo)?.scrollIntoView({ behavior: 'smooth' });
    });
    window.history.replaceState({}, document.title);
  }, [isReady, location.state]);

  const handleCatalogToggle = () => {
    if (!catalogOpen) preloadCatalog();
    setCatalogOpen(prev => !prev);
  };

  const handleViewDetails = useCallback((machine: Machine) => {
    lastScrollYRef.current = window.scrollY;
    setSelectedMachine(machine);
    setModalOpen(true);
    const newParams = new URLSearchParams(searchParams);
    newParams.set('machine', generateMachineSlug(machine));
    navigate(`?${newParams.toString()}`, { replace: true });
  }, [searchParams, navigate]);

  const handleCloseModal = useCallback(() => {
    const scrollY = lastScrollYRef.current;
    setModalOpen(false);
    setSelectedMachine(null);
    const newParams = new URLSearchParams(searchParams);
    newParams.delete('machine');
    const paramString = newParams.toString();
    navigate(paramString ? `?${paramString}` : '/', { replace: true });
    requestAnimationFrame(() => window.scrollTo(0, scrollY));
  }, [searchParams, navigate]);

  if (!isReady) {
    return (
      <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center">
        <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center animate-pulse">
          <span className="text-2xl font-black text-primary-foreground">YS</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden gpu-accelerated">
      <StaticGeometricShapes />
      <Header />
      
      <main className="relative z-[2]">
        <HeroSection />
        <div ref={featuredRef}>
          <FeaturedSection onViewDetails={handleViewDetails} />
        </div>
        <Suspense fallback={null}>
          <CatalogSection
            isOpen={catalogOpen}
            onToggle={handleCatalogToggle}
            onHoverButton={preloadCatalog}
            onViewDetails={handleViewDetails}
            urlSearchQuery={urlSearchQuery}
            onSearchChange={(query) => {
              const newParams = new URLSearchParams(searchParams);
              if (query) {
                newParams.set('search', query);
              } else {
                newParams.delete('search');
              }
              navigate(newParams.toString() ? `?${newParams.toString()}` : '/', { replace: true });
            }}
          />
        </Suspense>
        <Suspense fallback={null}>
          <WhyChooseSection />
        </Suspense>
        <Suspense fallback={null}>
          <TestimonialsSection />
        </Suspense>
        <Suspense fallback={null}>
          <ContactSection />
        </Suspense>
      </main>

      <FloatingSearchButton />
      <ScrollToTop targetRef={featuredRef} showAfter={600} />

      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      {modalOpen && (
        <Suspense fallback={null}>
          <MachineModal
            machine={selectedMachine}
            isOpen={modalOpen}
            onClose={handleCloseModal}
          />
        </Suspense>
      )}
    </div>
  );
};

export default Index;