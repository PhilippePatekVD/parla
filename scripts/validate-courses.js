const fs=require("fs");
const vm=require("vm");

function loadLanguage(folder, foundationGlobal, a1Global){
  const context={window:{}};
  vm.createContext(context);
  for(const file of ["foundation-v2.js","a1-v2.js","course-v2.js"]){
    const code=fs.readFileSync(folder+"/"+file,"utf8");
    vm.runInContext(code,context,{filename:folder+"/"+file});
  }
  const course=context.window.PARLA_COURSE;
  if(!course)throw new Error(folder+": PARLA_COURSE absent");
  if(!context.window[foundationGlobal])throw new Error(folder+": fondations absentes");
  if(!context.window[a1Global])throw new Error(folder+": A1 absent");
  return course;
}

function estimateBank(unit){
  const vocab=(unit.vocab||[]).length;
  const articleVocab=(unit.vocab||[]).filter(x=>x.article).length;
  const phrases=(unit.phrases||[]).length;
  const verbForms=(unit.verbs||[]).reduce((n,v)=>n+Object.keys(v.forms||{}).length,0);
  const drills=(unit.drills||[]).length;
  return vocab*4+articleVocab+phrases*5+verbForms*2+drills;
}

function validateCourse(name,course){
  if(course.maxLevel!=="A1")throw new Error(name+": maxLevel doit être A1");
  if(!Array.isArray(course.levels)||course.levels.length!==2)throw new Error(name+": attendu Fondations + A1");
  const units=course.levels.flatMap(l=>l.units||[]);
  if(units.length!==16)throw new Error(name+": attendu 16 unités, obtenu "+units.length);
  const ids=new Set();
  let totalEstimate=0;
  for(const u of units){
    if(ids.has(u.id))throw new Error(name+": ID unité dupliqué "+u.id);
    ids.add(u.id);
    const scene=(u.scene?.lines||[]).length;
    const grammar=(u.grammar||[]).length;
    const vocab=(u.vocab||[]).length;
    const phrases=(u.phrases||[]).length;
    const drills=(u.drills||[]).length;
    const encounter=(u.encounter?.prompts||[]).length;
    if(scene<4)throw new Error(name+" "+u.id+": scène < 4 lignes");
    if(grammar<2)throw new Error(name+" "+u.id+": grammaire < 2 notions");
    if(vocab<10)throw new Error(name+" "+u.id+": vocabulaire < 10");
    if(phrases<6)throw new Error(name+" "+u.id+": phrases < 6");
    if(drills<3)throw new Error(name+" "+u.id+": drills < 3");
    if(encounter<3)throw new Error(name+" "+u.id+": encounter < 3");
    const bank=estimateBank(u);
    if(bank<70)throw new Error(name+" "+u.id+": banque estimée trop faible ("+bank+")");
    totalEstimate+=bank;
  }
  if((course.articleGuide||[]).length<3)throw new Error(name+": guide articles insuffisant");
  if((course.tenseGuide||[]).length<2)throw new Error(name+": guide des temps insuffisant");
  console.log(name+": "+units.length+" unités · ~"+totalEstimate+" variantes d'épreuves générables");
}

const italiano=loadLanguage("italiano","IT_FOUNDATION","IT_A1");
const deutsch=loadLanguage("deutsch","DE_FOUNDATION","DE_A1");
validateCourse("Italiano",italiano);
validateCourse("Deutsch",deutsch);
console.log("Validation pédagogique A1 réussie.");
