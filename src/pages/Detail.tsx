import React, { useState, useEffect } from 'react';
import { 
  ShoppingCart, 
  Star, 
  Check, 
  Shield, 
  Truck, 
  Clock, 
  Users, 
  Phone, 
  Mail, 
  MapPin,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Play,
  Zap,
  Lock,
  Award
} from 'lucide-react';

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-gray-900">
              Belle <span className="text-red-600">Booth</span>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-red-600 transition-colors">Features</a>
            <a href="#gallery" className="text-gray-700 hover:text-red-600 transition-colors">Gallery</a>
            <a href="#testimonials" className="text-gray-700 hover:text-red-600 transition-colors">Reviews</a>
            <a href="#pricing" className="text-gray-700 hover:text-red-600 transition-colors">Pricing</a>
            <a href="#faq" className="text-gray-700 hover:text-red-600 transition-colors">FAQ</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2 rounded-lg hover:from-orange-600 hover:to-red-700 transition-all transform hover:scale-105">
              <a href='/'>home</a>
            </button>
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-700 hover:text-red-600 transition-colors">Features</a>
              <a href="#gallery" className="text-gray-700 hover:text-red-600 transition-colors">Gallery</a>
              <a href="#testimonials" className="text-gray-700 hover:text-red-600 transition-colors">Reviews</a>
              <a href="#pricing" className="text-gray-700 hover:text-red-600 transition-colors">Pricing</a>
              <a href="#faq" className="text-gray-700 hover:text-red-600 transition-colors">FAQ</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-orange-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                🚀 NEW LAUNCH
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transform Your Beauty Business with 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600"> Professional Mobility</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              The Belle Booth Mobile Workstation - Where Style Meets Functionality for Modern Beauty Professionals
            </p>

            <div className="space-y-4">
              <div className="flex items-center text-gray-700">
                <Check className="text-green-500 mr-3" size={24} />
                <span className="text-lg">5 Spacious Drawers + Built-in Table</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Check className="text-green-500 mr-3" size={24} />
                <span className="text-lg">Chemical-Resistant & Surge-Protected</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Check className="text-green-500 mr-3" size={24} />
                <span className="text-lg">Easy Movement with Secure Lock System</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all transform hover:scale-105 flex items-center justify-center">
                <ShoppingCart className="mr-2" size={20} />
                Order Your Bell Booth Now
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-red-600 hover:text-red-600 transition-all flex items-center justify-center">
                <Play className="mr-2" size={20} />
                Watch Product Demo
              </button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Award className="text-orange-500 mr-1" size={16} />
                <span>Made in India</span>
              </div>
              <div className="flex items-center">
                <Shield className="text-green-500 mr-1" size={16} />
                <span>1-Year Warranty</span>
              </div>
              <div className="flex items-center">
                <Truck className="text-blue-500 mr-1" size={16} />
                <span>Free Shipping</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl p-8">
              <img 
                src="src/components/assets/trolley-front.jpg"
                alt="Bell Booth Mobile Workstation in Professional Salon"
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Problem & Solution Section
const ProblemSolution = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">
              Tired of Disorganized Workspaces 
              <span className="text-red-600"> Limiting Your Potential?</span>
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-lg mr-4">
                  <X className="text-red-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Cluttered beauty stations</h3>
                  <p className="text-gray-600">Tools scattered everywhere, creating unprofessional appearance</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-lg mr-4">
                  <X className="text-red-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Chemical spills damaging equipment</h3>
                  <p className="text-gray-600">Expensive tools ruined by acetone and nail polish</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-lg mr-4">
                  <X className="text-red-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Lack of mobility during services</h3>
                  <p className="text-gray-600">Fixed workstations limiting your movement and efficiency</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-full inline-block mb-6">
                <ChevronRight size={24} />
              </div>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 text-center">
              Meet Belle Booth - 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                Your Complete Mobile Workstation solution
              </span>
            </h2>
            
            <img 
              src="src/components/assets/trolley-hero.jpg"
              alt="Bell Booth in Professional Barbershop Setting"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Product Showcase Component
