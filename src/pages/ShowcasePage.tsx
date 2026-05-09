import { ShowcaseSection } from '../components/ShowcaseSection';
import { motion } from 'framer-motion';

const easeOut = [0.16, 1, 0.3, 1] as const;

export function ShowcasePage() {
  return (
    <div className="pt-24 min-h-screen bg-cream overflow-hidden">
      {/* Page header */}
      <div className="container mx-auto px-6 md:px-12 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          <p className="section-tag">Selected Work</p>
          <h1 className="text-5xl md:text-8xl font-semibold text-dark-card tracking-tighter leading-[0.92] mb-6">
            Our <span className="font-artistic text-accent italic">Showcase.</span>
          </h1>
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl leading-relaxed font-light">
            A curated collection of digital projects we've engineered for ambitious
            brands. Real results, real impact.
          </p>
        </motion.div>
      </div>

      <ShowcaseSection />
    </div>
  );
}
