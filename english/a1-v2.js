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

window.EN_A1={
  id:"a1",
  label:"A1 essentiel",
  cefr:"A1",
  description:"Construire une autonomie concrète dans les situations quotidiennes, avec une grammaire comprise et réutilisée.",
  units:[
    {
      id:"en-a1-1",title:"Introduce yourself",goal:"Se présenter, parler de son origine, de son travail et poser les mêmes questions.",
      scene:{title:"Meeting a new colleague",lines:[
        {speaker:"Sarah",t:"Hi, I'm Sarah. What's your name?",fr:"Salut, je suis Sarah. Comment t’appelles-tu ?"},
        {speaker:"Paul",t:"I'm Paul. I'm from Lyon, but I live in Lausanne.",fr:"Je suis Paul. Je viens de Lyon, mais j’habite à Lausanne."},
        {speaker:"Sarah",t:"What do you do?",fr:"Que fais-tu comme métier ?"},
        {speaker:"Paul",t:"I'm a doctor. I work at a hospital.",fr:"Je suis médecin. Je travaille dans un hôpital."}
      ]},
      grammar:[
        G("be pour l’identité","On utilise be avec le nom, la nationalité, la profession et souvent l’état : I'm Paul, I'm French, I'm a doctor.",[["I'm a teacher.","Je suis professeur."],["She's Swiss.","Elle est suisse."]]),
        G("Questions en wh-","Avec be : Where are you from? Avec un verbe ordinaire : Where do you live? / What do you do?",[["Where are you from?","Tu viens d’où ?"],["Where do you work?","Où travailles-tu ?"]])
      ],
      verbs:[
        VB("live","habiter",{"I":"live","you":"live","he/she/it":"lives","we":"live","you (plural)":"live","they":"live"}),
        VB("work","travailler",{"I":"work","you":"work","he/she/it":"works","we":"work","you (plural)":"work","they":"work"})
      ],
      vocab:[
        V("a name","un nom","a","name"),V("a job","un travail / métier","a","job"),V("a doctor","un médecin","a","doctor"),V("a teacher","un professeur","a","teacher"),V("a hospital","un hôpital","a","hospital"),
        V("a city","une ville","a","city"),V("a country","un pays","a","country"),V("from","de / originaire de"),V("live","habiter"),V("work","travailler")
      ],
      phrases:[
        P("What's your name?","Comment t’appelles-tu ?"),P("I'm from France.","Je viens de France."),P("Where do you live?","Où habites-tu ?"),P("I live in Geneva.","J’habite à Genève."),
        P("What do you do?","Que fais-tu comme métier ?"),P("I work at a hospital.","Je travaille dans un hôpital.")
      ],
      drills:[
        M("Pour demander le lieu de vie :",["Where do you live?","Where are you live?","Where you live?"],"Where do you live?","Verbe ordinaire → auxiliaire do.","grammar"),
        M("Pour dire sa profession :",["I'm a doctor.","I have doctor.","I do doctor."],"I'm a doctor.","Profession → be + a/an + métier.","grammar"),
        T("Traduis : « Je viens de France. »",["I'm from France.","I am from France."],"I'm from France.","be from = être originaire de.")
      ],
      encounter:{prompts:[
        Q("Présente ton nom.","I'm Paul."),Q("Dis d’où tu viens.","I'm from France."),Q("Dis où tu habites.","I live in Geneva."),Q("Demande : « Que fais-tu comme métier ? »","What do you do?")
      ]}
    },
    {
      id:"en-a1-2",title:"Family and people",goal:"Présenter sa famille, utiliser les possessifs et décrire simplement une personne.",
      scene:{title:"A family photo",lines:[
        {speaker:"Lucy",t:"Is this your family?",fr:"C’est ta famille ?"},
        {speaker:"Mark",t:"Yes. This is my sister and this is my brother.",fr:"Oui. Voici ma sœur et mon frère."},
        {speaker:"Lucy",t:"How old is your sister?",fr:"Quel âge a ta sœur ?"},
        {speaker:"Mark",t:"She's twenty-six. She's very friendly.",fr:"Elle a vingt-six ans. Elle est très sympathique."}
      ]},
      grammar:[
        G("Possessifs","my, your, his, her, our, their ne changent jamais selon le nom possédé.",[["my sister","ma sœur"],["his parents","ses parents à lui"]]),
        G("Adjectifs","En anglais, l’adjectif est normalement invariable et placé avant le nom ou après be.",[["a friendly person","une personne sympathique"],["She is friendly.","Elle est sympathique."]])
      ],
      vocab:[
        V("a family","une famille","a","family"),V("a mother","une mère","a","mother"),V("a father","un père","a","father"),V("a sister","une sœur","a","sister"),V("a brother","un frère","a","brother"),
        V("parents","les parents"),V("a child","un enfant","a","child"),V("friendly","sympathique"),V("young","jeune"),V("old","âgé / vieux")
      ],
      phrases:[
        P("This is my sister.","Voici ma sœur."),P("His brother lives in London.","Son frère à lui habite à Londres."),P("Her parents are French.","Ses parents à elle sont français."),
        P("How old is your brother?","Quel âge a ton frère ?"),P("She is very friendly.","Elle est très sympathique."),P("They have two children.","Ils ont deux enfants.")
      ],
      drills:[
        M("« sa sœur à lui » :",["his sister","her sister","their sister"],"his sister","his = possesseur masculin.","grammar"),
        M("Quelle phrase est correcte ?",["a friendly woman","a woman friendly","a friendly womans"],"a friendly woman","L’adjectif précède le nom et reste invariable.","wordorder"),
        M("Complète : ___ parents are here.",["Their","They","Them"],"Their","Avant un nom : adjectif possessif their.","grammar")
      ],
      encounter:{prompts:[
        Q("Présente ta sœur.","This is my sister."),Q("Dis : « Mes parents habitent à Paris. »","My parents live in Paris."),Q("Dis : « Elle est très sympathique. »","She is very friendly."),Q("Demande l’âge de son frère.","How old is your brother?")
      ]}
    },
    {
      id:"en-a1-3",title:"Daily routine and time",goal:"Décrire une journée, dire l’heure et placer les adverbes de fréquence.",
      scene:{title:"A normal morning",lines:[
        {speaker:"Mia",t:"I get up at seven o'clock.",fr:"Je me lève à sept heures."},
        {speaker:"Jack",t:"I usually have breakfast at half past seven.",fr:"Je prends généralement le petit-déjeuner à sept heures et demie."},
        {speaker:"Mia",t:"What time do you start work?",fr:"À quelle heure commences-tu le travail ?"},
        {speaker:"Jack",t:"I start at nine and finish at five.",fr:"Je commence à neuf heures et je termine à dix-sept heures."}
      ]},
      grammar:[
        G("Heure","at + heure situe une action. quarter past, half past et quarter to sont très fréquents.",[["at seven o'clock","à sept heures"],["half past seven","sept heures et demie"]]),
        G("Adverbes de fréquence","always, usually, often, sometimes, never se placent généralement avant le verbe ordinaire mais après be.",[["I usually work at home.","Je travaille généralement à la maison."],["I'm often tired.","Je suis souvent fatigué."]])
      ],
      vocab:[
        V("get up","se lever"),V("have breakfast","prendre le petit-déjeuner"),V("start","commencer"),V("finish","finir"),V("go to work","aller au travail"),V("go home","rentrer"),
        V("always","toujours"),V("usually","d'habitude"),V("sometimes","parfois"),V("never","jamais")
      ],
      phrases:[
        P("I get up at seven.","Je me lève à sept heures."),P("I usually have breakfast at half past seven.","Je prends généralement le petit-déjeuner à sept heures et demie."),P("What time do you start work?","À quelle heure commences-tu ?"),
        P("I finish at five.","Je finis à cinq heures."),P("I never work on Sundays.","Je ne travaille jamais le dimanche."),P("I'm often tired in the evening.","Je suis souvent fatigué le soir.")
      ],
      drills:[
        M("Où place-t-on usually dans « I ___ work at home » ?",["usually","am usually","do usually"],"usually","Avant le verbe ordinaire.","grammar"),
        M("7 h 30 se dit :",["half past seven","half to seven","seven half"],"half past seven","half past + heure.","vocab"),
        M("Quelle phrase est correcte ?",["I never work on Sundays.","I work never on Sundays.","Never I work on Sundays."],"I never work on Sundays.","never se place avant le verbe ordinaire.","wordorder")
      ],
      encounter:{prompts:[
        Q("Dis à quelle heure tu te lèves.","I get up at seven."),Q("Demande : « À quelle heure commences-tu ? »","What time do you start?"),Q("Dis : « Je finis à cinq heures. »","I finish at five."),Q("Dis : « Je ne travaille jamais le dimanche. »","I never work on Sundays.")
      ]}
    },
    {
      id:"en-a1-4",title:"Food and ordering",goal:"Commander poliment, utiliser some/any et distinguer noms comptables et non comptables de base.",
      scene:{title:"At a café",lines:[
        {speaker:"Server",t:"Hello. What would you like?",fr:"Bonjour. Que souhaitez-vous ?"},
        {speaker:"Customer",t:"I'd like a coffee and some water, please.",fr:"Je voudrais un café et de l’eau, s’il vous plaît."},
        {speaker:"Server",t:"Would you like anything to eat?",fr:"Souhaitez-vous manger quelque chose ?"},
        {speaker:"Customer",t:"Yes, I'd like a sandwich. Can I have the bill, please?",fr:"Oui, je voudrais un sandwich. Puis-je avoir l’addition ?"}
      ]},
      grammar:[
        G("I'd like","I'd like = I would like. C’est une formule standard et polie pour commander.",[["I'd like a tea, please.","Je voudrais un thé."],["I'd like to pay.","Je voudrais payer."]]),
        G("some / any","some apparaît souvent dans les affirmations et offres ; any dans beaucoup de questions et négations.",[["some water","de l’eau"],["Do you have any milk?","Avez-vous du lait ?"]])
      ],
      vocab:[
        V("a coffee","un café","a","coffee"),V("a tea","un thé","a","tea"),V("water","de l'eau"),V("milk","du lait"),V("a sandwich","un sandwich","a","sandwich"),
        V("a salad","une salade","a","salad"),V("the bill","l'addition"),V("hungry","avoir faim"),V("thirsty","avoir soif"),V("pay","payer")
      ],
      phrases:[
        P("I'd like a coffee, please.","Je voudrais un café, s’il vous plaît."),P("Can I have some water?","Puis-je avoir de l’eau ?"),P("Do you have any milk?","Avez-vous du lait ?"),
        P("I'm hungry.","J’ai faim."),P("Can I have the bill, please?","Puis-je avoir l’addition ?"),P("Can I pay by card?","Puis-je payer par carte ?")
      ],
      drills:[
        M("La formule la plus polie pour commander :",["I'd like a coffee, please.","I want coffee.","Give me coffee."],"I'd like a coffee, please.","I'd like est une demande polie standard.","grammar"),
        M("Complète : Can I have ___ water?",["some","a","an"],"some","water est non comptable dans ce sens.","grammar"),
        M("Complète : Do you have ___ milk?",["any","a","many"],"any","Question générale → any.","grammar")
      ],
      encounter:{prompts:[
        Q("Commande un café poliment.","I'd like a coffee, please."),Q("Demande de l’eau.","Can I have some water?"),Q("Demande l’addition.","Can I have the bill, please?"),Q("Demande si tu peux payer par carte.","Can I pay by card?")
      ]}
    },
    {
      id:"en-a1-5",title:"There is, there are",goal:"Décrire un lieu, utiliser there is/are et les prépositions de position courantes.",
      scene:{title:"A new neighbourhood",lines:[
        {speaker:"Kate",t:"Is there a supermarket near here?",fr:"Y a-t-il un supermarché près d’ici ?"},
        {speaker:"Tom",t:"Yes, there is. It's next to the bank.",fr:"Oui. Il est à côté de la banque."},
        {speaker:"Kate",t:"Are there any restaurants nearby?",fr:"Y a-t-il des restaurants à proximité ?"},
        {speaker:"Tom",t:"Yes, there are two restaurants opposite the station.",fr:"Oui, il y a deux restaurants en face de la gare."}
      ]},
      grammar:[
        G("there is / there are","there is présente un élément singulier ; there are plusieurs éléments.",[["There is a bank.","Il y a une banque."],["There are two shops.","Il y a deux magasins."]]),
        G("Prépositions de lieu","next to, opposite, between, behind, in front of permettent de localiser précisément.",[["next to the bank","à côté de la banque"],["opposite the station","en face de la gare"]])
      ],
      vocab:[
        V("a station","une gare","a","station"),V("a bank","une banque","a","bank"),V("a supermarket","un supermarché","a","supermarket"),V("a restaurant","un restaurant","a","restaurant"),V("a pharmacy","une pharmacie","a","pharmacy"),
        V("next to","à côté de"),V("opposite","en face de"),V("between","entre"),V("behind","derrière"),V("near","près de")
      ],
      phrases:[
        P("There is a bank near here.","Il y a une banque près d’ici."),P("There are two restaurants.","Il y a deux restaurants."),P("Is there a supermarket?","Y a-t-il un supermarché ?"),
        P("Are there any cafés nearby?","Y a-t-il des cafés à proximité ?"),P("It's next to the station.","C’est à côté de la gare."),P("The bank is opposite the pharmacy.","La banque est en face de la pharmacie.")
      ],
      drills:[
        M("Complète : ___ a bank near here.",["There is","There are","It is"],"There is","Singulier → there is.","grammar"),
        M("Complète : ___ two shops.",["There are","There is","They are"],"There are","Pluriel → there are.","grammar"),
        M("« en face de » :",["opposite","behind","between"],"opposite","opposite = en face de.","vocab")
      ],
      encounter:{prompts:[
        Q("Demande s’il y a un supermarché.","Is there a supermarket?"),Q("Dis : « Il y a deux restaurants. »","There are two restaurants."),Q("Dis : « C’est à côté de la gare. »","It's next to the station."),Q("Demande s’il y a des cafés à proximité.","Are there any cafés nearby?")
      ]}
    },
    {
      id:"en-a1-6",title:"Likes and free time",goal:"Exprimer goûts et préférences avec like/love/hate + nom ou -ing.",
      scene:{title:"Free time",lines:[
        {speaker:"Amy",t:"What do you like doing in your free time?",fr:"Qu’aimes-tu faire pendant ton temps libre ?"},
        {speaker:"David",t:"I like reading and I love travelling.",fr:"J’aime lire et j’adore voyager."},
        {speaker:"Amy",t:"Do you like sport?",fr:"Aimes-tu le sport ?"},
        {speaker:"David",t:"Yes, I do, but I don't like running.",fr:"Oui, mais je n’aime pas courir."}
      ]},
      grammar:[
        G("like + -ing","Pour parler d’une activité appréciée en général, like/love/hate + verbe en -ing est très naturel.",[["I like reading.","J’aime lire."],["She loves cooking.","Elle adore cuisiner."]]),
        G("Réponses courtes","Do you like...? → Yes, I do / No, I don't. Does she like...? → Yes, she does / No, she doesn't.",[["Yes, I do.","Oui."],["No, she doesn't.","Non."]])
      ],
      verbs:[
        VB("like","aimer",{"I":"like","you":"like","he/she/it":"likes","we":"like","you (plural)":"like","they":"like"})
      ],
      vocab:[
        V("reading","lecture / lire"),V("travelling","voyage / voyager"),V("cooking","cuisine / cuisiner"),V("running","course / courir"),V("swimming","natation / nager"),
        V("music","musique"),V("sport","sport"),V("a film","un film","a","film"),V("free time","temps libre"),V("a hobby","un loisir","a","hobby")
      ],
      phrases:[
        P("I like reading.","J’aime lire."),P("I love travelling.","J’adore voyager."),P("I don't like running.","Je n’aime pas courir."),P("Do you like sport?","Aimes-tu le sport ?"),
        P("She likes cooking.","Elle aime cuisiner."),P("What do you like doing?","Qu’aimes-tu faire ?")
      ],
      drills:[
        M("Après like pour une activité générale :",["reading","read","to reading"],"reading","like + -ing est très naturel pour une activité.","grammar"),
        M("Complète : She ___ cooking.",["likes","like","does like"],"likes","he/she/it → likes.","conjugation"),
        M("Réponse courte à « Do you like music? » :",["Yes, I do.","Yes, I like.","Yes, I am."],"Yes, I do.","L’auxiliaire do est repris.","grammar")
      ],
      encounter:{prompts:[
        Q("Dis une activité que tu aimes.","I like reading."),Q("Dis une activité que tu n’aimes pas.","I don't like running."),Q("Demande : « Aimes-tu le sport ? »","Do you like sport?"),Q("Demande : « Qu’aimes-tu faire ? »","What do you like doing?")
      ]}
    },
    {
      id:"en-a1-7",title:"Can, must and plans",goal:"Exprimer capacité, permission, obligation et projet proche avec can, must et going to.",
      scene:{title:"Weekend plans",lines:[
        {speaker:"Ella",t:"Can you come on Saturday?",fr:"Peux-tu venir samedi ?"},
        {speaker:"Ryan",t:"I can, but I must work until six.",fr:"Oui, mais je dois travailler jusqu’à six heures."},
        {speaker:"Ella",t:"We're going to meet at eight.",fr:"Nous allons nous retrouver à huit heures."},
        {speaker:"Ryan",t:"Great. I can come after work.",fr:"Parfait. Je peux venir après le travail."}
      ]},
      grammar:[
        G("can / must + base verbale","Après can et must, le verbe reste à la base sans to : can come, must work.",[["I can drive.","Je sais conduire."],["You must leave.","Tu dois partir."]]),
        G("be going to","be + going to + base verbale exprime un projet ou une intention déjà envisagée.",[["I'm going to travel.","Je vais voyager."],["We're going to meet at eight.","Nous allons nous retrouver à huit heures."]])
      ],
      verbs:[
        VB("can","pouvoir / savoir",{"I":"can","you":"can","he/she/it":"can","we":"can","you (plural)":"can","they":"can"},"Modal invariable ; pas de -s à he/she/it."),
        VB("be going to","aller + infinitif",{"I":"am going to","you":"are going to","he/she/it":"is going to","we":"are going to","you (plural)":"are going to","they":"are going to"},"Projet ou intention.")
      ],
      vocab:[
        V("can","pouvoir"),V("must","devoir"),V("come","venir"),V("leave","partir"),V("meet","se retrouver"),V("drive","conduire"),V("travel","voyager"),V("Saturday","samedi"),V("tonight","ce soir"),V("next week","la semaine prochaine")
      ],
      phrases:[
        P("I can come tonight.","Je peux venir ce soir."),P("I can't drive.","Je ne sais pas conduire."),P("I must work today.","Je dois travailler aujourd’hui."),P("Can you come on Saturday?","Peux-tu venir samedi ?"),
        P("I'm going to travel next week.","Je vais voyager la semaine prochaine."),P("We're going to meet at eight.","Nous allons nous retrouver à huit heures.")
      ],
      drills:[
        M("Après can :",["base verbale","to + verbe","verbe en -ing"],"base verbale","can come, can speak.","grammar"),
        M("Quelle phrase est correcte ?",["She can drive.","She cans drive.","She can drives."],"She can drive.","can est invariable et le verbe reste à la base.","grammar"),
        M("Projet futur :",["I'm going to travel.","I going travel.","I am go to travel."],"I'm going to travel.","be + going to + base verbale.","tenses")
      ],
      encounter:{prompts:[
        Q("Dis : « Je peux venir ce soir. »","I can come tonight."),Q("Dis : « Je dois travailler aujourd’hui. »","I must work today."),Q("Demande : « Peux-tu venir samedi ? »","Can you come on Saturday?"),Q("Dis ton projet : « Je vais voyager la semaine prochaine. »","I'm going to travel next week.")
      ]}
    },
    {
      id:"en-a1-8",title:"Present continuous",goal:"Parler de ce qui se passe maintenant et distinguer présent simple et présent continu.",
      scene:{title:"What are you doing?",lines:[
        {speaker:"Olivia",t:"Hi! What are you doing?",fr:"Salut ! Qu’est-ce que tu fais ?"},
        {speaker:"Noah",t:"I'm cooking dinner. My sister is watching TV.",fr:"Je prépare le dîner. Ma sœur regarde la télévision."},
        {speaker:"Olivia",t:"Do you cook every day?",fr:"Tu cuisines tous les jours ?"},
        {speaker:"Noah",t:"No. I usually eat out, but tonight I'm cooking.",fr:"Non. D’habitude je mange dehors, mais ce soir je cuisine."}
      ]},
      grammar:[
        G("be + -ing","Le present continuous décrit principalement une action en cours : am/is/are + verbe-ing.",[["I'm working now.","Je travaille en ce moment."],["They're eating.","Ils mangent."]]),
        G("Simple ou continuous","Le présent simple décrit habitudes/faits ; le continuous décrit ce qui se déroule autour de maintenant.",[["I work every day.","Je travaille tous les jours."],["I'm working now.","Je travaille maintenant."]])
      ],
      verbs:[
        VB("work","travailler",{"I":"am working","you":"are working","he/she/it":"is working","we":"are working","you (plural)":"are working","they":"are working"},"Present continuous.","present continuous","présent continu")
      ],
      vocab:[
        V("now","maintenant"),V("at the moment","en ce moment"),V("cooking","en train de cuisiner"),V("working","en train de travailler"),V("watching","en train de regarder"),V("eating","en train de manger"),
        V("talking","en train de parler"),V("waiting","en train d'attendre"),V("dinner","dîner"),V("TV","télévision")
      ],
      phrases:[
        P("What are you doing?","Qu’est-ce que tu fais ?"),P("I'm cooking dinner.","Je prépare le dîner."),P("She's watching TV.","Elle regarde la télévision."),P("We're waiting for the bus.","Nous attendons le bus."),
        P("I work every day.","Je travaille tous les jours."),P("I'm working now.","Je travaille maintenant.")
      ],
      drills:[
        M("Action en cours maintenant :",["I'm working.","I work every day.","I am work."],"I'm working.","be + -ing.","tenses"),
        M("Habitude :",["I work every day.","I'm working every day now.","I am work every day."],"I work every day.","Habitude → present simple.","tenses"),
        M("Complète : She ___ TV now.",["is watching","watches","watching"],"is watching","Action en cours : is + watching.","tenses")
      ],
      encounter:{prompts:[
        Q("Demande : « Qu’est-ce que tu fais ? »","What are you doing?"),Q("Dis : « Je travaille maintenant. »","I'm working now."),Q("Dis : « Elle regarde la télévision. »","She's watching TV."),Q("Oppose habitude et maintenant : « Je travaille tous les jours, mais aujourd’hui je me repose. »","I work every day, but today I'm resting.")
      ]}
    },
    {
      id:"en-a1-9",title:"Past simple",goal:"Raconter hier avec le prétérit régulier et plusieurs verbes irréguliers essentiels.",
      scene:{title:"Yesterday",lines:[
        {speaker:"Grace",t:"What did you do yesterday?",fr:"Qu’as-tu fait hier ?"},
        {speaker:"Leo",t:"I worked in the morning and went to a restaurant in the evening.",fr:"J’ai travaillé le matin et je suis allé au restaurant le soir."},
        {speaker:"Grace",t:"Did you see Emma?",fr:"As-tu vu Emma ?"},
        {speaker:"Leo",t:"Yes, I saw her after dinner.",fr:"Oui, je l’ai vue après le dîner."}
      ]},
      grammar:[
        G("Past simple","Les verbes réguliers ajoutent -ed ; les irréguliers ont une forme propre : go → went, see → saw, have → had.",[["I worked.","J’ai travaillé."],["I went home.","Je suis rentré."]]),
        G("did dans questions/négations","Did you work? / I didn't work. Après did/didn't, le verbe revient à la base.",[["Did you see her?","L’as-tu vue ?"],["I didn't go.","Je n’y suis pas allé."]])
      ],
      verbs:[
        VB("work","travailler",{"I":"worked","you":"worked","he/she/it":"worked","we":"worked","you (plural)":"worked","they":"worked"},"Past simple régulier.","past simple","prétérit"),
        VB("go","aller",{"I":"went","you":"went","he/she/it":"went","we":"went","you (plural)":"went","they":"went"},"Prétérit irrégulier : went.","past simple","prétérit"),
        VB("see","voir",{"I":"saw","you":"saw","he/she/it":"saw","we":"saw","you (plural)":"saw","they":"saw"},"Prétérit irrégulier : saw.","past simple","prétérit")
      ],
      vocab:[
        V("yesterday","hier"),V("last night","hier soir"),V("worked","travaillé"),V("went","allé"),V("saw","vu"),V("had","eu"),V("ate","mangé"),V("drank","bu"),V("came","venu"),V("stayed","resté")
      ],
      phrases:[
        P("What did you do yesterday?","Qu’as-tu fait hier ?"),P("I worked in the morning.","J’ai travaillé le matin."),P("I went to a restaurant.","Je suis allé au restaurant."),P("Did you see Emma?","As-tu vu Emma ?"),
        P("I didn't work yesterday.","Je n’ai pas travaillé hier."),P("We had dinner at eight.","Nous avons dîné à huit heures.")
      ],
      drills:[
        M("Prétérit de go :",["went","goed","gone"],"went","go → went.","tenses"),
        M("Question correcte :",["Did you work?","Did you worked?","Do you worked?"],"Did you work?","Après did : base verbale.","grammar"),
        M("Négation correcte :",["I didn't go.","I didn't went.","I not went."],"I didn't go.","didn't + base verbale.","grammar")
      ],
      encounter:{prompts:[
        Q("Demande : « Qu’as-tu fait hier ? »","What did you do yesterday?"),Q("Dis : « J’ai travaillé hier. »","I worked yesterday."),Q("Dis : « Je suis allé au restaurant. »","I went to a restaurant."),Q("Dis : « Je n’ai pas travaillé hier. »","I didn't work yesterday.")
      ]}
    },
    {
      id:"en-a1-10",title:"Travel, hotel and shopping",goal:"Synthétiser l’A1 dans le voyage, l’hôtel et les achats : demandes polies, prix, directions et projet proche.",
      scene:{title:"At a hotel",lines:[
        {speaker:"Receptionist",t:"Good evening. Do you have a reservation?",fr:"Bonsoir. Avez-vous une réservation ?"},
        {speaker:"Guest",t:"Yes, I have a room for two nights.",fr:"Oui, j’ai une chambre pour deux nuits."},
        {speaker:"Receptionist",t:"Your room is on the third floor. Breakfast is from seven to ten.",fr:"Votre chambre est au troisième étage. Le petit-déjeuner est de sept à dix heures."},
        {speaker:"Guest",t:"Thank you. Could you tell me where the lift is?",fr:"Merci. Pourriez-vous me dire où est l’ascenseur ?"}
      ]},
      grammar:[
        G("Could you...?","Could you...? est une demande très polie et utile dans les situations de service.",[["Could you help me?","Pourriez-vous m’aider ?"],["Could you tell me the price?","Pourriez-vous me donner le prix ?"]]),
        G("How much / how many","How much demande un prix ou une quantité non comptable ; how many une quantité comptable.",[["How much is it?","Combien ça coûte ?"],["How many nights?","Combien de nuits ?"]])
      ],
      vocab:[
        V("a reservation","une réservation","a","reservation"),V("a room","une chambre","a","room"),V("a night","une nuit","a","night"),V("a floor","un étage","a","floor"),V("a lift","un ascenseur","a","lift"),
        V("a ticket","un billet","a","ticket"),V("a size","une taille","a","size"),V("a price","un prix","a","price"),V("cheap","bon marché"),V("expensive","cher")
      ],
      phrases:[
        P("I have a reservation.","J’ai une réservation."),P("I have a room for two nights.","J’ai une chambre pour deux nuits."),P("Where is the lift?","Où est l’ascenseur ?"),P("How much is it?","Combien ça coûte ?"),
        P("Do you have this in a larger size?","Avez-vous ceci dans une taille plus grande ?"),P("Could you help me, please?","Pourriez-vous m’aider, s’il vous plaît ?")
      ],
      drills:[
        M("Pour demander un prix :",["How much is it?","How many is it?","What money is it?"],"How much is it?","how much = combien pour prix/non comptable.","grammar"),
        M("Demande très polie :",["Could you help me, please?","You help me.","Help me now."],"Could you help me, please?","Could you...? adoucit la demande.","grammar"),
        M("Complète : a room ___ two nights",["for","at","on"],"for","for indique la durée prévue ici.","grammar")
      ],
      encounter:{prompts:[
        Q("À l’hôtel, dis : « J’ai une réservation. »","I have a reservation."),Q("Demande où est l’ascenseur.","Where is the lift?"),Q("Demande le prix.","How much is it?"),Q("Demande de l’aide poliment.","Could you help me, please?"),Q("Demande une taille plus grande.","Do you have this in a larger size?")
      ]}
    }
  ]
};
})();