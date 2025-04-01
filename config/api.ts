const apiBaseUrl =
  process.env.NUXT_PUBLIC_API_BASE_URL ||
  'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work'

export const API_CONFIG = {
  baseURL: apiBaseUrl,
  endpoints: {
    posts: '/posts',
    post: (id: string) => `/posts/${id}`,
  },
} as const
