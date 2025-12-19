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
import type { Machine } from '@/components/MachineCard';

// Lazy load below-the-fold sections
const CatalogSection = lazy(() => import('@/components/sections/CatalogSection').then(m => ({ default: m.CatalogSection })));
const WhyChooseSection = lazy(() => import('@/components/sections/WhyChooseSection').then(m => ({ default: m.WhyChooseSection })));
const TestimonialsSection = lazy(() => import('@/components/sections/TestimonialsSection').then(m => ({ default: m.TestimonialsSection })));
const ContactSection = lazy(() => import('@/components/sections/ContactSection').then(m => ({ default: m.ContactSection })));
const Footer = lazy(() => import('@/components/sections/Footer').then(m => ({ default: m.Footer })));
const MachineModal = lazy(() => import('@/components/MachineModal').then(m => ({ default: m.MachineModal })));

const Index = () => {
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [selectedMachine, setSelectedMachine] = useState<Machine | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [catalogPreloaded, setCatalogPreloaded] = useState(false);
  const featuredRef = useRef<HTMLDivElement>(null);
  const lastScrollYRef = useRef(0);
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Initialize smooth scroll
  useLenis();

  // Get search query from URL
  const urlSearchQuery = searchParams.get('search') || '';

  // Preload catalog images when hovering on button or opening catalog
  const preloadCatalog = useCallback(async () => {
    if (catalogPreloaded) return;
    const catalogImages = catalogMachines.map(m => m.image);
    await preloadImages(catalogImages);
    setCatalogPreloaded(true);
  }, [catalogPreloaded]);

  // Handle URL parameter for direct machine links and search
  useEffect(() => {
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
      setTimeout(() => {
        document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [searchParams, preloadCatalog]);

  // Handle scroll to section when navigating from other pages
  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  // Preload featured images in background
  useEffect(() => {
    const featuredImages = featuredMachines.map(m => m.image);
    preloadImages(featuredImages);
  }, []);

  const handleCatalogToggle = () => {
    if (!catalogOpen) preloadCatalog();
    setCatalogOpen(!catalogOpen);
  };

  const handleViewDetails = (machine: Machine) => {
    lastScrollYRef.current = window.scrollY;
    setSelectedMachine(machine);
    setModalOpen(true);
    const newParams = new URLSearchParams(searchParams);
    newParams.set('machine', generateMachineSlug(machine));
    navigate(`?${newParams.toString()}`, { replace: true });
  };

  const handleCloseModal = () => {
    const scrollY = lastScrollYRef.current;
    setModalOpen(false);
    setSelectedMachine(null);
    const newParams = new URLSearchParams(searchParams);
    newParams.delete('machine');
    const paramString = newParams.toString();
    navigate(paramString ? `?${paramString}` : '/', { replace: true });
    requestAnimationFrame(() => window.scrollTo(0, scrollY));
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
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