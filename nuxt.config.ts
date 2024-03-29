import { repositoryName } from './slicemachine.config.json'

const rem = (px: number) => (px ? `${(px / 16).toFixed(7)}rem` : "0rem");

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: true,

  app: {
    head: {
      title: 'Tute et Tonne',
      htmlAttrs: {
        lang: 'fr',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        { hid: 'description', name: 'description', content: 'Un séjour à la hauteur de vos envies, des vacances atypiques sur mesure (location de gîte, yourte et teardrop).' },
        { hid: 'og:description', name: 'og:description', content: 'Un séjour à la hauteur de vos envies, des vacances atypiques sur mesure (location de gîte, yourte et teardrop).' },
        { hid: 'og:image', property: 'og:image', content: 'https://images.prismic.io/tute-et-tonne/6585f2d6531ac2845a26e877_logo.png?auto=compress,format' },
        { hid: "twitter:title", name: "twitter:title", content: 'Tute et Tonne' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Un séjour à la hauteur de vos envies, des vacances atypiques sur mesure (location de gîte, yourte et teardrop).' },
        { hid: "twitter:image", name: "twitter:image", content: 'https://images.prismic.io/tute-et-tonne/6585f2d6531ac2845a26e877_logo.png?auto=compress,format' },
        { hid: "twitter:card", name: "twitter:card", content: 'summary_large_image' },
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
          '3xl': rem(400),
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
          'none': '0 0 #0000'
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