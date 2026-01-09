'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/data/site';
import { createWhatsAppLink } from '@/lib/whatsapp';

export default function ContactCTA() {
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
        <div className="h-full w-full bg-[url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"420\" height=\"420\" viewBox=\"0 0 420 420\"%3E%3Cg fill=\"none\" stroke=\"%23ffffff\" stroke-width=\"1\" opacity=\"0.5\"%3E%3Cpath d=\"M0 70h420M0 140h420M0 210h420M0 280h420M0 350h420\"/%3E%3Cpath d=\"M70 0v420M140 0v420M210 0v420M280 0v420M350 0v420\"/%3E%3C/g%3E%3C/svg%3E')]" />
      </div>
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-8 md:grid-cols-[1.2fr_1fr]"
        >
          <div>
            <p className="section-heading text-white/60">Contact & CTA</p>
            <h2 className="mt-3 text-4xl font-semibold uppercase">
              Siap bikin mobil Anda tampil premium?
            </h2>
            <p className="mt-4 text-sm text-white/70">
              Konsultasi gratis, cek proses consignment, dan dapatkan paket
              detailing sesuai kebutuhan.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={consultation}
                className="rounded-full bg-whatsapp px-6 py-3 text-sm font-semibold uppercase tracking-wide text-charcoal"
              >
                Konsultasi WhatsApp
              </a>
              <a
                href={consign}
                className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white"
              >
                Titip Jual Mobil
              </a>
              <a
                href={askUnit}
                className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white"
              >
                Tanya Unit
              </a>
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
