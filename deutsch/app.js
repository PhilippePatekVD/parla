(function(){
"use strict";
const DATA=window.DEUTSCH_CURRICULUM;
const KEY="sprich_de_v1_0";
const OLD_KEY="sprich_de_v0";
const SKILLS=["vocab","grammar","conjugation","listening","production"];
const SKILL_LABELS={vocab:"Vocabulaire",grammar:"Grammaire",conjugation:"Conjugaison",listening:"Compréhension",production:"Production",pragmatics:"Production"};
const $=id=>document.getElementById(id);
const esc=v=>String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
const norm=x=>String(x||"").toLowerCase().replace(/ß/g,"ss").trim().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[’']/g,"'").replace(/[.,!?;:]/g,"").replace(/\s+/g," ");
const localDay=()=>{const d=new Date(),m=String(d.getMonth()+1).padStart(2,"0"),day=String(d.getDate()).padStart(2,"0");return d.getFullYear()+"-"+m+"-"+day};
const clone=x=>JSON.parse(JSON.stringify(x));
const appEl=$("app");
let session=null,reviewQueue=[],reviewIndex=0,reviewReveal=false,builderWords=[];

function fresh(){
  const skills={};
  SKILLS.forEach(k=>skills[k]={correct:0,attempts:0});
  return{version:"1.0",xp:0,streak:0,last:null,done:{},reviews:{},skills,errors:{},view:"home",legacy:null};
}
function load(){
  let state=fresh();
  try{state=Object.assign(state,JSON.parse(localStorage.getItem(KEY)||"{}"))}catch{}
  if(!state.legacy){
    try{
      const old=JSON.parse(localStorage.getItem(OLD_KEY)||"null");
      if(old){
        state.legacy={xp:Number(old.xp)||0,streak:Number(old.streak)||0,doneCount:Object.keys(old.done||{}).length,reviews:Object.keys(old.reviews||{}).length};
        state.xp=Math.max(state.xp,Number(old.xp)||0);
        state.streak=Math.max(state.streak,Number(old.streak)||0);
        if(!Object.keys(state.reviews||{}).length&&old.reviews)state.reviews=old.reviews;
      }
    }catch{}
  }
  state.skills=state.skills||fresh().skills;
  SKILLS.forEach(k=>state.skills[k]=state.skills[k]||{correct:0,attempts:0});
  state.done=state.done||{};state.reviews=state.reviews||{};state.errors=state.errors||{};
  Object.keys(state.reviews).forEach(id=>{
    const card=state.reviews[id];
    if(card && card.it && !card.front){
      state.reviews[id]={
        kind:"vocab",
        front:card.it,
        back:card.fr||"",
        note:"",
        audio:card.it,
        skill:"vocab",
        level:Number(card.level)||0,
        due:Number(card.due)||Date.now()
      };
    }
  });
  return state;
}
let s=load();
const save=()=>localStorage.setItem(KEY,JSON.stringify(s));

function study(){
  const d=localDay();
  if(s.last===d)return;
  if(!s.last)s.streak=1;
  else{
    const a=new Date(s.last+"T12:00:00"),b=new Date(d+"T12:00:00");
    const gap=Math.round((b-a)/86400000);
    s.streak=gap===1?Math.max(1,s.streak)+1:1;
  }
  s.last=d;save();
}
function speak(text,rate=.88){
  if(!("speechSynthesis" in window))return;
  speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(text);u.lang="de-DE";u.rate=rate;
  speechSynthesis.speak(u);
}
function skillKey(k){return SKILLS.includes(k)?k:(k==="pragmatics"?"production":"grammar")}
function skillPct(k){
  const x=s.skills[k]||{correct:0,attempts:0};
  if(!x.attempts)return 0;
  return Math.round(x.correct/x.attempts*100);
}
function allLessons(){
  const out=[];
  DATA.units.forEach((u,ui)=>{
    const stages=[
      {suffix:"discover",stage:"1 · Découvrir",title:"Comprendre",goal:u.objective,q:u.intro,theory:u.grammar},
      {suffix:"build",stage:"2 · Construire",title:"Construire les phrases",goal:"Manipuler la grammaire et la conjugaison de l’unité.",q:u.structure,theory:[...u.grammar,...(u.verbs||[]).map(v=>({title:v.name+" — "+v.fr,body:v.note||"Conjugaison essentielle à reconnaître et utiliser.",examples:v.forms.map(f=>[f,""])}))]},
      {suffix:"speak",stage:"3 · Dialoguer",title:"Parler en situation",goal:"Réagir naturellement dans une mini-conversation.",q:u.dialogue,theory:[]}
    ];
    const pool=[...u.intro,...u.structure,...u.dialogue];
    const checkIndexes=[1,2,4,6,8];
    stages.push({suffix:"check",stage:"4 · Checkpoint",title:"Checkpoint de l’unité",goal:"Valider les acquis avant de poursuivre.",q:checkIndexes.map(i=>clone(pool[i%pool.length])),theory:[],checkpoint:true});
    stages.forEach((l,li)=>out.push({...l,id:u.id+"-"+l.suffix,unitId:u.id,unitIndex:ui,lessonIndex:li,unit:u}));
  });
  return out;
}
const LESSONS=allLessons();
const lessonById=id=>LESSONS.find(x=>x.id===id);
const checkpointForUnit=id=>lessonById(id+"-check");
function doneRecord(id){return s.done[id]||null}
function checkpointPassed(unitId){const r=doneRecord(unitId+"-check");return !!(r&&r.passed)}
function unitUnlocked(index){return index===0||checkpointPassed(DATA.units[index-1].id)}
function lessonUnlocked(l){
  if(!unitUnlocked(l.unitIndex))return false;
  if(l.lessonIndex===0)return true;
  const prev=LESSONS.find(x=>x.unitId===l.unitId&&x.lessonIndex===l.lessonIndex-1);
  return !!doneRecord(prev.id);
}
function completedCount(){return LESSONS.filter(l=>doneRecord(l.id)).length}
function progress(){return Math.round(completedCount()/LESSONS.length*100)}
function dueIds(){const now=Date.now();return Object.keys(s.reviews).filter(k=>Number(s.reviews[k].due||0)<=now)}
function nextLesson(){
  return LESSONS.find(l=>lessonUnlocked(l)&&!doneRecord(l.id))||LESSONS.find(l=>lessonUnlocked(l))||LESSONS[0];
}
function top(active){
  return '<header class="top"><div class="brand"><div class="logo">S</div><div><b>Sprich!</b><small>Deutsch Coach · A1</small></div></div><nav class="nav">'+
  [["home","Accueil"],["course","Parcours"],["grammar","Grammaire"],["vocab","Vocabulaire"],["review","Révisions"+(dueIds().length?" · "+dueIds().length:"")],["data","Données"]]
  .map(x=>'<button data-view="'+x[0]+'" class="'+(active===x[0]?"on":"")+'">'+x[1]+'</button>').join("")+'</nav></header>';
}
function bindNav(){
  document.querySelectorAll("[data-view]").forEach(b=>b.onclick=()=>render(b.dataset.view));
}
function stat(label,value){return '<div class="card stat"><strong>'+esc(value)+'</strong><span>'+esc(label)+'</span></div>'}
function home(){
  const next=nextLesson(),u=next.unit;
  appEl.innerHTML='<main class="shell">'+top("home")+
  '<section class="card hero"><div class="eyebrow">A1 · Formation progressive</div><h1>Verstehen. Bilden. Sprechen.</h1><p class="lead">Un parcours structuré comme un vrai cours : grammaire utile, conjugaison en contexte, construction de phrases, compréhension et production dès le début.</p><div class="actions"><button class="primary" id="continue">Continuer · '+esc(u.title)+'</button><button class="ghost" data-view="review">Réviser '+dueIds().length+' élément(s)</button></div></section>'+
  '<section class="stats">'+stat("Progression A1",progress()+" %")+stat("XP",s.xp)+stat("Série",s.streak+" j")+stat("Leçons",completedCount()+"/"+LESSONS.length)+'</section>'+
  '<section class="section"><div class="section-head"><div><h2>Compétences</h2><p>Sprich! suit ce que vous maîtrisez réellement, pas seulement les leçons terminées.</p></div></div><div class="skills">'+SKILLS.map(k=>'<div class="skill"><b>'+skillPct(k)+' %</b><span>'+SKILL_LABELS[k]+'</span><div class="progress '+(skillPct(k)>=70?"green":"")+'"><span style="width:'+skillPct(k)+'%"></span></div></div>').join("")+'</div></section>'+
  '<section class="section"><div class="section-head"><div><h2>Prochaine étape</h2><p>Unité '+(next.unitIndex+1)+' · '+esc(next.stage)+'</p></div></div>'+lessonCard(next)+'</section>'+
  (s.legacy?'<div class="note" style="margin-top:14px">Votre ancienne progression v1 a été conservée en historique : '+s.legacy.doneCount+' leçon(s), '+s.legacy.xp+' XP.</div>':'')+
  '<div class="footer">100 % local · sans API · installable sur iPhone</div></main>';
  bindNav();$("continue").onclick=()=>openLesson(next.id);
}
function unitCompletion(u){
  const ls=LESSONS.filter(l=>l.unitId===u.id),done=ls.filter(l=>doneRecord(l.id)).length;
  return{done,total:ls.length,pct:Math.round(done/ls.length*100)};
}
function unitCard(u,i){
  const p=unitCompletion(u),unlocked=unitUnlocked(i);
  return '<button class="card unit '+(!unlocked?"locked":"")+'" data-unit="'+u.id+'" '+(!unlocked?'disabled':'')+'><div class="unit-num">'+String(i+1).padStart(2,"0")+'</div><div><h3>'+esc(u.title)+'</h3><p>'+esc(u.subtitle)+'</p><div class="progress" style="margin-top:10px"><span style="width:'+p.pct+'%"></span></div></div><div class="unit-meta"><span class="pill '+(checkpointPassed(u.id)?"done":!unlocked?"lock":"")+'">'+(checkpointPassed(u.id)?"Validée":!unlocked?"Verrouillée":"A1")+'</span><div class="unit-progress">'+p.done+'/'+p.total+' leçons</div></div></button>';
}
function course(){
  appEl.innerHTML='<main class="shell">'+top("course")+
  '<section class="card hero"><div class="eyebrow">CECRL · A1</div><h2>12 unités. 48 leçons.</h2><p class="lead">Chaque unité suit le même rythme : découvrir → construire → dialoguer → valider. Le checkpoint demande 70 % pour ouvrir l’unité suivante.</p></section>'+
  '<section class="section"><div class="unit-grid">'+DATA.units.map(unitCard).join("")+'</div></section></main>';
  bindNav();document.querySelectorAll("[data-unit]").forEach(b=>b.onclick=()=>unitView(b.dataset.unit));
}
function lessonCard(l){
  const d=doneRecord(l.id),unlock=lessonUnlocked(l);
  return '<button class="lesson '+(!unlock?"locked":"")+'" data-lesson="'+l.id+'" '+(!unlock?'disabled':'')+'><div><small>'+esc(l.stage)+'</small><h3>'+esc(l.title)+'</h3><p>'+esc(l.goal)+'</p></div><div class="lesson-foot"><span>'+(l.checkpoint?"Validation ≥ 70 %":l.q.length+" exercices")+'</span><span class="pill '+(d&&d.passed!==false?"done":"")+'">'+(d?(d.score+" %"):unlock?"Disponible":"Verrouillée")+'</span></div></button>';
}
function unitView(id){
  const u=DATA.units.find(x=>x.id===id),idx=DATA.units.indexOf(u);
  if(!u||!unitUnlocked(idx)){course();return}
  const ls=LESSONS.filter(l=>l.unitId===id);
  appEl.innerHTML='<main class="shell">'+top("course")+
  '<section class="card course-head"><div class="eyebrow">Unité '+(idx+1)+' · A1</div><h2>'+esc(u.title)+'</h2><p>'+esc(u.objective)+'</p></section>'+
  '<section class="section"><div class="lesson-grid">'+ls.map(lessonCard).join("")+'</div></section>'+
  '<section class="section"><div class="section-head"><div><h2>À maîtriser</h2><p>Repères linguistiques de l’unité.</p></div></div><div class="library-grid">'+u.grammar.map(g=>'<div class="card lib-card"><h3>'+esc(g.title)+'</h3><p>'+esc(g.body)+'</p></div>').join("")+'</div></section></main>';
  bindNav();document.querySelectorAll("[data-lesson]").forEach(b=>b.onclick=()=>openLesson(b.dataset.lesson));
}
function theoryHtml(theory){
  if(!theory||!theory.length)return "";
  return '<section class="concepts">'+theory.map(g=>'<article class="card concept"><h3>'+esc(g.title)+'</h3><p>'+esc(g.body||"")+'</p>'+(g.examples&&g.examples.length?'<div class="examples">'+g.examples.map(ex=>'<div class="example"><span><b>'+esc(ex[0])+'</b></span><span>'+esc(ex[1]||"")+'</span></div>').join("")+'</div>':'')+'</article>').join("")+'</section>';
}
function openLesson(id){
  const l=lessonById(id);
  if(!l||!lessonUnlocked(l)){course();return}
  session={lesson:l,i:0,correct:0,answered:false,started:false,answers:[]};
  if(l.theory&&l.theory.length&&!l.checkpoint)lessonIntro();else startExercises();
}
function lessonIntro(){
  const l=session.lesson;
  appEl.innerHTML='<main class="shell practice">'+top("")+
  '<section class="card course-head"><div class="eyebrow">'+esc(l.unit.title)+' · '+esc(l.stage)+'</div><h2>'+esc(l.title)+'</h2><p>'+esc(l.goal)+'</p></section>'+
  theoryHtml(l.theory)+
  '<div class="actions"><button class="ghost" data-unitback="'+l.unitId+'">Retour</button><button class="primary" id="startExercises">Commencer les exercices</button></div></main>';
  bindNav();$("startExercises").onclick=startExercises;document.querySelector("[data-unitback]").onclick=()=>unitView(l.unitId);
}
function startExercises(){session.started=true;session.i=0;session.correct=0;session.answered=false;exercise()}
function exerciseType(q){
  return{mcq:"Choisir",cloze:"Compléter",text:"Produire",build:"Construire",listen:"Écouter",dialogue:"Dialoguer"}[q.t]||"Exercice";
}
function shuffleDeterministic(arr,seed){
  const a=arr.map((x,i)=>({x,k:(Math.sin((i+1)*(seed+3))*10000)%1})).sort((p,q)=>p.k-q.k).map(v=>v.x);
  return a;
}
function inputHtml(q){
  if(q.t==="mcq"||q.t==="cloze"||q.t==="listen"||q.t==="dialogue"){
    return '<div class="choices">'+q.c.map(c=>'<button class="choice" data-choice="'+esc(c)+'">'+esc(c)+'</button>').join("")+'</div>';
  }
  if(q.t==="text")return '<input id="answer" class="answer" autocomplete="off" autocapitalize="sentences" placeholder="Écrivez votre réponse en allemand…">';
  if(q.t==="build"){
    builderWords=[];
    const bank=shuffleDeterministic(q.tokens,session.i+session.lesson.unitIndex*7);
    return '<div id="builderAnswer" class="builder-answer"><span class="muted">Touchez les mots dans l’ordre…</span></div><div id="builderBank" class="builder-bank">'+bank.map((w,i)=>'<button class="word-chip" data-word="'+esc(w)+'" data-wi="'+i+'">'+esc(w)+'</button>').join("")+'</div>';
  }
  return "";
}
function exercise(){
  const l=session.lesson;
  if(session.i>=l.q.length){finishLesson();return}
  const q=l.q[session.i];
  appEl.innerHTML='<main class="shell practice">'+top("")+
  '<section class="card course-head"><div class="eyebrow">'+esc(l.unit.title)+' · '+esc(l.stage)+'</div><h2>'+esc(l.title)+'</h2><div class="progress" style="margin-top:18px"><span style="width:'+Math.round(session.i/l.q.length*100)+'%"></span></div></section>'+
  '<section class="card exercise"><div class="exercise-top"><span class="exercise-type">'+exerciseType(q)+' · '+esc(SKILL_LABELS[skillKey(q.skill)])+'</span><span class="exercise-count">'+(session.i+1)+' / '+l.q.length+'</span></div>'+
  (q.t==="listen"?'<div class="audio-panel" style="margin-top:22px"><button id="listenBtn" class="audio-btn">▶</button><div class="subprompt" style="margin:10px 0 0">Écoutez autant de fois que nécessaire.</div></div>':'')+
  (q.t==="dialogue"?'<div class="dialogue" style="margin-top:22px">'+q.lines.map((line,i)=>'<div class="bubble '+(i%2?"it":"")+'">'+esc(line)+'</div>').join("")+'</div>':'')+
  '<div class="prompt">'+esc(q.p)+'</div>'+inputHtml(q)+'<div id="feedback"></div>'+
  '<div class="exercise-actions"><button class="ghost" id="quitLesson">Quitter</button>'+(q.t==="text"||q.t==="build"?'<button class="primary" id="validate">Valider</button>':'')+'</div></section></main>';
  bindNav();$("quitLesson").onclick=()=>unitView(l.unitId);
  if(q.t==="listen"){$("listenBtn").onclick=()=>speak(q.audio,.82);setTimeout(()=>speak(q.audio,.82),250)}
  document.querySelectorAll("[data-choice]").forEach(b=>b.onclick=()=>checkAnswer(b.dataset.choice));
  if(q.t==="text"){
    $("validate").onclick=()=>checkAnswer($("answer").value);
    $("answer").onkeydown=e=>{if(e.key==="Enter")checkAnswer(e.target.value)};
    $("answer").focus();
  }
  if(q.t==="build"){
    document.querySelectorAll("[data-word]").forEach(b=>b.onclick=()=>{if(b.classList.contains("used"))return;b.classList.add("used");builderWords.push(b.dataset.word);drawBuilder()});
    $("validate").onclick=()=>checkAnswer(builderWords.join(" "));
  }
}
function drawBuilder(){
  const box=$("builderAnswer");if(!box)return;
  box.innerHTML=builderWords.length?builderWords.map((w,i)=>'<button class="word-chip" data-built="'+i+'">'+esc(w)+'</button>').join(""):'<span class="muted">Touchez les mots dans l’ordre…</span>';
  box.querySelectorAll("[data-built]").forEach(b=>b.onclick=()=>{
    const word=builderWords.splice(Number(b.dataset.built),1)[0];
    const bank=[...document.querySelectorAll("[data-word]")].find(x=>x.dataset.word===word&&x.classList.contains("used"));
    if(bank)bank.classList.remove("used");
    drawBuilder();
  });
}
function isCorrect(q,v){
  if(q.t==="text")return (q.a||[]).some(a=>norm(a)===norm(v));
  return norm(q.a)===norm(v);
}
function modelAnswer(q){return q.m||q.a||(Array.isArray(q.a)?q.a[0]:"")}
function addReviewFromError(q,l){
  const id="err:"+l.id+":"+session.i;
  s.reviews[id]={kind:"error",front:q.p,back:modelAnswer(q),note:q.e||"",audio:modelAnswer(q),skill:skillKey(q.skill),level:0,due:Date.now()+10*60*1000};
  s.errors[id]=(s.errors[id]||0)+1;
}
function updateSkill(q,ok){
  const k=skillKey(q.skill),x=s.skills[k];x.attempts++;if(ok)x.correct++;
}
function checkAnswer(v){
  if(session.answered)return;
  const q=session.lesson.q[session.i],ok=isCorrect(q,v);
  session.answered=true;session.answers.push({ok,q});
  if(ok){session.correct++;s.xp+=10}else{s.xp+=2;addReviewFromError(q,session.lesson)}
  updateSkill(q,ok);study();save();
  const fb=$("feedback");
  fb.innerHTML='<div class="feedback '+(ok?"ok":"bad")+'"><b>'+(ok?"✓ Correct":"À revoir")+'</b>'+(ok?"":'<br>Réponse conseillée : <b>'+esc(modelAnswer(q))+'</b>')+'<span class="why">'+esc(q.e||"")+'</span></div>';
  if(q.t==="listen"||q.t==="text"||q.t==="build")speak(modelAnswer(q),.86);
  const next=document.createElement("button");next.className="primary";next.textContent=session.i===session.lesson.q.length-1?"Voir le résultat":"Continuer";
  next.onclick=()=>{session.i++;session.answered=false;builderWords=[];exercise()};
  document.querySelector(".exercise-actions").appendChild(next);
  document.querySelectorAll(".choice,.answer,#validate,.word-chip").forEach(x=>x.disabled=true);
}
function addUnitVocab(u){
  u.vocab.forEach((v,i)=>{
    const id="voc:"+u.id+":"+i;
    if(!s.reviews[id])s.reviews[id]={kind:"vocab",front:v[0],back:v[1],note:v[2]||"",audio:v[0],skill:"vocab",level:0,due:Date.now()+i*60000};
  });
}
function finishLesson(){
  const l=session.lesson,score=Math.round(session.correct/l.q.length*100),pass=!l.checkpoint||score>=70;
  s.done[l.id]={date:localDay(),score,passed:pass,attempts:(s.done[l.id]?.attempts||0)+1};
  addUnitVocab(l.unit);
  s.xp+=l.checkpoint?(pass?40:10):25;study();save();
  appEl.innerHTML='<main class="shell practice">'+top("")+'<section class="card lesson-result"><div class="eyebrow">'+(l.checkpoint?(pass?"Checkpoint validé":"Checkpoint à renforcer"):"Leçon terminée")+'</div><div class="score-big">'+score+' %</div><h2>'+esc(l.title)+'</h2><p>'+(l.checkpoint?(pass?"L’unité suivante est maintenant ouverte.":"Il faut 70 % pour valider l’unité. Les erreurs ont été ajoutées aux révisions ciblées."):"Le vocabulaire de l’unité rejoint progressivement vos révisions espacées.")+'</p><div class="actions" style="justify-content:center">'+(l.checkpoint&&!pass?'<button class="primary" id="retry">Recommencer</button>':'<button class="primary" id="nextLesson">Continuer</button>')+'<button class="ghost" id="backUnit">Retour à l’unité</button></div></section></main>';
  bindNav();
  $("backUnit").onclick=()=>unitView(l.unitId);
  if($("retry"))$("retry").onclick=()=>openLesson(l.id);
  if($("nextLesson"))$("nextLesson").onclick=()=>{const n=nextLesson();openLesson(n.id)};
}
function grammarView(tab="grammar",search=""){
  const items=[];
  DATA.units.forEach((u,ui)=>{
    if(tab==="grammar")u.grammar.forEach(g=>items.push({unit:ui+1,title:g.title,body:g.body,examples:g.examples,type:"grammar"}));
    else (u.verbs||[]).forEach(v=>items.push({unit:ui+1,title:v.name,body:v.fr+(v.note?" · "+v.note:""),forms:v.forms,type:"verb"}));
  });
  const filtered=items.filter(x=>!search||norm(JSON.stringify(x)).includes(norm(search)));
  appEl.innerHTML='<main class="shell">'+top("grammar")+'<section class="card library-head"><div class="eyebrow">Référence A1</div><h1>'+(tab==="grammar"?"Grammaire essentielle":"Conjugaison")+'</h1><p class="lead">Des explications courtes, liées aux situations réellement étudiées dans le parcours.</p><div class="library-tabs"><button data-gtab="grammar" class="'+(tab==="grammar"?"on":"")+'">Grammaire</button><button data-gtab="verbs" class="'+(tab==="verbs"?"on":"")+'">Verbes</button></div><input id="grammarSearch" class="search" value="'+esc(search)+'" placeholder="Rechercher une notion…"></section><section class="library-grid">'+filtered.map(x=>'<article class="card lib-card"><div class="eyebrow">Unité '+x.unit+'</div><h3>'+esc(x.title)+'</h3><p>'+esc(x.body)+'</p>'+(x.examples?'<div class="examples">'+x.examples.slice(0,3).map(e=>'<div class="example"><span><b>'+esc(e[0])+'</b></span><span>'+esc(e[1]||"")+'</span></div>').join("")+'</div>':'')+(x.forms?'<div class="examples">'+x.forms.map(f=>'<div class="example"><span><b>'+esc(f)+'</b></span></div>').join("")+'</div>':'')+'</article>').join("")+'</section></main>';
  bindNav();
  document.querySelectorAll("[data-gtab]").forEach(b=>b.onclick=()=>grammarView(b.dataset.gtab,""));
  $("grammarSearch").oninput=e=>grammarView(tab,e.target.value);
  setTimeout(()=>{const el=$("grammarSearch");if(search&&el){el.focus();el.setSelectionRange(el.value.length,el.value.length)}},0);
}
function vocabView(search=""){
  const seen=new Set(),items=[];
  DATA.units.forEach((u,ui)=>u.vocab.forEach(v=>{const key=norm(v[0]);if(!seen.has(key)){seen.add(key);items.push({it:v[0],fr:v[1],note:v[2]||"",unit:ui+1})}}));
  const filtered=items.filter(x=>!search||norm(x.it+" "+x.fr+" "+x.note).includes(norm(search)));
  appEl.innerHTML='<main class="shell">'+top("vocab")+'<section class="card library-head"><div class="eyebrow">Lexique actif A1</div><h1>'+items.length+' mots et expressions.</h1><p class="lead">Le vocabulaire du cours, organisé par contexte et disponible avec prononciation native.</p><input id="vocabSearch" class="search" value="'+esc(search)+'" placeholder="Rechercher en allemand ou en français…"></section><section class="library-grid">'+filtered.map(x=>'<article class="card lib-card"><div class="lib-row"><div><div class="eyebrow">Unité '+x.unit+'</div><div class="it">'+esc(x.it)+'</div><p>'+esc(x.fr)+'</p></div><button class="speak" data-speak="'+esc(x.it)+'">🔊</button></div></article>').join("")+'</section></main>';
  bindNav();$("vocabSearch").oninput=e=>vocabView(e.target.value);document.querySelectorAll("[data-speak]").forEach(b=>b.onclick=()=>speak(b.dataset.speak));
  setTimeout(()=>{const el=$("vocabSearch");if(search&&el){el.focus();el.setSelectionRange(el.value.length,el.value.length)}},0);
}
function reviews(reset){
  if(reset!==false){reviewQueue=dueIds();reviewIndex=0;reviewReveal=false}
  appEl.innerHTML='<main class="shell">'+top("review")+'<section id="reviewBox"></section></main>';bindNav();reviewCard();
}
function reviewCard(){
  const box=$("reviewBox");
  if(!reviewQueue.length||reviewIndex>=reviewQueue.length){
    box.innerHTML='<section class="card empty"><div class="eyebrow">Wiederholen</div><h2>✓ Révisions à jour</h2><p>Sprich! fera réapparaître les notions au moment où elles risquent d’être oubliées.</p><button class="ghost" data-view="home">Retour à l’accueil</button></section>';bindNav();return;
  }
  const id=reviewQueue[reviewIndex],c=s.reviews[id];
  if(!c){reviewIndex++;reviewCard();return}
  const front=c.kind==="error"?c.front:c.front;
  box.innerHTML='<section class="card review-card"><div class="exercise-top"><span class="review-kind">'+(c.kind==="error"?"ERREUR CIBLÉE":"VOCABULAIRE")+' · '+esc(SKILL_LABELS[skillKey(c.skill||"vocab")])+'</span><span class="exercise-count">'+(reviewIndex+1)+' / '+reviewQueue.length+'</span></div><button class="speak" id="reviewSpeak" style="margin-top:20px">🔊</button><div class="word">'+esc(front)+'</div>'+(reviewReveal?'<div class="translation"><b>'+esc(c.back)+'</b></div>'+(c.note?'<p class="lead" style="font-size:13px;margin:12px auto 0">'+esc(c.note)+'</p>':'')+'<div class="review-rates"><button data-rate="0">Encore</button><button data-rate="1">Difficile</button><button data-rate="2">Bien</button><button data-rate="3">Facile</button></div>':'<button class="primary" id="reveal" style="margin-top:18px">Afficher la réponse</button>')+'</section>';
  $("reviewSpeak").onclick=()=>speak(c.audio||c.back||c.front);
  if(!reviewReveal)$("reveal").onclick=()=>{reviewReveal=true;reviewCard()};
  else document.querySelectorAll("[data-rate]").forEach(b=>b.onclick=()=>{rateReview(id,Number(b.dataset.rate));reviewIndex++;reviewReveal=false;reviewCard()});
}
function rateReview(id,r){
  const c=s.reviews[id],intervals=[0,1,3,7,14,30,60];
  if(r===0)c.level=0;else c.level=Math.min(intervals.length-1,(c.level||0)+(r===3?2:1));
  const days=r===0?10/1440:intervals[c.level];
  c.due=Date.now()+days*86400000;
  if(c.kind==="error"&&r>=2&&c.level>=2)delete s.errors[id];
  s.xp+=r===0?1:3;study();save();
}
function dataView(){
  const raw=JSON.stringify(s,null,2);
  appEl.innerHTML='<main class="shell">'+top("data")+'<section class="card hero"><div class="eyebrow">Données & confidentialité</div><h2>Votre apprentissage reste chez vous.</h2><p class="lead">Aucun compte, aucun serveur Sprich!, aucune API payante. La progression est stockée dans le navigateur de cet appareil.</p></section><section class="section"><div class="library-grid"><article class="card lib-card"><h3>Sauvegarde</h3><p>Exportez régulièrement votre progression si vous utilisez Sprich! comme application installée.</p><div class="backup"><button class="primary" id="exportData">Exporter JSON</button><label class="ghost" style="display:grid;place-items:center">Importer JSON<input id="importData" type="file" accept="application/json" class="hidden"></label></div></article><article class="card lib-card"><h3>Réinitialisation</h3><p>Efface uniquement la progression allemande sur cet appareil.</p><button class="danger" id="resetData" style="margin-top:14px">Réinitialiser v1.0</button></article></div></section><div class="note" style="margin-top:14px">Conseil : Safari peut supprimer le stockage local après une longue période d’inactivité. Un export JSON constitue la meilleure sauvegarde gratuite.</div></main>';
  bindNav();
  $("exportData").onclick=()=>{const blob=new Blob([raw],{type:"application/json"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download="sprich-deutsch-progression-"+localDay()+".json";a.click();URL.revokeObjectURL(url)};
  $("importData").onchange=async e=>{const f=e.target.files?.[0];if(!f)return;try{const x=JSON.parse(await f.text());if(!x||typeof x!=="object")throw new Error();s=Object.assign(fresh(),x);save();alert("Progression importée.");home()}catch{alert("Fichier de progression invalide.")}};
  $("resetData").onclick=()=>{if(confirm("Réinitialiser toute la progression Sprich! sur cet appareil ?")){localStorage.removeItem(KEY);s=fresh();save();home()}};
}
function render(v){
  s.view=v;save();
  if(v==="home")home();
  else if(v==="course")course();
  else if(v==="grammar")grammarView();
  else if(v==="vocab")vocabView();
  else if(v==="review")reviews(true);
  else if(v==="data")dataView();
  else home();
}
render(s.view||"home");
})();