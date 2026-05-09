import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Magnetic } from './Magnetic';
import { ArrowRight } from 'lucide-react';

const easeOut = [0.16, 1, 0.3, 1] as const;

export function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-cream">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Typography + CTAs */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOut }}
              className="mb-8"
            >
              <span className="section-tag !mb-0">Premium Digital Agency · Est. 2025</span>
            </motion.div>

            <motion.h1
              className="text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.92] font-semibold tracking-tighter text-dark-card mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
            >
              We build websites<br />
              that{' '}
              <span className="font-artistic text-accent italic">
                actually work.
              </span>
            </motion.h1>

            <motion.p
              className="text-lg text-text-secondary leading-relaxed mb-10 max-w-lg font-light"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: easeOut }}
            >
              Arvo Solutions turns complex ideas into high-performing digital
              experiences. Strategy, design and engineering — all under one roof.
            </motion.p>

            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: easeOut }}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <Magnetic strength={0.2}>
                  <Link to="/briefing" className="btn-primary px-8 py-4 text-base">
                    Book Free Strategy Call
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Magnetic>
                <Magnetic strength={0.15}>
                  <Link to="/showcase" className="btn-ghost px-8 py-4 text-base">
                    See Our Work
                  </Link>
                </Magnetic>
              </div>
              <p className="text-text-muted text-xs font-mono tracking-wider">
                Free 30-min call · No contracts · Real results
              </p>
            </motion.div>

            {/* Proof badges */}
            <motion.div
              className="flex flex-wrap gap-6 mt-12 pt-10 border-t border-black/[0.07]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {[
                { n: '50+', label: 'Projects' },
                { n: '98%', label: 'Retention' },
                { n: '5.0★', label: 'Rating' },
                { n: '6 yrs', label: 'Experience' },
              ].map((b, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl font-outfit font-semibold text-dark-card tracking-tighter">{b.n}</span>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-text-muted">{b.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Animated Browser Mockup — "Show don't tell" */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: easeOut }}
            className="hidden lg:block relative"
          >
            <div className="animate-float">
              {/* Browser window mockup */}
              <div className="dark-card overflow-hidden shadow-2xl" style={{ boxShadow: '0 40px 80px rgba(17,17,19,0.15)' }}>
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-5 py-4 border-b border-white/[0.06]">
                  <div className="w-3 h-3 rounded-full bg-red-400/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <div className="w-3 h-3 rounded-full bg-green-400/60" />
                  <div className="flex-1 mx-4 bg-white/5 rounded-full py-1.5 px-3">
                    <span className="text-card-muted text-[11px] font-mono">arvosolutions.pro</span>
                  </div>
                </div>
                {/* Site preview */}
                <div className="p-8 bg-[#0f0f11]">
                  {/* Fake nav */}
                  <div className="flex justify-between items-center mb-8">
                    <div className="h-4 w-20 bg-accent/30 rounded" />
                    <div className="flex gap-3">
                      <div className="h-3 w-12 bg-white/10 rounded" />
                      <div className="h-3 w-12 bg-white/10 rounded" />
                      <div className="h-5 w-20 bg-accent rounded-full" />
                    </div>
                  </div>
                  {/* Fake hero text */}
                  <div className="mb-6 space-y-3">
                    <div className="h-8 w-4/5 bg-white/20 rounded" />
                    <div className="h-8 w-3/5 bg-white/20 rounded" />
                    <div className="h-4 w-full bg-white/8 rounded mt-4" />
                    <div className="h-4 w-4/5 bg-white/8 rounded" />
                  </div>
                  {/* Animated metric cards row */}
                  <div className="grid grid-cols-3 gap-3 mt-8">
                    {[
                      { label: 'Traffic', val: '+340%', color: 'bg-accent' },
                      { label: 'Leads', val: '+180%', color: 'bg-green-400' },
                      { label: 'Revenue', val: '+2.8x', color: 'bg-yellow-400' },
                    ].map((c, i) => (
                      <div key={i} className="bg-white/[0.04] rounded-xl p-4 border border-white/[0.05]">
                        <div className={`text-[10px] font-mono uppercase tracking-widest mb-2 text-card-muted`}>{c.label}</div>
                        <div className={`text-xl font-outfit font-bold text-card-text`}>{c.val}</div>
                        <div className={`mt-2 h-1 rounded-full ${c.color} opacity-60`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge — "Live" indicator */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-black/[0.06]"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <div>
                  <p className="text-dark-card font-outfit font-semibold text-sm leading-none">Live &amp; Converting</p>
                  <p className="text-text-muted text-[10px] font-mono mt-0.5">37 leads today</p>
                </div>
              </motion.div>

              {/* Floating speed badge */}
              <motion.div
                className="absolute -bottom-4 -left-6 bg-dark-card rounded-2xl shadow-xl p-4 flex items-center gap-3"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <div className="text-2xl font-outfit font-bold text-accent">0.4s</div>
                <div>
                  <p className="text-card-text font-outfit font-semibold text-sm leading-none">Load Time</p>
                  <p className="text-card-muted text-[10px] font-mono mt-0.5">Industry avg: 3.1s</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
