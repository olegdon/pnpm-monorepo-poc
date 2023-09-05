// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
      'cc-ui'
    ],
    css: [
      '@/assets/styles.css',
    ],
})
