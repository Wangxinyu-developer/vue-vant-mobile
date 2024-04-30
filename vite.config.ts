import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { URL, fileURLToPath } from 'node:url';
import { loadEnv } from './src/utils/viteBuild';

const { VITE_PORT, VITE_OPEN, VITE_PUBLIC_PATH } = loadEnv();

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	root: process.cwd(),
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	base: process.env.NODE_ENV === 'production' ? './' : './',
	server: {
		host: '0.0.0.0',
		port: VITE_PORT,
		open: VITE_OPEN,
	},
	build: {
		outDir: 'dist',
		chunkSizeWarningLimit: 1500,
		rollupOptions: {
			output: {
				chunkFileNames: 'assets/js/[name]-[hash].js',
				entryFileNames: 'assets/js/[name]-[hash].js',
				assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
			},
		},
	},
});
