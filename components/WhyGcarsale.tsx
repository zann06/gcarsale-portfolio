'use client';

import { motion, useReducedMotion } from 'framer-motion';
import {
  BadgeCheck,
  Camera,
  FileCheck,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import { cardHover, fadeUp, stagger, viewport } from '@/lib/motion';
import Parallax from '@/components/Parallax';
import WorkshopDoodles from '@/components/WorkshopDoodles';

const trustItems = [
  { label: 'Transparan & dokumentatif', icon: FileCheck },
  { label: 'Kurasi unit & buyer', icon: Users },
  { label: 'Foto cinematic + listing premium', icon: Camera },
  { label: 'Handling komunikasi & nego', icon: BadgeCheck },
  { label: 'Proses rapi & update rutin', icon: ShieldCheck },
  { label: 'Brand experience premium', icon: Sparkles },
];

export default function WhyGcarsale() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="why" className="relative mx-auto max-w-6xl px-6 py-20">
      <Parallax speed={0.12} direction="up" rotate={-1}>
        <WorkshopDoodles className="pointer-events-none absolute inset-0 text-charcoal/70 opacity-70" />
      </Parallax>
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-10" />
      <div className="pointer-events-none absolute left-6 top-6 h-20 w-20 grease-smudge opacity-50" />

      <div className="grid gap-10 md:grid-cols-[1.1fr_1fr]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger(0.12)}
          className="space-y-4"
        >
          <motion.p variants={fadeUp} className="section-heading">
            Why Gcarsale
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl font-semibold uppercase">
            Consignment yang transparan, rapi, dan buyer-ready.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-sm text-charcoal/70">
            Gcarsale fokus pada kualitas unit dan kepercayaan buyer dengan proses
            dokumentasi yang jelas, listing premium, serta komunikasi yang
            terukur.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center rounded-full px-4 py-2 text-[10px] font-semibold uppercase text-charcoal/70 stamp"
          >
            Trust Verified
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger(0.08)}
          className="grid gap-4"
        >
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                variants={fadeUp}
                {...(!prefersReducedMotion ? cardHover : {})}
                className="card-paper paper-texture flex items-center gap-3 rounded-2xl p-4 transition-transform md:hover:-rotate-1"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/20 bg-white/60">
                  <Icon className="h-5 w-5 text-charcoal/70" />
                </div>
                <div className="text-sm font-semibold uppercase tracking-wide text-charcoal/80">
                  {item.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
