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

window.ES_FOUNDATION={
  id:"foundation",
  label:"Fondations",
  cefr:"Pré-A1",
  description:"Le socle : sons, salutations, ser, articles, tener, présent régulier et premières questions.",
  units:[
    {
      id:"es-f1",title:"Sonidos y saludos",goal:"Reconnaître les sons de base, saluer, remercier et prendre congé.",
      scene:{title:"Primer contacto",lines:[
        {speaker:"Ana",t:"¡Hola! Buenos días.",fr:"Salut ! Bonjour."},
        {speaker:"Lucas",t:"Buenos días. ¿Qué tal?",fr:"Bonjour. Ça va ?"},
        {speaker:"Ana",t:"Muy bien, gracias. ¿Y tú?",fr:"Très bien, merci. Et toi ?"},
        {speaker:"Lucas",t:"Bien. ¡Hasta luego!",fr:"Bien. À plus tard !"}
      ]},
      grammar:[
        G("Sons utiles","j se prononce avec un son guttural ; ñ comme gn ; h est muet ; ll/y ont souvent un son proche de y ou dj selon les régions. Les cinq voyelles restent relativement stables.",[["jamón","jambon"],["niño","enfant"],["hola","bonjour"]]),
        G("Accents et ponctuation","L’accent écrit indique souvent la syllabe tonique lorsqu’elle ne suit pas la règle générale. Les questions et exclamations utilisent aussi ¿ et ¡ à l’écrit.",[["¿Qué tal?","Ça va ?"],["¡Hola!","Salut !"]])
      ],
      vocab:[
        V("hola","salut / bonjour"),V("buenos días","bonjour"),V("buenas tardes","bon après-midi"),V("buenas noches","bonsoir / bonne nuit"),V("gracias","merci"),
        V("por favor","s'il vous plaît"),V("bien","bien"),V("muy bien","très bien"),V("hasta luego","à plus tard"),V("adiós","au revoir")
      ],
      phrases:[
        P("¡Hola!","Salut !","",["Hola!"]),P("Buenos días.","Bonjour."),P("¿Qué tal?","Ça va ?","",["Qué tal?"]),P("Muy bien, gracias.","Très bien, merci."),P("¿Y tú?","Et toi ?","",["Y tú?"]),P("¡Hasta luego!","À plus tard !","",["Hasta luego!"])
      ],
      drills:[
        M("La lettre h en espagnol est généralement :",["muette","prononcée comme h anglais","prononcée comme j"],"muette","hola commence directement par le son o.","pronunciation"),
        M("ñ se rapproche du français :",["gn","ch","j"],"gn","niño contient le son gn.","pronunciation"),
        M("Pour remercier :",["gracias","por favor","adiós"],"gracias","gracias = merci.","vocab")
      ],
      encounter:{prompts:[
        Q("Salue quelqu’un.","¡Hola!","",["¡Hola!","Hola!"]),Q("Demande simplement : « Ça va ? »","¿Qué tal?","",["¿Qué tal?","Qué tal?"]),Q("Réponds : « Très bien, merci. »","Muy bien, gracias."),Q("Dis : « À plus tard ! »","¡Hasta luego!","",["¡Hasta luego!","Hasta luego!"])
      ]}
    },
    {
      id:"es-f2",title:"Yo, tú, él, ella + ser",goal:"Construire les premières phrases d’identité et comprendre pourquoi le pronom sujet peut être omis.",
      scene:{title:"¿Quién eres?",lines:[
        {speaker:"Marta",t:"Soy Marta. Soy española.",fr:"Je suis Marta. Je suis espagnole."},
        {speaker:"Paul",t:"Soy Paul. Soy francés.",fr:"Je suis Paul. Je suis français."},
        {speaker:"Marta",t:"¿Eres de París?",fr:"Tu viens de Paris ?"},
        {speaker:"Paul",t:"Sí. Él es mi amigo Tom.",fr:"Oui. Lui, c’est mon ami Tom."}
      ]},
      grammar:[
        G("Pronoms sujets","yo, tú, él, ella, usted, nosotros/as, vosotros/as, ellos/as, ustedes existent mais sont souvent omis quand la terminaison du verbe suffit.",[["Soy francés.","Je suis français."],["Ella es española.","Elle est espagnole."]]),
        G("ser","ser exprime notamment identité, origine, profession et caractéristiques considérées comme définitoires.",[["Somos amigos.","Nous sommes amis."],["Es médico.","Il/elle est médecin."]])
      ],
      verbs:[
        VB("ser","être",{"yo":"soy","tú":"eres","él/ella/usted":"es","nosotros/as":"somos","vosotros/as":"sois","ellos/ellas/ustedes":"son"},"Verbe essentiel et irrégulier.")
      ],
      vocab:[
        V("yo","je"),V("tú","tu"),V("él","il"),V("ella","elle"),V("usted","vous de politesse"),V("nosotros","nous"),V("ellos","ils"),V("francés","français"),V("español","espagnol"),V("amigo","ami")
      ],
      phrases:[
        P("Soy francés.","Je suis français."),P("Eres español.","Tu es espagnol."),P("Ella es mi amiga.","Elle est mon amie."),P("Somos amigos.","Nous sommes amis."),P("Son de Madrid.","Ils sont de Madrid."),P("¿Eres de París?","Tu viens de Paris ?","",["Eres de París?"])
      ],
      drills:[
        M("Complète : Yo ___ francés.",["soy","eres","es"],"soy","yo → soy.","conjugation"),
        M("Complète : Nosotros ___ amigos.",["somos","sois","son"],"somos","nosotros → somos.","conjugation"),
        M("En espagnol, le pronom sujet est :",["souvent omis","toujours obligatoire","interdit"],"souvent omis","La terminaison indique souvent la personne.","grammar")
      ],
      encounter:{prompts:[
        Q("Dis : « Je suis français. »","Soy francés."),Q("Dis : « Elle est espagnole. »","Ella es española."),Q("Dis : « Nous sommes amis. »","Somos amigos."),Q("Demande : « Tu viens de Paris ? »","¿Eres de París?","",["¿Eres de París?","Eres de París?"])
      ]}
    },
    {
      id:"es-f3",title:"el, la, un, una",goal:"Comprendre le genre, les articles définis/indéfinis et les pluriels réguliers.",
      scene:{title:"En clase",lines:[
        {speaker:"Profesora",t:"Este es el libro y esta es la mesa.",fr:"Voici le livre et la table."},
        {speaker:"Alumno",t:"¿Y la mochila?",fr:"Et le sac à dos ?"},
        {speaker:"Profesora",t:"La mochila está aquí, junto a una silla.",fr:"Le sac est ici, à côté d’une chaise."},
        {speaker:"Alumno",t:"También tengo dos cuadernos.",fr:"J’ai aussi deux cahiers."}
      ]},
      grammar:[
        G("Genre","Beaucoup de noms en -o sont masculins et en -a féminins, mais ce n’est pas une règle absolue. Apprends le nom avec son article.",[["el libro","le livre"],["la mesa","la table"],["la mano","la main (exception)"]]),
        G("Articles et pluriel","el/la deviennent los/las ; un/una deviennent unos/unas. Le pluriel ajoute généralement -s après voyelle et -es après consonne.",[["los libros","les livres"],["las ciudades","les villes"]])
      ],
      vocab:[
        V("el libro","le livre","el","libro"),V("la mesa","la table","la","mesa"),V("la silla","la chaise","la","silla"),V("la mochila","le sac à dos","la","mochila"),V("el cuaderno","le cahier","el","cuaderno"),
        V("el teléfono","le téléphone","el","teléfono"),V("la llave","la clé","la","llave"),V("el ordenador","l'ordinateur","el","ordenador"),V("la puerta","la porte","la","puerta"),V("el problema","le problème","el","problema")
      ],
      phrases:[
        P("Este es el libro.","Ceci est le livre."),P("Esta es una mesa.","Ceci est une table."),P("Tengo una mochila.","J’ai un sac à dos."),P("Los libros están aquí.","Les livres sont ici."),P("Las llaves están en la mesa.","Les clés sont sur la table."),P("Es un problema.","C’est un problème.")
      ],
      drills:[
        M("Choisis : ___ libro",["el","la","una"],"el","libro est masculin.","articles"),
        M("Choisis : ___ mesa",["el","la","los"],"la","mesa est féminin.","articles"),
        M("Pluriel de la ciudad :",["las ciudades","los ciudad","las ciudads"],"las ciudades","consonne → -es ; féminin pluriel → las.","grammar")
      ],
      encounter:{prompts:[
        Q("Dis : « C’est un livre. »","Es un libro."),Q("Dis : « J’ai un sac à dos. »","Tengo una mochila."),Q("Dis : « Les livres sont ici. »","Los libros están aquí."),Q("Dis : « Les clés sont sur la table. »","Las llaves están en la mesa.")
      ]}
    },
    {
      id:"es-f4",title:"tener, la edad y los números",goal:"Utiliser tener, compter et donner son âge correctement.",
      scene:{title:"Datos personales",lines:[
        {speaker:"Diego",t:"¿Cuántos años tienes?",fr:"Quel âge as-tu ?"},
        {speaker:"Clara",t:"Tengo treinta y dos años. ¿Y tú?",fr:"J’ai trente-deux ans. Et toi ?"},
        {speaker:"Diego",t:"Tengo treinta y cinco. ¿Tienes un número español?",fr:"J’ai trente-cinq ans. As-tu un numéro espagnol ?"},
        {speaker:"Clara",t:"Sí, tengo un número nuevo.",fr:"Oui, j’ai un nouveau numéro."}
      ]},
      grammar:[
        G("tener","tener exprime possession mais entre aussi dans plusieurs expressions : tener hambre, sed, tiempo, años.",[["Tengo un coche.","J’ai une voiture."],["Tengo hambre.","J’ai faim."]]),
        G("L’âge","L’espagnol utilise tener : tengo treinta años. La question est ¿Cuántos años tienes?",[["Tengo veinte años.","J’ai vingt ans."],["¿Cuántos años tiene?","Quel âge a-t-il/elle ?"]])
      ],
      verbs:[
        VB("tener","avoir",{"yo":"tengo","tú":"tienes","él/ella/usted":"tiene","nosotros/as":"tenemos","vosotros/as":"tenéis","ellos/ellas/ustedes":"tienen"},"Irrégulier à plusieurs personnes.")
      ],
      vocab:[
        V("cero","zéro"),V("uno","un"),V("dos","deux"),V("tres","trois"),V("diez","dix"),V("veinte","vingt"),V("treinta","trente"),V("el número","le numéro","el","número"),V("el año","l'année","el","año"),V("hambre","faim")
      ],
      phrases:[
        P("Tengo treinta años.","J’ai trente ans."),P("¿Cuántos años tienes?","Quel âge as-tu ?","",["Cuántos años tienes?"]),P("Tengo un número nuevo.","J’ai un nouveau numéro."),P("Tiene un coche.","Il/elle a une voiture."),P("Tenemos tiempo.","Nous avons le temps."),P("Tengo hambre.","J’ai faim.")
      ],
      drills:[
        M("Complète : Yo ___ tiempo.",["tengo","tienes","tiene"],"tengo","yo → tengo.","conjugation"),
        M("Complète : Nosotros ___ una pregunta.",["tenemos","tenéis","tienen"],"tenemos","nosotros → tenemos.","conjugation"),
        M("20 se dit :",["veinte","treinta","doce"],"veinte","veinte = vingt.","vocab")
      ],
      encounter:{prompts:[
        Q("Dis : « J’ai 28 ans. »","Tengo veintiocho años."),Q("Demande l’âge.","¿Cuántos años tienes?","",["¿Cuántos años tienes?","Cuántos años tienes?"]),Q("Dis : « Nous avons le temps. »","Tenemos tiempo."),Q("Dis : « J’ai faim. »","Tengo hambre.")
      ]}
    },
    {
      id:"es-f5",title:"El presente regular",goal:"Comprendre le présent régulier des verbes en -ar, -er et -ir.",
      scene:{title:"Un día normal",lines:[
        {speaker:"Laura",t:"Trabajo en Madrid y hablo español e inglés.",fr:"Je travaille à Madrid et je parle espagnol et anglais."},
        {speaker:"Tom",t:"Yo estudio español. ¿Trabajas aquí?",fr:"J’étudie l’espagnol. Tu travailles ici ?"},
        {speaker:"Laura",t:"Sí. Comemos a las dos y vivimos cerca.",fr:"Oui. Nous mangeons à deux heures et nous habitons près d’ici."},
        {speaker:"Tom",t:"Perfecto. Aprendo mucho cada día.",fr:"Parfait. J’apprends beaucoup chaque jour."}
      ]},
      grammar:[
        G("Verbes en -ar","On retire -ar et on ajoute -o, -as, -a, -amos, -áis, -an.",[["hablar → hablo","parler → je parle"],["trabajar → trabajamos","travailler → nous travaillons"]]),
        G("Verbes en -er / -ir","-er : -o, -es, -e, -emos, -éis, -en. -ir : -o, -es, -e, -imos, -ís, -en.",[["comer → comemos","manger → nous mangeons"],["vivir → vivimos","vivre → nous vivons"]])
      ],
      verbs:[
        VB("hablar","parler",{"yo":"hablo","tú":"hablas","él/ella/usted":"habla","nosotros/as":"hablamos","vosotros/as":"habláis","ellos/ellas/ustedes":"hablan"}),
        VB("comer","manger",{"yo":"como","tú":"comes","él/ella/usted":"come","nosotros/as":"comemos","vosotros/as":"coméis","ellos/ellas/ustedes":"comen"}),
        VB("vivir","vivre",{"yo":"vivo","tú":"vives","él/ella/usted":"vive","nosotros/as":"vivimos","vosotros/as":"vivís","ellos/ellas/ustedes":"viven"})
      ],
      vocab:[
        V("trabajar","travailler"),V("hablar","parler"),V("estudiar","étudier"),V("comer","manger"),V("beber","boire"),V("vivir","vivre"),V("aprender","apprendre"),V("leer","lire"),V("cada día","chaque jour"),V("cerca","près")
      ],
      phrases:[
        P("Hablo español.","Je parle espagnol."),P("¿Trabajas aquí?","Tu travailles ici ?","",["Trabajas aquí?"]),P("Comemos a las dos.","Nous mangeons à deux heures."),P("Vivimos en Suiza.","Nous vivons en Suisse."),P("Estudian cada día.","Ils étudient chaque jour."),P("Aprendo español.","J’apprends l’espagnol.")
      ],
      drills:[
        M("Terminaison de nosotros pour hablar :",["-amos","-áis","-an"],"-amos","hablamos.","conjugation"),
        M("Complète : Vosotros com__ aquí.",["éis","emos","en"],"éis","vosotros → coméis.","conjugation"),
        M("Complète : Nosotros viv__ en Suiza.",["imos","ís","en"],"imos","nosotros → vivimos.","conjugation")
      ],
      encounter:{prompts:[
        Q("Dis : « Je parle espagnol. »","Hablo español."),Q("Demande : « Tu travailles ici ? »","¿Trabajas aquí?","",["¿Trabajas aquí?","Trabajas aquí?"]),Q("Dis : « Nous mangeons à deux heures. »","Comemos a las dos."),Q("Dis : « Nous vivons en Suisse. »","Vivimos en Suiza.")
      ]}
    },
    {
      id:"es-f6",title:"Preguntas, negación y estar",goal:"Former des questions simples, nier une phrase et utiliser estar pour les états et positions.",
      scene:{title:"Hoy",lines:[
        {speaker:"Sara",t:"¿Dónde estás?",fr:"Où es-tu ?"},
        {speaker:"Pablo",t:"Estoy en casa. Hoy no trabajo.",fr:"Je suis à la maison. Aujourd’hui je ne travaille pas."},
        {speaker:"Sara",t:"¿Estás cansado?",fr:"Tu es fatigué ?"},
        {speaker:"Pablo",t:"No, estoy bien, pero mi hermana está enferma.",fr:"Non, je vais bien, mais ma sœur est malade."}
      ]},
      grammar:[
        G("no + verbe","La négation de base est simple : no se place directement devant le verbe conjugué.",[["No trabajo hoy.","Je ne travaille pas aujourd’hui."],["No tengo tiempo.","Je n’ai pas le temps."]]),
        G("estar","estar sert notamment à la localisation et aux états temporaires. Les adjectifs s’accordent : cansado/cansada.",[["Estoy en casa.","Je suis à la maison."],["Ella está cansada.","Elle est fatiguée."]])
      ],
      verbs:[
        VB("estar","être (état/position)",{"yo":"estoy","tú":"estás","él/ella/usted":"está","nosotros/as":"estamos","vosotros/as":"estáis","ellos/ellas/ustedes":"están"},"Localisation et états fréquents.")
      ],
      vocab:[
        V("dónde","où"),V("qué","quoi / que"),V("cómo","comment"),V("cuándo","quand"),V("por qué","pourquoi"),V("no","ne... pas"),V("cansado","fatigué"),V("enfermo","malade"),V("en casa","à la maison"),V("hoy","aujourd'hui")
      ],
      phrases:[
        P("¿Dónde estás?","Où es-tu ?","",["Dónde estás?"]),P("Estoy en casa.","Je suis à la maison."),P("Hoy no trabajo.","Aujourd’hui je ne travaille pas."),P("No tengo tiempo.","Je n’ai pas le temps."),P("¿Estás cansado?","Tu es fatigué ?","",["Estás cansado?"]),P("Estamos bien.","Nous allons bien.")
      ],
      drills:[
        M("Où place-t-on no ?",["avant le verbe","après le verbe","en fin de phrase"],"avant le verbe","No trabajo, no tengo.","grammar"),
        M("Pour la localisation :",["estar","ser","tener"],"estar","Estoy en casa.","grammar"),
        M("Complète : Nosotros ___ bien.",["estamos","somos","están"],"estamos","nosotros → estamos.","conjugation")
      ],
      encounter:{prompts:[
        Q("Demande : « Où es-tu ? »","¿Dónde estás?","",["¿Dónde estás?","Dónde estás?"]),Q("Dis : « Je suis à la maison. »","Estoy en casa."),Q("Dis : « Aujourd’hui je ne travaille pas. »","Hoy no trabajo."),Q("Demande : « Tu es fatigué ? »","¿Estás cansado?","",["¿Estás cansado?","Estás cansado?"])
      ]}
    }
  ]
};
})();