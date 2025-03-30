<script setup lang="ts">
import CircleButton from '@/components/ui/CircleButton.vue'

const emit = defineEmits<{
  click: []
}>();

const handleClick = () => {
  emit('click')
}
</script>

<template>
  <div class="flex justify-center items-center my-10">
    <CircleButton 
      text="Go" 
      :size="120" 
      @click="handleClick"
    />
  </div>
</template> 