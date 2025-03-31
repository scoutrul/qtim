<script setup lang="ts">
import ArticleCard from '@/components/article/ArticleCard.vue'
import type { PostUI } from '@/types/post'

interface Props {
  articles: PostUI[]
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  loading: false
})

// Создаем пустые карточки для состояния загрузки
const skeletonCards = Array.from({ length: 8 }, (_, index) => ({
  id: `skeleton-${index}`,
  title: '',
  preview: '',
  link: '',
  image: undefined
}))
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-6 gap-x-8">
    <ArticleCard 
      v-for="article in loading ? skeletonCards : articles" 
      :key="article.id"
      :title="article.title"
      :description="article.preview"
      :imageUrl="article.image"
      :link="article.link"
      :loading="loading"
    />
  </div>
</template> 