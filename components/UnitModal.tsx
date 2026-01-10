'use client';

import { useEffect, useMemo, useRef } from 'react';
import ImageWithFallback from '@/components/ImageWithFallback';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { BadgeCheck, MessageCircle, X } from 'lucide-react';
import { FeaturedUnit } from '@/data/featuredUnits';
import { siteConfig } from '@/data/site';
import { createWhatsAppLink } from '@/lib/whatsapp';

const getFocusableElements = (container: HTMLElement | null) => {
  if (!container) return [];
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  ).filter((el) => !el.hasAttribute('disabled'));
};

type UnitModalProps = {
  unit: FeaturedUnit | null;
  onClose: () => void;
};

export default function UnitModal({ unit, onClose }: UnitModalProps) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const whatsappLink = useMemo(() => {
    if (!unit) return '#';
    return createWhatsAppLink(
      siteConfig.whatsappNumber,
      `Halo Gcarsale, saya ingin tanya unit ${unit.name} tahun ${unit.year}.`
    );
  }, [unit]);

  useEffect(() => {
    if (unit) {
      previousFocus.current = document.activeElement as HTMLElement | null;
    }
  }, [unit]);

  useEffect(() => {
    if (!unit) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key === 'Tab') {
        const focusable = getFocusableElements(dialogRef.current);
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    getFocusableElements(dialogRef.current)[0]?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      previousFocus.current?.focus();
    };
  }, [unit, onClose]);

  return (
    <AnimatePresence>
      {unit ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/70 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={prefersReducedMotion ? { duration: 0.2 } : { duration: 0.4 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="unit-title"
          onClick={onClose}
        >
          <motion.div
            ref={dialogRef}
            className="card-paper paper-texture relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl"
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={
              prefersReducedMotion
                ? { duration: 0.2 }
                : { type: 'spring', stiffness: 220, damping: 20 }
            }
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={onClose}
              type="button"
              className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-charcoal/20 px-3 py-1 text-xs uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/40"
              aria-label="Tutup modal"
            >
              <X className="h-3 w-3" />
              Close
            </button>

            <div className="relative h-64 w-full">
              <ImageWithFallback
                src={unit.image}
                alt={unit.name}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>

            <div className="space-y-4 p-6">
              <div>
                <p className="section-heading">Detail Unit</p>
                <h3 id="unit-title" className="mt-2 text-2xl font-semibold">
                  {unit.name}
                </h3>
                <p className="text-sm text-charcoal/70">
                  {unit.year} • {unit.price}
                </p>
              </div>

              <ul className="grid gap-2 text-sm text-charcoal/80">
                {unit.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-whatsapp" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <p className="text-sm text-charcoal/70">{unit.description}</p>

              <div className="flex flex-wrap gap-3">
                {unit.status === 'AVAILABLE' ? (
                  <a
                    href={whatsappLink}
                    className="group inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-semibold uppercase tracking-wide text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/40"
                  >
                    <MessageCircle className="h-4 w-4 transition group-hover:rotate-6" />
                    WhatsApp – Tanya Unit Ini
                  </a>
                ) : (
                  <span className="rounded-full bg-charcoal/20 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-charcoal/60">
                    Unit Sold
                  </span>
                )}

                <button
                  onClick={onClose}
                  type="button"
                  className="rounded-full border border-charcoal/20 px-6 py-3 text-sm font-semibold uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/40"
                >
                  Tutup
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
