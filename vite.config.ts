import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path = require('path')
import { importStylus } from './plugins/stylus-import'
import { voiceCheck } from './plugins/check'

export default defineConfig({
  plugins: [vue(), importStylus(path.join(__dirname, './setting/color.styl')), voiceCheck()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      setting: path.resolve(__dirname, './setting')
    }
  }
})
