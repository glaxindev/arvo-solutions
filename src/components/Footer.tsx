import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import config from "../../config.ts";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center overflow-hidden">
                <img
                  src="/logo.png"
                  alt="Arvo Logo"
                  className="h-6 w-6 object-contain"
                />
              </div>
              <span className="text-xl font-bold text-foreground">
                Arvo Solutions
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Empowering businesses with innovative digital solutions. We
              transform ideas into powerful digital experiences.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>{config.contact.email}</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>{config.contact.phone1}</span>
              </div>
              <Link
                to={config.contact.instagram}
                target="_blank"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary"
              >
                <Instagram className="h-4 w-4 text-primary" />
                <span>Our Instagram</span>
              </Link>
              <Link
                to={config.contact.facebook}
                target="_blank"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary"
              >
                <Facebook className="h-4 w-4 text-primary" />
                <span>Our Facebook</span>
              </Link>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Hyderabad, PK</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home Page
                </a>
              </li>
              <li>
                <a
                  href="/#why-choose"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="/#ready"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Get Started
                </a>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {config.services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.url}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Arvo Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
