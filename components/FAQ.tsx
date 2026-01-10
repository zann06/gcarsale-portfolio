'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { fadeUp, stagger, viewport } from '@/lib/motion';

const faqs = [
  {
    question: 'Berapa lama proses consignment biasanya?',
    answer:
      'Rata-rata 2–4 minggu tergantung kondisi unit, harga pasar, dan kesiapan dokumen.',
  },
  {
    question: 'Apakah ada biaya inspeksi awal?',
    answer:
      'Inspeksi awal gratis untuk unit yang memenuhi kriteria Gcarsale.',
  },
  {
    question: 'Bagaimana proses komunikasi selama listing?',
    answer:
      'Owner mendapat update rutin terkait minat buyer, jadwal viewing, dan negosiasi.',
  },
  {
    question: 'Apakah Gcarsale membantu paperwork?',
    answer:
      'Ya, kami bantu proses administrasi, balik nama, dan dokumen pendukung lainnya.',
  },
  {
    question: 'Bisakah saya titip unit yang masih kredit?',
    answer:
      'Bisa, kami bantu review skema pelunasan dan dokumen pendukung sebelum listing.',
  },
  {
    question: 'Apakah ada jaminan keamanan transaksi?',
    answer:
      'Proses transaksi dilakukan dengan verifikasi buyer dan pendampingan tim Gcarsale.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="faq" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-10" />
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="section-heading flex items-center gap-2">
            <HelpCircle className="h-4 w-4 text-charcoal/70" />
            FAQ
          </p>
          <h2 className="mt-2 text-3xl font-semibold uppercase">
            Pertanyaan Populer
          </h2>
        </div>
        <div className="hidden h-[1px] flex-1 bg-charcoal/10 md:block" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={stagger(0.12)}
        className="mt-8 space-y-3"
      >
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;
          const contentId = `faq-panel-${index}`;
          return (
            <motion.div
              key={item.question}
              variants={fadeUp}
              className="card-paper paper-texture overflow-hidden rounded-2xl"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold uppercase tracking-wide text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/40"
                aria-expanded={isOpen}
                aria-controls={contentId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`h-4 w-4 transition ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    id={contentId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.35 }}
                    className="px-5 pb-4 text-sm text-charcoal/70"
                  >
                    {item.answer}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
