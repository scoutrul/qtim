import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  // Автоматические импорты
  imports: {
    dirs: ['composables', 'utils', 'stores'],
  },

  // Глобальные компоненты
  components: [
    { path: '~/components/ui', prefix: '' },
    { path: '~/components', pathPrefix: false },
  ],

  // Настройка PostCSS для Tailwind
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Настройка отображения ошибок
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
      title: 'QTIM',
      meta: [
        {
          name: 'description',
          content: 'QTIM - профессиональная разработка проектов и digital-решений',
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL,
    },
  },

  nitro: {
    compressPublicAssets: true,
    minify: true,
    routeRules: {
      '/**': {
        headers: {
          'X-Frame-Options': 'SAMEORIGIN',
        },
      },
    },
  },
})
