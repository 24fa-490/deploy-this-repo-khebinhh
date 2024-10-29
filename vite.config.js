import mkcert from "vite-plugin-mkcert"
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';


export default defineConfig({
	plugins: [sveltekit(),
		mkcert()
	],
	server: {
		host: true,
		port: 5173,
		https: false,
		proxy: {}, // essential to avoid "can't use Symbol where you need a string" error
	},
})
