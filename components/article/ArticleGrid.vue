<script setup lang="ts">
  import ArticleCard from '@/components/article/ArticleCard.vue'
  import type { PostUI } from '@/types/post'

  interface SkeletonCard {
    id: string
    title: string
    preview: string
    link: string
    image: undefined
  }

  const props = defineProps<{
    articles: PostUI[]
    loading?: boolean
  }>()

  const getArticlePreview = (article: PostUI | SkeletonCard) => {
    return article.preview || (article as PostUI).description
  }

  const getArticleImage = (article: PostUI | SkeletonCard) => {
    return (article as PostUI).imageUrl || (article as PostUI).image || ''
  }

  // Создаем пустые карточки для состояния загрузки
  const skeletonCards: SkeletonCard[] = Array.from({ length: 8 }, (_, index) => ({
    id: `skeleton-${index}`,
    title: '',
    preview: '',
    link: '',
    image: undefined,
  }))
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-6 gap-x-8">
    <ArticleCard
      v-for="article in loading ? skeletonCards : articles"
      :key="article.id"
      :title="article.title"
      :description="getArticlePreview(article)"
      :image-url="getArticleImage(article)"
      :link="article.link"
      :loading="loading"
    />
  </div>
</template>
