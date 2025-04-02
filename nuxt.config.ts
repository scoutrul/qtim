import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineNuxtConfig } from 'nuxt/config'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  // Оптимизация сборки
  build: {
    transpile: ['vue'],
  },

  // Оптимизация Vite
  vite: {
    plugins: [tsconfigPaths({ loose: true })],
    resolve: {
      alias: {
        '@': resolve(__dirname),
      },
    },
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['vue', 'vue-router', 'pinia'],
          },
        },
      },
    },
    optimizeDeps: {
      include: ['vue', 'vue-router', 'pinia'],
    },
  },

  // Автоматические импорты с оптимизацией
  imports: {
    dirs: ['composables', 'utils', 'stores'],
    presets: ['vue', 'vue-router', 'pinia'],
  },

  // Оптимизация PostCSS
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
    },
  },

  // Оптимизация TypeScript
  typescript: {
    strict: true,
    typeCheck: false,
    tsConfig: {
      compilerOptions: {
        baseUrl: '.',
        paths: {
          '@/*': ['./*'],
        },
        target: 'ESNext',
        module: 'ESNext',
        moduleResolution: 'bundler',
        skipLibCheck: true,
      },
    },
  },

  // Алиасы путей
  alias: {
    '@': '.',
    '~': '.',
  },

  // Оптимизация приложения
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

  // Оптимизация runtime
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL,
    },
  },

  // Оптимизация модулей
  modules: [],

  // Оптимизация Nitro
  nitro: {
    static: true,
    compressPublicAssets: true,
    minify: true,
    routeRules: {
      '/storybook': { redirect: '/storybook/index.html' },
      '/storybook/': { redirect: '/storybook/index.html' },
      '/*.html': { redirect: '/*.html' },
      '/:path*/': { redirect: '/:path*/' },
    },
  },

  // Оптимизация экспериментальных функций
  experimental: {
    payloadExtraction: true,
    renderJsonPayloads: true,
    crossOriginPrefetch: true,
  },
})
