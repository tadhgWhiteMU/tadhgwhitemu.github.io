import{S as x,i as ee,s as te,e as v,j as D,k as S,t as T,c as g,a as R,m as G,d as s,n as W,g as w,b as A,f as p,F as h,o as K,h as V,x as I,u as U,v as N,M as le,w as ne,J as oe,r as se}from"../chunks/vendor-69b0d48f.js";import{L as O}from"../chunks/index-bd91384f.js";function X(u,t,l){const n=u.slice();return n[1]=t[l].title,n[2]=t[l].summary,n[3]=t[l].slug,n}function re(u){let t=u[1]+"",l;return{c(){l=T(t)},l(n){l=w(n,t)},m(n,m){p(n,l,m)},p(n,m){m&1&&t!==(t=n[1]+"")&&V(l,t)},d(n){n&&s(l)}}}function ae(u){let t;return{c(){t=T("Read More >>")},l(l){t=w(l,"Read More >>")},m(l,n){p(l,t,n)},d(l){l&&s(t)}}}function Y(u){let t,l,n,m,_,b=u[2]+"",E,j,$,M,d;return n=new O({props:{url:u[3],title:u[1],$$slots:{default:[re]},$$scope:{ctx:u}}}),$=new O({props:{url:u[3],title:u[1],$$slots:{default:[ae]},$$scope:{ctx:u}}}),{c(){t=v("li"),l=v("h3"),D(n.$$.fragment),m=S(),_=v("p"),E=T(b),j=S(),D($.$$.fragment),M=S(),this.h()},l(a){t=g(a,"LI",{class:!0});var r=R(t);l=g(r,"H3",{});var c=R(l);G(n.$$.fragment,c),c.forEach(s),m=W(r),_=g(r,"P",{});var k=R(_);E=w(k,b),k.forEach(s),j=W(r),G($.$$.fragment,r),M=W(r),r.forEach(s),this.h()},h(){A(t,"class","border-2 border-purple-600 dark_border-purple-400 p-2 max-w-prose")},m(a,r){p(a,t,r),h(t,l),K(n,l,null),h(t,m),h(t,_),h(_,E),h(t,j),K($,t,null),h(t,M),d=!0},p(a,r){const c={};r&1&&(c.url=a[3]),r&1&&(c.title=a[1]),r&65&&(c.$$scope={dirty:r,ctx:a}),n.$set(c),(!d||r&1)&&b!==(b=a[2]+"")&&V(E,b);const k={};r&1&&(k.url=a[3]),r&1&&(k.title=a[1]),r&64&&(k.$$scope={dirty:r,ctx:a}),$.$set(k)},i(a){d||(I(n.$$.fragment,a),I($.$$.fragment,a),d=!0)},o(a){U(n.$$.fragment,a),U($.$$.fragment,a),d=!1},d(a){a&&s(t),N(n),N($)}}}function ie(u){let t;return{c(){t=T("here")},l(l){t=w(l,"here")},m(l,n){p(l,t,n)},d(l){l&&s(t)}}}function ue(u){let t,l,n,m,_,b,E,j,$,M,d,a,r,c,k,L,F,P,J,B,H=u[0],i=[];for(let e=0;e<H.length;e+=1)i[e]=Y(X(u,H,e));const Z=e=>U(i[e],1,1,()=>{i[e]=null});return P=new O({props:{url:"/projects/",title:"Projects",$$slots:{default:[ie]},$$scope:{ctx:u}}}),{c(){t=v("meta"),l=v("meta"),n=v("meta"),m=S(),_=v("h1"),b=T("Welcome"),E=S(),j=v("p"),$=T(`There are many pages like this on the internet, but this one is mine. Take a moment of your day
    to look around.`),M=S(),d=v("h2"),a=T("Some things I've made"),r=S(),c=v("ul");for(let e=0;e<i.length;e+=1)i[e].c();k=S(),L=v("p"),F=T("The full list can be found "),D(P.$$.fragment),J=T("."),this.h()},l(e){const o=le('[data-svelte="svelte-70y79v"]',document.head);t=g(o,"META",{property:!0,content:!0}),l=g(o,"META",{property:!0,content:!0}),n=g(o,"META",{name:!0,content:!0}),o.forEach(s),m=W(e),_=g(e,"H1",{});var y=R(_);b=w(y,"Welcome"),y.forEach(s),E=W(e),j=g(e,"P",{});var f=R(j);$=w(f,`There are many pages like this on the internet, but this one is mine. Take a moment of your day
    to look around.`),f.forEach(s),M=W(e),d=g(e,"H2",{});var q=R(d);a=w(q,"Some things I've made"),q.forEach(s),r=W(e),c=g(e,"UL",{class:!0});var Q=R(c);for(let z=0;z<i.length;z+=1)i[z].l(Q);Q.forEach(s),k=W(e),L=g(e,"P",{});var C=R(L);F=w(C,"The full list can be found "),G(P.$$.fragment,C),J=w(C,"."),C.forEach(s),this.h()},h(){document.title="Tadhg White",A(t,"property","og:title"),A(t,"content","Tadhg White"),A(l,"property","og:type"),A(l,"content","website"),A(n,"name","twitter:card"),A(n,"content","summary"),A(c,"class","py-2 space-y-2")},m(e,o){h(document.head,t),h(document.head,l),h(document.head,n),p(e,m,o),p(e,_,o),h(_,b),p(e,E,o),p(e,j,o),h(j,$),p(e,M,o),p(e,d,o),h(d,a),p(e,r,o),p(e,c,o);for(let y=0;y<i.length;y+=1)i[y].m(c,null);p(e,k,o),p(e,L,o),h(L,F),K(P,L,null),h(L,J),B=!0},p(e,[o]){if(o&1){H=e[0];let f;for(f=0;f<H.length;f+=1){const q=X(e,H,f);i[f]?(i[f].p(q,o),I(i[f],1)):(i[f]=Y(q),i[f].c(),I(i[f],1),i[f].m(c,null))}for(se(),f=H.length;f<i.length;f+=1)Z(f);ne()}const y={};o&64&&(y.$$scope={dirty:o,ctx:e}),P.$set(y)},i(e){if(!B){for(let o=0;o<H.length;o+=1)I(i[o]);I(P.$$.fragment,e),B=!0}},o(e){i=i.filter(Boolean);for(let o=0;o<i.length;o+=1)U(i[o]);U(P.$$.fragment,e),B=!1},d(e){s(t),s(l),s(n),e&&s(m),e&&s(_),e&&s(E),e&&s(j),e&&s(M),e&&s(d),e&&s(r),e&&s(c),oe(i,e),e&&s(k),e&&s(L),N(P)}}}async function pe({fetch:u}){return{props:{projects:await u("/projects.json?"+new URLSearchParams({limit:5})).then(l=>l.json())}}}function fe(u,t,l){let{projects:n}=t;return u.$$set=m=>{"projects"in m&&l(0,n=m.projects)},[n]}class he extends x{constructor(t){super();ee(this,t,fe,ue,te,{projects:0})}}export{he as default,pe as load};