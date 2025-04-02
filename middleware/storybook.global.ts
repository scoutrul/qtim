export default defineNuxtRouteMiddleware((to) => {
  if (to.path === '/storybook' || to.path === '/storybook/') {
    return navigateTo('/storybook/index.html', { external: true })
  }
})
