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
    '@nuxtjs/seo',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'motion-v/nuxt'
  ],
  css: [
    '~/assets/styles/main.scss',
  ],
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    buildAssetsDir: '/assets/',
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
  },
  site: {
    url: 'https://ekimovde.github.io',
    name: 'Forest Rest',
    description: 'Ресторан Forest Rest - изысканная кухня в атмосфере природы. Доставка блюд высокой кухни, меню из свежих продуктов.',
    defaultLocale: 'ru',
  },
  seo: {
    redirectToCanonicalSiteUrl: true,
  },
  sitemap: {
    strictNuxtContentPaths: true,
    autoLastmod: true,
    exclude: [
      '/admin/**',
    ],
  },
  ogImage: {
    enabled: false, // Отключено, так как требует SSR
    fonts: [
      'Nunito:400',
      'Nunito:600',
      'Nunito:700',
    ],
  },
  robots: {
    enabled: true,
  },
  schemaOrg: {
    identity: {
      type: 'Restaurant',
      name: 'Forest Rest',
      url: 'https://ekimovde.github.io/forest-rest/',
      logo: '/src/assets/images/logo.png',
      sameAs: [
        // Добавьте ссылки на социальные сети, если есть
      ],
    }
  }
});
