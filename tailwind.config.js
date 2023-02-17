// const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '80px',
        sm: '2rem',
        lg: '80px',
        xl: '80px',
        '2xl': '80px',
      },
      center: true,
      screens: {
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '100%',
        '2xl': '1536px',
      },
    },
    colors: {
      primary: '#20C1AA',
      secondary: '#F57F17',
      red: '#F44336',
      'error-message': '#F44336',
      'secondary-light': '#FDDFC5',
      'light-orange': '#FFF9F3',
      'light-white': '#FAFAFA',
      black: '#222222',
      grey: '#444444',
      'font-grey': '#AAAAAA',
      'light-grey': '#e8e8e8',
      'dark-grey': '#666666',
      white: '#fff',
    },
    fontFamily: {
      sans: ['poppins', 'sans-serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
