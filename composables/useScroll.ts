export const useScroll = () => {
  const scrollToTop = (behavior: ScrollBehavior = 'smooth') => {
    window.scrollTo({ top: 0, behavior })
  }

  return {
    scrollToTop
  }
} 