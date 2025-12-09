import { useState, useEffect, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
import { GeometricShapes } from '@/components/GeometricShapes';
import { useLenis } from '@/hooks/useLenis';
import type { Machine } from '@/components/MachineCard';

// Lazy load the particle background for performance
const ParticleBackground = lazy(() => import('@/components/ParticleBackground'));

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

  // Initialize smooth scroll
  useLenis();

  // Preload critical assets
  useEffect(() => {
    const loadAssets = async () => {
      const heroModule = await import('@/assets/hero-background.jpg');
      await preloadImage(heroModule.default);
      await new Promise(resolve => setTimeout(resolve, 800));
      setIsLoading(false);
      setTimeout(() => setShowContent(true), 50);
    };

    loadAssets();
  }, []);

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
            {/* 3D Particle Background */}
            <Suspense fallback={<div className="fixed inset-0 bg-background -z-10" />}>
              <ParticleBackground />
            </Suspense>

            {/* Global Geometric Shapes - Always visible with parallax */}
            <GeometricShapes variant="hero" intensity={0.6} />

            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="relative z-[2]">
              <HeroSection />
              <FeaturedSection onViewDetails={handleViewDetails} />
              <CatalogSection
                isOpen={catalogOpen}
                onToggle={() => setCatalogOpen(!catalogOpen)}
                onViewDetails={handleViewDetails}
              />
              <WhyChooseSection />
              <TestimonialsSection />
              <ContactSection />
            </main>

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
