// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  future: {
    compatibilityVersion: 4
  },

  app: {
    head: {
      title: 'Nuxt 3 Minimal Starter', // change this title
      meta: [
        { name: 'description', content: 'This is a minimal starter for Nuxt 3' }
      ],
      style: [
        {
          children: `
          body {
            font-size: clamp(1rem, calc(1rem + 0.5vw), 1.5rem);
            color: oklch(90% 0 30);
            background-color: oklch(10% 0 30);
          }
          `
        }
      ]
    }
  },

  css: ['@/assets/styles/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  modules: ['@nuxtjs/i18n'],

  /* i18n
   * https://i18n.nuxtjs.org/docs/getting-started/usage
   */
  i18n: {
    locales: [
      { code: 'en', language: 'en-GB', name: 'English', file: 'en-GB.json' },
      { code: 'es', language: 'es-ES', name: 'Español', file: 'es-ES.json' }
    ],
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'en'
  },

  devtools: { enabled: false }
})
