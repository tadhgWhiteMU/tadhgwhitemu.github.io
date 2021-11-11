import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";

// const dev = process.env.NODE_ENV === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: [".svelte", ...mdsvexConfig.extensions],

    kit: {
        // hydrate the <div id="svelte"> element in src/app.html
        target: "#svelte",
        paths: {
            // base: dev ? "" : "/tadhgwhitemu.github.io",
            base: ""
        },
        adapter: adapter(),
    },

    preprocess: [
        preprocess({
            postcss: true,
        }),
        mdsvex(mdsvexConfig),
    ],
};

export default config;