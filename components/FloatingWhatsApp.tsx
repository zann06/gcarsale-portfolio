'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { createWhatsAppLink } from '@/lib/whatsapp';
import { siteConfig } from '@/data/site';
import { buttonHover } from '@/lib/motion';

const menuItems = [
  {
    label: 'Konsultasi',
    message: 'Halo Gcarsale, saya ingin konsultasi tentang layanan bengkel.',
  },
  {
    label: 'Titip jual mobil',
    message: 'Halo Gcarsale, saya ingin titip jual mobil saya.',
  },
  {
    label: 'Tanya unit',
    message: 'Halo Gcarsale, saya ingin tanya unit yang tersedia.',
  },
  {
    label: 'Order merch',
    message: 'Halo Gcarsale, saya ingin order merchandise.',
  },
];

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="card-paper flex flex-col gap-2 rounded-2xl p-3"
          >
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={createWhatsAppLink(siteConfig.whatsappNumber, item.message)}
                className="rounded-xl px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/70 transition hover:bg-charcoal hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
      <motion.button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-charcoal shadow-lg"
        aria-label="Buka menu WhatsApp"
        {...(!prefersReducedMotion ? buttonHover : {})}
      >
        WA
      </motion.button>
    </div>
  );
}
