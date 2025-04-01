import { ref } from 'vue'
import type { Post, PostUI, DisplayArticle } from '../../types/post'

interface ApiResponse {
  data: PostUI[]
  meta: {
    total: number
    page: number
    lastPage: number
  }
}

export function usePostsTest() {
  const posts = ref<PostUI[]>([])
  const post = ref<DisplayArticle | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)
  const currentPage = ref(1)
  const totalPages = ref(1)
  const totalPosts = ref(0)

  const mock$fetch = async (url: string): Promise<Post | PostUI | ApiResponse | []> => {
    if (url.endsWith('error')) {
      throw new Error('Network error')
    }
    if (url.endsWith('not-found')) {
      throw new Error('Post not found')
    }
    if (url.endsWith('empty')) {
      return []
    }

    const mockPost: Post = {
      id: 1,
      title: 'Test Post',
      content: 'Test content',
      description: 'Test description',
      image: 'test.jpg',
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
    }

    if (url.includes('/posts/')) {
      return {
        ...mockPost,
        imageUrl: mockPost.image,
        link: `/posts/${mockPost.id}`,
      }
    }

    return {
      data: [{
        ...mockPost,
        imageUrl: mockPost.image,
        link: `/posts/${mockPost.id}`,
      }],
      meta: {
        total: 1,
        page: 1,
        lastPage: 1,
      },
    }
  }

  const fetchPosts = async (testCase?: 'error' | 'empty') => {
    loading.value = true
    error.value = null

    try {
      const response = await mock$fetch(
        testCase === 'error'
          ? '/api/posts/error'
          : testCase === 'empty'
          ? '/api/posts/empty'
          : '/api/posts'
      )
      if ('data' in response) {
        posts.value = response.data
        totalPosts.value = response.meta.total
        totalPages.value = response.meta.lastPage
      }
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Unknown error'
    } finally {
      loading.value = false
    }
  }

  const fetchPostById = async (id: number, testCase?: 'error' | 'not-found') => {
    loading.value = true
    error.value = null
    post.value = null

    try {
      const response = await mock$fetch(
        testCase === 'error'
          ? '/api/posts/error'
          : testCase === 'not-found'
          ? '/api/posts/not-found'
          : `/api/posts/${id}`
      )
      if ('imageUrl' in response) {
        post.value = response
      }
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Unknown error'
    } finally {
      loading.value = false
    }
  }

  const goToPage = async (page: number) => {
    if (page < 1 || page > totalPages.value) return
    currentPage.value = page
    await fetchPosts()
  }

  return {
    posts,
    post,
    loading,
    error,
    currentPage,
    totalPages,
    totalPosts,
    fetchPosts,
    fetchPostById,
    goToPage,
  }
}
