import { resolve } from 'path'
import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '~',
        replacement: resolve('src')
      }
    ]
  },
  plugins: [
    Unocss({
      /* options */
    })
  ]
})
