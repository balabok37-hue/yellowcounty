import { Button } from '@/components/ui/button';
import { ChevronDown, Star, Award, TrendingUp } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

export function HeroSection() {
  const scrollToDeals = () => {
    document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Static Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Premium heavy machinery fleet" 
          className="w-full h-full object-cover object-center brightness-110 contrast-105"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/90" />
        <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,hsl(var(--background))_100%)] opacity-60" />
      </div>

      {/* Golden accent line bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent z-10" />
      
      {/* Content */}
      <div className="container relative z-10 text-center px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-5xl mx-auto space-y-5 sm:space-y-8 animate-fade-in">
          {/* Premium Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-primary/15 border border-primary/40 backdrop-blur-sm"
            style={{ boxShadow: '0 0 40px hsl(48 100% 50% / 0.2)' }}
          >
            <Award className="w-4 h-4 text-primary" />
            <span className="text-xs sm:text-sm font-bold text-primary tracking-wide">
              #1 HEAVY EQUIPMENT DEALER IN USA
            </span>
            <Star className="w-4 h-4 text-primary fill-primary" />
          </div>

          {/* Main Headline */}
          <h1 className="text-[1.75rem] leading-[1.1] sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight sm:tracking-tighter text-foreground px-2 sm:px-0">
            Heavy Machinery
            <br />
            <span className="text-gradient-gold relative">
              That Pays For Itself
              {/* Underline accent */}
              <div className="absolute -bottom-2 left-1/4 right-1/4 h-1 rounded-full bg-gradient-to-r from-primary/0 via-primary to-primary/0" />
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-sm sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-2">
            Hand-selected premium units — <span className="text-primary font-bold">20% below market</span>
          </p>

          {/* CTA Button */}
          <div>
            <Button
              size="lg"
              onClick={scrollToDeals}
              className="relative btn-glow bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm sm:text-lg px-8 sm:px-12 py-6 sm:py-8 rounded-2xl min-h-[56px] sm:min-h-[64px] touch-manipulation overflow-hidden group active:scale-[0.97] transition-transform duration-150"
              style={{ boxShadow: '0 0 50px hsl(48 100% 50% / 0.35), 0 15px 50px hsl(0 0% 0% / 0.4)' }}
            >
              <span className="relative flex items-center gap-2">
                See Today's Best Deals
                <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
              </span>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-8 sm:pt-14 max-w-3xl mx-auto">
            {[
              { value: '150+', label: 'Units Sold', icon: TrendingUp },
              { value: '$15M+', label: 'Equipment Value', icon: Award },
              { value: '99.9%', label: 'Satisfaction', icon: Star },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-3 sm:p-5 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/30 transform-gpu transition-all duration-150 hover:scale-105 hover:border-primary/40 hover:shadow-[0_0_40px_hsl(48_100%_50%/0.15)]"
              >
                <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary mx-auto mb-1 sm:mb-2" />
                <div className="text-lg sm:text-3xl md:text-4xl font-black text-primary" style={{ textShadow: '0 0 25px hsl(48 100% 50% / 0.35)' }}>
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden md:block opacity-0 animate-[fade-in_0.6s_ease-out_2s_forwards]">
        <div className="w-7 h-12 rounded-full border-2 border-primary/40 flex justify-center pt-3 bg-background/30 backdrop-blur-sm"
          style={{ boxShadow: '0 0 25px hsl(48 100% 50% / 0.15)' }}
        >
          <div className="w-1.5 h-3 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
}
