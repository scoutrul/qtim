<script setup lang="ts">
defineProps({
  iconSrc: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: 'icon'
  },
  size: {
    type: Number,
    default: 32
  },
  iconSize: {
    type: Number,
    default: 16
  },
  color: {
    type: String,
    default: 'black'
  }
})
</script>

<template>
  <div 
    class="flex justify-center items-center rounded-full cursor-pointer"
    :style="{
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: color === 'black' ? '#000' : color
    }"
    @click="$emit('click')"
  >
    <img 
      :src="iconSrc" 
      :alt="alt" 
      :style="{
        width: `${iconSize}px`,
        height: `${iconSize}px`
      }"
    >
  </div>
</template> 