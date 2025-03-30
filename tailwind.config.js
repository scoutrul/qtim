/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: '#8A70FF',
        secondary: '#F0EBFF',
        'dark-gray': '#333333',
        'light-gray': '#F5F5F5',
        'black': '#000000',
        'white': '#FFFFFF',
        'error': '#FF5252',
        'success': '#4CAF50',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'display': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'nav': '1rem',
        'button': '1rem',
        'logo': '1.5rem',
      },
      spacing: {
        'header-padding': '2rem 4rem',
        'header-padding-mobile': '0.5rem 1rem',
      },
      gap: {
        'nav-gap': '2rem',
        'nav-gap-mobile': '0.5rem',
      },
      borderRadius: {
        'button': '0.5rem',
      },
    }
  },
  plugins: [],
} 