import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';


export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	server: {
    port: 5173,
    https: true,
    hmr: {
        host: "honestyui.sar.sh/",
        port: 5173,
        protocol: "wss",
    }
},
});

