// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: {
    dirs: ["~/components"],
  },
  imports: {
    dirs: ["stores"],
  },
  devtools: { enabled: true },
  modules: [
    "cc-ui",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
    "@nuxt/devtools",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@vue-macros/nuxt"
  ],
  routeRules: {
    "/**": {
      headers: {
        "cache-control":
          "s-maxage=300, maxage=300, type=public, stale-while-revalidate=90000, stale-if-error=90000",
      },
    },
  },
  tailwindcss: {
    config: {
      content: [
        "./node_modules/@lautr/initium-nuxt-design/**/*.vue",
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
      ],
      darkMode: "class",
      theme: {
        extend: {},
      },
      plugins: [],
    },
    viewer: false,
  },
  typescript: {
    shim: false,
  },
  vite: {
    resolve: {
      preserveSymlinks: true,
    },
  },
});
