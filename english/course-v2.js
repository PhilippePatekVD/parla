(function(){
"use strict";
window.PARLA_COURSE={
  version:"2.0-A1",
  lang:"en",
  locale:"en-GB",
  name:"Speak! English",
  subtitle:"English Coach · A1",
  logoLetter:"E",
  hero:"Build real English foundations.",
  intro:"Un parcours A1 guidé depuis zéro : sons utiles, grammaire comprise, phrases courtes, écoute, production et révisions cumulatives.",
  maxLevel:"A1",
  storageKey:"speak_en_v2",
  legacyStorageKeys:[],
  articleChoices:["a","an","the","—"],
  skillLabels:{wordorder:"Ordre des mots",tenses:"Temps verbaux",pronunciation:"Prononciation"},
  articleGuide:[
    {
      title:"a / an",
      body:"a et an servent à introduire un nom singulier comptable non identifié. Le choix dépend du son qui suit, pas seulement de la lettre.",
      headers:["Forme","Usage","Exemple"],
      table:[["a","son consonantique","a book / a university"],["an","son vocalique","an apple / an hour"]]
    },
    {
      title:"the",
      body:"the désigne une personne ou une chose identifiée, déjà mentionnée, unique dans le contexte ou connue des interlocuteurs.",
      examples:[{t:"The book is on the table.",fr:"Le livre identifié est sur la table."},{t:"Where is the station?",fr:"Où est la gare ?"}]
    },
    {
      title:"Sans article",
      body:"On omet souvent l’article pour parler en général avec un pluriel ou un nom non comptable.",
      examples:[{t:"I like books.",fr:"J’aime les livres en général."},{t:"I drink coffee.",fr:"Je bois du café."},{t:"Music is important.",fr:"La musique est importante."}]
    }
  ],
  tenseGuide:[
    {
      level:"Fondations",
      title:"Present simple",
      body:"Le présent simple décrit habitudes, faits et situations stables. he/she/it prennent généralement -s.",
      formation:"base verbale ; he/she/it + -s ; questions avec do/does",
      examples:[{t:"I work in Geneva.",fr:"Je travaille à Genève."},{t:"She works here.",fr:"Elle travaille ici."}]
    },
    {
      level:"A1",
      title:"Present continuous",
      body:"Il décrit principalement ce qui se déroule maintenant ou autour de maintenant.",
      formation:"am/is/are + verb-ing",
      examples:[{t:"I'm working now.",fr:"Je travaille maintenant."},{t:"They're waiting.",fr:"Ils attendent."}]
    },
    {
      level:"A1",
      title:"Past simple",
      body:"Temps principal pour raconter une action passée terminée. Les verbes réguliers prennent -ed ; plusieurs verbes fréquents sont irréguliers.",
      formation:"worked / went / saw ; questions avec did",
      examples:[{t:"I worked yesterday.",fr:"J’ai travaillé hier."},{t:"Did you see her?",fr:"L’as-tu vue ?"}]
    },
    {
      level:"A1",
      title:"be going to",
      body:"Structure courante pour une intention ou un projet futur déjà envisagé.",
      formation:"be + going to + base verbale",
      examples:[{t:"I'm going to travel next week.",fr:"Je vais voyager la semaine prochaine."}]
    }
  ],
  levels:[window.EN_FOUNDATION,window.EN_A1]
};
})();