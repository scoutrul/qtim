import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { defineNuxtConfig } from 'nuxt/config'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  
  // Автоматические импорты
  imports: {
    dirs: [
      'composables',
      'utils',
      'stores'
    ]
  },
  
  // Глобальные компоненты
  components: [
    { path: '~/components/ui', prefix: '' },
    { path: '~/components', pathPrefix: false }
  ],
  
  // Настройка PostCSS для Tailwind
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  
  // Настройка Vite
  vite: {
    plugins: [
      tsconfigPaths({ loose: true }),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname)
      }
    }
  },
  
  // Настройка TypeScript
  typescript: {
    strict: true,
    typeCheck: false,
    tsConfig: {
      compilerOptions: {
        baseUrl: '.',
        paths: {
          '@/*': ['./*']
        }
      }
    }
  },
  
  // Алиасы путей
  alias: {
    '@': resolve(__dirname)
  }
})