import { repositoryName } from './slicemachine.config.json'

const rem = (px: number) => (px ? `${(px / 16).toFixed(7)}rem` : "0rem");

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: true,

  app: {
    head: {
      title: 'Prismic + Nuxt Minimal Starter',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    }
  },

  css: [
    '~/styles/global.css',
  ],

  modules: ['@nuxtjs/prismic', '@nuxtjs/tailwindcss', 'vue3-carousel-nuxt'],

  prismic: {
    endpoint: 'tute-et-tonne',
    preview: '/api/preview',
    clientConfig: {
      routes: [
        {
          type: 'page',
          path: '/:uid',
        },
        {
          type: 'coup_de_coeur',
          path: '/coups-de-coeur/:uid',
        },
        {
          type: 'hebergement',
          path: '/hebergement/:uid',
        },
        {
          type: 'coups_de_coeur',
          path: '/coups-de-coeur',
        },
        {
          type: 'page_contact',
          path: '/contact',
        },
        {
          type: 'faq_et_avis',
          path: '/faq-et-avis',
        },
        {
          type: 'histoire',
          path: '/notre-histoire',
        },
        {
          type: 'ou_sommes_nous',
          path: '/ou-sommes-nous',
        },
        {
          type: 'page',
          uid: 'home',
          path: '/',
        },
        {
          type: 'accueil',
          path: '/',
        },
      ]
    }
  },

  tailwindcss: {
    config: {
      content: [
        './app/**/*.{js,ts,vue}',
        './slices/**/*.{js,ts,vue}'
      ],
      theme: {
        fontFamily: {
          sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
          selfish: ['Selfish', 'ui-serif'],
          helvetica: ['Helvetica Neue', 'ui-sans-serif'],
        },
        spacing: {
          xs: rem(25),
          s: rem(75),
          l: rem(120),
          xl: rem(150),
          '1/2xl': rem(200),
          '2xl': rem(300),
          0: 0,
          2: rem(2),
          4: rem(4),
          6: rem(6),
          8: rem(8),
          16: rem(16),
          24: rem(24),
          32: rem(32),
          45: rem(45),
          64: rem(64),
          100: rem(100),
          128: rem(128),
          200: rem(200),
        },
        boxShadow: {
          'l': '0 4px 16px rgba(0, 0, 0, 0.15)',
          'xl': '0 45px 80px rgba(0, 10, 33, 0.05)',
        },
        borderRadius: {
          'lg': '0.5rem',
          'xl': '0.75rem',
          '3xl': '1.5rem',
          '4xl': '3rem',
          'full': '9999px',
        }
      },
    }
  }
})