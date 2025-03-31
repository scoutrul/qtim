export const SKELETON_SIZES = {
  // Размеры для заголовков
  H1: 'h-8',
  H2: 'h-6',
  H3: 'h-5',

  // Размеры для текста
  TEXT_LARGE: 'h-5',
  TEXT_MEDIUM: 'h-4',
  TEXT_SMALL: 'h-3',

  // Размеры для изображений
  IMAGE_LARGE: 'h-96',
  IMAGE_MEDIUM: 'h-48',
  IMAGE_SMALL: 'h-32',

  // Ширины для текста
  WIDTH_FULL: 'w-full',
  WIDTH_3_4: 'w-3/4',
  WIDTH_1_2: 'w-1/2',
  WIDTH_1_3: 'w-1/3',
  WIDTH_5_6: 'w-5/6',
} as const

export const useSkeleton = () => {
  return {
    SKELETON_SIZES,
  }
}
