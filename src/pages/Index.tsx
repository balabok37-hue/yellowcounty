import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom';
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
import { FloatingSearchButton } from '@/components/FloatingSearchButton';
import { useLenis } from '@/hooks/useLenis';
import { catalogMachines, allMachines } from '@/data/machines';
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
  const featuredRef = useRef<HTMLDivElement>(null);
  const lastScrollYRef = useRef(0);
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Initialize smooth scroll
  useLenis();

  // Get search query from URL
  const urlSearchQuery = searchParams.get('search') || '';

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
      setTimeout(() => {
        const catalogEl = document.getElementById('catalog');
        catalogEl?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  }, [showContent, searchParams]);

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

  // Fast startup - show content immediately
  useEffect(() => {
    // Just preload hero, show content fast
    import('@/assets/hero-background.jpg').then(heroModule => {
      const img = new Image();
      img.onload = () => {
        setIsLoading(false);
        setShowContent(true);
      };
      img.onerror = () => {
        setIsLoading(false);
        setShowContent(true);
      };
      img.src = heroModule.default;
    });
    
    // Fallback - show after 300ms max
    const timeout = setTimeout(() => {
      setIsLoading(false);
      setShowContent(true);
    }, 300);
    
    return () => clearTimeout(timeout);
  }, []);

  const handleCatalogToggle = () => {
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
              <WhyChooseSection />
              <TestimonialsSection />
              <ContactSection />
            </main>

            {/* Floating Buttons */}
            <FloatingSearchButton />
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
