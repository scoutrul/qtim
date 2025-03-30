<template>
  <div class="article-card p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-white border border-gray-100 hover:border-gray-200">
    <Typography :text="title" variant="h3" class="mb-3" />
    <Typography :text="description" variant="body" class="line-clamp-3" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Typography from '../ui/Typography.vue'

export default defineComponent({
  name: 'ArticleCard',
  components: {
    Typography
  },
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
})
</script> 