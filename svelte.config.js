import pack from 'vite-imagetools';
const { imagetools } = pack;
import path from 'path';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		files: {
			assets: 'src/static'
		},
		vite: {
			resolve: {
				alias: {
					$lib: path.resolve('src/lib'),
					$components: path.resolve('src/lib/components'),
					$static: path.resolve('src/static')
				}
			},
			plugins: [imagetools({ force: true })]
		}
	}
};

export default config;
