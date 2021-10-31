import {
    S as le,
    i as se,
    s as ae,
    e as d,
    t as k,
    k as y,
    c as v,
    a as m,
    g as P,
    d as h,
    n as S,
    b as j,
    f as T,
    F as s,
    h as W,
    P as oe,
    I as x,
    J as re,
} from "../../chunks/vendor-40075b22.js";
function ee(r, e, a) {
    const o = r.slice();
    return (
        (o[1] = e[a].title),
        (o[2] = e[a].summary),
        (o[3] = e[a].languages),
        (o[4] = e[a].tools),
        (o[5] = e[a].slug),
        o
    );
}
function te(r) {
    let e,
        a,
        o,
        i = r[1] + "",
        p,
        _,
        n,
        t,
        f,
        l,
        g,
        E = r[3].join(", ") + "",
        H,
        C,
        q,
        w,
        J,
        z,
        A = r[4].join(", ") + "",
        I,
        B,
        L,
        F = r[2] + "",
        M,
        D,
        b,
        G,
        N,
        K;
    return {
        c() {
            (e = d("li")),
                (a = d("h2")),
                (o = d("a")),
                (p = k(i)),
                (n = y()),
                (t = d("p")),
                (f = d("span")),
                (l = k("Language(s)")),
                (g = k(": ")),
                (H = k(E)),
                (C = y()),
                (q = d("p")),
                (w = d("span")),
                (J = k("Tools/Frameworks:")),
                (z = y()),
                (I = k(A)),
                (B = y()),
                (L = d("p")),
                (M = k(F)),
                (D = y()),
                (b = d("a")),
                (G = k("Read More >>")),
                (K = y()),
                this.h();
        },
        l(u) {
            e = v(u, "LI", { class: !0 });
            var c = m(e);
            a = v(c, "H2", {});
            var O = m(a);
            o = v(O, "A", { "sveltekit:prefetch": !0, href: !0 });
            var Q = m(o);
            (p = P(Q, i)), Q.forEach(h), O.forEach(h), (n = S(c)), (t = v(c, "P", {}));
            var R = m(t);
            f = v(R, "SPAN", { class: !0 });
            var V = m(f);
            (l = P(V, "Language(s)")),
                V.forEach(h),
                (g = P(R, ": ")),
                (H = P(R, E)),
                R.forEach(h),
                (C = S(c)),
                (q = v(c, "P", {}));
            var U = m(q);
            w = v(U, "SPAN", { class: !0 });
            var X = m(w);
            (J = P(X, "Tools/Frameworks:")),
                X.forEach(h),
                (z = S(U)),
                (I = P(U, A)),
                U.forEach(h),
                (B = S(c)),
                (L = v(c, "P", {}));
            var Y = m(L);
            (M = P(Y, F)),
                Y.forEach(h),
                (D = S(c)),
                (b = v(c, "A", { "sveltekit:prefetch": !0, href: !0 }));
            var Z = m(b);
            (G = P(Z, "Read More >>")), Z.forEach(h), (K = S(c)), c.forEach(h), this.h();
        },
        h() {
            j(o, "sveltekit:prefetch", ""),
                j(o, "href", (_ = $(r[5]))),
                j(f, "class", "font-semibold"),
                j(w, "class", "font-semibold"),
                j(b, "sveltekit:prefetch", ""),
                j(b, "href", (N = $(r[5]))),
                j(e, "class", "border-2 border-purple-600 dark_border-purple-400 p-2 max-w-prose");
        },
        m(u, c) {
            T(u, e, c),
                s(e, a),
                s(a, o),
                s(o, p),
                s(e, n),
                s(e, t),
                s(t, f),
                s(f, l),
                s(t, g),
                s(t, H),
                s(e, C),
                s(e, q),
                s(q, w),
                s(w, J),
                s(q, z),
                s(q, I),
                s(e, B),
                s(e, L),
                s(L, M),
                s(e, D),
                s(e, b),
                s(b, G),
                s(e, K);
        },
        p(u, c) {
            c & 1 && i !== (i = u[1] + "") && W(p, i),
                c & 1 && _ !== (_ = $(u[5])) && j(o, "href", _),
                c & 1 && E !== (E = u[3].join(", ") + "") && W(H, E),
                c & 1 && A !== (A = u[4].join(", ") + "") && W(I, A),
                c & 1 && F !== (F = u[2] + "") && W(M, F),
                c & 1 && N !== (N = $(u[5])) && j(b, "href", N);
        },
        d(u) {
            u && h(e);
        },
    };
}
function ne(r) {
    let e,
        a,
        o,
        i,
        p,
        _ = r[0],
        n = [];
    for (let t = 0; t < _.length; t += 1) n[t] = te(ee(r, _, t));
    return {
        c() {
            (e = y()), (a = d("h1")), (o = k("Projects")), (i = y()), (p = d("ul"));
            for (let t = 0; t < n.length; t += 1) n[t].c();
            this.h();
        },
        l(t) {
            oe('[data-svelte="svelte-3erqqy"]', document.head).forEach(h),
                (e = S(t)),
                (a = v(t, "H1", {}));
            var l = m(a);
            (o = P(l, "Projects")), l.forEach(h), (i = S(t)), (p = v(t, "UL", { class: !0 }));
            var g = m(p);
            for (let E = 0; E < n.length; E += 1) n[E].l(g);
            g.forEach(h), this.h();
        },
        h() {
            (document.title = "Tadhg White | Projects"), j(p, "class", "py-2 space-y-2");
        },
        m(t, f) {
            T(t, e, f), T(t, a, f), s(a, o), T(t, i, f), T(t, p, f);
            for (let l = 0; l < n.length; l += 1) n[l].m(p, null);
        },
        p(t, [f]) {
            if (f & 1) {
                _ = t[0];
                let l;
                for (l = 0; l < _.length; l += 1) {
                    const g = ee(t, _, l);
                    n[l] ? n[l].p(g, f) : ((n[l] = te(g)), n[l].c(), n[l].m(p, null));
                }
                for (; l < n.length; l += 1) n[l].d(1);
                n.length = _.length;
            }
        },
        i: x,
        o: x,
        d(t) {
            t && h(e), t && h(a), t && h(i), t && h(p), re(n, t);
        },
    };
}
async function fe({ fetch: r }) {
    const e = await r("/projects.json").then((a) => a.json());
    return console.log(e), { props: { projects: e } };
}
function $(r) {
    if (typeof r == "string")
        if (r.startsWith("projects")) {
            let e = r.slice("projects".length);
            return console.log(`Sliced: ${e}`), e;
        } else return console.log(`Unsliced: ${reply}`), r;
}
function ce(r, e, a) {
    let { projects: o } = e;
    return (
        (r.$$set = (i) => {
            "projects" in i && a(0, (o = i.projects));
        }),
        [o]
    );
}
class ie extends le {
    constructor(e) {
        super();
        se(this, e, ce, ne, ae, { projects: 0 });
    }
}
export { ie as default, fe as load };
