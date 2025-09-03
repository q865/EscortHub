import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'ui-serif', 'serif'],
      },
      colors: {
        // Split-screen design colors
        'background-dark': '#000000',
        'background-light': '#FFFFFF', 
        'text-on-dark': '#FFFFFF',
        'text-on-light': '#000000',
        'accent': '#D4AF37',
        // Keep existing colors for backward compatibility
        'ui-background': '#0D0D0D',
        'ui-background-light': '#F9FAFB',
        'ui-surface': '#1F2937',
        'ui-surface-light': '#FFFFFF',
        'brand-primary': '#C1224F',
        'brand-primary-light': '#FBCFE8',
        'brand-secondary': '#D97706',
        'brand-secondary-light': '#FED7AA',
        'brand-accent': '#9333EA',
        'brand-accent-light': '#E9D5FF',
        'text-heading': '#F9FAFB',
        'text-body': '#D1D5DB',
        'text-muted': '#6B7280',
        'text-heading-dark': '#1F2937',
        'text-body-dark': '#374151',
        'text-muted-dark': '#6B7280',
      },
      fontSize: {
        'h1': ['clamp(2.5rem, 5vw, 3.5rem)', { lineHeight: '1.1', fontWeight: '700' }],
        'h2': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.2', fontWeight: '700' }],
        'h3': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.3', fontWeight: '700' }],
        'h4': ['clamp(1.25rem, 2.5vw, 1.875rem)', { lineHeight: '1.4', fontWeight: '700' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body-md': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
      },
    },
  },
  plugins: [],
};
export default config;
