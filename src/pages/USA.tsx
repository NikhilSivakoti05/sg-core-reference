import { useState, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Palette,
  Zap,
  Layers,
  Shield,
  Star,
  Lock,
  Smartphone,
  Wifi,
  Menu,
  X,
  CheckCircle2
} from "lucide-react";

const pageVariants = {
  basic: {
    hero: {
      background: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1920",
      titleTop: "TRAVEL",
      titleBottom: "WITH EASE",
      subtitle: "Say hello to the all new TrolleyPro Basic",
      buttonText: "Book Basic",
      stats: [
        { label: "CAPACITY", value: "65L" },
        { label: "WEIGHT", value: "3.5kg" },
        { label: "WHEELS", value: "360° Spin" },
        { label: "WARRANTY", value: "10 Years" },
      ],
    },
    features: {
      background: "https://images.pexels.com/photos/2138126/pexels-photo-2138126.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Built for the Journey",
      subtitle: "Experience unmatched performance in every detail",
      features: [
        { icon: Shield, label: "DURABLE", title: "Strong Shell" },
        { icon: Zap, label: "SMOOTH", title: "360° Wheels" },
        { icon: Star, label: "QUALITY", title: "Reliable Build" },
      ],
    },
    design: {
      background: "https://images.pexels.com/photos/2034300/pexels-photo-2034300.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Designed to Stand Out",
      subtitle: "Can't take your eyes off it",
      features: [
        { icon: Palette, label: "STYLISH", title: "Modern Look" },
        { icon: Zap, label: "ERGONOMIC", title: "Comfort Design" },
        { icon: Layers, label: "STRONG", title: "Layered Shell" },
      ],
    },
    technology: {
      background: "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Smart Protection",
      subtitle: "Travel with confidence and peace of mind",
      features: [
        { icon: Lock, label: "SECURE", title: "TSA Lock" },
        { icon: Smartphone, label: "BASIC", title: "Manual Track" },
        { icon: Wifi, label: "STANDARD", title: "No GPS" },
      ],
    },
    specs: {
      price: "₹9,999",
      originalPrice: "₹12,999",
      dimensions: [
        { label: "Height (with wheels)", value: "67 cm" },
        { label: "Width", value: "45 cm" },
        { label: "Depth", value: "28 cm" },
        { label: "Weight", value: "3.5 kg" },
      ],
      features: [
        "Polycarbonate hard shell construction",
        "Aluminum telescopic handle with 3 height settings",
        "4 multi-directional spinner wheels",
        "TSA-approved combination lock",
        "Fully lined interior with divider",
        "Ergonomic top and side handles",
        "10-year international warranty",
      ],
      capacity: [
        { label: "Main Compartment", value: "65 Liters" },
        { label: "Expanded", value: "81 Liters" },
        { label: "Max Load Capacity", value: "25 kg" },
      ],
    },
  },
  medium: {
    hero: {
      background: "https://images.pexels.com/photos/1058771/pexels-photo-1058771.jpeg?auto=compress&cs=tinysrgb&w=1920",
      titleTop: "ENHANCED",
      titleBottom: "TRAVEL STYLE",
      subtitle: "Experience upgraded convenience with TrolleyPro Medium",
      buttonText: "Book Medium",
      stats: [
        { label: "CAPACITY", value: "70L" },
        { label: "WEIGHT", value: "3.8kg" },
        { label: "WHEELS", value: "360° + Suspension" },
        { label: "WARRANTY", value: "12 Years" },
      ],
    },
    features: {
      background: "https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Enhanced Performance",
      subtitle: "Premium features for the discerning traveler",
      features: [
        { icon: Shield, label: "REINFORCED", title: "Premium Shell" },
        { icon: Zap, label: "ADVANCED", title: "Suspension Wheels" },
        { icon: Star, label: "PREMIUM", title: "Superior Quality" },
      ],
    },
    design: {
      background: "https://images.pexels.com/photos/1059119/pexels-photo-1059119.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Elevated Design",
      subtitle: "Premium aesthetics meet functionality",
      features: [
        { icon: Palette, label: "REFINED", title: "Premium Finish" },
        { icon: Zap, label: "ADVANCED", title: "Enhanced Grip" },
        { icon: Layers, label: "REINFORCED", title: "Extra Protection" },
      ],
    },
    technology: {
      background: "https://images.pexels.com/photos/842876/pexels-photo-842876.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Advanced Security",
      subtitle: "Enhanced protection for your valuables",
      features: [
        { icon: Lock, label: "ADVANCED", title: "Smart TSA Lock" },
        { icon: Smartphone, label: "CONNECTED", title: "App Enabled" },
        { icon: Wifi, label: "TRACKING", title: "Basic GPS" },
      ],
    },
    specs: {
      price: "₹14,999",
      originalPrice: "₹18,999",
      dimensions: [
        { label: "Height (with wheels)", value: "70 cm" },
        { label: "Width", value: "47 cm" },
        { label: "Depth", value: "30 cm" },
        { label: "Weight", value: "3.8 kg" },
      ],
      features: [
        "Premium polycarbonate shell with reinforced corners",
        "Aluminum telescopic handle with 4 height settings",
        "4 multi-directional spinner wheels with suspension",
        "Smart TSA-approved digital lock",
        "Premium lined interior with compression straps",
        "Expandable design (+25% capacity)",
        "Ergonomic cushioned handles",
        "12-year international warranty",
        "USB charging port integration ready",
      ],
      capacity: [
        { label: "Main Compartment", value: "70 Liters" },
        { label: "Expanded", value: "87 Liters" },
        { label: "Max Load Capacity", value: "30 kg" },
      ],
    },
  },
  premium: {
    hero: {
      background: "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1920",
      titleTop: "LUXURY",
      titleBottom: "REDEFINED",
      subtitle: "Premium design with the best materials and warranty",
      buttonText: "Book Premium",
      stats: [
        { label: "CAPACITY", value: "75L" },
        { label: "WEIGHT", value: "3.9kg" },
        { label: "WHEELS", value: "360° + Shock Absorb" },
        { label: "WARRANTY", value: "15 Years" },
      ],
    },
    features: {
      background: "https://images.pexels.com/photos/1059116/pexels-photo-1059116.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Uncompromising Excellence",
      subtitle: "The pinnacle of luggage engineering",
      features: [
        { icon: Shield, label: "MILITARY-GRADE", title: "Ultra Protection" },
        { icon: Zap, label: "PREMIUM", title: "Shock Absorbing" },
        { icon: Star, label: "LUXURY", title: "Lifetime Quality" },
      ],
    },
    design: {
      background: "https://images.pexels.com/photos/2533092/pexels-photo-2533092.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Masterpiece Design",
      subtitle: "Luxury craftsmanship in every detail",
      features: [
        { icon: Palette, label: "LUXURY", title: "Premium Materials" },
        { icon: Zap, label: "ULTIMATE", title: "Perfect Balance" },
        { icon: Layers, label: "MAXIMUM", title: "Ultimate Strength" },
      ],
    },
    technology: {
      background: "https://images.pexels.com/photos/1374064/pexels-photo-1374064.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Ultimate Protection",
      subtitle: "State-of-the-art security features",
      features: [
        { icon: Lock, label: "PREMIUM", title: "Biometric Lock" },
        { icon: Smartphone, label: "SMART", title: "Full App Control" },
        { icon: Wifi, label: "ADVANCED", title: "Real-time GPS" },
      ],
    },
    specs: {
      price: "₹24,999",
      originalPrice: "₹32,999",
      dimensions: [
        { label: "Height (with wheels)", value: "73 cm" },
        { label: "Width", value: "50 cm" },
        { label: "Depth", value: "32 cm" },
        { label: "Weight", value: "3.9 kg" },
      ],
      features: [
        "Ultra-premium polycarbonate with carbon fiber reinforcement",
        "Titanium telescopic handle with 5 height settings",
        "4 premium spinner wheels with suspension & shock absorption",
        "Biometric TSA-approved smart lock with app integration",
        "Luxury leather-lined interior with premium compression system",
        "Expandable design (+30% capacity)",
        "Ergonomic memory foam handles",
        "Built-in USB charging port with power bank",
        "Real-time GPS tracking with geofencing",
        "15-year international warranty with premium support",
      ],
      capacity: [
        { label: "Main Compartment", value: "75 Liters" },
        { label: "Expanded", value: "97 Liters" },
        { label: "Max Load Capacity", value: "35 kg" },
      ],
    },
  },
};

