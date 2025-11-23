import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Menu,
  Home,
  Briefcase,
  Info,
  MessageSquare,
  Mail,
  Phone,
  UserPlus,
  ChevronDown,
  Instagram,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import config from "../../config.ts";

const services = config.services;

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-7xl">
      <div className="rounded-full border border-border bg-background/80 backdrop-blur-lg shadow-lg px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <img src="/logo.png" alt="Arvo Logo" className="h-8 w-8" />
            </div>
            <span className="text-2xl font-bold text-foreground">
              Arvo Solutions
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/#"
              className="relative flex items-center gap-2 text-base font-semibold text-foreground hover:text-primary transition-colors group"
            >
              <Home size={18} />
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger className="relative flex items-center gap-2 text-base font-semibold text-foreground hover:text-primary transition-colors group">
                <Briefcase size={18} />
                Services
                <ChevronDown size={16} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background/95 backdrop-blur-xl border-border/50 rounded-2xl shadow-xl min-w-[200px]">
                {services.map((service) => (
                  <DropdownMenuItem
                    key={service.name}
                    asChild
                    className="font-bold text-base hover:text-primary hover:bg-primary/10 rounded-xl m-1"
                  >
                    <Link to={service.url} className="cursor-pointer">
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              to="/about"
              className="relative flex items-center gap-2 text-base font-semibold text-foreground hover:text-primary transition-colors group"
            >
              <Info size={18} />
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/contact"
              className="relative flex items-center gap-2 text-base font-semibold text-foreground hover:text-primary transition-colors group"
            >
              <MessageSquare size={18} />
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Contact Icons & Signup Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`mailto:${config.contact.email}`}
              className="text-foreground hover:text-primary transition-colors"
            >
              <Mail size={20} />
            </a>
            <a
              href={`tel:${config.contact.phone1}`}
              className="text-foreground hover:text-primary transition-colors"
            >
              <Phone size={20} />
            </a>
            <a
              href={config.contact.instagram}
              target="_blank"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a href="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2">
                <UserPlus size={18} />
                Sign Up
              </Button>
            </a>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-background/95 backdrop-blur-xl border-border/50"
            >
              <div className="flex flex-col gap-6 mt-8">
                <Link
                  to="/"
                  className="flex items-center gap-3 text-lg font-bold text-foreground hover:text-primary transition-colors"
                >
                  <Home size={20} />
                  Home
                </Link>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-lg font-bold text-foreground">
                    <Briefcase size={20} />
                    Services
                  </div>
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.url}
                      className="text-base font-semibold text-muted-foreground hover:text-primary transition-colors ml-8"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
                <Link
                  to="/about"
                  className="flex items-center gap-3 text-lg font-bold text-foreground hover:text-primary transition-colors"
                >
                  <Info size={20} />
                  About
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center gap-3 text-lg font-bold text-foreground hover:text-primary transition-colors"
                >
                  <MessageSquare size={20} />
                  Contact
                </Link>

                {/* Contact Icons */}
                <div className="flex items-center gap-6 pt-4 border-t border-border">
                  <a
                    href={`mailto:${config.contact.email}`}
                    className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                  >
                    <Mail size={20} />
                    <span className="text-sm font-semibold">Email</span>
                  </a>
                  <a
                    href={`tel:${config.contact.phone1}`}
                    className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                  >
                    <Phone size={20} />
                    <span className="text-sm font-semibold">Call</span>
                  </a>
                  <a
                    href={config.contact.instagram}
                    target="_blank"
                    className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                  >
                    <Instagram size={20} />
                    <span className="text-sm font-semibold">Instagram</span>
                  </a>
                </div>

                <a href="/contact">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 mt-4 flex items-center gap-2">
                    <UserPlus size={18} />
                    Sign Up
                  </Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
