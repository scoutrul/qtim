import { vi } from 'vitest'

export const $fetch = vi.fn()

vi.mock('#imports', () => ({
  $fetch,
}))

vi.mock('#app', () => ({
  useRuntimeConfig: () => ({
    public: {
      apiBase: 'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work',
    },
  }),
}))
