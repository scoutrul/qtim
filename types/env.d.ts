declare namespace NodeJS {
  interface ProcessEnv {
    NUXT_PUBLIC_API_BASE_URL: string
  }
}

declare module '#app' {
  interface RuntimeConfig {
    public: {
      apiBaseUrl: string
    }
  }
}
