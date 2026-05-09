import { Link } from 'react-router-dom';
import { Magnetic } from './Magnetic';
import { MessageCircle, Calendar, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#111113] pt-24 pb-0 relative overflow-hidden">

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">

          {/* Left: Brand */}
          <div className="max-w-xl">
            <div className="flex items-center gap-2.5 mb-12 cursor-default">
              {/* Logo: flat cream badge — same colour both sides so no mismatch */}
              <div
                className="flex items-center justify-center flex-shrink-0 rounded-2xl overflow-hidden"
                style={{ width: '52px', height: '52px', background: '#f0ebe0' }}
              >
                <img
                  src="/assets/arvo-logo.png"
                  alt="Arvo"
                  className="w-full h-full object-contain"
                  style={{ filter: 'invert(1)', mixBlendMode: 'multiply' }}
                />
              </div>
              <div className="flex items-baseline gap-[3px] leading-none">
                <span className="font-outfit text-[#f0ebe0] tracking-[-0.04em] text-xl" style={{ fontWeight: 800 }}>
                  Arvo
                </span>
                <span className="font-outfit text-[#f0ebe0]/50 tracking-[-0.03em] text-xl" style={{ fontWeight: 600 }}>
                  Solutions
                </span>
              </div>
            </div>

            <h3 className="text-3xl md:text-5xl font-semibold mb-8 tracking-tighter leading-[0.95] text-[#f0ebe0]">
              Let's build something <br />
              <span className="text-accent italic font-artistic">extraordinary.</span>
            </h3>

            <p className="text-[#f0ebe0]/50 text-base leading-relaxed mb-10 font-light max-w-md">
              Ready to transform your digital presence? Book a free 30-minute
              strategy call with our team.
            </p>

            {/* Contact details */}
            <div className="space-y-4 mb-10">
              <a
                href="mailto:contact@arvosolutions.pro"
                className="flex items-center gap-3 text-[#f0ebe0]/40 hover:text-[#f0ebe0] transition-colors group"
              >
                <div className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover:border-accent/30 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-accent/60 group-hover:text-accent" />
                </div>
                <span className="text-sm font-mono tracking-wide">contact@arvosolutions.pro</span>
              </a>

              <a
                href="https://wa.me/923003009142"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#f0ebe0]/40 hover:text-[#f0ebe0] transition-colors group"
              >
                <div className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover:border-green-400/30 transition-colors">
                  <MessageCircle className="w-3.5 h-3.5 text-green-400/60 group-hover:text-green-400" />
                </div>
                <span className="text-sm font-mono tracking-wide">WhatsApp: +92 300 300 9142</span>
              </a>

              <div className="flex items-center gap-3 text-[#f0ebe0]/30">
                <div className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-accent/40" />
                </div>
                <span className="text-sm font-mono tracking-wide">Hyderabad, PK · Global Operations</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
              <Magnetic strength={0.15}>
                <Link to="/briefing" className="btn-accent !px-8 !py-3.5 text-sm">
                  Book Free Strategy Call
                </Link>
              </Magnetic>

              <a
                href="https://calendly.com/saadmemon-arvosolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/10 text-[#f0ebe0]/70 hover:border-accent/40 hover:text-[#f0ebe0] transition-all duration-300 text-sm font-semibold font-outfit"
              >
                <Calendar className="w-4 h-4" />
                Schedule a Call
              </a>
            </div>
          </div>

          {/* Right: Navigation */}
          <div className="grid grid-cols-2 gap-12 pt-6">
            <div>
              <h4 className="font-mono text-[9px] tracking-[0.4em] text-accent uppercase mb-8">Navigation</h4>
              <ul className="space-y-5">
                {[
                  { label: 'Home',     to: '/' },
                  { label: 'Services', to: '/solutions' },
                  { label: 'Showcase', to: '/showcase' },
                  { label: 'Pricing',  to: '/pricing' },
                  { label: 'Brief Us', to: '/briefing' },
                ].map(link => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-[#f0ebe0]/40 hover:text-[#f0ebe0] transition-colors text-sm tracking-wide block">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-[9px] tracking-[0.4em] text-accent uppercase mb-8">Connect</h4>
              <ul className="space-y-5">
                {[
                  { label: 'Facebook',  href: 'https://www.facebook.com/profile.php?id=61585306970126' },
                  { label: 'Instagram', href: 'https://www.instagram.com/arvosolutions/' },
                  { label: 'LinkedIn',  href: '#' },
                  { label: 'WhatsApp',  href: 'https://wa.me/923003009142' },
                  { label: 'Calendly',  href: 'https://calendly.com/saadmemon-arvosolutions' },
                ].map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#f0ebe0]/40 hover:text-[#f0ebe0] transition-colors text-sm tracking-wide block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Legal bar */}
        <div className="py-8 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
          <p className="font-mono text-[9px] text-[#f0ebe0]/20 tracking-[0.4em] uppercase">
            © {new Date().getFullYear()} Arvo Solutions · All rights reserved
          </p>
          <p className="font-mono text-[9px] text-[#f0ebe0]/20 tracking-[0.4em] uppercase">
            Strategy · Design · Engineering
          </p>
        </div>
      </div>

      {/* ARVO watermark */}
      <div className="flex justify-center overflow-hidden pointer-events-none mt-[-20px]">
        <h1
          className="font-outfit font-bold text-[22vw] leading-none select-none text-transparent whitespace-nowrap"
          style={{ WebkitTextStroke: '1px rgba(240, 235, 224, 0.04)' }}
        >
          ARVO
        </h1>
      </div>
    </footer>
  );
}
