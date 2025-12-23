import { useState } from 'react';
import { Phone, Menu, X, ChevronDown, Search, Info } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CompanyInfoModal } from './CompanyInfoModal';
import yellowstoneLogo from '@/assets/yellowstone-logo.svg';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCompanyInfoOpen, setIsCompanyInfoOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const handleNavClick = (href: string, isRoute?: boolean) => {
    if (isRoute) {
      navigate(href);
    } else if (href.startsWith('/#')) {
      const sectionId = href.substring(2);
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollTo: sectionId } });
      } else {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const equipmentCategories = [
    { label: 'Excavators', category: 'excavators' },
    { label: 'Wheel Loaders', category: 'wheel-loaders' },
    { label: 'Track Loaders', category: 'track-loaders' },
    { label: 'Telehandlers', category: 'telehandlers' },
    { label: 'Dozers', category: 'dozers' },
    { label: 'Trucks', category: 'trucks' },
    { label: 'Compaction', category: 'compaction' },
    { label: 'Backhoes', category: 'backhoes' },
  ];

  const handleCategoryClick = (category: string) => {
    navigate(`/?category=${category}`);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 header-dark">
        <div className="container px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5">
              <img src={yellowstoneLogo} alt="YellowStone" className="w-9 h-9" />
              <div className="text-xl font-bold text-secondary-foreground">
                Yellow<span className="text-[hsl(45,100%,50%)]">Stone</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link 
                to="/"
                className="px-4 py-2 text-sm font-medium text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
              >
                HOME
              </Link>
              
              <DropdownMenu>
                <DropdownMenuTrigger className="px-4 py-2 text-sm font-medium text-secondary-foreground/80 hover:text-secondary-foreground transition-colors flex items-center gap-1">
                  EQUIPMENT
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-card border-border z-50">
                  {equipmentCategories.map((cat) => (
                    <DropdownMenuItem 
                      key={cat.label}
                      onClick={() => handleCategoryClick(cat.category)}
                      className="cursor-pointer"
                    >
                      {cat.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <button
                onClick={() => handleNavClick('/#catalog')}
                className="px-4 py-2 text-sm font-medium text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
              >
                SALES
              </button>

              <Link 
                to="/documents"
                className="px-4 py-2 text-sm font-medium text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
              >
                DOCUMENTS
              </Link>

              <button
                onClick={() => handleNavClick('/#contact')}
                className="px-4 py-2 text-sm font-medium text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
              >
                CONTACT
              </button>
            </nav>

            {/* Right Side - Search, Info, Phone */}
            <div className="hidden lg:flex items-center gap-3">
              <form onSubmit={handleSearch} className="relative">
                <Input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-48 h-9 pl-9 pr-3 bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50 rounded text-sm"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-foreground/50" />
              </form>

              <button
                onClick={() => setIsCompanyInfoOpen(true)}
                className="p-2 text-secondary-foreground/80 hover:text-secondary-foreground transition-colors rounded hover:bg-secondary-foreground/10"
                title="Company Info"
              >
                <Info className="w-5 h-5" />
              </button>

              <a
                href="tel:+16783106065"
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded font-bold text-sm hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-4 h-4" />
                (678) 310-6065
              </a>

            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-secondary-foreground"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-card lg:hidden">
          <div className="flex items-center justify-between h-16 px-4 border-b border-border">
            <div className="flex items-center gap-2.5">
              <img src={yellowstoneLogo} alt="YellowStone" className="w-8 h-8" />
              <span className="text-xl font-bold text-foreground">
                Yellow<span className="text-[hsl(45,100%,50%)]">Stone</span>
              </span>
            </div>
            <button
              className="p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-4 space-y-2">
            <form onSubmit={handleSearch} className="relative mb-4">
              <Input
                type="text"
                placeholder="Search equipment..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-12 pl-12 pr-4 bg-muted border-border rounded-lg"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            </form>

            <button
              onClick={() => handleNavClick('/')}
              className="w-full text-left px-4 py-3 text-lg font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              HOME
            </button>
            <button
              onClick={() => handleNavClick('/#catalog')}
              className="w-full text-left px-4 py-3 text-lg font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              EQUIPMENT
            </button>
            <button
              onClick={() => handleNavClick('/#catalog')}
              className="w-full text-left px-4 py-3 text-lg font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              SALES
            </button>
            <Link
              to="/documents"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 text-lg font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              DOCUMENTS
            </Link>
            <button
              onClick={() => handleNavClick('/#contact')}
              className="w-full text-left px-4 py-3 text-lg font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              CONTACT
            </button>

            {/* Company Info Button for Mobile */}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsCompanyInfoOpen(true);
              }}
              className="w-full text-left px-4 py-3 text-lg font-medium text-foreground hover:bg-muted rounded-lg transition-colors flex items-center gap-2"
            >
              <Info className="w-5 h-5" />
              COMPANY INFO
            </button>

            <div className="pt-4 border-t border-border mt-4">
              <a
                href="tel:+16783106065"
                className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                (678) 310-6065
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Company Info Modal */}
      <CompanyInfoModal 
        open={isCompanyInfoOpen} 
        onOpenChange={setIsCompanyInfoOpen} 
      />
    </>
  );
}