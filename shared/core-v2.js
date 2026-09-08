(function(){
"use strict";

const COURSE=window.PARLA_COURSE;
if(!COURSE) throw new Error("PARLA_COURSE absent");

const $=id=>document.getElementById(id);
const esc=v=>String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
const dayKey=()=>{const d=new Date();return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0")};
const STAGES=[
  {id:"immersion",label:"Immersion",short:"Écouter",threshold:0,desc:"Découvrir la langue dans une scène courte et naturelle."},
  {id:"focus",label:"Explication",short:"Comprendre",threshold:70,desc:"Comprendre une notion à la fois et vérifier immédiatement."},
  {id:"workbook",label:"Workbook",short:"Automatiser",threshold:75,desc:"Multiplier les manipulations jusqu’à rendre la structure naturelle."},
  {id:"encounter",label:"Encounter",short:"Produire",threshold:70,desc:"Répondre, reformuler et produire sans modèle sous les yeux."},
  {id:"checkpoint",label:"Checkpoint",short:"Valider",threshold:80,desc:"Mélanger les acquis et valider durablement l’unité."}
];
const DEFAULT_SKILLS={
  vocab:"Vocabulaire",grammar:"Grammaire",conjugation:"Conjugaison",articles:"Articles",
  listening:"Compréhension orale",production:"Production",wordorder:"Ordre des mots",
  tenses:"Temps",cases:"Cas",agreement:"Accords"
};
const SKILL_LABELS={...DEFAULT_SKILLS,...(COURSE.skillLabels||{})};

function freshState(){
  const skills={};
  Object.keys(SKILL_LABELS).forEach(k=>skills[k]={correct:0,attempts:0});
  return {version:"2.0",xp:0,streak:0,last:null,progress:{},skills,reviews:{},errors:{},view:"home",refTab:"grammar",legacy:null};
}
function loadState(){
  let s=freshState();
  try{s={...s,...JSON.parse(localStorage.getItem(COURSE.storageKey)||"{}")}}catch{}
  s.progress=s.progress||{};s.reviews=s.reviews||{};s.errors=s.errors||{};s.skills=s.skills||{};
  Object.keys(SKILL_LABELS).forEach(k=>s.skills[k]=s.skills[k]||{correct:0,attempts:0});
  if(!s.legacy&&Array.isArray(COURSE.legacyStorageKeys)){
    for(const key of COURSE.legacyStorageKeys){
      try{
        const old=JSON.parse(localStorage.getItem(key)||"null");
        if(old){
          s.legacy={key,xp:Number(old.xp)||0,streak:Number(old.streak)||0};
          s.xp=Math.max(s.xp,Number(old.xp)||0);
          s.streak=Math.max(s.streak,Number(old.streak)||0);
          break;
        }
      }catch{}
    }
  }
  return s;
}
let state=loadState();
const save=()=>localStorage.setItem(COURSE.storageKey,JSON.stringify(state));

function touchStudyDay(){
  const today=dayKey();
  if(state.last===today)return;
  if(!state.last)state.streak=1;
  else{
    const prev=new Date(state.last+"T12:00:00"),now=new Date(today+"T12:00:00");
    const gap=Math.round((now-prev)/86400000);
    state.streak=gap===1?Math.max(1,state.streak)+1:1;
  }
  state.last=today;save();
}

const flatUnits=()=>{
  const out=[];let index=0;
  COURSE.levels.forEach((level,li)=>level.units.forEach((unit,ui)=>out.push({level,unit,li,ui,index:index++})));
  return out;
};
const ALL_UNITS=flatUnits();
const unitCtx=id=>ALL_UNITS.find(x=>x.unit.id===id);
const pFor=id=>state.progress[id]||(state.progress[id]={});
const stageRecord=(unitId,stageId)=>pFor(unitId)[stageId]||null;
const stageCompleted=(unitId,stageId)=>!!stageRecord(unitId,stageId)?.completed;
const checkpointPassed=unitId=>!!stageRecord(unitId,"checkpoint")?.passed;
const unitUnlocked=ctx=>ctx.index===0||checkpointPassed(ALL_UNITS[ctx.index-1].unit.id);
const stageUnlocked=(ctx,stageIndex)=>{
  if(!unitUnlocked(ctx))return false;
  if(stageIndex===0)return true;
  return stageCompleted(ctx.unit.id,STAGES[stageIndex-1].id);
};
const completedStages=unitId=>STAGES.filter(s=>stageCompleted(unitId,s.id)).length;
const completedUnits=()=>ALL_UNITS.filter(x=>checkpointPassed(x.unit.id)).length;
const overallPct=()=>Math.round(completedUnits()/Math.max(1,ALL_UNITS.length)*100);
const dueReviewIds=()=>Object.keys(state.reviews).filter(k=>Number(state.reviews[k]?.due||0)<=Date.now());
const skillPct=k=>{const x=state.skills[k]||{correct:0,attempts:0};return x.attempts?Math.round(x.correct/x.attempts*100):0};

function nextAction(){
  for(const ctx of ALL_UNITS){
    if(!unitUnlocked(ctx))break;
    for(let i=0;i<STAGES.length;i++){
      if(stageUnlocked(ctx,i)&&!stageCompleted(ctx.unit.id,STAGES[i].id))return{ctx,stageIndex:i,stage:STAGES[i]};
    }
  }
  const ctx=ALL_UNITS[Math.max(0,ALL_UNITS.length-1)];
  return{ctx,stageIndex:4,stage:STAGES[4]};
}

function normalize(value){
  let x=String(value??"").toLowerCase().trim().replace(/[’‘`´]/g,"'").replace(/[.,!?;:()\[\]"]/g,"").replace(/\s+/g," ");
  if(COURSE.allowGermanAscii)x=x.replace(/ß/g,"ss").replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue");
  return x;
}
function accepted(q){
  const values=q.expected||q.answers||q.answer||q.model||"";
  return (Array.isArray(values)?values:[values]).map(normalize);
}
function correct(q,value){return accepted(q).includes(normalize(value))}
function hash(str){
  let h=2166136261;
  for(let i=0;i<str.length;i++){h^=str.charCodeAt(i);h=Math.imul(h,16777619)}
  return (h>>>0).toString(36);
}
function shuffle(arr){
  const a=[...arr];
  for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}
  return a;
}
const uniq=arr=>[...new Set(arr.filter(Boolean))];
function distractors(answer,pool,count=3){return shuffle(uniq(pool).filter(x=>x!==answer)).slice(0,count)}
function qid(unitId,type,seed){return unitId+":"+type+":"+hash(seed)}
function uniqById(arr){const seen=new Set();return arr.filter(x=>x?.id&&!seen.has(x.id)&&seen.add(x.id))}

function vocabQuestions(unit){
  const out=[],v=unit.vocab||[],frPool=v.map(x=>x.fr),targetPool=v.map(x=>x.t);
  v.forEach(x=>{
    out.push({id:qid(unit.id,"vocab-tf",x.t),type:"mcq",prompt:"Que signifie « "+x.t+" » ?",choices:shuffle([x.fr,...distractors(x.fr,frPool)]),answer:x.fr,model:x.fr,explanation:x.note||"",skill:"vocab",audio:x.t});
    out.push({id:qid(unit.id,"vocab-ft",x.fr),type:"mcq",prompt:"Comment dit-on « "+x.fr+" » ?",choices:shuffle([x.t,...distractors(x.t,targetPool)]),answer:x.t,model:x.t,explanation:x.note||"",skill:"vocab",audio:x.t});
    out.push({id:qid(unit.id,"listen-vocab",x.t),type:"listen",prompt:"Choisis le sens de ce que tu entends.",choices:shuffle([x.fr,...distractors(x.fr,frPool)]),answer:x.fr,model:x.fr,explanation:x.note||"",skill:"listening",audio:x.t});
    out.push({id:qid(unit.id,"recall-vocab",x.fr),type:"text",prompt:"Traduis : « "+x.fr+" »",expected:[x.t,...(x.alt||[])],model:x.t,explanation:x.note||"",skill:"production",audio:x.t});
    if(x.article){
      out.push({id:qid(unit.id,"article",x.t),type:"mcq",prompt:"Quel article convient devant « "+(x.bare||x.t.replace(/^\S+\s+/,""))+" » ?",choices:shuffle([x.article,...distractors(x.article,COURSE.articleChoices||[])]),answer:x.article,model:x.article+" "+(x.bare||x.t.replace(/^\S+\s+/,"")),explanation:x.articleNote||x.note||"",skill:"articles"});
    }
  });
  return out;
}
function phraseQuestions(unit){
  const out=[],p=unit.phrases||[],frPool=p.map(x=>x.fr),targetPool=p.map(x=>x.t);
  p.forEach(x=>{
    out.push({id:qid(unit.id,"phrase-recall",x.fr),type:"text",prompt:"Traduis : « "+x.fr+" »",expected:[x.t,...(x.alt||[])],model:x.t,explanation:x.note||"",skill:x.skill||"production",audio:x.t});
    out.push({id:qid(unit.id,"phrase-build",x.t),type:"build",prompt:"Construis : « "+x.fr+" »",tokens:x.tokens||x.t.split(/\s+/),answer:x.t,expected:[x.t,...(x.alt||[])],model:x.t,explanation:x.note||"",skill:x.buildSkill||"wordorder",audio:x.t});
    out.push({id:qid(unit.id,"phrase-listen",x.t),type:"listen",prompt:"Que signifie la phrase ?",choices:shuffle([x.fr,...distractors(x.fr,frPool)]),answer:x.fr,model:x.fr,explanation:x.note||"",skill:"listening",audio:x.t});
    out.push({id:qid(unit.id,"dictation",x.t),type:"dictation",prompt:"Écris exactement la phrase entendue.",expected:[x.t,...(x.alt||[])],model:x.t,explanation:x.note||"",skill:"listening",audio:x.t});
    if(targetPool.length>3)out.push({id:qid(unit.id,"phrase-mcq",x.fr),type:"mcq",prompt:"Quelle phrase correspond à « "+x.fr+" » ?",choices:shuffle([x.t,...distractors(x.t,targetPool)]),answer:x.t,model:x.t,explanation:x.note||"",skill:"grammar",audio:x.t});
  });
  return out;
}
function verbQuestions(unit){
  const out=[];
  (unit.verbs||[]).forEach(v=>{
    const entries=Object.entries(v.forms||{}),formPool=entries.map(x=>x[1]);
    entries.forEach(([person,form])=>{
      out.push({id:qid(unit.id,"conj",v.infinitive+person+(v.tense||"")),type:"mcq",prompt:"Conjugue « "+v.infinitive+" » ("+(v.tenseLabel||v.tense||"présent")+") : "+person,choices:shuffle([form,...distractors(form,formPool)]),answer:form,model:person+" "+form,explanation:v.note||"",skill:"conjugation"});
      out.push({id:qid(unit.id,"conj-text",v.infinitive+person+(v.tense||"")),type:"text",prompt:"Écris la forme de « "+v.infinitive+" » pour "+person+".",expected:[form],model:form,explanation:v.note||"",skill:"conjugation"});
    });
  });
  return out;
}
function customQuestions(unit){
  return (unit.drills||[]).map((q,i)=>({...q,id:q.id||qid(unit.id,"custom",q.prompt+"|"+i),model:q.model||q.answer||(q.expected?.[0]||""),skill:q.skill||"grammar"}));
}
function encounterQuestions(unit){
  return (unit.encounter?.prompts||[]).map((q,i)=>({
    id:qid(unit.id,"encounter",q.prompt+"|"+i),type:q.type||"text",prompt:q.prompt,expected:q.expected||[q.model],
    model:q.model,explanation:q.explanation||"",skill:q.skill||"production",audio:q.audio||q.model,
    choices:q.choices,tokens:q.tokens
  }));
}
function bankFor(unit){return [...vocabQuestions(unit),...phraseQuestions(unit),...verbQuestions(unit),...customQuestions(unit)]}
function takeBalanced(bank,count,preferred=[]){
  const pool=shuffle(bank);let out=[];
  for(const skill of preferred){
    const candidates=pool.filter(q=>q.skill===skill&&!out.includes(q));
    out.push(...candidates.slice(0,Math.max(2,Math.ceil(count/(preferred.length+1)))));
  }
  out=uniqById(out);
  if(out.length<count)out.push(...pool.filter(q=>!out.some(x=>x.id===q.id)).slice(0,count-out.length));
  return shuffle(out).slice(0,count);
}
function questionsFor(ctx,stageId){
  const bank=bankFor(ctx.unit);
  if(stageId==="focus"){
    let focus=bank.filter(q=>["grammar","conjugation","articles","agreement","cases","tenses","wordorder"].includes(q.skill));
    if(focus.length<8)focus=[...focus,...bank.filter(q=>!focus.includes(q))];
    return takeBalanced(focus,8,["grammar","conjugation","articles"]);
  }
  if(stageId==="workbook"){
    const weak=Object.keys(SKILL_LABELS).filter(k=>skillPct(k)>0&&skillPct(k)<75).slice(0,3);
    return takeBalanced(bank,20,weak);
  }
  if(stageId==="encounter"){
    const custom=encounterQuestions(ctx.unit),prod=bank.filter(q=>["production","listening","wordorder"].includes(q.skill));
    return uniqById([...custom,...shuffle(prod)]).slice(0,10);
  }
  if(stageId==="checkpoint")return takeBalanced(bank,25,["grammar","conjugation","listening","production"]);
  return [];
}
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
let session=null,builder=[];
function startSession(ctx,stageIndex){
  const stage=STAGES[stageIndex],questions=questionsFor(ctx,stage.id);
  if(!questions.length){alert("Aucune question disponible pour cette étape.");return}
  session={ctx,stageIndex,stage,questions,i:0,correct:0,answered:false,answers:[]};
  renderQuestion();
}
function typeLabel(q){return{mcq:"Choisir",text:"Produire",build:"Construire",listen:"Écouter",dictation:"Dictée",cloze:"Compléter"}[q.type]||"Exercice"}
function questionInput(q){
  if(q.type==="mcq"||q.type==="cloze"||q.type==="listen")return '<div class="choices">'+(q.choices||[]).map(c=>'<button class="choice" data-choice="'+esc(c)+'">'+esc(c)+'</button>').join("")+'</div>';
  if(q.type==="text"||q.type==="dictation")return '<input id="answer" class="answer" autocomplete="off" autocapitalize="sentences" placeholder="Écris ta réponse…">';
  if(q.type==="build"){
    builder=[];const toks=shuffle(q.tokens||String(q.answer||q.model).split(/\s+/));
    return '<div id="builderAnswer" class="builder-answer"><span style="color:var(--muted);font-size:11px">Touchez les mots dans l’ordre…</span></div><div class="bank">'+toks.map((w,i)=>'<button class="chip" data-word="'+esc(w)+'" data-wi="'+i+'">'+esc(w)+'</button>').join("")+'</div>';
  }
  return "";
}
function renderQuestion(){
  const {ctx,stage,questions,i}=session;
  if(i>=questions.length){finishSession();return}
  const q=questions[i];builder=[];session.answered=false;
  app.innerHTML='<main class="shell study">'+top("")+
    '<section class="card course-head"><div class="eyebrow">'+esc(stage.label)+' · '+esc(ctx.unit.title)+'</div><h2>'+esc(stage.short)+'</h2><div class="progress" style="margin-top:16px"><span style="width:'+Math.round(i/questions.length*100)+'%"></span></div></section>'+
    '<section class="card exercise"><div class="exercise-top"><span class="exercise-type">'+esc(typeLabel(q))+' · '+esc(SKILL_LABELS[q.skill]||q.skill||"")+'</span><span class="exercise-count">'+(i+1)+' / '+questions.length+'</span></div>'+
    ((q.type==="listen"||q.type==="dictation")?'<div class="listen-box"><button id="listenBtn" class="listen-btn">▶</button><div class="subprompt" style="margin:9px 0 0">Tu peux réécouter.</div></div>':'')+
    '<div class="prompt">'+esc(q.prompt)+'</div>'+questionInput(q)+'<div id="feedback"></div>'+
    '<div class="exercise-actions"><button class="ghost" id="quit">Quitter</button>'+((q.type==="text"||q.type==="dictation"||q.type==="build")?'<button class="primary" id="validate">Valider</button>':'')+'</div></section></main>';
  bindNav();$("quit").onclick=()=>openUnit(ctx.unit.id);
  if($("listenBtn")){$("listenBtn").onclick=()=>speak(q.audio,.82);setTimeout(()=>speak(q.audio,.82),220)}
  document.querySelectorAll("[data-choice]").forEach(b=>b.onclick=()=>checkAnswer(b.dataset.choice));
  if(q.type==="text"||q.type==="dictation"){
    $("validate").onclick=()=>checkAnswer($("answer").value);
    $("answer").onkeydown=e=>{if(e.key==="Enter")checkAnswer(e.target.value)};
    $("answer").focus();
  }
  if(q.type==="build"){
    document.querySelectorAll("[data-word]").forEach(b=>b.onclick=()=>{if(b.classList.contains("used"))return;b.classList.add("used");builder.push({word:b.dataset.word,index:b.dataset.wi});drawBuilder()});
    $("validate").onclick=()=>checkAnswer(builder.map(x=>x.word).join(" "));
  }
}
function drawBuilder(){
  const box=$("builderAnswer");if(!box)return;
  box.innerHTML=builder.length?builder.map((x,i)=>'<button class="chip" data-built="'+i+'">'+esc(x.word)+'</button>').join(""):'<span style="color:var(--muted);font-size:11px">Touchez les mots dans l’ordre…</span>';
  box.querySelectorAll("[data-built]").forEach(b=>b.onclick=()=>{
    const item=builder.splice(Number(b.dataset.built),1)[0];
    const original=document.querySelector('[data-wi="'+item.index+'"]');if(original)original.classList.remove("used");
    drawBuilder();
  });
}
function checkAnswer(value){
  if(session.answered)return;
  const q=session.questions[session.i],ok=correct(q,value);
  session.answered=true;session.answers.push({id:q.id,ok,skill:q.skill});if(ok)session.correct++;
  updateSkill(q,ok);touchStudyDay();
  if(ok)state.xp+=8;else{state.xp+=1;reviewFromError(q,session.ctx)}
  save();
  const model=q.model||q.answer||(q.expected?.[0]||"");
  $("feedback").innerHTML='<div class="feedback '+(ok?"ok":"bad")+'"><b>'+(ok?"✓ Correct":"À revoir")+'</b>'+(!ok&&model?'<br>Réponse attendue : <b>'+esc(model)+'</b>':'')+(q.explanation?'<span class="why">'+esc(q.explanation)+'</span>':'')+'</div>';
  if(q.audio)speak(q.audio,.86);
  document.querySelectorAll(".choice,.answer,#validate,.chip").forEach(x=>x.disabled=true);
  const btn=document.createElement("button");btn.className="primary";btn.textContent=session.i===session.questions.length-1?"Résultat":"Continuer";
  btn.onclick=()=>{session.i++;renderQuestion()};document.querySelector(".exercise-actions").appendChild(btn);
}
function finishSession(){
  const {ctx,stage,questions,correct:good}=session,score=Math.round(good/questions.length*100),passed=score>=stage.threshold;
  const p=pFor(ctx.unit.id),old=p[stage.id]||{};
  p[stage.id]={completed:passed,best:Math.max(Number(old.best)||0,score),attempts:(old.attempts||0)+1,date:dayKey(),passed:stage.id==="checkpoint"?passed:undefined};
  if(passed){state.xp+=stage.id==="checkpoint"?45:20;if(stage.id==="workbook"||stage.id==="checkpoint")seedUnitReviews(ctx.unit)}
  touchStudyDay();save();
  app.innerHTML='<main class="shell study">'+top("")+'<section class="card result"><div class="eyebrow">'+(passed?"Étape validée":"À renforcer")+'</div><div class="score">'+score+' %</div><h2>'+esc(stage.label)+'</h2><p>'+(passed?(stage.id==="checkpoint"?"Unité validée. Les notions continueront à revenir dans les révisions espacées.":"Tu peux passer à l’étape suivante."):"Il faut "+stage.threshold+" %. Les erreurs ont été ajoutées aux révisions ciblées : reprends l’étape sans chercher la vitesse.")+'</p><div class="actions" style="justify-content:center">'+(!passed?'<button class="primary" id="retry">Recommencer</button>':'<button class="primary" id="continueStage">Continuer</button>')+'<button class="ghost" id="unitBack">Unité</button></div></section></main>';
  bindNav();$("unitBack").onclick=()=>openUnit(ctx.unit.id);
  if($("retry"))$("retry").onclick=()=>startSession(ctx,session.stageIndex);
  if($("continueStage"))$("continueStage").onclick=()=>{
    if(session.stageIndex<4)openStage(ctx.unit.id,session.stageIndex+1);
    else{const next=ALL_UNITS[ctx.index+1];next?openUnit(next.unit.id):renderHome()}
  };
}

function allGrammar(){
  const out=[];ALL_UNITS.forEach(ctx=>(ctx.unit.grammar||[]).forEach(g=>out.push({...g,level:ctx.level.label,unit:ctx.unit.title})));return out;
}
function allVerbs(){
  const map=new Map();ALL_UNITS.forEach(ctx=>(ctx.unit.verbs||[]).forEach(v=>{const key=v.infinitive+"|"+(v.tense||v.tenseLabel||"");if(!map.has(key))map.set(key,{...v,level:ctx.level.label,unit:ctx.unit.title})}));return [...map.values()];
}
function allVocab(){
  const map=new Map();ALL_UNITS.forEach(ctx=>(ctx.unit.vocab||[]).forEach(v=>{const key=v.t+"|"+v.fr;if(!map.has(key))map.set(key,{...v,level:ctx.level.label,unit:ctx.unit.title})}));return [...map.values()];
}
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