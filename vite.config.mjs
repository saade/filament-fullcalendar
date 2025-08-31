import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    rollupOptions: {
      input: {
        'filament-fullcalendar': path.resolve(__dirname, 'resources/js/filament-fullcalendar.js'),
        'filament-fullcalendar.css': path.resolve(__dirname, 'resources/css/filament-fullcalendar.css'),
      },
      output: {
        entryFileNames: (chunkInfo) => {
          // Keep JS name stable: dist/filament-fullcalendar.js
          return `${chunkInfo.name}.js`
        },
        assetFileNames: (assetInfo) => {
          // Keep CSS name stable: dist/filament-fullcalendar.css
          if (assetInfo.name === 'filament-fullcalendar.css') return 'filament-fullcalendar.css'
          return '[name][extname]'
        },
      },
    },
  },
})

