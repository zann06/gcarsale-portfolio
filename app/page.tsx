import Hero from '@/components/Hero';
import ServicesSnapshot from '@/components/ServicesSnapshot';
import FeaturedUnits from '@/components/FeaturedUnits';
import ConsignmentHighlight from '@/components/ConsignmentHighlight';
import Merchandise from '@/components/Merchandise';
import Insights from '@/components/Insights';
import About from '@/components/About';
import ProcessTimeline from '@/components/ProcessTimeline';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

import { Bolt, Wrench } from 'lucide-react';
import { siteConfig } from '@/data/site';

export default function Home() {
  const businessLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    description: siteConfig.meta.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.contact.address,
      addressCountry: 'ID',
    },
    telephone: siteConfig.contact.phoneLabel,
    url: siteConfig.instagramUrl,
  };

  const personLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Garry Saleh',
    jobTitle: 'Founder / Lead Inspector',
    worksFor: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
  };

  return (
    <main className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />

      <Hero />
      <ServicesSnapshot />

      <div className="relative">
        {/* Decorative icons */}
        <div className="pointer-events-none absolute inset-0 hidden md:block">
          <div className="absolute left-8 top-10 h-24 w-24 opacity-20">
            <Wrench className="h-full w-full text-charcoal/70" />
          </div>
          <div className="absolute right-10 top-24 h-20 w-20 opacity-15">
            <Bolt className="h-full w-full text-charcoal/70" />
          </div>
        </div>

        <FeaturedUnits />
        <ConsignmentHighlight />
        <Merchandise />
        <Insights />
        <About />
        <ProcessTimeline />
        <FAQ />
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
            Premium consignment portfolio
          </p>
        </div>
      </footer>

      <FloatingWhatsApp />
    </main>
  );
}
