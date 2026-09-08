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
