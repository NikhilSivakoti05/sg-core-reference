import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

interface FooterProps {
  country: string;
  currency: string;
}

const Footer = ({ country, currency }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Products: ['PLANADESK Lite', 'PLANADESK Pro', 'PLANADESK Ultra', 'Accessories', 'Bundles'],
    Solutions: ['Beauty & Spa', 'Healthcare', 'Field Tech', 'Education', 'Enterprise'],
    Company: ['About Us', 'Careers', 'Press', 'Partners', 'Sustainability'],
    Support: ['Help Center', 'Contact Us', 'Shipping Info', 'Returns', 'Warranty'],
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-heading font-bold mb-4">PLANADESK</h3>
            <p className="text-sm text-background/80 mb-4">
              Revolutionary mobile workstations for professionals worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-subheading font-semibold mb-4 text-background">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-background/80 hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="border-t border-background/20 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-semibold">Call Us</p>
                <p className="text-sm text-background/80">1-800-PLANADESK</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm font-semibold">Email Us</p>
                <p className="text-sm text-background/80">{country.toLowerCase()}@planadesk.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/80">
            © {currentYear} PLANADESK {country}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-background/80 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/80 hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-background/80 hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
