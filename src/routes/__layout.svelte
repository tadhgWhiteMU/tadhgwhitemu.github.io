<script context="module">
    import navbarLinks from "$lib/Config/navbarLinks.json";
    import footerLinks from "$lib/Config/footerLinks.json";

    /** @type {import('@sveltejs/kit').Load}*/
    /* export async function load() {
        return {
            props: {
                navbarLinks,
                footerLinks,
            },
        };
    } */
</script>

<script>
    import "../app.css";

    import NavBar from "$lib/NavBar/index.svelte";
    import Footer from "$lib/Footer/index.svelte";

    /* export let navbarLinks = [];
    export let footerLinks = []; */
</script>

<div class="flex flex-col h-auto min-h-screen bg-purple-600 dark_bg-purple-400">
    <NavBar links={navbarLinks} />
    <main
        class="bg-white dark_bg-black mx-auto w-full md_w-4/5 py-4 flex-grow px-5 sm_px-10 lg_px-20 xl_px-36 2xl_px-48"
    >
        <slot />
    </main>
    <Footer links={footerLinks} />
</div>
