import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// ── Top progress bar that runs on every route change ──
function ProgressBar({ active }: { active: boolean }) {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-[999] h-[2.5px] pointer-events-none"
      style={{ background: 'transparent' }}
    >
      <AnimatePresence>
        {active && (
          <motion.div
            className="h-full bg-accent rounded-r-full"
            initial={{ width: '0%', opacity: 1 }}
            animate={{ width: '85%' }}
            exit={{ width: '100%', opacity: 0 }}
            transition={{
              width: { duration: 0.5, ease: 'easeOut' },
              opacity: { delay: 0.2, duration: 0.3 },
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Page wrapper with fade + slight lift animation ──
export function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const prevPath = useRef(location.pathname);

  // Re-check on location change
  const changed = prevPath.current !== location.pathname;
  if (changed) {
    prevPath.current = location.pathname;
  }

  return (
    <>
      <ProgressBar active={false} />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
