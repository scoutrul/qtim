const requiredEnvVars = ['NUXT_PUBLIC_API_BASE_URL'] as const

export function validateEnv() {
  const missingVars = requiredEnvVars.filter((envVar) => !process.env[envVar])

  if (missingVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`)
  }
}

// Проверяем переменные окружения при импорте
validateEnv()
