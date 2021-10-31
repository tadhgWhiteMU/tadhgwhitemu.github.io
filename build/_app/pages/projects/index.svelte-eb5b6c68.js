import {
    S as se,
    i as ae,
    s as le,
    e as d,
    t as k,
    k as S,
    c as v,
    a as m,
    g as P,
    d as h,
    n as q,
    b as j,
    f as T,
    F as a,
    h as C,
    P as re,
    I as x,
    J as oe,
} from "../../chunks/vendor-40075b22.js";
function ee(o, t, l) {
    const r = o.slice();
    return (
        (r[1] = t[l].title),
        (r[2] = t[l].summary),
        (r[3] = t[l].languages),
        (r[4] = t[l].tools),
        (r[5] = t[l].slug),
        r
    );
}
function te(o) {
    let t,
        l,
        r,
        i = o[1] + "",
        p,
        _,
        n,
        e,
        f,
        s,
        g,
        E = o[3].join(", ") + "",
        H,
        U,
        w,
        y,
        z,
        B,
        A = o[4].join(", ") + "",
        I,
        D,
        L,
        F = o[2] + "",
        M,
        G,
        b,
        K,
        N,
        O;
    return {
        c() {
            (t = d("li")),
                (l = d("h2")),
                (r = d("a")),
                (p = k(i)),
                (n = S()),
                (e = d("p")),
                (f = d("span")),
                (s = k("Language(s)")),
                (g = k(": ")),
                (H = k(E)),
                (U = S()),
                (w = d("p")),
                (y = d("span")),
                (z = k("Tools/Frameworks:")),
                (B = S()),
                (I = k(A)),
                (D = S()),
                (L = d("p")),
                (M = k(F)),
                (G = S()),
                (b = d("a")),
                (K = k("Read More >>")),
                (O = S()),
                this.h();
        },
        l(u) {
            t = v(u, "LI", { class: !0 });
            var c = m(t);
            l = v(c, "H2", {});
            var Q = m(l);
            r = v(Q, "A", { "sveltekit:prefetch": !0, href: !0 });
            var V = m(r);
            (p = P(V, i)), V.forEach(h), Q.forEach(h), (n = q(c)), (e = v(c, "P", {}));
            var R = m(e);
            f = v(R, "SPAN", { class: !0 });
            var X = m(f);
            (s = P(X, "Language(s)")),
                X.forEach(h),
                (g = P(R, ": ")),
                (H = P(R, E)),
                R.forEach(h),
                (U = q(c)),
                (w = v(c, "P", {}));
            var W = m(w);
            y = v(W, "SPAN", { class: !0 });
            var Y = m(y);
            (z = P(Y, "Tools/Frameworks:")),
                Y.forEach(h),
                (B = q(W)),
                (I = P(W, A)),
                W.forEach(h),
                (D = q(c)),
                (L = v(c, "P", {}));
            var Z = m(L);
            (M = P(Z, F)),
                Z.forEach(h),
                (G = q(c)),
                (b = v(c, "A", { "sveltekit:prefetch": !0, href: !0 }));
            var $ = m(b);
            (K = P($, "Read More >>")), $.forEach(h), (O = q(c)), c.forEach(h), this.h();
        },
        h() {
            j(r, "sveltekit:prefetch", ""),
                j(r, "href", (_ = J(o[5]))),
                j(f, "class", "font-semibold"),
                j(y, "class", "font-semibold"),
                j(b, "sveltekit:prefetch", ""),
                j(b, "href", (N = J(o[5]))),
                j(t, "class", "border-2 border-purple-600 dark_border-purple-400 p-2 max-w-prose");
        },
        m(u, c) {
            T(u, t, c),
                a(t, l),
                a(l, r),
                a(r, p),
                a(t, n),
                a(t, e),
                a(e, f),
                a(f, s),
                a(e, g),
                a(e, H),
                a(t, U),
                a(t, w),
                a(w, y),
                a(y, z),
                a(w, B),
                a(w, I),
                a(t, D),
                a(t, L),
                a(L, M),
                a(t, G),
                a(t, b),
                a(b, K),
                a(t, O);
        },
        p(u, c) {
            c & 1 && i !== (i = u[1] + "") && C(p, i),
                c & 1 && _ !== (_ = J(u[5])) && j(r, "href", _),
                c & 1 && E !== (E = u[3].join(", ") + "") && C(H, E),
                c & 1 && A !== (A = u[4].join(", ") + "") && C(I, A),
                c & 1 && F !== (F = u[2] + "") && C(M, F),
                c & 1 && N !== (N = J(u[5])) && j(b, "href", N);
        },
        d(u) {
            u && h(t);
        },
    };
}
function ne(o) {
    let t,
        l,
        r,
        i,
        p,
        _ = o[0],
        n = [];
    for (let e = 0; e < _.length; e += 1) n[e] = te(ee(o, _, e));
    return {
        c() {
            (t = S()), (l = d("h1")), (r = k("Projects")), (i = S()), (p = d("ul"));
            for (let e = 0; e < n.length; e += 1) n[e].c();
            this.h();
        },
        l(e) {
            re('[data-svelte="svelte-3erqqy"]', document.head).forEach(h),
                (t = q(e)),
                (l = v(e, "H1", {}));
            var s = m(l);
            (r = P(s, "Projects")), s.forEach(h), (i = q(e)), (p = v(e, "UL", { class: !0 }));
            var g = m(p);
            for (let E = 0; E < n.length; E += 1) n[E].l(g);
            g.forEach(h), this.h();
        },
        h() {
            (document.title = "Tadhg White | Projects"), j(p, "class", "py-2 space-y-2");
        },
        m(e, f) {
            T(e, t, f), T(e, l, f), a(l, r), T(e, i, f), T(e, p, f);
            for (let s = 0; s < n.length; s += 1) n[s].m(p, null);
        },
        p(e, [f]) {
            if (f & 1) {
                _ = e[0];
                let s;
                for (s = 0; s < _.length; s += 1) {
                    const g = ee(e, _, s);
                    n[s] ? n[s].p(g, f) : ((n[s] = te(g)), n[s].c(), n[s].m(p, null));
                }
                for (; s < n.length; s += 1) n[s].d(1);
                n.length = _.length;
            }
        },
        i: x,
        o: x,
        d(e) {
            e && h(t), e && h(l), e && h(i), e && h(p), oe(n, e);
        },
    };
}
async function fe({ fetch: o }) {
    return { props: { projects: await o("/projects.json").then((l) => l.json()) } };
}
function J(o) {
    if (typeof o == "string") return o.startsWith("/projects") ? o.slice("/projects".length) : o;
}
function ce(o, t, l) {
    let { projects: r } = t;
    return (
        (o.$$set = (i) => {
            "projects" in i && l(0, (r = i.projects));
        }),
        [r]
    );
}
class ie extends se {
    constructor(t) {
        super();
        ae(this, t, ce, ne, le, { projects: 0 });
    }
}
export { ie as default, fe as load };
