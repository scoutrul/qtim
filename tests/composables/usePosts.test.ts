import { describe, test, expect, beforeEach } from 'vitest'
import type { Post } from '../../types/post'
import { usePostsTest } from './usePostsTest'

describe('usePosts composable', () => {
  let postsComposable: ReturnType<typeof usePostsTest>

  beforeEach(() => {
    postsComposable = usePostsTest()
  })

  describe('fetchPosts', () => {
    test('успешно получает список статей с полными данными', async () => {
      await postsComposable.fetchPosts()

      const expectedPost: Post = {
        id: 1,
        title: 'Статья 1',
        content: 'Содержание статьи 1',
        description: 'Описание статьи 1',
        image: 'https://example.com/images/article-1.jpg',
        createdAt: '2024-03-20T12:00:00Z',
        updatedAt: '2024-03-20T12:00:00Z',
      }

      expect(postsComposable.posts.value).toHaveLength(1)
      expect(postsComposable.posts.value[0]).toEqual(expectedPost)
      expect(postsComposable.error.value).toBeNull()
      expect(postsComposable.loading.value).toBe(false)
    })

    test('проверяет типы данных в ответе', async () => {
      await postsComposable.fetchPosts()

      const post = postsComposable.posts.value[0]
      expect(typeof post.id).toBe('number')
      expect(typeof post.title).toBe('string')
      expect(typeof post.content).toBe('string')
      expect(typeof post.description).toBe('string')
      expect(typeof post.image).toBe('string')
      expect(typeof post.createdAt).toBe('string')
      expect(typeof post.updatedAt).toBe('string')
    })

    test('корректно обрабатывает пустой список статей', async () => {
      await postsComposable.fetchPosts('empty')

      expect(postsComposable.posts.value).toHaveLength(0)
      expect(postsComposable.error.value).toBeNull()
      expect(postsComposable.loading.value).toBe(false)
    })
  })

  describe('fetchPostById', () => {
    test('успешно получает статью по ID с полными данными', async () => {
      await postsComposable.fetchPostById(1)

      const expectedPost: Post = {
        id: 1,
        title: 'Тестовая статья 1',
        content: 'Содержание статьи 1',
        description: 'Описание статьи 1',
        image: 'https://example.com/images/article-1.jpg',
        createdAt: '2024-03-20T12:00:00Z',
        updatedAt: '2024-03-20T12:00:00Z',
      }

      expect(postsComposable.post.value).toEqual(expectedPost)
      expect(postsComposable.error.value).toBeNull()
      expect(postsComposable.loading.value).toBe(false)
    })

    test('проверяет типы данных в ответе', async () => {
      await postsComposable.fetchPostById(1)

      const post = postsComposable.post.value
      expect(post).not.toBeNull()
      if (post) {
        expect(typeof post.id).toBe('number')
        expect(typeof post.title).toBe('string')
        expect(typeof post.content).toBe('string')
        expect(typeof post.description).toBe('string')
        expect(typeof post.image).toBe('string')
        expect(typeof post.createdAt).toBe('string')
        expect(typeof post.updatedAt).toBe('string')
      }
    })

    test('обрабатывает ошибку сети', async () => {
      await postsComposable.fetchPostById(1, 'error')

      expect(postsComposable.post.value).toBeNull()
      expect(postsComposable.error.value).toBe('Network error')
      expect(postsComposable.loading.value).toBe(false)
    })

    test('обрабатывает отсутствие статьи', async () => {
      await postsComposable.fetchPostById(1, 'not-found')

      expect(postsComposable.post.value).toBeNull()
      expect(postsComposable.error.value).toBe('Post not found')
      expect(postsComposable.loading.value).toBe(false)
    })
  })

  describe('пагинация', () => {
    test('корректно вычисляет общее количество страниц', async () => {
      await postsComposable.fetchPosts()

      expect(postsComposable.totalPages.value).toBe(1)
      expect(postsComposable.totalPosts.value).toBe(1)
    })

    test('корректно работает навигация по страницам', async () => {
      await postsComposable.fetchPosts()

      expect(postsComposable.currentPage.value).toBe(1)
      await postsComposable.goToPage(1)
      expect(postsComposable.currentPage.value).toBe(1)
    })

    test('проверяет типы данных в списке', async () => {
      await postsComposable.fetchPosts()

      const post = postsComposable.posts.value[0]
      expect(typeof post.id).toBe('number')
      expect(typeof post.title).toBe('string')
      expect(typeof post.content).toBe('string')
      expect(typeof post.description).toBe('string')
      expect(typeof post.image).toBe('string')
      expect(typeof post.createdAt).toBe('string')
      expect(typeof post.updatedAt).toBe('string')
    })

    test('корректно обрабатывает пагинацию с пустым списком', async () => {
      await postsComposable.fetchPosts('empty')

      expect(postsComposable.totalPages.value).toBe(0)
      expect(postsComposable.posts.value).toHaveLength(0)
      expect(postsComposable.currentPage.value).toBe(1)
    })
  })
})
