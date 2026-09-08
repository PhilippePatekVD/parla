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
