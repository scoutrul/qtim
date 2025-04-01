<template>
  <main>
    <!-- Секция статей со скелетонами при загрузке -->
    <ArticleSection
      :title="t('common.articles')"
      :articles="processedPosts"
      :items-per-page="postsPerPage"
      :is-loading="loading"
      :has-error="!!error"
      :error-message="error ? error.message : ''"
    />
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import ArticleSection from '@/components/article/ArticleSection.vue'
import { usePosts } from '@/composables/usePosts'
import { useI18n } from '@/composables/useI18n'

// Получаем данные и методы из композабла usePosts
const { posts, loading, error, fetchPosts, postsPerPage } = usePosts()

// Получаем переводы из композабла useI18n
const { t } = useI18n()

useHead({
  title: 'QTIM',
  meta: [
    {
      name: 'description',
      content: 'QTIM - профессиональная разработка проектов и digital-решений'
    },
    // Open Graph
    { property: 'og:title', content: 'QTIM' },
    { property: 'og:description', content: 'QTIM - профессиональная разработка проектов и digital-решений' }
  ]
})

// Преобразуем данные из API в формат, который ожидает компонент ArticleSection
const processedPosts = computed(() => {
  return posts.value.map((post) => ({
    ...post,
    imageUrl:
      post.image || `/images/articles/placeholder-${Math.floor(Math.random() * 8) + 1}.jpg`,
    link: `/article/${post.id}`,
  }))
})

// Загружаем статьи при монтировании компонента
onMounted(async () => {
  await fetchPosts()
})
</script>

<style scoped>
  /* Стили при необходимости */
</style>
