/// <reference types="vitest" />

declare module '#imports' {
  export const $fetch: typeof fetch
}

declare module '#app' {
  export function useRuntimeConfig(): {
    public: {
      apiBase: string
    }
  }
} 