import { ref, computed, watch } from 'vue'
import type { Post } from '@/types/post'

const mockPosts: Post[] = [
  {
    id: 1,
    title: 'Статья 1',
    content: 'Содержание статьи 1',
    description: 'Описание статьи 1',
    image: 'https://example.com/images/article-1.jpg',
    createdAt: '2024-03-20T12:00:00Z',
    updatedAt: '2024-03-20T12:00:00Z',
  },
]

export function usePostsTest() {
  const posts = ref<Post[]>([])
  const post = ref<Post | null>(null)
  const error = ref<Error | null>(null)
  const loading = ref(false)
  const currentPage = ref(1)
  const postsPerPage = ref(8)
  const totalPosts = ref(0)

  const totalPages = computed(() => {
    return Math.ceil(totalPosts.value / postsPerPage.value)
  })

  const fetchPosts = async (scenario: 'normal' | 'empty' | 'error' = 'normal') => {
    loading.value = true
    try {
      await new Promise((resolve) => setTimeout(resolve, 100))

      if (scenario === 'error') {
        throw new Error('Network error')
      }

      if (scenario === 'empty') {
        posts.value = []
        totalPosts.value = 0
      } else {
        posts.value = mockPosts
        totalPosts.value = mockPosts.length
      }
    } catch (err) {
      error.value = err as Error
    } finally {
      loading.value = false
    }
  }

  const fetchPostById = async (
    id: number,
    scenario: 'normal' | 'error' | 'not-found' = 'normal'
  ) => {
    loading.value = true
    try {
      await new Promise((resolve) => setTimeout(resolve, 100))

      if (scenario === 'error') {
        throw new Error('Network error')
      }

      if (scenario === 'not-found') {
        post.value = null
      } else {
        post.value = mockPosts.find((p) => p.id === id) || null
      }
    } catch (err) {
      error.value = err as Error
    } finally {
      loading.value = false
    }
  }

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
    totalPosts,
    fetchPosts,
    fetchPostById,
    nextPage,
    prevPage,
    goToPage,
  }
}
