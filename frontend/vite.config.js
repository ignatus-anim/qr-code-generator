import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../frontend/server/dist', // Output the build files to the server/build directory
    emptyOutDir: true,         // Clear the output directory before building
  },
})
