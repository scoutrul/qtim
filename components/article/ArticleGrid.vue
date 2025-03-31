<script setup lang="ts">
import ArticleCard from '@/components/article/ArticleCard.vue'
import type { PostUI } from '@/types/post'
import { GRID_CLASSES } from '@/constants/layout'

interface Props {
  articles: PostUI[]
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  loading: false
})

const gridClasses = [
  GRID_CLASSES.BASE,
  GRID_CLASSES.MOBILE,
  GRID_CLASSES.TABLET,
  GRID_CLASSES.DESKTOP,
  GRID_CLASSES.LARGE
]

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
  <div :class="gridClasses">
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