const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState('salon');

  const tabs = {
    salon: {
      title: 'Salon & Spa Use',
      image: 'src/components/assets/trolley-side.jpg',
      benefits: [
        'Perfect for nail stations and beauty treatments',
        'Chemical-resistant drawers protect your investment',
        'Professional appearance impresses clients',
        'Easy to move between treatment rooms'
      ],
      testimonial: "The Bell Booth has transformed our salon workflow. Moving between clients is effortless!" 
    },
    home: {
      title: 'Home Beauty Business',
      image: 'src/components/assets/trolley-front.jpg',
      benefits: [
        'Elegant design complements any home decor',
        'Compact yet spacious storage solution',
        'Perfect for freelance beauty professionals',
        'Easy setup for client appointments'
      ],
      testimonial: "Perfect for my home-based beauty business. Clients love the professional setup!"
    },
    mobile: {
      title: 'Mobile Beauty Services',
      image: '/src/assets/images/WhatsApp Image 2025-09-11 at 18.58.34_0d82bedc.jpg',
      benefits: [
        'Lightweight and portable design',
        'Secure locking system for transport',
        'Professional appearance for client locations',
        'All your tools organized in one place'
      ],
      testimonial: "Essential for my mobile beauty service. Everything I need in one portable unit!"
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Perfect for Every 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600"> Professional Setting</span>
          </h2>
          <p className="text-xl text-gray-600">See how Belle Booth adapts to your unique business needs</p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-white p-2 rounded-lg shadow-md">
            <div className="flex space-x-2">
              {Object.entries(tabs).map(([key, tab]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-3 rounded-md text-sm font-semibold transition-all ${
                    activeTab === key
                      ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white'
                      : 'text-gray-600 hover:text-red-600'
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900">{tabs[activeTab].title}</h3>
            
            <div className="space-y-4">
              {tabs[activeTab].benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <Check className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700 text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            <blockquote className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
              <p className="text-gray-700 italic text-lg">"{tabs[activeTab].testimonial}"</p>
              <footer className="mt-4 flex items-center">
                <div className="flex text-orange-500">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <span className="ml-2 text-gray-600 text-sm">Verified Customer</span>
              </footer>
            </blockquote>
          </div>

          <div className="relative">
            <img 
              src={tabs[activeTab].image}
              alt={tabs[activeTab].title}
              className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Features Section
const FeaturesSection = () => {
  const features = [
    {
      icon: <Shield className="text-orange-500" size={32} />,
      title: 'Strong & Durable Materials',
      description: 'ABS body with HDPE drawers resist acetone & nail polish spills',
      details: 'Chemical-resistant construction'
    },
    {
      icon: <Users className="text-red-600" size={32} />,
      title: 'Spacious Storage System',
      description: '5 drawers with built-in table for maximum organization',
      details: 'Optimized storage capacity'
    },
    {
      icon: <Zap className="text-orange-500" size={32} />,
      title: 'Smart Power Integration',
      description: 'Surge-protected electrical system for safe device charging',
      details: 'Built-in power management'
    },
    {
      icon: <Lock className="text-red-600" size={32} />,
      title: 'Professional Mobility',
      description: 'Smooth nylon wheels with secure locking mechanism',
      details: 'Move effortlessly anywhere'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Engineered for 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600"> Professional Excellence</span>
          </h2>
          <p className="text-xl text-gray-600">Every detail designed with the beauty professional in mind</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group bg-gray-50 p-8 rounded-xl hover:bg-gradient-to-br hover:from-orange-50 hover:to-red-50 transition-all duration-300 hover:shadow-xl">
              <div className="mb-6 group-hover:transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="text-sm text-orange-600 font-semibold">{feature.details}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 text-white">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">Technical Specifications</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold">88cm</div>
                <div className="text-orange-100">Height</div>
              </div>
              <div>
                <div className="text-3xl font-bold">23.5cm</div>
                <div className="text-orange-100">Width</div>
              </div>
              <div>
                <div className="text-3xl font-bold">41cm</div>
                <div className="text-orange-100">Depth</div>
              </div>
            </div>
            <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Download Full Spec Sheet
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      text: 'The Belle Booth has completely transformed my home salon. The chemical-resistant drawers are a game-changer for nail services!',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    {
      name: 'Rajesh Kumar',
      location: 'Delhi',
      rating: 5,
      text: 'As a mobile barber, this workstation is perfect. Everything I need is organized and easily portable between clients.',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    {
      name: 'Anita Patel',
      location: 'Bangalore',
      rating: 5,
      text: 'The build quality is excellent and it looks so professional in my salon. Clients always comment on it!',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600"> 500+ Beauty Professionals</span>
          </h2>
          <p className="text-xl text-gray-600">See what our customers are saying about Belle Booth</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-orange-500 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
              
              <div className="mt-4 text-sm text-green-600 font-semibold">
                ✓ Verified Purchase
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 inline-block shadow-lg">
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">4.9/5</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">98%</div>
                <div className="text-gray-600">Would Recommend</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Pricing Section
const PricingSection = () => {
  const [timeLeft, setTimeLeft] = useState(86400); // 24 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : prev);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-full inline-block mb-6">
            🔥 LIMITED TIME OFFER
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Special Launch 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600"> Pricing</span>
          </h2>
          
          <div className="flex justify-center space-x-4 mb-8">
            <div className="bg-gray-900 text-white px-4 py-2 rounded-lg">
              <div className="text-2xl font-bold">{hours.toString().padStart(2, '0')}</div>
              <div className="text-xs">HOURS</div>
            </div>
            <div className="bg-gray-900 text-white px-4 py-2 rounded-lg">
              <div className="text-2xl font-bold">{minutes.toString().padStart(2, '0')}</div>
              <div className="text-xs">MINUTES</div>
            </div>
            <div className="bg-gray-900 text-white px-4 py-2 rounded-lg">
              <div className="text-2xl font-bold">{seconds.toString().padStart(2, '0')}</div>
              <div className="text-xs">SECONDS</div>
            </div>
          </div>
        </div>

        <div className="max-w-lg mx-auto bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 border-2 border-orange-200">
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <div className="text-gray-600 line-through text-xl">₹25,000</div>
              <div className="text-5xl font-bold text-gray-900">₹18,999</div>
              <div className="text-green-600 font-semibold">Save ₹6,001 (24% OFF)</div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">What's Included:</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center">
                  <Check className="text-green-500 mr-3" size={20} />
                  <span>Belle Booth Mobile Workstation</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-green-500 mr-3" size={20} />
                  <span>FREE mirror with light (Worth ₹2,000)</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-green-500 mr-3" size={20} />
                  <span>1-Year Comprehensive Warranty</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-green-500 mr-3" size={20} />
                  <span>Free Home Delivery</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-green-500 mr-3" size={20} />
                  <span>30-Day Money-Back Guarantee</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-xl text-xl font-bold hover:from-orange-600 hover:to-red-700 transition-all transform hover:scale-105 flex items-center justify-center">
                <ShoppingCart className="mr-2" size={24} />
                Order Now - Free Shipping
              </button>
              
              <div className="text-sm text-gray-600">
                Only <span className="font-bold text-red-600">23 units</span> left in stock
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="text-sm text-gray-600 space-y-2">
                <div>💳 Secure Payment Options Available</div>
                <div>📞 Need help? Call: +91-9876543210</div>
                <div>💬 WhatsApp: +91-9876543210</div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-16 text-center">
          <div className="flex justify-center space-x-8 items-center">
            <img src="https://images.pexels.com/photos/47344/dollar-currency-money-us-dollar-47344.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&dpr=2" alt="Secure Payment" className="h-12 opacity-60" />
            <div className="text-2xl text-gray-400">|</div>
            <img src="https://images.pexels.com/photos/210742/pexels-photo-210742.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&dpr=2" alt="SSL Secure" className="h-12 opacity-60" />
            <div className="text-2xl text-gray-400">|</div>
            <img src="https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&dpr=2" alt="Money Back Guarantee" className="h-12 opacity-60" />
          </div>
        </div> */}
      </div>
    </section>
  );
};

// FAQ Section
const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "Does the Bell Booth require assembly?",
      answer: "No assembly required! The Bell Booth comes fully assembled and ready to use right out of the box."
    },
    {
      question: "What is the weight capacity of each drawer?",
      answer: "Each drawer can safely hold up to 5kg of equipment, with the total unit supporting up to 25kg of tools and supplies."
    },
    {
      question: "How chemical resistant are the materials?",
      answer: "The HDPE drawers are specifically designed to resist acetone, nail polish, hair dyes, and other common beauty chemicals without staining or damage."
    },
    {
      question: "What does the warranty cover?",
      answer: "Our 1-year comprehensive warranty covers all manufacturing defects, wheel mechanisms, drawer functionality, and electrical components."
    },
    {
      question: "How long does shipping take?",
      answer: "Free shipping typically takes 5-7 business days within India. Express shipping options available for faster delivery."
    },
    {
      question: "Can I return the product if I'm not satisfied?",
      answer: "Yes! We offer a 30-day money-back guarantee. If you're not completely satisfied, return it for a full refund."
    },
    {
      question: "Do you ship internationally?",
      answer: "Currently, we ship within India only. International shipping will be available soon - join our waitlist to be notified!"
    },
    {
      question: "Is there customer support available?",
      answer: "Yes! Our customer support team is available Monday-Saturday, 9 AM-7 PM via phone, WhatsApp, and email."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600"> Questions</span>
          </h2>
          <p className="text-xl text-gray-600">Everything you need to know about Bell Booth</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <ChevronDown 
                  className={`text-gray-500 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} 
                  size={20} 
                />
              </button>
              {openFaq === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-white rounded-xl p-8 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Still have questions?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+919876543210"
              className="flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Phone className="mr-2" size={20} />
              Call: +91-9533759559
            </a>
            <a 
              href="https://wa.me/919876543210"
              className="flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              <Phone className="mr-2" size={20} />
              WhatsApp Chat
            </a>
            <a 
              href="mailto:support@plana.desk"
              className="flex items-center justify-center bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Mail className="mr-2" size={20} />
              Email Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Final CTA Section
const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white space-y-8">
          <h2 className="text-5xl font-bold">
            Ready to Upgrade Your Professional Setup?
          </h2>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Join hundreds of beauty professionals who have transformed their business with Belle Booth. 
            Don't let this limited-time offer slip away!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="space-y-2">
              <div className="flex items-center text-orange-100">
                <Check className="mr-2" size={20} />
                <span>30-Day Money-Back Guarantee</span>
              </div>
              <div className="flex items-center text-orange-100">
                <Check className="mr-2" size={20} />
                <span>Free Shipping Worth ₹1,500</span>
              </div>
              <div className="flex items-center text-orange-100">
                <Check className="mr-2" size={20} />
                <span>1-Year Comprehensive Warranty</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <button className="bg-white text-red-600 px-12 py-4 rounded-xl text-2xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center mx-auto">
              <ShoppingCart className="mr-3" size={28} />
              Order Now - Save ₹6,001
            </button>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919876543210" className="text-white hover:text-orange-200 transition-colors">
                📞 Call for Bulk Orders: +91-9533759559
              </a>
              <span className="text-orange-200 hidden sm:inline">|</span>
              <a href="#" className="text-white hover:text-orange-200 transition-colors">
                🎥 Request Demo Video
              </a>
            </div>
          </div>

          <div className="text-orange-100 text-sm">
            ⚡ Only 23 units left in stock - Limited time pricing ends in 24 hours
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              Belle <span className="text-red-500">Booth</span>
            </div>
            <p className="text-gray-400">
              Professional mobile workstations designed for beauty professionals who demand excellence.
            </p>
            <div className="flex items-center text-orange-500">
              <Award className="mr-2" size={20} />
              <span className="font-semibold">Made in India</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#features" className="block text-gray-400 hover:text-white transition-colors">Features</a>
              <a href="#gallery" className="block text-gray-400 hover:text-white transition-colors">Gallery</a>
              <a href="#testimonials" className="block text-gray-400 hover:text-white transition-colors">Reviews</a>
              <a href="#pricing" className="block text-gray-400 hover:text-white transition-colors">Pricing</a>
              <a href="#faq" className="block text-gray-400 hover:text-white transition-colors">FAQ</a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Shipping Info</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Returns</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Warranty</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Bulk Orders</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Support Center</a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Phone className="mr-3" size={16} />
                <span>+91-9533759559</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="mr-3" size={16} />
                <span>support@planadesk.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="mr-3" size={16} />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2025 Plan A Desk. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function Detail() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProblemSolution />
      <ProductShowcase />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default Detail;