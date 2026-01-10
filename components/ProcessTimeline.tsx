'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { MessageCircle, ShieldCheck, Wrench } from 'lucide-react';
import { buttonHover, fadeUp, stagger, viewport } from '@/lib/motion';
import { createWhatsAppLink } from '@/lib/whatsapp';
import { siteConfig } from '@/data/site';

const steps = [
  {
    title: 'Konsultasi & Briefing',
    description: 'Diskusi target harga, timeline, dan kondisi unit.',
  },
  {
    title: 'Inspeksi & Dokumentasi',
    description: 'Pengecekan detail, foto, dan laporan kondisi mobil.',
  },
  {
    title: 'Perbaikan Minor',
    description: 'Detailing ringan agar unit tampil maksimal.',
  },
  {
    title: 'Listing & Marketing',
    description: 'Publikasi premium di channel Gcarsale & partner.',
  },
  {
    title: 'Buyer Filtering & Deal',
    description: 'Seleksi buyer, negosiasi, dan serah terima aman.',
  },
];

export default function ProcessTimeline() {
  const prefersReducedMotion = useReducedMotion();
  const link = createWhatsAppLink(
    siteConfig.whatsappNumber,
    'Halo Gcarsale, saya ingin tahu proses consignment dan timeline kerjanya.'
  );

  return (
    <section id="process" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-10" />
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="section-heading flex items-center gap-2">
            <Wrench className="h-4 w-4 text-charcoal/70" />
            Process Timeline
          </p>
          <h2 className="mt-2 text-3xl font-semibold uppercase">
            Cara Kerja Consignment
          </h2>
        </div>
        <div className="hidden h-[1px] flex-1 bg-charcoal/10 md:block" />
      </div>

      <motion.ol
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={stagger(0.12)}
        className="mt-10 grid gap-6"
      >
        {steps.map((step, index) => (
          <motion.li
            key={step.title}
            variants={fadeUp}
            className="relative rounded-3xl border border-sketch/70 bg-white/70 p-6 shadow-sketch backdrop-blur-sm"
          >
            <div className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/20 bg-white">
              <span className="text-sm font-semibold">{index + 1}</span>
            </div>
            <div className="ml-16">
              <h3 className="text-base font-semibold uppercase tracking-wide">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-charcoal/70">
                {step.description}
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-charcoal/50">
                <ShieldCheck className="h-3 w-3" />
                QC Gcarsale Standard
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ol>

      <motion.a
        href={link}
        {...(!prefersReducedMotion ? buttonHover : {})}
        className="group mt-10 inline-flex items-center gap-2 rounded-full bg-charcoal px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/40"
      >
        <MessageCircle className="h-4 w-4 transition group-hover:rotate-6" />
        Konsultasi Proses
      </motion.a>
    </section>
  );
}
