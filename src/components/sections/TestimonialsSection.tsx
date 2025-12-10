import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const testimonials = [
  {
    name: 'Mike Rodriguez',
    role: 'Owner, Rodriguez Construction',
    location: 'Houston, TX',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    content: 'Purchased three CAT excavators from YellowStone. The savings compared to dealer pricing were incredible, and every machine was exactly as described. Smooth transaction from start to finish.',
    rating: 5,
  },
  {
    name: 'Sarah Mitchell',
    role: 'Fleet Manager, Mitchell Earthworks',
    location: 'Phoenix, AZ',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    content: 'Best equipment dealer I\'ve worked with in 15 years. Their inspection reports are thorough, pricing is transparent, and the delivery was perfectly coordinated.',
    rating: 5,
  },
  {
    name: 'James Chen',
    role: 'CEO, Chen Civil Engineering',
    location: 'Los Angeles, CA',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    content: 'We\'ve saved over $400k on our fleet purchases through YellowStone. The quality is consistently excellent and their customer service is unmatched in the industry.',
    rating: 5,
  },
  {
    name: 'Robert Thompson',
    role: 'Operations Director, Thompson Grading',
    location: 'Denver, CO',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    content: 'Bought a Komatsu wheel loader sight unseen based on their detailed photos and inspection report. Machine arrived in better condition than expected. Will definitely buy again.',
    rating: 5,
  },
  {
    name: 'David Martinez',
    role: 'Owner, Martinez Excavation',
    location: 'Billings, MT',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
    content: 'Local dealer with national reach. Picked up my Sany excavator same day. Their team went above and beyond to help with financing options. Highly recommend.',
    rating: 5,
  },
  {
    name: 'Jennifer Walsh',
    role: 'Procurement Manager, Walsh Construction',
    location: 'Salt Lake City, UT',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face',
    content: 'Third purchase from YellowStone this year. Consistent quality, fair prices, and honest people. They tell you exactly what you\'re getting - no surprises.',
    rating: 5,
  },
  {
    name: 'Marcus Johnson',
    role: 'Fleet Owner, Johnson Trucking',
    location: 'Bozeman, MT',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face',
    content: 'Expanded my fleet with two Peterbilts from YellowStone. Both trucks were in excellent mechanical condition. Their transparent pricing saved me thousands.',
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Set up the onSelect callback
  if (emblaApi) {
    emblaApi.on('select', onSelect);
  }

  return (
    <section className="py-20 md:py-32 overflow-hidden">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Trusted by contractors and dealers across America
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="relative"
        >
          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 px-4 md:flex-[0_0_80%] lg:flex-[0_0_60%]"
                >
                  <div className="glass-card p-8 md:p-12 h-full">
                    <Quote className="w-12 h-12 text-primary/30 mb-6" />
                    
                    <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
                      "{testimonial.content}"
                    </p>

                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-primary/30"
                        loading="lazy"
                      />
                      <div>
                        <div className="font-bold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        <div className="text-sm text-primary">{testimonial.location}</div>
                      </div>
                      <div className="ml-auto flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:translate-x-0 z-10 w-12 h-12 rounded-full bg-card/80 backdrop-blur border border-border flex items-center justify-center text-foreground hover:bg-card transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-0 z-10 w-12 h-12 rounded-full bg-card/80 backdrop-blur border border-border flex items-center justify-center text-foreground hover:bg-card transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-3 rounded-full transition-all duration-200 ${
                  index === selectedIndex ? 'bg-primary w-8' : 'bg-muted-foreground/30 w-3'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
