# Order of Operations

## Initialise Repo

Make new (blank!!!) repo on GitHub:

```bash
 # In my case: tadhgwhitemu.github.io
<lowercased_username>.github.io
```

Make a directory and:

```bash
# For me: git clone git@github.com:tadhgWhiteMU/tadhgwhitemu.github.io.git
git clone git@github.com:<username>/<lowercased_username>.github.io.git
```

## Initialise App

To set up:

```bash
npm init svelte@next

Directory not empty. Continue? Yes
Which Svelte app template? Skeleton project
Use TypeScript? No
Add ESLint for code linting? Yes
Add Prettier for code formatting? Yes
```

## Update Configuration

Then change the `.prettierc` to:

```json
{
    "useTabs": false,
    "singleQuote": false,
    "trailingComma": "es5",
    "printWidth": 100,
    "tabWidth": 4
}
```

Likewise for `eslintrc.cjs`:

```js
module.exports = {
    root: true,
    extends: ["eslint:recommended", "prettier"],
    plugins: ["svelte3"],
    overrides: [{ files: ["*.svelte"], processor: "svelte3/svelte3" }],
    parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest,
    },
    env: {
        browser: true,
        es2017: true,
        node: true,
    },
};
```

(Setting `ecmaVersion` to too-low a version will cause ESLint to complain about the `import.meta` used elsewhere. I used `latest` to be safe.)

Also, in `.gitignore` remove the line that says `/build`.

Now for some Svelte-specific stuff:

```bash
npx svelte-add@latest tailwindcss
npx svelte-add@latest mdsvex
```

Update `tailwind.config.cjs`:

```js
const config = {
    mode: "jit",
    purge: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {},
    },
    plugins: [],
    darkMode: "media",
    separator: "_",
};

module.exports = config;
```

Update `mdsvex.config.js`:

```js
const config = {
    extensions: [".svelte.md", ".md", ".svx", ".svelte"],

    smartypants: {
        quotes: true,
        ellipses: true,
        dashes: "oldschool",
    },

    /*
    // This won't work until other stuff is set up
    layout: {
        project: "./src/lib/Layouts/project.svelte",
    },
*/

    remarkPlugins: [],
    rehypePlugins: [],
};

export default config;
```

And now, finally, it's time to tweak `svelte.config.js`:

```js
import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import preprocess from "svelte-preprocess";
// import adapter from "@sveltejs/adapter-static";

const dev = process.env.NODE_ENV === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: [".svelte", ...mdsvexConfig.extensions],

    kit: {
        // hydrate the <div id="svelte"> element in src/app.html
        target: "#svelte",
        paths: {
            base: "",
        },
        //        adapter: adapter()
    },

    preprocess: [
        preprocess({
            postcss: true,
        }),
        mdsvex(mdsvexConfig),
    ],
};

export default config;
```

Note: the documentation for `adapter-static` seems to suggest setting `base` to the url of the site when deploying to Github Pages. This was a resounding failure when I tried it, but leaving it blank seems to work.

## Install Packages

Provided there're no errors, run:

```bash
npm i
npm i -D @sveltejs/adapter-static@next
npm i -D gh-pages
```

## Ensure `.nojekyll`

Add the following under `"scripts"` in `package.json`:

```json
"scripts": {
    "postbuild": "[ -d ./build ] && touch ./build/.nojekyll",
    "predeploy": "npm run build",
    "deploy": "npx gh-pages -d build -t true"
}
```

The first will run after `npm run build` and create a `.nojekyll` file in the `/build` directory if one doesn't already exist. The conditional ensures that it doesn't do anything if `/build` doesn't exist. The second will call `npm run build` before deployment. And the last invoked `gh-pages`, which copies the contents of the `/build` directory to a Git branch called `gh-pages`, which then gets pushed to Github. (`-t true` ensures it includes files beginning with `.`, like `.nojekyll` when doing so.)

Note: this assumes that Bash is being used and that `touch` is available.

## Actually Create the Website

This is the hard/fun part. :)

## Push to GitHub

After everything's ready, ensure everything has been added and committed, then:

```bash
git push # optional, if you want your source-code up alongside the built site
npm run deploy
```

## Publish!

On Github: repo `Settings` > `Pages` > `Source` > `Branch` > `gh-pages (root)`.

Presumably there is also an explicit "please publish my site" option that'll be fairly self-evident.

Note: repo needs to be Public, so double-check for private info before `push`ing or `deploy`ing!
