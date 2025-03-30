<template>
  <div class="contact-form bg-white p-8 rounded-lg shadow-md max-w-xl">
    <Typography text="Свяжитесь с нами" variant="h2" class="mb-6" />
    
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label for="name" class="block mb-2 text-sm font-medium text-gray-700">Имя</label>
        <input 
          id="name" 
          v-model="form.name" 
          type="text" 
          class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-200"
          placeholder="Ваше имя"
          required
        />
      </div>
      
      <div class="mb-4">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-700">Email</label>
        <input 
          id="email" 
          v-model="form.email" 
          type="email" 
          class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-200"
          placeholder="example@company.com"
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
      
      <Button 
        variant="primary" 
        size="lg" 
        fullWidth 
        :disabled="loading"
      >
        {{ loading ? 'Отправка...' : 'Отправить сообщение' }}
      </Button>
      
      <p v-if="success" class="mt-4 text-green-600 text-sm">
        Спасибо за сообщение! Мы свяжемся с вами в ближайшее время.
      </p>
      <p v-if="error" class="mt-4 text-red-600 text-sm">
        {{ error }}
      </p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import Typography from '@/components/ui/Typography.vue'
import Button from '@/components/ui/Button.vue'

// Состояние формы
const form = reactive({
  name: '',
  email: '',
  message: ''
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
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Имитация успешной отправки
    success.value = true
    
    // Сброс формы
    form.name = ''
    form.email = ''
    form.message = ''
  } catch (err) {
    // Обработка ошибки
    error.value = 'Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.'
    console.error(err)
  } finally {
    loading.value = false
  }
}
</script> 