export const GRID = {
  GAP: {
    X: '2rem',
    Y: '1.5rem',
  },
  COLUMNS: {
    MOBILE: 1,
    TABLET: 2,
    DESKTOP: 3,
    LARGE: 4,
  },
} as const

export const GRID_CLASSES = {
  BASE: 'grid gap-y-6 gap-x-8',
  MOBILE: 'grid-cols-1',
  TABLET: 'sm:grid-cols-2',
  DESKTOP: 'lg:grid-cols-3',
  LARGE: 'xl:grid-cols-4',
} as const
