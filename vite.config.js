import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://yosiak-alv.github.io//sportcity_landing_page/',
  plugins: [vue()],
})
