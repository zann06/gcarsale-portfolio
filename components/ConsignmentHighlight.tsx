'use client';

import ImageWithFallback from '@/components/ImageWithFallback';
import { motion } from 'framer-motion';
import { consignmentUnits } from '@/data/consignment';
import { siteConfig } from '@/data/site';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function ConsignmentHighlight() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="section-heading">Consignment Highlight</p>
          <h2 className="mt-2 text-3xl font-semibold uppercase">
            Unit Titipan Pilihan
          </h2>
        </div>
        <div className="hidden h-[1px] flex-1 bg-charcoal/10 md:block" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible"
      >
        {consignmentUnits.map((unit) => (
          <motion.div
            key={unit.id}
            variants={fadeUp}
            className="card-paper min-w-[240px] flex-1 snap-start rounded-3xl p-4 md:min-w-0"
          >
            <div className="relative h-40 w-full">
              <ImageWithFallback
                src={unit.image}
                alt={unit.name}
                fill
                className="rounded-2xl object-cover"
                sizes="(max-width: 768px) 70vw, 33vw"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">{unit.name}</h3>
              <p className="text-sm text-charcoal/60">
                {unit.year} • {unit.price}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-8">
        <a
          href={siteConfig.instagramUrl}
          className="inline-flex items-center gap-3 rounded-full border border-charcoal/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-charcoal transition hover:bg-charcoal hover:text-white"
        >
          Lihat unit lainnya di Instagram
        </a>
      </div>
    </section>
  );
}
