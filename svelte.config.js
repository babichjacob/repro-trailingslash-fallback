import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: "200.html",
		}),

		// Only necessary to demonstrate that index.html is created successfully
		prerender: {
			default: true,
		},

		// Change this to another option to get a 200.html file with content
		trailingSlash: "always",
	}
};

export default config;
