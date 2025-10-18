import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calendar, Lightbulb, Rocket, Award, Globe, TrendingUp } from "lucide-react";
import { Target, Users, Heart } from "lucide-react";
import { MessageCircle, Mail, Phone, Clock } from "lucide-react";


const team = [
  {
    name: "Alex Richmond",
    role: "Developer",
    image: "/client1.jpg",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Jeffrey Brown",
    role: "Creative Leader",
    image: "/client1.jpg",

    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Connor Quinn",
    role: "Designer",
    image: "https://images.pexels.com/photos/2182971/pexels-photo-2182971.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Ann Smith",
    role: "Manager",
    image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Sarah Johnson",
    role: "Analyst",
    image: "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
];

const journeyMilestones = [
  {
    year: "2018",
    title: "The Beginning",
    description: "Two industry veterans meet and share a vision: to revolutionize travel gear with purpose-driven design.",
    detail: "Mohit and Aditya, both frustrated with the lack of quality and thoughtful design in the luggage market, decided to take matters into their own hands. With decades of combined experience in manufacturing and retail, they saw an opportunity to create something truly special.",
    icon: Lightbulb,
    image: "/api/placeholder/600/400",
  },
  {
    year: "2019",
    title: "Research & Development",
    description: "Extensive material testing and consumer research across 15 countries.",
    detail: "We traveled the world, interviewed thousands of travelers, and tested over 200 material combinations. Every decision was backed by data and real-world usage. We learned what people truly needed—not what marketing told them they wanted.",
    icon: Calendar,
    image: "/api/placeholder/600/400",
  },
  {
    year: "2020",
    title: "First Collection",
    description: "Launch of our flagship collection with three meticulously crafted pieces.",
    detail: "Despite the global challenges, we launched Assembly with a clear mission: quality over quantity. Our first collection featured three core pieces, each representing hundreds of hours of refinement. The response was overwhelming—we sold out in 48 hours.",
    icon: Rocket,
    image: "/api/placeholder/600/400",
  },
  {
    year: "2021",
    title: "Industry Recognition",
    description: "Awards for design excellence and sustainable manufacturing practices.",
    detail: "Our commitment to craftsmanship and sustainability earned recognition from top industry bodies. We won the Red Dot Design Award and became certified B-Corporation, proving that business can be a force for good.",
    icon: Award,
    image: "/api/placeholder/600/400",
  },
  {
    year: "2023",
    title: "Global Expansion",
    description: "Opening flagship stores in New York, London, and Tokyo.",
    detail: "Assembly went global, bringing our philosophy of purposeful design to discerning travelers worldwide. Each flagship store was designed to reflect our values—minimal, elegant, and focused on the customer experience.",
    icon: Globe,
    image: "/api/placeholder/600/400",
  },
  {
    year: "2024",
    title: "Innovation Continues",
    description: "Launching next-generation materials and smart luggage technology.",
    detail: "We never stop improving. This year, we introduced revolutionary new materials that are 40% lighter yet twice as durable, alongside smart features that enhance security without compromising design.",
    icon: TrendingUp,
    image: "/api/placeholder/600/400",
  },
];

function AboutUs() {
  const [scrollY, setScrollY] = useState(0);
  const [activeJourney, setActiveJourney] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [selectedMilestone, setSelectedMilestone] = useState<typeof journeyMilestones[0] | null>(null);
  const [imageSrc, setImageSrc] = useState("client1.jpg");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-muted">
      {/* Header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrollY > 100 ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
          backdropFilter: scrollY > 100 ? 'blur(10px)' : 'none',
        }}
      >
        <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="text-foreground font-light tracking-[0.3em] text-sm">PLAN A DESK</div>
          <div className="flex gap-10 text-sm">
            <a href="/" className="text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wider">HOME</a>
            <a href="#journey" className="text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wider">OUR JOURNEY</a>
            <a href="/contactus" className="text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wider">CONTACT US</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
           backgroundImage: "url('/hero-about (1).jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-secondary/85 to-primary/90" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="overflow-hidden mb-8">
            <h1
              className="text-7xl md:text-8xl lg:text-9xl font-extralight text-primary-foreground tracking-tight leading-none animate-fadeInUp"
              style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
            >
              We Are All The
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1
              className="text-7xl md:text-8xl lg:text-9xl font-extralight text-primary-foreground tracking-tight leading-none animate-fadeInUp"
              style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
            >
              Things With You
            </h1>
          </div>
          <p
            className="mt-12 text-primary-foreground/90 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed animate-fadeInUp"
            style={{ animationDelay: '0.8s', animationFillMode: 'both' }}
          >
            Where purposeful design meets effortless movement
          </p>
        </div>

        <a
          href="#philosophy"
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-primary-foreground hover:text-white transition-all duration-300 animate-bounce cursor-pointer"
        >
          <ChevronDown size={32} strokeWidth={1} />
        </a>
      </section>

      {/* Principles Section */}
      <section id="philosophy" className="py-16 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extralight text-foreground mb-4">Our Principles</h2>
            <div className="h-px w-20 bg-primary mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Precision', description: 'Every millimeter matters. We obsess over details others overlook, ensuring flawless performance.' },
              { title: 'Materials', description: 'We source only the finest textiles and hardware—premium fabrics that age gracefully.' },
              { title: 'Minimalism', description: 'Sophistication through subtraction. Only the essential remains, creating quiet elegance.' },
            ].map((principle, index) => (
              <div
                key={index}
                className="group bg-card p-6 transition-all duration-500 hover:bg-white hover:shadow-lg hover:-translate-y-1 border border-border"
              >
                <div className="mb-4">
                  <div className="h-px w-10 bg-primary group-hover:w-full transition-all duration-500" />
                </div>
                <h3 className="text-xl font-light text-foreground mb-2 tracking-wide">{principle.title}</h3>
                <p className="text-muted-foreground font-light leading-snug text-sm">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline Section */}
      <section id="journey" className="py-32 px-6 bg-foreground text-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-extralight mb-6">Our Journey</h2>
            <p className="text-muted-foreground font-light tracking-wide text-lg">From vision to reality</p>
          </div>

          {/* Desktop Timeline */}
          <div className="relative hidden lg:block">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-24">
              {journeyMilestones.map((milestone, index) => {
                const Icon = milestone.icon;
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={milestone.year}
                    className={`relative flex items-center ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} flex-col gap-8`}
                  >
                    {/* Content */}
                    <div className={`flex-1 ${isEven ? "lg:text-right lg:pr-16" : "lg:text-left lg:pl-16"} text-center lg:text-left`}>
                      <div className="inline-block">
                        <div className="text-4xl font-extralight text-primary mb-2">{milestone.year}</div>
                        <h3 className="text-2xl font-light text-background mb-3">{milestone.title}</h3>
                        <p className="text-muted-foreground font-light leading-relaxed mb-6 max-w-md mx-auto lg:mx-0">
                          {milestone.description}
                        </p>
                        <button
                          onClick={() => setSelectedMilestone(milestone)}
                          className="group relative px-8 py-3 text-background font-light tracking-widest text-xs overflow-hidden transition-all duration-500 hover:text-foreground"
                        >
                          <span className="relative z-10">READ MORE</span>
                          <div className="absolute inset-0 border border-border group-hover:border-primary" />
                          <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                        </button>
                      </div>
                    </div>

                    {/* Center Dot */}
                    <button
                      onClick={() => setSelectedMilestone(milestone)}
                      className="absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-card border-4 border-foreground flex items-center justify-center z-10 hover:bg-primary hover:border-primary transition-all duration-500 group"
                    >
                      <Icon className="text-muted-foreground group-hover:text-primary-foreground transition-colors duration-500" size={24} strokeWidth={1.5} />
                    </button>

                    <div className="flex-1" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Dot Timeline */}
          <div className="flex flex-col items-center space-y-16 lg:hidden">
            {journeyMilestones.map((step, index) => (
              <div key={index} className="relative w-full flex flex-col items-center">
                <div
                  className={`w-6 h-6 rounded-full cursor-pointer border-2 border-primary transition-transform duration-300 ${
                    activeJourney === index ? "scale-125 bg-primary" : "bg-foreground"
                  }`}
                  onClick={() => setActiveJourney(index === activeJourney ? null : index)}
                />
                {activeJourney === index && (
                  <div className="absolute top-12 md:top-16 bg-card text-foreground shadow-lg rounded-lg p-6 w-80 z-50 text-left">
                    <img src={step.image} alt={step.title} className="w-full h-40 object-cover rounded-md mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm">{step.description}</p>
                  </div>
                )}
                {index < journeyMilestones.length - 1 && <div className="w-1 h-16 bg-border mt-6" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dialog for Milestone Details */}
      <Dialog open={!!selectedMilestone} onOpenChange={() => setSelectedMilestone(null)}>
        <DialogContent className="max-w-3xl bg-card border-border">
          {selectedMilestone && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-extralight text-foreground mb-2">
                  {selectedMilestone.title}
                </DialogTitle>
                <p className="text-muted-foreground font-light tracking-wider text-sm">{selectedMilestone.year}</p>
              </DialogHeader>
              <div className="space-y-6">
                <div className="relative h-64 bg-muted overflow-hidden rounded">
                  <img 
                    src={selectedMilestone.image} 
                    alt={selectedMilestone.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-muted-foreground font-light leading-relaxed text-lg">
                  {selectedMilestone.detail}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Founder Section */}
      <section id="team" className="py-32 px-6 bg-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-extralight text-background mb-6">
              Meet The Founder
            </h2>
            <p className="text-muted-foreground font-light tracking-wide text-lg">
              Visionary behind the mission
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-16">
            {/* Left Side - Description */}
            <div className="flex-1 space-y-6">
              <p className="text-muted-foreground text-xs tracking-widest mb-2 uppercase">
                CEO & Co-Founder
              </p>
              <h3 className="text-4xl font-light text-background mb-4">
                Rondolph rolle
              </h3>

              {/* Highlights */}
              <div className="flex gap-4 mb-4 flex-wrap">
                <div
                  className="flex items-center gap-2 bg-card/20 backdrop-blur px-4 py-2 rounded cursor-pointer hover:bg-primary transition-all duration-300"
                  onClick={() =>
                    setImageSrc("client1.jpg")
                  }
                >
                  <Heart size={16} className="text-primary" strokeWidth={1.5} />
                  <span className="text-background text-xs font-light">Passionate</span>
                </div>
                <div
                  className="flex items-center gap-2 bg-card/20 backdrop-blur px-4 py-2 rounded cursor-pointer hover:bg-secondary transition-all duration-300"
                  onClick={() =>
                    setImageSrc("client1.jpg")
                  }
                >
                  <Users size={16} className="text-secondary" strokeWidth={1.5} />
                  <span className="text-background text-xs font-light">Team Player</span>
                </div>
              </div>

              {/* Quote */}
              <p className="text-background font-light leading-relaxed italic text-lg mb-4">
                "Innovation drives everything I do."
              </p>

              {/* Bio */}
              <p className="text-muted-foreground font-light leading-relaxed">
                Mohit brings decades of experience in the luggage industry, combining design, branding, and purpose to create exceptional travel products.
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 relative h-[500px] w-full">
              <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/60 to-transparent z-10" />
              <img
                src={imageSrc}
                alt="Mohit Garg"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 rounded-lg shadow-2xl"
              />

              {/* Highlight Badge */}
              <div className="absolute top-6 right-6 z-20">
                <div className="bg-primary backdrop-blur px-4 py-2 rounded-full">
                  <span className="text-primary-foreground text-xs font-medium tracking-wider uppercase">
                    Featured Founder
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {team.slice(0, 2).map((member, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-border"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-4 ring-4 ring-primary/20">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-1 text-center">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-4">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {team.slice(2, 5).map((member, index) => (
                <div
                  key={index + 2}
                  className="bg-card rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-border"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-4 ring-4 ring-primary/20">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-1 text-center">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-4">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-foreground space-y-6 lg:pl-12 lg:pt-8">
            <h1 className="text-5xl font-bold mb-6">Our Team</h1>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus{' '}
              <span className="underline cursor-pointer hover:text-primary transition-colors">
                quis elementum
              </span>
              . Phasellus sed efficitur dolor, et ultricies sapien. Quisque
              fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In
              ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-secondary transition-all duration-300 hover:shadow-lg hover:scale-105 uppercase tracking-wide text-sm">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-muted">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-5xl md:text-7xl font-extralight text-foreground leading-tight">
            Ready to Elevate Your Journey?
          </h2>

          <p className="text-muted-foreground text-xl font-light leading-relaxed tracking-wide max-w-2xl mx-auto">
            Experience what it means to travel with intention. Assembly pieces
            are more than products—they're companions for a life well-lived.
          </p>

          <button className="group relative px-12 py-5 text-foreground font-light tracking-widest text-sm overflow-hidden transition-all duration-500 hover:text-primary-foreground">
            <span className="relative z-10">EXPLORE COLLECTION</span>
            <div className="absolute inset-0 border border-border group-hover:border-primary" />
            <div className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          </button>
        </div>
      </section>

      {/* Support Section */}
      <section id="contact" className="py-24 px-6 bg-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight text-background mb-4">
              We're Here to Help
            </h2>
            <p className="text-muted-foreground font-light tracking-wide">
              Exceptional products deserve exceptional support
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: MessageCircle,
                title: "Live Chat",
                description: "Instant answers from our team",
                action: "Start Chat",
              },
              {
                icon: Mail,
                title: "Email Support",
                description: "support@planadesk.com",
                action: "Send Email",
              },
              {
                icon: Phone,
                title: "Call Us",
                description: "+1 (555) 123-4567",
                action: "Call Now",
              },
              {
                icon: Clock,
                title: "24/7 Available",
                description: "We're always here for you",
                action: "Learn More",
              },
            ].map((support, index) => {
              const Icon = support.icon;
              return (
                <div
                  key={index}
                  className="text-center group cursor-pointer"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-card flex items-center justify-center group-hover:bg-primary transition-all duration-500">
                    <Icon
                      size={32}
                      className="text-muted-foreground group-hover:text-primary-foreground transition-colors duration-500"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-background font-light text-xl mb-2">
                    {support.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-light mb-4">
                    {support.description}
                  </p>
                  <button className="text-muted-foreground hover:text-primary text-xs tracking-widest uppercase font-light border-b border-border hover:border-primary transition-all duration-300">
                    {support.action}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
