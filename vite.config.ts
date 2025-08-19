import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	base: '/our-wedding-invitation/',
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern',
				additionalData: `
				@use '/src/styles/variables.scss' as *;
				`
			}
		}
	}
});
