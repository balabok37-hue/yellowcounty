import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
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
import { featuredMachines, catalogMachines } from '@/data/machines';
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

  // Initialize smooth scroll
  useLenis();

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

  // Preload catalog images when hovering on button or opening catalog
  const preloadCatalog = useCallback(async () => {
    if (catalogPreloaded) return;
    const catalogImages = catalogMachines.map(m => m.image);
    await preloadImages(catalogImages);
    setCatalogPreloaded(true);
  }, [catalogPreloaded]);

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
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedMachine(null);
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
