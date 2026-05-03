import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // مهم لـ GitHub Pages: المشروع يُنشر داخل /kaijishop/
  // إذا نشرت لاحقاً على دومين مباشر (kaijishop.com) اجعلها '/'
  base: '/kaijishop/',
  plugins: [react()],
})
