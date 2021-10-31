import {
    S as te,
    i as ae,
    s as se,
    e as d,
    t as E,
    k as S,
    c as v,
    a as m,
    g as b,
    d as f,
    n as q,
    b as j,
    f as T,
    F as s,
    h as C,
    P as le,
    I as Z,
    J as re,
} from "../../chunks/vendor-40075b22.js";
import { b as oe } from "../../chunks/paths-28a87002.js";
function x(h, t, l) {
    const r = h.slice();
    return (
        (r[2] = t[l].title),
        (r[3] = t[l].summary),
        (r[4] = t[l].languages),
        (r[5] = t[l].tools),
        (r[6] = t[l].slug),
        r
    );
}
function ee(h) {
    let t,
        l,
        r,
        p = h[2] + "",
        c,
        _,
        o,
        e,
        u,
        a,
        g,
        k = h[4].join(", ") + "",
        H,
        J,
        w,
        A,
        U,
        W,
        L = h[5].join(", ") + "",
        I,
        z,
        y,
        F = h[3] + "",
        M,
        B,
        P,
        D,
        N,
        G;
    return {
        c() {
            (t = d("li")),
                (l = d("h2")),
                (r = d("a")),
                (c = E(p)),
                (o = S()),
                (e = d("p")),
                (u = d("span")),
                (a = E("Language(s)")),
                (g = E(": ")),
                (H = E(k)),
                (J = S()),
                (w = d("p")),
                (A = d("span")),
                (U = E("Tools/Frameworks:")),
                (W = S()),
                (I = E(L)),
                (z = S()),
                (y = d("p")),
                (M = E(F)),
                (B = S()),
                (P = d("a")),
                (D = E("Read More >>")),
                (G = S()),
                this.h();
        },
        l(i) {
            t = v(i, "LI", { class: !0 });
            var n = m(t);
            l = v(n, "H2", {});
            var K = m(l);
            r = v(K, "A", { "sveltekit:prefetch": !0, href: !0 });
            var O = m(r);
            (c = b(O, p)), O.forEach(f), K.forEach(f), (o = q(n)), (e = v(n, "P", {}));
            var R = m(e);
            u = v(R, "SPAN", { class: !0 });
            var Q = m(u);
            (a = b(Q, "Language(s)")),
                Q.forEach(f),
                (g = b(R, ": ")),
                (H = b(R, k)),
                R.forEach(f),
                (J = q(n)),
                (w = v(n, "P", {}));
            var $ = m(w);
            A = v($, "SPAN", { class: !0 });
            var V = m(A);
            (U = b(V, "Tools/Frameworks:")),
                V.forEach(f),
                (W = q($)),
                (I = b($, L)),
                $.forEach(f),
                (z = q(n)),
                (y = v(n, "P", {}));
            var X = m(y);
            (M = b(X, F)),
                X.forEach(f),
                (B = q(n)),
                (P = v(n, "A", { "sveltekit:prefetch": !0, href: !0 }));
            var Y = m(P);
            (D = b(Y, "Read More >>")), Y.forEach(f), (G = q(n)), n.forEach(f), this.h();
        },
        h() {
            j(r, "sveltekit:prefetch", ""),
                j(r, "href", (_ = h[1](h[6]))),
                j(u, "class", "font-semibold"),
                j(A, "class", "font-semibold"),
                j(P, "sveltekit:prefetch", ""),
                j(P, "href", (N = h[1](h[6]))),
                j(t, "class", "border-2 border-purple-600 dark_border-purple-400 p-2 max-w-prose");
        },
        m(i, n) {
            T(i, t, n),
                s(t, l),
                s(l, r),
                s(r, c),
                s(t, o),
                s(t, e),
                s(e, u),
                s(u, a),
                s(e, g),
                s(e, H),
                s(t, J),
                s(t, w),
                s(w, A),
                s(A, U),
                s(w, W),
                s(w, I),
                s(t, z),
                s(t, y),
                s(y, M),
                s(t, B),
                s(t, P),
                s(P, D),
                s(t, G);
        },
        p(i, n) {
            n & 1 && p !== (p = i[2] + "") && C(c, p),
                n & 1 && _ !== (_ = i[1](i[6])) && j(r, "href", _),
                n & 1 && k !== (k = i[4].join(", ") + "") && C(H, k),
                n & 1 && L !== (L = i[5].join(", ") + "") && C(I, L),
                n & 1 && F !== (F = i[3] + "") && C(M, F),
                n & 1 && N !== (N = i[1](i[6])) && j(P, "href", N);
        },
        d(i) {
            i && f(t);
        },
    };
}
function ne(h) {
    let t,
        l,
        r,
        p,
        c,
        _ = h[0],
        o = [];
    for (let e = 0; e < _.length; e += 1) o[e] = ee(x(h, _, e));
    return {
        c() {
            (t = S()), (l = d("h1")), (r = E("Projects")), (p = S()), (c = d("ul"));
            for (let e = 0; e < o.length; e += 1) o[e].c();
            this.h();
        },
        l(e) {
            le('[data-svelte="svelte-3erqqy"]', document.head).forEach(f),
                (t = q(e)),
                (l = v(e, "H1", {}));
            var a = m(l);
            (r = b(a, "Projects")), a.forEach(f), (p = q(e)), (c = v(e, "UL", { class: !0 }));
            var g = m(c);
            for (let k = 0; k < o.length; k += 1) o[k].l(g);
            g.forEach(f), this.h();
        },
        h() {
            (document.title = "Tadhg White | Projects"), j(c, "class", "py-2 space-y-2");
        },
        m(e, u) {
            T(e, t, u), T(e, l, u), s(l, r), T(e, p, u), T(e, c, u);
            for (let a = 0; a < o.length; a += 1) o[a].m(c, null);
        },
        p(e, [u]) {
            if (u & 3) {
                _ = e[0];
                let a;
                for (a = 0; a < _.length; a += 1) {
                    const g = x(e, _, a);
                    o[a] ? o[a].p(g, u) : ((o[a] = ee(g)), o[a].c(), o[a].m(c, null));
                }
                for (; a < o.length; a += 1) o[a].d(1);
                o.length = _.length;
            }
        },
        i: Z,
        o: Z,
        d(e) {
            e && f(t), e && f(l), e && f(p), e && f(c), re(o, e);
        },
    };
}
async function ue({ fetch: h }) {
    const t = await h("/projects.json").then((l) => l.json());
    return console.log(t), { props: { projects: t } };
}
function he(h, t, l) {
    let { projects: r } = t;
    function p(c) {
        return `${oe}/${c}`;
    }
    return (
        (h.$$set = (c) => {
            "projects" in c && l(0, (r = c.projects));
        }),
        [r, p]
    );
}
class ie extends te {
    constructor(t) {
        super();
        ae(this, t, he, ne, se, { projects: 0 });
    }
}
export { ie as default, ue as load };
