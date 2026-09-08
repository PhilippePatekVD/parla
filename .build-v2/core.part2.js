function speak(text,rate=.87){
  if(!("speechSynthesis" in window)||!text)return;
  speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(text);u.lang=COURSE.locale;u.rate=rate;
  speechSynthesis.speak(u);
}
function speakSequence(lines,index=0){
  if(!("speechSynthesis" in window)||index>=lines.length)return;
  const u=new SpeechSynthesisUtterance(lines[index].t);u.lang=COURSE.locale;u.rate=.84;
  u.onend=()=>setTimeout(()=>speakSequence(lines,index+1),180);
  speechSynthesis.speak(u);
}
function updateSkill(q,ok){
  const k=q.skill||"grammar";
  if(!state.skills[k])state.skills[k]={correct:0,attempts:0};
  state.skills[k].attempts++;if(ok)state.skills[k].correct++;
}
function reviewFromError(q,ctx){
  const id="err:"+q.id,old=state.reviews[id]||{};
  state.reviews[id]={
    kind:"error",front:q.prompt,back:q.model||q.answer||(q.expected?.[0]||""),note:q.explanation||"",
    audio:q.audio||q.model||"",skill:q.skill||"grammar",level:Number(old.level)||0,due:Date.now()+10*60*1000,
    unitId:ctx.unit.id
  };
  state.errors[id]=(state.errors[id]||0)+1;
}
function seedUnitReviews(unit){
  (unit.vocab||[]).forEach((v,i)=>{
    const id="voc:"+unit.id+":"+i;
    if(!state.reviews[id])state.reviews[id]={kind:"vocab",front:v.t,back:v.fr,note:v.note||"",audio:v.t,skill:"vocab",level:0,due:Date.now()+i*300000,unitId:unit.id};
  });
}

function top(active){
  const nav=[["home","Accueil"],["path","Parcours"],["reference","Références"],["review","Révisions"+(dueReviewIds().length?" · "+dueReviewIds().length:"")],["data","Données"]];
  return '<header class="top"><a class="brand" href="#" data-view="home"><div class="logo">'+esc(COURSE.logoLetter||"P")+'</div><div><b>'+esc(COURSE.name)+'</b><small>'+esc(COURSE.subtitle||"")+'</small></div></a><nav class="nav">'+
    nav.map(x=>'<button data-view="'+x[0]+'" class="'+(active===x[0]?"on":"")+'">'+x[1]+'</button>').join("")+
    '<a class="hub-link" href="../">Langues</a></nav></header>';
}
function bindNav(){document.querySelectorAll("[data-view]").forEach(el=>el.onclick=e=>{e.preventDefault();render(el.dataset.view)})}
function stat(label,value){return '<div class="card stat"><strong>'+esc(value)+'</strong><span>'+esc(label)+'</span></div>'}
function weakSkills(){
  return Object.keys(SKILL_LABELS).map(k=>({k,p:skillPct(k),a:state.skills[k]?.attempts||0})).filter(x=>x.a>=3).sort((a,b)=>a.p-b.p).slice(0,4);
}

const app=document.getElementById("app");

function renderHome(){
  const n=nextAction(),weak=weakSkills();
  app.innerHTML='<main class="shell">'+top("home")+
    '<section class="card hero"><div class="eyebrow">'+esc(n.ctx.level.label)+' · '+esc(n.ctx.level.cefr||"")+'</div><h1>'+esc(COURSE.hero||COURSE.name)+'</h1><p class="lead">'+esc(COURSE.intro||"")+'</p><div class="actions"><button class="primary" id="continue">Continuer · '+esc(n.stage.short)+'</button>'+(dueReviewIds().length?'<button class="ghost" data-view="review">'+dueReviewIds().length+' révision(s)</button>':'')+'</div></section>'+
    '<section class="stats">'+stat("Progression",overallPct()+" %")+stat("Unités validées",completedUnits()+"/"+ALL_UNITS.length)+stat("XP",state.xp)+stat("Série",state.streak+" j")+'</section>'+
    '<section class="section"><div class="section-head"><div><h2>Prochaine étape</h2><p>'+esc(n.ctx.level.label)+' · '+esc(n.ctx.unit.title)+'</p></div></div>'+nextCard(n)+'</section>'+
    '<section class="section"><div class="section-head"><div><h2>Maîtrise</h2><p>Les scores reflètent uniquement les exercices déjà rencontrés.</p></div></div><div class="skill-grid">'+
    (weak.length?weak:Object.keys(SKILL_LABELS).slice(0,4).map(k=>({k,p:skillPct(k),a:state.skills[k]?.attempts||0}))).map(x=>'<div class="card skill"><b>'+x.p+' %</b><span>'+esc(SKILL_LABELS[x.k])+'</span><div class="progress '+(x.p>=80?"green":"")+'"><span style="width:'+x.p+'%"></span></div></div>').join("")+
    '</div></section><div class="footer">'+esc(COURSE.name)+'</div></main>';
  bindNav();$("continue").onclick=()=>openStage(n.ctx.unit.id,n.stageIndex);
}
function nextCard(n){
  return '<article class="card course-head"><div class="eyebrow">'+esc(n.stage.label)+'</div><h2>'+esc(n.ctx.unit.title)+'</h2><p>'+esc(n.ctx.unit.goal)+'</p><div class="progress" style="margin-top:17px"><span style="width:'+Math.round(completedStages(n.ctx.unit.id)/5*100)+'%"></span></div></article>';
}

