import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ui from '@nuxt/ui/vite'
import sUI from '@sounds-designed/sound-ui/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ui({
      ui: {
        colors: {
          primary: 'green',
          neutral: 'slate'
        }
      },
      autoImport: {
        dirs: ['../nuxt/app/composables'],
        imports: ['vue']
      },
      components: {
        dirs: ['../nuxt/app/components']
      }
    }),
    sUI({
      ui: {
        colors: {
          primary: 'green',
          neutral: 'slate'
        }
      },
      autoImport: {
        dirs: ['../nuxt/app/composables'],
        imports: ['vue']
      },
      components: {
        dirs: ['../nuxt/app/components']
      }
    })
  ]
})
