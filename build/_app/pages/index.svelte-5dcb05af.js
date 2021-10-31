import {
    S as N,
    i as O,
    s as Q,
    e as j,
    t as R,
    k as L,
    c as y,
    a as E,
    g as W,
    d as l,
    n as q,
    b as T,
    f as b,
    F as i,
    h as B,
    P as V,
    I as D,
    J as X,
} from "../chunks/vendor-40075b22.js";
function G(f, t, r) {
    const a = f.slice();
    return (a[1] = t[r].title), (a[2] = t[r].summary), (a[3] = t[r].slug), a;
}
function K(f) {
    let t,
        r,
        a,
        u = f[1] + "",
        v,
        w,
        A,
        _,
        S = f[2] + "",
        P,
        m,
        p,
        d,
        H,
        k;
    return {
        c() {
            (t = j("li")),
                (r = j("h3")),
                (a = j("a")),
                (v = R(u)),
                (A = L()),
                (_ = j("p")),
                (P = R(S)),
                (m = L()),
                (p = j("a")),
                (d = R("Read More >>")),
                (k = L()),
                this.h();
        },
        l(c) {
            t = y(c, "LI", { class: !0 });
            var h = E(t);
            r = y(h, "H3", {});
            var I = E(r);
            a = y(I, "A", { "sveltekit:prefetch": !0, href: !0 });
            var s = E(a);
            (v = W(s, u)), s.forEach(l), I.forEach(l), (A = q(h)), (_ = y(h, "P", {}));
            var e = E(_);
            (P = W(e, S)),
                e.forEach(l),
                (m = q(h)),
                (p = y(h, "A", { "sveltekit:prefetch": !0, href: !0 }));
            var n = E(p);
            (d = W(n, "Read More >>")), n.forEach(l), (k = q(h)), h.forEach(l), this.h();
        },
        h() {
            T(a, "sveltekit:prefetch", ""),
                T(a, "href", (w = x(f[3]))),
                T(p, "sveltekit:prefetch", ""),
                T(p, "href", (H = x(f[3]))),
                T(t, "class", "border-2 border-purple-600 dark_border-purple-400 p-2 max-w-prose");
        },
        m(c, h) {
            b(c, t, h),
                i(t, r),
                i(r, a),
                i(a, v),
                i(t, A),
                i(t, _),
                i(_, P),
                i(t, m),
                i(t, p),
                i(p, d),
                i(t, k);
        },
        p(c, h) {
            h & 1 && u !== (u = c[1] + "") && B(v, u),
                h & 1 && w !== (w = x(c[3])) && T(a, "href", w),
                h & 1 && S !== (S = c[2] + "") && B(P, S),
                h & 1 && H !== (H = x(c[3])) && T(p, "href", H);
        },
        d(c) {
            c && l(t);
        },
    };
}
function Y(f) {
    let t,
        r,
        a,
        u,
        v,
        w,
        A,
        _,
        S,
        P,
        m,
        p,
        d,
        H,
        k,
        c,
        h,
        I = f[0],
        s = [];
    for (let e = 0; e < I.length; e += 1) s[e] = K(G(f, I, e));
    return {
        c() {
            (t = L()),
                (r = j("h1")),
                (a = R("Welcome")),
                (u = L()),
                (v = j("p")),
                (w =
                    R(`There are many pages like this on the internet, but this one is mine. Take a moment of your day
    to look around.`)),
                (A = L()),
                (_ = j("h2")),
                (S = R("Some things I've made")),
                (P = L()),
                (m = j("ul"));
            for (let e = 0; e < s.length; e += 1) s[e].c();
            (p = L()),
                (d = j("p")),
                (H = R("The full list can be found ")),
                (k = j("a")),
                (c = R("here")),
                (h = R(".")),
                this.h();
        },
        l(e) {
            V('[data-svelte="svelte-1i93y7k"]', document.head).forEach(l),
                (t = q(e)),
                (r = y(e, "H1", {}));
            var o = E(r);
            (a = W(o, "Welcome")), o.forEach(l), (u = q(e)), (v = y(e, "P", {}));
            var M = E(v);
            (w = W(
                M,
                `There are many pages like this on the internet, but this one is mine. Take a moment of your day
    to look around.`
            )),
                M.forEach(l),
                (A = q(e)),
                (_ = y(e, "H2", {}));
            var F = E(_);
            (S = W(F, "Some things I've made")),
                F.forEach(l),
                (P = q(e)),
                (m = y(e, "UL", { class: !0 }));
            var J = E(m);
            for (let C = 0; C < s.length; C += 1) s[C].l(J);
            J.forEach(l), (p = q(e)), (d = y(e, "P", {}));
            var U = E(d);
            (H = W(U, "The full list can be found ")),
                (k = y(U, "A", { "sveltekit:prefetch": !0, href: !0 }));
            var z = E(k);
            (c = W(z, "here")), z.forEach(l), (h = W(U, ".")), U.forEach(l), this.h();
        },
        h() {
            (document.title = "Tadhg White"),
                T(m, "class", "py-2 space-y-2"),
                T(k, "sveltekit:prefetch", ""),
                T(k, "href", "/projects");
        },
        m(e, n) {
            b(e, t, n),
                b(e, r, n),
                i(r, a),
                b(e, u, n),
                b(e, v, n),
                i(v, w),
                b(e, A, n),
                b(e, _, n),
                i(_, S),
                b(e, P, n),
                b(e, m, n);
            for (let o = 0; o < s.length; o += 1) s[o].m(m, null);
            b(e, p, n), b(e, d, n), i(d, H), i(d, k), i(k, c), i(d, h);
        },
        p(e, [n]) {
            if (n & 1) {
                I = e[0];
                let o;
                for (o = 0; o < I.length; o += 1) {
                    const M = G(e, I, o);
                    s[o] ? s[o].p(M, n) : ((s[o] = K(M)), s[o].c(), s[o].m(m, null));
                }
                for (; o < s.length; o += 1) s[o].d(1);
                s.length = I.length;
            }
        },
        i: D,
        o: D,
        d(e) {
            e && l(t),
                e && l(r),
                e && l(u),
                e && l(v),
                e && l(A),
                e && l(_),
                e && l(P),
                e && l(m),
                X(s, e),
                e && l(p),
                e && l(d);
        },
    };
}
async function g({ fetch: f }) {
    return {
        props: {
            projects: await f("/projects.json?" + new URLSearchParams({ limit: 5 })).then((r) =>
                r.json()
            ),
        },
    };
}
function x(f) {
    if (typeof f == "string" && f.startsWith("/projects")) return f.slice("/projects".length);
}
function Z(f, t, r) {
    let { projects: a } = t;
    return (
        (f.$$set = (u) => {
            "projects" in u && r(0, (a = u.projects));
        }),
        [a]
    );
}
class ee extends N {
    constructor(t) {
        super();
        O(this, t, Z, Y, Q, { projects: 0 });
    }
}
export { ee as default, g as load };
