// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: { preset: "netlify-edge" },
  css: ["~/assets/styles.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@hypernym/nuxt-gsap",
    "@tresjs/nuxt",
    "@hypernym/nuxt-anime",
  ],
  gsap: {
    composables: true,
    provide: true,
    extraPlugins: {
      scrollTrigger: true,
    },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      titleTemplate: "Mazzar Web",
      htmlAttrs: {
        lang: "fr",
      },

      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "",
        },
        { hid: "language", name: "language", content: "French" },
        { hid: "revisit-after", name: "revisit-after", content: "1 days" },
        { name: "format-detection", content: "telephone=no" },
        // Open Graph / Facebook
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://mazzar.fr",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "",
        },
        // Twitter
        {
          hid: "twitter:card",
          property: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter:url",
          property: "twitter:url",
          content: "https://mazzar.fr.",
        },
        {
          hid: "twitter:title",
          property: "twitter:title",
          content: "",
        },
        {
          hid: "twitter:description",
          property: "twitter:description",
          content: "",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "~/public/favicon.ico" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      ],
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  //nitro: { preset: "netlify-edge" },
});
