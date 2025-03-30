<template>
  <component 
    :is="tag" 
    :class="[
      'font-sans leading-relaxed',
      {
        'text-4xl font-bold tracking-tight text-gray-900': variant === 'h1',
        'text-3xl font-bold tracking-tight text-gray-800': variant === 'h2',
        'text-2xl font-semibold tracking-tight text-gray-800': variant === 'h3',
        'text-xl font-medium text-gray-700': variant === 'h4',
        'text-lg font-medium text-gray-700': variant === 'h5',
        'text-base text-gray-600': variant === 'body',
        'text-sm text-gray-500': variant === 'small',
        'text-xs text-gray-400': variant === 'tiny'
      },
      customClass,
      fontWeightClass,
      colorClass
    ]"
    v-if="html"
    v-html="text"
  ></component>
  <component 
    :is="tag" 
    :class="[
      'font-sans leading-relaxed',
      {
        'text-4xl font-bold tracking-tight text-gray-900': variant === 'h1',
        'text-3xl font-bold tracking-tight text-gray-800': variant === 'h2',
        'text-2xl font-semibold tracking-tight text-gray-800': variant === 'h3',
        'text-xl font-medium text-gray-700': variant === 'h4',
        'text-lg font-medium text-gray-700': variant === 'h5',
        'text-base text-gray-600': variant === 'body',
        'text-sm text-gray-500': variant === 'small',
        'text-xs text-gray-400': variant === 'tiny'
      },
      customClass,
      fontWeightClass,
      colorClass
    ]"
    v-else
  >
    {{ text }}
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Варианты типографики
const validVariants = ['h1', 'h2', 'h3', 'h4', 'h5', 'body', 'small', 'tiny'] as const;
type TypographyVariant = typeof validVariants[number];

// Пропсы с строгой типизацией
interface Props {
  text: string;
  variant?: TypographyVariant;
  tag?: string;
  customClass?: string;
  html?: boolean;
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  color?: string;
}

// Значения по умолчанию
const props = withDefaults(defineProps<Props>(), {
  variant: 'body',
  tag: 'p',
  customClass: '',
  html: false,
  weight: 'normal',
  color: ''
});

// Вычисляем правильный HTML-тег на основе варианта, если он не задан явно
const tag = computed(() => {
  if (props.tag !== 'p') return props.tag;
  
  switch (props.variant) {
    case 'h1': return 'h1';
    case 'h2': return 'h2';
    case 'h3': return 'h3';
    case 'h4': return 'h4';
    case 'h5': return 'h5';
    default: return 'p';
  }
});

const fontWeightClass = computed(() => {
  const weights = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  };
  return weights[props.weight];
});

const colorClass = computed(() => {
  if (!props.color) return '';
  return `text-${props.color}`;
});
</script> 