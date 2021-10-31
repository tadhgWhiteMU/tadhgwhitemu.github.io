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
function ee(l, t, r) {
    const o = l.slice();
    return (
        (o[1] = t[r].title),
        (o[2] = t[r].summary),
        (o[3] = t[r].languages),
        (o[4] = t[r].tools),
        (o[5] = t[r].slug),
        o
    );
}
function te(l) {
    let t,
        r,
        o,
        i = l[1] + "",
        p,
        _,
        n,
        e,
        f,
        s,
        E,
        g = l[3].join(", ") + "",
        H,
        U,
        w,
        y,
        z,
        B,
        A = l[4].join(", ") + "",
        I,
        D,
        L,
        F = l[2] + "",
        M,
        G,
        b,
        K,
        N,
        O;
    return {
        c() {
            (t = d("li")),
                (r = d("h2")),
                (o = d("a")),
                (p = k(i)),
                (n = S()),
                (e = d("p")),
                (f = d("span")),
                (s = k("Language(s)")),
                (E = k(": ")),
                (H = k(g)),
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
            r = v(c, "H2", {});
            var Q = m(r);
            o = v(Q, "A", { "sveltekit:prefetch": !0, href: !0 });
            var V = m(o);
            (p = P(V, i)), V.forEach(h), Q.forEach(h), (n = q(c)), (e = v(c, "P", {}));
            var R = m(e);
            f = v(R, "SPAN", { class: !0 });
            var X = m(f);
            (s = P(X, "Language(s)")),
                X.forEach(h),
                (E = P(R, ": ")),
                (H = P(R, g)),
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
            j(o, "sveltekit:prefetch", ""),
                j(o, "href", (_ = J(l[5]))),
                j(f, "class", "font-semibold"),
                j(y, "class", "font-semibold"),
                j(b, "sveltekit:prefetch", ""),
                j(b, "href", (N = J(l[5]))),
                j(t, "class", "border-2 border-purple-600 dark_border-purple-400 p-2 max-w-prose");
        },
        m(u, c) {
            T(u, t, c),
                a(t, r),
                a(r, o),
                a(o, p),
                a(t, n),
                a(t, e),
                a(e, f),
                a(f, s),
                a(e, E),
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
                c & 1 && _ !== (_ = J(u[5])) && j(o, "href", _),
                c & 1 && g !== (g = u[3].join(", ") + "") && C(H, g),
                c & 1 && A !== (A = u[4].join(", ") + "") && C(I, A),
                c & 1 && F !== (F = u[2] + "") && C(M, F),
                c & 1 && N !== (N = J(u[5])) && j(b, "href", N);
        },
        d(u) {
            u && h(t);
        },
    };
}
function ne(l) {
    let t,
        r,
        o,
        i,
        p,
        _ = l[0],
        n = [];
    for (let e = 0; e < _.length; e += 1) n[e] = te(ee(l, _, e));
    return {
        c() {
            (t = S()), (r = d("h1")), (o = k("Projects")), (i = S()), (p = d("ul"));
            for (let e = 0; e < n.length; e += 1) n[e].c();
            this.h();
        },
        l(e) {
            re('[data-svelte="svelte-3erqqy"]', document.head).forEach(h),
                (t = q(e)),
                (r = v(e, "H1", {}));
            var s = m(r);
            (o = P(s, "Projects")), s.forEach(h), (i = q(e)), (p = v(e, "UL", { class: !0 }));
            var E = m(p);
            for (let g = 0; g < n.length; g += 1) n[g].l(E);
            E.forEach(h), this.h();
        },
        h() {
            (document.title = "Tadhg White | Projects"), j(p, "class", "py-2 space-y-2");
        },
        m(e, f) {
            T(e, t, f), T(e, r, f), a(r, o), T(e, i, f), T(e, p, f);
            for (let s = 0; s < n.length; s += 1) n[s].m(p, null);
        },
        p(e, [f]) {
            if (f & 1) {
                _ = e[0];
                let s;
                for (s = 0; s < _.length; s += 1) {
                    const E = ee(e, _, s);
                    n[s] ? n[s].p(E, f) : ((n[s] = te(E)), n[s].c(), n[s].m(p, null));
                }
                for (; s < n.length; s += 1) n[s].d(1);
                n.length = _.length;
            }
        },
        i: x,
        o: x,
        d(e) {
            e && h(t), e && h(r), e && h(i), e && h(p), oe(n, e);
        },
    };
}
async function fe({ fetch: l }) {
    return { props: { projects: await l("/projects.json").then((r) => r.json()) } };
}
function J(l) {
    return typeof l == "string" && l.startsWith("/projects") ? l.slice("/projects".length) : l;
}
function ce(l, t, r) {
    let { projects: o } = t;
    return (
        (l.$$set = (i) => {
            "projects" in i && r(0, (o = i.projects));
        }),
        [o]
    );
}
class ie extends se {
    constructor(t) {
        super();
        ae(this, t, ce, ne, le, { projects: 0 });
    }
}
export { ie as default, fe as load };
