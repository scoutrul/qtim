<script setup lang="ts">
import { ANIMATION, SKELETON } from '@/constants/animation'

interface Props {
  className?: string
  aspectRatio?: string
  rounded?: boolean
  duration?: string
  width?: string
  height?: string
}

const props = withDefaults(defineProps<Props>(), {
  className: '',
  aspectRatio: '16/9',
  rounded: true,
  duration: ANIMATION.DURATION.VERY_SLOW,
  width: undefined,
  height: undefined
})

const skeletonClasses = {
  base: 'skeleton-loading bg-gray-300 dark:bg-gray-700',
  rounded: 'rounded-lg'
} as const

const skeletonStyle = {
  aspectRatio: props.width && props.height ? undefined : props.aspectRatio,
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

<style scoped>
.skeleton-loading {
  position: relative;
  overflow: hidden;
  display: block;
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