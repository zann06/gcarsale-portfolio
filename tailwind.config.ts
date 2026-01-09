import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#0f1115',
        paper: '#f5f1e8',
        sketch: '#d6d2c8',
        whatsapp: '#25D366',
      },
      boxShadow: {
        sketch: '0 10px 30px rgba(15, 17, 21, 0.12)',
      },
      backgroundImage: {
        paper:
          'linear-gradient(180deg, rgba(245,241,232,0.95) 0%, rgba(245,241,232,0.98) 100%)',
        sketch:
          "linear-gradient(transparent 95%, rgba(15,17,21,0.1) 96%), linear-gradient(90deg, transparent 95%, rgba(15,17,21,0.06) 96%)",
      },
      fontFamily: {
        headline: ['var(--font-headline)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
