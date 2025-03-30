<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Свойства компонента
interface Props {
  threshold?: number
  size?: 'sm' | 'md' | 'lg'
  color?: string
}

const props = withDefaults(defineProps<Props>(), {
  threshold: 300,
  size: 'md',
  color: 'bg-black'
})

// Видимость кнопки
const isVisible = ref(false)

// Классы размеров кнопки
const sizeClasses = {
  sm: 'w-10 h-10 text-sm',
  md: 'w-14 h-14 text-base',
  lg: 'w-20 h-20 text-lg'
}

// Проверка положения скролла
const checkScroll = () => {
  isVisible.value = window.scrollY > props.threshold
}

// Скролл наверх страницы
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// Жизненный цикл компонента
onMounted(() => {
  window.addEventListener('scroll', checkScroll)
  checkScroll() // Проверить при монтировании
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
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
      class="fixed bottom-10 right-10 z-50"
      @click="scrollToTop"
    >
      <button 
        :class="[
          'rounded-full flex items-center justify-center text-white shadow-lg hover:opacity-90 cursor-pointer transition-all duration-300',
          sizeClasses[size],
          color
        ]"
        aria-label="Вернуться наверх"
      >
        Go
      </button>
    </div>
  </transition>
</template> 