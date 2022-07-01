/*
 * @Date: 2022-07-01 13:15:06
 * @LastEditors: YueAo7
 * @LastEditTime: 2022-07-01 19:54:20
 * @FilePath: \Noelle-Nuxt3-SLS\nuxt.config.ts
 */
import { defineNuxtConfig } from "nuxt";
const isProd = process.env.NODE_ENV === "production";
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  env: {
    STATIC_URL: isProd ? `https://${process.env.STATIC_URL}` : "",
  },
  app:{
buildAssetsDir:"/love/"
  },
  alias:{
  },
  build: {
    // analyze:true,
    transpile: [
      "naive-ui",
      "vueuc",
      "@css-render/vue3-ssr",
      "@juggle/resize-observer",
    ],
    publicPath:process.env.STATIC_URL,
  },
  css:[
    "@/assets/css/public/index.less"
  ],
  
  vite: {
    optimizeDeps: {
      include: ["date-fns-tz/esm/formatInTimeZone"],
      
    },
    build:{
      rollupOptions:{
        output:{
          assetFileNames:`at/lbrary/[name].[ext]`
        }
      }
    }
    
  },
});
