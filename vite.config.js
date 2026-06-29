import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages phục vụ project site tại https://<user>.github.io/<repo>/
// nên cần `base` = '/<repo>/'. Workflow deploy sẽ set biến BASE_PATH;
// khi chạy local (npm run dev) thì mặc định '/'.
export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_PATH || '/',
})
