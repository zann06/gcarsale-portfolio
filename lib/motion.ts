import { Variants } from 'framer-motion';

export const easing = [0.22, 1, 0.36, 1] as const;

export const viewport = { once: true, margin: '-120px' };

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easing },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7, ease: easing } },
};

export const cardHover = {
  whileHover: { y: -6 },
  whileTap: { scale: 0.98 },
};

export const buttonHover = {
  whileHover: { y: -2, scale: 1.02 },
  whileTap: { scale: 0.98 },
};

export const stagger = (delay = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay } },
});
