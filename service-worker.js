"use strict";var precacheConfig=[["/home/index.html","30c2a2345a51545f81483747df7b561a"],["/home/static/css/main.cfbc0282.css","6f4ba484f386b4c3b5b139342a9f7334"],["/home/static/js/main.24008eeb.js","c88c591e508db8880da0526134fc8bf1"],["/home/static/media/circle-regular.e15cc98d.svg","e15cc98d6271029e7609076081768333"],["/home/static/media/comment-alt-regular.1c84f4b7.svg","1c84f4b743aad0372a6af73006f8b9ac"],["/home/static/media/console-black.102f052b.svg","102f052b61242558270a0a2b544a4fb5"],["/home/static/media/console-white.2920fe64.svg","2920fe64b16f2e04b07c9546346fde97"],["/home/static/media/microphone-solid.88fc8dc3.svg","88fc8dc3868690c9e18f46df06697130"],["/home/static/media/volume-off-solid.1aad9254.svg","1aad9254d468be88fcb4b36630b4935f"],["/home/static/media/wifi-solid-on.7ab1199c.svg","7ab1199c69c6a7886a17d882fa585046"],["/home/static/media/windows-brands.3896580f.svg","3896580f55f446ecee4563c2e01cbd2b"],["/home/static/media/windows-exit.661ff08b.svg","661ff08b03c1636c20303b10faa2e20a"],["/home/static/media/windows-minimize.ec185826.svg","ec1858265c23a312b88d3cb303dc5328"],["/home/static/media/windows-square.870c3a3f.svg","870c3a3f4d0c243fead79ea6cd57b3b0"],["/home/static/media/windows-startup.11f6ce4c.svg","11f6ce4cf0f3f562824866c5b8067caa"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/home/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});