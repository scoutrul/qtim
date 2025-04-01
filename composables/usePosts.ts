import { ref, computed, watch } from 'vue'
import type { Post } from '@/types/post'
import { API_CONFIG } from '@/config/api'
import { fetchWithTimeout, ApiError } from '@/utils/api'
import { ARTICLE_PAGE_SIZE } from '@/constants/article'

export function usePosts() {
  const posts = ref<Post[]>([])
  const post = ref<Post | null>(null)
  const error = ref<Error | null>(null)
  const loading = ref(false)
  const currentPage = ref(1)
  const postsPerPage = ref(ARTICLE_PAGE_SIZE)

  // Вычисляемое свойство для получения постов текущей страницы
  const paginatedPosts = computed(() => {
    const startIndex = (currentPage.value - 1) * postsPerPage.value
    const endIndex = startIndex + postsPerPage.value
    return posts.value.slice(startIndex, endIndex)
  })

  // Общее количество страниц
  const totalPages = computed(() => {
    return Math.ceil(posts.value.length / postsPerPage.value)
  })

  const fetchPosts = async () => {
    loading.value = true
    error.value = null
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      const response = await fetchWithTimeout<Post[]>(
        `${API_CONFIG.baseURL}${API_CONFIG.endpoints.posts}`
      )
      posts.value = response
    } catch (err) {
      error.value = err instanceof ApiError ? err : new Error('Failed to fetch posts')
    } finally {
      loading.value = false
    }
  }

  const fetchPostById = async (id: string) => {
    loading.value = true
    error.value = null
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      const response = await fetchWithTimeout<Post>(
        `${API_CONFIG.baseURL}${API_CONFIG.endpoints.post(id)}`
      )
      post.value = response
    } catch (err) {
      error.value = err instanceof ApiError ? err : new Error('Failed to fetch post')
    } finally {
      loading.value = false
    }
  }

  // Методы для навигации по страницам
  const nextPage = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value++
    }
  }

  const prevPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--
    }
  }

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages.value) {
      currentPage.value = page
    }
  }

  // Смотрим за изменением текущей страницы при ручном выборе
  watch(currentPage, (newPage) => {
    if (newPage > totalPages.value) {
      currentPage.value = totalPages.value
    } else if (newPage < 1) {
      currentPage.value = 1
    }
  })

  return {
    posts,
    post,
    error,
    loading,
    currentPage,
    totalPages,
    paginatedPosts,
    fetchPosts,
    fetchPostById,
    nextPage,
    prevPage,
    goToPage,
    postsPerPage,
  }
}
