self.addEventListener("install",event=>{
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate",event=>{
  event.waitUntil(
    Promise.all([
      caches.delete("parla-v1.1.0"),
      self.registration.unregister()
    ]).then(()=>self.clients.matchAll({type:"window"}))
      .then(clients=>Promise.all(clients.map(client=>client.navigate(client.url).catch(()=>{}))))
  );
});