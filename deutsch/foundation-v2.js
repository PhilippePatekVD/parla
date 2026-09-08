(function(){
"use strict";
const E=(t,fr)=>({t,fr});
const G=(title,body,examples=[])=>({title,body,examples:examples.map(x=>E(x[0],x[1]))});
const V=(t,fr,article=null,bare=null,note="")=>({t,fr,article,bare,note});
const P=(t,fr,note="",alt=[])=>({t,fr,note,alt});
const VB=(infinitive,fr,forms,note="",tense="Präsens",tenseLabel="présent")=>({infinitive,fr,forms,note,tense,tenseLabel});
const M=(prompt,choices,answer,explanation,skill="grammar")=>({type:"mcq",prompt,choices,answer,explanation,skill});
const T=(prompt,expected,model,explanation,skill="production")=>({type:"text",prompt,expected:Array.isArray(expected)?expected:[expected],model,explanation,skill});
const Q=(prompt,model,explanation="",skill="production",expected=null)=>({prompt,model,explanation,skill,expected:expected||[model]});

window.DE_FOUNDATION={
  id:"foundation",
  label:"Fondations",
  cefr:"Pré-A1",
  description:"Le socle : sons, ordre de la phrase, verbes essentiels et premiers articles.",
  units:[
    {
      id:"de-f1",title:"Laute und Grüße",goal:"Reconnaître les principaux sons allemands, saluer et répondre avec des expressions immédiatement utiles.",
      scene:{title:"Premier contact",lines:[
        {speaker:"Anna",t:"Hallo! Guten Morgen.",fr:"Salut ! Bonjour."},
        {speaker:"Ben",t:"Guten Morgen! Wie geht's?",fr:"Bonjour ! Comment ça va ?"},
        {speaker:"Anna",t:"Gut, danke. Und dir?",fr:"Bien, merci. Et toi ?"},
        {speaker:"Ben",t:"Sehr gut. Bis später!",fr:"Très bien. À plus tard !"}
      ]},
      grammar:[
        G("Sons à connaître tout de suite","w se prononce souvent comme v français ; z comme ts ; ei comme aï ; ie comme un i long. ä, ö, ü sont des voyelles distinctes. ß correspond à un s sourd long.",[["zwei","deux"],["wie","comment"],["heißen","s’appeler"]]),
        G("Salutations","Hallo est courant et neutre. Guten Morgen le matin, Guten Tag dans la journée, Guten Abend le soir. Tschüss est familier pour partir.",[["Guten Tag!","Bonjour !"],["Auf Wiedersehen!","Au revoir !"]])
      ],
      vocab:[
        V("Hallo!","salut / bonjour"),V("Guten Morgen!","bonjour (matin)"),V("Guten Tag!","bonjour"),V("Guten Abend!","bonsoir"),
        V("Tschüss!","salut / au revoir"),V("Auf Wiedersehen!","au revoir"),V("danke","merci"),V("bitte","s'il vous plaît / de rien"),
        V("gut","bien"),V("sehr gut","très bien")
      ],
      phrases:[
        P("Hallo!","Salut !"),P("Guten Tag!","Bonjour !"),P("Wie geht's?","Comment ça va ?"),
        P("Gut, danke.","Bien, merci."),P("Und dir?","Et toi ?"),P("Bis später!","À plus tard !")
      ],
      drills:[
        M("Le groupe « ei » se prononce plutôt :",["aï","i long","é"],"aï","mein, zwei, heißen ont le son aï.","grammar"),
        M("Le groupe « ie » se prononce plutôt :",["i long","aï","ou"],"i long","wie, sieben.","grammar"),
        M("À 20 h, la salutation la plus naturelle est :",["Guten Morgen!","Guten Abend!","Gute Reise!"],"Guten Abend!","Le soir : Guten Abend.","vocab")
      ],
      encounter:{prompts:[
        Q("Salue quelqu’un de façon neutre.","Guten Tag!","Formule très sûre."),
        Q("Réponds : « Bien, merci. »","Gut, danke.","Réponse courte naturelle."),
        Q("Dis : « À plus tard ! »","Bis später!","Expression fréquente.")
      ]}
    },
    {
      id:"de-f2",title:"Ich, du, er, sie + sein",goal:"Construire les premières phrases avec les pronoms, sein et la règle fondamentale du verbe en deuxième position.",
      scene:{title:"Qui est qui ?",lines:[
        {speaker:"Lena",t:"Ich bin Lena. Du bist Tom?",fr:"Je suis Lena. Tu es Tom ?"},
        {speaker:"Tom",t:"Ja, ich bin Tom.",fr:"Oui, je suis Tom."},
        {speaker:"Lena",t:"Sie ist Mia?",fr:"Elle, c’est Mia ?"},
        {speaker:"Tom",t:"Nein, sie ist nicht Mia. Sie ist Eva.",fr:"Non, elle n’est pas Mia. C’est Eva."}
      ]},
      grammar:[
        G("Pronoms sujets","ich = je, du = tu, er = il, sie = elle, es = il/ça neutre, wir = nous, ihr = vous familier pluriel, sie/Sie = ils-elles / vous de politesse.",[["Ich bin hier.","Je suis ici."],["Sie sind hier.","Vous êtes ici."]]),
        G("Le verbe en position 2","Dans une phrase déclarative simple, le verbe conjugué occupe la deuxième position logique.",[["Ich bin müde.","Je suis fatigué."],["Heute bin ich müde.","Aujourd’hui je suis fatigué."]])
      ],
      verbs:[
        VB("sein","être",{"ich":"bin","du":"bist","er/sie/es":"ist","wir":"sind","ihr":"seid","sie/Sie":"sind"},"Verbe irrégulier fondamental.")
      ],
      vocab:[
        V("ich","je"),V("du","tu"),V("er","il"),V("sie","elle / ils / elles"),V("es","il / ça neutre"),
        V("wir","nous"),V("ihr","vous familier pluriel"),V("Sie","vous de politesse"),V("ja","oui"),V("nein","non")
      ],
      phrases:[
        P("Ich bin hier.","Je suis ici."),P("Du bist müde.","Tu es fatigué."),P("Er ist nett.","Il est sympathique."),
        P("Wir sind hier.","Nous sommes ici."),P("Sie sind freundlich.","Vous êtes aimable(s)."),P("Heute bin ich müde.","Aujourd’hui je suis fatigué.")
      ],
      drills:[
        M("Complète : « Ich ___ hier. »",["bin","bist","ist"],"bin","sein avec ich : bin.","conjugation"),
        M("Complète : « Du ___ müde. »",["bin","bist","seid"],"bist","sein avec du : bist.","conjugation"),
        M("Dans « Heute bin ich müde », le verbe est en :",["2e position","3e position","fin de phrase"],"2e position","Heute occupe la première position, bin la deuxième.","wordorder")
      ],
      encounter:{prompts:[
        Q("Dis : « Je suis ici. »","Ich bin hier.","Sujet + verbe + complément."),
        Q("Dis : « Nous sommes ici. »","Wir sind hier.","sein avec wir : sind."),
        Q("Commence par heute : « Aujourd’hui je suis fatigué. »","Heute bin ich müde.","Le verbe reste en deuxième position.")
      ]}
    },
    {
      id:"de-f3",title:"der, die, das",goal:"Comprendre le genre grammatical, apprendre les noms avec leur article et reconnaître les pluriels.",
      scene:{title:"Objets du quotidien",lines:[
        {speaker:"Mia",t:"Das ist ein Buch.",fr:"C’est un livre."},
        {speaker:"Jonas",t:"Und das ist eine Tasche.",fr:"Et c’est un sac."},
        {speaker:"Mia",t:"Der Tisch ist neu.",fr:"La table est neuve."},
        {speaker:"Jonas",t:"Die Tasche ist schwarz.",fr:"Le sac est noir."}
      ]},
      grammar:[
        G("Trois genres","Un nom allemand est masculin, féminin ou neutre : der, die, das. Le genre n’est pas toujours prévisible : apprends le nom avec son article.",[["der Tisch","la table"],["die Tasche","le sac"],["das Buch","le livre"]]),
        G("Le pluriel","Le pluriel a plusieurs formations et l’article défini est toujours die. Il faut aussi apprendre le pluriel avec le nom.",[["der Tisch → die Tische","la table → les tables"],["das Buch → die Bücher","le livre → les livres"]])
      ],
      vocab:[
        V("der Tisch","la table","der","Tisch"),V("die Tasche","le sac","die","Tasche"),V("das Buch","le livre","das","Buch"),
        V("der Stuhl","la chaise","der","Stuhl"),V("die Tür","la porte","die","Tür"),V("das Fenster","la fenêtre","das","Fenster"),
        V("der Mann","l'homme","der","Mann"),V("die Frau","la femme","die","Frau"),V("das Kind","l'enfant","das","Kind"),V("die Bücher","les livres","die","Bücher")
      ],
      phrases:[
        P("Das ist ein Buch.","C’est un livre."),P("Das ist eine Tasche.","C’est un sac."),P("Der Tisch ist neu.","La table est neuve."),
        P("Die Tasche ist schwarz.","Le sac est noir."),P("Das Fenster ist offen.","La fenêtre est ouverte."),P("Die Bücher sind hier.","Les livres sont ici.")
      ],
      drills:[
        M("Article de « Tisch » :",["der","die","das"],"der","On apprend der Tisch.","articles"),
        M("Article de « Tasche » :",["der","die","das"],"die","On apprend die Tasche.","articles"),
        M("Article de « Buch » :",["der","die","das"],"das","On apprend das Buch.","articles"),
        M("Article défini du pluriel :",["der","die","das"],"die","Au pluriel nominatif : die.","articles")
      ],
      encounter:{prompts:[
        Q("Dis : « C’est un livre. »","Das ist ein Buch.","Buch est neutre."),
        Q("Dis : « La table est neuve. »","Der Tisch ist neu.","Tisch est masculin grammaticalement."),
        Q("Dis : « Les livres sont ici. »","Die Bücher sind hier.","Plural + sind.")
      ]}
    },
    {
      id:"de-f4",title:"haben, Zahlen und Alter",goal:"Utiliser haben, les nombres et la structure allemande pour dire son âge.",
      scene:{title:"Informations personnelles",lines:[
        {speaker:"Nina",t:"Wie alt bist du?",fr:"Quel âge as-tu ?"},
        {speaker:"Paul",t:"Ich bin dreißig Jahre alt.",fr:"J’ai trente ans."},
        {speaker:"Nina",t:"Hast du eine deutsche Nummer?",fr:"Tu as un numéro allemand ?"},
        {speaker:"Paul",t:"Ja, ich habe eine deutsche Nummer.",fr:"Oui, j’ai un numéro allemand."}
      ]},
      grammar:[
        G("haben — avoir","haben est irrégulier au singulier : ich habe, du hast, er/sie hat.",[["Ich habe Zeit.","J’ai le temps."],["Du hast eine Frage.","Tu as une question."]]),
        G("Dire l’âge","Contrairement au français, l’allemand utilise sein : Ich bin 30 Jahre alt.",[["Wie alt bist du?","Quel âge as-tu ?"],["Ich bin vierzig Jahre alt.","J’ai quarante ans."]])
      ],
      verbs:[
        VB("haben","avoir",{"ich":"habe","du":"hast","er/sie/es":"hat","wir":"haben","ihr":"habt","sie/Sie":"haben"},"Verbe irrégulier essentiel.")
      ],
      vocab:[
        V("null","zéro"),V("eins","un"),V("zwei","deux"),V("drei","trois"),V("zehn","dix"),V("zwanzig","vingt"),
        V("dreißig","trente"),V("vierzig","quarante"),V("das Jahr","l'année","das","Jahr"),V("die Nummer","le numéro","die","Nummer")
      ],
      phrases:[
        P("Ich bin dreißig Jahre alt.","J’ai trente ans."),P("Wie alt bist du?","Quel âge as-tu ?"),P("Ich habe eine Frage.","J’ai une question."),
        P("Hast du Zeit?","Tu as le temps ?"),P("Sie hat eine Nummer.","Elle a un numéro."),P("Wir haben zwei Kinder.","Nous avons deux enfants.")
      ],
      drills:[
        M("Complète : « Ich ___ Zeit. »",["habe","hast","hat"],"habe","haben avec ich : habe.","conjugation"),
        M("Complète : « Du ___ eine Frage. »",["habe","hast","habt"],"hast","haben avec du : hast.","conjugation"),
        M("Pour dire l’âge, l’allemand utilise :",["sein","haben"],"sein","Ich bin 30 Jahre alt.","grammar")
      ],
      encounter:{prompts:[
        Q("Demande : « Quel âge as-tu ? »","Wie alt bist du?","Structure avec sein."),
        Q("Dis : « J’ai trente ans. »","Ich bin dreißig Jahre alt.","L’allemand utilise sein."),
        Q("Dis : « J’ai une question. »","Ich habe eine Frage.","haben avec ich.")
      ]}
    },
    {
      id:"de-f5",title:"Präsens und Fragen",goal:"Former le présent régulier et poser des questions oui/non ou avec un mot interrogatif.",
      scene:{title:"Au cours d’allemand",lines:[
        {speaker:"Lehrer",t:"Lernst du Deutsch?",fr:"Tu apprends l’allemand ?"},
        {speaker:"Sofia",t:"Ja, ich lerne jeden Tag.",fr:"Oui, j’apprends tous les jours."},
        {speaker:"Lehrer",t:"Wo arbeitest du?",fr:"Où travailles-tu ?"},
        {speaker:"Sofia",t:"Ich arbeite in Lausanne.",fr:"Je travaille à Lausanne."}
      ]},
      grammar:[
        G("Présent régulier","Terminaisons fréquentes : ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en.",[["ich lerne","j’apprends"],["du lernst","tu apprends"],["wir lernen","nous apprenons"]]),
        G("Deux types de questions","Oui/non : verbe en première position. Question en W- : mot interrogatif + verbe + sujet.",[["Lernst du Deutsch?","Apprends-tu l’allemand ?"],["Wo wohnst du?","Où habites-tu ?"]])
      ],
      verbs:[
        VB("lernen","apprendre",{"ich":"lerne","du":"lernst","er/sie/es":"lernt","wir":"lernen","ihr":"lernt","sie/Sie":"lernen"},"Modèle régulier."),
        VB("arbeiten","travailler",{"ich":"arbeite","du":"arbeitest","er/sie/es":"arbeitet","wir":"arbeiten","ihr":"arbeitet","sie/Sie":"arbeiten"},"Une voyelle d’appui apparaît dans certaines formes.")
      ],
      vocab:[
        V("lernen","apprendre"),V("arbeiten","travailler"),V("wohnen","habiter"),V("machen","faire"),V("spielen","jouer"),
        V("wo?","où ?"),V("was?","quoi ?"),V("wie?","comment ?"),V("wann?","quand ?"),V("warum?","pourquoi ?")
      ],
      phrases:[
        P("Ich lerne Deutsch.","J’apprends l’allemand."),P("Lernst du Deutsch?","Tu apprends l’allemand ?"),P("Wo arbeitest du?","Où travailles-tu ?"),
        P("Ich arbeite in Lausanne.","Je travaille à Lausanne."),P("Was machst du?","Qu’est-ce que tu fais ?"),P("Wir lernen jeden Tag.","Nous apprenons chaque jour.")
      ],
      drills:[
        M("Terminaison typique avec ich :",["-e","-st","-t"],"-e","ich lerne.","conjugation"),
        M("Terminaison typique avec du :",["-e","-st","-en"],"-st","du lernst.","conjugation"),
        M("Dans une question oui/non, le verbe vient souvent :",["en première position","en dernière position","après deux compléments"],"en première position","Lernst du Deutsch?","wordorder")
      ],
      encounter:{prompts:[
        Q("Demande : « Tu apprends l’allemand ? »","Lernst du Deutsch?","Verbe en première position."),
        Q("Demande : « Où travailles-tu ? »","Wo arbeitest du?","Wo + verbe + sujet."),
        Q("Dis : « Nous apprenons chaque jour. »","Wir lernen jeden Tag.","Présent régulier.")
      ]}
    },
    {
      id:"de-f6",title:"nicht, kein et premier accusatif",goal:"Nier correctement et comprendre le changement du masculin à l’accusatif.",
      scene:{title:"Ce que j’ai et ce que je veux",lines:[
        {speaker:"Mara",t:"Hast du einen Kaffee?",fr:"Tu as un café ?"},
        {speaker:"Tim",t:"Nein, ich habe keinen Kaffee.",fr:"Non, je n’ai pas de café."},
        {speaker:"Mara",t:"Trinkst du Tee?",fr:"Tu bois du thé ?"},
        {speaker:"Tim",t:"Nein, ich trinke Tee nicht gern.",fr:"Non, je n’aime pas boire du thé."}
      ]},
      grammar:[
        G("nicht ou kein ?","kein nie un nom avec article indéfini ou sans article : kein Geld, keine Zeit. nicht nie plutôt un verbe, adjectif, adverbe ou groupe défini.",[["Ich habe kein Geld.","Je n’ai pas d’argent."],["Ich bin nicht müde.","Je ne suis pas fatigué."]]),
        G("Accusatif masculin","Pour l’objet direct masculin : der → den ; ein → einen ; kein → keinen. Féminin et neutre ne changent pas à ce stade.",[["Ich sehe den Mann.","Je vois l’homme."],["Ich kaufe einen Kaffee.","J’achète un café."]])
      ],
      vocab:[
        V("der Kaffee","le café","der","Kaffee"),V("der Tee","le thé","der","Tee"),V("das Geld","l'argent","das","Geld"),V("die Zeit","le temps","die","Zeit"),
        V("kaufen","acheter"),V("sehen","voir"),V("trinken","boire"),V("brauchen","avoir besoin"),V("nicht","ne… pas"),V("kein","aucun / pas de")
      ],
      phrases:[
        P("Ich bin nicht müde.","Je ne suis pas fatigué."),P("Ich habe kein Geld.","Je n’ai pas d’argent."),P("Ich habe keine Zeit.","Je n’ai pas le temps."),
        P("Ich kaufe einen Kaffee.","J’achète un café."),P("Ich sehe den Mann.","Je vois l’homme."),P("Ich brauche keinen Kaffee.","Je n’ai pas besoin de café.")
      ],
      drills:[
        M("Pour nier « Geld » sans article, on choisit :",["kein","nicht"],"kein","kein Geld.","grammar"),
        M("Pour nier un adjectif : « Je ne suis pas fatigué » :",["nicht","kein"],"nicht","nicht müde.","grammar"),
        M("Accusatif de « der Mann » :",["den Mann","der Mann","dem Mann"],"den Mann","Masculin accusatif : der → den.","cases"),
        M("Accusatif de « ein Kaffee » :",["einen Kaffee","ein Kaffee","einem Kaffee"],"einen Kaffee","Masculin accusatif : ein → einen.","cases")
      ],
      encounter:{prompts:[
        Q("Dis : « Je n’ai pas d’argent. »","Ich habe kein Geld.","kein avec un nom sans article."),
        Q("Dis : « Je ne suis pas fatigué. »","Ich bin nicht müde.","nicht devant l’adjectif."),
        Q("Dis : « J’achète un café. »","Ich kaufe einen Kaffee.","Kaffee masculin accusatif : einen.")
      ]}
    }
  ]
};
})();