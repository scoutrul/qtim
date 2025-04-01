import { ref } from 'vue'
import type { Post, PostUI, DisplayArticle } from '@/types/post'

interface ApiResponse<T> {
  data: T[]
  meta: {
    current_page: number
    total_pages: number
    total: number
    per_page: number
  }
}

export function usePostsTest() {
  const posts = ref<PostUI[]>([])
  const post = ref<DisplayArticle | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)
  const currentPage = ref(1)
  const totalPages = ref(0)
  const totalPosts = ref(0)
  const postsPerPage = ref(10)

  const mock$fetch = (url: string): Promise<Post | PostUI | ApiResponse<PostUI> | []> => {
    if (url.endsWith('error')) {
      throw new Error('Network error')
    }

    if (url.endsWith('empty')) {
      return Promise.resolve([])
    }

    if (url.includes('/post/')) {
      const mockPost: Post = {
        id: 1,
        title: 'Test Post',
        content: 'This is a test post content',
        description: 'Test description',
        image: 'https://example.com/image.jpg',
        createdAt: '2023-01-01',
        updatedAt: '2023-01-02',
      }
      return Promise.resolve(mockPost)
    }

    // Имитируем ответ для списка постов
    const mockPosts: PostUI[] = Array.from({ length: 30 }, (_, i) => ({
      id: i + 1,
      title: `Post ${i + 1}`,
      description: `Description for post ${i + 1}`,
      image: 'https://example.com/image.jpg',
      imageUrl: 'https://example.com/image.jpg',
      link: `/post/${i + 1}`,
      content: `Content for post ${i + 1}`,
      createdAt: '2023-01-01',
      updatedAt: '2023-01-02',
    }))

    // Имитация пагинации
    const page = parseInt(new URL(url, 'http://example.com').searchParams.get('page') || '1')
    const perPage = parseInt(new URL(url, 'http://example.com').searchParams.get('limit') || '10')
    const start = (page - 1) * perPage
    const end = start + perPage
    const paginatedPosts = mockPosts.slice(start, end)

    const response: ApiResponse<PostUI> = {
      data: paginatedPosts,
      meta: {
        current_page: page,
        total_pages: Math.ceil(mockPosts.length / perPage),
        total: mockPosts.length,
        per_page: perPage,
      },
    }

    return Promise.resolve(response)
  }

  const fetchPosts = (testCase?: 'empty') => {
    posts.value = []
    loading.value = true
    error.value = null

    mock$fetch(testCase === 'empty' ? '/api/posts/empty' : '/api/posts')
      .then((response) => {
        if (Array.isArray(response)) {
          posts.value = []
        } else if ('data' in response) {
          posts.value = response.data
          totalPages.value = Math.ceil(response.meta.total / postsPerPage.value)
        }
      })
      .catch((err: unknown) => {
        if (err instanceof Error) {
          error.value = err.message
        } else {
          error.value = 'Unknown error'
        }
      })
      .finally(() => {
        loading.value = false
      })
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
    } catch (e: unknown) {
      if (e instanceof Error) {
        error.value = e.message
      } else {
        error.value = 'Unknown error'
      }
    } finally {
      loading.value = false
    }
  }

  const goToPage = (page: number) => {
    currentPage.value = page
    fetchPosts()
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
