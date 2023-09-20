import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
// import { fileURLToPath, URL } from "url";
// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

import path from 'path'
const resolve = (dir) => path.join(__dirname, dir)

// import { fileURLToPath, URL } from "url";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers:[ElementPlusResolver()],
    }),
    Components({
      resolvers:[ElementPlusResolver()],
    })
  ],
  resolve: {
    alias: {
      // "@": fileURLToPath(new URL("./src", import.meta.url)),
      // '@': path.resolve(__dirname, '/src'),
      '@': resolve('src'),
      // comps: resolve('src/components'),
      // apis: resolve('src/apis'),
      // views: resolve('src/views'),
      // utils: resolve('src/utils'),
      // routes: resolve('src/router'),
      // styles: resolve('src/styles')
      // "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
