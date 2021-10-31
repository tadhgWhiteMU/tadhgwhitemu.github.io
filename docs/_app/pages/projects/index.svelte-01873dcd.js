import {
    S as le,
    i as ae,
    s as se,
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
    h as J,
    P as re,
    I as x,
    J as oe,
} from "../../chunks/vendor-40075b22.js";
function ee(c, t, s) {
    const r = c.slice();
    return (
        (r[1] = t[s].title),
        (r[2] = t[s].summary),
        (r[3] = t[s].languages),
        (r[4] = t[s].tools),
        (r[5] = t[s].slug),
        r
    );
}
function te(c) {
    let t,
        s,
        r,
        u = c[1] + "",
        i,
        _,
        o,
        e,
        f,
        l,
        g,
        E = c[3].join(", ") + "",
        H,
        W,
        w,
        A,
        z,
        B,
        L = c[4].join(", ") + "",
        I,
        D,
        y,
        F = c[2] + "",
        M,
        G,
        b,
        K,
        N,
        O;
    return {
        c() {
            (t = d("li")),
                (s = d("h2")),
                (r = d("a")),
                (i = k(u)),
                (o = S()),
                (e = d("p")),
                (f = d("span")),
                (l = k("Language(s)")),
                (g = k(": ")),
                (H = k(E)),
                (W = S()),
                (w = d("p")),
                (A = d("span")),
                (z = k("Tools/Frameworks:")),
                (B = S()),
                (I = k(L)),
                (D = S()),
                (y = d("p")),
                (M = k(F)),
                (G = S()),
                (b = d("a")),
                (K = k("Read More >>")),
                (O = S()),
                this.h();
        },
        l(p) {
            t = v(p, "LI", { class: !0 });
            var n = m(t);
            s = v(n, "H2", {});
            var Q = m(s);
            r = v(Q, "A", { "sveltekit:prefetch": !0, href: !0 });
            var V = m(r);
            (i = P(V, u)), V.forEach(h), Q.forEach(h), (o = q(n)), (e = v(n, "P", {}));
            var R = m(e);
            f = v(R, "SPAN", { class: !0 });
            var X = m(f);
            (l = P(X, "Language(s)")),
                X.forEach(h),
                (g = P(R, ": ")),
                (H = P(R, E)),
                R.forEach(h),
                (W = q(n)),
                (w = v(n, "P", {}));
            var C = m(w);
            A = v(C, "SPAN", { class: !0 });
            var Y = m(A);
            (z = P(Y, "Tools/Frameworks:")),
                Y.forEach(h),
                (B = q(C)),
                (I = P(C, L)),
                C.forEach(h),
                (D = q(n)),
                (y = v(n, "P", {}));
            var Z = m(y);
            (M = P(Z, F)),
                Z.forEach(h),
                (G = q(n)),
                (b = v(n, "A", { "sveltekit:prefetch": !0, href: !0 }));
            var $ = m(b);
            (K = P($, "Read More >>")), $.forEach(h), (O = q(n)), n.forEach(h), this.h();
        },
        h() {
            j(r, "sveltekit:prefetch", ""),
                j(r, "href", (_ = U(c[5]))),
                j(f, "class", "font-semibold"),
                j(A, "class", "font-semibold"),
                j(b, "sveltekit:prefetch", ""),
                j(b, "href", (N = U(c[5]))),
                j(t, "class", "border-2 border-purple-600 dark_border-purple-400 p-2 max-w-prose");
        },
        m(p, n) {
            T(p, t, n),
                a(t, s),
                a(s, r),
                a(r, i),
                a(t, o),
                a(t, e),
                a(e, f),
                a(f, l),
                a(e, g),
                a(e, H),
                a(t, W),
                a(t, w),
                a(w, A),
                a(A, z),
                a(w, B),
                a(w, I),
                a(t, D),
                a(t, y),
                a(y, M),
                a(t, G),
                a(t, b),
                a(b, K),
                a(t, O);
        },
        p(p, n) {
            n & 1 && u !== (u = p[1] + "") && J(i, u),
                n & 1 && _ !== (_ = U(p[5])) && j(r, "href", _),
                n & 1 && E !== (E = p[3].join(", ") + "") && J(H, E),
                n & 1 && L !== (L = p[4].join(", ") + "") && J(I, L),
                n & 1 && F !== (F = p[2] + "") && J(M, F),
                n & 1 && N !== (N = U(p[5])) && j(b, "href", N);
        },
        d(p) {
            p && h(t);
        },
    };
}
function ne(c) {
    let t,
        s,
        r,
        u,
        i,
        _ = c[0],
        o = [];
    for (let e = 0; e < _.length; e += 1) o[e] = te(ee(c, _, e));
    return {
        c() {
            (t = S()), (s = d("h1")), (r = k("Projects")), (u = S()), (i = d("ul"));
            for (let e = 0; e < o.length; e += 1) o[e].c();
            this.h();
        },
        l(e) {
            re('[data-svelte="svelte-3erqqy"]', document.head).forEach(h),
                (t = q(e)),
                (s = v(e, "H1", {}));
            var l = m(s);
            (r = P(l, "Projects")), l.forEach(h), (u = q(e)), (i = v(e, "UL", { class: !0 }));
            var g = m(i);
            for (let E = 0; E < o.length; E += 1) o[E].l(g);
            g.forEach(h), this.h();
        },
        h() {
            (document.title = "Tadhg White | Projects"), j(i, "class", "py-2 space-y-2");
        },
        m(e, f) {
            T(e, t, f), T(e, s, f), a(s, r), T(e, u, f), T(e, i, f);
            for (let l = 0; l < o.length; l += 1) o[l].m(i, null);
        },
        p(e, [f]) {
            if (f & 1) {
                _ = e[0];
                let l;
                for (l = 0; l < _.length; l += 1) {
                    const g = ee(e, _, l);
                    o[l] ? o[l].p(g, f) : ((o[l] = te(g)), o[l].c(), o[l].m(i, null));
                }
                for (; l < o.length; l += 1) o[l].d(1);
                o.length = _.length;
            }
        },
        i: x,
        o: x,
        d(e) {
            e && h(t), e && h(s), e && h(u), e && h(i), oe(o, e);
        },
    };
}
async function fe({ fetch: c }) {
    const t = await c("/projects.json").then((s) => s.json());
    return console.log(t), { props: { projects: t } };
}
function U(c) {
    return c;
}
function ce(c, t, s) {
    let { projects: r } = t;
    return (
        (c.$$set = (u) => {
            "projects" in u && s(0, (r = u.projects));
        }),
        [r]
    );
}
class ue extends le {
    constructor(t) {
        super();
        ae(this, t, ce, ne, se, { projects: 0 });
    }
}
export { ue as default, fe as load };
