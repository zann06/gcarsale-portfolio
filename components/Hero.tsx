'use client';

import ImageWithFallback from '@/components/ImageWithFallback';
import { motion } from 'framer-motion';
import { siteConfig } from '@/data/site';
import { createWhatsAppLink } from '@/lib/whatsapp';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  const consultationLink = createWhatsAppLink(
    siteConfig.whatsappNumber,
    'Halo Gcarsale, saya ingin konsultasi tentang layanan bengkel & consignment.'
  );
  const consignLink = createWhatsAppLink(
    siteConfig.whatsappNumber,
    'Halo Gcarsale, saya ingin titip jual mobil premium saya.'
  );

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="/hero.jpg"
          alt="Cinematic premium car"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"420\" height=\"420\" viewBox=\"0 0 420 420\"%3E%3Cg fill=\"none\" stroke=\"%23ffffff\" stroke-width=\"1\" opacity=\"0.08\"%3E%3Cpath d=\"M0 70h420M0 140h420M0 210h420M0 280h420M0 350h420\"/%3E%3Cpath d=\"M70 0v420M140 0v420M210 0v420M280 0v420M350 0v420\"/%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-6xl flex-col gap-10 px-6 pb-16 pt-10 text-white">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
          className="flex flex-col gap-6"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full border border-white/40" />
            <div className="text-lg font-semibold tracking-[0.3em]">
              {siteConfig.name}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="max-w-3xl">
            <h1 className="headline text-white">{siteConfig.hero.headline}</h1>
            <p className="mt-4 text-lg text-white/80">
              {siteConfig.hero.subheadline}
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href={consultationLink}
              className="rounded-full bg-whatsapp px-6 py-3 text-sm font-semibold uppercase tracking-wide text-charcoal transition hover:translate-y-[-2px] hover:shadow-xl"
              aria-label="Konsultasi WhatsApp"
            >
              Konsultasi WhatsApp
            </a>
            <a
              href={consignLink}
              className="rounded-full border border-white/50 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white/10"
              aria-label="Titip jual mobil"
            >
              Titip Jual Mobil
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-2 gap-4 rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm md:grid-cols-4"
        >
          {siteConfig.stats.map((stat) => (
            <motion.div variants={fadeUp} key={stat.label}>
              <div className="text-2xl font-semibold">{stat.value}</div>
              <div className="text-xs uppercase tracking-[0.2em] text-white/60">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
