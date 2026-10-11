/**
 * Framer Motion Animation Variants & Curves
 * Calibrated for smooth, high-end Awwwards/Vercel standard transitions.
 */
export const customEase = [0.16, 1, 0.3, 1];

export const sectionFadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: customEase,
    },
  },
};

export const itemFadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: customEase,
      delay: typeof custom === 'number' ? custom : 0,
    },
  }),
};

export const cardRevealVariant = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: customEase,
    },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
};
