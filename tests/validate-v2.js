const fs=require("fs");
const vm=require("vm");
const path=require("path");

function fail(msg){throw new Error(msg)}
function loadCourse(dir){
  const context={window:{}};
  vm.createContext(context);
  for(const file of ["foundation-v2.js","a1-v2.js","a2-v2.js","course-v2.js"]){
    const full=path.join(dir,file);
    if(!fs.existsSync(full))fail(dir+": missing "+file);
    vm.runInContext(fs.readFileSync(full,"utf8"),context,{filename:full});
  }
  return context.window.PARLA_COURSE;
}
function checkText(value,label){
  if(typeof value!=="string"||!value.trim())fail(label+" empty");
}
function estimateQuestions(course,unit){
  let n=0;
  for(const v of unit.vocab||[]){n+=4;if(v.article)n+=1}
  n+=(unit.phrases||[]).length*5;
  for(const verb of unit.verbs||[])n+=Object.keys(verb.forms||{}).length*2;
  n+=(unit.drills||[]).length;
  n+=(unit.encounter?.prompts||[]).length;
  return n;
}
function validate(dir,expectedLang){
  const course=loadCourse(dir);
  if(!course)fail(dir+": PARLA_COURSE missing");
  if(course.lang!==expectedLang)fail(dir+": expected lang "+expectedLang+", got "+course.lang);
  if(course.version!=="2.0")fail(dir+": wrong course version");
  if(!Array.isArray(course.levels)||course.levels.length!==3)fail(dir+": expected 3 levels");
  if(!Array.isArray(course.articleGuide)||course.articleGuide.length<3)fail(dir+": article guide too small");
  if(!Array.isArray(course.tenseGuide)||course.tenseGuide.length<4)fail(dir+": tense guide too small");

  const ids=new Set();
  let unitCount=0,totalPotential=0;
  const byLevel={};

  for(const level of course.levels){
    if(!level)fail(dir+": null level");
    checkText(level.id,dir+" level id");
    checkText(level.label,dir+" level label");
    if(!Array.isArray(level.units)||level.units.length<6)fail(dir+" "+level.id+": too few units");
    byLevel[level.id]={units:0,potential:0};

    for(const unit of level.units){
      unitCount++;
      byLevel[level.id].units++;
      checkText(unit.id,dir+" unit id");
      checkText(unit.title,unit.id+" title");
      checkText(unit.goal,unit.id+" goal");
      if(ids.has(unit.id))fail(dir+": duplicate unit id "+unit.id);
      ids.add(unit.id);

      if(!unit.scene||!Array.isArray(unit.scene.lines)||unit.scene.lines.length<4)fail(unit.id+": scene needs >=4 lines");
      unit.scene.lines.forEach((line,i)=>{
        checkText(line.t,unit.id+" scene target "+i);
        checkText(line.fr,unit.id+" scene french "+i);
      });

      if(!Array.isArray(unit.grammar)||unit.grammar.length<2)fail(unit.id+": needs >=2 grammar cards");
      unit.grammar.forEach((g,i)=>{
        checkText(g.title,unit.id+" grammar title "+i);
        checkText(g.body,unit.id+" grammar body "+i);
        if(!Array.isArray(g.examples)||g.examples.length<2)fail(unit.id+": grammar card needs >=2 examples");
      });

      if(!Array.isArray(unit.vocab)||unit.vocab.length<10)fail(unit.id+": needs >=10 vocabulary items");
      for(const v of unit.vocab){
        checkText(v.t,unit.id+" vocab target");
        checkText(v.fr,unit.id+" vocab french");
        if(v.article && !(course.articleChoices||[]).includes(v.article))fail(unit.id+": unknown article "+v.article+" for "+v.t);
      }

      if(!Array.isArray(unit.phrases)||unit.phrases.length<6)fail(unit.id+": needs >=6 phrases");
      unit.phrases.forEach((p,i)=>{checkText(p.t,unit.id+" phrase target "+i);checkText(p.fr,unit.id+" phrase french "+i)});

      if(!Array.isArray(unit.drills)||unit.drills.length<3)fail(unit.id+": needs >=3 custom drills");
      for(const q of unit.drills){
        checkText(q.prompt,unit.id+" drill prompt");
        if(q.type==="mcq"){
          if(!Array.isArray(q.choices)||q.choices.length<2)fail(unit.id+": MCQ missing choices");
          if(!q.choices.includes(q.answer))fail(unit.id+": MCQ answer not in choices: "+q.prompt);
        }
      }

      if(!unit.encounter||!Array.isArray(unit.encounter.prompts)||unit.encounter.prompts.length<3)fail(unit.id+": encounter needs >=3 prompts");
      unit.encounter.prompts.forEach((p,i)=>{checkText(p.prompt,unit.id+" encounter prompt "+i);checkText(p.model,unit.id+" encounter model "+i)});

      const potential=estimateQuestions(course,unit);
      if(potential<50)fail(unit.id+": question bank too small ("+potential+")");
      totalPotential+=potential;
      byLevel[level.id].potential+=potential;
    }
  }

  if(unitCount!==24)fail(dir+": expected 24 units, got "+unitCount);
  for(const [id,stats] of Object.entries(byLevel)){
    if(stats.potential<300)fail(dir+" "+id+": insufficient question potential "+stats.potential);
  }

  console.log(JSON.stringify({
    course:course.name,
    lang:course.lang,
    levels:course.levels.length,
    units:unitCount,
    potential_questions:totalPotential,
    by_level:byLevel
  }));
}

validate(process.argv[2],process.argv[3]);