import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0A0A0A', // Almost black
          light: '#F3F4F6',   // Light gray
        },
        primary: {
          DEFAULT: '#E11D48', // Pink
          light: '#FBCFE8',
        },
        secondary: {
          DEFAULT: '#F97316', // Orange
          light: '#FED7AA',
        },
        accent: {
          DEFAULT: '#A855F7', // Purple
          light: '#E9D5FF',
        },
        text: {
          main: '#E5E7EB',     // Light gray for dark bg
          secondary: '#9CA3AF', // Medium gray for dark bg
          dark: '#1F2937',      // Dark gray for light bg
        },
        surface: {
          DEFAULT: '#111827', // Dark gray
          light: '#FFFFFF',   // White
        },
      },
    },
  },
  plugins: [],
};
export default config;
