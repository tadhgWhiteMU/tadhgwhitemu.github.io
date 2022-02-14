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
    import { page } from "$app/stores";

    import NavBar from "$lib/NavBar/index.svelte";
    import Footer from "$lib/Footer/index.svelte";

    /* export let navbarLinks = [];
    export let footerLinks = []; */
</script>

<svelte:head>
    <meta property="og:url" content={"https://" + $page.host + $page.url.pathname} />
    <meta property="og:site_name" content="Tadhg White's Portifolio Site" />
</svelte:head>

<div class="flex flex-col h-auto min-h-screen bg-purple-600 dark_bg-purple-400">
    <NavBar links={navbarLinks} />
    <div class="bg-white dark_bg-black mx-auto w-full md_w-4/5 py-4 flex-grow px-5">
        <main class="max-w-max mx-auto">
            <slot />
        </main>
    </div>
    <Footer links={footerLinks} />
</div>
