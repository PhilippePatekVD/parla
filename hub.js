(function(){
"use strict";

function readState(key){
  try{return JSON.parse(localStorage.getItem(key)||"{}")}catch{return{}}
}
function stats(key){
  const s=readState(key);
  const done=Object.keys(s.done||{}).length;
  const pct=Math.max(0,Math.min(100,Math.round(done/48*100)));
  const due=Object.values(s.reviews||{}).filter(x=>Number(x?.due||0)<=Date.now()).length;
  return{pct,xp:Number(s.xp)||0,streak:Number(s.streak)||0,due};
}
function put(prefix,data){
  const ids={pct:prefix+"Pct",xp:prefix+"Xp",streak:prefix+"Streak",due:prefix+"Due",progress:prefix+"Progress"};
  document.getElementById(ids.pct).textContent=data.pct+" %";
  document.getElementById(ids.xp).textContent=String(data.xp);
  document.getElementById(ids.streak).textContent=data.streak+" j";
  document.getElementById(ids.due).textContent=String(data.due);
  document.getElementById(ids.progress).style.width=data.pct+"%";
}

put("it",stats("parla_v1_1"));
put("de",stats("sprich_de_v1_0"));

// Migration cleanup: the old Italian app used a service worker at repository root.
// Unregister only that obsolete root scope so it cannot intercept Italiano/Deutsch.
if("serviceWorker" in navigator){
  const rootPath=new URL("./",location.href).pathname;
  navigator.serviceWorker.getRegistrations().then(regs=>{
    regs.forEach(reg=>{
      try{
        const scopePath=new URL(reg.scope).pathname;
        if(scopePath===rootPath)reg.unregister();
      }catch{}
    });
  }).catch(()=>{});
}
if("caches" in window){
  caches.keys().then(keys=>{
    keys.filter(k=>k==="parla-v1.1.0").forEach(k=>caches.delete(k));
  }).catch(()=>{});
}
})();