// import { type Config } from 'tailwindcss';

const config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#113c56', // 30%
          light: '#f1f5fb',   // 60%
          accent: '#fcd410',  // 10%
        },
        secondary: {
          orange: '#d05828',
          blue: '#4c6d83',
          gold: '#ca7c29',
          green: '#1a604f',
        },
      },
    },
  },
  plugins: [],
};

export default config;
