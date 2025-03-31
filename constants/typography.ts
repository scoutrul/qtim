export const TYPOGRAPHY = {
  BASE: 'font-sans leading-relaxed',
  VARIANTS: {
    H1: 'text-4xl tracking-tight text-gray-900',
    H2: 'text-3xl tracking-tight text-gray-800',
    H3: 'text-2xl tracking-tight text-gray-800',
    H4: 'text-xl text-gray-700',
    H5: 'text-lg text-gray-700',
    BODY: 'text-base text-gray-600',
    SMALL: 'text-sm text-gray-500',
    TINY: 'text-xs text-gray-400',
    XS: 'text-[13px] text-gray-600'
  },
  WEIGHTS: {
    LIGHT: 'font-light',
    NORMAL: 'font-normal',
    MEDIUM: 'font-medium',
    BOLD: 'font-bold'
  }
} as const

export const VARIANT_TO_TAG: Record<string, string> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body: 'p',
  small: 'p',
  xs: 'p',
  tiny: 'span'
} as const 