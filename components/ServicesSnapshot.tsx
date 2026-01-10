'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Camera, Car, ShieldCheck, Users, Wrench } from 'lucide-react';
import { createWhatsAppLink } from '@/lib/whatsapp';
import { siteConfig } from '@/data/site';
import { buttonHover, cardHover, fadeUp, stagger, viewport } from '@/lib/motion';

const services = [
  {
    title: 'Consignment Premium',
    description: 'Titip jual end-to-end: handling buyer, nego, sampai closing aman.',
    icon: Car,
  },
  {
    title: 'Inspeksi & Transparansi',
    description: 'Checklist jelas, dokumentasi rapi, highlight kondisi unit apa adanya.',
    icon: ShieldCheck,
  },
  {
    title: 'Foto Cinematic & Storytelling',
    description: 'Konten premium (foto/reels/copy) biar unit buyer-ready dan menarik.',
    icon: Camera,
  },
  {
    title: 'Marketing & Buyer Network',
    description: 'Distribusi IG/WA, buyer terkurasi, dan filtering ketat.',
    icon: Users,
  },
  {
    title: 'Dokumen & Proses Aman',
    description: 'Bantu flow transaksi dan dokumen supaya rapi & minim drama.',
    icon: Wrench,
  },
];

export default function ServicesSnapshot() {
  const prefersReducedMotion = useReducedMotion();

  const consignLink = createWhatsAppLink(
    siteConfig.whatsappNumber,
    'Halo Gcarsale, saya ingin titip jual mobil (consignment). Bisa jelaskan proses & estimasinya?'
  );

  const consultLink = createWhatsAppLink(
    siteConfig.whatsappNumber,
    'Halo Gcarsale, saya ingin konsultasi dulu soal consignment mobil premium.'
  );

  return (
    <section id="services" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-10" />
      <div className="pointer-events-none absolute right-10 top-6 h-24 w-24 grease-smudge opacity-60" />

      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="section-heading flex items-center gap-2">
            <Wrench className="h-4 w-4 text-charcoal/70" />
            Consignment Snapshot
          </p>
          <h2 className="mt-2 text-3xl font-semibold uppercase">
            Proses yang Rapi. Unit Jadi Buyer-Ready.
          </h2>
        </div>
        <div className="hidden h-[1px] flex-1 bg-charcoal/10 md:block" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={stagger(0.08)}
        className="mt-8 grid gap-4 md:grid-cols-3"
      >
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              variants={fadeUp}
              {...(!prefersReducedMotion ? cardHover : {})}
              className="card-paper paper-texture flex flex-col gap-3 rounded-3xl p-5 transition-transform md:hover:-rotate-1"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/20 bg-white/60">
                <Icon className="h-5 w-5 text-charcoal/70" />
              </div>
              <div>
                <h3 className="text-base font-semibold uppercase tracking-wide">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-charcoal/70">
                  {service.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={stagger(0.12)}
        className="mt-8 flex flex-wrap gap-3"
      >
        <motion.a
          href={consignLink}
          {...(!prefersReducedMotion ? buttonHover : {})}
          className="inline-flex items-center gap-2 rounded-full bg-charcoal px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/40"
          aria-label="Titip Jual via WhatsApp"
        >
          Titip Jual via WhatsApp
        </motion.a>

        <motion.a
          href={consultLink}
          {...(!prefersReducedMotion ? buttonHover : {})}
          className="inline-flex items-center gap-2 rounded-full border border-charcoal/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-charcoal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/40"
          aria-label="Konsultasi via WhatsApp"
        >
          Konsultasi via WhatsApp
        </motion.a>
      </motion.div>
    </section>
  );
}
