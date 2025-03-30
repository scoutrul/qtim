import { ref } from 'vue'
import type { Post } from '../types/post'

export function usePosts() {
  const posts = ref<Post[]>([])
  const post = ref<Post | null>(null)
  const error = ref<Error | null>(null)
  const loading = ref(false)

  const fetchPosts = async () => {
    loading.value = true
    try {
      const response = await $fetch<Post[]>("https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/")
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
      const response = await $fetch<Post>(`https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${id}`)
      post.value = response
    } catch (err) {
      error.value = err as Error
    } finally {
      loading.value = false
    }
  }

  return {
    posts,
    post,
    error,
    loading,
    fetchPosts,
    fetchPostById,
  }
} 