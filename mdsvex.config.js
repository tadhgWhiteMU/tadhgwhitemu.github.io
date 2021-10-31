const config = {
    extensions: [".svelte.md", ".md", ".svx", ".svelte"],

    smartypants: {
        quotes: true,
        ellipses: true,
        dashes: "oldschool",
    },

    // This won't work until some other stuff is set up
    layout: {
        project: "./src/lib/Layouts/project.svelte",
    },

    remarkPlugins: [],
    rehypePlugins: [],
};

export default config;
