(function(){
"use strict";
const E=(t,fr)=>({t,fr});
const G=(title,body,examples=[])=>({title,body,examples:examples.map(x=>E(x[0],x[1]))});
const V=(t,fr,article=null,bare=null,note="")=>({t,fr,article,bare,note});
const P=(t,fr,note="",alt=[])=>({t,fr,note,alt});
const VB=(infinitive,fr,forms,note="",tense="presente",tenseLabel="présent")=>({infinitive,fr,forms,note,tense,tenseLabel});
const M=(prompt,choices,answer,explanation,skill="grammar")=>({type:"mcq",prompt,choices,answer,explanation,skill});
const T=(prompt,expected,model,explanation,skill="production")=>({type:"text",prompt,expected:Array.isArray(expected)?expected:[expected],model,explanation,skill});
const Q=(prompt,model,explanation="",skill="production",expected=null)=>({prompt,model,explanation,skill,expected:expected||[model]});

window.IT_FOUNDATION={
  id:"foundation",
  label:"Fondations",
  cefr:"Pré-A1",
  description:"Le socle : comprendre comment la langue se construit avant d’accumuler du vocabulaire.",
  units:[
    {
      id:"it-f1",title:"Suoni e saluti",goal:"Reconnaître les sons essentiels, saluer et répondre sans encore chercher à faire des phrases complexes.",
      scene:{title:"Premier contact",lines:[
        {speaker:"Anna",t:"Ciao! Buongiorno.",fr:"Salut ! Bonjour."},
        {speaker:"Marco",t:"Buongiorno! Come va?",fr:"Bonjour ! Comment ça va ?"},
        {speaker:"Anna",t:"Bene, grazie. E tu?",fr:"Bien, merci. Et toi ?"},
        {speaker:"Marco",t:"Molto bene. A presto!",fr:"Très bien. À bientôt !"}
      ]},
      grammar:[
        G("Lire l’italien","L’italien se lit de façon assez régulière. Les voyelles a, e, i, o, u sont nettes. c + e/i donne souvent le son « tch », tandis que ch + e/i garde le son « k ».",[["ciao","salut"],["cena","dîner"],["che","que / quel"]]),
        G("Saluer selon le moment","Ciao est familier et peut servir à l’arrivée comme au départ. Buongiorno est neutre et poli dans la journée ; buonasera prend le relais le soir.",[["Buongiorno, signora.","Bonjour, madame."],["Ciao, Luca!","Salut, Luca !"]])
      ],
      vocab:[
        V("ciao","salut / au revoir"),V("buongiorno","bonjour"),V("buonasera","bonsoir"),V("arrivederci","au revoir"),
        V("grazie","merci"),V("prego","de rien / je vous en prie"),V("bene","bien"),V("male","mal"),
        V("molto bene","très bien"),V("a presto","à bientôt")
      ],
      phrases:[
        P("Ciao!","Salut !"),P("Buongiorno, signora.","Bonjour, madame."),P("Come va?","Comment ça va ?"),
        P("Bene, grazie.","Bien, merci."),P("E tu?","Et toi ?"),P("A presto!","À bientôt !")
      ],
      drills:[
        M("Quel mot italien est le plus approprié avec une personne inconnue à 10 h ?",["ciao","buongiorno","buonanotte"],"buongiorno","Buongiorno est le choix neutre et poli dans ce contexte.","vocab"),
        M("Dans « che », le groupe ch se prononce plutôt :",["k","tch","ch français"],"k","ch + e/i garde le son dur /k/.","grammar"),
        M("« Prego » peut répondre à :",["Grazie","Buonasera","Male"],"Grazie","Prego signifie notamment « de rien / je vous en prie ».","vocab")
      ],
      encounter:{prompts:[
        Q("Tu arrives : salue simplement quelqu’un de façon neutre.","Buongiorno.","Buongiorno convient dans un grand nombre de situations."),
        Q("On te dit « Come va? ». Réponds : « Bien, merci. »","Bene, grazie.","Réponse brève et naturelle."),
        Q("Tu pars : dis « À bientôt ! »","A presto!","A presto exprime l’idée de se revoir bientôt.")
      ]}
    },
    {
      id:"it-f2",title:"Io, tu, lui, lei",goal:"Construire ses premières phrases avec les pronoms sujets, essere et la négation.",
      scene:{title:"Qui es-tu ?",lines:[
        {speaker:"Sara",t:"Io sono Sara. Tu sei Paolo?",fr:"Moi, je suis Sara. Tu es Paolo ?"},
        {speaker:"Paolo",t:"Sì, sono Paolo.",fr:"Oui, je suis Paolo."},
        {speaker:"Sara",t:"Lei è Giulia?",fr:"Elle, c’est Giulia ?"},
        {speaker:"Paolo",t:"No, lei non è Giulia. È Marta.",fr:"Non, elle n’est pas Giulia. C’est Marta."}
      ]},
      grammar:[
        G("Les pronoms sujets","io = je, tu = tu, lui = il, lei = elle. En italien, on peut souvent omettre le pronom parce que la terminaison du verbe indique la personne.",[["Io sono francese.","Je suis français(e)."],["Sono francese.","Je suis français(e)."]]),
        G("La négation","Pour nier, on place non juste avant le verbe.",[["Non sono italiano.","Je ne suis pas italien."],["Lei non è qui.","Elle n’est pas ici."]])
      ],
      verbs:[
        VB("essere","être",{"io":"sono","tu":"sei","lui/lei":"è","noi":"siamo","voi":"siete","loro":"sono"},"Verbe fondamental et irrégulier.")
      ],
      vocab:[
        V("io","je"),V("tu","tu"),V("lui","il"),V("lei","elle"),V("noi","nous"),V("voi","vous"),V("loro","ils / elles"),
        V("sì","oui"),V("no","non"),V("non","ne… pas")
      ],
      phrases:[
        P("Io sono Luca.","Je suis Luca."),P("Tu sei Anna.","Tu es Anna."),P("Lei è qui.","Elle est ici."),
        P("Non sono italiano.","Je ne suis pas italien."),P("Noi siamo amici.","Nous sommes amis."),P("Loro sono qui.","Ils sont ici.")
      ],
      drills:[
        M("Complète : « Io ___ francese. »",["sono","sei","è"],"sono","Avec io, essere donne sono.","conjugation"),
        M("Complète : « Tu ___ italiano. »",["sono","sei","è"],"sei","Avec tu, essere donne sei.","conjugation"),
        M("Où place-t-on non ?",["avant le verbe","après le verbe","toujours en fin de phrase"],"avant le verbe","La négation simple suit le schéma non + verbe.","grammar"),
        T("Traduis : « Elle n’est pas ici. »",["lei non è qui","non è qui"],"Lei non è qui.","Le pronom lei peut être omis si le contexte est clair.")
      ],
      encounter:{prompts:[
        Q("Présente-toi sur le modèle « Je suis … ».","Io sono …","Pour insister sur toi-même, io sono…"),
        Q("Dis : « Nous sommes ici. »","Noi siamo qui.","Essere avec noi : siamo."),
        Q("Dis : « Je ne suis pas italien. »","Non sono italiano.","Non se place devant sono.")
      ]}
    },
    {
      id:"it-f3",title:"Il, lo, la, un, una",goal:"Comprendre le genre des noms et choisir les articles définis et indéfinis les plus fréquents.",
      scene:{title:"Sur la table",lines:[
        {speaker:"Marta",t:"Questo è un libro.",fr:"Ceci est un livre."},
        {speaker:"Luca",t:"E questa è una penna.",fr:"Et ceci est un stylo."},
        {speaker:"Marta",t:"Il libro è nuovo.",fr:"Le livre est neuf."},
        {speaker:"Luca",t:"La penna è rossa.",fr:"Le stylo est rouge."}
      ]},
      grammar:[
        G("Masculin et féminin","Beaucoup de noms en -o sont masculins et beaucoup de noms en -a féminins, mais il existe des exceptions. Apprends le nom avec son article.",[["il libro","le livre"],["la casa","la maison"],["la mano","la main"]]),
        G("Articles de base","Au singulier : il / lo / l’ au masculin, la / l’ au féminin. Pour « un/une » : un, uno, una, un’. Lo/uno sont utilisés notamment devant s + consonne, z, gn, ps.",[["il ragazzo","le garçon"],["lo studente","l’étudiant"],["una casa","une maison"],["un'amica","une amie"]])
      ],
      vocab:[
        V("il libro","le livre","il","libro"),V("la casa","la maison","la","casa"),V("lo studente","l'étudiant","lo","studente"),
        V("la penna","le stylo","la","penna"),V("il tavolo","la table","il","tavolo"),V("la sedia","la chaise","la","sedia"),
        V("un amico","un ami","un","amico"),V("un'amica","une amie","un'","amica"),V("uno zaino","un sac à dos","uno","zaino"),V("una porta","une porte","una","porta")
      ],
      phrases:[
        P("Questo è un libro.","Ceci est un livre."),P("Questa è una casa.","Ceci est une maison."),P("Il libro è nuovo.","Le livre est neuf."),
        P("La casa è grande.","La maison est grande."),P("Lo studente è qui.","L’étudiant est ici."),P("Ho un'amica italiana.","J’ai une amie italienne.")
      ],
      drills:[
        M("Quel article défini devant « studente » ?",["il","lo","la"],"lo","s + consonne appelle généralement lo.","articles"),
        M("Quel article indéfini devant « amica » ?",["una","un'","uno"],"un'","Una s’élide devant une voyelle : un’amica.","articles"),
        M("Quel genre est « casa » ?",["masculin","féminin"],"féminin","On dit la casa.","articles")
      ],
      encounter:{prompts:[
        Q("Montre un livre : dis « Ceci est un livre. »","Questo è un libro.","Questo s’emploie ici avec un nom masculin."),
        Q("Dis : « La maison est grande. »","La casa è grande.","Article féminin la + adjectif féminin grande, qui est invariable en genre au singulier."),
        Q("Dis : « L’étudiant est ici. »","Lo studente è qui.","Devant studente : lo.")
      ]}
    },
    {
      id:"it-f4",title:"Avere, l’età e i numeri",goal:"Utiliser avere, compter et dire son âge correctement.",
      scene:{title:"Âge et téléphone",lines:[
        {speaker:"Chiara",t:"Quanti anni hai?",fr:"Quel âge as-tu ?"},
        {speaker:"Davide",t:"Ho trentadue anni.",fr:"J’ai trente-deux ans."},
        {speaker:"Chiara",t:"Hai un numero italiano?",fr:"Tu as un numéro italien ?"},
        {speaker:"Davide",t:"Sì, ho un numero italiano.",fr:"Oui, j’ai un numéro italien."}
      ]},
      grammar:[
        G("Avere — avoir","Avere est irrégulier. Contrairement au français écrit avec liaison, le h italien ne se prononce pas : ho, hai, ha, hanno.",[["Ho trent'anni.","J’ai trente ans."],["Hai tempo?","Tu as le temps ?"]]),
        G("Dire l’âge","En italien, comme en français, on utilise avere : ho 30 anni.",[["Quanti anni hai?","Quel âge as-tu ?"],["Ho quarant'anni.","J’ai quarante ans."]])
      ],
      verbs:[
        VB("avere","avoir",{"io":"ho","tu":"hai","lui/lei":"ha","noi":"abbiamo","voi":"avete","loro":"hanno"},"Le h est graphique : il ne se prononce pas.")
      ],
      vocab:[
        V("zero","zéro"),V("uno","un"),V("due","deux"),V("tre","trois"),V("dieci","dix"),V("venti","vingt"),
        V("trenta","trente"),V("quaranta","quarante"),V("anni","ans"),V("numero","numéro")
      ],
      phrases:[
        P("Ho trentadue anni.","J’ai trente-deux ans."),P("Quanti anni hai?","Quel âge as-tu ?"),P("Hai tempo?","Tu as le temps ?"),
        P("Lei ha un numero italiano.","Elle a un numéro italien."),P("Abbiamo due amici.","Nous avons deux amis."),P("Non ho tempo.","Je n’ai pas le temps.")
      ],
      drills:[
        M("Complète : « Io ___ tempo. »",["ho","hai","ha"],"ho","Avere avec io : ho.","conjugation"),
        M("Complète : « Lei ___ trent'anni. »",["ho","hai","ha"],"ha","Avere avec lei : ha.","conjugation"),
        M("En italien, pour dire l’âge, on utilise :",["essere","avere"],"avere","Ho 30 anni.","grammar")
      ],
      encounter:{prompts:[
        Q("Demande : « Quel âge as-tu ? »","Quanti anni hai?","La structure est quanti anni + hai."),
        Q("Dis : « J’ai quarante ans. »","Ho quarant'anni.","Avere + nombre + anni."),
        Q("Dis : « Je n’ai pas le temps. »","Non ho tempo.","Non + ho.")
      ]}
    },
    {
      id:"it-f5",title:"Il presente regolare",goal:"Comprendre comment se forme le présent des verbes réguliers en -are, -ere et -ire.",
      scene:{title:"Une journée simple",lines:[
        {speaker:"Elena",t:"Io lavoro a Milano.",fr:"Je travaille à Milan."},
        {speaker:"Paolo",t:"Io studio italiano.",fr:"J’étudie l’italien."},
        {speaker:"Elena",t:"La sera mangiamo insieme.",fr:"Le soir, nous mangeons ensemble."},
        {speaker:"Paolo",t:"E poi dormiamo.",fr:"Et ensuite nous dormons."}
      ]},
      grammar:[
        G("Verbes en -are","On enlève -are et on ajoute : -o, -i, -a, -iamo, -ate, -ano.",[["parlo","je parle"],["parliamo","nous parlons"]]),
        G("Verbes en -ere et -ire","-ere : -o, -i, -e, -iamo, -ete, -ono. -ire : -o, -i, -e, -iamo, -ite, -ono. Certains verbes en -ire ajoutent -isc- à certaines personnes, mais pas encore ici.",[["prendo","je prends"],["dormiamo","nous dormons"]])
      ],
      verbs:[
        VB("parlare","parler",{"io":"parlo","tu":"parli","lui/lei":"parla","noi":"parliamo","voi":"parlate","loro":"parlano"},"Modèle régulier en -are."),
        VB("prendere","prendre",{"io":"prendo","tu":"prendi","lui/lei":"prende","noi":"prendiamo","voi":"prendete","loro":"prendono"},"Modèle fréquent en -ere."),
        VB("dormire","dormir",{"io":"dormo","tu":"dormi","lui/lei":"dorme","noi":"dormiamo","voi":"dormite","loro":"dormono"},"Modèle régulier en -ire.")
      ],
      vocab:[
        V("parlare","parler"),V("studiare","étudier"),V("lavorare","travailler"),V("mangiare","manger"),V("prendere","prendre"),
        V("leggere","lire"),V("dormire","dormir"),V("aprire","ouvrir"),V("ogni giorno","chaque jour"),V("la sera","le soir")
      ],
      phrases:[
        P("Parlo italiano.","Je parle italien."),P("Studiamo ogni giorno.","Nous étudions chaque jour."),P("Lei lavora a Roma.","Elle travaille à Rome."),
        P("Prendo il treno.","Je prends le train."),P("Dormiamo otto ore.","Nous dormons huit heures."),P("Loro leggono molto.","Ils lisent beaucoup.")
      ],
      drills:[
        M("Avec « noi », un verbe régulier en -are finit généralement par :",["-iamo","-ate","-ano"],"-iamo","parliamo, lavoriamo, studiamo.","conjugation"),
        M("Complète : « Tu parl___ italiano. »",["o","i","a"],"i","Tu parli.","conjugation"),
        M("Complète : « Noi dorm___ bene. »",["iamo","ite","ono"],"iamo","Noi dormiamo.","conjugation")
      ],
      encounter:{prompts:[
        Q("Dis : « Je parle italien. »","Parlo italiano.","Le pronom io n’est pas nécessaire."),
        Q("Dis : « Nous étudions chaque jour. »","Studiamo ogni giorno.","Studiare → studiamo."),
        Q("Dis : « Elle travaille à Rome. »","Lei lavora a Roma.","Avec une ville : a Roma.")
      ]}
    },
    {
      id:"it-f6",title:"Domande, negazione e accordi",goal:"Poser des questions simples, nier et accorder les adjectifs de base.",
      scene:{title:"Au premier cours",lines:[
        {speaker:"Prof",t:"Parli italiano?",fr:"Tu parles italien ?"},
        {speaker:"Lina",t:"Un po'. Non parlo molto bene.",fr:"Un peu. Je ne parle pas très bien."},
        {speaker:"Prof",t:"Sei francese?",fr:"Tu es française ?"},
        {speaker:"Lina",t:"Sì, sono francese e sono molto motivata.",fr:"Oui, je suis française et très motivée."}
      ]},
      grammar:[
        G("Question oui/non","En italien, une question simple peut avoir exactement le même ordre qu’une affirmation : c’est surtout l’intonation et le point d’interrogation qui changent.",[["Parli italiano.","Tu parles italien."],["Parli italiano?","Tu parles italien ?"]]),
        G("Accord des adjectifs","Beaucoup d’adjectifs en -o varient : -o masculin singulier, -a féminin singulier, -i masculin pluriel, -e féminin pluriel. Ceux en -e ont généralement -i au pluriel.",[["italiano / italiana","italien / italienne"],["grande / grandi","grand(e) / grands-grandes"]])
      ],
      vocab:[
        V("chi?","qui ?"),V("che cosa?","quoi ?"),V("dove?","où ?"),V("come?","comment ?"),V("quando?","quand ?"),
        V("perché?","pourquoi ?"),V("un po'","un peu"),V("molto","beaucoup / très"),V("grande","grand(e)"),V("piccolo","petit")
      ],
      phrases:[
        P("Parli italiano?","Tu parles italien ?"),P("Dove abiti?","Où habites-tu ?"),P("Come stai?","Comment vas-tu ?"),
        P("Non parlo molto bene.","Je ne parle pas très bien."),P("Lei è italiana.","Elle est italienne."),P("Sono molto motivata.","Je suis très motivée.")
      ],
      drills:[
        M("Pour transformer « Parli italiano. » en question, il faut obligatoirement inverser le sujet et le verbe ?",["oui","non"],"non","L’ordre peut rester identique ; l’intonation suffit souvent.","grammar"),
        M("Féminin singulier de « italiano » :",["italiana","italiani","italiane"],"italiana","Les adjectifs en -o forment souvent le féminin en -a.","agreement"),
        M("Pluriel de « grande » :",["grandi","grande","grandes"],"grandi","Les adjectifs en -e prennent généralement -i au pluriel.","agreement"),
        T("Traduis : « Où habites-tu ? »",["dove abiti"],"Dove abiti?","Dove introduit la question de lieu.")
      ],
      encounter:{prompts:[
        Q("Demande : « Tu parles italien ? »","Parli italiano?","Pas d’inversion obligatoire."),
        Q("Réponds : « Un peu. »","Un po'.","Expression très utile au début."),
        Q("Dis : « Je ne parle pas très bien. »","Non parlo molto bene.","Non se place immédiatement avant le verbe.")
      ]}
    }
  ]
};
})();