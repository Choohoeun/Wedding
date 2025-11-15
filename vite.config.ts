import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	assetsInclude: ['**/*.JPG', '**/*.JPEG'],
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
