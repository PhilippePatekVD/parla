(function(){
"use strict";
const E=(t,fr)=>({t,fr});
const G=(title,body,examples=[])=>({title,body,examples:examples.map(x=>E(x[0],x[1]))});
const V=(t,fr,article=null,bare=null,note="")=>({t,fr,article,bare,note});
const P=(t,fr,note="",alt=[])=>({t,fr,note,alt});
const VB=(infinitive,fr,forms,note="",tense="present simple",tenseLabel="présent simple")=>({infinitive,fr,forms,note,tense,tenseLabel});
const M=(prompt,choices,answer,explanation,skill="grammar")=>({type:"mcq",prompt,choices,answer,explanation,skill});
const T=(prompt,expected,model,explanation,skill="production")=>({type:"text",prompt,expected:Array.isArray(expected)?expected:[expected],model,explanation,skill});
const Q=(prompt,model,explanation="",skill="production",expected=null)=>({prompt,model,explanation,skill,expected:expected||[model]});

window.EN_FOUNDATION={
  id:"foundation",
  label:"Fondations",
  cefr:"Pré-A1",
  description:"Le socle : sons utiles, be, articles, have, présent simple et premières questions.",
  units:[
    {
      id:"en-f1",title:"Hello!",goal:"Saluer, prendre congé et reconnaître les sons et contractions les plus fréquents.",
      scene:{title:"First contact",lines:[
        {speaker:"Emma",t:"Hello! Good morning.",fr:"Bonjour !"},
        {speaker:"Alex",t:"Good morning! How are you?",fr:"Bonjour ! Comment allez-vous ?"},
        {speaker:"Emma",t:"I'm fine, thanks. And you?",fr:"Je vais bien, merci. Et vous ?"},
        {speaker:"Alex",t:"Very well, thanks. See you later!",fr:"Très bien, merci. À plus tard !"}
      ]},
      grammar:[
        G("Contractions essentielles","L’anglais parlé utilise constamment les contractions. I am devient I'm, you are devient you're. Elles doivent être reconnues dès le début.",[["I'm fine.","Je vais bien."],["You're here.","Tu es ici."]]),
        G("Prononciation utile","th n’a pas d’équivalent exact en français ; h est souvent expiré ; les voyelles anglaises changent selon le mot. L’objectif initial est de distinguer, puis d’imiter.",[["thanks","merci"],["hello","bonjour"]])
      ],
      vocab:[
        V("hello","bonjour / salut"),V("good morning","bonjour (matin)"),V("good evening","bonsoir"),V("goodbye","au revoir"),V("thanks","merci"),
        V("please","s'il vous plaît"),V("fine","bien"),V("very well","très bien"),V("later","plus tard"),V("welcome","bienvenue")
      ],
      phrases:[
        P("Hello!","Bonjour !"),P("Good morning!","Bonjour !"),P("How are you?","Comment allez-vous ?"),P("I'm fine, thanks.","Je vais bien, merci."),
        P("And you?","Et vous ?"),P("See you later!","À plus tard !")
      ],
      drills:[
        M("Quelle contraction correspond à « I am » ?",["I'm","I've","I'll"],"I'm","I am → I'm.","grammar"),
        M("La salutation du matin est :",["Good morning","Good evening","Good night"],"Good morning","Good morning = bonjour le matin.","vocab"),
        M("Pour remercier simplement :",["Thanks","Please","Welcome"],"Thanks","Thanks = merci.","vocab")
      ],
      encounter:{prompts:[
        Q("Salue quelqu’un le matin.","Good morning!"),
        Q("Demande : « Comment allez-vous ? »","How are you?"),
        Q("Réponds : « Je vais bien, merci. »","I'm fine, thanks."),
        Q("Dis : « À plus tard ! »","See you later!")
      ]}
    },
    {
      id:"en-f2",title:"I, you, he, she + be",goal:"Construire les premières phrases avec les pronoms sujets et le verbe be.",
      scene:{title:"Who are you?",lines:[
        {speaker:"Sam",t:"I'm Sam. I'm British.",fr:"Je suis Sam. Je suis britannique."},
        {speaker:"Lina",t:"I'm Lina. I'm French.",fr:"Je suis Lina. Je suis française."},
        {speaker:"Sam",t:"Are you from Paris?",fr:"Tu viens de Paris ?"},
        {speaker:"Lina",t:"Yes, I am. He is my friend Tom.",fr:"Oui. Lui, c’est mon ami Tom."}
      ]},
      grammar:[
        G("Pronoms sujets","I, you, he, she, it, we, they sont normalement exprimés en anglais. Contrairement à l’italien ou à l’espagnol, on ne les omet pas.",[["I am ready.","Je suis prêt."],["She is here.","Elle est ici."]]),
        G("be au présent","Les trois formes sont am, is et are. En pratique, apprends aussi I'm, he's/she's/it's, we're, you're, they're.",[["You are French.","Tu es français(e)."],["They are here.","Ils sont ici."]])
      ],
      verbs:[
        VB("be","être",{"I":"am","you":"are","he/she/it":"is","we":"are","you (plural)":"are","they":"are"},"Verbe fondamental et très irrégulier.")
      ],
      vocab:[
        V("I","je"),V("you","tu / vous"),V("he","il"),V("she","elle"),V("it","il/elle pour une chose"),V("we","nous"),V("they","ils / elles"),
        V("British","britannique"),V("French","français(e)"),V("ready","prêt(e)")
      ],
      phrases:[
        P("I'm French.","Je suis français(e)."),P("You're here.","Tu es ici."),P("He is my friend.","Il est mon ami."),P("She is British.","Elle est britannique."),
        P("We are ready.","Nous sommes prêts."),P("They are here.","Ils sont ici.")
      ],
      drills:[
        M("Complète : I ___ ready.",["am","is","are"],"am","I → am.","conjugation"),
        M("Complète : She ___ French.",["am","is","are"],"is","he/she/it → is.","conjugation"),
        M("Complète : We ___ here.",["am","is","are"],"are","we → are.","conjugation")
      ],
      encounter:{prompts:[
        Q("Dis : « Je suis français. »","I'm French.",["I am French."]),
        Q("Dis : « Elle est ici. »","She is here."),
        Q("Dis : « Nous sommes prêts. »","We are ready."),
        Q("Demande : « Tu es français ? »","Are you French?")
      ]}
    },
    {
      id:"en-f3",title:"a, an, the",goal:"Comprendre les articles de base, le singulier/pluriel et compter des objets simples.",
      scene:{title:"On the desk",lines:[
        {speaker:"Teacher",t:"This is a book and this is a pen.",fr:"Ceci est un livre et ceci est un stylo."},
        {speaker:"Student",t:"Is that an apple?",fr:"Est-ce une pomme ?"},
        {speaker:"Teacher",t:"Yes. The apple is on the table.",fr:"Oui. La pomme est sur la table."},
        {speaker:"Student",t:"And these are two books.",fr:"Et voici deux livres."}
      ]},
      grammar:[
        G("a / an","a et an signifient « un/une ». On choisit an devant un son vocalique : an apple, an hour ; a devant un son consonantique : a book, a university.",[["a book","un livre"],["an apple","une pomme"]]),
        G("the et le pluriel","the désigne quelque chose identifié. Le pluriel régulier ajoute généralement -s ou -es.",[["the book","le livre identifié"],["two books","deux livres"]])
      ],
      vocab:[
        V("a book","un livre","a","book"),V("a pen","un stylo","a","pen"),V("an apple","une pomme","an","apple"),V("a table","une table","a","table"),V("a chair","une chaise","a","chair"),
        V("a phone","un téléphone","a","phone"),V("an umbrella","un parapluie","an","umbrella"),V("a bag","un sac","a","bag"),V("a key","une clé","a","key"),V("a computer","un ordinateur","a","computer")
      ],
      phrases:[
        P("This is a book.","Ceci est un livre."),P("That is an apple.","Cela est une pomme."),P("The book is here.","Le livre est ici."),P("These are two books.","Voici deux livres."),
        P("I have a pen.","J’ai un stylo."),P("The keys are on the table.","Les clés sont sur la table.")
      ],
      drills:[
        M("Choisis : ___ apple",["a","an","the"],"an","apple commence par un son vocalique.","articles"),
        M("Choisis : ___ book (un livre)",["a","an","the"],"a","book commence par un son consonantique.","articles"),
        M("Pluriel régulier de book :",["books","bookes","book's"],"books","On ajoute -s.","grammar")
      ],
      encounter:{prompts:[
        Q("Dis : « C’est un livre. »","This is a book."),
        Q("Dis : « C’est une pomme. »","This is an apple."),
        Q("Dis : « Le livre est ici. »","The book is here."),
        Q("Dis : « J’ai deux clés. »","I have two keys.")
      ]}
    },
    {
      id:"en-f4",title:"have, age and numbers",goal:"Utiliser have/has, donner son âge et manipuler les nombres utiles.",
      scene:{title:"Personal information",lines:[
        {speaker:"Maya",t:"How old are you?",fr:"Quel âge as-tu ?"},
        {speaker:"Leo",t:"I'm thirty-two.",fr:"J’ai trente-deux ans."},
        {speaker:"Maya",t:"Do you have a phone number here?",fr:"As-tu un numéro de téléphone ici ?"},
        {speaker:"Leo",t:"Yes, I have a new number.",fr:"Oui, j’ai un nouveau numéro."}
      ]},
      grammar:[
        G("have / has","I/you/we/they have ; he/she/it has. Pour la possession, have est l’outil de base.",[["I have a car.","J’ai une voiture."],["She has a phone.","Elle a un téléphone."]]),
        G("L’âge en anglais","On utilise be, pas have : I'm thirty, littéralement « je suis trente ». How old are you? demande l’âge.",[["I'm twenty-eight.","J’ai vingt-huit ans."],["How old is she?","Quel âge a-t-elle ?"]])
      ],
      verbs:[
        VB("have","avoir",{"I":"have","you":"have","he/she/it":"has","we":"have","you (plural)":"have","they":"have"},"he/she/it → has.")
      ],
      vocab:[
        V("zero","zéro"),V("one","un"),V("two","deux"),V("three","trois"),V("ten","dix"),V("twenty","vingt"),V("thirty","trente"),V("a number","un numéro","a","number"),V("an age","un âge","an","age"),V("a year","une année","a","year")
      ],
      phrases:[
        P("I'm thirty years old.","J’ai trente ans."),P("How old are you?","Quel âge as-tu ?"),P("I have a new number.","J’ai un nouveau numéro."),P("She has a car.","Elle a une voiture."),
        P("We have time.","Nous avons le temps."),P("They have two children.","Ils ont deux enfants.")
      ],
      drills:[
        M("Complète : She ___ a phone.",["have","has","is"],"has","he/she/it → has.","conjugation"),
        M("Pour dire « J’ai 30 ans » :",["I'm thirty.","I have thirty.","I am thirty years."],"I'm thirty.","L’âge utilise be.","grammar"),
        M("20 se dit :",["twenty","thirty","twelve"],"twenty","twenty = vingt.","vocab")
      ],
      encounter:{prompts:[
        Q("Dis : « J’ai 28 ans. »","I'm twenty-eight."),
        Q("Demande l’âge de ton interlocuteur.","How old are you?"),
        Q("Dis : « Elle a un téléphone. »","She has a phone."),
        Q("Dis : « Nous avons le temps. »","We have time.")
      ]}
    },
    {
      id:"en-f5",title:"Present simple",goal:"Comprendre le présent simple, la terminaison -s et les questions avec do/does.",
      scene:{title:"A normal day",lines:[
        {speaker:"Ben",t:"I work in London and I speak English and French.",fr:"Je travaille à Londres et je parle anglais et français."},
        {speaker:"Nora",t:"Do you work here every day?",fr:"Tu travailles ici tous les jours ?"},
        {speaker:"Ben",t:"Yes, I do. My sister works here too.",fr:"Oui. Ma sœur travaille ici aussi."},
        {speaker:"Nora",t:"Does she speak French?",fr:"Parle-t-elle français ?"}
      ]},
      grammar:[
        G("Présent simple","I/you/we/they utilisent la base verbale. he/she/it ajoutent généralement -s ou -es.",[["I work.","Je travaille."],["She works.","Elle travaille."]]),
        G("Questions avec do / does","Pour un verbe ordinaire : Do you work? Does she work? Après does, le verbe revient à la base sans -s.",[["Do they live here?","Habitent-ils ici ?"],["Does he speak English?","Parle-t-il anglais ?"]])
      ],
      verbs:[
        VB("work","travailler",{"I":"work","you":"work","he/she/it":"works","we":"work","you (plural)":"work","they":"work"}),
        VB("speak","parler",{"I":"speak","you":"speak","he/she/it":"speaks","we":"speak","you (plural)":"speak","they":"speak"})
      ],
      vocab:[
        V("work","travailler"),V("live","habiter / vivre"),V("speak","parler"),V("study","étudier"),V("eat","manger"),V("drink","boire"),V("read","lire"),V("every day","tous les jours"),V("often","souvent"),V("usually","d'habitude")
      ],
      phrases:[
        P("I work in Geneva.","Je travaille à Genève."),P("She works here.","Elle travaille ici."),P("Do you speak English?","Parles-tu anglais ?"),P("Does he live here?","Habite-t-il ici ?"),
        P("We study every day.","Nous étudions tous les jours."),P("They often read.","Ils lisent souvent.")
      ],
      drills:[
        M("Complète : She work__ here.",["s","","ing"],"s","he/she/it prend généralement -s.","conjugation"),
        M("Quelle question est correcte ?",["Does she work here?","Does she works here?","Do she work here?"],"Does she work here?","Après does : base verbale.","grammar"),
        M("Complète : ___ you speak English?",["Do","Does","Are"],"Do","Avec you + verbe ordinaire : do.","grammar")
      ],
      encounter:{prompts:[
        Q("Dis : « Je travaille à Genève. »","I work in Geneva."),
        Q("Demande : « Parles-tu anglais ? »","Do you speak English?"),
        Q("Dis : « Elle travaille ici. »","She works here."),
        Q("Demande : « Habite-t-il ici ? »","Does he live here?")
      ]}
    },
    {
      id:"en-f6",title:"Questions, negatives and possessives",goal:"Former la négation, les questions courtes et utiliser les adjectifs possessifs de base.",
      scene:{title:"At work",lines:[
        {speaker:"Anna",t:"Do you work on Fridays?",fr:"Tu travailles le vendredi ?"},
        {speaker:"Chris",t:"No, I don't. I don't work on Fridays.",fr:"Non. Je ne travaille pas le vendredi."},
        {speaker:"Anna",t:"Is this your laptop?",fr:"C’est ton ordinateur ?"},
        {speaker:"Chris",t:"No, it's her laptop. Mine is at home.",fr:"Non, c’est son ordinateur à elle. Le mien est à la maison."}
      ]},
      grammar:[
        G("don't / doesn't","La négation du présent simple utilise do not / does not : don't / doesn't. Le verbe principal reste à la base.",[["I don't work today.","Je ne travaille pas aujourd’hui."],["She doesn't live here.","Elle n’habite pas ici."]]),
        G("my, your, his, her, our, their","L’adjectif possessif ne s’accorde pas avec la chose possédée. his = à lui, her = à elle.",[["my phone","mon téléphone"],["her car","sa voiture à elle"]])
      ],
      vocab:[
        V("my","mon / ma / mes"),V("your","ton / ta / tes / votre"),V("his","son / sa / ses à lui"),V("her","son / sa / ses à elle"),V("our","notre / nos"),V("their","leur / leurs"),
        V("today","aujourd'hui"),V("tomorrow","demain"),V("at home","à la maison"),V("at work","au travail")
      ],
      phrases:[
        P("I don't work today.","Je ne travaille pas aujourd’hui."),P("She doesn't live here.","Elle n’habite pas ici."),P("Is this your phone?","C’est ton téléphone ?"),P("This is my bag.","C’est mon sac."),
        P("His car is new.","Sa voiture à lui est neuve."),P("Their house is here.","Leur maison est ici.")
      ],
      drills:[
        M("Complète : I ___ work today.",["don't","doesn't","am not"],"don't","I + verbe ordinaire → don't.","grammar"),
        M("Complète : She ___ live here.",["don't","doesn't","isn't"],"doesn't","he/she/it → doesn't + base verbale.","grammar"),
        M("« sa voiture à elle » :",["her car","his car","their car"],"her car","her = possesseur féminin.","grammar")
      ],
      encounter:{prompts:[
        Q("Dis : « Je ne travaille pas aujourd’hui. »","I don't work today."),
        Q("Dis : « Elle n’habite pas ici. »","She doesn't live here."),
        Q("Demande : « C’est ton téléphone ? »","Is this your phone?"),
        Q("Dis : « C’est mon sac. »","This is my bag.")
      ]}
    }
  ]
};
})();