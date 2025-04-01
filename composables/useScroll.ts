export const useScroll = () => {
  const scrollToTop = (behavior: ScrollBehavior = 'smooth') => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: behavior || 'smooth',
      })
    }, 0)
  }

  return {
    scrollToTop,
  }
}
