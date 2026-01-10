'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Bolt, Car, CheckCircle, Settings, ShieldCheck, Sparkles, Wrench } from 'lucide-react';
import { cardHover, fadeUp, stagger, viewport } from '@/lib/motion';

const services = [
  {
    title: 'Inspeksi & Appraisal',
    description: 'Laporan detail kondisi, history servis, dan rekomendasi harga.',
    icon: ShieldCheck,
  },
  {
    title: 'Detailing / Coating',
    description: 'Finishing premium agar unit siap tampil dan dipercaya buyer.',
    icon: Sparkles,
  },
  {
    title: 'Consignment Terkurasi',
    description: 'Seleksi unit ketat, komunikasi jelas, dan strategi jual tepat.',
    icon: Car,
  },
  {
    title: 'Photo & Listing',
    description: 'Foto cinematic, penulisan listing, dan distribusi channel.',
    icon: Bolt,
  },
  {
    title: 'Buyer Filtering',
    description: 'Screening calon buyer untuk menjaga kualitas transaksi.',
    icon: CheckCircle,
  },
  {
    title: 'Paperwork Assist',
    description: 'Bantuan dokumen, BPKB, dan proses balik nama aman.',
    icon: Settings,
  },
];

export default function ServicesSnapshot() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="services" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-10" />
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="section-heading flex items-center gap-2">
            <Wrench className="h-4 w-4 text-charcoal/70" />
            Services Snapshot
          </p>
          <h2 className="mt-2 text-3xl font-semibold uppercase">
            Layanan Bengkel & Consignment
          </h2>
        </div>
        <div className="hidden h-[1px] flex-1 bg-charcoal/10 md:block" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={stagger(0.1)}
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
    </section>
  );
}
