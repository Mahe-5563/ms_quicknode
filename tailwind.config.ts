import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        accent: "#8765CC",
        disabled: "#D4D4D8",
        'accent-blue': "#3EA3B3",
        'accent-green': "#4A9929",
        'accent-orange': "#E27D52",
        'accent-red': "#D25050",
        'accent-gold': "#C4A63B",
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
