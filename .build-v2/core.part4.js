function renderReference(tab=state.refTab||"grammar",search=""){
  state.refTab=tab;save();
  const labels={grammar:"Grammaire",articles:"Articles",verbs:"Conjugaison",tenses:"Temps",vocab:"Vocabulaire"};
  let body="";
  if(tab==="grammar"){
    const items=allGrammar().filter(x=>!search||normalize(JSON.stringify(x)).includes(normalize(search)));
    body='<section class="ref-grid">'+items.map(x=>'<article class="card ref-card"><div class="eyebrow">'+esc(x.level)+' · '+esc(x.unit)+'</div><h3>'+esc(x.title)+'</h3><p>'+esc(x.body||"")+'</p>'+(x.examples?.length?'<div class="examples">'+x.examples.slice(0,4).map(e=>'<div class="example"><b>'+esc(e.t||e[0])+'</b><span>'+esc(e.fr||e[1]||"")+'</span></div>').join("")+'</div>':'')+'</article>').join("")+'</section>';
  }else if(tab==="articles"){
    body='<section class="ref-grid">'+(COURSE.articleGuide||[]).map(x=>'<article class="card ref-card"><h3>'+esc(x.title)+'</h3><p>'+esc(x.body||"")+'</p>'+(x.table?'<div class="table-wrap"><table class="ref-table">'+(x.headers?'<thead><tr>'+x.headers.map(h=>'<th>'+esc(h)+'</th>').join("")+'</tr></thead>':'')+'<tbody>'+x.table.map(row=>'<tr>'+row.map(c=>'<td>'+esc(c)+'</td>').join("")+'</tr>').join("")+'</tbody></table></div>':'')+(x.examples?'<div class="examples">'+x.examples.map(e=>'<div class="example"><b>'+esc(e.t||e[0])+'</b><span>'+esc(e.fr||e[1]||"")+'</span></div>').join("")+'</div>':'')+'</article>').join("")+'</section>';
  }else if(tab==="verbs"){
    const items=allVerbs().filter(x=>!search||normalize(x.infinitive+" "+(x.fr||"")+" "+(x.tenseLabel||"")).includes(normalize(search)));
    body='<section class="ref-grid">'+items.map(v=>verbTable(v)).join("")+'</section>';
  }else if(tab==="tenses"){
    body='<section class="ref-grid">'+(COURSE.tenseGuide||[]).map(x=>'<article class="card ref-card"><div class="eyebrow">'+esc(x.level||"")+'</div><h3>'+esc(x.title)+'</h3><p>'+esc(x.body||"")+'</p>'+(x.formation?'<p style="margin-top:8px"><b>Formation :</b> '+esc(x.formation)+'</p>':'')+(x.examples?'<div class="examples">'+x.examples.map(e=>'<div class="example"><b>'+esc(e.t||e[0])+'</b><span>'+esc(e.fr||e[1]||"")+'</span></div>').join("")+'</div>':'')+'</article>').join("")+'</section>';
  }else{
    const items=allVocab().filter(x=>!search||normalize(x.t+" "+x.fr+" "+x.unit).includes(normalize(search)));
    body='<section class="ref-grid">'+items.map(v=>'<article class="card ref-card"><div class="vocab-row"><div><div class="eyebrow">'+esc(v.level)+' · '+esc(v.unit)+'</div><div class="vocab-target">'+esc(v.t)+'</div><div class="vocab-meta">'+esc(v.fr)+(v.note?" · "+esc(v.note):"")+'</div></div><button class="audio" data-say="'+esc(v.t)+'">▶</button></div></article>').join("")+'</section>';
  }

  app.innerHTML='<main class="shell">'+top("reference")+
    '<section class="card ref-head"><div class="eyebrow">Boîte à outils</div><h1>'+esc(labels[tab])+'</h1><div class="tabs">'+
    Object.entries(labels).map(([k,l])=>'<button data-tab="'+k+'" class="'+(tab===k?"on":"")+'">'+l+'</button>').join("")+
    '</div>'+(["grammar","verbs","vocab"].includes(tab)?'<input id="refSearch" class="search" value="'+esc(search)+'" placeholder="Rechercher…">':'')+'</section>'+body+'</main>';

  bindNav();
  document.querySelectorAll("[data-tab]").forEach(b=>b.onclick=()=>renderReference(b.dataset.tab,""));
  document.querySelectorAll("[data-say]").forEach(b=>b.onclick=()=>speak(b.dataset.say));
  if($("refSearch")){
    let timer;
    $("refSearch").oninput=e=>{clearTimeout(timer);const v=e.target.value;timer=setTimeout(()=>renderReference(tab,v),160)};
    if(search)setTimeout(()=>{$("refSearch")?.focus();$("refSearch")?.setSelectionRange(search.length,search.length)},0);
  }
}

