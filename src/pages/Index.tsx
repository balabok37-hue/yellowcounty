import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturedSection } from '@/components/sections/FeaturedSection';
import { CatalogSection } from '@/components/sections/CatalogSection';
import { WhyChooseSection } from '@/components/sections/WhyChooseSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/sections/Footer';
import { MachineModal } from '@/components/MachineModal';
import { LoadingScreen } from '@/components/LoadingScreen';
import { StaticGeometricShapes } from '@/components/StaticGeometricShapes';
import { ScrollToTop } from '@/components/ScrollToTop';
import { useLenis } from '@/hooks/useLenis';
import { preloadImages } from '@/hooks/useImagePreloader';
import { featuredMachines, catalogMachines, allMachines } from '@/data/machines';
import { generateMachineSlug, findMachineBySlug } from '@/lib/machine-utils';
import type { Machine } from '@/components/MachineCard';

// Preload hero image
const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => resolve();
    img.src = src;
  });
};

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [selectedMachine, setSelectedMachine] = useState<Machine | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [catalogPreloaded, setCatalogPreloaded] = useState(false);
  const featuredRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

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

  // Preload critical assets including featured images
  useEffect(() => {
    const loadAssets = async () => {
      // Preload hero image first
      const heroModule = await import('@/assets/hero-background.jpg');
      await preloadImage(heroModule.default);
      
      // Preload featured machine images in parallel
      const featuredImages = featuredMachines.map(m => m.image);
      await preloadImages(featuredImages);
      
      // Minimum loading time for smooth UX
      await new Promise(resolve => setTimeout(resolve, 600));
      setIsLoading(false);
      setTimeout(() => setShowContent(true), 50);
    };

    loadAssets();
  }, []);

  const handleCatalogToggle = async () => {
    if (!catalogOpen) {
      // Start preloading when opening
      preloadCatalog();
    }
    setCatalogOpen(!catalogOpen);
  };

  const handleViewDetails = (machine: Machine) => {
    setSelectedMachine(machine);
    setModalOpen(true);
    // Update URL with pretty machine slug
    setSearchParams({ machine: generateMachineSlug(machine) });
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedMachine(null);
    // Remove machine parameter from URL, but preserve search query
    const currentSearch = searchParams.get('search');
    if (currentSearch) {
      setSearchParams({ search: currentSearch });
    } else {
      setSearchParams({});
    }
  };

  return (
    <>
      <LoadingScreen isLoading={isLoading} />

      <AnimatePresence>
        {showContent && (
          <motion.div 
            className="min-h-screen bg-background text-foreground overflow-x-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
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
              <CatalogSection
                isOpen={catalogOpen}
                onToggle={handleCatalogToggle}
                onHoverButton={preloadCatalog}
                onViewDetails={handleViewDetails}
                urlSearchQuery={urlSearchQuery}
                onSearchChange={(query) => {
                  if (query) {
                    setSearchParams({ search: query });
                  } else {
                    setSearchParams({});
                  }
                }}
              />
              <WhyChooseSection />
              <TestimonialsSection />
              <ContactSection />
            </main>

            {/* Scroll to Top Button */}
            <ScrollToTop targetRef={featuredRef} showAfter={600} />

            {/* Footer */}
            <Footer />

            {/* Machine Detail Modal */}
            <MachineModal
              machine={selectedMachine}
              isOpen={modalOpen}
              onClose={handleCloseModal}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Index;
