import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: [".svelte", ...mdsvexConfig.extensions],

    kit: {
        // hydrate the <div id="svelte"> element in src/app.html
        // ...`target` was also removed. Why wasn't this error reached first?
        // target: "#svelte",
        // `config.kit.host` was removed at some point, apparently
        // host: "tadhgwhitemu.github.io",
        paths: {
            base: "",
        },
        adapter: adapter(),
        trailingSlash: "always",
    },

    preprocess: [
        preprocess({
            postcss: true,
        }),
        mdsvex(mdsvexConfig),
    ],
};

export default config;
