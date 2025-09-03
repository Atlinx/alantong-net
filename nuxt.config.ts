import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxt/content'
  ],
  app: {
    head: {
      title: "Alan Tong",
      meta: [
        { property: 'og:title', content: "Alan Tong's Website" },
        { property: 'og:description', content: 'Personal website containing my CV.' },
        { property: 'og:image', content: 'https://alantong.net/images/preview.webp' },
        { property: 'og:url', content: 'https://alantong.net' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'https://alantong.net/images/preview.webp' },
        { name: 'twitter:title', content: "Alan Tong's Website" },
        { name: 'twitter:description', content: 'Personal website containing my CV.' },
        { name: 'twitter:image', content: 'https://alantong.net/images/preview.webp' },
      ],
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    }
  },
  css: [
    "~/assets/css/tailwind.css"
  ],
  vite: {
    plugins: [
      tailwindcss()
    ]
  },
  fonts: {
    defaults: {
      weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
})