import type { StorybookConfig } from '@storybook/vue3-vite'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default {
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    disableTelemetry: true,
  },
  features: {
    argTypeTargetsV7: true,
  },
  staticDirs: ['../public'],
  viteFinal: async (viteConfig) => ({
    ...viteConfig,
    build: {
      ...viteConfig.build,
      target: 'esnext',
      sourcemap: false,
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks: {
            storybook: ['@storybook/vue3', '@storybook/vue3-vite'],
            vue: ['vue'],
          },
        },
      },
    },
    resolve: {
      alias: {
        '@': new URL('../', import.meta.url).pathname,
        '~': new URL('../', import.meta.url).pathname,
      },
    },
    css: {
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    },
  }),
  typescript: {
    check: true,
  },
} satisfies StorybookConfig
