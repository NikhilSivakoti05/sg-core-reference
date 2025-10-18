import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Globe, ArrowRight, Zap, Shield, Globe2, Award, Users, Star } from 'lucide-react';
import { Link } from 'lucide-react';

const countries = [
  { name: 'India', code: 'in', flag: '🇮🇳', currency: 'INR' },
  { name: 'USA', code: 'us', flag: '🇺🇸',  currency: 'USD' },
  { name: 'UK', code: 'uk', flag: '🇬🇧',  currency: 'GBP' },
  { name: 'Mexico', code: 'mx', flag: '🇲🇽',  currency: 'MXN' },
  { name: 'Bahamas', code: 'us', flag: '🇧🇸', currency: 'BSD' },
  { name: 'other countrt', code: 'us', flag: 'oc', currency: 'BSD' },

];

const features = [
  {
    icon: Zap,
    title: '30-Second Setup',
    description: 'Transform from trolley to table in seconds. No tools required.',
  },
  {
    icon: Shield,
    title: 'Premium Warranty',
    description: '2-year comprehensive warranty on all components.',
  },
  {
    icon: Globe2,
    title: 'Global Availability',
    description: 'Shipped and supported in 25+ countries worldwide.',
  },
  {
    icon: Award,
    title: 'Professional Grade',
    description: 'Built to withstand daily professional use.',
  },
  {
    icon: Award,
    title: 'Professional Grade',
    description: 'Built to withstand daily professional use.',
  },
  {
    icon: Award,
    title: 'Professional Grade',
    description: 'Built to withstand daily professional use.',
  },
  {
    icon: Award,
    title: 'Professional Grade',
    description: 'Built to withstand daily professional use.',
  },
  {
    icon: Award,
    title: 'Professional Grade',
    description: 'Built to withstand daily professional use.',
  },
];

const Index = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 gradient-hero rounded-lg flex items-center justify-center shadow-soft">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">PLANADESK</span>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
  <a href="/" className="hover:text-primary transition-smooth">Home</a>
  <a href="/track-your-order" className="hover:text-primary transition-smooth">Track your order</a>
    <a href="/aboutus" className="hover:text-primary transition-smooth">About Us</a>
  <a href="/contactus" className="hover:text-primary transition-smooth">Contact us</a>
 

  <button 
    onClick={() => setModalOpen(true)}
    className="px-6 py-2 gradient-hero text-black rounded-lg font-semibold hover:shadow-card-hover transition-smooth"
  >
    Get your product
  </button>
</nav>

          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 text-primary font-semibold text-sm"
            >
              <Star className="w-4 h-4 fill-current" />
              Trusted by 50,000+ Professionals
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Revolutionizing
              <br />
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Mobile Workstations
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Transform from trolley to table in 10secnds.Available in 25+ countries with premium 2-year warranty.
            </p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setModalOpen(true)}
              className="px-10 py-5 bg-orange-500 text-white rounded-xl font-bold text-xl hover:shadow-card-hover transition-smooth shadow-card"
            >
              Book Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center backdrop-blur-md p-4"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 30 }}
              className="bg-card rounded-2xl shadow-card-hover px-8 py-10 max-w-2xl w-full relative"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-2xl text-muted-foreground font-bold hover:text-primary transition-smooth"
                onClick={() => setModalOpen(false)}
                aria-label="Close"
              >
                ×
              </button>
              <h2 className="text-3xl font-bold mb-2 text-center">
                Choose Your Country
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Select your location to view pricing and availability
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {countries.map((country, index) => (
                  <motion.button
                    key={country.code}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    className="group bg-muted/50 hover:bg-muted rounded-xl p-6 transition-smooth border-2 border-transparent hover:border-primary text-center"
                    onClick={() => {
                      setModalOpen(false);
                      navigate(`/${country.code}`);
                    }}
                  >
                    <span className="text-4xl mb-3 block group-hover:scale-110 transition-smooth">
                      {country.flag}
                    </span>
                    <span className="font-bold text-lg block mb-1">
                      {country.name}
                    </span>
                    <div className="flex items-center justify-center gap-1 text-primary font-semibold text-sm">
                      <span>Visit</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-smooth" />
                    </div>
                  </motion.button> 
                ))}
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Don't see your country?{' '}
                <a
                  href="#contact"
                  className="underline text-primary font-semibold hover:no-underline"
                  onClick={() => setModalOpen(false)}
                >
                  Contact us
                </a>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Social Proof */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Built for Professionals</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need for a mobile workstation that never compromises
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-smooth border border-border"
              >
                <div className="w-12 h-12 gradient-hero rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth shadow-soft">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-6 text-secondary font-semibold text-sm">
                <Users className="w-4 h-4" />
                Used by Industry Leaders
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Your Mobile Office,
                <br />
                Perfected
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                PLANADESK transforms any space into your professional workspace. Designed for beauty technicians,
                field service professionals, and anyone who needs mobility without compromise.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Instant transformation from trolley to stable desk',
                  'Professional-grade materials for daily use',
                  'Optimized storage compartments',
                  'Easy maneuverability with premium wheels',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 gradient-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <button className="px-8 py-4 gradient-hero text-white rounded-xl font-semibold text-lg hover:shadow-card-hover transition-smooth">
                Watch Product Demo
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-hero rounded-3xl shadow-card-hover flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
                <div className="text-9xl relative z-10">🎬</div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 gradient-shine rounded-3xl blur-2xl opacity-50" />
              <div className="absolute -top-6 -left-6 w-32 h-32 gradient-accent rounded-3xl blur-2xl opacity-50" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center bg-gradient-hero rounded-3xl p-12 shadow-glow relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_70%)]" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Workspace?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join 50,000+ professionals who've revolutionized their mobile service with PLANADESK
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  onClick={() => setModalOpen(true)}
                  className="px-8 py-4 bg-white text-primary rounded-xl font-semibold text-lg hover:bg-white/90 transition-smooth shadow-card"
                >
                  Book Now
                </button>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold text-lg hover:bg-white/20 transition-smooth border border-white/20">
                  Contact Sales Team
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 gradient-hero rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">PLANADESK</span>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} PLANADESK Global. Revolutionizing mobile workstations worldwide.
            </p>
            <div className="flex items-center gap-6 text-sm font-medium">
              <a href="#privacy" className="hover:text-primary transition-smooth">Privacy</a>
              <a href="#terms" className="hover:text-primary transition-smooth">Terms</a>
              <a href="#support" className="hover:text-primary transition-smooth">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
