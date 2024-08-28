import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  css: ['@/assets/css/tailwind.css','@/assets/css/global.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
