import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { fileURLToPath } from 'node:url'

export default defineConfig({
    root: './src',
    plugins: [react()],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: fileURLToPath(new URL('./src', import.meta.url)),
            },
            {
                find: '@components',
                replacement: fileURLToPath(new URL('./src/components', import.meta.url)),
            },
            {
                find: '@pages',
                replacement: fileURLToPath(new URL('./src/pages', import.meta.url)),
            },
            {
                find: '@styles',
                replacement: fileURLToPath(new URL('./src/styles', import.meta.url)),
            },
            {
                find: '@assets',
                replacement: fileURLToPath(new URL('./src/assets', import.meta.url)),
            },
        ],
    },
})
