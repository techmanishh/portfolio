import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        green: '#334d36',
        yellow: '#faae19',
        grey: '#f6f6f6',
      },
      fontFamily: {
        headline: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        label: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '1rem',
        lg: '2rem',
        xl: '3rem',
        full: '9999px',
      },
      keyframes: {
        scroll: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        scroll: 'scroll 50s linear infinite',
        'scroll-reverse': 'scroll 50s linear infinite reverse',
        'scroll-slow': 'scroll 70s linear infinite',
        'fade-in': 'fade-in 0.45s ease-out forwards',
      },
    },
  },
  plugins: [forms],
};
