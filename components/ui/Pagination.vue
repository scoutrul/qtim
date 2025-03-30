<template>
  <div class="pagination">
    <button @click="handlePrev">Предыдущая</button>
    <span>{{ currentPage }} из {{ totalPages }}</span>
    <button @click="handleNext">Следующая</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Pagination',
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    }
  },
  setup(props, { emit }) {
    const handlePrev = () => {
      emit('prev')
    }

    const handleNext = () => {
      emit('next')
    }

    return {
      handlePrev,
      handleNext
    }
  }
})
</script> 