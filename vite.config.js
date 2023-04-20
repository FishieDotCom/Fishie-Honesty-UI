import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import dns from 'dns'

dns.setDefaultResultOrder('verbatim')


export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
  	server: {
    port: 5183,
    strictPort: true
  	}
});

