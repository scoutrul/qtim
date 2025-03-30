<script setup lang="ts">
import { watch } from 'vue'

interface Props {
  modelValue: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  'close': []
}>()

const close = () => {
  emit('update:modelValue', false)
  emit('close')
}

// Блокировать прокрутку страницы при открытии модального окна
watch(() => props.modelValue, (newValue) => {
  if (newValue) {
    document.body.classList.add('overflow-hidden')
  } else {
    document.body.classList.remove('overflow-hidden')
  }
})
</script>

<template>
  <Teleport to="body">
    <transition 
      enter-active-class="transition duration-300 ease-out" 
      enter-from-class="opacity-0" 
      enter-to-class="opacity-100" 
      leave-active-class="transition duration-200 ease-in" 
      leave-from-class="opacity-100" 
      leave-to-class="opacity-0"
    >
      <div v-if="modelValue" class="fixed inset-0 z-50 flex items-center justify-center">
        <!-- Затемнение фона -->
        <div 
          class="absolute inset-0 bg-black bg-opacity-50" 
          @click="close"
        ></div>
        
        <!-- Содержимое модального окна -->
        <div 
          class="relative bg-white rounded-lg p-6 w-full max-w-md mx-4 shadow-xl transform transition-all"
        >
          <!-- Заголовок -->
          <div class="mb-6">
            <slot name="header"></slot>
          </div>
          
          <!-- Основное содержимое -->
          <div class="mb-6">
            <slot></slot>
          </div>
          
          <!-- Нижняя часть -->
          <div class="flex justify-end">
            <slot name="footer">
              <button 
                @click="close" 
                class="text-dark-gray hover:text-black transition-colors"
              >
                Закрыть
              </button>
            </slot>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template> 