(function(){
"use strict";

window.PARLA_COURSE={
  version:"2.0",
  lang:"it",
  locale:"it-IT",
  name:"Parla! Italiano",
  subtitle:"Italiano Coach · Fondations → A2",
  logoLetter:"I",
  hero:"Impara davvero l’italiano.",
  intro:"Un parcours guidé qui commence par le béaba, explique les mécanismes de la langue puis te fait écouter, construire, produire et réviser jusqu’à automatisation.",
  maxLevel:"A2",
  storageKey:"parla_it_v2",
  legacyStorageKeys:["parla_v1_1","parla_v1"],
  articleChoices:["il","lo","l'","la","i","gli","le","un","uno","una","un'"],
  skillLabels:{agreement:"Accords"},
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
      body:"Les formes changent au pluriel : il → i ; lo/l’ masculin → gli ; la/l’ féminin → le.",
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
      body:"Pour « un/une » : un, uno, una, un’. Il n’existe pas de véritable article indéfini pluriel simple.",
      headers:["Forme","Usage","Exemple"],
      table:[
        ["un","masculin courant et masculin devant voyelle","un libro / un amico"],
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
      body:"Le présent sert à parler de ce qui se passe maintenant, des habitudes, des faits généraux et souvent d’un futur proche clairement daté.",
      formation:"radical + terminaisons du groupe verbal ; de nombreux verbes fréquents sont irréguliers.",
      examples:[{t:"Lavoro a Roma.",fr:"Je travaille à Rome."},{t:"Domani parto alle nove.",fr:"Demain je pars à neuf heures."}]
    },
    {
      level:"A1",
      title:"Passato prossimo",
      body:"Temps du passé terminé, très utilisé à l’oral. Il se forme avec avere ou essere au présent + participe passé.",
      formation:"ho parlato / sono andato-a",
      examples:[{t:"Ho visto un film.",fr:"J’ai vu un film."},{t:"Sono arrivata ieri.",fr:"Je suis arrivée hier."}]
    },
    {
      level:"A2",
      title:"Imperfetto",
      body:"Il décrit une habitude, un état, un décor ou une action en cours dans le passé.",
      formation:"parlavo, credevo, dormivo ; essere → ero, eri, era…",
      examples:[{t:"Da piccolo vivevo a Roma.",fr:"Petit, je vivais à Rome."},{t:"Pioveva.",fr:"Il pleuvait."}]
    },
    {
      level:"A2",
      title:"Futuro semplice",
      body:"Il exprime un futur plus explicite, une prévision ou parfois une supposition.",
      formation:"parlerò, prenderai, dormirà ; radicaux irréguliers sar-, avr-, andr-, verr-…",
      examples:[{t:"Domani lavorerò.",fr:"Demain je travaillerai."},{t:"Sarà tardi.",fr:"Il sera tard."}]
    },
    {
      level:"A2",
      title:"Condizionale presente",
      body:"Il sert à demander poliment, exprimer un souhait, un conseil ou une possibilité.",
      formation:"-ei, -esti, -ebbe, -emmo, -este, -ebbero",
      examples:[{t:"Vorrei un caffè.",fr:"Je voudrais un café."},{t:"Dovresti riposare.",fr:"Tu devrais te reposer."}]
    },
    {
      level:"A2",
      title:"Stare + gerundio",
      body:"Forme progressive pour insister sur une action en cours.",
      formation:"stare au présent + -ando / -endo",
      examples:[{t:"Sto lavorando.",fr:"Je suis en train de travailler."},{t:"Stiamo mangiando.",fr:"Nous sommes en train de manger."}]
    }
  ],
  levels:[window.IT_FOUNDATION,window.IT_A1,window.IT_A2]
};
})();