import { ContactSection } from '../components/ContactSection';
import { motion } from 'framer-motion';

const easeOut = [0.16, 1, 0.3, 1] as const;

export function BriefingPage() {
  return (
    <div className="pt-24 min-h-screen bg-cream overflow-hidden">
      {/* Page header */}
      <div className="container mx-auto px-6 md:px-12 pt-16 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          <p className="section-tag">Book a Call</p>
          <h1 className="text-5xl md:text-7xl font-semibold mb-5 text-dark-card tracking-tighter leading-[0.92]">
            Start your project<br />
            <span className="font-artistic text-accent italic">the right way.</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-xl leading-relaxed font-light">
            Tell us what you're looking to build. We'll come back with a clear
            plan, honest timeline, and a fixed price — no surprises.
          </p>
        </motion.div>
      </div>

      <ContactSection />
    </div>
  );
}
