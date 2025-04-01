<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { ARTICLE_SKELETON } from '@/constants/article'
  import ImagePlaceholder from '@/components/ui/ImagePlaceholder.vue'
  import ImageSkeleton from '@/components/ui/ImageSkeleton.vue'
  import Skeleton from '@/components/ui/Skeleton.vue'
  import Typography from '@/components/ui/Typography.vue'

  const props = withDefaults(
    defineProps<{
      title?: string
      description?: string
      imageUrl?: string
      link?: string
      loading?: boolean
    }>(),
    {
      title: '',
      description: '',
      imageUrl: '',
      link: '',
      loading: false,
    }
  )

  const { title, description, imageUrl, link, loading } = props

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
    return !imageUrl || imageError.value
  })

  // Классы для карточки с учетом состояния загрузки
  const cardClasses = computed(() => [
    'group',
    !loading && 'hover:-translate-y-[20px]',
    'transition-all duration-300',
  ])
</script>

<template>
  <div class="article-card group relative w-full" :class="cardClasses">
    <!-- Контейнер для изображения с центрированием -->
    <div class="flex justify-center mb-4">
      <template v-if="link">
        <nuxt-link :to="link" class="block w-full max-w-[280px]">
          <div
            class="relative bg-light-gray overflow-hidden cursor-pointer hover:opacity-90 transition-opacity duration-300 w-full h-[180px]"
          >
            <!-- Изображение -->
            <img
              v-if="imageUrl && !imageError && !loading"
              :src="imageUrl"
              :alt="title"
              loading="lazy"
              class="w-full h-full object-cover transition-opacity duration-300"
              :class="{ 'opacity-0': !imageLoaded }"
              @load="handleImageLoad"
              @error="handleImageError"
            />

            <!-- Скелетон при загрузке -->
            <ImageSkeleton
              v-if="loading || (!imageLoaded && imageUrl && !imageError)"
              class="absolute inset-0 w-full h-full"
            />

            <!-- Заглушка при отсутствии изображения или ошибке -->
            <ImagePlaceholder
              v-if="shouldShowPlaceholder && !loading"
              :title="title"
              class="absolute inset-0 w-full h-full"
            />
          </div>
        </nuxt-link>
      </template>
      <template v-else>
        <div class="block w-full max-w-[280px]">
          <div
            class="relative bg-light-gray overflow-hidden cursor-pointer hover:opacity-90 transition-opacity duration-300 w-full h-[180px]"
          >
            <!-- Изображение -->
            <img
              v-if="imageUrl && !imageError && !loading"
              :src="imageUrl"
              :alt="title"
              loading="lazy"
              class="w-full h-full object-cover transition-opacity duration-300"
              :class="{ 'opacity-0': !imageLoaded }"
              @load="handleImageLoad"
              @error="handleImageError"
            />

            <!-- Скелетон при загрузке -->
            <ImageSkeleton
              v-if="loading || (!imageLoaded && imageUrl && !imageError)"
              class="absolute inset-0 w-full h-full"
            />

            <!-- Заглушка при отсутствии изображения или ошибке -->
            <ImagePlaceholder
              v-if="shouldShowPlaceholder && !loading"
              :title="title"
              class="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </template>
    </div>

    <!-- Контент карточки -->
    <div class="w-full max-w-[280px] m-auto">
      <template v-if="link">
        <nuxt-link :to="link">
          <template v-if="loading">
            <!-- Скелетон для заголовка -->
            <Skeleton :class="`h-[${ARTICLE_SKELETON.TITLE_HEIGHT}] mb-2`" />
            <!-- Скелетон для описания -->
            <div class="space-y-2">
              <Skeleton
                v-for="i in ARTICLE_SKELETON.DESCRIPTION_LINES"
                :key="i"
                :class="i === 1 ? 'w-full' : i === 2 ? 'w-3/4' : 'w-1/2'"
              />
            </div>
          </template>
          <template v-else>
            <Typography
              :text="description"
              variant="h5"
              tag="h3"
              weight="medium"
              custom-class="text-[20px] line-clamp-3"
            />
          </template>
        </nuxt-link>
      </template>
      <template v-else>
        <template v-if="loading">
          <!-- Скелетон для заголовка -->
          <Skeleton :class="`h-[${ARTICLE_SKELETON.TITLE_HEIGHT}] mb-2`" />
          <!-- Скелетон для описания -->
          <div class="space-y-2">
            <Skeleton
              v-for="i in ARTICLE_SKELETON.DESCRIPTION_LINES"
              :key="i"
              :class="i === 1 ? 'w-full' : i === 2 ? 'w-3/4' : 'w-1/2'"
            />
          </div>
        </template>
        <template v-else>
          <Typography
            :text="description"
            variant="h5"
            tag="h3"
            weight="medium"
            custom-class="text-[20px] line-clamp-3"
          />
        </template>
      </template>
      <div
        v-if="!loading && link"
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
