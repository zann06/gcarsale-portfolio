'use client';

import { useState } from 'react';
import ImageWithFallback from '@/components/ImageWithFallback';
import { motion, useReducedMotion } from 'framer-motion';
import { featuredUnits, type FeaturedUnit } from '@/data/featuredUnits';
import UnitModal from '@/components/UnitModal';
import { cardHover, fadeUp, stagger, viewport } from '@/lib/motion';

export default function FeaturedUnits() {
  const [selected, setSelected] = useState<FeaturedUnit | null>(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="featured" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-15" />

      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="section-heading">Featured Units</p>
          <h2 className="mt-2 text-3xl font-semibold uppercase">
            Unit Pribadi Gcarsale
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
        {featuredUnits.map((unit) => (
          <motion.button
            key={unit.id}
            variants={fadeUp}
            type="button"
            onClick={() => setSelected(unit)}
            {...(!prefersReducedMotion ? cardHover : {})}
            className="card-paper paper-texture group flex w-full flex-col overflow-hidden rounded-3xl text-left transition-transform md:hover:-rotate-1"
            aria-label={`Lihat detail ${unit.name}`}
          >
            <div className="relative h-48 w-full">
              <ImageWithFallback
                src={unit.image}
                alt={unit.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <span
                className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                  unit.status === 'AVAILABLE'
                    ? 'bg-whatsapp text-charcoal'
                    : 'bg-charcoal/70 text-white'
                }`}
              >
                {unit.status}
              </span>
            </div>

            <div className="flex flex-1 flex-col gap-2 p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{unit.name}</h3>
                <span className="text-sm text-charcoal/60">{unit.year}</span>
              </div>
              <p className="text-sm text-charcoal/70">{unit.price}</p>

              <div className="mt-auto flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-charcoal/50">
                <span className="h-[1px] w-6 bg-charcoal/20" />
                Detail
              </div>
            </div>
          </motion.button>
        ))}
      </motion.div>

      <UnitModal unit={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