function USA() {
  const [selectedVariant, setSelectedVariant] = useState<"basic" | "medium" | "premium">("basic");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeFeatureSection, setActiveFeatureSection] = useState(0);
  const [activeDesignSection, setActiveDesignSection] = useState(0);
  const [activeTechSection, setActiveTechSection] = useState(0);

  const currentData = pageVariants[selectedVariant];

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "Design", href: "#design" },
    { label: "Technology", href: "#technology" },
    { label: "Specs", href: "#specs" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const handleVariantChange = (variant: "basic" | "medium" | "premium") => {
    setSelectedVariant(variant);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-neutral-900 overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/90 backdrop-blur-lg shadow-black/40" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-neutral-700 to-neutral-900 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-white">T</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                TrolleyPro
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="px-4 py-2 text-sm font-medium text-white/85 hover:text-white transition-colors hover:bg-neutral-800/40 rounded-lg"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-3">
              <button className="px-4 py-2 text-sm border border-neutral-700 text-white/90 rounded-lg hover:bg-neutral-800/40 transition-colors">
                Locate Us
              </button>
              <button className="px-4 py-2 text-sm bg-gradient-to-r from-neutral-700 to-neutral-900 text-white rounded-lg hover:opacity-90 transition-opacity">
                {currentData.hero.buttonText}
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-neutral-900 border-t border-neutral-800">
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-4 py-3 text-sm font-medium text-white/85 hover:text-white hover:bg-neutral-800/40 rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4">
                <button className="w-full px-4 py-2 text-sm bg-gradient-to-r from-neutral-700 to-neutral-900 text-white rounded-lg hover:opacity-90">
                  {currentData.hero.buttonText}
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={currentData.hero.background}
            alt="Hero background"
            className="w-full h-full object-cover brightness-75 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-neutral-900/40 to-transparent"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl">
              <div className="mb-6 animate-fade-in">
                <h2 className="text-4xl lg:text-6xl font-bold text-white mb-2 italic tracking-wider">
                  {currentData.hero.titleTop}
                </h2>
                <h2 className="text-4xl lg:text-7xl font-bold text-white italic tracking-wider">
                  {currentData.hero.titleBottom}
                </h2>
              </div>

              <h1 className="text-3xl lg:text-5xl font-bold text-white mb-6 animate-fade-in">
                {currentData.hero.subtitle}
              </h1>

              <div className="mb-16 animate-fade-in">
                <button className="bg-gradient-to-r from-neutral-700 to-neutral-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity shadow-xl">
                  {currentData.hero.buttonText}
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {currentData.hero.stats.map((stat, index) => (
                  <div key={stat.label} className="text-center lg:text-left animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="text-sm text-neutral-400 mb-1 font-medium tracking-wider">
                      {stat.label}
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold text-white">{stat.value}</div>

                    {stat.label === "CAPACITY" && (
                      <div className="mt-4 flex justify-center lg:justify-start space-x-2">
                        <button
                          onClick={() => handleVariantChange("basic")}
                          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                            selectedVariant === "basic"
                              ? "bg-orange-500 text-white shadow-lg scale-105"
                              : "bg-orange-600/80 text-white/90 hover:bg-orange-500"
                          }`}
                        >
                          Basic
                        </button>
                        <button
                          onClick={() => handleVariantChange("medium")}
                          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                            selectedVariant === "medium"
                              ? "bg-orange-500 text-white shadow-lg scale-105"
                              : "bg-orange-600/80 text-white/90 hover:bg-orange-500"
                          }`}
                        >
                          Medium
                        </button>
                        <button
                          onClick={() => handleVariantChange("premium")}
                          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                            selectedVariant === "premium"
                              ? "bg-orange-500 text-white shadow-lg scale-105"
                              : "bg-orange-600/80 text-white/90 hover:bg-orange-500"
                          }`}
                        >
                          Premium
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative min-h-screen flex items-center justify-start overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={currentData.features.background}
            alt="Features background"
            className="w-full h-full object-cover brightness-55 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-neutral-900/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-16 relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-5xl lg:text-7xl font-bold text-white mb-4 animate-fade-in">
              {currentData.features.title}
            </h2>

            <p className="text-xl text-neutral-400 mb-16 animate-fade-in">
              {currentData.features.subtitle}
            </p>

            <div className="grid grid-cols-3 gap-6 max-w-xl">
              {currentData.features.features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    onMouseEnter={() => setActiveFeatureSection(index)}
                    className={`cursor-pointer transition-all duration-300 ${
                      activeFeatureSection === index
                        ? "bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl p-6 shadow-2xl scale-105"
                        : "p-6 bg-neutral-900/30 rounded-xl"
                    }`}
                  >
                    <Icon
                      className={`w-8 h-8 mb-3 ${
                        activeFeatureSection === index ? "text-white" : "text-neutral-400"
                      }`}
                    />
                    <div
                      className={`text-xs font-bold tracking-wider mb-1 ${
                        activeFeatureSection === index ? "text-white/90" : "text-neutral-400"
                      }`}
                    >
                      {feature.label}
                    </div>
                    <div
                      className={`text-sm font-semibold ${
                        activeFeatureSection === index ? "text-white" : "text-white/90"
                      }`}
                    >
                      {feature.title}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Design Section */}
      <section id="design" className="relative min-h-screen flex items-center justify-start overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={currentData.design.background}
            alt="Design background"
            className="w-full h-full object-cover brightness-60 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-neutral-900/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-16 relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-5xl lg:text-7xl font-bold text-white mb-4 animate-fade-in">
              {currentData.design.title}
            </h2>

            <p className="text-xl text-neutral-400 mb-16 animate-fade-in">
              {currentData.design.subtitle}
            </p>

            <div className="grid grid-cols-3 gap-6 max-w-xl">
              {currentData.design.features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    onMouseEnter={() => setActiveDesignSection(index)}
                    className={`cursor-pointer transition-all duration-300 ${
                      activeDesignSection === index
                        ? "bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl p-6 shadow-2xl scale-105"
                        : "p-6 bg-neutral-900/30 rounded-xl"
                    }`}
                  >
                    <Icon
                      className={`w-8 h-8 mb-3 ${
                        activeDesignSection === index ? "text-white" : "text-neutral-400"
                      }`}
                    />
                    <div
                      className={`text-xs font-bold tracking-wider mb-1 ${
                        activeDesignSection === index ? "text-white/90" : "text-neutral-400"
                      }`}
                    >
                      {feature.label}
                    </div>
                    <div
                      className={`text-sm font-semibold ${
                        activeDesignSection === index ? "text-white" : "text-white/90"
                      }`}
                    >
                      {feature.title}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="relative min-h-screen flex items-center justify-start overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={currentData.technology.background}
            alt="Technology background"
            className="w-full h-full object-cover brightness-50 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-neutral-900/85 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-16 relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-5xl lg:text-7xl font-bold text-white mb-4 animate-fade-in">
              {currentData.technology.title}
            </h2>

            <p className="text-xl text-neutral-400 mb-16 animate-fade-in">
              {currentData.technology.subtitle}
            </p>

            <div className="grid grid-cols-3 gap-6 max-w-xl">
              {currentData.technology.features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    onMouseEnter={() => setActiveTechSection(index)}
                    className={`cursor-pointer transition-all duration-300 ${
                      activeTechSection === index
                        ? "bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl p-6 shadow-2xl scale-105"
                        : "p-6 bg-neutral-900/30 rounded-xl"
                    }`}
                  >
                    <Icon
                      className={`w-8 h-8 mb-3 ${
                        activeTechSection === index ? "text-white" : "text-neutral-400"
                      }`}
                    />
                    <div
                      className={`text-xs font-bold tracking-wider mb-1 ${
                        activeTechSection === index ? "text-white/90" : "text-neutral-400"
                      }`}
                    >
                      {feature.label}
                    </div>
                    <div
                      className={`text-sm font-semibold ${
                        activeTechSection === index ? "text-white" : "text-white/90"
                      }`}
                    >
                      {feature.title}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section id="specs" className="min-h-screen flex items-center py-24 bg-neutral-900 relative overflow-hidden text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Full Specifications</h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Every detail designed for your journey
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-neutral-800 rounded-2xl p-8 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 animate-fade-in">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="w-2 h-8 bg-gradient-to-br from-neutral-600 to-neutral-800 rounded-full mr-3"></span>
                Dimensions
              </h3>
              <div className="space-y-4">
                {currentData.specs.dimensions.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b border-neutral-700/40"
                  >
                    <span className="text-neutral-400">{item.label}</span>
                    <span className="font-bold text-white">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-neutral-800 rounded-2xl p-8 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="w-2 h-8 bg-gradient-to-br from-neutral-600 to-neutral-800 rounded-full mr-3"></span>
                Key Features
              </h3>
              <div className="space-y-3">
                {currentData.specs.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-400 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-neutral-800 rounded-2xl p-8 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="w-2 h-8 bg-gradient-to-br from-neutral-600 to-neutral-800 rounded-full mr-3"></span>
                Capacity
              </h3>
              <div className="space-y-4">
                {currentData.specs.capacity.map((item, index) => (
                  <div key={index} className="py-2 border-b border-neutral-700/40">
                    <div className="text-neutral-400 mb-1">{item.label}</div>
                    <div className="text-3xl font-bold text-white">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-neutral-800 to-neutral-900 rounded-2xl p-12 text-center animate-fade-in" style={{ animationDelay: "300ms" }}>
            <div className="max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4">Special Launch Price</h3>
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="text-2xl text-neutral-400 line-through">
                  {currentData.specs.originalPrice}
                </span>
                <span className="text-6xl font-bold text-white">{currentData.specs.price}</span>
              </div>
              <p className="text-neutral-300 mb-8 text-lg">
                Limited time offer - Save big on your purchase
              </p>
              <button className="bg-black text-white px-12 py-4 rounded-xl font-bold text-lg hover:bg-neutral-900/80 transition-colors shadow-lg">
                Reserve Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 border-t border-neutral-800 text-neutral-300">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-neutral-700 to-neutral-900 rounded-lg flex items-center justify-center">
                  <span className="text-xl font-bold text-white">T</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-neutral-400 to-white bg-clip-text text-transparent">
                  TrolleyPro
                </span>
              </div>
              <p className="text-neutral-400 text-sm">
                Premium travel gear for the modern explorer
              </p>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4">Products</h3>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => handleVariantChange("basic")} className="text-sm text-neutral-400 hover:text-white transition-colors">
                    TrolleyPro Basic
                  </button>
                </li>
                <li>
                  <button onClick={() => handleVariantChange("medium")} className="text-sm text-neutral-400 hover:text-white transition-colors">
                    TrolleyPro Medium
                  </button>
                </li>
                <li>
                  <button onClick={() => handleVariantChange("premium")} className="text-sm text-neutral-400 hover:text-white transition-colors">
                    TrolleyPro Premium
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Warranty</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-8 text-center">
            <p className="text-sm text-neutral-400">© 2024 TrolleyPro. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}


export default USA;
