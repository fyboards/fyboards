export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "dashboard",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  target: "static",
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  //components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    /* https://go.nuxtjs.dev/content
    '@nuxt/content',*/
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
      name: "fyboard dashboard",
      short_name: "fyboard",
      description:
        "dashboard, admin, tools, helper, web, monitor, statistic, cms,",
      lang: "en-US",
      dir: "ltr",
      theme_color: "#414f57",
      start_url: "/",
      background_color: "#000",
      display: "standalone",
      orientation: "portrait-primary",
    },
    meta: {
      theme_color: "#000",
      charset: "utf-8",
      "theme-colors": "#000",
      description: "",
    },
    start_url: "/",
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
