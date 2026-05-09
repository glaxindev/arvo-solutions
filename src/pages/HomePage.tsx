import { HeroSection } from '../components/HeroSection';
import { StatsBar } from '../components/StatsBar';
import { LogoCloud } from '../components/LogoCloud';
import { FeatureBento } from '../components/FeatureBento';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { SolutionsSection } from '../components/SolutionsSection';
import { motion } from 'framer-motion';
import { Magnetic } from '../components/Magnetic';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const easeOut = [0.16, 1, 0.3, 1] as const;

export function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <LogoCloud />
      <FeatureBento />
      <SolutionsSection />
      <TestimonialsSection />

      {/* ── Final CTA Section ── */}
      <section className="relative py-32 md:py-48 bg-[#111113] overflow-hidden">
        {/* Subtle accent glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-accent/5 blur-[120px] pointer-events-none rounded-full" />

        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            <p className="section-tag justify-center !text-accent/80">Start Your Project</p>
            <h2 className="text-4xl md:text-7xl mb-8 leading-[0.95] font-semibold tracking-tighter text-[#f0ebe0]">
              Ready to grow <br />
              <span className="font-artistic text-accent italic">faster?</span>
            </h2>
            <p className="text-[#f0ebe0]/50 text-lg md:text-xl max-w-xl mx-auto mb-14 leading-relaxed font-light">
              Join 50+ ambitious brands that chose Arvo to transform their
              digital presence into a real competitive advantage.
            </p>
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Magnetic strength={0.2}>
                  <Link to="/briefing" className="btn-accent px-10 py-4 text-base">
                    Book Free Strategy Call
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Magnetic>
                <Magnetic strength={0.2}>
                  <Link to="/solutions" className="btn-ghost !border-white/20 !text-[#f0ebe0] !hover:text-white px-10 py-4 text-base">
                    Explore Services
                  </Link>
                </Magnetic>
              </div>
              <p className="text-[#f0ebe0]/30 text-xs font-mono tracking-wider mt-2">
                Free consultation · No contracts · Cancel anytime
              </p>
            </div>
          </motion.div>
        </div>

        {/* ARVO large footprint */}
        <div className="absolute inset-x-0 bottom-[-10%] flex justify-center pointer-events-none overflow-hidden z-0">
          <h1
            className="font-outfit font-bold text-[22vw] leading-none select-none text-transparent whitespace-nowrap"
            style={{ WebkitTextStroke: '1px rgba(240, 235, 224, 0.04)' }}
          >
            ARVO
          </h1>
        </div>
      </section>
    </>
  );
}
