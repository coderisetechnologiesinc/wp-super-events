import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
export default defineConfig({
  plugins: [vue()],
  define: { 'process.env.NODE_ENV': JSON.stringify('production') },
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  build: {
    outDir: 'dist', emptyOutDir: false, cssCodeSplit: false, target: 'es2020',
    lib: { entry: 'src/main.js', formats: ['iife'], name: 'ServvEventsV2', fileName: () => 'servv-events-v2.js', cssFileName: 'servv-events-v2' },
  },
  test: { environment: 'node', include: ['src/**/*.test.js'] },
});
