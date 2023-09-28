// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt', 'nuxt-bootstrap-icons', 'vue3-carousel-nuxt'],
  buildModules: ['@nuxt/axios'],
  css: ['bootstrap/dist/css/bootstrap.min.css', 'bootstrap-icons/font/bootstrap-icons.min.css'],
  devtools: { enabled: true }
})

//  modules: ['@vite-pwa/nuxt', '@pinia/nuxt', '@nuxt/ui', 'vue3-carousel-nuxt','nuxt-bootstrap-icons'],

// yarn add nuxt-bootstrap-icons
// yarn add bootstrap
// yarn add --dev sass sass-loader@latest
