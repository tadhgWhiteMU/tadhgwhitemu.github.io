import{S as ge,i as be,s as ke,e as _,c as v,Q as ye,b as j,f as I,d as n,a as g,t as L,g as P,E as r,h as V,I as we,k as y,n as w,K as Re,P as Ue,L as Fe,M as Ne,N as Oe,x as Ee,u as Ie,B as he,j as Ve,m as We,o as Be,p as Je,q as Le,v as Ke,R as Pe}from"../../chunks/vendor-117ff7e7.js";import{p as Qe}from"../../chunks/stores-49bdebd1.js";function je(f,e,t){const a=f.slice();return a[14]=e[t].name,a[15]=e[t].desc,a}function Ae(f,e,t){const a=f.slice();return a[14]=e[t].name,a[18]=e[t].addr,a}function Te(f){let e,t,a;return{c(){e=_("img"),this.h()},l(l){e=v(l,"IMG",{src:!0,alt:!0}),this.h()},h(){ye(e.src,t=f[6].src)||j(e,"src",t),j(e,"alt",a=f[6].alt)},m(l,i){I(l,e,i)},p(l,i){i&64&&!ye(e.src,t=l[6].src)&&j(e,"src",t),i&64&&a!==(a=l[6].alt)&&j(e,"alt",a)},d(l){l&&n(e)}}}function Ce(f){let e,t=f[8],a=[];for(let l=0;l<t.length;l+=1)a[l]=He(Ae(f,t,l));return{c(){e=_("div");for(let l=0;l<a.length;l+=1)a[l].c()},l(l){e=v(l,"DIV",{});var i=g(e);for(let o=0;o<a.length;o+=1)a[o].l(i);i.forEach(n)},m(l,i){I(l,e,i);for(let o=0;o<a.length;o+=1)a[o].m(e,null)},p(l,i){if(i&256){t=l[8];let o;for(o=0;o<t.length;o+=1){const c=Ae(l,t,o);a[o]?a[o].p(c,i):(a[o]=He(c),a[o].c(),a[o].m(e,null))}for(;o<a.length;o+=1)a[o].d(1);a.length=t.length}},d(l){l&&n(e),we(a,l)}}}function He(f){let e,t=f[14]+"",a,l;return{c(){e=_("a"),a=L(t),this.h()},l(i){e=v(i,"A",{href:!0});var o=g(e);a=P(o,t),o.forEach(n),this.h()},h(){j(e,"href",l=f[18])},m(i,o){I(i,e,o),r(e,a)},p(i,o){o&256&&t!==(t=i[14]+"")&&V(a,t),o&256&&l!==(l=i[18])&&j(e,"href",l)},d(i){i&&n(e)}}}function De(f){let e,t,a=(f[2].length>1?"Languages":"Language")+"",l,i,o,c=f[2].join(", ")+"",u;return{c(){e=_("li"),t=_("h3"),l=L(a),i=y(),o=_("p"),u=L(c)},l(m){e=v(m,"LI",{});var h=g(e);t=v(h,"H3",{});var p=g(t);l=P(p,a),p.forEach(n),i=w(h),o=v(h,"P",{});var E=g(o);u=P(E,c),E.forEach(n),h.forEach(n)},m(m,h){I(m,e,h),r(e,t),r(t,l),r(e,i),r(e,o),r(o,u)},p(m,h){h&4&&a!==(a=(m[2].length>1?"Languages":"Language")+"")&&V(l,a),h&4&&c!==(c=m[2].join(", ")+"")&&V(u,c)},d(m){m&&n(e)}}}function Ge(f){let e,t,a,l,i,o=f[3].join(", ")+"",c;return{c(){e=_("li"),t=_("h3"),a=L("Tools and Frameworks"),l=y(),i=_("p"),c=L(o)},l(u){e=v(u,"LI",{});var m=g(e);t=v(m,"H3",{});var h=g(t);a=P(h,"Tools and Frameworks"),h.forEach(n),l=w(m),i=v(m,"P",{});var p=g(i);c=P(p,o),p.forEach(n),m.forEach(n)},m(u,m){I(u,e,m),r(e,t),r(t,a),r(e,l),r(e,i),r(i,c)},p(u,m){m&8&&o!==(o=u[3].join(", ")+"")&&V(c,o)},d(u){u&&n(e)}}}function Me(f){let e,t,a=(f[1].length>1?"Platforms":"Platform")+"",l,i,o,c=f[1].join(", ")+"",u;return{c(){e=_("li"),t=_("h3"),l=L(a),i=y(),o=_("p"),u=L(c)},l(m){e=v(m,"LI",{});var h=g(e);t=v(h,"H3",{});var p=g(t);l=P(p,a),p.forEach(n),i=w(h),o=v(h,"P",{});var E=g(o);u=P(E,c),E.forEach(n),h.forEach(n)},m(m,h){I(m,e,h),r(e,t),r(t,l),r(e,i),r(e,o),r(o,u)},p(m,h){h&2&&a!==(a=(m[1].length>1?"Platforms":"Platform")+"")&&V(l,a),h&2&&c!==(c=m[1].join(", ")+"")&&V(u,c)},d(m){m&&n(e)}}}function Se(f){let e,t,a,l,i,o=f[7],c=[];for(let u=0;u<o.length;u+=1)c[u]=ze(je(f,o,u));return{c(){e=_("div"),t=_("h2"),a=L("Skills Used"),l=y(),i=_("ul");for(let u=0;u<c.length;u+=1)c[u].c();this.h()},l(u){e=v(u,"DIV",{class:!0});var m=g(e);t=v(m,"H2",{});var h=g(t);a=P(h,"Skills Used"),h.forEach(n),l=w(m),i=v(m,"UL",{class:!0});var p=g(i);for(let E=0;E<c.length;E+=1)c[E].l(p);p.forEach(n),m.forEach(n),this.h()},h(){j(i,"class","border-2 border-purple-600 dark_border-purple-400 p-2 max-w-prose"),j(e,"class","py-2")},m(u,m){I(u,e,m),r(e,t),r(t,a),r(e,l),r(e,i);for(let h=0;h<c.length;h+=1)c[h].m(i,null)},p(u,m){if(m&128){o=u[7];let h;for(h=0;h<o.length;h+=1){const p=je(u,o,h);c[h]?c[h].p(p,m):(c[h]=ze(p),c[h].c(),c[h].m(i,null))}for(;h<c.length;h+=1)c[h].d(1);c.length=o.length}},d(u){u&&n(e),we(c,u)}}}function ze(f){let e,t,a=f[14]+"",l,i,o,c=f[15]+"",u,m;return{c(){e=_("li"),t=_("h3"),l=L(a),i=y(),o=_("p"),u=L(c),m=y()},l(h){e=v(h,"LI",{});var p=g(e);t=v(p,"H3",{});var E=g(t);l=P(E,a),E.forEach(n),i=w(p),o=v(p,"P",{});var A=g(o);u=P(A,c),A.forEach(n),m=w(p),p.forEach(n)},m(h,p){I(h,e,p),r(e,t),r(t,l),r(e,i),r(e,o),r(o,u),r(e,m)},p(h,p){p&128&&a!==(a=h[14]+"")&&V(l,a),p&128&&c!==(c=h[15]+"")&&V(u,c)},d(h){h&&n(e)}}}function Xe(f){let e,t,a,l,i,o,c,u,m,h,p,E,A,q,W,B,d,$,Z,F,N,J,K,te,Q,O,le,b,C,R,oe,ee,ae,ie,x,X,z;document.title=e="Tadhg White | "+f[0];let T=f[6].src&&Te(f),H=f[8].length&&Ce(f),D=f[2].length&&De(f),G=f[3].length&&Ge(f),M=f[1].length&&Me(f),S=f[7].length&&Se(f);const fe=f[13].default,U=Re(fe,f,f[12],null);return{c(){t=_("meta"),a=_("meta"),l=_("meta"),i=_("meta"),o=_("meta"),c=y(),u=_("h1"),m=L(f[0]),h=y(),T&&T.c(),p=y(),H&&H.c(),E=y(),A=_("div"),q=_("h2"),W=L("Project Details"),B=y(),d=_("ul"),D&&D.c(),$=y(),G&&G.c(),Z=y(),M&&M.c(),F=y(),N=_("li"),J=_("h3"),K=L("Team Size"),te=y(),Q=_("p"),O=L(f[4]),le=y(),b=_("li"),C=_("h3"),R=L("Role"),oe=y(),ee=_("p"),ae=L(f[5]),ie=y(),S&&S.c(),x=y(),X=_("div"),U&&U.c(),this.h()},l(s){const k=Ue('[data-svelte="svelte-p6oq78"]',document.head);t=v(k,"META",{property:!0,content:!0}),a=v(k,"META",{property:!0,content:!0}),l=v(k,"META",{property:!0,content:!0}),i=v(k,"META",{property:!0,content:!0}),o=v(k,"META",{name:!0,content:!0}),k.forEach(n),c=w(s),u=v(s,"H1",{});var ce=g(u);m=P(ce,f[0]),ce.forEach(n),h=w(s),T&&T.l(s),p=w(s),H&&H.l(s),E=w(s),A=v(s,"DIV",{class:!0});var se=g(A);q=v(se,"H2",{});var ue=g(q);W=P(ue,"Project Details"),ue.forEach(n),B=w(se),d=v(se,"UL",{class:!0});var Y=g(d);D&&D.l(Y),$=w(Y),G&&G.l(Y),Z=w(Y),M&&M.l(Y),F=w(Y),N=v(Y,"LI",{});var ne=g(N);J=v(ne,"H3",{});var me=g(J);K=P(me,"Team Size"),me.forEach(n),te=w(ne),Q=v(ne,"P",{});var de=g(Q);O=P(de,f[4]),de.forEach(n),ne.forEach(n),le=w(Y),b=v(Y,"LI",{});var re=g(b);C=v(re,"H3",{});var _e=g(C);R=P(_e,"Role"),_e.forEach(n),oe=w(re),ee=v(re,"P",{});var ve=g(ee);ae=P(ve,f[5]),ve.forEach(n),re.forEach(n),Y.forEach(n),se.forEach(n),ie=w(s),S&&S.l(s),x=w(s),X=v(s,"DIV",{class:!0});var pe=g(X);U&&U.l(pe),pe.forEach(n),this.h()},h(){j(t,"property","og:title"),j(t,"content",f[0]),j(a,"property","og:url"),j(a,"content","https://"+f[10]+f[11]),j(l,"property","og:type"),j(l,"content","article"),j(i,"property","og:description"),j(i,"content",f[9]),j(o,"name","twitter:card"),j(o,"content","summary"),j(d,"class","border-2 border-purple-600 dark_border-purple-400 p-2 max-w-prose"),j(A,"class","py-2"),j(X,"class","py-2 body")},m(s,k){r(document.head,t),r(document.head,a),r(document.head,l),r(document.head,i),r(document.head,o),I(s,c,k),I(s,u,k),r(u,m),I(s,h,k),T&&T.m(s,k),I(s,p,k),H&&H.m(s,k),I(s,E,k),I(s,A,k),r(A,q),r(q,W),r(A,B),r(A,d),D&&D.m(d,null),r(d,$),G&&G.m(d,null),r(d,Z),M&&M.m(d,null),r(d,F),r(d,N),r(N,J),r(J,K),r(N,te),r(N,Q),r(Q,O),r(d,le),r(d,b),r(b,C),r(C,R),r(b,oe),r(b,ee),r(ee,ae),I(s,ie,k),S&&S.m(s,k),I(s,x,k),I(s,X,k),U&&U.m(X,null),z=!0},p(s,[k]){(!z||k&1)&&e!==(e="Tadhg White | "+s[0])&&(document.title=e),(!z||k&1)&&j(t,"content",s[0]),(!z||k&512)&&j(i,"content",s[9]),(!z||k&1)&&V(m,s[0]),s[6].src?T?T.p(s,k):(T=Te(s),T.c(),T.m(p.parentNode,p)):T&&(T.d(1),T=null),s[8].length?H?H.p(s,k):(H=Ce(s),H.c(),H.m(E.parentNode,E)):H&&(H.d(1),H=null),s[2].length?D?D.p(s,k):(D=De(s),D.c(),D.m(d,$)):D&&(D.d(1),D=null),s[3].length?G?G.p(s,k):(G=Ge(s),G.c(),G.m(d,Z)):G&&(G.d(1),G=null),s[1].length?M?M.p(s,k):(M=Me(s),M.c(),M.m(d,F)):M&&(M.d(1),M=null),(!z||k&16)&&V(O,s[4]),(!z||k&32)&&V(ae,s[5]),s[7].length?S?S.p(s,k):(S=Se(s),S.c(),S.m(x.parentNode,x)):S&&(S.d(1),S=null),U&&U.p&&(!z||k&4096)&&Fe(U,fe,s,s[12],z?Oe(fe,s[12],k,null):Ne(s[12]),null)},i(s){z||(Ee(U,s),z=!0)},o(s){Ie(U,s),z=!1},d(s){n(t),n(a),n(l),n(i),n(o),s&&n(c),s&&n(u),s&&n(h),T&&T.d(s),s&&n(p),H&&H.d(s),s&&n(E),s&&n(A),D&&D.d(),G&&G.d(),M&&M.d(),s&&n(ie),S&&S.d(s),s&&n(x),s&&n(X),U&&U.d(s)}}}function Ye(f,e,t){let{$$slots:a={},$$scope:l}=e;const{host:i,path:o}=Qe;let{title:c=""}=e,{platforms:u=[]}=e,{languages:m=[]}=e,{tools:h=[]}=e,{team:p=1}=e,{role:E=""}=e,{image:A={}}=e,{skills:q=[]}=e,{links:W=[]}=e,{summary:B=""}=e;return f.$$set=d=>{"title"in d&&t(0,c=d.title),"platforms"in d&&t(1,u=d.platforms),"languages"in d&&t(2,m=d.languages),"tools"in d&&t(3,h=d.tools),"team"in d&&t(4,p=d.team),"role"in d&&t(5,E=d.role),"image"in d&&t(6,A=d.image),"skills"in d&&t(7,q=d.skills),"links"in d&&t(8,W=d.links),"summary"in d&&t(9,B=d.summary),"$$scope"in d&&t(12,l=d.$$scope)},[c,u,m,h,p,E,A,q,W,B,i,o,l,a]}class Ze extends ge{constructor(e){super();be(this,e,Ye,Xe,ke,{title:0,platforms:1,languages:2,tools:3,team:4,role:5,image:6,skills:7,links:8,summary:9})}}function xe(f){let e,t,a,l,i,o,c,u,m,h,p,E,A,q,W,B,d,$,Z,F,N,J,K,te,Q,O,le;return{c(){e=_("p"),t=L("Conways\u2019 Game of Life is a set of rules that govern how a set of cells in an infinite grid will change from one tick of the clock to the next. The rules are as follows:"),a=y(),l=_("ul"),i=_("li"),o=L("If a cell is \u201Calive\u201D and has less than 2 neighbouring cells that are also alive, then on the next tick of the clock, it will be \u201Cdead\u201D."),c=y(),u=_("li"),m=L("If a cell is alive and has more than 3 neighbouring cells that are also alive, then on the next tick of the clock it will be dead."),h=y(),p=_("li"),E=L("Otherwise, i.e. if a live cell has either 2 or 3 neighbours that are alive, then it shall remain alive on the next tick of the clock."),A=y(),q=_("li"),W=L("If a cell is dead, but has exactly 3 neighbours that are alive, then it too shall become alive on the next tick of the clock."),B=y(),d=_("li"),$=L("Otherwise, a dead cell shall remain dead."),Z=y(),F=_("p"),N=L("For the sake of practicality, the board in which I built this simulation is not infinite, but is limited to just 90 by 90 cells. I wanted to make it so that the starting state of cells could be set by clicking on them, while the simulation could be set running, paused, or stepped-through by means of key inputs. As such, the size of my board was limited not just by technical limitations, but by the size of my screen, and also by how small I could make the cells before they were impractical to click on."),J=y(),K=_("p"),te=L("Conway\u2019s Game of Life is not a complex problem, in fact it\u2019s scarcely a problem at all. During the last semester of university, however, one of my Algorithms & Data Structures assignments was to create a program that could, given a starting state, report the number of live cells after a given number of ticks. As this program had to run in a HackerRank environment, it therefore worked solely through terminal input and output, with no graphical representation, making it difficult to appreciate what was happening. Even though my solution worked, it was unsatisfying, so I decided to make this version in order to watch the simulations play out in real time."),Q=y(),O=_("p"),le=L("This was my first time using the browser\u2019s Canvas API, and I found it a very satisfying experience. Graphics make for very engaging development, as you get very immediate, very obvious feedback with each change.")},l(b){e=v(b,"P",{});var C=g(e);t=P(C,"Conways\u2019 Game of Life is a set of rules that govern how a set of cells in an infinite grid will change from one tick of the clock to the next. The rules are as follows:"),C.forEach(n),a=w(b),l=v(b,"UL",{});var R=g(l);i=v(R,"LI",{});var oe=g(i);o=P(oe,"If a cell is \u201Calive\u201D and has less than 2 neighbouring cells that are also alive, then on the next tick of the clock, it will be \u201Cdead\u201D."),oe.forEach(n),c=w(R),u=v(R,"LI",{});var ee=g(u);m=P(ee,"If a cell is alive and has more than 3 neighbouring cells that are also alive, then on the next tick of the clock it will be dead."),ee.forEach(n),h=w(R),p=v(R,"LI",{});var ae=g(p);E=P(ae,"Otherwise, i.e. if a live cell has either 2 or 3 neighbours that are alive, then it shall remain alive on the next tick of the clock."),ae.forEach(n),A=w(R),q=v(R,"LI",{});var ie=g(q);W=P(ie,"If a cell is dead, but has exactly 3 neighbours that are alive, then it too shall become alive on the next tick of the clock."),ie.forEach(n),B=w(R),d=v(R,"LI",{});var x=g(d);$=P(x,"Otherwise, a dead cell shall remain dead."),x.forEach(n),R.forEach(n),Z=w(b),F=v(b,"P",{});var X=g(F);N=P(X,"For the sake of practicality, the board in which I built this simulation is not infinite, but is limited to just 90 by 90 cells. I wanted to make it so that the starting state of cells could be set by clicking on them, while the simulation could be set running, paused, or stepped-through by means of key inputs. As such, the size of my board was limited not just by technical limitations, but by the size of my screen, and also by how small I could make the cells before they were impractical to click on."),X.forEach(n),J=w(b),K=v(b,"P",{});var z=g(K);te=P(z,"Conway\u2019s Game of Life is not a complex problem, in fact it\u2019s scarcely a problem at all. During the last semester of university, however, one of my Algorithms & Data Structures assignments was to create a program that could, given a starting state, report the number of live cells after a given number of ticks. As this program had to run in a HackerRank environment, it therefore worked solely through terminal input and output, with no graphical representation, making it difficult to appreciate what was happening. Even though my solution worked, it was unsatisfying, so I decided to make this version in order to watch the simulations play out in real time."),z.forEach(n),Q=w(b),O=v(b,"P",{});var T=g(O);le=P(T,"This was my first time using the browser\u2019s Canvas API, and I found it a very satisfying experience. Graphics make for very engaging development, as you get very immediate, very obvious feedback with each change."),T.forEach(n)},m(b,C){I(b,e,C),r(e,t),I(b,a,C),I(b,l,C),r(l,i),r(i,o),r(l,c),r(l,u),r(u,m),r(l,h),r(l,p),r(p,E),r(l,A),r(l,q),r(q,W),r(l,B),r(l,d),r(d,$),I(b,Z,C),I(b,F,C),r(F,N),I(b,J,C),I(b,K,C),r(K,te),I(b,Q,C),I(b,O,C),r(O,le)},d(b){b&&n(e),b&&n(a),b&&n(l),b&&n(Z),b&&n(F),b&&n(J),b&&n(K),b&&n(Q),b&&n(O)}}}function $e(f){let e,t;const a=[f[0],qe];let l={$$slots:{default:[xe]},$$scope:{ctx:f}};for(let i=0;i<a.length;i+=1)l=he(l,a[i]);return e=new Ze({props:l}),{c(){Ve(e.$$.fragment)},l(i){We(e.$$.fragment,i)},m(i,o){Be(e,i,o),t=!0},p(i,[o]){const c=o&1?Je(a,[o&1&&Le(i[0]),o&0&&Le(qe)]):{};o&2&&(c.$$scope={dirty:o,ctx:i}),e.$set(c)},i(i){t||(Ee(e.$$.fragment,i),t=!0)},o(i){Ie(e.$$.fragment,i),t=!1},d(i){Ke(e,i)}}}const qe={layout:"project",title:"Conway's Game of Life",platforms:["Web"],languages:["HTML","Javascript/Typescript"],tools:["Canvas API"],team:1,role:"Developer",skills:[{name:"Canvas API",desc:"Creating simple, interactive, script-controlled graphics in a browser."}],date:"2021-06-29",summary:"A simple, limited, implementation of Conway's Game of Life, using the Canvas API to render the current state."};function et(f,e,t){return f.$$set=a=>{t(0,e=he(he({},e),Pe(a)))},e=Pe(e),[e]}class at extends ge{constructor(e){super();be(this,e,et,$e,ke,{})}}export{at as default,qe as metadata};
