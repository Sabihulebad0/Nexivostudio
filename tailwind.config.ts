import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF6A1C',
          cream: '#FFFAF3',
          bg: '#0d0d0d',
        },
      },
      fontFamily: {
        grotesk: ['var(--font-host-grotesk)', 'sans-serif'],
        bricolage: ['var(--font-bricolage)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
