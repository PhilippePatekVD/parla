(function(){
"use strict";
window.PARLA_COURSE={
  version:"2.0-A1",
  lang:"es",
  locale:"es-ES",
  name:"¡Habla! Español",
  subtitle:"Español Coach · A1",
  logoLetter:"E",
  hero:"Construye un español sólido.",
  intro:"Un parcours A1 guidé depuis zéro : sons, ser/estar, articles, conjugaison, situations réelles, écoute, production et révisions cumulatives.",
  maxLevel:"A1",
  storageKey:"habla_es_v2",
  legacyStorageKeys:[],
  articleChoices:["el","la","los","las","un","una","unos","unas"],
  skillLabels:{agreement:"Accords",wordorder:"Construction de phrase",tenses:"Temps verbaux",pronunciation:"Prononciation"},
  articleGuide:[
    {
      title:"Articles définis",
      body:"L’article défini s’accorde en genre et en nombre : el, la, los, las. Apprends les noms avec leur article.",
      headers:["Genre","Singulier","Pluriel"],
      table:[["masculin","el","los"],["féminin","la","las"]],
      examples:[{t:"el libro / los libros",fr:"le livre / les livres"},{t:"la casa / las casas",fr:"la maison / les maisons"}]
    },
    {
      title:"Articles indéfinis",
      body:"un, una, unos, unas introduisent un élément non identifié ou une quantité approximative.",
      headers:["Genre","Singulier","Pluriel"],
      table:[["masculin","un","unos"],["féminin","una","unas"]],
      examples:[{t:"un café",fr:"un café"},{t:"unas preguntas",fr:"quelques questions"}]
    },
    {
      title:"Genre, exceptions et contractions",
      body:"-o est souvent masculin et -a souvent féminin, mais il existe des exceptions. a + el devient al et de + el devient del. Certains noms féminins commençant par a tonique prennent el au singulier : el agua fría.",
      examples:[{t:"el problema",fr:"le problème"},{t:"la mano",fr:"la main"},{t:"al museo / del banco",fr:"au musée / de la banque"}]
    }
  ],
  tenseGuide:[
    {
      level:"Fondations",
      title:"Presente de indicativo",
      body:"Le présent exprime ce qui se passe maintenant, les habitudes et les faits. Les verbes réguliers suivent les groupes -ar, -er et -ir.",
      formation:"hablo / comes / vivimos ; nombreux verbes fréquents irréguliers",
      examples:[{t:"Trabajo en Madrid.",fr:"Je travaille à Madrid."},{t:"Vivimos en Suiza.",fr:"Nous vivons en Suisse."}]
    },
    {
      level:"A1",
      title:"estar + gerundio",
      body:"Cette périphrase insiste sur une action en cours au moment où l’on parle.",
      formation:"estar + -ando / -iendo",
      examples:[{t:"Estoy trabajando.",fr:"Je suis en train de travailler."},{t:"Estamos comiendo.",fr:"Nous sommes en train de manger."}]
    },
    {
      level:"A1",
      title:"Pretérito perfecto",
      body:"En espagnol d’Espagne, il est très fréquent pour une action passée encore reliée à la période actuelle : hoy, esta semana, este año.",
      formation:"he/has/ha/hemos/habéis/han + participio",
      examples:[{t:"Hoy he trabajado.",fr:"Aujourd’hui j’ai travaillé."},{t:"¿Has visto a Ana?",fr:"As-tu vu Ana ?"}]
    },
    {
      level:"A1",
      title:"ir a + infinitivo",
      body:"Structure centrale pour parler d’un projet ou futur proche.",
      formation:"ir conjugué + a + infinitif",
      examples:[{t:"Voy a viajar mañana.",fr:"Je vais voyager demain."},{t:"Vamos a reservar.",fr:"Nous allons réserver."}]
    }
  ],
  levels:[window.ES_FOUNDATION,window.ES_A1]
};
})();