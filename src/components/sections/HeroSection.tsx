import { Phone } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="bg-secondary py-8">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-secondary-foreground">
              Premium Heavy Equipment
            </h1>
            <p className="text-secondary-foreground/70 mt-1">
              Quality machines at competitive prices
            </p>
          </div>
          <a
            href="tel:+16783106065"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[hsl(45,100%,50%)] text-[hsl(230,35%,18%)] rounded font-bold hover:bg-[hsl(45,100%,55%)] transition-colors w-fit"
          >
            <Phone className="w-5 h-5" />
            Call: (678) 310-6065
          </a>
        </div>
      </div>
    </section>
  );
}
