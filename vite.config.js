import { defineConfig } from 'vite';  
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0"
  },
  plugins: [svelte()],
  resolve: {
    alias: {
      $header: path.resolve(__dirname, './src/lib/header'),
      $inicio: path.resolve(__dirname, './src/lib/inicio'),
      $genres: path.resolve(__dirname, './src/lib/inicio/genres'),
      $most_sold: path.resolve(__dirname, './src/lib/inicio/most_sold'),
      $news: path.resolve(__dirname, './src/lib/inicio/news'),
      $search: path.resolve(__dirname, './src/lib/inicio/search'),
      $data: path.resolve(__dirname, './src/data'),
      $stores: path.resolve(__dirname, './src/stores')
    }
  }
})
