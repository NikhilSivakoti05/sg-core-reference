import { motion } from 'framer-motion';
import { Check, Play, ChevronRight } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import ProductCard from './ProductCard';
import Timeline from './Timeline';
import Testimonials from './Testimonials';
import { Button } from './ui/button';

interface CountryTemplateProps {
  country: string;
  flag: string;
  currency: string;
  startingPrice: string;
  phone: string;
  email: string;
  heroGradient: string;
  accentColor: string;
  themeStyle: string;
}

const CountryTemplate = ({
  country,
  flag,
  currency,
  startingPrice,
  phone,
  email,
  heroGradient,
  accentColor,
  themeStyle,
}: CountryTemplateProps) => {
  const beforeAfter = [
    { before: '❌ Multiple bags', solution: 'Revolutionary mechanism', after: '✅ One compact unit' },
    { before: '❌ 30+ min setup', solution: 'Engineered for travel', after: '✅ 30-sec setup' },
    { before: '❌ Location-bound', solution: 'Durable premium materials', after: '✅ Work anywhere' },
  ];

  const useCases = [
    { title: 'Beauty & Spa', icon: '💄', items: ['Makeup artists', 'Nail technicians', 'Hair styling'] },
    { title: 'Healthcare', icon: '🏥', items: ['Physiotherapy', 'Nursing care', 'Home exams'] },
    { title: 'Field Tech', icon: '🔧', items: ['IT repair', 'Electronics', 'Field installation'] },
    { title: 'Education', icon: '📚', items: ['Mobile tutoring', 'Art classes', 'Music lessons'] },
  ];

  const products = [
    {
      name: 'PLANADESK Lite',
      price: `${currency}${currency === '¥' ? '12,800' : currency === 'R' ? '2,699' : '149'}`,
      description: 'Compact solution for mobile professionals',
      features: [
        'Quick 30-second setup',
        'Lightweight aluminum frame',
        'Holds up to 15kg',
        'Compact storage',
        'Basic accessories included',
      ],
      badge: 'Bestseller',
    },
    {
      name: 'PLANADESK Pro',
      price: `${currency}${currency === '¥' ? '16,800' : currency === 'R' ? '3,699' : '189'}`,
      description: 'Premium build for demanding workflows',
      features: [
        'Heavy-duty construction',
        'Holds up to 25kg',
        'Premium wheels',
        'Extended warranty',
        'Pro accessory pack',
      ],
    },
    {
      name: 'PLANADESK Ultra',
      price: `${currency}${currency === '¥' ? '19,800' : currency === 'R' ? '4,299' : '229'}`,
      description: 'Heavy-duty professional workstation',
      features: [
        'Industrial-grade materials',
        'Holds up to 40kg',
        'All-terrain wheels',
        '3-year warranty',
        'Complete accessory suite',
      ],
    },
  ];

  const getPatternStyle = () => {
    const patterns = {
      elegant:
        'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)',
      minimalist:
        'linear-gradient(45deg, transparent 48%, rgba(255,255,255,0.05) 49%, rgba(255,255,255,0.05) 51%, transparent 52%)',
      futuristic:
        'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)',
      natural: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)',
      vibrant:
        'repeating-conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(255,255,255,0.05) 30deg, transparent 60deg)',
      sophisticated:
        'linear-gradient(135deg, transparent 25%, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.05) 50%, transparent 50%)',
      adventurous:
        'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)',
      dynamic:
        'conic-gradient(from 45deg at 50% 50%, transparent 0deg, rgba(255,255,255,0.05) 90deg, transparent 180deg)',
    };
    return patterns[themeStyle as keyof typeof patterns] || patterns.elegant;
  };

  return (
    <div className="min-h-screen">
      <Header country={country} flag={flag} currency={currency} phone={phone} email={email} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden" style={{ background: heroGradient }}>
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: getPatternStyle(),
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                TRANSFORM YOUR MOBILE SERVICE
              </h1>
              <p className="text-xl text-white/90 mb-8">
                The revolutionary trolley-to-table workstation for professionals.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-white">
                  <Check className="w-5 h-5" />
                  <span>⚡ 30-Second Setup</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Check className="w-5 h-5" />
                  <span>Premium 2-Year Warranty</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="bg-white hover:bg-white/90 shadow-lg font-bold"
                  style={{ color: accentColor }}
                >
                  Shop Now {startingPrice}
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center gap-2 mt-6 text-white">
                <span className="text-2xl">⭐⭐⭐⭐⭐</span>
                <span className="text-sm">4.8/5 • 2,847+ Reviews</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center text-white text-8xl shadow-2xl">
                🎬
              </div>
              <div
                className="absolute -bottom-4 -right-4 text-white px-6 py-3 rounded-full font-subheading font-semibold shadow-lg"
                style={{ backgroundColor: accentColor }}
              >
                Trolley → Table in 30s
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-heading font-bold text-center mb-16"
          >
            What Changes We'll Make
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {beforeAfter.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 shadow-soft hover:shadow-card transition-shadow"
              >
                <div className="text-center mb-4">
                  <div className="text-destructive font-semibold mb-2">{item.before}</div>
                  <div className="relative py-4">
                    <ChevronRight className="w-8 h-8 text-primary rotate-90 mx-auto" />
                  </div>
                </div>
                <div className="bg-primary/10 rounded-lg p-4 mb-4 text-center">
                  <div className="text-sm font-subheading font-semibold text-primary">{item.solution}</div>
                </div>
                <div className="text-center">
                  <div className="text-success font-semibold">{item.after}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold mb-4">All About Mobile Workstations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover how professionals across industries are transforming their work with PLANADESK
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 shadow-soft hover:shadow-card transition-shadow"
              >
                <div className="text-5xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-heading font-bold mb-4">{useCase.title}</h3>
                <ul className="space-y-2 mb-4">
                  {useCase.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-background" id="products">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold mb-4">Choose Your PLANADESK</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find the perfect mobile workstation for your professional needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <Timeline />

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-heading font-bold mb-6">Our Story & Values</h2>
              <p className="text-lg text-muted-foreground mb-8">
                PLANADESK was born from a simple observation: professionals deserve better tools for mobile work. We've
                revolutionized the mobile workstation industry by combining innovative engineering with uncompromising
                quality.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: '🎯', title: 'Innovation', desc: 'Constantly pushing boundaries in design and functionality' },
                { icon: '💎', title: 'Quality', desc: 'Premium materials and rigorous testing standards' },
                { icon: '🌍', title: 'Global', desc: 'Serving professionals in 25+ countries worldwide' },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-heading font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Strip */}
      <section className="py-16 bg-foreground text-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-2">Ready to Transform Your Work?</h2>
              <p className="text-background/80">Join 50,000+ professionals who trust PLANADESK</p>
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
              Shop Now
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Footer country={country} currency={currency} />
    </div>
  );
};

export default CountryTemplate;
