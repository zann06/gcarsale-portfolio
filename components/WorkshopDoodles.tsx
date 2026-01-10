'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Wrench, Bolt, Nut, Tape, Screwdriver, ShieldCheck } from 'lucide-react';

const floatTransition = {
  duration: 18,
  repeat: Infinity,
  repeatType: 'mirror' as const,
  ease: 'easeInOut',
};

const doodleClass = 'absolute opacity-10 text-current [stroke-width:1.6px]';

export default function WorkshopDoodles({ className }: { className?: string }) {
  const prefersReducedMotion = useReducedMotion();
  const motionProps = prefersReducedMotion ? {} : { transition: floatTransition };

  return (
    <div className={className} aria-hidden="true">
      <motion.div
        className={`${doodleClass} left-[5%] top-[12%] h-14 w-14 md:h-20 md:w-20`}
        animate={prefersReducedMotion ? {} : { rotate: 6 }}
        {...motionProps}
      >
        <Wrench className="h-full w-full" />
      </motion.div>

      <motion.div
        className={`${doodleClass} right-[8%] top-[18%] h-12 w-12 md:h-16 md:w-16`}
        animate={prefersReducedMotion ? {} : { y: [0, -6, 0], rotate: -4 }}
        {...motionProps}
      >
        <Screwdriver className="h-full w-full" />
      </motion.div>

      <motion.div
        className={`${doodleClass} left-[12%] bottom-[10%] h-12 w-12 md:h-16 md:w-16`}
        animate={prefersReducedMotion ? {} : { y: [0, 8, 0], rotate: 3 }}
        {...motionProps}
      >
        <Nut className="h-full w-full" />
      </motion.div>

      <motion.div
        className={`${doodleClass} right-[15%] bottom-[8%] h-10 w-10 md:h-14 md:w-14`}
        animate={prefersReducedMotion ? {} : { y: [0, -4, 0], rotate: -6 }}
        {...motionProps}
      >
        <Bolt className="h-full w-full" />
      </motion.div>

      <motion.div
        className={`${doodleClass} left-[40%] top-[6%] h-10 w-10 md:h-14 md:w-14`}
        animate={prefersReducedMotion ? {} : { y: [0, 6, 0], rotate: 4 }}
        {...motionProps}
      >
        <Tape className="h-full w-full" />
      </motion.div>

      <motion.div
        className={`${doodleClass} right-[35%] bottom-[18%] hidden h-12 w-12 md:block`}
        animate={prefersReducedMotion ? {} : { y: [0, -5, 0], rotate: -3 }}
        {...motionProps}
      >
        <ShieldCheck className="h-full w-full" />
      </motion.div>
    </div>
  );
}
