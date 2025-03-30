<script setup lang="ts">
defineProps<{
  text: string;
  size?: number;
  color?: string;
  textColor?: string;
  halfCircle?: boolean;
  verticalOffset?: string;
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
      backgroundColor: color === 'black' || !color ? '#000' : color,
      ...(halfCircle ? {
        position: 'relative',
        overflow: 'visible',
        transform: `translateY(${verticalOffset || '48%'})`,
      } : {})
    }"
    @click="$emit('click')"
  >
    <span 
      class="font-sans font-medium"
      :class="textColor === 'white' || !textColor ? 'text-white' : 'text-black'"
      :style="{
        fontSize: `${(size || 50) * 0.24}px`,
        ...(halfCircle ? { transform: 'translateY(-25%)' } : {})
      }"
    >
      {{ text }}
    </span>
  </div>
</template> 