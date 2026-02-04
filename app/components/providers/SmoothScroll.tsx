'use client';

// Change: Removing the curly braces {} around ReactLenis
import ReactLenis from '@studio-freight/react-lenis';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  );
}