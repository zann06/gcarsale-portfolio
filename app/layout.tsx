import type { Metadata } from 'next';
import './globals.css';
import { Bebas_Neue, Inter } from 'next/font/google';
import { siteConfig } from '@/data/site';

const headline = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-headline',
});

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: siteConfig.meta.title,
  description: siteConfig.meta.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${headline.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
