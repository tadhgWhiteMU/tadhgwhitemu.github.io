import {
    S as te,
    i as le,
    s as se,
    e as d,
    t as E,
    k as L,
    c as v,
    a as m,
    g as b,
    d as f,
    n as S,
    b as j,
    f as T,
    F as s,
    h as C,
    P as ae,
    I as Z,
    J as oe,
} from "../../chunks/vendor-40075b22.js";
import { b as re } from "../../chunks/paths-28a87002.js";
function x(h, t, a) {
    const o = h.slice();
    return (
        (o[2] = t[a].title),
        (o[3] = t[a].summary),
        (o[4] = t[a].languages),
        (o[5] = t[a].tools),
        (o[6] = t[a].slug),
        o
    );
}
function ee(h) {
    let t,
        a,
        o,
        _ = h[2] + "",
        c,
        u,
        r,
        e,
        i,
        l,
        g,
        k = h[4].join(", ") + "",
        $,
        J,
        q,
        w,
        U,
        W,
        A = h[5].join(", ") + "",
        H,
        z,
        y,
        F = h[3] + "",
        I,
        B,
        P,
        D,
        M,
        G;
    return {
        c() {
            (t = d("li")),
                (a = d("h2")),
                (o = d("a")),
                (c = E(_)),
                (r = L()),
                (e = d("p")),
                (i = d("span")),
                (l = E("Language(s)")),
                (g = E(": ")),
                ($ = E(k)),
                (J = L()),
                (q = d("p")),
                (w = d("span")),
                (U = E("Tools/Frameworks:")),
                (W = L()),
                (H = E(A)),
                (z = L()),
                (y = d("p")),
                (I = E(F)),
                (B = L()),
                (P = d("a")),
                (D = E("Read More >>")),
                (G = L()),
                this.h();
        },
        l(p) {
            t = v(p, "LI", { class: !0 });
            var n = m(t);
            a = v(n, "H2", {});
            var K = m(a);
            o = v(K, "A", { "sveltekit:prefetch": !0, href: !0 });
            var O = m(o);
            (c = b(O, _)), O.forEach(f), K.forEach(f), (r = S(n)), (e = v(n, "P", {}));
            var N = m(e);
            i = v(N, "SPAN", { class: !0 });
            var Q = m(i);
            (l = b(Q, "Language(s)")),
                Q.forEach(f),
                (g = b(N, ": ")),
                ($ = b(N, k)),
                N.forEach(f),
                (J = S(n)),
                (q = v(n, "P", {}));
            var R = m(q);
            w = v(R, "SPAN", { class: !0 });
            var V = m(w);
            (U = b(V, "Tools/Frameworks:")),
                V.forEach(f),
                (W = S(R)),
                (H = b(R, A)),
                R.forEach(f),
                (z = S(n)),
                (y = v(n, "P", {}));
            var X = m(y);
            (I = b(X, F)),
                X.forEach(f),
                (B = S(n)),
                (P = v(n, "A", { "sveltekit:prefetch": !0, href: !0 }));
            var Y = m(P);
            (D = b(Y, "Read More >>")), Y.forEach(f), (G = S(n)), n.forEach(f), this.h();
        },
        h() {
            j(o, "sveltekit:prefetch", ""),
                j(o, "href", (u = h[1](h[6]))),
                j(i, "class", "font-semibold"),
                j(w, "class", "font-semibold"),
                j(P, "sveltekit:prefetch", ""),
                j(P, "href", (M = h[1](h[6]))),
                j(t, "class", "border-2 border-purple-600 dark_border-purple-400 p-2 max-w-prose");
        },
        m(p, n) {
            T(p, t, n),
                s(t, a),
                s(a, o),
                s(o, c),
                s(t, r),
                s(t, e),
                s(e, i),
                s(i, l),
                s(e, g),
                s(e, $),
                s(t, J),
                s(t, q),
                s(q, w),
                s(w, U),
                s(q, W),
                s(q, H),
                s(t, z),
                s(t, y),
                s(y, I),
                s(t, B),
                s(t, P),
                s(P, D),
                s(t, G);
        },
        p(p, n) {
            n & 1 && _ !== (_ = p[2] + "") && C(c, _),
                n & 1 && u !== (u = p[1](p[6])) && j(o, "href", u),
                n & 1 && k !== (k = p[4].join(", ") + "") && C($, k),
                n & 1 && A !== (A = p[5].join(", ") + "") && C(H, A),
                n & 1 && F !== (F = p[3] + "") && C(I, F),
                n & 1 && M !== (M = p[1](p[6])) && j(P, "href", M);
        },
        d(p) {
            p && f(t);
        },
    };
}
function ne(h) {
    let t,
        a,
        o,
        _,
        c,
        u = h[0],
        r = [];
    for (let e = 0; e < u.length; e += 1) r[e] = ee(x(h, u, e));
    return {
        c() {
            (t = L()), (a = d("h1")), (o = E("Projects")), (_ = L()), (c = d("ul"));
            for (let e = 0; e < r.length; e += 1) r[e].c();
            this.h();
        },
        l(e) {
            ae('[data-svelte="svelte-3erqqy"]', document.head).forEach(f),
                (t = S(e)),
                (a = v(e, "H1", {}));
            var l = m(a);
            (o = b(l, "Projects")), l.forEach(f), (_ = S(e)), (c = v(e, "UL", { class: !0 }));
            var g = m(c);
            for (let k = 0; k < r.length; k += 1) r[k].l(g);
            g.forEach(f), this.h();
        },
        h() {
            (document.title = "Tadhg White | Projects"), j(c, "class", "py-2 space-y-2");
        },
        m(e, i) {
            T(e, t, i), T(e, a, i), s(a, o), T(e, _, i), T(e, c, i);
            for (let l = 0; l < r.length; l += 1) r[l].m(c, null);
        },
        p(e, [i]) {
            if (i & 3) {
                u = e[0];
                let l;
                for (l = 0; l < u.length; l += 1) {
                    const g = x(e, u, l);
                    r[l] ? r[l].p(g, i) : ((r[l] = ee(g)), r[l].c(), r[l].m(c, null));
                }
                for (; l < r.length; l += 1) r[l].d(1);
                r.length = u.length;
            }
        },
        i: Z,
        o: Z,
        d(e) {
            e && f(t), e && f(a), e && f(_), e && f(c), oe(r, e);
        },
    };
}
async function ie({ fetch: h }) {
    const t = await h("/projects.json").then((a) => a.json());
    return console.log(t), { props: { projects: t } };
}
function he(h, t, a) {
    let { projects: o } = t;
    function _(c) {
        let u = `${re}/${c}`;
        return console.log(`Link: ${u}`), u;
    }
    return (
        (h.$$set = (c) => {
            "projects" in c && a(0, (o = c.projects));
        }),
        [o, _]
    );
}
class ue extends te {
    constructor(t) {
        super();
        le(this, t, he, ne, se, { projects: 0 });
    }
}
export { ue as default, ie as load };
