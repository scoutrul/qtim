import type { Preview } from '@storybook/vue3'
import { setup } from '@storybook/vue3'

// Импортируем стили
import './style.css'

setup((app) => {
  // Здесь можно добавить глобальные плагины Vue если нужно
})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
    },
  },
  decorators: [
    () => ({
      template: '<div class="p-4 font-sans antialiased"><story /></div>',
    }),
  ],
}

export default preview