function renderPath(){
  app.innerHTML='<main class="shell">'+top("path")+
    '<section class="card hero"><div class="eyebrow">Programme structuré</div><h2>Du tout début à '+esc(COURSE.maxLevel||"A2")+'.</h2><p class="lead">Chaque unité se valide par un cycle complet et un checkpoint à 80 %.</p></section>'+
    COURSE.levels.map(level=>{
      const units=ALL_UNITS.filter(x=>x.level.id===level.id);
      return '<section class="level-block"><div class="level-title"><h2>'+esc(level.label)+'</h2><span>'+esc(level.cefr||"")+' · '+units.length+' unités</span></div><div class="unit-grid">'+units.map(unitCard).join("")+'</div></section>';
    }).join("")+'</main>';
  bindNav();document.querySelectorAll("[data-unit]").forEach(b=>b.onclick=()=>openUnit(b.dataset.unit));
}
function unitCard(ctx){
  const unlocked=unitUnlocked(ctx),passed=checkpointPassed(ctx.unit.id),stages=completedStages(ctx.unit.id);
  return '<button class="card unit '+(!unlocked?"locked":"")+'" data-unit="'+esc(ctx.unit.id)+'" '+(!unlocked?"disabled":"")+'><div class="unit-num">'+String(ctx.index+1).padStart(2,"0")+'</div><div><h3>'+esc(ctx.unit.title)+'</h3><p>'+esc(ctx.unit.goal)+'</p><div class="progress" style="margin-top:9px"><span style="width:'+Math.round(stages/5*100)+'%"></span></div></div><div class="unit-meta"><span class="pill '+(passed?"done":!unlocked?"lock":"")+'">'+(passed?"Validée":!unlocked?"Verrouillée":esc(ctx.level.cefr||ctx.level.label))+'</span><div class="unit-progress">'+stages+'/5 étapes</div></div></button>';
}
function openUnit(id){
  const ctx=unitCtx(id);if(!ctx||!unitUnlocked(ctx)){renderPath();return}
  app.innerHTML='<main class="shell">'+top("path")+
    '<section class="card course-head"><div class="eyebrow">'+esc(ctx.level.label)+' · '+esc(ctx.level.cefr||"")+'</div><h2>'+esc(ctx.unit.title)+'</h2><p>'+esc(ctx.unit.goal)+'</p></section>'+
    '<section class="section"><div class="cycle">'+STAGES.map((s,i)=>stageCard(ctx,s,i)).join("")+'</div></section>'+
    '<section class="section"><div class="section-head"><div><h2>Ce que tu vas maîtriser</h2><p>Une notion à la fois, puis réutilisation dans plusieurs contextes.</p></div></div><div class="theory-grid">'+(ctx.unit.grammar||[]).slice(0,3).map(theoryCard).join("")+'</div></section></main>';
  bindNav();document.querySelectorAll("[data-stage]").forEach(b=>b.onclick=()=>openStage(id,Number(b.dataset.stage)));
}
function stageCard(ctx,s,i){
  const unlocked=stageUnlocked(ctx,i),rec=stageRecord(ctx.unit.id,s.id),completed=!!rec?.completed;
  return '<button class="card stage '+(!unlocked?"locked":"")+'" data-stage="'+i+'" '+(!unlocked?"disabled":"")+'><div><span class="num">'+(i+1)+' · '+esc(s.label)+'</span><h3>'+esc(s.short)+'</h3><p>'+esc(s.desc)+'</p></div><div class="stage-foot"><span>'+(s.threshold?s.threshold+" % requis":"scène guidée")+'</span><span class="pill '+(completed?"done":"")+'">'+(completed?(rec.best!=null?rec.best+" %":"Fait"):unlocked?"Disponible":"Verrouillé")+'</span></div></button>';
}
function theoryCard(g){
  return '<article class="card theory"><h3>'+esc(g.title)+'</h3><p>'+esc(g.body||"")+'</p>'+(g.examples?.length?'<div class="examples">'+g.examples.map(e=>'<div class="example"><b>'+esc(e.t||e[0])+'</b><span>'+esc(e.fr||e[1]||"")+'</span></div>').join("")+'</div>':'')+'</article>';
}

