import {
    S as te,
    i as ae,
    s as le,
    e as d,
    t as k,
    k as q,
    c as v,
    a as m,
    g as P,
    d as c,
    n as w,
    b as j,
    f as T,
    F as l,
    h as J,
    P as se,
    I as $,
    J as re,
} from "../../chunks/vendor-40075b22.js";
function x(h, t, s) {
    const r = h.slice();
    return (
        (r[1] = t[s].title),
        (r[2] = t[s].summary),
        (r[3] = t[s].languages),
        (r[4] = t[s].tools),
        (r[5] = t[s].slug),
        r
    );
}
function ee(h) {
    let t,
        s,
        r,
        p = h[1] + "",
        i,
        _,
        o,
        e,
        f,
        a,
        g,
        E = h[3].join(", ") + "",
        H,
        U,
        A,
        L,
        W,
        z,
        S = h[4].join(", ") + "",
        I,
        B,
        y,
        F = h[2] + "",
        M,
        D,
        b,
        G,
        N,
        K;
    return {
        c() {
            (t = d("li")),
                (s = d("h2")),
                (r = d("a")),
                (i = k(p)),
                (o = q()),
                (e = d("p")),
                (f = d("span")),
                (a = k("Language(s)")),
                (g = k(": ")),
                (H = k(E)),
                (U = q()),
                (A = d("p")),
                (L = d("span")),
                (W = k("Tools/Frameworks:")),
                (z = q()),
                (I = k(S)),
                (B = q()),
                (y = d("p")),
                (M = k(F)),
                (D = q()),
                (b = d("a")),
                (G = k("Read More >>")),
                (K = q()),
                this.h();
        },
        l(u) {
            t = v(u, "LI", { class: !0 });
            var n = m(t);
            s = v(n, "H2", {});
            var O = m(s);
            r = v(O, "A", { "sveltekit:prefetch": !0, href: !0 });
            var Q = m(r);
            (i = P(Q, p)), Q.forEach(c), O.forEach(c), (o = w(n)), (e = v(n, "P", {}));
            var R = m(e);
            f = v(R, "SPAN", { class: !0 });
            var V = m(f);
            (a = P(V, "Language(s)")),
                V.forEach(c),
                (g = P(R, ": ")),
                (H = P(R, E)),
                R.forEach(c),
                (U = w(n)),
                (A = v(n, "P", {}));
            var C = m(A);
            L = v(C, "SPAN", { class: !0 });
            var X = m(L);
            (W = P(X, "Tools/Frameworks:")),
                X.forEach(c),
                (z = w(C)),
                (I = P(C, S)),
                C.forEach(c),
                (B = w(n)),
                (y = v(n, "P", {}));
            var Y = m(y);
            (M = P(Y, F)),
                Y.forEach(c),
                (D = w(n)),
                (b = v(n, "A", { "sveltekit:prefetch": !0, href: !0 }));
            var Z = m(b);
            (G = P(Z, "Read More >>")), Z.forEach(c), (K = w(n)), n.forEach(c), this.h();
        },
        h() {
            j(r, "sveltekit:prefetch", ""),
                j(r, "href", (_ = h[5])),
                j(f, "class", "font-semibold"),
                j(L, "class", "font-semibold"),
                j(b, "sveltekit:prefetch", ""),
                j(b, "href", (N = h[5])),
                j(t, "class", "border-2 border-purple-600 dark_border-purple-400 p-2 max-w-prose");
        },
        m(u, n) {
            T(u, t, n),
                l(t, s),
                l(s, r),
                l(r, i),
                l(t, o),
                l(t, e),
                l(e, f),
                l(f, a),
                l(e, g),
                l(e, H),
                l(t, U),
                l(t, A),
                l(A, L),
                l(L, W),
                l(A, z),
                l(A, I),
                l(t, B),
                l(t, y),
                l(y, M),
                l(t, D),
                l(t, b),
                l(b, G),
                l(t, K);
        },
        p(u, n) {
            n & 1 && p !== (p = u[1] + "") && J(i, p),
                n & 1 && _ !== (_ = u[5]) && j(r, "href", _),
                n & 1 && E !== (E = u[3].join(", ") + "") && J(H, E),
                n & 1 && S !== (S = u[4].join(", ") + "") && J(I, S),
                n & 1 && F !== (F = u[2] + "") && J(M, F),
                n & 1 && N !== (N = u[5]) && j(b, "href", N);
        },
        d(u) {
            u && c(t);
        },
    };
}
function oe(h) {
    let t,
        s,
        r,
        p,
        i,
        _ = h[0],
        o = [];
    for (let e = 0; e < _.length; e += 1) o[e] = ee(x(h, _, e));
    return {
        c() {
            (t = q()), (s = d("h1")), (r = k("Projects")), (p = q()), (i = d("ul"));
            for (let e = 0; e < o.length; e += 1) o[e].c();
            this.h();
        },
        l(e) {
            se('[data-svelte="svelte-3erqqy"]', document.head).forEach(c),
                (t = w(e)),
                (s = v(e, "H1", {}));
            var a = m(s);
            (r = P(a, "Projects")), a.forEach(c), (p = w(e)), (i = v(e, "UL", { class: !0 }));
            var g = m(i);
            for (let E = 0; E < o.length; E += 1) o[E].l(g);
            g.forEach(c), this.h();
        },
        h() {
            (document.title = "Tadhg White | Projects"), j(i, "class", "py-2 space-y-2");
        },
        m(e, f) {
            T(e, t, f), T(e, s, f), l(s, r), T(e, p, f), T(e, i, f);
            for (let a = 0; a < o.length; a += 1) o[a].m(i, null);
        },
        p(e, [f]) {
            if (f & 1) {
                _ = e[0];
                let a;
                for (a = 0; a < _.length; a += 1) {
                    const g = x(e, _, a);
                    o[a] ? o[a].p(g, f) : ((o[a] = ee(g)), o[a].c(), o[a].m(i, null));
                }
                for (; a < o.length; a += 1) o[a].d(1);
                o.length = _.length;
            }
        },
        i: $,
        o: $,
        d(e) {
            e && c(t), e && c(s), e && c(p), e && c(i), re(o, e);
        },
    };
}
async function he({ fetch: h }) {
    return { props: { projects: await h("/projects.json").then((s) => s.json()) } };
}
function ne(h, t, s) {
    let { projects: r } = t;
    return (
        (h.$$set = (p) => {
            "projects" in p && s(0, (r = p.projects));
        }),
        [r]
    );
}
class fe extends te {
    constructor(t) {
        super();
        ae(this, t, ne, oe, le, { projects: 0 });
    }
}
export { fe as default, he as load };
