import { motion } from 'framer-motion';
import { X, Check, Play, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import Timeline from '../components/Timeline';
import Testimonials from '../components/Testimonials';
import { Button } from '../components/ui/button';

const India = () => {
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
      price: '₹25,000',
      description: 'Compact solution for mobile professionals',
      features: ['Quick 30-second setup', 'Lightweight aluminum frame', 'Holds up to 15kg', 'Compact storage', 'Basic accessories included'],
      badge: 'Bestseller',
    },
    {
      name: 'PLANADESK Pro',
      price: '₹55,000',
      description: 'Premium build for demanding workflows',
      features: ['Heavy-duty construction', 'Holds up to 25kg', 'Premium wheels', 'Extended warranty', 'Pro accessory pack'],
    },
    {
      name: 'PLANADESK Ultra',
      price: '₹90,000',
      description: 'Heavy-duty professional workstation',
      features: ['Industrial-grade materials', 'Holds up to 40kg', 'All-terrain wheels', '3-year warranty', 'Complete accessory suite'],
    },
  ];

  return (
    <div className="min-h-screen" style={{ '--country-accent': '14 100% 60%' } as React.CSSProperties}>
      <Header country="India" flag="🇮🇳" currency="₹" phone="1800-PLANADESK" email="india@planadesk.com" />

      {/* Hero Section - India: Vibrant orange with traditional pattern overlay */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
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
                  <span>⚡10-Second Setup</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Check className="w-5 h-5" />
                  <span>Premium 2-Year Warranty</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg">
                  Shop Now ₹12,999
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>
              
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center text-white text-8xl shadow-card-hover">
                🎬
              </div>
              <div className="absolute -bottom-4 -right-4 bg-success text-success-foreground px-6 py-3 rounded-full font-subheading font-semibold shadow-card">
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
                className="bg-card rounded-xl p-6 shadow-soft"
              >
                <div className="text-center mb-4">
                  <div className="text-destructive font-semibold mb-2">{item.before}</div>
                  <div className="relative">
                    <div className="absolute left-1/2 -translate-x-1/2 -top-2">
                      <ChevronRight className="w-8 h-8 text-primary rotate-90" />
                    </div>
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
                PLANADESK was born from a simple observation: professionals deserve better tools for mobile work. We've revolutionized the mobile workstation industry by combining innovative engineering with uncompromising quality.
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

      <Footer country="India" currency="₹" />
    </div>
  );
};

export default India;
