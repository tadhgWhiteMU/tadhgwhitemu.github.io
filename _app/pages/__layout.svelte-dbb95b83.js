import{F as Y,S,i as T,s as I,e as k,H as Z,k as H,c as w,a as $,G as ee,m as M,d as h,b as d,g as x,I as v,t as L,h as N,J as te,j as P,K as A,L as F,M as U,l as W,n as G,o as y,p as R,q as E,w as B,x as C,y as O,B as V,N as le,O as re,P as ae,Q as se,R as oe}from"../chunks/vendor-b4c856c3.js";import{L as ne}from"../chunks/index-aa8d14a6.js";var ue=[{label:"GitHub",url:"https://github.com/tadhgWhiteMU"},{label:"LinkedIn",url:"https://www.linkedin.com/in/tadhg-white-b0b086224/"},{label:"Source Code",url:"https://github.com/tadhgWhiteMU/tadhgwhitemu.github.io"}],ie=[{title:"Home",label:"Home",url:"/"},{title:"About Me",label:"About&nbsp;Me",url:"/about/"},{title:"Projects",label:"Projects",url:"/projects/"}];const ce=()=>{const o=Y("__svelte__");return{page:{subscribe:o.page.subscribe},navigating:{subscribe:o.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:o.navigating.subscribe}},session:o.session,updated:o.updated}},J={subscribe(o){return ce().page.subscribe(o)}};function K(o,e,l){const s=o.slice();return s[5]=e[l],s}function Q(o){let e,l,s=o[5].label+"",r,n,t,u;return{c(){e=k("a"),l=new Z,r=H(),this.h()},l(a){e=w(a,"A",{"sveltekit:prefetch":!0,href:!0,title:!0,class:!0});var c=$(e);l=ee(c),r=M(c),c.forEach(h),this.h()},h(){l.a=r,d(e,"sveltekit:prefetch",""),d(e,"href",n=o[5].url),d(e,"title",t=o[5].title),d(e,"class",u="inline-block align-middle p-3 mx-auto w-11/12 sm_w-32 sm_mx-0 h-16 font-bold text-purple-600 dark_text-purple-400 hover_text-purple-400 dark_hover_text-purple-600 hover_bg-purple-600 dark_hover_bg-purple-400 active_bg-purple-400 dark_active_bg-purple-600 "+(o[1]==o[5].url?"border-purple-600 dark_border-purple-400":"border-transparent")+" hover_border-purple-600 dark_hover_border-purple-400 border-4")},m(a,c){x(a,e,c),l.m(s,e),v(e,r)},p(a,c){c&1&&s!==(s=a[5].label+"")&&l.p(s),c&1&&n!==(n=a[5].url)&&d(e,"href",n),c&1&&t!==(t=a[5].title)&&d(e,"title",t),c&3&&u!==(u="inline-block align-middle p-3 mx-auto w-11/12 sm_w-32 sm_mx-0 h-16 font-bold text-purple-600 dark_text-purple-400 hover_text-purple-400 dark_hover_text-purple-600 hover_bg-purple-600 dark_hover_bg-purple-400 active_bg-purple-400 dark_active_bg-purple-600 "+(a[1]==a[5].url?"border-purple-600 dark_border-purple-400":"border-transparent")+" hover_border-purple-600 dark_hover_border-purple-400 border-4")&&d(e,"class",u)},d(a){a&&h(e)}}}function pe(o){let e,l,s=(o[2]?"Show":"Hide")+"",r,n,t,u,a,c,b=o[0],f=[];for(let _=0;_<b.length;_+=1)f[_]=Q(K(o,b,_));return{c(){e=k("nav"),l=k("button"),r=L(s),n=H(),t=k("div");for(let _=0;_<f.length;_+=1)f[_].c();this.h()},l(_){e=w(_,"NAV",{class:!0});var m=$(e);l=w(m,"BUTTON",{class:!0});var i=$(l);r=N(i,s),i.forEach(h),n=M(m),t=w(m,"DIV",{class:!0});var p=$(t);for(let g=0;g<f.length;g+=1)f[g].l(p);p.forEach(h),m.forEach(h),this.h()},h(){d(l,"class","inline-block align-middle border-4 border-purple-600 dark_border-purple-400 p-3 w-11/12 mx-auto h-15 font-bold text-purple-600 dark_text-purple-400 hover_text-purple-400 dark_hover_text-purple-600 hover_bg-purple-600 dark_hover_bg-purple-400 sm_hidden"),d(t,"class",u=""+((o[2]?"hidden sm_flex":"flex")+" flex-col sm_flex-row sm_items-center sm_justify-between w-full sm_w-auto text-center font-bold mt-5 sm_mt-0 sm_space-x-5 gap-1")),d(e,"class","flex flex-wrap items-center justify-between p-5 bg-white dark_bg-black border-purple-600 dark_border-purple-400 border-b-4 mx-auto w-full md_w-4/5")},m(_,m){x(_,e,m),v(e,l),v(l,r),v(e,n),v(e,t);for(let i=0;i<f.length;i+=1)f[i].m(t,null);a||(c=te(l,"click",o[3]),a=!0)},p(_,[m]){if(m&4&&s!==(s=(_[2]?"Show":"Hide")+"")&&P(r,s),m&3){b=_[0];let i;for(i=0;i<b.length;i+=1){const p=K(_,b,i);f[i]?f[i].p(p,m):(f[i]=Q(p),f[i].c(),f[i].m(t,null))}for(;i<f.length;i+=1)f[i].d(1);f.length=b.length}m&4&&u!==(u=""+((_[2]?"hidden sm_flex":"flex")+" flex-col sm_flex-row sm_items-center sm_justify-between w-full sm_w-auto text-center font-bold mt-5 sm_mt-0 sm_space-x-5 gap-1"))&&d(t,"class",u)},i:A,o:A,d(_){_&&h(e),F(f,_),a=!1,c()}}}function _e(o,e,l){let s;U(o,J,a=>l(4,s=a));let{links:r=[]}=e,n=s.url.pathname,t=!0;function u(){l(2,t=!t)}return o.$$set=a=>{"links"in a&&l(0,r=a.links)},o.$$.update=()=>{o.$$.dirty&16&&l(1,n=s.url.pathname)},[r,n,t,u,s]}class fe extends S{constructor(e){super();T(this,e,_e,pe,I,{links:0})}}function z(o,e,l){const s=o.slice();return s[1]=e[l],s}function he(o){let e,l=o[1].label+"",s;return{c(){e=k("p"),s=L(l),this.h()},l(r){e=w(r,"P",{class:!0});var n=$(e);s=N(n,l),n.forEach(h),this.h()},h(){d(e,"class","text-center")},m(r,n){x(r,e,n),v(e,s)},p(r,n){n&1&&l!==(l=r[1].label+"")&&P(s,l)},i:A,o:A,d(r){r&&h(e)}}}function de(o){let e,l,s,r;return l=new ne({props:{url:o[1].url,title:o[1].label,isExternal:!0,$$slots:{default:[me]},$$scope:{ctx:o}}}),{c(){e=k("p"),B(l.$$.fragment),s=H(),this.h()},l(n){e=w(n,"P",{class:!0});var t=$(e);C(l.$$.fragment,t),s=M(t),t.forEach(h),this.h()},h(){d(e,"class","text-center")},m(n,t){x(n,e,t),O(l,e,null),v(e,s),r=!0},p(n,t){const u={};t&1&&(u.url=n[1].url),t&1&&(u.title=n[1].label),t&17&&(u.$$scope={dirty:t,ctx:n}),l.$set(u)},i(n){r||(E(l.$$.fragment,n),r=!0)},o(n){y(l.$$.fragment,n),r=!1},d(n){n&&h(e),V(l)}}}function me(o){let e=o[1].label+"",l;return{c(){l=L(e)},l(s){l=N(s,e)},m(s,r){x(s,l,r)},p(s,r){r&1&&e!==(e=s[1].label+"")&&P(l,e)},d(s){s&&h(l)}}}function X(o){let e,l,s,r;const n=[de,he],t=[];function u(a,c){return a[1].url?0:1}return e=u(o),l=t[e]=n[e](o),{c(){l.c(),s=W()},l(a){l.l(a),s=W()},m(a,c){t[e].m(a,c),x(a,s,c),r=!0},p(a,c){let b=e;e=u(a),e===b?t[e].p(a,c):(G(),y(t[b],1,1,()=>{t[b]=null}),R(),l=t[e],l?l.p(a,c):(l=t[e]=n[e](a),l.c()),E(l,1),l.m(s.parentNode,s))},i(a){r||(E(l),r=!0)},o(a){y(l),r=!1},d(a){t[e].d(a),a&&h(s)}}}function be(o){let e,l,s=o[0],r=[];for(let t=0;t<s.length;t+=1)r[t]=X(z(o,s,t));const n=t=>y(r[t],1,1,()=>{r[t]=null});return{c(){e=k("footer");for(let t=0;t<r.length;t+=1)r[t].c();this.h()},l(t){e=w(t,"FOOTER",{class:!0});var u=$(e);for(let a=0;a<r.length;a+=1)r[a].l(u);u.forEach(h),this.h()},h(){d(e,"class","flex flex-wrap flex-col md_flex-row md_justify-center content-center gap-4 py-5 px-10 bg-white dark_bg-black border-purple-600 dark_border-purple-400 border-t-4 mx-auto w-full md_w-4/5 font-bold text-purple-600 dark_text-purple-400")},m(t,u){x(t,e,u);for(let a=0;a<r.length;a+=1)r[a].m(e,null);l=!0},p(t,[u]){if(u&1){s=t[0];let a;for(a=0;a<s.length;a+=1){const c=z(t,s,a);r[a]?(r[a].p(c,u),E(r[a],1)):(r[a]=X(c),r[a].c(),E(r[a],1),r[a].m(e,null))}for(G(),a=s.length;a<r.length;a+=1)n(a);R()}},i(t){if(!l){for(let u=0;u<s.length;u+=1)E(r[u]);l=!0}},o(t){r=r.filter(Boolean);for(let u=0;u<r.length;u+=1)y(r[u]);l=!1},d(t){t&&h(e),F(r,t)}}}function ge(o,e,l){let{links:s=[]}=e;return o.$$set=r=>{"links"in r&&l(0,s=r.links)},[s]}class ve extends S{constructor(e){super();T(this,e,ge,be,I,{links:0})}}function ke(o){let e,l,s,r,n,t,u,a,c,b,f,_;t=new fe({props:{links:ie}});const m=o[2].default,i=le(m,o,o[1],null);return f=new ve({props:{links:ue}}),{c(){e=k("meta"),s=k("meta"),r=H(),n=k("div"),B(t.$$.fragment),u=H(),a=k("div"),c=k("main"),i&&i.c(),b=H(),B(f.$$.fragment),this.h()},l(p){const g=re('[data-svelte="svelte-1l0lucd"]',document.head);e=w(g,"META",{property:!0,content:!0}),s=w(g,"META",{property:!0,content:!0}),g.forEach(h),r=M(p),n=w(p,"DIV",{class:!0});var j=$(n);C(t.$$.fragment,j),u=M(j),a=w(j,"DIV",{class:!0});var q=$(a);c=w(q,"MAIN",{class:!0});var D=$(c);i&&i.l(D),D.forEach(h),q.forEach(h),b=M(j),C(f.$$.fragment,j),j.forEach(h),this.h()},h(){d(e,"property","og:url"),d(e,"content",l="https://"+o[0].host+o[0].url.pathname),d(s,"property","og:site_name"),d(s,"content","Tadhg White's Portifolio Site"),d(c,"class","max-w-max mx-auto"),d(a,"class","bg-white dark_bg-black mx-auto w-full md_w-4/5 py-4 flex-grow px-5"),d(n,"class","flex flex-col h-auto min-h-screen bg-purple-600 dark_bg-purple-400")},m(p,g){v(document.head,e),v(document.head,s),x(p,r,g),x(p,n,g),O(t,n,null),v(n,u),v(n,a),v(a,c),i&&i.m(c,null),v(n,b),O(f,n,null),_=!0},p(p,[g]){(!_||g&1&&l!==(l="https://"+p[0].host+p[0].url.pathname))&&d(e,"content",l),i&&i.p&&(!_||g&2)&&ae(i,m,p,p[1],_?oe(m,p[1],g,null):se(p[1]),null)},i(p){_||(E(t.$$.fragment,p),E(i,p),E(f.$$.fragment,p),_=!0)},o(p){y(t.$$.fragment,p),y(i,p),y(f.$$.fragment,p),_=!1},d(p){h(e),h(s),p&&h(r),p&&h(n),V(t),i&&i.d(p),V(f)}}}function we(o,e,l){let s;U(o,J,t=>l(0,s=t));let{$$slots:r={},$$scope:n}=e;return o.$$set=t=>{"$$scope"in t&&l(1,n=t.$$scope)},[s,n,r]}class Ee extends S{constructor(e){super();T(this,e,we,ke,I,{})}}export{Ee as default};