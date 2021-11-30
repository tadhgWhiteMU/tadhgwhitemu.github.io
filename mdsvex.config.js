const config = {
    extensions: [".svelte.md", ".md", ".svx", ".svelte"],

    smartypants: {
        quotes: true,
        ellipses: true,
        dashes: "oldschool",
    },

    layout: {
        project: "./src/lib/Layouts/project.svelte",
        about: "./src/lib/Layouts/about.svelte",
    },

    remarkPlugins: [],
    rehypePlugins: [],
};

export default config;
