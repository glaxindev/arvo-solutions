import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  
  // Spring configurations for smooth, "premium" lag
  const cursorX = useSpring(0, { stiffness: 450, damping: 40, mass: 0.5 });
  const cursorY = useSpring(0, { stiffness: 450, damping: 40, mass: 0.5 });
  
  const outerX = useSpring(0, { stiffness: 250, damping: 30, mass: 0.8 });
  const outerY = useSpring(0, { stiffness: 250, damping: 30, mass: 0.8 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      outerX.set(e.clientX);
      outerY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isSelectable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('interactive');

      if (isSelectable) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, outerX, outerY]);

  return (
    <>
      {/* ── Core Cursor (The Point) ── */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          scale: isHovering ? 4 : 1,
        }}
      />

      {/* ── Outer Ring (The Feedback) ── */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-accent/40 rounded-full pointer-events-none z-[9998]"
        style={{
          x: outerX,
          y: outerY,
          translateX: '-50%',
          translateY: '-50%',
          scale: isHovering ? 2.2 : 1,
          opacity: isHovering ? 0.8 : 0.4,
          borderColor: isHovering ? '#00A3C4' : 'rgba(255,255,255,0.2)',
        }}
      />

      {/* ── Magnetic Aura (The "Radiant" Glow) ── */}
      <motion.div
        className="fixed top-0 left-0 w-[15vw] h-[15vw] bg-accent/5 blur-[80px] rounded-full pointer-events-none z-[9997]"
        style={{
          x: outerX,
          y: outerY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isHovering ? 0.6 : 0.2,
        }}
        transition={{ duration: 1 }}
      />
    </>
  );
}
