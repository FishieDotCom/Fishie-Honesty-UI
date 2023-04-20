import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
  	server: {
    		host: true,
    		port: 5173,
		strictPort: true,
		hmr: {
            		clientPort: 5173,
			port: 5173
        	},
  	}
});

