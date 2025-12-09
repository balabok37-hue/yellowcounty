import { useState, Suspense, lazy } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturedSection } from '@/components/sections/FeaturedSection';
import { CatalogSection } from '@/components/sections/CatalogSection';
import { WhyChooseSection } from '@/components/sections/WhyChooseSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/sections/Footer';
import { MachineModal } from '@/components/MachineModal';
import { useLenis } from '@/hooks/useLenis';
import type { Machine } from '@/components/MachineCard';

// Lazy load the particle background for performance
const ParticleBackground = lazy(() => import('@/components/ParticleBackground'));

const Index = () => {
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [selectedMachine, setSelectedMachine] = useState<Machine | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Initialize smooth scroll
  useLenis();

  const handleViewDetails = (machine: Machine) => {
    setSelectedMachine(machine);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedMachine(null);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* 3D Particle Background */}
      <Suspense fallback={<div className="fixed inset-0 bg-background -z-10" />}>
        <ParticleBackground />
      </Suspense>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
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
    </div>
  );
};

export default Index;
