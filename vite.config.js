import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['redux-logger'], // Burada 'redux-logger' modülünü dışa bağımlılık olarak ekliyoruz
    },
  },
});
