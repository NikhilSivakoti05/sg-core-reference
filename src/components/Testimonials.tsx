import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from './ui/button';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Martinez',
      role: 'Professional Makeup Artist',
      company: 'Beauty Studio NYC',
      content:
        'PLANADESK has completely transformed my mobile beauty business. Setup is instant, and my clients are always impressed by the professional presentation.',
      rating: 5,
    },
    {
      name: 'Dr. James Chen',
      role: 'Physical Therapist',
      company: 'Mobile Health Services',
      content:
        'The durability and portability are unmatched. I can provide the same quality of care at home visits as I do in the clinic. Absolute game-changer.',
      rating: 5,
    },
    {
      name: 'Michael Thompson',
      role: 'Field Service Technician',
      company: 'Tech Solutions Ltd',
      content:
        'I used to carry multiple bags and waste time setting up. Now I arrive, pop it open, and I\'m ready to work in 30 seconds. Worth every penny.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Nail Artist',
      company: 'Glamour on the Go',
      content:
        'My clients love how organized and professional my setup looks. PLANADESK has elevated my entire brand image and made my work so much easier.',
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-heading font-bold mb-4 text-white">
            Trusted by Professionals Worldwide
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            See what our customers are saying about their PLANADESK experience.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-2xl shadow-card-hover p-8 md:p-12 relative"
            >
              <Quote className="absolute top-8 right-8 w-16 h-16 text-primary/10" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-xl text-foreground mb-8 leading-relaxed italic">
                "{currentTestimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center text-white text-2xl font-bold">
                  {currentTestimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-subheading font-semibold text-lg">{currentTestimonial.name}</h4>
                  <p className="text-muted-foreground">
                    {currentTestimonial.role} · {currentTestimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="icon"
              className="bg-white hover:bg-white/90"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="icon"
              className="bg-white hover:bg-white/90"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center"
          >
            <div className="text-white">
              <div className="text-4xl font-heading font-bold mb-2">50,000+</div>
              <div className="text-white/80">Professionals Served</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-heading font-bold mb-2">4.8/5</div>
              <div className="text-white/80">Average Rating</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-heading font-bold mb-2">25+</div>
              <div className="text-white/80">Countries Worldwide</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
