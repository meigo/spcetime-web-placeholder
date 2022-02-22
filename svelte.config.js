import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    preprocess({
      postcss: true,
      preserve: ['js'],
    }),
  ],
  kit: {
    target: '#svelte', // hydrate the <div id="svelte"> element in src/app.html
    adapter: adapter(),
    //vite: () => ({ build: { emptyOutDir: true } }), //https://github.com/sveltejs/kit/issues/1044
  },
};

export default config;
