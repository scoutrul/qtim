export class ApiError extends Error {
  constructor(
    message: string,
    public status?: number,
    public data?: unknown
  ) {
    super(message)
    this.name = 'ApiError'
  }
}

export async function fetchWithTimeout<T>(
  url: string,
  options: RequestInit & { timeout?: number } = {}
): Promise<T> {
  const { timeout = 8000, ...fetchOptions } = options
  const controller = new AbortController()
  const id = setTimeout(() => controller.abort(), timeout)

  try {
    const response = await fetch(url, {
      ...fetchOptions,
      signal: controller.signal,
    })

    if (!response.ok) {
      throw new ApiError(
        `HTTP error! status: ${response.status}`,
        response.status,
        await response.json().catch(() => null)
      )
    }

    return (await response.json()) as T
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        throw new ApiError('Request timeout')
      }
    }
    throw error
  } finally {
    clearTimeout(id)
  }
}

export function isApiError(error: unknown): error is ApiError {
  return error instanceof ApiError
}
