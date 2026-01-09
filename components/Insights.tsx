'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { insights, type Insight } from '@/data/insights';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

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
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="section-heading">Gcarsale Insight</p>
          <h2 className="mt-2 text-3xl font-semibold uppercase">
            Insight Otomotif
          </h2>
        </div>
        <div className="hidden h-[1px] flex-1 bg-charcoal/10 md:block" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        className="mt-8 grid gap-6 md:grid-cols-3"
      >
        {insights.map((item) => (
          <motion.article
            key={item.id}
            variants={fadeUp}
            className="card-paper flex h-full flex-col rounded-3xl p-6"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-charcoal/60">
              {item.date}
            </p>
            <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-charcoal/70">{item.excerpt}</p>
            <button
              onClick={() => setActive(item)}
              className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/60"
              type="button"
            >
              Baca detail
              <span className="h-[1px] w-6 bg-charcoal/20" />
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
            role="dialog"
            aria-modal="true"
            aria-labelledby="insight-title"
          >
            <motion.div
              ref={dialogRef}
              className="card-paper w-full max-w-2xl rounded-3xl p-6"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
            >
              <div className="flex items-center justify-between">
                <p className="section-heading">Insight</p>
                <button
                  onClick={() => setActive(null)}
                  className="rounded-full border border-charcoal/20 px-3 py-1 text-xs uppercase"
                  type="button"
                  aria-label="Tutup modal"
                >
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
