import type { Preview } from '@storybook/vue3'
import { setup } from '@storybook/vue3'
import '../assets/css/main.css'

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
  },
  decorators: [
    (story) => ({
      template: '<div class="p-4"><story /></div>',
      components: { story },
    }),
  ],
}

export default preview
