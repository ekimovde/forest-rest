import {normalizePath} from 'vite';
import {resolve} from 'pathe';

export default defineNuxtConfig({
  srcDir: 'src',
  ssr: false,
  devtools: {
    enabled: true,
  },
  compatibilityDate: '2025-07-12',
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'motion-v/nuxt'
  ],
  css: [
    '~/assets/styles/main.scss',
  ],
  app: {
    head: {
      title: 'Forest Rest',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Forest Rest' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' }
      ]
    }
  },
  typescript: {
    strict: false,
    typeCheck: false
  },
  vite: {
    vue: {
      script: {
        defineModel: false,
        propsDestructure: false
      }
    },
  },
  alias: {
    '~base': normalizePath(resolve(__dirname, './src')),
  }
})
