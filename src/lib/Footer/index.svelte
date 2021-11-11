<script>
    export let links = [];
</script>

<footer
    class="flex flex-wrap flex-col md_flex-row md_justify-center content-center gap-4 py-5 px-10 bg-white dark_bg-black border-purple-600 dark_border-purple-400 border-t-4 mx-auto w-full md_w-4/5 font-bold text-purple-600 dark_text-purple-400"
>
    {#each links as link}
        {#if link.url}
            <p class="text-center">
                <a rel="external" href={link.url}>
                    {link.label}
                </a>
            </p>
        {:else}
            <p class="text-center">{link.label}</p>
        {/if}
    {/each}
</footer>
