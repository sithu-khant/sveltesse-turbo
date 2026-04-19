import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import devtoolsJson from 'vite-plugin-devtools-json';

export default defineConfig({
  server: {
    cors: false
  },
  plugins: [tailwindcss(), sveltekit(), devtoolsJson()]
});
