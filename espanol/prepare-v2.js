(function(){
"use strict";
const course=window.PARLA_COURSE;
if(!course)return;
for(const level of course.levels||[]){
  for(const unit of level.units||[]){
    for(const prompt of unit.encounter?.prompts||[]){
      if(Array.isArray(prompt.skill)){
        prompt.expected=prompt.expected||prompt.skill;
        prompt.skill="production";
      }
    }
  }
}
})();