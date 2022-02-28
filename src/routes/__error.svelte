<script context="module">
    /** @type {import("@sveltejs/kit").ErrorLoad} */
    export function load({ error, status }) {
        return {
            props: {
                error,
                status,
            },
        };
    }
</script>

<script>
    import Link from "$lib/Link/index.svelte";
    export let error;
    export let status;
</script>

<svelte:head>
    <title>Tadhg White | {status}</title>
</svelte:head>

<h1>An Error Occurred</h1>

<div class="border-purple-600 dark_border-purple-400 border-4 bg-yellow-100 p-1 sm_p-3 tracking-widest mb-3 font-mono text-gray-800">
    <p class="font-medium p-0">
        {error.name} ({status})
    </p>
    <p class="p-0">
        {error.message}
    </p>
</div>

<p>
    This isn't supposed to happen! A problem of some sort occurred while trying to load a page and
    an error response was received.
</p>

<p>
    As this is a purely static site, hosted on GitHub Pages, with no form of telemetry or
    server-side logging, I have no idea that anything has gone wrong. As such, I would be <em
        >extremely</em
    > grateful if you could open an Issue on this site's GitHub repo telling me about it.
</p>

<p>
    You can create a bug report <Link
        url="https://github.com/tadhgWhiteMU/tadhgwhitemu.github.io/issues"
        title="Repo Issues"
        isExternal={true}>here</Link
    >. It would help me if you described:
</p>

<ul class="pb-3">
    <li class="list-disc list-inside">what browser you're using</li>
    <li class="list-disc list-inside">what Operating System you're on</li>
    <li class="list-disc list-inside">what page you were on, or trying to go to, when the error happened</li>
    <li class="list-disc list-inside">the error code and message in the yellow box at the top of the page</li>
</ul>

<p>
    If you can't post a bug report on GitHub, I can also be reached on LinkedIn via the link at the
    bottom of the page.
</p>
