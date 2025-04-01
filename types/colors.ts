export interface Color {
  hex: string
  name: string
}

export const grayscaleColors: Color[] = [
  { hex: '#000000', name: 'Black' },
  { hex: '#1A1A1A', name: 'Dark Gray' },
  { hex: '#808080', name: 'Gray' },
  { hex: '#F5F5F5', name: 'Light Gray' },
  { hex: '#F3F3F3', name: 'Pagination Background' },
]

export const accentColors: Color[] = [
  { hex: '#98FFB0', name: 'Mint' },
  { hex: '#7B4EA8', name: 'Purple' },
  { hex: '#E6D5FF', name: 'Lavender' },
  { hex: '#0066FF', name: 'Blue' },
]

export type ColorName = 'black' | 'white' | 'gray' | 'dark-gray' | 'light-gray' | 'purple-500'
