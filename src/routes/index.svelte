<script context="module">
    /** @type {import('@sveltejs/kit').Load}*/
    export async function load({ fetch }) {
        const projects = await fetch("/projects.json?" + new URLSearchParams({ limit: 5 })).then(
            (res) => res.json()
        );

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
    <title>Tadhg White</title>
</svelte:head>

<h1>Welcome</h1>

<p>
    There are many pages like this on the internet, but this one is mine. Take a moment of your day
    to look around.
</p>

<h2>Some things I've made</h2>
<ul class="py-2 space-y-2">
    {#each projects as { title, summary, slug }}
        <li class="border-2 border-purple-600 dark_border-purple-400 p-2 max-w-prose">
            <h3>
                <a sveltekit:prefetch href={slug}>{title}</a>
            </h3>
            <p>{summary}</p>
            <a sveltekit:prefetch href={slug}>Read More &gt;&gt;</a>
        </li>
    {/each}
</ul>

<p>
    The full list can be found <a sveltekit:prefetch href="/projects">here</a>.
</p>
