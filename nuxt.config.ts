// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/test-utils/module',
    '@nuxthub/core',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/html-validator',
    '@nuxtjs/seo',
    '@nuxtjs/sitemap',
    'nuxt-schema-org',
    'nuxt-link-checker',
    'nuxt-og-image'
  ],
  ssr: true,
  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'NuxtStarter',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern",
        },
      }
    }
  }
})