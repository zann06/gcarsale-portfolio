'use client';

import { motion, useReducedMotion } from 'framer-motion';

const floatTransition = {
  duration: 18,
  repeat: Infinity,
  repeatType: 'mirror' as const,
  ease: 'easeInOut',
};

export default function WorkshopDoodles({ className }: { className?: string }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={className} aria-hidden="true">
      <motion.svg
        viewBox="0 0 120 120"
        className="absolute left-[5%] top-[12%] h-14 w-14 opacity-10 md:h-20 md:w-20"
        initial={false}
        animate={prefersReducedMotion ? {} : { rotate: 6 }}
        transition={prefersReducedMotion ? undefined : floatTransition}
      >
        <path
          d="M30 20l20 20-30 30 10 10 30-30 20 20 10-10-20-20 20-20-10-10-20 20-20-20z"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />
      </motion.svg>

      <motion.svg
        viewBox="0 0 120 120"
        className="absolute right-[8%] top-[18%] h-12 w-12 opacity-10 md:h-16 md:w-16"
        animate={prefersReducedMotion ? {} : { y: [0, -6, 0], rotate: -4 }}
        transition={prefersReducedMotion ? undefined : floatTransition}
      >
        <path
          d="M20 60h60l20-20-10-10-30 30H20z"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path d="M20 60v30h15V60" fill="none" stroke="currentColor" strokeWidth="3" />
      </motion.svg>

      <motion.svg
        viewBox="0 0 120 120"
        className="absolute left-[12%] bottom-[10%] h-12 w-12 opacity-10 md:h-16 md:w-16"
        animate={prefersReducedMotion ? {} : { y: [0, 8, 0], rotate: 3 }}
        transition={prefersReducedMotion ? undefined : floatTransition}
      >
        <circle cx="60" cy="60" r="22" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="60" cy="60" r="8" fill="none" stroke="currentColor" strokeWidth="3" />
      </motion.svg>

      <motion.svg
        viewBox="0 0 120 120"
        className="absolute right-[15%] bottom-[8%] h-10 w-10 opacity-10 md:h-14 md:w-14"
        animate={prefersReducedMotion ? {} : { y: [0, -4, 0], rotate: -6 }}
        transition={prefersReducedMotion ? undefined : floatTransition}
      >
        <path
          d="M60 20l10 20 20 10-20 10-10 20-10-20-20-10 20-10z"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />
      </motion.svg>

      <motion.svg
        viewBox="0 0 120 120"
        className="absolute left-[40%] top-[6%] h-10 w-10 opacity-10 md:h-14 md:w-14"
        animate={prefersReducedMotion ? {} : { y: [0, 6, 0], rotate: 4 }}
        transition={prefersReducedMotion ? undefined : floatTransition}
      >
        <path
          d="M30 30h60v10H30zM30 80h60v10H30z"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path d="M40 40v30M80 40v30" fill="none" stroke="currentColor" strokeWidth="3" />
      </motion.svg>

      <motion.svg
        viewBox="0 0 120 120"
        className="absolute right-[35%] bottom-[18%] hidden h-12 w-12 opacity-10 md:block"
        animate={prefersReducedMotion ? {} : { y: [0, -5, 0], rotate: -3 }}
        transition={prefersReducedMotion ? undefined : floatTransition}
      >
        <path
          d="M20 40h80v40H20z"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path d="M30 40l10-10h40l10 10" fill="none" stroke="currentColor" strokeWidth="3" />
      </motion.svg>
    </div>
  );
}
