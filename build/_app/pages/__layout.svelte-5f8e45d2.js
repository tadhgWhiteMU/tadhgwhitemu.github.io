import{D as q,S as H,i as N,s as S,e as g,H as J,k as $,c as v,a as k,E as K,n as E,d as h,b as d,f as x,F as b,t as T,g as A,G as R,h as I,I as y,J as L,K as z,l as O,L as Q,j as D,m as F,o as P,M as X,N as Y,O as Z,x as M,u as C,v as U}from"../chunks/vendor-40075b22.js";var ee=[{label:"GitHub",url:"https://github.com/TadhgWhiteMU"},{label:"LinkedIn",url:"https://www.linkedin.com/in/tadhg-white-b0b086224/"},{label:"Source Code",url:"https://github.com/TadhgWhiteMU/tadhgwhitemu.github.io"}],te=[{label:"Home",url:"/"},{label:"About&nbsp;Me",url:"/about"},{label:"Projects",url:"/projects"}];const re=()=>{const n=q("__svelte__");return{page:{subscribe:n.page.subscribe},navigating:{subscribe:n.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:n.navigating.subscribe}},session:n.session}},le={subscribe(n){return re().page.subscribe(n)}};function V(n,e,l){const r=n.slice();return r[5]=e[l],r}function B(n){let e,l,r=n[5].label+"",t,s,a;return{c(){e=g("a"),l=new J,t=$(),this.h()},l(o){e=v(o,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var i=k(e);l=K(i),t=E(i),i.forEach(h),this.h()},h(){l.a=t,d(e,"sveltekit:prefetch",""),d(e,"href",s=n[5].url),d(e,"class",a="inline-block align-middle p-3 mx-auto w-11/12 sm_w-32 sm_mx-0 h-16 font-bold text-purple-600 dark_text-purple-400 hover_text-purple-400 dark_hover_text-purple-600 hover_bg-purple-600 dark_hover_bg-purple-400 active_bg-purple-400 dark_active_bg-purple-600 "+(n[1]==n[5].url?"border-purple-600 dark_border-purple-400":"border-transparent")+" hover_border-purple-600 dark_hover_border-purple-400 border-4")},m(o,i){x(o,e,i),l.m(r,e),b(e,t)},p(o,i){i&1&&r!==(r=o[5].label+"")&&l.p(r),i&1&&s!==(s=o[5].url)&&d(e,"href",s),i&3&&a!==(a="inline-block align-middle p-3 mx-auto w-11/12 sm_w-32 sm_mx-0 h-16 font-bold text-purple-600 dark_text-purple-400 hover_text-purple-400 dark_hover_text-purple-600 hover_bg-purple-600 dark_hover_bg-purple-400 active_bg-purple-400 dark_active_bg-purple-600 "+(o[1]==o[5].url?"border-purple-600 dark_border-purple-400":"border-transparent")+" hover_border-purple-600 dark_hover_border-purple-400 border-4")&&d(e,"class",a)},d(o){o&&h(e)}}}function ae(n){let e,l,r=(n[2]?"Show":"Hide")+"",t,s,a,o,i,c,p=n[0],u=[];for(let _=0;_<p.length;_+=1)u[_]=B(V(n,p,_));return{c(){e=g("nav"),l=g("button"),t=T(r),s=$(),a=g("div");for(let _=0;_<u.length;_+=1)u[_].c();this.h()},l(_){e=v(_,"NAV",{class:!0});var m=k(e);l=v(m,"BUTTON",{class:!0});var f=k(l);t=A(f,r),f.forEach(h),s=E(m),a=v(m,"DIV",{class:!0});var w=k(a);for(let j=0;j<u.length;j+=1)u[j].l(w);w.forEach(h),m.forEach(h),this.h()},h(){d(l,"class","inline-block align-middle border-4 border-purple-600 dark_border-purple-400 p-3 w-11/12 mx-auto h-15 font-bold text-purple-600 dark_text-purple-400 hover_text-purple-400 dark_hover_text-purple-600 hover_bg-purple-600 dark_hover_bg-purple-400 sm_hidden"),d(a,"class",o=""+((n[2]?"hidden sm_flex":"flex")+" flex-col sm_flex-row sm_items-center sm_justify-between w-full sm_w-auto text-center font-bold mt-5 sm_mt-0 sm_space-x-5 gap-1")),d(e,"class","flex flex-wrap items-center justify-between p-5 bg-white dark_bg-black border-purple-600 dark_border-purple-400 border-b-4 mx-auto w-full md_w-4/5")},m(_,m){x(_,e,m),b(e,l),b(l,t),b(e,s),b(e,a);for(let f=0;f<u.length;f+=1)u[f].m(a,null);i||(c=R(l,"click",n[3]),i=!0)},p(_,[m]){if(m&4&&r!==(r=(_[2]?"Show":"Hide")+"")&&I(t,r),m&3){p=_[0];let f;for(f=0;f<p.length;f+=1){const w=V(_,p,f);u[f]?u[f].p(w,m):(u[f]=B(w),u[f].c(),u[f].m(a,null))}for(;f<u.length;f+=1)u[f].d(1);u.length=p.length}m&4&&o!==(o=""+((_[2]?"hidden sm_flex":"flex")+" flex-col sm_flex-row sm_items-center sm_justify-between w-full sm_w-auto text-center font-bold mt-5 sm_mt-0 sm_space-x-5 gap-1"))&&d(a,"class",o)},i:y,o:y,d(_){_&&h(e),L(u,_),i=!1,c()}}}function se(n,e,l){let r;z(n,le,i=>l(4,r=i));let{links:t=[]}=e,s=r.path,a=!0;function o(){l(2,a=!a)}return n.$$set=i=>{"links"in i&&l(0,t=i.links)},n.$$.update=()=>{n.$$.dirty&16&&l(1,s=r.path)},[t,s,a,o,r]}class ne extends H{constructor(e){super();N(this,e,se,ae,S,{links:0})}}function G(n,e,l){const r=n.slice();return r[1]=e[l],r}function oe(n){let e,l=n[1].label+"",r;return{c(){e=g("p"),r=T(l)},l(t){e=v(t,"P",{});var s=k(e);r=A(s,l),s.forEach(h)},m(t,s){x(t,e,s),b(e,r)},p(t,s){s&1&&l!==(l=t[1].label+"")&&I(r,l)},d(t){t&&h(e)}}}function ie(n){let e,l,r=n[1].label+"",t,s,a;return{c(){e=g("p"),l=g("a"),t=T(r),a=$(),this.h()},l(o){e=v(o,"P",{});var i=k(e);l=v(i,"A",{rel:!0,href:!0});var c=k(l);t=A(c,r),c.forEach(h),a=E(i),i.forEach(h),this.h()},h(){d(l,"rel","external"),d(l,"href",s=n[1].url)},m(o,i){x(o,e,i),b(e,l),b(l,t),b(e,a)},p(o,i){i&1&&r!==(r=o[1].label+"")&&I(t,r),i&1&&s!==(s=o[1].url)&&d(l,"href",s)},d(o){o&&h(e)}}}function W(n){let e;function l(s,a){return s[1].url?ie:oe}let r=l(n),t=r(n);return{c(){t.c(),e=O()},l(s){t.l(s),e=O()},m(s,a){t.m(s,a),x(s,e,a)},p(s,a){r===(r=l(s))&&t?t.p(s,a):(t.d(1),t=r(s),t&&(t.c(),t.m(e.parentNode,e)))},d(s){t.d(s),s&&h(e)}}}function ue(n){let e,l=n[0],r=[];for(let t=0;t<l.length;t+=1)r[t]=W(G(n,l,t));return{c(){e=g("footer");for(let t=0;t<r.length;t+=1)r[t].c();this.h()},l(t){e=v(t,"FOOTER",{class:!0});var s=k(e);for(let a=0;a<r.length;a+=1)r[a].l(s);s.forEach(h),this.h()},h(){d(e,"class","flex flex-wrap flex-col md_flex-row md_justify-center content-center gap-4 py-5 px-10 bg-white dark_bg-black border-purple-600 dark_border-purple-400 border-t-4 mx-auto w-full md_w-4/5 font-bold text-purple-600 dark_text-purple-400")},m(t,s){x(t,e,s);for(let a=0;a<r.length;a+=1)r[a].m(e,null)},p(t,[s]){if(s&1){l=t[0];let a;for(a=0;a<l.length;a+=1){const o=G(t,l,a);r[a]?r[a].p(o,s):(r[a]=W(o),r[a].c(),r[a].m(e,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=l.length}},i:y,o:y,d(t){t&&h(e),L(r,t)}}}function pe(n,e,l){let{links:r=[]}=e;return n.$$set=t=>{"links"in t&&l(0,r=t.links)},[r]}class _e extends H{constructor(e){super();N(this,e,pe,ue,S,{links:0})}}function ce(n){let e,l,r,t,s,a,o;l=new ne({props:{links:te}});const i=n[1].default,c=Q(i,n,n[0],null);return a=new _e({props:{links:ee}}),{c(){e=g("div"),D(l.$$.fragment),r=$(),t=g("main"),c&&c.c(),s=$(),D(a.$$.fragment),this.h()},l(p){e=v(p,"DIV",{class:!0});var u=k(e);F(l.$$.fragment,u),r=E(u),t=v(u,"MAIN",{class:!0});var _=k(t);c&&c.l(_),_.forEach(h),s=E(u),F(a.$$.fragment,u),u.forEach(h),this.h()},h(){d(t,"class","bg-white dark_bg-black mx-auto w-full md_w-4/5 py-4 flex-grow px-5 sm_px-10 lg_px-20 xl_px-36 2xl_px-48"),d(e,"class","flex flex-col h-auto min-h-screen bg-purple-600 dark_bg-purple-400")},m(p,u){x(p,e,u),P(l,e,null),b(e,r),b(e,t),c&&c.m(t,null),b(e,s),P(a,e,null),o=!0},p(p,[u]){c&&c.p&&(!o||u&1)&&X(c,i,p,p[0],o?Z(i,p[0],u,null):Y(p[0]),null)},i(p){o||(M(l.$$.fragment,p),M(c,p),M(a.$$.fragment,p),o=!0)},o(p){C(l.$$.fragment,p),C(c,p),C(a.$$.fragment,p),o=!1},d(p){p&&h(e),U(l),c&&c.d(p),U(a)}}}function fe(n,e,l){let{$$slots:r={},$$scope:t}=e;return n.$$set=s=>{"$$scope"in s&&l(0,t=s.$$scope)},[t,r]}class de extends H{constructor(e){super();N(this,e,fe,ce,S,{})}}export{de as default};
