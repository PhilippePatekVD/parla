(function(){
"use strict";

window.PARLA_COURSE={
  version:"2.0-A1",
  lang:"de",
  locale:"de-DE",
  name:"Sprich! Deutsch",
  subtitle:"Deutsch Coach · A1",
  logoLetter:"D",
  hero:"Deutsch wirklich verstehen.",
  intro:"Un parcours guidé depuis zéro : sons, ordre des mots, articles, cas, conjugaison, écoute et production jusqu’à une vraie autonomie A1.",
  maxLevel:"A1",
  storageKey:"sprich_de_v2",
  legacyStorageKeys:["sprich_de_v1_0","sprich_de_v0"],
  allowGermanAscii:true,
  articleChoices:["der","die","das","ein","eine","einen","einem","einer","den","dem"],
  skillLabels:{cases:"Cas",wordorder:"Ordre des mots",tenses:"Temps verbaux"},
  articleGuide:[
    {
      title:"Nominatif — sujet",
      body:"Le nominatif sert notamment au sujet. Apprends chaque nom avec son genre : der, die ou das.",
      headers:["Genre","Défini","Indéfini","Exemple"],
      table:[
        ["masculin","der","ein","der Mann / ein Mann"],
        ["féminin","die","eine","die Frau / eine Frau"],
        ["neutre","das","ein","das Kind / ein Kind"],
        ["pluriel","die","—","die Kinder"]
      ]
    },
    {
      title:"Accusatif — objet direct",
      body:"Le changement le plus visible est au masculin : der → den et ein → einen. Les autres genres gardent la même forme.",
      headers:["Genre","Défini","Indéfini","Exemple"],
      table:[
        ["masculin","den","einen","Ich sehe den Mann."],
        ["féminin","die","eine","Ich sehe die Frau."],
        ["neutre","das","ein","Ich sehe das Kind."],
        ["pluriel","die","—","Ich sehe die Kinder."]
      ]
    },
    {
      title:"Datif — premiers repères",
      body:"Certaines prépositions comme mit, bei, von et zu imposent toujours le datif.",
      headers:["Genre","Article","Exemple"],
      table:[
        ["masculin","dem","mit dem Bus"],
        ["féminin","der","mit der Karte"],
        ["neutre","dem","mit dem Kind"],
        ["pluriel","den","mit den Freunden"]
      ]
    }
  ],
  tenseGuide:[
    {
      level:"Fondations",
      title:"Präsens",
      body:"Le présent sert aux habitudes, aux faits actuels et très souvent au futur proche avec un repère temporel.",
      formation:"radical + terminaisons ; verbes forts et irréguliers fréquents appris progressivement.",
      examples:[{t:"Ich arbeite in Zürich.",fr:"Je travaille à Zurich."},{t:"Morgen fahre ich nach Bern.",fr:"Demain je vais à Berne."}]
    },
    {
      level:"A1",
      title:"Perfekt mit haben",
      body:"Le Perfekt est le temps oral principal pour raconter une action terminée. haben est conjugué et le participe va en fin de proposition.",
      formation:"haben + Partizip II",
      examples:[{t:"Ich habe gearbeitet.",fr:"J’ai travaillé."},{t:"Wir haben einen Film gesehen.",fr:"Nous avons vu un film."}]
    },
    {
      level:"A1",
      title:"Perfekt mit sein",
      body:"Plusieurs verbes de déplacement et de changement utilisent sein, notamment gehen, kommen, fahren et ankommen.",
      formation:"sein + Partizip II",
      examples:[{t:"Ich bin nach Berlin gefahren.",fr:"Je suis allé à Berlin."},{t:"Wir sind angekommen.",fr:"Nous sommes arrivés."}]
    }
  ],
  levels:[window.DE_FOUNDATION,window.DE_A1]
};
})();