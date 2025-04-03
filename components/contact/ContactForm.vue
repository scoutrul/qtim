<template>
  <div class="contact-form w-full">
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label for="name" class="block mb-2 text-sm font-medium text-gray-700">Ваше имя</label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-200"
          placeholder="Введите ваше имя"
          required
        />
      </div>

      <div class="mb-6">
        <label for="message" class="block mb-2 text-sm font-medium text-gray-700">Сообщение</label>
        <textarea
          id="message"
          v-model="form.message"
          class="w-full p-3 border border-gray-300 rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-purple-200"
          placeholder="Опишите ваш проект или задайте вопрос"
          required
        ></textarea>
      </div>

      <div class="mb-6">
        <label for="contact" class="block mb-2 text-sm font-medium text-gray-700">Контакт</label>
        <input
          id="contact"
          v-model="form.contact"
          type="text"
          class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-200"
          placeholder="Email, телефон, Telegram и т.д."
          required
        />
      </div>

      <Button
        rounded
        size="lg"
        :disabled="loading"
        class="w-full mt-4 bg-black hover:bg-black/90 text-white"
      >
        {{ loading ? 'Отправка...' : 'Отправить заявку' }}
      </Button>

      <p v-if="success" class="mt-4 text-green-600 text-sm">
        Спасибо за заявку! Мы свяжемся с вами в ближайшее время.
      </p>
      <p v-if="error" class="mt-4 text-red-600 text-sm">
        {{ error }}
      </p>
    </form>
  </div>
</template>

<script setup lang="ts">
  import { ref, reactive } from 'vue'
  import Button from '@/components/ui/Button.vue'

  const emit = defineEmits<{
    submit: []
  }>()

  // Состояние формы
  const form = reactive({
    name: '',
    message: '',
    contact: '',
  })

  // Состояние отправки
  const loading = ref(false)
  const success = ref(false)
  const error = ref('')

  // Обработка отправки формы
  const handleSubmit = async () => {
    loading.value = true
    error.value = ''

    try {
      // Здесь будет логика отправки формы через API
      // Имитация задержки API
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Имитация успешной отправки
      success.value = true

      // Сброс формы
      form.name = ''
      form.message = ''
      form.contact = ''

      // Оповещаем родительский компонент об успешной отправке
      emit('submit')
    } catch (err) {
      // Обработка ошибки
      error.value = 'Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.'
    } finally {
      loading.value = false
    }
  }
</script>
