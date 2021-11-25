<script>
    export let url = "";
    export let title = "";
    export let isExternal = false;
</script>

{#if isExternal}
    <a href={url} {title} referrerpolicy="no-referrer" target="_blank" rel="external noopener">
        <slot />
    </a>
{:else}
    <a sveltekit:prefetch href={url} {title}>
        <slot />
    </a>
{/if}
