<script>
    import { page } from "$app/stores";

    export let links = [];

    let curr = $page.path;

    $: curr = $page.path;

    let toggle = true;

    function handleClick() {
        toggle = !toggle;
    }
</script>

<nav
    class="flex flex-wrap items-center justify-between p-5 bg-white dark_bg-black border-purple-600 dark_border-purple-400 border-b-4 mx-auto w-full md_w-4/5"
>
    <button
        class="inline-block align-middle border-4 border-purple-600 dark_border-purple-400 p-3 w-11/12 mx-auto h-15 font-bold text-purple-600 dark_text-purple-400 hover_text-purple-400 dark_hover_text-purple-600 hover_bg-purple-600 dark_hover_bg-purple-400 sm_hidden"
        on:click={handleClick}
    >
        {toggle ? "Show" : "Hide"}
    </button>
    <div
        class="{toggle
            ? `hidden sm_flex`
            : `flex`} flex-col sm_flex-row sm_items-center sm_justify-between w-full sm_w-auto text-center font-bold mt-5 sm_mt-0 sm_space-x-5 gap-1"
    >
        {#each links as link}
            <a
                sveltekit:prefetch
                href={link.url}
                title={link.title}
                class="inline-block align-middle p-3 mx-auto w-11/12 sm_w-32 sm_mx-0 h-16 font-bold text-purple-600 dark_text-purple-400 hover_text-purple-400 dark_hover_text-purple-600 hover_bg-purple-600 dark_hover_bg-purple-400 active_bg-purple-400 dark_active_bg-purple-600 {curr ==
                link.url
                    ? `border-purple-600 dark_border-purple-400`
                    : `border-transparent`} hover_border-purple-600 dark_hover_border-purple-400 border-4"
            >
                {@html link.label}
            </a>
        {/each}
    </div>
</nav>
