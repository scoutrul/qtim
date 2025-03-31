export const ANIMATION = {
  DURATION: {
    FAST: '0.2s',
    MEDIUM: '0.3s',
    SLOW: '0.5s',
    VERY_SLOW: '2s',
  },
  TIMING: {
    LINEAR: 'linear',
    EASE: 'ease',
    EASE_IN: 'ease-in',
    EASE_OUT: 'ease-out',
    EASE_IN_OUT: 'ease-in-out',
  },
} as const

export const SKELETON = {
  GRADIENT: {
    START: 'rgba(255, 255, 255, 0)',
    MIDDLE_START: 'rgba(255, 255, 255, 0.2)',
    MIDDLE_END: 'rgba(255, 255, 255, 0.5)',
    END: 'rgba(255, 255, 255, 0)',
  },
  POSITIONS: {
    START: '0%',
    MIDDLE_START: '20%',
    MIDDLE_END: '60%',
    END: '100%',
  },
} as const
