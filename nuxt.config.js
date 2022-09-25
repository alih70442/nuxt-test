import { defineNuxtConfig } from "@nuxt/bridge";

export default defineNuxtConfig({
  bridge: {
    vite: true,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {},
      },
    },
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: [],

  modules: [],

  pwa: {
    manifest: {
      lang: "en",
    },
  },

  build: {
    postcss: {
      plugins: {},
    },

    transpile: [],
  },
});