function openStage(unitId,stageIndex){
  const ctx=unitCtx(unitId);if(!ctx||!stageUnlocked(ctx,stageIndex)){openUnit(unitId);return}
  const stage=STAGES[stageIndex];
  if(stage.id==="immersion")renderImmersion(ctx);
  else if(stage.id==="focus")renderFocus(ctx);
  else startSession(ctx,stageIndex);
}
function renderImmersion(ctx){
  const scene=ctx.unit.scene||{title:"Écoute active",lines:[]};
  app.innerHTML='<main class="shell study">'+top("")+
    '<section class="card course-head"><div class="eyebrow">1 · Immersion</div><h2>'+esc(scene.title||ctx.unit.title)+'</h2><p>'+esc(scene.intro||"Écoute d’abord sans traduire mot à mot. Cherche le sens global.")+'</p></section>'+
    '<section class="card scene"><div class="scene-head"><h3>Scène</h3><div><button class="soft" id="playScene">▶ Écouter</button> <button class="ghost" id="toggleTranslation">Traduction</button></div></div><div class="scene-lines">'+
      (scene.lines||[]).map((l,i)=>'<div class="scene-line"><span class="speaker">'+esc(l.speaker||"")+'</span><div><div class="target">'+esc(l.t)+'</div><div class="translation hidden" data-tr="'+i+'">'+esc(l.fr||"")+'</div></div><button class="audio" data-say="'+esc(l.t)+'">▶</button></div>').join("")+
    '</div></section>'+
    '<section class="theory-grid">'+(ctx.unit.contextNotes||[]).map(theoryCard).join("")+'</section>'+
    '<div class="actions"><button class="ghost" id="backUnit">Retour</button><button class="primary" id="completeImmersion">J’ai écouté et compris le contexte</button></div></main>';
  bindNav();$("backUnit").onclick=()=>openUnit(ctx.unit.id);
  $("playScene").onclick=()=>{if("speechSynthesis" in window)speechSynthesis.cancel();speakSequence(scene.lines||[])};
  $("toggleTranslation").onclick=()=>document.querySelectorAll("[data-tr]").forEach(x=>x.classList.toggle("hidden"));
  document.querySelectorAll("[data-say]").forEach(b=>b.onclick=()=>speak(b.dataset.say,.84));
  $("completeImmersion").onclick=()=>{const p=pFor(ctx.unit.id);p.immersion={completed:true,date:dayKey()};state.xp+=5;touchStudyDay();save();openUnit(ctx.unit.id)};
}
function verbTable(v){
  const rows=Object.entries(v.forms||{}).map(([p,f])=>'<tr><td>'+esc(p)+'</td><td><b>'+esc(f)+'</b></td></tr>').join("");
  return '<article class="card theory"><h3>'+esc(v.infinitive)+' · '+esc(v.fr||"")+'</h3><p>'+esc(v.note||"")+'</p><div class="table-wrap"><table class="ref-table"><thead><tr><th>Personne</th><th>'+esc(v.tenseLabel||v.tense||"Forme")+'</th></tr></thead><tbody>'+rows+'</tbody></table></div></article>';
}
function renderFocus(ctx){
  app.innerHTML='<main class="shell study">'+top("")+
    '<section class="card course-head"><div class="eyebrow">2 · Explication</div><h2>'+esc(ctx.unit.focusTitle||ctx.unit.title)+'</h2><p>'+esc(ctx.unit.focusIntro||"Lis les règles, observe les exemples, puis vérifie immédiatement que tu sais les appliquer.")+'</p></section>'+
    '<section class="theory-grid">'+(ctx.unit.grammar||[]).map(theoryCard).join("")+(ctx.unit.verbs||[]).map(verbTable).join("")+'</section>'+
    (ctx.unit.memoryTip?'<div class="notice" style="margin-top:11px"><b>À retenir :</b> '+esc(ctx.unit.memoryTip)+'</div>':'')+
    '<div class="actions"><button class="ghost" id="backUnit">Retour</button><button class="primary" id="startFocus">Vérifier mes acquis</button></div></main>';
  bindNav();$("backUnit").onclick=()=>openUnit(ctx.unit.id);$("startFocus").onclick=()=>startSession(ctx,1);
}
