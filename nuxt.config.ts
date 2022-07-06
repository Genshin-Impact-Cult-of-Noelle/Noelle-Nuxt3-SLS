/*
 * @Date: 2022-07-01 13:15:06
 * @LastEditors: YueAo7
 * @LastEditTime: 2022-07-06 16:38:57
 * @FilePath: \Noelle-Nuxt3-SLS\nuxt.config.ts
 */
import { defineNuxtConfig } from "nuxt";
const isProd = process.env.NODE_ENV === "production";
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    buildAssetsDir: "/love/",
  
  },
  alias: {
  },
  build: {
    // analyze:true,
    transpile: [
      "naive-ui",
      "vueuc",
      "@css-render/vue3-ssr",
      "@juggle/resize-observer",
    ],
    
  },
  css: [
    "@/assets/css/public/index.less"
  ],

  vite: {
    optimizeDeps: {
      include: ["date-fns-tz/esm/formatInTimeZone"],
    },
    build: {
      rollupOptions: {
        output: {
          assetFileNames: `at/lbrary/[name].[ext]`
        }
      }
    }

  },
});
