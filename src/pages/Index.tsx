import { useEffect, useRef } from 'react';
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { CatalogSection } from '@/components/sections/CatalogSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/sections/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { allMachines } from '@/data/machines';
import { findMachineBySlug, generateMachineSlug } from '@/lib/machine-utils';

const Index = () => {
  const catalogRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Get search query and category from URL
  const urlSearchQuery = searchParams.get('search') || '';
  const urlCategory = searchParams.get('category') || '';

  // Handle legacy URL parameter for direct machine links - redirect to new page
  useEffect(() => {
    const machineSlug = searchParams.get('machine');
    
    if (machineSlug) {
      const machine = findMachineBySlug(allMachines, machineSlug);
      if (machine) {
        // Redirect to the new machine page
        navigate(`/machine/${generateMachineSlug(machine)}`, { replace: true });
      } else {
        // Remove invalid machine parameter
        const newParams = new URLSearchParams(searchParams);
        newParams.delete('machine');
        navigate(newParams.toString() ? `?${newParams.toString()}` : '/', { replace: true });
      }
    }
  }, [searchParams, navigate]);

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

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main>
        <HeroSection />
        <div ref={catalogRef}>
          <CatalogSection
            isOpen={true}
            onToggle={() => {}}
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
    </div>
  );
};

export default Index;