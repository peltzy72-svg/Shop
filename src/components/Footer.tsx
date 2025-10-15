import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-pink-600 bg-clip-text text-transparent">
              AEON Online
            </h3>
            <p className="text-muted-foreground mb-4">
              Your trusted online shopping destination for quality products at great prices.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-primary/10 p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-primary/10 p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact Us</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <p className="text-sm">
                  AEON Mall Phnom Penh, Street 217, Sangkat Veal Vong, Khan 7 Makara, Phnom Penh
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <p className="text-sm">+855 23 123 456</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <p className="text-sm">support@aeon-online.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Delivery Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 AEON Online Cambodia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
