<template>
  <component
    :is="tag"
    :class="[TYPOGRAPHY.BASE, variantClasses, customClass, fontWeightClass, colorClass]"
  >
    <slot v-if="$slots.default" />
    <template v-else>{{ text }}</template>
  </component>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import type { TypographyProps } from '@/types/typography'
  import { TYPOGRAPHY, VARIANT_TO_TAG } from '@/constants/typography'

  const props = withDefaults(defineProps<TypographyProps>(), {
    variant: 'body',
    tag: 'p',
    customClass: '',
    html: false,
    weight: 'normal',
    color: '',
  })

  const variantClasses = computed(
    () => TYPOGRAPHY.VARIANTS[props.variant.toUpperCase() as keyof typeof TYPOGRAPHY.VARIANTS]
  )
  const fontWeightClass = computed(
    () => TYPOGRAPHY.WEIGHTS[props.weight.toUpperCase() as keyof typeof TYPOGRAPHY.WEIGHTS]
  )
  const colorClass = computed(() => (props.color ? `text-${props.color}` : ''))

  const tag = computed(() => {
    if (props.tag !== 'p') return props.tag
    return VARIANT_TO_TAG[props.variant] || 'p'
  })
</script>
