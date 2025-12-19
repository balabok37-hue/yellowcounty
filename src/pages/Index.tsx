import { useState, useEffect, useRef } from 'react';
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { CatalogSection } from '@/components/sections/CatalogSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/sections/Footer';
import { MachineModal } from '@/components/MachineModal';
import { ScrollToTop } from '@/components/ScrollToTop';
import { catalogMachines, allMachines } from '@/data/machines';
import { generateMachineSlug, findMachineBySlug } from '@/lib/machine-utils';
import type { Machine } from '@/components/MachineCard';

const Index = () => {
  const [selectedMachine, setSelectedMachine] = useState<Machine | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const catalogRef = useRef<HTMLDivElement>(null);
  const lastScrollYRef = useRef(0);
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Get search query and category from URL
  const urlSearchQuery = searchParams.get('search') || '';
  const urlCategory = searchParams.get('category') || '';

  // Handle URL parameter for direct machine links
  useEffect(() => {
    const machineSlug = searchParams.get('machine');
    
    if (machineSlug) {
      const machine = findMachineBySlug(allMachines, machineSlug);
      if (machine) {
        const fullMachine = allMachines.find(m => m.id === machine.id);
        if (fullMachine) {
          setSelectedMachine(fullMachine);
          setModalOpen(true);
        }
      }
    }
  }, [searchParams]);

  // Handle scroll to section when navigating from other pages
  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

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

    requestAnimationFrame(() => {
      window.scrollTo(0, scrollY);
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main>
        <HeroSection />
        <div ref={catalogRef}>
          <CatalogSection
            isOpen={true}
            onToggle={() => {}}
            onViewDetails={handleViewDetails}
            urlSearchQuery={urlSearchQuery}
            urlCategory={urlCategory}
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
            onCategoryChange={(category) => {
              const newParams = new URLSearchParams(searchParams);
              if (category && category !== 'all') {
                newParams.set('category', category);
              } else {
                newParams.delete('category');
              }
              const paramString = newParams.toString();
              navigate(paramString ? `?${paramString}` : '/', { replace: true });
            }}
          />
        </div>
        <ContactSection />
      </main>

      <ScrollToTop targetRef={catalogRef} showAfter={400} />
      <Footer />

      <MachineModal
        machine={selectedMachine}
        isOpen={modalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Index;
