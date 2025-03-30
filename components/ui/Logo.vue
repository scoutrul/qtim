<script setup lang="ts">
import type { ColorName } from '@/types/colors'

interface Props {
  color?: ColorName
}

const props = withDefaults(defineProps<Props>(), {
  color: 'black'
})

defineEmits<{
  click: [event: MouseEvent]
}>()
</script>

<template>
  <div 
    :class="`font-display text-logo cursor-pointer font-bold text-${color}`" 
    @click="$emit('click', $event)"
  >
    <slot>QTIM</slot>
  </div>
</template> 