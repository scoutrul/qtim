<script setup lang="ts">
import type { ColorName } from '@/types/colors'

interface Props {
  color?: ColorName
}

const props = withDefaults(defineProps<Props>(), {
  color: 'black'
})
</script>

<template>
  <div :class="`font-display text-logo font-bold text-${color}`">
    <slot>QTIM</slot>
  </div>
</template> 