import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Magnetic } from './Magnetic';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-cream/92 backdrop-blur-xl border-b border-black/[0.06] shadow-sm shadow-black/[0.04]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">

        {/* ── Brand Logomark + Wordmark ── */}
        <Link to="/" className="flex items-center gap-1.5 group select-none">
          {/* Logo mark — flat cream badge, no shadow/border to avoid color mismatch */}
          <div
            className="flex items-center justify-center flex-shrink-0 rounded-2xl overflow-hidden"
            style={{ width: '68px', height: '68px', background: '#f0ebe0' }}
          >
            <img
              src="/assets/arvo-logo.png"
              alt="Arvo logo"
              className="w-full h-full object-contain"
              style={{ filter: 'invert(1)', mixBlendMode: 'multiply' }}
            />
          </div>

          {/* Wordmark — bold, authoritative, no italic, no serif */}
          <div className="flex items-baseline gap-[3px] leading-none">
            <span
              className="font-outfit text-dark-card tracking-[-0.04em]"
              style={{ fontWeight: 800, fontSize: '1.35rem' }}
            >
              Arvo
            </span>
            <span
              className="font-outfit text-[#777773] tracking-[-0.03em]"
              style={{ fontWeight: 600, fontSize: '1.35rem' }}
            >
              Solutions
            </span>
          </div>
        </Link>

        {/* ── Desktop Nav ── */}
        <div className="hidden md:flex items-center gap-9">
          <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Home</NavLink>
          <NavLink to="/solutions" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Services</NavLink>
          <NavLink to="/product" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Product</NavLink>
          <NavLink to="/showcase" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Showcase</NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>About</NavLink>
          <NavLink to="/pricing" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Pricing</NavLink>

          <Magnetic strength={0.3}>
            <Link to="/briefing" className="btn-primary !py-2.5 !px-7 !text-sm">
              Book a Call
            </Link>
          </Magnetic>
        </div>

        {/* ── Mobile Menu Toggle ── */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center text-dark-card"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* ── Mobile Dropdown ── */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-black/[0.06] px-6 py-6 flex flex-col gap-5">
          {[
            { label: 'Home',      to: '/' },
            { label: 'Services',  to: '/solutions' },
            { label: 'Product',   to: '/product' },
            { label: 'Showcase',  to: '/showcase' },
            { label: 'About',     to: '/about' },
            { label: 'Pricing',   to: '/pricing' },
          ].map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="text-dark-card font-outfit font-semibold text-lg tracking-tight hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/briefing"
            onClick={() => setMobileOpen(false)}
            className="btn-primary !py-3 !text-sm mt-2"
          >
            Book a Call
          </Link>
        </div>
      )}
    </nav>
  );
}
