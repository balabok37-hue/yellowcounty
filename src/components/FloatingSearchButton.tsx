import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

export function FloatingSearchButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSearch = (value: string) => {
    setQuery(value);
    // Update URL and scroll to catalog
    if (value.trim()) {
      setSearchParams({ search: value });
      const catalogSection = document.getElementById('catalog');
      if (catalogSection) {
        catalogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      setSearchParams({});
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setQuery('');
    setSearchParams({});
  };

  return (
    <div className="fixed top-20 right-4 md:right-6 z-50">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.button
            key="button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(true)}
            className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-card/95 backdrop-blur-md text-foreground border border-border/50 shadow-lg hover:bg-card hover:shadow-xl active:scale-95 transition-all duration-200 flex items-center justify-center ring-2 ring-primary/20 hover:ring-primary/40"
            aria-label="Search equipment"
          >
            <Search className="w-5 h-5" strokeWidth={2} />
          </motion.button>
        ) : (
          <motion.div
            key="input"
            initial={{ opacity: 0, width: 44, scale: 0.95 }}
            animate={{ opacity: 1, width: 280, scale: 1 }}
            exit={{ opacity: 0, width: 44, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="h-11 md:h-12 rounded-full bg-card/95 backdrop-blur-md border border-border/50 shadow-lg ring-2 ring-primary/30 flex items-center overflow-hidden"
          >
            <div className="flex items-center justify-center w-11 h-11 md:w-12 md:h-12 flex-shrink-0">
              <Search className="w-5 h-5 text-muted-foreground" strokeWidth={2} />
            </div>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search equipment..."
              className="flex-1 h-full bg-transparent text-foreground placeholder:text-muted-foreground text-sm outline-none pr-2"
            />
            <button
              onClick={handleClose}
              className="w-10 h-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
              aria-label="Close search"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
