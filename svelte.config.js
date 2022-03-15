import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: "200.html", // "200/index.html" doesn't resolve this either
		}),

		// Only necessary to demonstrate that index.html, and other pages if they existed, will be created with the expected content
		prerender: {
			default: true,
		},

		// Change this to another option to get a 200.html file with content
		trailingSlash: "always",
	}
};

export default config;
