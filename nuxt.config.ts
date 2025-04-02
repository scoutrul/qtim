import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { defineNuxtConfig } from 'nuxt/config'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  // Базовые алиасы
  alias: {
    '@': '.',
    '~': '.',
  },

  // Настройка сборки
  build: {
    transpile: ['vue'],
  },

  // Настройка Vite
  vite: {
    resolve: {
      alias: {
        '@': resolve(__dirname),
      },
    },
    build: {
      cssCodeSplit: true,
    },
    optimizeDeps: {
      include: ['vue', 'vue-router'],
    },
  },

  // Автоматические импорты
  imports: {
    dirs: ['composables', 'utils', 'stores'],
  },

  // Настройки PostCSS для Tailwind
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
    },
  },

  // Настройки TypeScript
  typescript: {
    strict: true,
    typeCheck: false,
    tsConfig: {
      compilerOptions: {
        baseUrl: '.',
        paths: {
          '@/*': ['./*'],
        },
      },
    },
  },

  // Настройки приложения
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
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1',
        },
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous',
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  // Конфигурация рантайма
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL,
    },
  },

  // Настройки Nitro для оптимизации
  nitro: {
    compressPublicAssets: true,
    minify: true,
    routeRules: {
      '/**': { swr: 600 },
      '/api/**': { swr: 0 },
    },
  },

  // Добавим дату совместимости
  compatibilityDate: '2024-04-03',
})
