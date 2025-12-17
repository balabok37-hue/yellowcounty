import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';

interface FloatingSearchButtonProps {
  showAfter?: number;
}

export function FloatingSearchButton({ showAfter = 400 }: FloatingSearchButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > showAfter);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showAfter]);

  const handleClick = () => {
    // Scroll to catalog section and focus search
    const catalogSection = document.getElementById('catalog');
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Focus search input after scroll
      setTimeout(() => {
        const searchInput = document.querySelector('input[placeholder*="Search"]') as HTMLInputElement;
        if (searchInput) {
          searchInput.focus();
        }
      }, 500);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          onClick={handleClick}
          className="fixed bottom-24 right-6 md:bottom-28 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full bg-card/90 backdrop-blur-sm text-foreground border border-border/50 shadow-xl hover:bg-card active:scale-95 transition-all duration-200 flex items-center justify-center ring-2 ring-primary/20 hover:ring-primary/40"
          aria-label="Search equipment"
        >
          <Search className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
