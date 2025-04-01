<script setup lang="ts">
import { computed } from 'vue'
import { clearError } from 'nuxt/app'

const props = defineProps<{
  error: {
    statusCode: number
    message: string
  }
}>()

const statusCode = computed(() => props.error?.statusCode || 500)
const errorMessage = computed(() => props.error?.message || 'Что-то пошло не так')

const handleError = () => {
  clearError({ redirect: '/' })
}
</script>

<template>
  <NuxtLayout>
    <Title>Ошибка {{ statusCode }} | QTIM</Title>
    <Meta name="description" :content="`Ошибка ${statusCode}: ${errorMessage}`" />
    <Meta property="og:title" :content="`Ошибка ${statusCode} | QTIM`" />
    <Meta property="og:description" :content="`Ошибка ${statusCode}: ${errorMessage}`" />

    <div class="container mx-auto px-4 py-20 min-h-[70vh] flex items-center justify-center">
      <div class="text-center">
        <h1 class="text-7xl md:text-8xl lg:text-9xl font-bold text-black mb-4 font-tt-commons">
          {{ statusCode }}
        </h1>
        <p class="text-2xl md:text-3xl font-light text-black mb-8 font-tt-commons">
          {{ errorMessage }}
        </p>
        <button
          class="inline-block bg-black text-white py-3 px-8 rounded-xl hover:bg-black/90 transition-colors duration-300 font-tt-commons"
          @click="handleError"
        >
          Вернуться на главную
        </button>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped>
  /* Анимация для заголовка */
  h1 {
    animation: pulse 2s infinite ease-in-out;
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.8;
    }
  }
</style>
