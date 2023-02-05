export default {
  // vite: {
  //   build: true,
  // },

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt3",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/css/main.css",
    "ant-design-vue/dist/antd.css",
    "@/assets/css/global.scss",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/antd-ui",
    "@/plugins/i18n.js",
    "@/plugins/vee-validate.js",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxt/image", "@nuxt/postcss8"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  router: {
    middleware: ["i18n"],
  },
};
