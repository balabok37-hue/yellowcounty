import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

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
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30 };
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]), springConfig);
  const y = useSpring(useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [80, 0, 0, -80]), springConfig);
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]), springConfig);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-32">
      <div className="container px-4">
        <motion.div
          style={{ opacity, y, scale, willChange: 'transform, opacity' }}
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
          className="max-w-4xl mx-auto"
          style={{ opacity, y, willChange: 'transform, opacity' }}
        >
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                  opacity: index === activeIndex ? 1 : 0,
                  scale: index === activeIndex ? 1 : 0.95,
                  zIndex: index === activeIndex ? 1 : 0,
                }}
                transition={{ duration: 0.5 }}
                className={`${index === activeIndex ? 'relative' : 'absolute inset-0'}`}
              >
                <div className="glass-card p-8 md:p-12">
                  <Quote className="w-12 h-12 text-primary/30 mb-6" />
                  
                  <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-primary/30"
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
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? 'bg-primary w-8' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
