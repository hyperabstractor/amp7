/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: ['./**/*.{js,ts,jsx,tsx}'],
  theme: {
    borderRadius: {
      none: '0',
      xs: '0.125rem',
      sm: '0.25rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      md: '0.375rem',
      lg: '0.5rem',
      full: '9999px',
      xl: '1rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
      '4xl': '2.5rem',
      '5xl': '3rem',
    },
    extend: {
      colors: {
        lui: {
          DEFAULT: '#E7E3DF',
          50: '#FFFFFF',
          100: '#F8F7F6',
          200: '#E7E3DF',
          300: '#CFC7BF',
          400: '#B7AB9F',
          500: '#9F8F7F',
          600: '#837362',
          700: '#63574A',
          800: '#433B32',
          900: '#231F1A',
        },
        primary: {
          DEFAULT: '#003766',
          50: '#9CE0FF',
          100: '#80D5FF',
          200: '#47BEFF',
          300: '#0FA4FF',
          400: '#007FD6',
          500: '#00599E',
          600: '#003766',
          700: '#002547',
          800: '#001429',
          900: '#00050A',
        },
      },
    },
  },
  plugins: [require('daisyui'), '@tailwindcss/aspect-ratio'],
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    themes: false,
    logs: false,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
  },
}
