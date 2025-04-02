/* eslint-disable */
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1216px',
        '2xl': '1216px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1120px',
      '2xl': '1320px',
    },
    extend: {
      colors: {
        primary: '#8A70FF',
        secondary: '#F0EBFF',
        'dark-gray': '#333333',
        'medium-gray': '#888888',
        'light-gray': '#F5F5F5',
        black: '#101010',
        white: '#FFFFFF',
        error: '#FF5252',
        success: '#4CAF50',
        purple: '#6B3FA8',
        'light-purple': '#E2BEFF',
        blue: '#2964C7',
        mint: '#A8F0A8',
        gray: '#888888',
        navy: '#1F1F1F',
        'article-bg': '#F8F8F8',
        'bg-purple': '#E2BEFF',
        'pagination-bg': '#F3F3F3',
      },
      fontFamily: {
        sans: ['TT Commons', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        'tt-commons': ['Poppins', 'sans-serif'],
      },
      fontSize: {
        nav: '1rem',
        button: '1rem',
        logo: '1.5rem',
        xs: '13px',
        'heading-1': ['112px', { lineHeight: '1.1' }],
        'heading-2': ['72px', { lineHeight: '1.1' }],
        'heading-3': ['56px', { lineHeight: '1.2' }],
        'heading-4': ['40px', { lineHeight: '1.2' }],
        'heading-5': ['32px', { lineHeight: '1.3' }],
        'heading-6': ['24px', { lineHeight: '1.4' }],
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
        button: '0.5rem',
      },
      aspectRatio: {
        'article-img': '16/9',
        square: '1/1',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#333',
            p: {
              marginBottom: '1.5rem',
            },
          },
        },
      },
    },
  },
  plugins: [typography],
}
