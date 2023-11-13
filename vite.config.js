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
      $homepage: path.resolve(__dirname, './src/lib/homepage'),
      $genres: path.resolve(__dirname, './src/lib/homepage/genres'),
      $most_sold: path.resolve(__dirname, './src/lib/homepage/most_sold'),
      $news: path.resolve(__dirname, './src/lib/homepage/news'),
      $search: path.resolve(__dirname, './src/lib/homepage/search'),
      $data: path.resolve(__dirname, './src/data'),
      $stores: path.resolve(__dirname, './src/stores'),
      $utils: path.resolve(__dirname, './src/lib/utils'),
      $library: path.resolve(__dirname, './src/lib/library'),
      $perfil: path.resolve(__dirname, './src/lib/perfil')
    }
  }
})
