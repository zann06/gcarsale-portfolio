'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowRight, Sparkles, X } from 'lucide-react';
import { insights, type Insight } from '@/data/insights';
import { cardHover, fadeUp, stagger, viewport } from '@/lib/motion';

const getFocusableElements = (container: HTMLElement | null) => {
  if (!container) return [];
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  ).filter((el) => !el.hasAttribute('disabled'));
};

export default function Insights() {
  const [active, setActive] = useState<Insight | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!active) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActive(null);
        return;
      }
      if (event.key === 'Tab') {
        const focusable = getFocusableElements(dialogRef.current);
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!first || !last) return;
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

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [active]);

  return (
    <section id="insights" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-10" />
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="section-heading flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-charcoal/70" />
            Gcarsale Insight
          </p>
          <h2 className="mt-2 text-3xl font-semibold uppercase">
            Insight Otomotif
          </h2>
        </div>
        <div className="hidden h-[1px] flex-1 bg-charcoal/10 md:block" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={stagger(0.1)}
        className="mt-8 grid gap-6 md:grid-cols-3"
      >
        {insights.map((item) => (
          <motion.article
            key={item.id}
            variants={fadeUp}
            {...(!prefersReducedMotion ? cardHover : {})}
            className="card-paper paper-texture group flex h-full flex-col rounded-3xl p-6 transition-transform md:hover:-rotate-1"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-charcoal/60">
              {item.date}
            </p>
            <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-charcoal/70">{item.excerpt}</p>
            <button
              onClick={() => setActive(item)}
              className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/30"
              type="button"
            >
              Baca detail
              <ArrowRight className="h-3 w-3 transition group-hover:translate-x-1" />
            </button>
          </motion.article>
        ))}
      </motion.div>

      <AnimatePresence>
        {active ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/70 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={prefersReducedMotion ? { duration: 0.2 } : { duration: 0.4 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="insight-title"
          >
            <motion.div
              ref={dialogRef}
              className="card-paper w-full max-w-2xl rounded-3xl p-6"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={
                prefersReducedMotion
                  ? { duration: 0.2 }
                  : { type: 'spring', stiffness: 220, damping: 20 }
              }
            >
              <div className="flex items-center justify-between">
                <p className="section-heading">Insight</p>
                <button
                  onClick={() => setActive(null)}
                  className="inline-flex items-center gap-2 rounded-full border border-charcoal/20 px-3 py-1 text-xs uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/40"
                  type="button"
                  aria-label="Tutup modal"
                >
                  <X className="h-3 w-3" />
                  Close
                </button>
              </div>
              <h3 id="insight-title" className="mt-4 text-2xl font-semibold">
                {active.title}
              </h3>
              <p className="mt-2 text-sm text-charcoal/60">{active.date}</p>
              <p className="mt-4 text-sm text-charcoal/70">{active.body}</p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
