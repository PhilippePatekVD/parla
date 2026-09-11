(function(){
"use strict";
const E=(t,fr)=>({t,fr});
const G=(title,body,examples=[])=>({title,body,examples:examples.map(x=>E(x[0],x[1]))});
const V=(t,fr,article=null,bare=null,note="")=>({t,fr,article,bare,note});
const P=(t,fr,note="",alt=[])=>({t,fr,note,alt});
const VB=(infinitive,fr,forms,note="",tense="presente",tenseLabel="présent")=>({infinitive,fr,forms,note,tense,tenseLabel});
const M=(prompt,choices,answer,explanation,skill="grammar")=>({type:"mcq",prompt,choices,answer,explanation,skill});
const T=(prompt,expected,model,explanation,skill="production")=>({type:"text",prompt,expected:Array.isArray(expected)?expected:[expected],model,explanation,skill});
const Q=(prompt,model,explanation="",skill="production",expected=null)=>{if(Array.isArray(skill)){expected=skill;skill="production"}return{prompt,model,explanation,skill,expected:expected||[model]}};

window.ES_A1={
  id:"a1",
  label:"A1 essentiel",
  cefr:"A1",
  description:"Construire une autonomie quotidienne : identité, famille, routine, nourriture, ville, goûts, projets et passé récent.",
  units:[
    {
      id:"es-a1-1",title:"Presentarse: ser y estar",goal:"Se présenter, donner son origine, sa profession et distinguer les premiers usages de ser et estar.",
      scene:{title:"Una nueva compañera",lines:[
        {speaker:"Lucía",t:"Hola, me llamo Lucía. ¿Cómo te llamas?",fr:"Salut, je m’appelle Lucía. Comment t’appelles-tu ?"},
        {speaker:"Thomas",t:"Me llamo Thomas. Soy francés, pero vivo en Suiza.",fr:"Je m’appelle Thomas. Je suis français, mais je vis en Suisse."},
        {speaker:"Lucía",t:"¿A qué te dedicas?",fr:"Que fais-tu comme métier ?"},
        {speaker:"Thomas",t:"Soy médico y ahora estoy en Ginebra.",fr:"Je suis médecin et je suis actuellement à Genève."}
      ]},
      grammar:[
        G("ser / estar","ser sert notamment à l’identité, l’origine et la profession ; estar à la localisation et aux états temporaires.",[["Soy médico.","Je suis médecin."],["Estoy en Ginebra.","Je suis à Genève."]]),
        G("llamarse","Le verbe pronominal llamarse donne : me llamo, te llamas, se llama…",[["Me llamo Ana.","Je m’appelle Ana."],["¿Cómo te llamas?","Comment t’appelles-tu ?"]])
      ],
      verbs:[
        VB("llamarse","s'appeler",{"yo":"me llamo","tú":"te llamas","él/ella/usted":"se llama","nosotros/as":"nos llamamos","vosotros/as":"os llamáis","ellos/ellas/ustedes":"se llaman"}),
        VB("vivir","vivre / habiter",{"yo":"vivo","tú":"vives","él/ella/usted":"vive","nosotros/as":"vivimos","vosotros/as":"vivís","ellos/ellas/ustedes":"viven"})
      ],
      vocab:[
        V("el nombre","le prénom / nom","el","nombre"),V("la profesión","la profession","la","profesión"),V("la ciudad","la ville","la","ciudad"),V("el país","le pays","el","país"),V("médico","médecin"),
        V("profesor","professeur"),V("francés","français"),V("suizo","suisse"),V("vivir","habiter"),V("trabajar","travailler")
      ],
      phrases:[
        P("Me llamo Thomas.","Je m’appelle Thomas."),P("¿Cómo te llamas?","Comment t’appelles-tu ?","",["Cómo te llamas?"]),P("Soy francés.","Je suis français."),P("Vivo en Suiza.","Je vis en Suisse."),P("Soy médico.","Je suis médecin."),P("Estoy en Ginebra.","Je suis à Genève.")
      ],
      drills:[
        M("Profession → on utilise généralement :",["ser","estar","tener"],"ser","Soy médico.","grammar"),
        M("Localisation actuelle →",["estar","ser","haber"],"estar","Estoy en Ginebra.","grammar"),
        M("Complète : Yo ___ llamo Ana.",["me","te","se"],"me","yo → me llamo.","grammar")
      ],
      encounter:{prompts:[
        Q("Présente ton nom.","Me llamo Thomas."),Q("Dis ton origine : « Je suis français. »","Soy francés."),Q("Dis : « J’habite en Suisse. »","Vivo en Suiza."),Q("Dis : « Je suis à Genève. »","Estoy en Ginebra.")
      ]}
    },
    {
      id:"es-a1-2",title:"La familia y los posesivos",goal:"Présenter sa famille et utiliser mi/tu/su/nuestro avec l’accord nécessaire.",
      scene:{title:"Una foto de familia",lines:[
        {speaker:"Elena",t:"Esta es mi familia.",fr:"Voici ma famille."},
        {speaker:"Nora",t:"¿Quién es él?",fr:"Qui est-il ?"},
        {speaker:"Elena",t:"Es mi hermano. Mi hermana vive en Valencia.",fr:"C’est mon frère. Ma sœur vit à Valence."},
        {speaker:"Nora",t:"¿Y tus padres?",fr:"Et tes parents ?"}
      ]},
      grammar:[
        G("mi / tu / su","mi, tu, su sont invariables en genre mais prennent -s au pluriel : mis, tus, sus.",[["mi hermano","mon frère"],["mis padres","mes parents"]]),
        G("nuestro / nuestra","nuestro s’accorde avec le nom possédé : nuestro hijo, nuestra hija, nuestros amigos.",[["nuestra casa","notre maison"],["nuestros hijos","nos enfants"]])
      ],
      vocab:[
        V("la familia","la famille","la","familia"),V("la madre","la mère","la","madre"),V("el padre","le père","el","padre"),V("el hermano","le frère","el","hermano"),V("la hermana","la sœur","la","hermana"),
        V("los padres","les parents","los","padres"),V("el hijo","le fils","el","hijo"),V("la hija","la fille","la","hija"),V("el marido","le mari","el","marido"),V("la mujer","l'épouse / la femme","la","mujer")
      ],
      phrases:[
        P("Esta es mi madre.","Voici ma mère."),P("Mi hermano vive en Madrid.","Mon frère vit à Madrid."),P("Mis padres son franceses.","Mes parents sont français."),P("Tu hermana trabaja aquí.","Ta sœur travaille ici."),P("Nuestra hija estudia español.","Notre fille étudie l’espagnol."),P("Su familia es grande.","Sa famille est grande.")
      ],
      drills:[
        M("Complète : ___ padres",["mis","mi","mío"],"mis","Pluriel → mis.","grammar"),
        M("Complète : ___ hija",["nuestra","nuestro","nuestros"],"nuestra","hija est féminin singulier.","agreement"),
        M("« ton frère » :",["tu hermano","tus hermano","su hermano"],"tu hermano","tu + singulier.","grammar")
      ],
      encounter:{prompts:[
        Q("Présente ta mère.","Esta es mi madre."),Q("Dis : « Mon frère vit à Madrid. »","Mi hermano vive en Madrid."),Q("Dis : « Mes parents sont français. »","Mis padres son franceses."),Q("Dis : « Notre fille étudie l’espagnol. »","Nuestra hija estudia español.")
      ]}
    },
    {
      id:"es-a1-3",title:"La rutina y la hora",goal:"Décrire sa routine, dire l’heure et utiliser les verbes pronominaux les plus fréquents.",
      scene:{title:"Una mañana normal",lines:[
        {speaker:"Marta",t:"Me despierto a las siete.",fr:"Je me réveille à sept heures."},
        {speaker:"Leo",t:"Yo me levanto a las siete y media.",fr:"Moi, je me lève à sept heures et demie."},
        {speaker:"Marta",t:"Después desayuno y voy al trabajo.",fr:"Ensuite je prends le petit-déjeuner et je vais au travail."},
        {speaker:"Leo",t:"¿A qué hora vuelves a casa?",fr:"À quelle heure rentres-tu ?"}
      ]},
      grammar:[
        G("Verbes pronominaux","me, te, se, nos, os, se accompagnent le verbe : me levanto, te duchas, se acuesta.",[["Me levanto a las siete.","Je me lève à sept heures."],["Nos acostamos tarde.","Nous nous couchons tard."]]),
        G("Dire l’heure","Es la una pour 1 h ; Son las… pour les autres heures. a la/las situe une action.",[["Son las ocho.","Il est huit heures."],["A las nueve trabajo.","À neuf heures je travaille."]])
      ],
      verbs:[
        VB("levantarse","se lever",{"yo":"me levanto","tú":"te levantas","él/ella/usted":"se levanta","nosotros/as":"nos levantamos","vosotros/as":"os levantáis","ellos/ellas/ustedes":"se levantan"}),
        VB("ir","aller",{"yo":"voy","tú":"vas","él/ella/usted":"va","nosotros/as":"vamos","vosotros/as":"vais","ellos/ellas/ustedes":"van"},"Verbe irrégulier essentiel.")
      ],
      vocab:[
        V("la mañana","le matin","la","mañana"),V("la tarde","l'après-midi","la","tarde"),V("la noche","le soir / la nuit","la","noche"),V("despertarse","se réveiller"),V("levantarse","se lever"),V("desayunar","prendre le petit-déjeuner"),V("ducharse","se doucher"),V("volver","rentrer"),V("temprano","tôt"),V("tarde","tard")
      ],
      phrases:[
        P("Son las ocho.","Il est huit heures."),P("Es la una.","Il est une heure."),P("Me levanto a las siete.","Je me lève à sept heures."),P("¿A qué hora trabajas?","À quelle heure travailles-tu ?","",["A qué hora trabajas?"]),P("Vuelvo a casa a las seis.","Je rentre à six heures."),P("Por la noche leo.","Le soir, je lis.")
      ],
      drills:[
        M("Complète : ___ las nueve.",["Son","Es","Hay"],"Son","Pour plusieurs heures : son las.","grammar"),
        M("Complète : Yo ___ levanto a las siete.",["me","te","se"],"me","yo → me.","grammar"),
        M("1 h se dit :",["Es la una.","Son la una.","Son las una."],"Es la una.","Singulier exceptionnel.","grammar")
      ],
      encounter:{prompts:[
        Q("Dis : « Il est huit heures. »","Son las ocho."),Q("Dis : « Je me lève à sept heures. »","Me levanto a las siete."),Q("Demande à quelle heure quelqu’un travaille.","¿A qué hora trabajas?","",["¿A qué hora trabajas?","A qué hora trabajas?"]),Q("Dis : « Je rentre à six heures. »","Vuelvo a casa a las seis.")
      ]}
    },
    {
      id:"es-a1-4",title:"En el bar y el restaurante",goal:"Commander poliment, utiliser querer/tomar et demander l’addition ou le prix.",
      scene:{title:"En un bar",lines:[
        {speaker:"Camarero",t:"Buenos días. ¿Qué quiere tomar?",fr:"Bonjour. Que souhaitez-vous prendre ?"},
        {speaker:"Cliente",t:"Quiero un café y un agua, por favor.",fr:"Je voudrais un café et une eau, s’il vous plaît."},
        {speaker:"Camarero",t:"¿Algo más?",fr:"Autre chose ?"},
        {speaker:"Cliente",t:"No, gracias. ¿Cuánto es?",fr:"Non merci. Combien cela fait ?"}
      ]},
      grammar:[
        G("querer","quiero/quieres/quiere… sert à exprimer ce que l’on veut. Au restaurant, quiero peut convenir ; quisiera est plus poli mais sera étudié plus tard.",[["Quiero un café.","Je veux / voudrais un café."],["¿Quieres agua?","Tu veux de l’eau ?"]]),
        G("tomar","tomar signifie prendre/boire et est très courant pour commander : tomo un café, ¿qué toma usted?",[["Tomo una cerveza.","Je prends une bière."],["¿Qué quiere tomar?","Que souhaitez-vous prendre ?"]])
      ],
      verbs:[
        VB("querer","vouloir",{"yo":"quiero","tú":"quieres","él/ella/usted":"quiere","nosotros/as":"queremos","vosotros/as":"queréis","ellos/ellas/ustedes":"quieren"}),
        VB("tomar","prendre / boire",{"yo":"tomo","tú":"tomas","él/ella/usted":"toma","nosotros/as":"tomamos","vosotros/as":"tomáis","ellos/ellas/ustedes":"toman"})
      ],
      vocab:[
        V("el café","le café","el","café"),V("el agua","l'eau","el","agua","agua est féminin mais prend el au singulier devant a tonique."),V("el té","le thé","el","té"),V("el bocadillo","le sandwich","el","bocadillo"),V("la ensalada","la salade","la","ensalada"),V("la cuenta","l'addition","la","cuenta"),V("comer","manger"),V("beber","boire"),V("pagar","payer"),V("cuánto","combien")
      ],
      phrases:[
        P("Quiero un café, por favor.","Je voudrais un café, s’il vous plaît."),P("¿Qué quiere tomar?","Que souhaitez-vous prendre ?","",["Qué quiere tomar?"]),P("Un agua, por favor.","Une eau, s’il vous plaît."),P("La cuenta, por favor.","L’addition, s’il vous plaît."),P("¿Cuánto es?","Combien cela fait ?","",["Cuánto es?"]),P("¿Puedo pagar con tarjeta?","Puis-je payer par carte ?","",["Puedo pagar con tarjeta?"])
      ],
      drills:[
        M("Complète : Yo ___ un café.",["quiero","quieres","quiere"],"quiero","yo → quiero.","conjugation"),
        M("Pour demander l’addition :",["La cuenta, por favor.","El precio, ahora.","Una mesa, gracias."],"La cuenta, por favor.","Formule standard.","vocab"),
        M("« payer par carte » :",["pagar con tarjeta","pagar en tarjeta","pagar de tarjeta"],"pagar con tarjeta","con + moyen.","grammar")
      ],
      encounter:{prompts:[
        Q("Commande un café.","Quiero un café, por favor."),Q("Demande l’addition.","La cuenta, por favor."),Q("Demande le prix total.","¿Cuánto es?","",["¿Cuánto es?","Cuánto es?"]),Q("Demande si tu peux payer par carte.","¿Puedo pagar con tarjeta?","",["¿Puedo pagar con tarjeta?","Puedo pagar con tarjeta?"])
      ]}
    },
    {
      id:"es-a1-5",title:"Hay, estar y la ciudad",goal:"Décrire une ville, distinguer hay de estar et demander son chemin.",
      scene:{title:"¿Dónde está la estación?",lines:[
        {speaker:"Turista",t:"Perdone, ¿dónde está la estación?",fr:"Excusez-moi, où est la gare ?"},
        {speaker:"Persona",t:"Está cerca. Siga todo recto y luego a la derecha.",fr:"Elle est proche. Allez tout droit puis à droite."},
        {speaker:"Turista",t:"¿Hay una farmacia cerca?",fr:"Y a-t-il une pharmacie près d’ici ?"},
        {speaker:"Persona",t:"Sí, hay una al lado del banco.",fr:"Oui, il y en a une à côté de la banque."}
      ]},
      grammar:[
        G("hay / estar","hay présente l’existence d’un élément non encore identifié ; estar localise un élément identifié.",[["Hay una farmacia.","Il y a une pharmacie."],["La farmacia está aquí.","La pharmacie est ici."]]),
        G("al / del","a + el = al ; de + el = del. Ces contractions sont obligatoires.",[["al lado del banco","à côté de la banque"],["Voy al centro.","Je vais au centre."]])
      ],
      vocab:[
        V("la estación","la gare","la","estación"),V("la farmacia","la pharmacie","la","farmacia"),V("el banco","la banque","el","banco"),V("el museo","le musée","el","museo"),V("el centro","le centre","el","centro"),V("a la derecha","à droite"),V("a la izquierda","à gauche"),V("todo recto","tout droit"),V("cerca","près"),V("lejos","loin")
      ],
      phrases:[
        P("¿Dónde está la estación?","Où est la gare ?","",["Dónde está la estación?"]),P("Hay una farmacia cerca.","Il y a une pharmacie près d’ici."),P("La farmacia está a la derecha.","La pharmacie est à droite."),P("Voy al museo.","Je vais au musée."),P("Está al lado del banco.","C’est à côté de la banque."),P("Siga todo recto.","Allez tout droit.")
      ],
      drills:[
        M("Pour dire « Il y a une pharmacie » :",["Hay una farmacia.","Está una farmacia.","Es una farmacia."],"Hay una farmacia.","hay présente l’existence.","grammar"),
        M("Pour localiser la pharmacie identifiée :",["La farmacia está aquí.","Hay la farmacia aquí.","La farmacia es aquí."],"La farmacia está aquí.","Localisation → estar.","grammar"),
        M("a + el =",["al","a el","del"],"al","Contraction obligatoire.","grammar")
      ],
      encounter:{prompts:[
        Q("Demande où est la gare.","¿Dónde está la estación?","",["¿Dónde está la estación?","Dónde está la estación?"]),Q("Demande s’il y a une pharmacie.","¿Hay una farmacia cerca?","",["¿Hay una farmacia cerca?","Hay una farmacia cerca?"]),Q("Dis : « La pharmacie est à droite. »","La farmacia está a la derecha."),Q("Dis : « Je vais au musée. »","Voy al museo.")
      ]}
    },
    {
      id:"es-a1-6",title:"Me gusta",goal:"Exprimer goûts et préférences avec gustar et préférer avec preferir.",
      scene:{title:"Tiempo libre",lines:[
        {speaker:"Clara",t:"¿Te gusta la música española?",fr:"Aimes-tu la musique espagnole ?"},
        {speaker:"Alex",t:"Sí, me gusta mucho. También me gustan las películas españolas.",fr:"Oui, j’aime beaucoup. J’aime aussi les films espagnols."},
        {speaker:"Clara",t:"¿Prefieres el mar o la montaña?",fr:"Tu préfères la mer ou la montagne ?"},
        {speaker:"Alex",t:"Prefiero la montaña.",fr:"Je préfère la montagne."}
      ]},
      grammar:[
        G("gustar","La chose aimée est le sujet grammatical : me gusta + singulier/infinitif ; me gustan + pluriel.",[["Me gusta el café.","J’aime le café."],["Me gustan los libros.","J’aime les livres."]]),
        G("preferir","preferir change e → ie à plusieurs personnes : prefiero, prefieres, prefiere…",[["Prefiero el té.","Je préfère le thé."],["¿Qué prefieres?","Que préfères-tu ?"]])
      ],
      verbs:[
        VB("preferir","préférer",{"yo":"prefiero","tú":"prefieres","él/ella/usted":"prefiere","nosotros/as":"preferimos","vosotros/as":"preferís","ellos/ellas/ustedes":"prefieren"})
      ],
      vocab:[
        V("la música","la musique","la","música"),V("la película","le film","la","película"),V("el libro","le livre","el","libro"),V("el mar","la mer","el","mar"),V("la montaña","la montagne","la","montaña"),V("el deporte","le sport","el","deporte"),V("viajar","voyager"),V("leer","lire"),V("gustar","aimer"),V("preferir","préférer")
      ],
      phrases:[
        P("Me gusta el café.","J’aime le café."),P("Me gustan los libros.","J’aime les livres."),P("No me gusta correr.","Je n’aime pas courir."),P("Prefiero el mar.","Je préfère la mer."),P("¿Te gusta viajar?","Tu aimes voyager ?","",["Te gusta viajar?"]),P("¿Qué prefieres?","Que préfères-tu ?","",["Qué prefieres?"])
      ],
      drills:[
        M("Complète : Me ___ los libros.",["gustan","gusta","prefiero"],"gustan","los libros est pluriel.","grammar"),
        M("Complète : Yo ___ el té.",["prefiero","prefieres","prefiere"],"prefiero","yo → prefiero.","conjugation"),
        M("Avec un infinitif :",["Me gusta viajar.","Me gustan viajar.","Me gusto viajar."],"Me gusta viajar.","L’infinitif se traite comme singulier.","grammar")
      ],
      encounter:{prompts:[
        Q("Dis : « J’aime voyager. »","Me gusta viajar."),Q("Dis : « J’aime les films espagnols. »","Me gustan las películas españolas."),Q("Demande : « Tu aimes le café ? »","¿Te gusta el café?","",["¿Te gusta el café?","Te gusta el café?"]),Q("Dis : « Je préfère la montagne. »","Prefiero la montaña.")
      ]}
    },
    {
      id:"es-a1-7",title:"Puedo, debo, quiero + ir a",goal:"Exprimer capacité, obligation, volonté et projet futur proche.",
      scene:{title:"Planes para el fin de semana",lines:[
        {speaker:"Marco",t:"¿Quieres ir al cine el sábado?",fr:"Tu veux aller au cinéma samedi ?"},
        {speaker:"Sofía",t:"Sí, pero debo trabajar hasta las seis.",fr:"Oui, mais je dois travailler jusqu’à six heures."},
        {speaker:"Marco",t:"Podemos ir a las ocho.",fr:"Nous pouvons y aller à huit heures."},
        {speaker:"Sofía",t:"Perfecto. Voy a reservar las entradas.",fr:"Parfait. Je vais réserver les billets."}
      ]},
      grammar:[
        G("poder / deber / querer + infinitif","Le modal est conjugué et le deuxième verbe reste à l’infinitif : puedo venir, debo trabajar, quiero salir.",[["Puedo hablar.","Je peux parler."],["Debemos salir.","Nous devons partir."]]),
        G("ir a + infinitif","Cette structure exprime un projet ou futur proche : voy a estudiar, vamos a viajar.",[["Voy a reservar.","Je vais réserver."],["Vamos a salir.","Nous allons sortir."]])
      ],
      verbs:[
        VB("poder","pouvoir",{"yo":"puedo","tú":"puedes","él/ella/usted":"puede","nosotros/as":"podemos","vosotros/as":"podéis","ellos/ellas/ustedes":"pueden"}),
        VB("deber","devoir",{"yo":"debo","tú":"debes","él/ella/usted":"debe","nosotros/as":"debemos","vosotros/as":"debéis","ellos/ellas/ustedes":"deben"}),
        VB("querer","vouloir",{"yo":"quiero","tú":"quieres","él/ella/usted":"quiere","nosotros/as":"queremos","vosotros/as":"queréis","ellos/ellas/ustedes":"quieren"})
      ],
      vocab:[
        V("poder","pouvoir"),V("deber","devoir"),V("querer","vouloir"),V("venir","venir"),V("salir","sortir"),V("reservar","réserver"),V("mañana","demain"),V("el sábado","samedi","el","sábado"),V("la entrada","le billet / entrée","la","entrada"),V("el cine","le cinéma","el","cine")
      ],
      phrases:[
        P("Puedo venir mañana.","Je peux venir demain."),P("Debo trabajar.","Je dois travailler."),P("¿Quieres salir esta noche?","Tu veux sortir ce soir ?","",["Quieres salir esta noche?"]),P("Podemos ir a las ocho.","Nous pouvons y aller à huit heures."),P("Voy a reservar las entradas.","Je vais réserver les billets."),P("Vamos a viajar mañana.","Nous allons voyager demain.")
      ],
      drills:[
        M("Après puedo, le second verbe est :",["à l'infinitif","conjugué avec yo","au participe"],"à l'infinitif","puedo venir.","grammar"),
        M("Complète : Nosotros ___ ir.",["podemos","puedo","pueden"],"podemos","nosotros → podemos.","conjugation"),
        M("Projet futur proche :",["Voy a viajar.","Voy viajar.","Soy a viajar."],"Voy a viajar.","ir a + infinitif.","tenses")
      ],
      encounter:{prompts:[
        Q("Dis : « Je peux venir demain. »","Puedo venir mañana."),Q("Dis : « Je dois travailler. »","Debo trabajar."),Q("Demande : « Tu veux sortir ce soir ? »","¿Quieres salir esta noche?","",["¿Quieres salir esta noche?","Quieres salir esta noche?"]),Q("Dis : « Je vais réserver. »","Voy a reservar.")
      ]}
    },
    {
      id:"es-a1-8",title:"Ahora: estar + gerundio",goal:"Parler de ce qui se passe maintenant et distinguer habitude et action en cours.",
      scene:{title:"¿Qué estás haciendo?",lines:[
        {speaker:"Ana",t:"Hola, ¿qué estás haciendo?",fr:"Salut, qu’est-ce que tu fais ?"},
        {speaker:"Luis",t:"Estoy preparando la cena. Mi hermana está viendo la tele.",fr:"Je prépare le dîner. Ma sœur regarde la télé."},
        {speaker:"Ana",t:"¿Cocinas todos los días?",fr:"Tu cuisines tous les jours ?"},
        {speaker:"Luis",t:"No. Normalmente como fuera, pero hoy estoy cocinando.",fr:"Non. D’habitude je mange dehors, mais aujourd’hui je cuisine."}
      ]},
      grammar:[
        G("estar + gerundio","Pour insister sur une action en cours : estar + gerundio. -ar → -ando ; -er/-ir → -iendo.",[["Estoy trabajando.","Je suis en train de travailler."],["Estamos comiendo.","Nous sommes en train de manger."]]),
        G("Présent simple ou progressif","Le présent simple décrit habitudes/faits ; estar + gerundio insiste sur l’action actuelle.",[["Trabajo cada día.","Je travaille chaque jour."],["Estoy trabajando ahora.","Je travaille maintenant."]])
      ],
      verbs:[
        VB("trabajar","travailler",{"yo":"estoy trabajando","tú":"estás trabajando","él/ella/usted":"está trabajando","nosotros/as":"estamos trabajando","vosotros/as":"estáis trabajando","ellos/ellas/ustedes":"están trabajando"},"Périphrase progressive.","estar + gerundio","présent progressif")
      ],
      vocab:[
        V("ahora","maintenant"),V("en este momento","en ce moment"),V("trabajando","en train de travailler"),V("comiendo","en train de manger"),V("bebiendo","en train de boire"),V("hablando","en train de parler"),V("viendo","en train de regarder / voir"),V("esperando","en train d'attendre"),V("la cena","le dîner","la","cena"),V("la tele","la télévision","la","tele")
      ],
      phrases:[
        P("¿Qué estás haciendo?","Qu’est-ce que tu fais ?","",["Qué estás haciendo?"]),P("Estoy trabajando ahora.","Je travaille maintenant."),P("Está viendo la tele.","Il/elle regarde la télévision."),P("Estamos esperando el autobús.","Nous attendons le bus."),P("Trabajo cada día.","Je travaille chaque jour."),P("Hoy estoy cocinando.","Aujourd’hui je cuisine en ce moment.")
      ],
      drills:[
        M("Action en cours :",["Estoy trabajando.","Trabajo cada día.","Soy trabajando."],"Estoy trabajando.","estar + gerundio.","tenses"),
        M("Gerundio de hablar :",["hablando","habliendo","hablado"],"hablando","-ar → -ando.","tenses"),
        M("Gerundio de comer :",["comiendo","comando","comido"],"comiendo","-er → -iendo.","tenses")
      ],
      encounter:{prompts:[
        Q("Demande : « Qu’est-ce que tu fais ? »","¿Qué estás haciendo?","",["¿Qué estás haciendo?","Qué estás haciendo?"]),Q("Dis : « Je travaille maintenant. »","Estoy trabajando ahora."),Q("Dis : « Nous attendons le bus. »","Estamos esperando el autobús."),Q("Dis : « Je travaille chaque jour, mais aujourd’hui je me repose. »","Trabajo cada día, pero hoy estoy descansando.")
      ]}
    },
    {
      id:"es-a1-9",title:"He comido: pretérito perfecto",goal:"Raconter une expérience ou une action passée récente avec haber + participe passé.",
      scene:{title:"Hoy y esta semana",lines:[
        {speaker:"Irene",t:"¿Qué has hecho hoy?",fr:"Qu’as-tu fait aujourd’hui ?"},
        {speaker:"Carlos",t:"He trabajado y después he comido con Ana.",fr:"J’ai travaillé puis j’ai mangé avec Ana."},
        {speaker:"Irene",t:"¿Has visto a Marta esta semana?",fr:"As-tu vu Marta cette semaine ?"},
        {speaker:"Carlos",t:"No, todavía no la he visto.",fr:"Non, je ne l’ai pas encore vue."}
      ]},
      grammar:[
        G("Formation","haber au présent + participe passé : he, has, ha, hemos, habéis, han + -ado/-ido ou participe irrégulier.",[["he trabajado","j’ai travaillé"],["hemos comido","nous avons mangé"]]),
        G("Repères temporels","En Espagne, le pretérito perfecto est très fréquent avec hoy, esta semana, este año quand la période est encore liée au présent.",[["Hoy he trabajado.","Aujourd’hui j’ai travaillé."],["Esta semana he visto a Ana.","Cette semaine j’ai vu Ana."]])
      ],
      verbs:[
        VB("trabajar","travailler",{"yo":"he trabajado","tú":"has trabajado","él/ella/usted":"ha trabajado","nosotros/as":"hemos trabajado","vosotros/as":"habéis trabajado","ellos/ellas/ustedes":"han trabajado"},"Pretérito perfecto avec haber.","pretérito perfecto","passé composé"),
        VB("ver","voir",{"yo":"he visto","tú":"has visto","él/ella/usted":"ha visto","nosotros/as":"hemos visto","vosotros/as":"habéis visto","ellos/ellas/ustedes":"han visto"},"Participe irrégulier : visto.","pretérito perfecto","passé composé")
      ],
      vocab:[
        V("hoy","aujourd'hui"),V("esta semana","cette semaine"),V("este año","cette année"),V("hecho","fait"),V("trabajado","travaillé"),V("comido","mangé"),V("bebido","bu"),V("visto","vu"),V("estado","été"),V("todavía no","pas encore")
      ],
      phrases:[
        P("¿Qué has hecho hoy?","Qu’as-tu fait aujourd’hui ?","",["Qué has hecho hoy?"]),P("He trabajado hoy.","J’ai travaillé aujourd’hui."),P("He comido con Ana.","J’ai mangé avec Ana."),P("¿Has visto a Marta?","As-tu vu Marta ?","",["Has visto a Marta?"]),P("Todavía no la he visto.","Je ne l’ai pas encore vue."),P("Hemos estado en Madrid.","Nous avons été à Madrid.")
      ],
      drills:[
        M("Participe de hablar :",["hablado","hablido","hablando"],"hablado","-ar → -ado.","tenses"),
        M("Participe de comer :",["comido","comado","comiendo"],"comido","-er/-ir → -ido.","tenses"),
        M("Participe de ver :",["visto","vido","verido"],"visto","Forme irrégulière.","tenses")
      ],
      encounter:{prompts:[
        Q("Demande : « Qu’as-tu fait aujourd’hui ? »","¿Qué has hecho hoy?","",["¿Qué has hecho hoy?","Qué has hecho hoy?"]),Q("Dis : « J’ai travaillé aujourd’hui. »","He trabajado hoy."),Q("Dis : « J’ai mangé avec Ana. »","He comido con Ana."),Q("Dis : « Je ne l’ai pas encore vue. »","Todavía no la he visto.")
      ]}
    },
    {
      id:"es-a1-10",title:"Viajar, hotel y compras",goal:"Synthétiser l’A1 dans le voyage, l’hôtel et les achats : réservation, prix, tailles et demandes utiles.",
      scene:{title:"En el hotel",lines:[
        {speaker:"Recepción",t:"Buenas tardes. ¿Tiene una reserva?",fr:"Bonsoir. Avez-vous une réservation ?"},
        {speaker:"Cliente",t:"Sí, tengo una habitación para dos noches.",fr:"Oui, j’ai une chambre pour deux nuits."},
        {speaker:"Recepción",t:"Su habitación está en la tercera planta. El desayuno es de siete a diez.",fr:"Votre chambre est au troisième étage. Le petit-déjeuner est de sept à dix heures."},
        {speaker:"Cliente",t:"Gracias. ¿Dónde está el ascensor?",fr:"Merci. Où est l’ascenseur ?"}
      ]},
      grammar:[
        G("este / esta / estos / estas","Les démonstratifs proches s’accordent avec le nom : este billete, esta camisa, estos zapatos.",[["esta habitación","cette chambre"],["estos zapatos","ces chaussures"]]),
        G("más + adjectif","Pour comparer simplement : más grande, más barato, más caro. On demande souvent una talla más grande.",[["una talla más grande","une taille plus grande"],["un hotel más barato","un hôtel moins cher / plus bon marché"]])
      ],
      vocab:[
        V("el hotel","l'hôtel","el","hotel"),V("la habitación","la chambre","la","habitación"),V("la reserva","la réservation","la","reserva"),V("la noche","la nuit","la","noche"),V("el ascensor","l'ascenseur","el","ascensor"),
        V("el billete","le billet","el","billete"),V("la talla","la taille","la","talla"),V("el precio","le prix","el","precio"),V("barato","bon marché"),V("caro","cher")
      ],
      phrases:[
        P("Tengo una reserva.","J’ai une réservation."),P("Tengo una habitación para dos noches.","J’ai une chambre pour deux nuits."),P("¿Dónde está el ascensor?","Où est l’ascenseur ?","",["Dónde está el ascensor?"]),P("¿Cuánto cuesta?","Combien ça coûte ?","",["Cuánto cuesta?"]),P("¿Tiene una talla más grande?","Avez-vous une taille plus grande ?","",["Tiene una talla más grande?"]),P("¿Me puede ayudar, por favor?","Pouvez-vous m’aider, s’il vous plaît ?","",["Me puede ayudar, por favor?"])
      ],
      drills:[
        M("« cette chambre » :",["esta habitación","este habitación","estas habitación"],"esta habitación","habitación est féminin singulier.","agreement"),
        M("« une taille plus grande » :",["una talla más grande","una talla muy grande que","un talla más grande"],"una talla más grande","más + adjectif.","grammar"),
        M("Pour demander le prix :",["¿Cuánto cuesta?","¿Cuántos cuesta?","¿Qué dinero?"],"¿Cuánto cuesta?","cuánto cuesta = combien ça coûte.","grammar")
      ],
      encounter:{prompts:[
        Q("À l’hôtel, dis : « J’ai une réservation. »","Tengo una reserva."),Q("Demande où est l’ascenseur.","¿Dónde está el ascensor?","",["¿Dónde está el ascensor?","Dónde está el ascensor?"]),Q("Demande le prix.","¿Cuánto cuesta?","",["¿Cuánto cuesta?","Cuánto cuesta?"]),Q("Demande une taille plus grande.","¿Tiene una talla más grande?","",["¿Tiene una talla más grande?","Tiene una talla más grande?"]),Q("Demande de l’aide poliment.","¿Me puede ayudar, por favor?","",["¿Me puede ayudar, por favor?","Me puede ayudar, por favor?"])
      ]}
    }
  ]
};
})();