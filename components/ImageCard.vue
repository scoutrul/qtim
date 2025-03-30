<template>
  <div class="card-container">
    <img 
      :src="imageUrl" 
      :alt="title"
      style="width: 280px; height: 280px; object-fit: cover;"
    />
    <div class="content-container">
      <p class="description">{{ description }}</p>
      <a 
        href="#" 
        class="read-more"
        @click.prevent="handleReadMore"
      >
        Read more
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ImageCard',
  props: {
    imageUrl: {
      type: String,
      default: 'https://dashboard.codeparrot.ai/api/image/Z-bLWHn5m-GBkO7E/frame-75.png'
    },
    title: {
      type: String,
      default: 'Team Image'
    },
    description: {
      type: String,
      default: 'The guys from Qtim rewrote the entire site from scratch in a couple of months. In the process of development they offered ideas to solve our "pains". We are still working with them. Everything is great!'
    }
  },
  setup(props, { emit }) {
    const handleReadMore = () => {
      emit('read-more')
    }

    return {
      handleReadMore
    }
  }
})
</script>

<style scoped>
.card-container {
  display: flex;
  flex-direction: column;
  width: 280px;
  gap: 24px;
}

.content-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-right: 16px;
}

.description {
  font-family: 'TT Commons', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 120%;
  color: #101010;
  margin: 0;
}

.read-more {
  font-family: 'TT Commons', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 120%;
  color: #e2beff;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.read-more:hover {
  opacity: 0.8;
}
</style>
