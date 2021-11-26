/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ query }) {
    const modules = import.meta.glob("./*.{md, svelte.md}");

    let projectPromises = [];
    const limit = Number(query.get("limit") ?? Infinity);

    if (Number.isNaN(limit)) {
        return {
            status: 400,
        };
    }

    for (let [path, resolver] of Object.entries(modules)) {
        const slug = `/projects/${path.match(/([\w-]+)\.(svelte\.md|md)/i)?.[1] ?? null}/`;
        const promise = resolver().then((post) => ({
            slug,
            ...post.metadata,
        }));

        projectPromises.push(promise);
    }

    let projects = await Promise.all(projectPromises);
    projects.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

    return {
        body: projects.slice(0, limit),
    };
}
