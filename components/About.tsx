'use client';

import ImageWithFallback from '@/components/ImageWithFallback';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-10 md:grid-cols-[1.1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="space-y-4"
        >
          <p className="section-heading">About Gcarsale</p>
          <h2 className="text-3xl font-semibold uppercase">
            Filosofi Consignment yang Transparan
          </h2>
          <p className="text-sm text-charcoal/70">
            Gcarsale hadir sebagai bengkel dan brand consignment yang
            memprioritaskan transparansi, detail inspeksi, dan storytelling visual
            untuk setiap mobil premium.
          </p>
          <p className="text-sm text-charcoal/70">
            Setiap unit diperlakukan seperti milik sendiri: dicek detail, diolah
            foto cinematic, dan dipasarkan dengan standar komunikasi tinggi.
          </p>
          <div className="card-paper rounded-3xl p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-charcoal/50">
              Quote Owner
            </p>
            <p className="mt-3 text-lg font-semibold">
              “Mobil bagus butuh bengkel yang serius. Kami memastikan setiap unit
              tampil premium, aman, dan dipercaya buyer.”
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col gap-4"
        >
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-charcoal/60">
            <span className="h-6 w-6 rounded-full border border-charcoal/30" />
            Gcarsale
          </div>
          <div className="relative h-72 w-full overflow-hidden rounded-3xl">
            <ImageWithFallback
              src="/owner.jpg"
              alt="Owner Gcarsale"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full border border-charcoal/20" />
            <div>
              <p className="text-sm font-semibold">Garry Saleh</p>
              <p className="text-xs uppercase tracking-[0.2em] text-charcoal/60">
                Founder / Lead Inspector
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
