<script setup lang="ts">
import { ref, computed, watch, onBeforeUnmount, onMounted } from 'vue'
import Button from '@/components/ui/Button.vue'

interface Props {
  modelValue: boolean
  title?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  hideCloseButton?: boolean
  persistent?: boolean
  fullscreen?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  title: '',
  size: 'md',
  hideCloseButton: false,
  persistent: false,
  fullscreen: false
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  'close': []
}>()

const modalContent = ref<HTMLElement | null>(null)

// Обработчик нажатия ESC для закрытия модального окна
const handleEscKey = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && !props.persistent) {
    close()
  }
}

// Метод закрытия модального окна
const close = () => {
  if (!props.persistent) {
    emit('update:modelValue', false)
    emit('close')
  }
}

// Клик по фону
const handleBackdropClick = (e: MouseEvent) => {
  if (
    !props.persistent && 
    modalContent.value && 
    !modalContent.value.contains(e.target as Node)
  ) {
    close()
  }
}

// Клик внутри модального окна не должен закрывать его
const handleModalClick = (e: MouseEvent) => {
  e.stopPropagation()
}

// Наблюдение за открытием/закрытием модального окна
watch(() => props.modelValue, (newValue) => {
  if (newValue) {
    document.body.classList.add('overflow-hidden')
    setTimeout(() => {
      document.addEventListener('keydown', handleEscKey)
    }, 100)
  } else {
    document.body.classList.remove('overflow-hidden')
    document.removeEventListener('keydown', handleEscKey)
  }
})

// Вычисляемый класс ширины модального окна
const modalSizeClass = computed(() => {
  if (props.fullscreen) return 'w-full h-full m-0 rounded-none max-w-none'
  
  const sizeClasses = {
    'sm': 'max-w-sm w-full min-w-[min(calc(100%-2rem),540px)]',
    'md': 'max-w-md w-full min-w-[min(calc(100%-2rem),540px)]',
    'lg': 'max-w-lg w-full min-w-[min(calc(100%-2rem),540px)]',
    'xl': 'max-w-xl w-full min-w-[min(calc(100%-2rem),540px)]'
  }
  
  return sizeClasses[props.size] || 'max-w-[540px] w-full min-w-[min(calc(100%-2rem),540px)]'
})

// Очистка обработчиков событий при уничтожении компонента
onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleEscKey)
  document.body.classList.remove('overflow-hidden')
})

// На мобильных устройствах предотвращаем скролл фона при открытом модальном окне
onMounted(() => {
  const handleTouchMove = (e: TouchEvent) => {
    if (props.modelValue) {
      if (modalContent.value && !modalContent.value.contains(e.target as Node)) {
        e.preventDefault()
      }
    }
  }
  
  document.addEventListener('touchmove', handleTouchMove, { passive: false })
  
  onBeforeUnmount(() => {
    document.removeEventListener('touchmove', handleTouchMove)
  })
})
</script>

<template>
  <Teleport to="body">
    <!-- Анимация появления/исчезновения модального окна -->
    <transition 
      enter-active-class="transition duration-300 ease-out" 
      enter-from-class="opacity-0" 
      enter-to-class="opacity-100" 
      leave-active-class="transition duration-200 ease-in" 
      leave-from-class="opacity-100" 
      leave-to-class="opacity-0"
    >
      <div 
        v-if="modelValue" 
        class="fixed inset-0 z-50 flex items-center justify-center" 
        @click="handleBackdropClick"
      >
        <!-- Затемнение фона -->
        <div 
          class="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        ></div>
        
        <!-- Анимация появления содержимого -->
        <transition
          enter-active-class="transition duration-300 ease-out" 
          enter-from-class="opacity-0 transform scale-95" 
          enter-to-class="opacity-100 transform scale-100" 
          leave-active-class="transition duration-200 ease-in" 
          leave-from-class="opacity-100 transform scale-100" 
          leave-to-class="opacity-0 transform scale-95"
        >
          <!-- Содержимое модального окна -->
          <div 
            ref="modalContent"
            :class="[
              'relative bg-white rounded-lg shadow-xl transform transition-all p-0 overflow-hidden',
              modalSizeClass,
              fullscreen ? '' : 'mx-auto max-h-[90vh]'
            ]"
            @click="handleModalClick"
          >
            <!-- Хедер -->
            <div class="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
              <div class="pr-8">
                <h2 v-if="title" class="text-xl font-bold text-black">{{ title }}</h2>
                <slot v-else name="header"></slot>
              </div>
              
              <!-- Кнопка закрытия -->
              <button 
                v-if="!hideCloseButton"
                @click="close" 
                class="absolute top-4 right-4 p-2 rounded-full text-gray-500 hover:text-black hover:bg-gray-100 transition-colors"
                aria-label="Закрыть"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            <!-- Основное содержимое -->
            <div class="p-4 sm:p-6 overflow-y-auto" :style="{ maxHeight: fullscreen ? 'calc(100vh - 120px)' : 'calc(70vh - 120px)' }">
              <slot></slot>
            </div>
            
            <!-- Футер с кнопками, если есть -->
            <div v-if="$slots.footer" class="p-4 sm:p-6 border-t border-gray-200 bg-gray-50">
              <div class="flex justify-end">
                <slot name="footer">
                  <Button 
                    rounded
                    size="md" 
                    class="mr-3 font-tt-commons bg-black hover:bg-black/90 text-white"
                  >
                    Отмена
                  </Button>
                  <Button 
                    rounded
                    size="md" 
                    class="font-tt-commons bg-black hover:bg-black/90 text-white"
                  >
                    Отправить
                  </Button>
                </slot>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </Teleport>
</template>

<style scoped>
/* Дополнительные стили для модального окна */
.overflow-y-auto {
  scrollbar-width: thin;
  scrollbar-color: #d1d5db #f3f4f6;
}

.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background-color: #f3f4f6;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background-color: #d1d5db;
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background-color: #9ca3af;
}
</style> 