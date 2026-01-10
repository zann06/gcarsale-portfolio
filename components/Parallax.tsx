'use client';

import { ReactNode } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

type ParallaxProps = {
  children: ReactNode;
  speed?: number;
  direction?: 'up' | 'down';
  rotate?: number;
  className?: string;
};

export default function Parallax({
  children,
  speed = 0.2,
  direction = 'down',
  rotate = 0,
  className,
}: ParallaxProps) {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const multiplier = direction === 'down' ? 1 : -1;
  const distance = 120 * speed * multiplier;

  const y = useTransform(scrollYProgress, [0, 1], [0, distance]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], [0, rotate]);

  return (
    <motion.div
      className={className}
      style={
        prefersReducedMotion
          ? { transform: 'translate3d(0,0,0)' }
          : { y, rotateZ }
      }
    >
      {children}
    </motion.div>
  );
}
