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
    export let projects;
</script>

<svelte:head>
    <title>Tadhg White | Projects</title>
</svelte:head>

<h1>Projects</h1>

<ul class="py-2 space-y-2">
    {#each projects as { title, summary, languages, tools, slug }}
        <li class="border-2 border-purple-600 dark_border-purple-400 p-2 max-w-prose">
            <h2><a sveltekit:prefetch href={slug}>{title}</a></h2>
            <p><span class="font-semibold">Language(s)</span>: {languages.join(", ")}</p>
            <p><span class="font-semibold">Tools/Frameworks:</span> {tools.join(", ")}</p>
            <p>{summary}</p>
            <a sveltekit:prefetch href={slug}>Read More &gt;&gt;</a>
        </li>
    {/each}
</ul>
