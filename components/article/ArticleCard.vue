<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { ARTICLE_CARD, ARTICLE_CARD_IMAGE, ARTICLE_CARD_CONTENT } from '@/constants/sizes'
  import ImagePlaceholder from '@/components/ui/ImagePlaceholder.vue'
  import ImageSkeleton from '@/components/ui/ImageSkeleton.vue'
  import Skeleton from '@/components/ui/Skeleton.vue'

  interface Props {
    title: string
    description: string
    imageUrl?: string
    link: string
    loading?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    loading: false,
  })

  // Отслеживание статуса загрузки изображения
  const imageLoaded = ref(false)
  const imageError = ref(false)

  const handleImageError = () => {
    imageError.value = true
  }

  const handleImageLoad = () => {
    imageLoaded.value = true
  }

  // Проверяем, нужно ли показывать заглушку
  const shouldShowPlaceholder = computed(() => {
    return !props.imageUrl || imageError.value
  })

  // Вычисляем стили для контейнера изображения
  const imageContainerStyle = computed(() => ({
    width: ARTICLE_CARD_IMAGE.WIDTH,
    height: ARTICLE_CARD_IMAGE.HEIGHT,
  }))

  // Вычисляем стили для карточки
  const cardStyle = computed(() => ({
    width: ARTICLE_CARD.WIDTH,
  }))

  // Вычисляем стили для контента
  const contentStyle = computed(() => ({
    width: ARTICLE_CARD_CONTENT.WIDTH,
  }))

  // Классы для карточки с учетом состояния загрузки
  const cardClasses = computed(() => [
    'group',
    !props.loading && 'hover:-translate-y-[20px]',
    'transition-all duration-300',
  ])
</script>

<template>
  <div :style="cardStyle" :class="cardClasses">
    <nuxt-link :to="link">
      <!-- Контейнер для изображения с фиксированным размером -->
      <div
        :style="imageContainerStyle"
        class="relative bg-light-gray overflow-hidden cursor-pointer hover:opacity-90 transition-opacity duration-300 mb-4"
      >
        <!-- Изображение -->
        <img
          v-if="props.imageUrl && !imageError && !loading"
          :src="props.imageUrl"
          :alt="props.title"
          loading="lazy"
          class="w-full h-full object-cover transition-opacity duration-300"
          :class="{ 'opacity-0': !imageLoaded }"
          @load="handleImageLoad"
          @error="handleImageError"
        />

        <!-- Скелетон при загрузке -->
        <ImageSkeleton
          v-if="loading || (!imageLoaded && props.imageUrl && !imageError)"
          class="absolute inset-0"
          :style="{
            width: ARTICLE_CARD_IMAGE.WIDTH,
            height: ARTICLE_CARD_IMAGE.HEIGHT,
          }"
        />

        <!-- Заглушка при отсутствии изображения или ошибке -->
        <ImagePlaceholder
          v-if="shouldShowPlaceholder && !loading"
          :title="props.title"
          class="absolute inset-0"
          :style="{
            width: ARTICLE_CARD_IMAGE.WIDTH,
            height: ARTICLE_CARD_IMAGE.HEIGHT,
          }"
        />
      </div>
    </nuxt-link>

    <!-- Контент карточки -->
    <div :style="contentStyle" class="py-4">
      <nuxt-link :to="link">
        <template v-if="loading">
          <!-- Скелетон для заголовка -->
          <Skeleton class="h-[60px] mb-2" />
          <!-- Скелетон для описания (3 строки) -->
          <div class="space-y-2">
            <Skeleton class="w-full" />
            <Skeleton class="w-3/4" />
            <Skeleton class="w-1/2" />
          </div>
        </template>
        <template v-else>
          <Typography
            :text="props.description"
            variant="h5"
            tag="h3"
            weight="medium"
            custom-class="text-[20px] line-clamp-3"
          />
        </template>
      </nuxt-link>
      <div
        v-if="!loading"
        :class="['mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300']"
      >
        <nuxt-link :to="link" class="text-bg-purple font-medium cursor-pointer"
          >Read More</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
  /* Стили для анимации загрузки изображения */
  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
</style>
