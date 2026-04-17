import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    cors: false // disable Vite's built-in CORS setting
  },
  plugins: [sveltekit()]
});
