import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import vue from '@astrojs/vue'
import storePlugin from './src/vue/plugins/storePlugin'

export default defineConfig({
  integrations: [ 
    vue({
      appEntrypoint: '/src/pages/_app',
      plugins: [storePlugin],
    }),
    ,tailwind()]
})
