'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Car, MessageCircle, ShieldCheck, Wrench } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { createWhatsAppLink } from '@/lib/whatsapp';
import { buttonHover, fadeUp, viewport } from '@/lib/motion';

export default function ContactCTA() {
  const prefersReducedMotion = useReducedMotion();
  const consultation = createWhatsAppLink(
    siteConfig.whatsappNumber,
    'Halo Gcarsale, saya ingin konsultasi tentang layanan consignment.'
  );
  const consign = createWhatsAppLink(
    siteConfig.whatsappNumber,
    'Halo Gcarsale, saya ingin titip jual mobil saya. Bisa info prosesnya?'
  );
  const askUnit = createWhatsAppLink(
    siteConfig.whatsappNumber,
    'Halo Gcarsale, saya ingin tanya unit yang tersedia saat ini.'
  );

  return (
    <section className="relative overflow-hidden bg-charcoal px-6 py-20 text-white">
      <div className="absolute inset-0 opacity-15">
        <div className="h-full w-full cta-grid-overlay" />
      </div>
      <div className="pointer-events-none absolute left-10 top-10 h-40 w-40 grease-smudge" />
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeUp}
          className="grid gap-8 md:grid-cols-[1.2fr_1fr]"
        >
          <div>
            <p className="section-heading flex items-center gap-2 text-white/60">
              <Wrench className="h-4 w-4 text-white/60" />
              Contact & CTA
            </p>
            <h2 className="mt-3 text-4xl font-semibold uppercase">
              Siap bikin mobil Anda tampil premium?
            </h2>
            <p className="mt-4 text-sm text-white/70">
              Konsultasi gratis, cek proses consignment, dan dapatkan paket
              detailing sesuai kebutuhan.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <motion.a
                href={consultation}
                {...(!prefersReducedMotion ? buttonHover : {})}
                className="group inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-semibold uppercase tracking-wide text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <MessageCircle className="h-4 w-4 transition group-hover:rotate-6" />
                Konsultasi WhatsApp
              </motion.a>
              <motion.a
                href={consign}
                {...(!prefersReducedMotion ? buttonHover : {})}
                className="group inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <Car className="h-4 w-4 transition group-hover:-rotate-6" />
                Titip Jual Mobil
              </motion.a>
              <motion.a
                href={askUnit}
                {...(!prefersReducedMotion ? buttonHover : {})}
                className="group inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <ShieldCheck className="h-4 w-4 transition group-hover:rotate-6" />
                Tanya Unit
              </motion.a>
            </div>
          </div>
          <div className="space-y-4 text-sm text-white/70">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                Location
              </p>
              <p>{siteConfig.contact.address}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                Operating Hours
              </p>
              <p>{siteConfig.contact.hours}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                WhatsApp
              </p>
              <p>{siteConfig.contact.phoneLabel}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
