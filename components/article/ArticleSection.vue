<script setup lang="ts">
  import { ref, computed } from 'vue'
  import ArticleGrid from '@/components/article/ArticleGrid.vue'
  import Pagination from '@/components/ui/Pagination.vue'
  import type { PostUI } from '@/types/post'
  import Typography from '@/components/ui/Typography.vue'
  import { useScroll } from '@/composables/useScroll'
  import { useI18n } from '@/composables/useI18n'

  const { t } = useI18n()

  interface Props {
    title?: string
    articles: PostUI[]
    itemsPerPage?: number
    isLoading?: boolean
    hasError?: boolean
    errorMessage?: string
  }

  const props = withDefaults(defineProps<Props>(), {
    title: undefined,
    itemsPerPage: 8,
    isLoading: false,
    hasError: false,
    errorMessage: undefined,
  })

  const displayTitle = computed(() => props.title || t('common.articles'))

  const currentPage = ref(1)
  const totalPages = computed(() => {
    if (!props.articles || props.articles.length === 0) return 0
    return Math.ceil(props.articles.length / props.itemsPerPage)
  })

  // Вычисляем, какие статьи показывать на текущей странице
  const displayedArticles = computed(() => {
    if (!props.articles || props.articles.length === 0) return []
    const startIndex = (currentPage.value - 1) * props.itemsPerPage
    const endIndex = startIndex + props.itemsPerPage
    return props.articles.slice(startIndex, endIndex)
  })

  // Используем вычисляемое свойство для сообщения об ошибке
  const displayErrorMessage = computed(() => props.errorMessage || t('errors.loading'))

  // Обработчик изменения страницы
  const handlePageChange = (page: number) => {
    currentPage.value = page
    // Прокрутка к началу статей при смене страницы
    const { scrollToTop } = useScroll()
    scrollToTop()
  }
</script>

<template>
  <section class="article-section pt-[6.8rem] pb-[140px] bg-white">
    <div class="container lg:box-content">
      <!-- Заголовок секции -->
      <Typography
        :text="displayTitle"
        variant="h1"
        tag="h2"
        weight="normal"
        custom-class="text-[68px] mb-[60px] leading-normal"
      />

      <!-- Сообщение об ошибке -->
      <div v-if="hasError" class="min-h-[40vh] flex justify-center items-center">
        <div class="text-error text-xl font-tt-commons">{{ displayErrorMessage }}</div>
      </div>

      <!-- Сетка статей -->
      <template v-else>
        <ArticleGrid :articles="displayedArticles" :loading="isLoading" />

        <!-- Пагинация (если больше одной страницы) -->
        <Pagination
          v-if="totalPages > 1"
          :current-page="currentPage"
          :total-pages="totalPages"
          :show-prev-button="false"
          class="font-tt-commons mt-[50px]"
          @update:page="handlePageChange"
        />
      </template>
    </div>
  </section>
</template>
