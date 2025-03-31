export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'small' | 'xs' | 'tiny'
export type FontWeight = 'light' | 'normal' | 'medium' | 'bold'
export type HtmlTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

export interface TypographyProps {
  text: string
  variant?: TypographyVariant
  tag?: HtmlTag
  customClass?: string
  html?: boolean
  weight?: FontWeight
  color?: string
} 