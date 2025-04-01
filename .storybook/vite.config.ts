import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../'),
    },
  },
  css: {
    postcss: {
      plugins: [
        require('tailwindcss')({
          config: path.resolve(__dirname, 'tailwind.config.js'),
        }),
        require('autoprefixer'),
      ],
    },
  },
})
