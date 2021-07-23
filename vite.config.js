import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';
import url from 'url';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svelte()],
    resolve: {
        alias: {
            '@': path.resolve(
                path.dirname(url.fileURLToPath(import.meta.url)),
                'src'
            ),
        },
    },
});
