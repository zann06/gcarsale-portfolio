import Hero from '@/components/Hero';
import FeaturedUnits from '@/components/FeaturedUnits';
import ConsignmentHighlight from '@/components/ConsignmentHighlight';
import Merchandise from '@/components/Merchandise';
import Insights from '@/components/Insights';
import About from '@/components/About';
import ContactCTA from '@/components/ContactCTA';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 hidden md:block">
          <div className="absolute left-8 top-10 h-24 w-24 opacity-20">
            <svg viewBox="0 0 120 120" className="h-full w-full">
              <path
                d="M10 60h100M30 20l60 80M20 90l80-60"
                stroke="#1a1d24"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
          <div className="absolute right-10 top-24 h-20 w-20 opacity-15">
            <svg viewBox="0 0 120 120" className="h-full w-full">
              <path
                d="M20 20h80v80H20zM20 60h80"
                stroke="#1a1d24"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
        </div>
        <FeaturedUnits />
        <ConsignmentHighlight />
        <Merchandise />
        <Insights />
        <About />
      </div>
      <ContactCTA />
      <footer className="bg-charcoal px-6 py-10 text-white/70">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full border border-white/30" />
            <p className="text-sm font-semibold uppercase tracking-[0.3em]">
              Gcarsale
            </p>
          </div>
          <p className="text-xs uppercase tracking-[0.2em]">
            Premium workshop & consignment portfolio
          </p>
        </div>
      </footer>
      <FloatingWhatsApp />
    </main>
  );
}