let reviewQueue=[],reviewIndex=0,revealed=false;
function renderReview(reset=true){
  if(reset){reviewQueue=dueReviewIds();reviewIndex=0;revealed=false}
  app.innerHTML='<main class="shell">'+top("review")+'<section id="reviewBox"></section></main>';
  bindNav();renderReviewCard();
}
function renderReviewCard(){
  const box=$("reviewBox");
  if(!reviewQueue.length||reviewIndex>=reviewQueue.length){
    box.innerHTML='<section class="card empty"><div class="eyebrow">Révisions</div><h2>À jour</h2><p>Les prochaines cartes apparaîtront automatiquement au moment utile.</p><button class="ghost" data-view="home">Accueil</button></section>';
    bindNav();return;
  }
  const id=reviewQueue[reviewIndex],c=state.reviews[id];
  if(!c){reviewIndex++;renderReviewCard();return}
  box.innerHTML='<section class="card review"><div class="exercise-top"><span class="exercise-type">'+esc(SKILL_LABELS[c.skill]||c.skill||"Révision")+'</span><span class="exercise-count">'+(reviewIndex+1)+' / '+reviewQueue.length+'</span></div><button class="audio" id="reviewAudio" style="margin-top:18px">▶</button><div class="front">'+esc(c.front)+'</div>'+
    (revealed?'<div class="back"><b>'+esc(c.back)+'</b></div>'+(c.note?'<p class="lead" style="font-size:12px;margin:10px auto 0">'+esc(c.note)+'</p>':'')+'<div class="ratings"><button data-rate="0">Encore</button><button data-rate="1">Difficile</button><button data-rate="2">Bien</button><button data-rate="3">Facile</button></div>':'<button class="primary" id="reveal" style="margin-top:16px">Afficher</button>')+
    '</section>';
  $("reviewAudio").onclick=()=>speak(c.audio||c.back||c.front);
  if($("reveal"))$("reveal").onclick=()=>{revealed=true;renderReviewCard()};
  document.querySelectorAll("[data-rate]").forEach(b=>b.onclick=()=>{rateReview(id,Number(b.dataset.rate));reviewIndex++;revealed=false;renderReviewCard()});
}
function rateReview(id,r){
  const c=state.reviews[id],intervals=[0,1,3,7,14,30,60,120];
  c.level=r===0?0:Math.min(intervals.length-1,(c.level||0)+(r===3?2:1));
  const days=r===0?10/1440:intervals[c.level];
  c.due=Date.now()+days*86400000;
  if(c.kind==="error"&&r>=2&&c.level>=2)delete state.errors[id];
  state.xp+=r===0?1:3;touchStudyDay();save();
}

function renderData(){
  app.innerHTML='<main class="shell">'+top("data")+
    '<section class="card hero"><div class="eyebrow">Progression</div><h2>Sauvegarde</h2><p class="lead">Exporte ou réimporte ta progression de cette langue.</p><div class="actions"><button class="primary" id="export">Exporter</button><label class="ghost" style="display:grid;place-items:center">Importer<input id="import" type="file" accept="application/json" class="hidden"></label><button class="danger" id="reset">Réinitialiser</button></div></section></main>';
  bindNav();
  $("export").onclick=()=>{
    const blob=new Blob([JSON.stringify(state,null,2)],{type:"application/json"}),url=URL.createObjectURL(blob),a=document.createElement("a");
    a.href=url;a.download=COURSE.storageKey+"-"+dayKey()+".json";a.click();URL.revokeObjectURL(url);
  };
  $("import").onchange=async e=>{
    const f=e.target.files?.[0];if(!f)return;
    try{
      const x=JSON.parse(await f.text());if(!x||typeof x!=="object")throw new Error();
      state={...freshState(),...x};save();renderHome();
    }catch{alert("Fichier invalide.")}
  };
  $("reset").onclick=()=>{
    if(confirm("Réinitialiser toute la progression de cette langue ?")){
      localStorage.removeItem(COURSE.storageKey);state=freshState();save();renderHome();
    }
  };
}

function render(view){
  state.view=view;save();
  if(view==="home")renderHome();
  else if(view==="path")renderPath();
  else if(view==="reference")renderReference(state.refTab||"grammar","");
  else if(view==="review")renderReview(true);
  else if(view==="data")renderData();
  else renderHome();
}

render(state.view||"home");
})();