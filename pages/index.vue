<template>
  <div>
    <h1>Добро пожаловать в блог</h1>
    
    <!-- Показываем индикатор загрузки -->
    <div v-if="loading">Загрузка данных...</div>
    
    <!-- Показываем сообщение об ошибке, если она есть -->
    <div v-if="error">Ошибка загрузки данных: {{ error.message }}</div>
    
    <!-- Отображаем список постов с более подробной информацией -->
    <div v-if="posts.length > 0">
      <ul class="posts-list">
        <li v-for="article in posts" :key="article.id" class="post-item">
          <h2>{{ article.title }}</h2>
          <p>{{ article.description }}</p>
          <div class="post-date">Дата создания: {{ new Date(article.createdAt).toLocaleDateString() }}</div>
        </li>
      </ul>
    </div>
    
    <!-- Если постов нет -->
    <div v-else-if="!loading && !error">Нет доступных статей</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
// Импортируем наш новый composable
import { usePosts } from '@/composables/usePosts' // Используйте правильный путь к файлу

export default defineComponent({
  name: 'HomePage',
  // Используем setup для Composition API
  setup() {
    // Вызываем composable для получения статей
    const {     
      posts,
      post,
      error,
      loading,
      fetchPosts,
      fetchPostById
    } = usePosts()
    
    // Загружаем статьи при монтировании компонента
    onMounted(() => {
      fetchPosts()
    })

    // Возвращаем данные, чтобы они были доступны в шаблоне
    return {
      posts,
      error,
      loading
    }
  }
})
</script>

<style scoped>
.posts-list {
  padding: 0;
  list-style: none;
}

.post-item {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #eaeaea;
  border-radius: 5px;
}

.post-date {
  color: #777;
  font-size: 0.9em;
  margin-top: 10px;
}
</style> 