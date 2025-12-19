import { useState, useEffect, useCallback, useRef, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

// Lazy load non-critical sections
const CatalogSection = lazy(() => import('@/components/sections/CatalogSection').then(m => ({ default: m.CatalogSection })));
const WhyChooseSection = lazy(() => import('@/components/sections/WhyChooseSection').then(m => ({ default: m.WhyChooseSection })));
const TestimonialsSection = lazy(() => import('@/components/sections/TestimonialsSection').then(m => ({ default: m.TestimonialsSection })));
const ContactSection = lazy(() => import('@/components/sections/ContactSection').then(m => ({ default: m.ContactSection })));
const Footer = lazy(() => import('@/components/sections/Footer').then(m => ({ default: m.Footer })));
const MachineModal = lazy(() => import('@/components/MachineModal').then(m => ({ default: m.MachineModal })));

// Simple loading placeholder
const SectionPlaceholder = () => (
  <div className="py-20 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const Index = () => {
  const [showContent, setShowContent] = useState(false);
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
    if (!showContent) return;
    
    const machineSlug = searchParams.get('machine');
    const searchQuery = searchParams.get('search');
    
    if (machineSlug) {
      const machine = findMachineBySlug(allMachines, machineSlug);
      if (machine) {
        const fullMachine = allMachines.find(m => m.id === machine.id);
        if (fullMachine) {
          setSelectedMachine(fullMachine);
          setModalOpen(true);
          // If machine is in catalog, open catalog section
          if (catalogMachines.some(m => m.id === fullMachine.id)) {
            setCatalogOpen(true);
          }
        }
      }
    }
    
    // If there's a search query, open catalog and scroll to it
    if (searchQuery) {
      setCatalogOpen(true);
      preloadCatalog();
      setTimeout(() => {
        const catalogEl = document.getElementById('catalog');
        catalogEl?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  }, [showContent, searchParams, preloadCatalog]);

  // Handle scroll to section when navigating from other pages
  useEffect(() => {
    if (showContent && location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      // Clear the state to prevent re-scrolling on refresh
      window.history.replaceState({}, document.title);
    }
  }, [showContent, location.state]);

  // Show content immediately, preload featured images in background
  useEffect(() => {
    // Show content right away
    setShowContent(true);
    
    // Preload featured images in background (non-blocking)
    const featuredImages = featuredMachines.map(m => m.image);
    preloadImages(featuredImages);
  }, []);

  const handleCatalogToggle = async () => {
    if (!catalogOpen) {
      // Start preloading when opening
      preloadCatalog();
    }
    setCatalogOpen(!catalogOpen);
  };

  const handleViewDetails = (machine: Machine) => {
    lastScrollYRef.current = window.scrollY;
    setSelectedMachine(machine);
    setModalOpen(true);
    // Update URL with pretty machine slug using replace to avoid page reset
    const newParams = new URLSearchParams(searchParams);
    newParams.set('machine', generateMachineSlug(machine));
    navigate(`?${newParams.toString()}`, { replace: true });
  };

  const handleCloseModal = () => {
    const scrollY = lastScrollYRef.current;

    setModalOpen(false);
    setSelectedMachine(null);

    // Remove machine parameter from URL using replace (keep current scroll position)
    const newParams = new URLSearchParams(searchParams);
    newParams.delete('machine');
    const paramString = newParams.toString();
    navigate(paramString ? `?${paramString}` : '/', { replace: true });

    // Restore scroll after URL update + modal unmount
    requestAnimationFrame(() => {
      window.scrollTo(0, scrollY);
    });
  };

  if (!showContent) {
    return null;
  }

  return (
    <motion.div 
      className="min-h-screen bg-background text-foreground overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Static Geometric Shapes Background */}
      <StaticGeometricShapes />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="relative z-[2]">
        <HeroSection />
        <div ref={featuredRef}>
          <FeaturedSection onViewDetails={handleViewDetails} />
        </div>
        <Suspense fallback={<SectionPlaceholder />}>
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
              const paramString = newParams.toString();
              navigate(paramString ? `?${paramString}` : '/', { replace: true });
            }}
          />
        </Suspense>
        <Suspense fallback={<SectionPlaceholder />}>
          <WhyChooseSection />
        </Suspense>
        <Suspense fallback={<SectionPlaceholder />}>
          <TestimonialsSection />
        </Suspense>
        <Suspense fallback={<SectionPlaceholder />}>
          <ContactSection />
        </Suspense>
      </main>

      {/* Floating Buttons */}
      <FloatingSearchButton />
      <ScrollToTop targetRef={featuredRef} showAfter={600} />

      {/* Footer */}
      <Suspense fallback={<SectionPlaceholder />}>
        <Footer />
      </Suspense>

      {/* Machine Detail Modal */}
      {modalOpen && (
        <Suspense fallback={null}>
          <MachineModal
            machine={selectedMachine}
            isOpen={modalOpen}
            onClose={handleCloseModal}
          />
        </Suspense>
      )}
    </motion.div>
  );
};

export default Index;
