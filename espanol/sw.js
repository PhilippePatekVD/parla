const CACHE="parla-es-v2.0.1";
const ASSETS=[
  "./","./index.html","./foundation-v2.js","./a1-v2.js","./course-v2.js","./prepare-v2.js",
  "../shared/styles-v2.css","../shared/core-v2.js","./manifest.json","./icon.svg"
];
self.addEventListener("install",event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting()));
});
self.addEventListener("activate",event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(key=>key!==CACHE&&key.startsWith("parla-es-")).map(key=>caches.delete(key))))
      .then(()=>self.clients.claim())
  );
});
self.addEventListener("fetch",event=>{
  if(event.request.method!=="GET")return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin)return;
  event.respondWith(
    fetch(event.request)
      .then(response=>{
        if(response&&response.ok){
          const copy=response.clone();
          caches.open(CACHE).then(cache=>cache.put(event.request,copy));
        }
        return response;
      })
      .catch(()=>caches.match(event.request).then(cached=>cached||caches.match("./index.html")))
  );
});