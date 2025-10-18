import { ArrowRight, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { z } from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"; // Assuming these are imported

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    content: "hello@company.com",
    description: "We'll respond within 24 hours",
    href: "mailto:hello@company.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+1 (555) 123-4567",
    description: "Mon-Fri from 9am to 6pm",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    content: "123 Business Street",
    description: "San Francisco, CA 94103",
    href: "https://maps.google.com",
  },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

const faqs = [
  {
    question: "What is your response time?",
    answer: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly at +1 (555) 123-4567.",
  },
  {
    question: "Do you offer free consultations?",
    answer: "Yes! We offer a free 30-minute initial consultation to discuss your project needs and how we can help you achieve your goals.",
  },
  {
    question: "What information should I include in my message?",
    answer: "Please provide as much detail as possible about your project, including your goals, timeline, and budget. This helps us provide you with the most accurate and helpful response.",
  },
  {
    question: "Can I schedule a call or meeting?",
    answer: "Absolutely! After you send us a message, we'll follow up with available time slots for a call or video meeting based on your preferences.",
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes, we work with clients worldwide. We're experienced in remote collaboration and can accommodate different time zones for meetings and communication.",
  },
  {
    question: "What services do you offer?",
    answer: "We offer a comprehensive range of services including web development, mobile app development, UI/UX design, consulting, and ongoing support and maintenance.",
  },
];

export const FAQSection = () => {
  return (
    
    <section id="faq" className="py-20 px-4">
        <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrollY > 100 ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
          backdropFilter: scrollY > 100 ? 'blur(10px)' : 'none',
        }}
      >
        <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="text-foreground font-light tracking-[0.3em] text-sm"><a href="/" className="text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wider">PLAN A DESK</a></div>
          <div className="flex gap-10 text-sm">
            {/* <a href="/" className="text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wider">HOME</a> */}
            {/* <a href="#journey" className="text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wider">OUR JOURNEY</a> */}
            <a href="/" className="text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wider">Home</a>
          </div>
        </nav>
      </header>
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Find quick answers to common questions
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4 animate-fade-in">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6 hover:shadow-card transition-smooth"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

const Contactus = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const contactSchema = z.object({
    name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
    email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
    subject: z.string().trim().min(3, "Subject must be at least 3 characters").max(200, "Subject must be less than 200 characters"),
    message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000, "Message must be less than 2000 characters"),
  });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success("Message sent successfully!", {
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(fieldErrors);
        toast.error("Please check the form for errors");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        
        <div className="container relative z-10 mx-auto px-4 py-20 text-center animate-fade-in">
          <h1 className="mb-6 text-5xl md:text-7xl font-bold tracking-tight">
            Let's Build Something
            <span className="block bg-gradient-hero bg-clip-text text-transparent mt-2">
              Amazing Together
            </span>
          </h1>
          
          <p className="mx-auto mb-10 max-w-2xl text-lg md:text-xl text-muted-foreground">
            Have a question, project idea, or just want to connect? We're here to help and excited to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={scrollToForm}
              className="group"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View FAQ
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      
      <section id="contact-form" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">Send Us a Message</h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and we'll respond within 24 hours
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-card rounded-2xl p-8 shadow-card border border-border animate-scale-in">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject *</Label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can we help you?"
                className={errors.subject ? "border-destructive" : ""}
              />
              {errors.subject && (
                <p className="text-sm text-destructive">{errors.subject}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about your inquiry..."
                rows={6}
                className={errors.message ? "border-destructive" : ""}
              />
              {errors.message && (
                <p className="text-sm text-destructive">{errors.message}</p>
              )}
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full group"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </div>
      </section>
      
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">Other Ways to Reach Us</h2>
            <p className="text-lg text-muted-foreground">
              Choose the method that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-elegant transition-smooth border-border hover:border-primary/50 animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => window.open(method.href, '_blank')}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-gradient-hero group-hover:shadow-glow transition-smooth">
                    <method.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-smooth" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                  <p className="text-lg font-medium text-primary mb-1">{method.content}</p>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-6">Follow Us</h3>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border hover:bg-gradient-hero hover:border-transparent hover:shadow-glow transition-smooth group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-foreground group-hover:text-primary-foreground transition-smooth" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <FAQSection />
    </div>
  );
};

export default Contactus;
