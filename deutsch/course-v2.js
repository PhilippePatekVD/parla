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
  intro:"Un parcours guidé qui commence par les sons et l’ordre de la phrase, puis introduit les articles, les cas, les verbes séparables, les temps et la production libre étape par étape.",
  maxLevel:"A1",
  storageKey:"sprich_de_v2",
  legacyStorageKeys:["sprich_de_v1_0","sprich_de_v0"],
  allowGermanAscii:true,
  articleChoices:["der","die","das","den","dem","des","ein","eine","einen","einem","einer","kein","keine","keinen","keinem"],
  skillLabels:{cases:"Cas",wordorder:"Ordre des mots"},
  articleGuide:[
    {
      title:"Articles définis — nominatif",
      body:"Au nominatif : der masculin, die féminin, das neutre, die pluriel.",
      headers:["Genre","Article","Exemple"],
      table:[
        ["masculin","der","der Mann"],
        ["féminin","die","die Frau"],
        ["neutre","das","das Kind"],
        ["pluriel","die","die Kinder"]
      ]
    },
    {
      title:"Accusatif",
      body:"Seul le masculin change nettement : der → den, ein → einen, kein → keinen.",
      headers:["Genre","Défini","Indéfini"],
      table:[
        ["masculin","den","einen"],
        ["féminin","die","eine"],
        ["neutre","das","ein"],
        ["pluriel","die","—"]
      ]
    },
    {
      title:"Datif",
      body:"Au datif : dem masculin/neutre, der féminin, den au pluriel. ein devient einem/einer.",
      headers:["Genre","Défini","Indéfini"],
      table:[
        ["masculin","dem","einem"],
        ["féminin","der","einer"],
        ["neutre","dem","einem"],
        ["pluriel","den (+ souvent -n au nom)","—"]
      ]
    },
    {
      title:"Cas et rôle",
      body:"Nominatif = sujet. Accusatif = objet direct. Datif = destinataire/complément régi par certains verbes ou prépositions.",
      examples:[
        {t:"Der Mann sieht den Hund.",fr:"L’homme voit le chien."},
        {t:"Ich gebe dem Kind das Buch.",fr:"Je donne le livre à l’enfant."}
      ]
    }
  ],
  tenseGuide:[
    {
      level:"Fondations",
      title:"Präsens",
      body:"Le présent allemand sert au présent, aux habitudes et très souvent au futur lorsqu’un repère temporel est clair.",
      formation:"radical + -e, -st, -t, -en, -t, -en ; nombreux verbes irréguliers.",
      examples:[{t:"Ich arbeite heute.",fr:"Je travaille aujourd’hui."},{t:"Morgen fahre ich nach Bern.",fr:"Demain je vais à Berne."}]
    },
    {
      level:"A1",
      title:"Perfekt",
      body:"Passé principal de la langue parlée. haben ou sein conjugué + participe passé en fin de phrase.",
      formation:"ich habe gearbeitet / ich bin gefahren",
      examples:[{t:"Ich habe einen Film gesehen.",fr:"J’ai vu un film."},{t:"Ich bin nach Berlin gefahren.",fr:"Je suis allé à Berlin."}]
    }
  ],
  levels:[window.DE_FOUNDATION,window.DE_A1]
};
})();