<script context="module">
    /** @type {import('@sveltejs/kit').Load}*/
    export async function load({ fetch }) {
        const projects = await fetch("/projects.json").then((res) => res.json());

        return {
            props: {
                projects,
            },
        };
    }
</script>

<script>
    import Link from "$lib/Link/index.svelte";
    export let projects;
</script>

<svelte:head>
    <title>Tadhg White | Projects</title>
    <meta property="og:title" content="Projects" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary" />
</svelte:head>

<h1>Projects</h1>

<ul class="py-2 space-y-2">
    {#each projects as { title, summary, languages, tools, slug }}
        <li class="border-2 border-purple-600 dark_border-purple-400 p-2 max-w-prose">
            <h2><Link url={slug} {title}>{title}</Link></h2>
            <p><span class="font-semibold">Language(s)</span>: {languages.join(", ")}</p>
            <p><span class="font-semibold">Tools/Frameworks:</span> {tools.join(", ")}</p>
            <p>{summary}</p>
            <Link url={slug} {title}>Read More &gt;&gt;</Link>
        </li>
    {/each}
</ul>
