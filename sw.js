if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,c)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let n={};const d=e=>r(e,o),f={module:{uri:o},exports:n,require:d};i[o]=Promise.all(s.map((e=>f[e]||d(e)))).then((e=>(c(...e),n)))}}define(["./workbox-8a9ef17b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app.js",revision:"00a9f9f7e35164de18cdb501aa914fd1"},{url:"audio/5.mp3",revision:"f98b2a412cdccb107d6157cdb1c49fcc"},{url:"audio/sw.js",revision:"184082c05c323bf7e131595838ae3c09"},{url:"audio/workbox-8a9ef17b.js",revision:"8e4494d6b40d9cb4ada309e561a50f04"},{url:"bg.png",revision:"5290733adb9b4603d895e8f154db87a2"},{url:"img/1.jpg",revision:"27e51db691a84d98aea3b65989425382"},{url:"img/2.jpg",revision:"5c04977ab291cb50efbd66c85773e4e8"},{url:"index.html",revision:"98a46550b88fce4ff9eac47afb526575"},{url:"manifest.json",revision:"87321677fda79852759621ce2bf07f09"},{url:"music.jpg",revision:"3465233e42b4afbe75cb06442591d87a"},{url:"style.css",revision:"31f7b6cfd0ecd38cc22f8d0b68065881"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
