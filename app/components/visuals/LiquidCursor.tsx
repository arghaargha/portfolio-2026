'use client';
import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function LiquidCursor() {
  // 1. Track Mouse Position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 2. Physics: Keep it snappy (stiffness 500) so it feels like a real cursor
  // but with just enough smoothness (damping 30) to feel "premium".
  const springConfig = { damping: 30, stiffness: 500 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // No offset needed for the tip (0,0), so it points exactly where you click
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [mouseX, mouseY]);

  return (
    // We render a BIG SVG Arrow (64px)
    <motion.svg
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{
        x: cursorX,
        y: cursorY,
        // The Negative Effect: Inverts colors behind the arrow
        mixBlendMode: 'difference', 
      }}
      width="50"  // SIZE: Much bigger than normal (usually 24px)
      height="50"
      viewBox="0 0 24 24"
    >
      {/* The Classic Arrow Shape */}
      <path 
        fill="white" 
        d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.85a.5.5 0 0 0-.85.36z" 
      />
    </motion.svg>
  );
}