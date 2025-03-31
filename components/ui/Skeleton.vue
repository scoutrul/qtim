<template>
  <div
    :class="[
      skeletonClasses.base,
      rounded ? skeletonClasses.rounded : '',
      className
    ]"
    :style="skeletonStyle"
  />
</template>

<script setup lang="ts">
import { ANIMATION, SKELETON } from '@/constants/animation'

interface Props {
  className?: string
  width?: string
  height?: string
  rounded?: boolean
  duration?: string
}

const props = withDefaults(defineProps<Props>(), {
  className: '',
  width: '100%',
  height: '1.5rem',
  rounded: false,
  duration: ANIMATION.DURATION.VERY_SLOW
})

const skeletonClasses = {
  base: 'skeleton-loading',
  rounded: 'rounded-lg'
} as const

const skeletonStyle = {
  width: props.width,
  height: props.height,
  '--skeleton-duration': props.duration,
  '--skeleton-gradient': `linear-gradient(
    90deg,
    ${SKELETON.GRADIENT.START} ${SKELETON.POSITIONS.START},
    ${SKELETON.GRADIENT.MIDDLE_START} ${SKELETON.POSITIONS.MIDDLE_START},
    ${SKELETON.GRADIENT.MIDDLE_END} ${SKELETON.POSITIONS.MIDDLE_END},
    ${SKELETON.GRADIENT.END} ${SKELETON.POSITIONS.END}
  )`
} as const
</script>

<style scoped>
.skeleton-loading {
  position: relative;
  overflow: hidden;
}

.skeleton-loading::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-100%);
  background-image: var(--skeleton-gradient);
  animation: shimmer var(--skeleton-duration) infinite;
  filter: invert(1);
}

@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
</style> 