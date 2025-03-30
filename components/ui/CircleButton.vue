<script setup lang="ts">
defineProps<{
  text: string;
  size?: number;
  color?: string;
  textColor?: string;
}>();

defineEmits<{
  click: []
}>();
</script>

<template>
  <div 
    class="flex justify-center items-center rounded-full cursor-pointer transition-transform hover:scale-105"
    :style="{
      width: `${size || 50}px`,
      height: `${size || 50}px`,
      backgroundColor: color === 'black' || !color ? '#000' : color
    }"
    @click="$emit('click')"
  >
    <span 
      class="font-sans"
      :class="textColor === 'white' || !textColor ? 'text-white' : 'text-black'"
      :style="{
        fontSize: `${(size || 50) * 0.24}px`
      }"
    >
      {{ text }}
    </span>
  </div>
</template> 