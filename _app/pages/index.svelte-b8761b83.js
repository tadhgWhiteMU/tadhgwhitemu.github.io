import{S as V,i as X,s as Y,e as d,t as T,k as A,c as k,a as b,g as P,d as l,n as H,b as I,f as m,F as n,h as K,P as Z,I as N,J as $}from"../chunks/vendor-40075b22.js";function O(c,t,s){const o=c.slice();return o[1]=t[s].title,o[2]=t[s].summary,o[3]=t[s].slug,o}function Q(c){let t,s,o,u=c[1]+"",E,L,W,_,w=c[2]+"",S,j,v,q,p,M;return{c(){t=d("li"),s=d("h3"),o=d("a"),E=T(u),W=A(),_=d("p"),S=T(w),j=A(),v=d("a"),q=T("Read More >>"),M=A(),this.h()},l(a){t=k(a,"LI",{class:!0});var i=b(t);s=k(i,"H3",{});var y=b(s);o=k(y,"A",{"sveltekit:prefetch":!0,href:!0});var U=b(o);E=P(U,u),U.forEach(l),y.forEach(l),W=H(i),_=k(i,"P",{});var C=b(_);S=P(C,w),C.forEach(l),j=H(i),v=k(i,"A",{"sveltekit:prefetch":!0,href:!0});var R=b(v);q=P(R,"Read More >>"),R.forEach(l),M=H(i),i.forEach(l),this.h()},h(){I(o,"sveltekit:prefetch",""),I(o,"href",L=c[3]),I(v,"sveltekit:prefetch",""),I(v,"href",p=c[3]),I(t,"class","border-2 border-purple-600 dark_border-purple-400 p-2 max-w-prose")},m(a,i){m(a,t,i),n(t,s),n(s,o),n(o,E),n(t,W),n(t,_),n(_,S),n(t,j),n(t,v),n(v,q),n(t,M)},p(a,i){i&1&&u!==(u=a[1]+"")&&K(E,u),i&1&&L!==(L=a[3])&&I(o,"href",L),i&1&&w!==(w=a[2]+"")&&K(S,w),i&1&&p!==(p=a[3])&&I(v,"href",p)},d(a){a&&l(t)}}}function g(c){let t,s,o,u,E,L,W,_,w,S,j,v,q,p,M,a,i,y,U,C,R=c[0],h=[];for(let e=0;e<R.length;e+=1)h[e]=Q(O(c,R,e));return{c(){t=A(),s=d("h1"),o=T("Welcome"),u=A(),E=d("p"),L=T(`There are many pages like this on the internet, but this one is mine. Take a moment of your day
    to look around.`),W=A(),_=d("p"),w=T("Please note, this site is something of an active construction site at the moment. This line will be removed once I'm finished troubleshooting."),S=A(),j=d("h2"),v=T("Some things I've made"),q=A(),p=d("ul");for(let e=0;e<h.length;e+=1)h[e].c();M=A(),a=d("p"),i=T("The full list can be found "),y=d("a"),U=T("here"),C=T("."),this.h()},l(e){Z('[data-svelte="svelte-1i93y7k"]',document.head).forEach(l),t=H(e),s=k(e,"H1",{});var r=b(s);o=P(r,"Welcome"),r.forEach(l),u=H(e),E=k(e,"P",{});var F=b(E);L=P(F,`There are many pages like this on the internet, but this one is mine. Take a moment of your day
    to look around.`),F.forEach(l),W=H(e),_=k(e,"P",{});var z=b(_);w=P(z,"Please note, this site is something of an active construction site at the moment. This line will be removed once I'm finished troubleshooting."),z.forEach(l),S=H(e),j=k(e,"H2",{});var B=b(j);v=P(B,"Some things I've made"),B.forEach(l),q=H(e),p=k(e,"UL",{class:!0});var D=b(p);for(let x=0;x<h.length;x+=1)h[x].l(D);D.forEach(l),M=H(e),a=k(e,"P",{});var J=b(a);i=P(J,"The full list can be found "),y=k(J,"A",{"sveltekit:prefetch":!0,href:!0});var G=b(y);U=P(G,"here"),G.forEach(l),C=P(J,"."),J.forEach(l),this.h()},h(){document.title="Tadhg White",I(p,"class","py-2 space-y-2"),I(y,"sveltekit:prefetch",""),I(y,"href","/projects")},m(e,f){m(e,t,f),m(e,s,f),n(s,o),m(e,u,f),m(e,E,f),n(E,L),m(e,W,f),m(e,_,f),n(_,w),m(e,S,f),m(e,j,f),n(j,v),m(e,q,f),m(e,p,f);for(let r=0;r<h.length;r+=1)h[r].m(p,null);m(e,M,f),m(e,a,f),n(a,i),n(a,y),n(y,U),n(a,C)},p(e,[f]){if(f&1){R=e[0];let r;for(r=0;r<R.length;r+=1){const F=O(e,R,r);h[r]?h[r].p(F,f):(h[r]=Q(F),h[r].c(),h[r].m(p,null))}for(;r<h.length;r+=1)h[r].d(1);h.length=R.length}},i:N,o:N,d(e){e&&l(t),e&&l(s),e&&l(u),e&&l(E),e&&l(W),e&&l(_),e&&l(S),e&&l(j),e&&l(q),e&&l(p),$(h,e),e&&l(M),e&&l(a)}}}async function le({fetch:c}){return{props:{projects:await c("/projects.json?"+new URLSearchParams({limit:5})).then(s=>s.json())}}}function ee(c,t,s){let{projects:o}=t;return c.$$set=u=>{"projects"in u&&s(0,o=u.projects)},[o]}class se extends V{constructor(t){super();X(this,t,ee,g,Y,{projects:0})}}export{se as default,le as load};