import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        includePaths: [path.resolve(__dirname, 'src/styles')]
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});


// Other way if needed:
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//     },
//   },
//   css: {
//     preprocessorOptions: {
//       scss: {
//         additionalData: '@import "@/styles/_variables.scss";'
//       }
//     }
//   }
// })