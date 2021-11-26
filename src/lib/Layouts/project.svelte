<script>
    import { page } from "$app/stores";

    // TODO These are `undefined` at buildtime, apparently
    const { host, path } = page;

    export let title = "";
    export let platforms = [];
    export let languages = [];
    export let tools = [];
    export let team = 1;
    export let role = "";
    export let image = {};
    export let skills = [];
    export let links = [];
    export let summary = "";
</script>

<svelte:head>
    <title>Tadhg White | {title}</title>
    <meta property="og:title" content={title} />
    <meta property="og:url" content={"https://" + host + path} />
    <meta property="og:type" content="article" />
    <meta property="og:description" content={summary} />
    <meta name="twitter:card" content="summary" />
</svelte:head>

<h1>{title}</h1>

{#if image["src"]}
    <img src={image["src"]} alt={image["alt"]} />
{/if}

{#if links.length}
    <div>
        {#each links as { name, addr }}
            <a href={addr}>{name}</a>
        {/each}
    </div>
{/if}

<div class="py-2">
    <h2>Project Details</h2>
    <ul class="border-2 border-purple-600 dark_border-purple-400 p-2 max-w-prose">
        {#if languages.length}
            <li>
                <h3>{languages.length > 1 ? "Languages" : "Language"}</h3>
                <p>{languages.join(", ")}</p>
            </li>
        {/if}

        {#if tools.length}
            <li>
                <h3>Tools and Frameworks</h3>
                <p>{tools.join(", ")}</p>
            </li>
        {/if}

        {#if platforms.length}
            <li>
                <h3>{platforms.length > 1 ? "Platforms" : "Platform"}</h3>
                <p>{platforms.join(", ")}</p>
            </li>
        {/if}

        <li>
            <h3>Team Size</h3>
            <p>{team}</p>
        </li>

        <li>
            <h3>Role</h3>
            <p>{role}</p>
        </li>
    </ul>
</div>

{#if skills.length}
    <div class="py-2">
        <h2>Skills Used</h2>
        <ul class="border-2 border-purple-600 dark_border-purple-400 p-2 max-w-prose">
            {#each skills as { name, desc }}
                <li>
                    <h3>{name}</h3>
                    <p>{desc}</p>
                </li>
            {/each}
        </ul>
    </div>
{/if}

<div class="py-2 body">
    <slot />
</div>
