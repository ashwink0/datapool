if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,n)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const t={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return t;default:return e(s)}}))).then((e=>{const s=n(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-a8b10d99"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/bbh2w5Xoyjqy1raJGiWYd/_buildManifest.js",revision:"bbh2w5Xoyjqy1raJGiWYd"},{url:"/_next/static/bbh2w5Xoyjqy1raJGiWYd/_ssgManifest.js",revision:"bbh2w5Xoyjqy1raJGiWYd"},{url:"/_next/static/chunks/09f2bf2d.78bb96bcf5c3495aa373.js",revision:"bbh2w5Xoyjqy1raJGiWYd"},{url:"/_next/static/chunks/4df47f87.43be7a9c95be0db6b9c2.js",revision:"bbh2w5Xoyjqy1raJGiWYd"},{url:"/_next/static/chunks/721592210f16974150109f2d6594c0e41ee014d2.d417c8e7d5c9aef5f2d3.js",revision:"bbh2w5Xoyjqy1raJGiWYd"},{url:"/_next/static/chunks/a2c2a696.aa123ff796556f973669.js",revision:"bbh2w5Xoyjqy1raJGiWYd"},{url:"/_next/static/chunks/commons.82f39e74396c38c1adb6.js",revision:"bbh2w5Xoyjqy1raJGiWYd"},{url:"/_next/static/chunks/ff239f9d.0a8f20f27437cc02f048.js",revision:"bbh2w5Xoyjqy1raJGiWYd"},{url:"/_next/static/chunks/framework.114f113ec24c188975ca.js",revision:"bbh2w5Xoyjqy1raJGiWYd"},{url:"/_next/static/chunks/main-c7e206ce8c3f360a84a5.js",revision:"bbh2w5Xoyjqy1raJGiWYd"},{url:"/_next/static/chunks/pages/%5Bproject%5D-6a33dec9f4de8b5e8b08.js",revision:"bbh2w5Xoyjqy1raJGiWYd"},{url:"/_next/static/chunks/pages/_app-3cd2e0215cc69d4cd1f9.js",revision:"bbh2w5Xoyjqy1raJGiWYd"},{url:"/_next/static/chunks/pages/_error-7b765bab3ae31dd56fab.js",revision:"bbh2w5Xoyjqy1raJGiWYd"},{url:"/_next/static/chunks/pages/index-1e5de61687920593907d.js",revision:"bbh2w5Xoyjqy1raJGiWYd"},{url:"/_next/static/chunks/polyfills-feb8a7604fa7fce626b2.js",revision:"bbh2w5Xoyjqy1raJGiWYd"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"bbh2w5Xoyjqy1raJGiWYd"},{url:"/_next/static/css/600c534fe57cb4f81017.css",revision:"bbh2w5Xoyjqy1raJGiWYd"},{url:"/_next/static/css/e740db17c14c995bd89c.css",revision:"bbh2w5Xoyjqy1raJGiWYd"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/manifest.json",revision:"bbf3ce48716e0257e5ad080cb89f041d"},{url:"/vercel.svg",revision:"0277e415b4bba9361a057a607884c295"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
