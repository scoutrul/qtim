import { ref, computed, watch } from 'vue'
import type { PostPreview, PostFull } from '@/types/post'

export function usePosts() {
  const posts = ref<PostPreview[]>([])
  const post = ref<PostFull | null>(null)
  const error = ref<Error | null>(null)
  const loading = ref(false)
  const currentPage = ref(1)
  const postsPerPage = ref(8) // 4 поста в строку, 2 строки
  
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
    try {
      // Добавляем искусственную задержку для демонстрации скелетонов
      await new Promise(resolve => setTimeout(resolve, 1500))
      const response = await $fetch<PostPreview[]>("https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/")
      posts.value = response
    } catch (err) {
      error.value = err as Error
    } finally {
      loading.value = false
    }
  }

  const fetchPostById = async (id: string) => {
    loading.value = true
    try {
      // Добавляем искусственную задержку для демонстрации скелетонов
      await new Promise(resolve => setTimeout(resolve, 1500))
      const response = await $fetch<PostFull>(`https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${id}`)
      post.value = response
    } catch (err) {
      error.value = err as Error
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
    postsPerPage
  }
} 