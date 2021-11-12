<script>
    export let url = "";
    export let title = "";
    export let isExternal = false;
</script>

{#if isExternal}
    <a href="{url}" title="{title}" referrerpolicy="no-referrer" target="_blank" rel="external noopener">
        <slot />
    </a>
{:else}
    <a sveltekit:prefetch href="{url}" title="{title}">
        <slot />
    </a>
{/if}
