/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import styleX from 'vite-plugin-stylex'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), styleX()],
  test: {
    include: ['src/**/*.test.{js,ts,tsx}'],
    globals: true, //https://vitest.dev/guide/migration.html#globals-as-a-default
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts'
  }
})
