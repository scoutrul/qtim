<template>
  <main>
    <div v-if="loading" class="container py-16 sm:py-20">
      <ArticleContentSkeleton />
    </div>

    <div
      v-else-if="error"
      class="container py-16 sm:py-20 min-h-[60vh] flex justify-center items-center"
    >
      <div class="text-error text-xl">Ошибка загрузки статьи. Попробуйте позже.</div>
    </div>

    <div v-else-if="post" class="container py-16 sm:py-20">
      <Title>{{ post.title }} | QTIM</Title>
      <Meta
        name="description"
        :content="
          post.description || 'QTIM - профессиональная разработка проектов и digital-решений'
        "
      />
      <Meta property="og:title" :content="post.title" />
      <Meta property="og:description" :content="post.description" />

      <!-- Заголовок статьи -->
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-18 max-w-4xl">
        {{ post.title }}
      </h1>

      <!-- Основное изображение -->
      <div class="mb-20 relative">
        <div class="aspect-[16/9] overflow-hidden rounded-lg">
          <img
            v-if="!imageError && post.image"
            :src="post.image"
            :alt="post.title"
            loading="lazy"
            class="w-full h-full object-cover"
            :class="{ 'opacity-0': !imageLoaded }"
            @load="handleImageLoad"
            @error="handleImageError"
          />

          <Skeleton v-if="!imageLoaded && !imageError && post.image" class="absolute inset-0" />

          <ImagePlaceholder
            v-if="imageError || !post.image"
            :title="post.title"
            aspect-ratio="landscape"
            class="absolute inset-0"
          />
        </div>
      </div>

      <!-- Контент статьи -->
      <ArticleContent :article="post" />
    </div>
  </main>
</template>

<script setup lang="ts">
  import { ref, computed, onMounted, watch } from 'vue'
  import { useRoute } from 'vue-router'
  import type { Post } from '@/types/post'
  import Skeleton from '@/components/ui/Skeleton.vue'
  import ImagePlaceholder from '@/components/ui/ImagePlaceholder.vue'
  import ArticleContentSkeleton from '@/components/article/ArticleContentSkeleton.vue'
  import ArticleContent from '@/components/article/ArticleContent.vue'
  import { usePosts } from '@/composables/usePosts'
  import { useScroll } from '@/composables/useScroll'

  definePageMeta({
    name: 'article-id',
  })

  // Инициализируем все необходимые composables внутри setup
  const route = useRoute()
  const articleId = computed(() => route.params.id as string)
  const { scrollToTop } = useScroll()

  // Статус загрузки изображения
  const imageLoaded = ref(false)
  const imageError = ref(false)

  const handleImageLoad = () => {
    imageLoaded.value = true
  }

  const handleImageError = () => {
    imageError.value = true
  }

  // Используем composable для постов
  const { post, loading, error } = usePosts()

  // Правильная загрузка данных для SSR
  const { data } = await useFetch<Post>(
    `${useRuntimeConfig().public.apiBaseUrl}/posts/${articleId.value}`,
    {
      transform: (response: Post) => response,
      onResponseError(context) {
        error.value = new Error(context.error?.message || 'Failed to fetch post')
      },
    }
  )

  // Устанавливаем данные в post после загрузки
  if (data.value) {
    post.value = data.value
  }

  // Скролл после загрузки на клиенте
  onMounted(() => {
    scrollToTop('instant')
  })

  // Следим за изменением пути
  watch(
    () => route.path,
    () => {
      scrollToTop('instant')
    }
  )
</script>

<style scoped>
  /* Анимация появления изображения */
  img {
    transition: opacity 0.3s ease;
  }
</style>
