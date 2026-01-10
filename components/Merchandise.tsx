'use client';

import { useMemo, useState } from 'react';
import ImageWithFallback from '@/components/ImageWithFallback';
import { motion, useReducedMotion } from 'framer-motion';
import { MessageCircle, Shirt } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { createWhatsAppLink } from '@/lib/whatsapp';
import { buttonHover, fadeUp, viewport } from '@/lib/motion';

const sizes = ['S', 'M', 'L', 'XL'];
const colors = ['Black', 'Gray', 'Navy'];

export default function Merchandise() {
  const [size, setSize] = useState('M');
  const [color, setColor] = useState('Black');
  const prefersReducedMotion = useReducedMotion();

  const link = useMemo(() => {
    return createWhatsAppLink(
      siteConfig.whatsappNumber,
      `Halo Gcarsale, saya ingin order Gcarsale Workshirt size ${size} warna ${color}.`
    );
  }, [size, color]);

  return (
    <section id="merch" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-10 md:grid-cols-[1.1fr_1fr]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeUp}
          className="relative"
        >
          <ImageWithFallback
            src="/merch.jpg"
            alt="Gcarsale workshirt"
            width={640}
            height={560}
            className="w-full rounded-3xl object-cover shadow-sketch"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeUp}
          className="flex flex-col justify-center gap-6"
        >
          <div>
            <p className="section-heading flex items-center gap-2">
              <Shirt className="h-4 w-4 text-charcoal/70" />
              Merchandise
            </p>
            <h2 className="mt-2 text-3xl font-semibold uppercase">
              Gcarsale Workshirt
            </h2>
            <p className="mt-4 text-sm text-charcoal/70">
              Kemeja bengkel premium dengan bahan breathable dan fit modern untuk
              komunitas Gcarsale.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-charcoal/60">
                Size
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {sizes.map((option) => (
                  <button
                    key={option}
                    onClick={() => setSize(option)}
                    className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/40 ${
                      size === option
                        ? 'border-charcoal bg-charcoal text-white'
                        : 'border-charcoal/30 text-charcoal'
                    }`}
                    type="button"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-charcoal/60">
                Warna
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {colors.map((option) => (
                  <button
                    key={option}
                    onClick={() => setColor(option)}
                    className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/40 ${
                      color === option
                        ? 'border-charcoal bg-charcoal text-white'
                        : 'border-charcoal/30 text-charcoal'
                    }`}
                    type="button"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <motion.a
            href={link}
            {...(!prefersReducedMotion ? buttonHover : {})}
            className="group inline-flex w-fit items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-semibold uppercase tracking-wide text-charcoal transition hover:translate-y-[-2px] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/40"
          >
            <MessageCircle className="h-4 w-4 transition group-hover:rotate-6" />
            Order via WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
