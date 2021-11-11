import {
    S as F,
    i as T,
    s as q,
    k as h,
    e as m,
    t as u,
    P as U,
    d as t,
    n as c,
    c as p,
    a as f,
    g,
    f as o,
    F as y,
    I as S,
} from "../../chunks/vendor-40075b22.js";
function Y(C) {
    let n, s, I, w, i, _, v, r, x, k, l, E, b, d, M;
    return {
        c() {
            (n = h()),
                (s = m("h1")),
                (I = u("About Me")),
                (w = h()),
                (i = m("p")),
                (_ = u(
                    "I am a 3rd Year Computer Science student at Maynooth University, looking to learn about how the technology that powers our world works, how it doesn\u2019t, and how we can do better. In particular, I\u2019m interested in how technology can be used as a medium for creativity, and how it shapes our interactions."
                )),
                (v = h()),
                (r = m("p")),
                (x = u(
                    "I enjoy seeing how things are put together, and then watching something I\u2019ve made come to life and work as expected. I\u2019d like to work in game design and development someday, as that kind of self-contained project is very satisfying to work on."
                )),
                (k = h()),
                (l = m("p")),
                (E = u(
                    "On a more theoretical level, I\u2019m fascinated by the design of many things, especially programming languages. There\u2019s something very intriguing to me about seeing how all the different aspects of a language, from syntax style to machine code generation, come together."
                )),
                (b = h()),
                (d = m("p")),
                (M = u(
                    "Outside of programming, I like reading (mostly Mystery and Fantasy \u2014 preferably at the same time!), and solving Sudoku puzzles with peculiar rulesets."
                )),
                this.h();
        },
        l(e) {
            U('[data-svelte="svelte-z3ff89"]', document.head).forEach(t),
                (n = c(e)),
                (s = p(e, "H1", {}));
            var j = f(s);
            (I = g(j, "About Me")), j.forEach(t), (w = c(e)), (i = p(e, "P", {}));
            var z = f(i);
            (_ = g(
                z,
                "I am a 3rd Year Computer Science student at Maynooth University, looking to learn about how the technology that powers our world works, how it doesn\u2019t, and how we can do better. In particular, I\u2019m interested in how technology can be used as a medium for creativity, and how it shapes our interactions."
            )),
                z.forEach(t),
                (v = c(e)),
                (r = p(e, "P", {}));
            var P = f(r);
            (x = g(
                P,
                "I enjoy seeing how things are put together, and then watching something I\u2019ve made come to life and work as expected. I\u2019d like to work in game design and development someday, as that kind of self-contained project is very satisfying to work on."
            )),
                P.forEach(t),
                (k = c(e)),
                (l = p(e, "P", {}));
            var A = f(l);
            (E = g(
                A,
                "On a more theoretical level, I\u2019m fascinated by the design of many things, especially programming languages. There\u2019s something very intriguing to me about seeing how all the different aspects of a language, from syntax style to machine code generation, come together."
            )),
                A.forEach(t),
                (b = c(e)),
                (d = p(e, "P", {}));
            var O = f(d);
            (M = g(
                O,
                "Outside of programming, I like reading (mostly Mystery and Fantasy \u2014 preferably at the same time!), and solving Sudoku puzzles with peculiar rulesets."
            )),
                O.forEach(t),
                this.h();
        },
        h() {
            document.title = "Tadhg White | About";
        },
        m(e, a) {
            o(e, n, a),
                o(e, s, a),
                y(s, I),
                o(e, w, a),
                o(e, i, a),
                y(i, _),
                o(e, v, a),
                o(e, r, a),
                y(r, x),
                o(e, k, a),
                o(e, l, a),
                y(l, E),
                o(e, b, a),
                o(e, d, a),
                y(d, M);
        },
        p: S,
        i: S,
        o: S,
        d(e) {
            e && t(n),
                e && t(s),
                e && t(w),
                e && t(i),
                e && t(v),
                e && t(r),
                e && t(k),
                e && t(l),
                e && t(b),
                e && t(d);
        },
    };
}
class W extends F {
    constructor(n) {
        super();
        T(this, n, null, Y, q, {});
    }
}
export { W as default };
