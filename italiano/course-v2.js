(function(){
"use strict";

window.PARLA_COURSE={
  version:"2.0-A1",
  lang:"it",
  locale:"it-IT",
  name:"Parla! Italiano",
  subtitle:"Italiano Coach · A1",
  logoLetter:"I",
  hero:"Impara davvero l’italiano.",
  intro:"Un parcours guidé depuis zéro : écouter, comprendre les mécanismes, automatiser, produire et réviser jusqu’à une vraie autonomie A1.",
  maxLevel:"A1",
  storageKey:"parla_it_v2",
  legacyStorageKeys:["parla_v1_1","parla_v1"],
  articleChoices:["il","lo","l'","la","i","gli","le","un","uno","una","un'"],
  skillLabels:{agreement:"Accords",wordorder:"Construction de phrase",tenses:"Temps verbaux"},
  articleGuide:[
    {
      title:"Articles définis — singulier",
      body:"Le choix dépend du genre et du son qui suit. Apprends toujours les noms avec leur article.",
      headers:["Forme","Usage","Exemple"],
      table:[
        ["il","masculin devant la plupart des consonnes","il libro"],
        ["lo","masculin devant s + consonne, z, gn, ps…","lo studente"],
        ["l'","devant une voyelle","l'amico / l'amica"],
        ["la","féminin devant consonne","la casa"]
      ]
    },
    {
      title:"Articles définis — pluriel",
      body:"il devient i ; lo et l’ masculin deviennent gli ; la et l’ féminin deviennent le.",
      headers:["Singulier","Pluriel","Exemple"],
      table:[
        ["il","i","il libro → i libri"],
        ["lo","gli","lo studente → gli studenti"],
        ["l' (masc.)","gli","l'amico → gli amici"],
        ["la / l' (fém.)","le","la casa → le case"]
      ]
    },
    {
      title:"Articles indéfinis",
      body:"Pour « un/une » : un, uno, una, un’. Uno apparaît notamment devant s + consonne, z, gn, ps.",
      headers:["Forme","Usage","Exemple"],
      table:[
        ["un","masculin courant / devant voyelle","un libro / un amico"],
        ["uno","s + consonne, z, gn, ps…","uno studente"],
        ["una","féminin devant consonne","una casa"],
        ["un'","féminin devant voyelle","un'amica"]
      ]
    }
  ],
  tenseGuide:[
    {
      level:"Fondations",
      title:"Presente indicativo",
      body:"Le présent sert à parler du moment actuel, des habitudes et souvent d’un futur proche clairement daté.",
      formation:"radical + terminaisons du groupe verbal ; les verbes fréquents irréguliers sont appris progressivement.",
      examples:[{t:"Lavoro a Roma.",fr:"Je travaille à Rome."},{t:"Domani parto alle nove.",fr:"Demain je pars à neuf heures."}]
    },
    {
      level:"A1",
      title:"Passato prossimo",
      body:"Temps principal pour raconter une action terminée. Il se construit avec avere ou essere au présent + participe passé.",
      formation:"ho parlato / sono andato-a",
      examples:[{t:"Ho visto un film.",fr:"J’ai vu un film."},{t:"Sono arrivata ieri.",fr:"Je suis arrivée hier."}]
    },
    {
      level:"A1",
      title:"Présent à valeur future",
      body:"À l’oral, le présent suffit souvent si un repère comme domani, stasera ou sabato situe clairement l’action.",
      formation:"repère temporel + présent",
      examples:[{t:"Stasera resto a casa.",fr:"Ce soir je reste à la maison."},{t:"Sabato andiamo a Roma.",fr:"Samedi nous allons à Rome."}]
    }
  ],
  levels:[window.IT_FOUNDATION,window.IT_A1]
};
})();