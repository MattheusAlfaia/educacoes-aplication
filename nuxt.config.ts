// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt', 'nuxt-bootstrap-icons', 'vue3-carousel-nuxt'],
  buildModules: ['@nuxt/axios'],
  css: ['bootstrap/dist/css/bootstrap.min.css', 'bootstrap-icons/font/bootstrap-icons.min.css'],
  devtools: { enabled: false },
})
