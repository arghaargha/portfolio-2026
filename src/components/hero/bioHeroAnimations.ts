import type { TargetAndTransition, Transition, Variants } from "motion/react";

const loop: Transition = {
  duration: 3,
  repeat: Infinity,
  ease: "easeInOut" as const,
};

export function reduceAware<T>(shouldReduceMotion: boolean, still: T, animated: T) {
  return shouldReduceMotion ? still : animated;
}

export const panelVariants: Variants = {
  rest: {
    opacity: 0.86,
  },
  hover: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
  active: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
};

export const infoCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.26, ease: "easeOut" },
  },
};

export function dnaFloat(shouldReduceMotion: boolean): TargetAndTransition {
  if (shouldReduceMotion) {
    return { y: 0, rotate: 0 };
  }

  return {
      y: [0, -7, 0],
      rotate: [-1.4, 1.3, -1.4],
      transition: { ...loop, duration: 8 },
  };
}

export function pulseNode(
  shouldReduceMotion: boolean,
  delay = 0,
): TargetAndTransition {
  if (shouldReduceMotion) {
    return { scale: 1, opacity: 0.9 };
  }

  return {
      scale: [1, 1.18, 1],
      opacity: [0.78, 1, 0.78],
      transition: { ...loop, duration: 2.4, delay },
  };
}

export function signalFlow(
  shouldReduceMotion: boolean,
  delay = 0,
): TargetAndTransition {
  if (shouldReduceMotion) {
    return { strokeDashoffset: 0, opacity: 0.65 };
  }

  return {
      strokeDashoffset: [0, -72],
      opacity: [0.35, 0.9, 0.35],
      transition: {
        duration: 5.8,
        repeat: Infinity,
        ease: "linear" as const,
        delay,
      },
  };
}

export function barFill(
  width: number,
  shouldReduceMotion: boolean,
): TargetAndTransition {
  if (shouldReduceMotion) {
    return { width };
  }

  return {
      width: [0, width],
      transition: { duration: 1.1, ease: "easeOut" as const },
  };
}

export function gentleGlow(
  shouldReduceMotion: boolean,
  delay = 0,
): TargetAndTransition {
  if (shouldReduceMotion) {
    return { opacity: 0.16 };
  }

  return {
      opacity: [0.1, 0.24, 0.1],
      transition: { ...loop, duration: 4.5, delay },
  };
}
