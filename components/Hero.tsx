'use client';

import ImageWithFallback from '@/components/ImageWithFallback';
import Parallax from '@/components/Parallax';
import WorkshopDoodles from '@/components/WorkshopDoodles';
import { motion, useReducedMotion } from 'framer-motion';
import { BadgeCheck, Car, MessageCircle, ShieldCheck, Users } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { createWhatsAppLink } from '@/lib/whatsapp';
import { buttonHover, fadeUp, stagger } from '@/lib/motion';

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const statIcons = [Users, BadgeCheck, Car, ShieldCheck];

  const consultationLink = createWhatsAppLink(
    siteConfig.whatsappNumber,
    'Halo Gcarsale, saya ingin konsultasi titip jual (consignment) mobil.'
  );

  const consignLink = createWhatsAppLink(
    siteConfig.whatsappNumber,
    'Halo Gcarsale, saya ingin titip jual mobil premium saya.'
  );

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0">
        {/* Background image parallax (disabled for reduced motion) */}
        {prefersReducedMotion ? (
          <ImageWithFallback
            src="/hero.jpg"
            alt="Cinematic premium car"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        ) : (
          <Parallax speed={0.4} direction="down" className="absolute inset-0">
            <ImageWithFallback
              src="/hero.jpg"
              alt="Cinematic premium car"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </Parallax>
        )}

        <div className="absolute inset-0 bg-charcoal/70" />

        {/* Sketch grid overlay parallax (disabled for reduced motion) */}
        {prefersReducedMotion ? (
          <div className="absolute inset-0 hero-grid-overlay opacity-60" />
        ) : (
          <Parallax speed={0.2} direction="up" className="absolute inset-0">
            <div className="absolute inset-0 hero-grid-overlay opacity-60" />
          </Parallax>
        )}

        {/* Workshop doodles parallax (disabled for reduced motion) */}
        {!prefersReducedMotion ? (
          <Parallax speed={0.25} direction="down" rotate={1.5}>
            <WorkshopDoodles className="absolute inset-0 text-white" />
          </Parallax>
        ) : (
          <WorkshopDoodles className="absolute inset-0 text-white opacity-50" />
        )}
      </div>

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-6xl flex-col gap-10 px-6 pb-16 pt-10 text-white">
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger(0.15)}
          className="flex flex-col gap-6"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full border border-white/40" />
            <div className="text-lg font-semibold tracking-[0.3em]">
              {siteConfig.name}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="max-w-3xl">
            <h1 className="headline text-white pencil-stroke">
              {siteConfig.hero.headline}
            </h1>
            <p className="mt-4 text-lg text-white/80">
              {siteConfig.hero.subheadline}
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
            <motion.a
              href={consultationLink}
              {...(!prefersReducedMotion ? buttonHover : {})}
              className="group inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-semibold uppercase tracking-wide text-charcoal transition hover:translate-y-[-2px] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              aria-label="Konsultasi WhatsApp"
            >
              <MessageCircle className="h-4 w-4 transition group-hover:rotate-6" />
              Konsultasi WhatsApp
            </motion.a>

            <motion.a
              href={consignLink}
              {...(!prefersReducedMotion ? buttonHover : {})}
              className="group inline-flex items-center gap-2 rounded-full border border-white/50 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              aria-label="Titip jual mobil"
            >
              <Car className="h-4 w-4 transition group-hover:-rotate-6" />
              Titip Jual Mobil
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger(0.1)}
          className="grid grid-cols-2 gap-4 rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm md:grid-cols-4"
        >
          {siteConfig.stats.map((stat, index) => {
            const Icon = statIcons[index] ?? ShieldCheck;

            return (
              <motion.div
                variants={fadeUp}
                key={stat.label}
                className="flex items-center gap-3"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5">
                  <Icon className="h-4 w-4 text-white/70" />
                </div>
                <div>
                  <div className="text-2xl font-semibold">{stat.value}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-white/60">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
