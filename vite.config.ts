import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Components({
            dts: false,
            resolvers: [AntDesignVueResolver()],
        }),
    ],
    server: {
        port: 3000,
        host: true,
        proxy: {
            '/api': {
                target: 'http://localhost:3001',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
    envDir: path.resolve(__dirname, './src/environment/'),
    resolve: {
        alias: {
            '@': path.resolve('./src'),
            '@shared/*': path.resolve('./src/shared/*'),
            '@core/*': path.resolve('./src/core/*'),
        },
    },
});
