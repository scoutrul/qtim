<script setup lang="ts">
  import { computed } from 'vue'
  import { useWindowScroll } from '@vueuse/core'
  import { useI18n } from '@/composables/useI18n'
  import { useScroll } from '@/composables/useScroll'

  const { t } = useI18n()

  const { scrollToTop } = useScroll()

  // Свойства компонента
  interface Props {
    threshold?: number
    size?: 'sm' | 'md' | 'lg'
    color?: string
  }

  const props = withDefaults(defineProps<Props>(), {
    threshold: 300,
    size: 'md',
    color: 'bg-black',
  })

  // Используем useWindowScroll для более надежного отслеживания
  const { y: scrollY } = useWindowScroll()

  // Вычисляем видимость на основе текущей позиции скролла
  const isVisible = computed(() => scrollY.value > props.threshold)

  // Классы размеров кнопки
  const sizeClasses = {
    sm: 'w-10 h-10 text-sm',
    md: 'w-14 h-14 text-base',
    lg: 'w-20 h-20 text-lg',
  }

  const handleScrollToTop = () => {
    scrollToTop('smooth')
  }
</script>

<template>
  <transition
    enter-active-class="transition-opacity duration-300"
    leave-active-class="transition-opacity duration-300"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <div 
      v-show="isVisible" 
      class="fixed bottom-5 right-5 z-[100] block md:bottom-10 md:right-10" 
      @click="handleScrollToTop"
    >
      <button
        :class="[
          'rounded-full flex items-center justify-center text-white shadow-lg hover:opacity-90 cursor-pointer transition-all duration-300',
          sizeClasses[size],
          color,
        ]"
        :aria-label="t('common.scrollToTop')"
      >
        {{ t('common.scrollToTop') }}
      </button>
    </div>
  </transition>
</template>
