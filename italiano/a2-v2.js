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

window.IT_A2={
  id:"a2",
  label:"A2 autonome",
  cefr:"A2",
  description:"Raconter, nuancer, anticiper et enchaîner des idées avec plus de naturel.",
  units:[
    {
      id:"it-a2-1",title:"L’imperfetto",goal:"Décrire une habitude, un décor ou une situation passée avec l’imparfait italien.",
      scene:{title:"Quand j’étais enfant",lines:[
        {speaker:"Anna",t:"Da bambina vivevo in campagna.",fr:"Quand j’étais enfant, je vivais à la campagne."},
        {speaker:"Anna",t:"Andavo a scuola a piedi.",fr:"J’allais à l’école à pied."},
        {speaker:"Anna",t:"D'estate giocavo fuori ogni giorno.",fr:"L’été, je jouais dehors tous les jours."},
        {speaker:"Luca",t:"Avevi molti amici?",fr:"Tu avais beaucoup d’amis ?"}
      ]},
      grammar:[
        G("Quand utiliser l’imperfetto","L’imperfetto sert pour les habitudes, les descriptions, les états et les actions en cours dans le passé.",[["Da piccolo giocavo a calcio.","Petit, je jouais au football."],["Faceva caldo.","Il faisait chaud."]]),
        G("Formation régulière","On part de la base en -av-, -ev-, -iv- : parlare → parlavo ; credere → credevo ; dormire → dormivo.",[["parlavo","je parlais"],["credevamo","nous croyions"],["dormivano","ils dormaient"]])
      ],
      verbs:[
        VB("parlare","parler",{"io":"parlavo","tu":"parlavi","lui/lei":"parlava","noi":"parlavamo","voi":"parlavate","loro":"parlavano"},"Imperfetto régulier en -are.","imperfetto","imperfetto"),
        VB("essere","être",{"io":"ero","tu":"eri","lui/lei":"era","noi":"eravamo","voi":"eravate","loro":"erano"},"Essere est irrégulier à l’imperfetto.","imperfetto","imperfetto")
      ],
      vocab:[
        V("da bambino / bambina","quand j'étais enfant"),V("ogni giorno","chaque jour"),V("spesso","souvent"),V("sempre","toujours"),
        V("la campagna","la campagne","la","campagna"),V("la scuola","l'école","la","scuola"),V("a piedi","à pied"),V("d'estate","en été"),V("quando","quand"),V("mentre","pendant que")
      ],
      phrases:[
        P("Da bambino vivevo a Roma.","Quand j’étais enfant, je vivais à Rome."),P("Andavo a scuola a piedi.","J’allais à l’école à pied."),
        P("Faceva sempre caldo.","Il faisait toujours chaud."),P("Avevo molti amici.","J’avais beaucoup d’amis."),
        P("La sera leggevamo insieme.","Le soir, nous lisions ensemble."),P("Ero molto timido.","J’étais très timide.")
      ],
      drills:[
        M("L’imperfetto sert surtout à :",["décrire une habitude passée","annoncer une action future","donner un ordre"],"décrire une habitude passée","Habitudes, descriptions et arrière-plan.","tenses"),
        M("Complète : « Io parl___ »",["avo","avi","ava"],"avo","parlare → parlavo.","conjugation"),
        M("Imperfetto de essere avec io :",["ero","sono","fui"],"ero","Essere est irrégulier : ero, eri, era…","conjugation")
      ],
      encounter:{prompts:[
        Q("Dis : « Quand j’étais enfant, j’habitais à Rome. »","Da bambino vivevo a Roma.","Imperfetto pour une situation durable passée."),
        Q("Dis : « J’allais à l’école à pied. »","Andavo a scuola a piedi.","Habitude passée."),
        Q("Dis : « J’étais très timide. »","Ero molto timido.","Essere à l’imperfetto : ero.")
      ]}
    },
    {
      id:"it-a2-2",title:"Imperfetto o passato prossimo?",goal:"Choisir entre arrière-plan et événement terminé pour raconter une histoire clairement.",
      scene:{title:"Une soirée interrompue",lines:[
        {speaker:"Marta",t:"Ieri cenavo con amici quando hai chiamato.",fr:"Hier je dînais avec des amis quand tu as appelé."},
        {speaker:"Paolo",t:"Scusa! Non sapevo che eri fuori.",fr:"Désolé ! Je ne savais pas que tu étais sortie."},
        {speaker:"Marta",t:"Nessun problema. Abbiamo finito la cena alle dieci.",fr:"Pas de problème. Nous avons terminé le dîner à dix heures."},
        {speaker:"Paolo",t:"Poi cosa avete fatto?",fr:"Puis qu’avez-vous fait ?"}
      ]},
      grammar:[
        G("Arrière-plan vs événement","Imperfetto = décor, habitude, action en cours. Passato prossimo = événement terminé, changement, action ponctuelle.",[["Pioveva quando sono uscito.","Il pleuvait quand je suis sorti."],["Dormivo quando hai chiamato.","Je dormais quand tu as appelé."]]),
        G("Indices utiles","sempre, spesso, ogni giorno poussent souvent vers l’imperfetto ; ieri alle otto / poi / improvvisamente introduisent souvent des événements au passato prossimo.",[["Ogni estate andavamo al mare.","Chaque été nous allions à la mer."],["Ieri siamo andati al mare.","Hier nous sommes allés à la mer."]])
      ],
      verbs:[
        VB("sapere","savoir",{"io":"sapevo","tu":"sapevi","lui/lei":"sapeva","noi":"sapevamo","voi":"sapevate","loro":"sapevano"},"Imperfetto très courant.","imperfetto","imperfetto"),
        VB("finire","finir",{"io":"ho finito","tu":"hai finito","lui/lei":"ha finito","noi":"abbiamo finito","voi":"avete finito","loro":"hanno finito"},"Passato prossimo avec avere.","passato prossimo","passato prossimo")
      ],
      vocab:[
        V("all'improvviso","tout à coup"),V("mentre","pendant que"),V("quando","quand"),V("poi","puis"),V("prima","avant"),
        V("dopo","après"),V("succedere","se passer"),V("chiamare","appeler"),V("finire","finir"),V("piovere","pleuvoir")
      ],
      phrases:[
        P("Dormivo quando hai chiamato.","Je dormais quand tu as appelé."),P("Pioveva quando siamo usciti.","Il pleuvait quand nous sommes sortis."),
        P("Ogni estate andavamo al mare.","Chaque été nous allions à la mer."),P("Ieri siamo andati al mare.","Hier nous sommes allés à la mer."),
        P("Mentre lavoravo, è arrivato Marco.","Pendant que je travaillais, Marco est arrivé."),P("Poi abbiamo finito la cena.","Puis nous avons terminé le dîner.")
      ],
      drills:[
        M("« Ogni giorno » avec une habitude passée appelle plutôt :",["imperfetto","passato prossimo"],"imperfetto","Répétition/habitude.","tenses"),
        M("Une action ponctuelle qui interrompt une action en cours prend souvent :",["passato prossimo","imperfetto"],"passato prossimo","L’action en cours est à l’imperfetto, l’événement au passato prossimo.","tenses"),
        M("Choisis : « Mentre ___, è arrivato Luca. »",["lavoravo","ho lavorato"],"lavoravo","Mentre introduit ici l’action en cours.","tenses")
      ],
      encounter:{prompts:[
        Q("Dis : « Je dormais quand tu as appelé. »","Dormivo quando hai chiamato.","Imperfetto + evento ponctuel."),
        Q("Dis : « Il pleuvait quand nous sommes sortis. »","Pioveva quando siamo usciti.","Arrière-plan + événement."),
        Q("Dis : « Chaque été nous allions à la mer. »","Ogni estate andavamo al mare.","Habitude passée.")
      ]}
    },
    {
      id:"it-a2-3",title:"Lo, la, li, le",goal:"Remplacer un complément d’objet direct déjà connu pour éviter les répétitions.",
      scene:{title:"Tu l’as vu ?",lines:[
        {speaker:"Giulia",t:"Hai visto il nuovo film?",fr:"Tu as vu le nouveau film ?"},
        {speaker:"Marco",t:"Sì, l'ho visto ieri.",fr:"Oui, je l’ai vu hier."},
        {speaker:"Giulia",t:"E le foto?",fr:"Et les photos ?"},
        {speaker:"Marco",t:"Le ho guardate stamattina.",fr:"Je les ai regardées ce matin."}
      ]},
      grammar:[
        G("Pronoms directs","lo = le, la = la, li = les masculin, le = les féminin. Ils se placent normalement avant le verbe conjugué.",[["Lo conosco.","Je le connais."],["La vedo.","Je la vois."],["Li compro.","Je les achète."]]),
        G("Avec le passato prossimo","lo/la deviennent souvent l’ devant ho/hai/ha. Avec un pronom direct placé avant, le participe peut s’accorder : l’ho vista, le ho comprate.",[["L'ho visto.","Je l’ai vu."],["L'ho vista.","Je l’ai vue."],["Le ho comprate.","Je les ai achetées."]])
      ],
      verbs:[
        VB("vedere","voir",{"io":"vedo","tu":"vedi","lui/lei":"vede","noi":"vediamo","voi":"vedete","loro":"vedono"},"Présent régulier."),
        VB("comprare","acheter",{"io":"compro","tu":"compri","lui/lei":"compra","noi":"compriamo","voi":"comprate","loro":"comprano"},"Présent régulier.")
      ],
      vocab:[
        V("lo","le (pronom)"),V("la","la (pronom)"),V("li","les (masculin)"),V("le","les (féminin)"),
        V("conoscere","connaître"),V("vedere","voir"),V("comprare","acheter"),V("guardare","regarder"),V("trovare","trouver"),V("aspettare","attendre")
      ],
      phrases:[
        P("Lo conosco bene.","Je le connais bien."),P("La vedo domani.","Je la vois demain."),P("Li compro oggi.","Je les achète aujourd’hui."),
        P("Le aspetto qui.","Je les attends ici."),P("L'ho visto ieri.","Je l’ai vu hier."),P("L'ho vista stamattina.","Je l’ai vue ce matin.")
      ],
      drills:[
        M("Remplace « il libro » par un pronom direct :",["lo","la","gli"],"lo","Nom masculin singulier : lo.","grammar"),
        M("Remplace « le chiavi » par un pronom direct :",["le","li","la"],"le","Féminin pluriel : le.","grammar"),
        M("Une femme a été vue : « L'ho ___ »",["visto","vista"],"vista","Le participe peut s’accorder avec le pronom direct féminin antéposé.","agreement")
      ],
      encounter:{prompts:[
        Q("Dis : « Je le connais bien. »","Lo conosco bene.","lo avant le verbe."),
        Q("Dis : « Je la vois demain. »","La vedo domani.","la avant vedo."),
        Q("Dis : « Je l’ai vue ce matin. »","L'ho vista stamattina.","l’ + ho + vista.")
      ]}
    },
    {
      id:"it-a2-4",title:"Gli, le, mi, ti",goal:"Utiliser les pronoms indirects pour dire à qui l’on parle, donne, écrit ou téléphone.",
      scene:{title:"Messages",lines:[
        {speaker:"Luca",t:"Hai scritto a Marta?",fr:"Tu as écrit à Marta ?"},
        {speaker:"Sara",t:"Sì, le ho scritto ieri.",fr:"Oui, je lui ai écrit hier."},
        {speaker:"Luca",t:"E a Paolo?",fr:"Et à Paolo ?"},
        {speaker:"Sara",t:"Gli telefono stasera.",fr:"Je lui téléphone ce soir."}
      ]},
      grammar:[
        G("Pronoms indirects","mi = à moi, ti = à toi, gli = à lui, le = à elle, ci = à nous, vi = à vous. Ils se placent avant le verbe.",[["Mi scrive.","Il/elle m’écrit."],["Gli telefono.","Je lui téléphone."],["Le parlo.","Je lui parle."]]),
        G("Verbes fréquents avec a","telefonare a, scrivere a, parlare a, dare a utilisent souvent un complément indirect.",[["Scrivo a Luca.","J’écris à Luca."],["Gli scrivo.","Je lui écris."]])
      ],
      verbs:[
        VB("scrivere","écrire",{"io":"scrivo","tu":"scrivi","lui/lei":"scrive","noi":"scriviamo","voi":"scrivete","loro":"scrivono"},"Verbe fréquent en -ere."),
        VB("telefonare","téléphoner",{"io":"telefono","tu":"telefoni","lui/lei":"telefona","noi":"telefoniamo","voi":"telefonate","loro":"telefonano"},"Se construit avec a : telefonare a qualcuno.")
      ],
      vocab:[
        V("mi","à moi / me"),V("ti","à toi / te"),V("gli","à lui"),V("le","à elle"),V("ci","à nous"),V("vi","à vous"),
        V("scrivere","écrire"),V("telefonare","téléphoner"),V("dare","donner"),V("spiegare","expliquer")
      ],
      phrases:[
        P("Gli telefono stasera.","Je lui téléphone ce soir (à lui)."),P("Le scrivo domani.","Je lui écris demain (à elle)."),
        P("Mi dai una mano?","Tu me donnes un coup de main ?"),P("Ti spiego tutto.","Je t’explique tout."),
        P("Ci mandano un messaggio.","Ils nous envoient un message."),P("Vi porto il caffè.","Je vous apporte le café.")
      ],
      drills:[
        M("« à lui » comme pronom indirect :",["gli","lo","le"],"gli","Gli = à lui.","grammar"),
        M("« à elle » comme pronom indirect :",["le","la","gli"],"le","Le = à elle.","grammar"),
        M("Complète : « ___ telefono stasera » = je lui téléphone (à lui)",["Gli","Lo","La"],"Gli","Telefonare se construit avec a ; on remplace a lui par gli.","grammar")
      ],
      encounter:{prompts:[
        Q("Dis : « Je lui téléphone ce soir » en parlant d’un homme.","Gli telefono stasera.","gli = à lui."),
        Q("Dis : « Je lui écris demain » en parlant d’une femme.","Le scrivo domani.","le = à elle."),
        Q("Demande : « Tu me donnes un coup de main ? »","Mi dai una mano?","Expression courante.")
      ]}
    },
    {
      id:"it-a2-5",title:"Il futuro semplice",goal:"Former le futur simple et parler de projets, prévisions et hypothèses.",
      scene:{title:"Plans pour l’été",lines:[
        {speaker:"Elisa",t:"Quest'estate andrò in Sicilia.",fr:"Cet été, j’irai en Sicile."},
        {speaker:"Marco",t:"Quanto tempo resterai?",fr:"Combien de temps resteras-tu ?"},
        {speaker:"Elisa",t:"Resterò due settimane e visiterò Palermo.",fr:"Je resterai deux semaines et visiterai Palerme."},
        {speaker:"Marco",t:"Sarà bellissimo!",fr:"Ce sera magnifique !"}
      ]},
      grammar:[
        G("Formation","Pour beaucoup de verbes, l’infinitif perd son -e final et prend -ò, -ai, -à, -emo, -ete, -anno. Les verbes en -are passent généralement par -er- : parlare → parlerò.",[["parlerò","je parlerai"],["prenderai","tu prendras"],["dormiranno","ils dormiront"]]),
        G("Radicaux irréguliers","essere → sar-, avere → avr-, andare → andr-, fare → far-, venire → verr-.",[["sarò","je serai"],["andrò","j’irai"],["verremo","nous viendrons"]])
      ],
      verbs:[
        VB("essere","être",{"io":"sarò","tu":"sarai","lui/lei":"sarà","noi":"saremo","voi":"sarete","loro":"saranno"},"Radical futur sar-.","futuro semplice","futur simple"),
        VB("andare","aller",{"io":"andrò","tu":"andrai","lui/lei":"andrà","noi":"andremo","voi":"andrete","loro":"andranno"},"Radical futur andr-.","futuro semplice","futur simple")
      ],
      vocab:[
        V("domani","demain"),V("la prossima settimana","la semaine prochaine"),V("quest'estate","cet été"),V("l'anno prossimo","l'année prochaine"),
        V("restare","rester"),V("visitare","visiter"),V("partire","partir"),V("tornare","revenir"),V("forse","peut-être"),V("sicuramente","certainement")
      ],
      phrases:[
        P("Domani lavorerò da casa.","Demain je travaillerai de chez moi."),P("Andrò in Sicilia.","J’irai en Sicile."),P("Sarà una bella giornata.","Ce sera une belle journée."),
        P("Resteremo due settimane.","Nous resterons deux semaines."),P("Quando tornerai?","Quand reviendras-tu ?"),P("Forse verranno domani.","Peut-être qu’ils viendront demain.")
      ],
      drills:[
        M("Terminaison futur avec io :",["-ò","-ai","-à"],"-ò","parlerò, dormirò.","conjugation"),
        M("Futur de essere avec io :",["sarò","esserò","sono"],"sarò","Radical irrégulier sar-.","conjugation"),
        M("Futur de andare avec noi :",["andremo","anderemo","andiamo"],"andremo","Radical andr-.","conjugation")
      ],
      encounter:{prompts:[
        Q("Dis : « Demain je travaillerai de chez moi. »","Domani lavorerò da casa.","Futur simple."),
        Q("Dis : « J’irai en Sicile. »","Andrò in Sicilia.","andare → andrò."),
        Q("Demande : « Quand reviendras-tu ? »","Quando tornerai?","tornare → tornerai.")
      ]}
    },
    {
      id:"it-a2-6",title:"Vorrei, potrei, dovrei",goal:"Utiliser le conditionnel présent pour demander poliment, conseiller et évoquer une possibilité.",
      scene:{title:"Demander conseil",lines:[
        {speaker:"Cliente",t:"Vorrei cambiare camera.",fr:"Je voudrais changer de chambre."},
        {speaker:"Receptionist",t:"Potremmo darle una camera più tranquilla.",fr:"Nous pourrions vous donner une chambre plus calme."},
        {speaker:"Cliente",t:"Sarebbe perfetto.",fr:"Ce serait parfait."},
        {speaker:"Receptionist",t:"Dovrebbe essere pronta tra un'ora.",fr:"Elle devrait être prête dans une heure."}
      ]},
      grammar:[
        G("Conditionnel présent","Il sert à la politesse, au conseil, au souhait et à la possibilité. Les terminaisons sont -ei, -esti, -ebbe, -emmo, -este, -ebbero.",[["vorrei","je voudrais"],["potresti","tu pourrais"],["sarebbe","ce serait"]]),
        G("Conseiller avec dovresti","Dovresti + infinitif = tu devrais… ; Potresti + infinitif = tu pourrais…",[["Dovresti riposare.","Tu devrais te reposer."],["Potresti chiamare Anna.","Tu pourrais appeler Anna."]])
      ],
      verbs:[
        VB("essere","être",{"io":"sarei","tu":"saresti","lui/lei":"sarebbe","noi":"saremmo","voi":"sareste","loro":"sarebbero"},"Conditionnel irrégulier sur sar-.","condizionale presente","conditionnel présent"),
        VB("potere","pouvoir",{"io":"potrei","tu":"potresti","lui/lei":"potrebbe","noi":"potremmo","voi":"potreste","loro":"potrebbero"},"Conditionnel sur potr-.","condizionale presente","conditionnel présent")
      ],
      vocab:[
        V("vorrei","je voudrais"),V("potrei","je pourrais"),V("dovrei","je devrais"),V("sarebbe","ce serait"),V("consigliare","conseiller"),
        V("cambiare","changer"),V("tranquillo","calme"),V("possibile","possible"),V("meglio","mieux"),V("perfetto","parfait")
      ],
      phrases:[
        P("Vorrei cambiare camera.","Je voudrais changer de chambre."),P("Potresti aiutarmi?","Pourrais-tu m’aider ?"),P("Dovresti riposare.","Tu devrais te reposer."),
        P("Sarebbe perfetto.","Ce serait parfait."),P("Potremmo partire domani.","Nous pourrions partir demain."),P("Vorrei un'informazione.","Je voudrais un renseignement.")
      ],
      drills:[
        M("Forme la plus polie pour exprimer un souhait :",["voglio","vorrei","vorrò"],"vorrei","Le conditionnel adoucit la demande.","tenses"),
        M("« Tu devrais » :",["devi","dovresti","dovrai"],"dovresti","Conditionnel de dovere.","conjugation"),
        M("« Ce serait » :",["sarà","sarebbe","era"],"sarebbe","Conditionnel de essere.","conjugation")
      ],
      encounter:{prompts:[
        Q("Demande poliment : « Je voudrais changer de chambre. »","Vorrei cambiare camera.","Vorrei + infinitif."),
        Q("Conseille : « Tu devrais te reposer. »","Dovresti riposare.","Conditionnel de dovere."),
        Q("Dis : « Ce serait parfait. »","Sarebbe perfetto.","Essere au conditionnel.")
      ]}
    },
    {
      id:"it-a2-7",title:"Confrontare e descrivere",goal:"Comparer personnes, objets et situations avec più, meno, come et les superlatifs.",
      scene:{title:"Choisir un appartement",lines:[
        {speaker:"Agente",t:"Questo appartamento è più grande dell'altro.",fr:"Cet appartement est plus grand que l’autre."},
        {speaker:"Cliente",t:"Sì, ma è anche più caro.",fr:"Oui, mais il est aussi plus cher."},
        {speaker:"Agente",t:"L'altro è meno centrale, però è molto tranquillo.",fr:"L’autre est moins central, mais il est très calme."},
        {speaker:"Cliente",t:"Qual è il più economico?",fr:"Lequel est le moins cher ?"}
      ]},
      grammar:[
        G("Comparatif","più + adjectif = plus… ; meno + adjectif = moins… ; così… come / tanto… quanto = aussi… que.",[["più grande","plus grand"],["meno caro","moins cher"],["così veloce come","aussi rapide que"]]),
        G("Superlatif relatif","il/la più + adjectif = le/la plus… ; il/la meno + adjectif = le/la moins…",[["la più bella","la plus belle"],["il meno caro","le moins cher"]])
      ],
      vocab:[
        V("grande","grand"),V("piccolo","petit"),V("caro","cher"),V("economico","bon marché"),V("veloce","rapide"),
        V("lento","lent"),V("tranquillo","calme"),V("rumoroso","bruyant"),V("centrale","central"),V("comodo","pratique / confortable")
      ],
      phrases:[
        P("Questo è più grande.","Celui-ci est plus grand."),P("Quello è meno caro.","Celui-là est moins cher."),P("È così comodo come l'altro.","Il est aussi pratique que l’autre."),
        P("È il più economico.","C’est le moins cher."),P("Roma è più grande di Firenze.","Rome est plus grande que Florence."),P("Questa zona è molto tranquilla.","Ce quartier est très calme.")
      ],
      drills:[
        M("« plus grand » :",["più grande","meno grande","grande più"],"più grande","più précède l’adjectif.","grammar"),
        M("« moins cher » :",["meno caro","più caro","caro meno"],"meno caro","meno + adjectif.","grammar"),
        M("« le plus économique » :",["il più economico","più il economico","il economico più"],"il più economico","Article + più + adjectif.","grammar")
      ],
      encounter:{prompts:[
        Q("Dis : « Celui-ci est plus grand. »","Questo è più grande.","Comparatif avec più."),
        Q("Dis : « Celui-là est moins cher. »","Quello è meno caro.","Comparatif avec meno."),
        Q("Demande : « Lequel est le moins cher ? »","Qual è il più economico?","Formule naturelle pour comparer.")
      ]}
    },
    {
      id:"it-a2-8",title:"Parlare con più naturalezza",goal:"Relier les idées, expliquer une raison, décrire une action en cours et gérer des situations pratiques.",
      scene:{title:"Une journée chargée",lines:[
        {speaker:"Paolo",t:"Non posso uscire perché sto lavorando.",fr:"Je ne peux pas sortir parce que je suis en train de travailler."},
        {speaker:"Marta",t:"Capisco. Quando finisci, mi chiami?",fr:"Je comprends. Quand tu finis, tu m’appelles ?"},
        {speaker:"Paolo",t:"Certo. Il progetto che sto preparando è quasi finito.",fr:"Bien sûr. Le projet que je prépare est presque terminé."},
        {speaker:"Marta",t:"Allora ci vediamo più tardi.",fr:"Alors on se voit plus tard."}
      ]},
      grammar:[
        G("stare + gerundio","Pour insister sur une action en cours : stare conjugué + gérondif. -are → -ando ; -ere/-ire → -endo.",[["Sto lavorando.","Je suis en train de travailler."],["Stiamo mangiando.","Nous sommes en train de manger."]]),
        G("Relier avec che, perché, quindi","che peut introduire une relative simple ; perché donne la cause ; quindi donne la conséquence.",[["Il libro che leggo…","Le livre que je lis…"],["Resto a casa perché piove.","Je reste chez moi parce qu’il pleut."],["Piove, quindi resto a casa.","Il pleut, donc je reste chez moi."]])
      ],
      verbs:[
        VB("stare","être / se trouver",{"io":"sto","tu":"stai","lui/lei":"sta","noi":"stiamo","voi":"state","loro":"stanno"},"Auxiliaire de la forme progressive stare + gerundio."),
        VB("lavorare","travailler",{"io":"sto lavorando","tu":"stai lavorando","lui/lei":"sta lavorando","noi":"stiamo lavorando","voi":"state lavorando","loro":"stanno lavorando"},"Forme progressive.","stare + gerundio","progressif")
      ],
      vocab:[
        V("perché","parce que / pourquoi"),V("quindi","donc"),V("allora","alors"),V("mentre","pendant que"),V("quasi","presque"),
        V("ancora","encore"),V("già","déjà"),V("il progetto","le projet","il","progetto"),V("la riunione","la réunion","la","riunione"),V("più tardi","plus tard")
      ],
      phrases:[
        P("Sto lavorando.","Je suis en train de travailler."),P("Resto a casa perché piove.","Je reste chez moi parce qu’il pleut."),
        P("Piove, quindi resto a casa.","Il pleut, donc je reste chez moi."),P("Il progetto che preparo è importante.","Le projet que je prépare est important."),
        P("Ci vediamo più tardi.","On se voit plus tard."),P("Ho già finito.","J’ai déjà fini.")
      ],
      drills:[
        M("Gérondif régulier de parlare :",["parlando","parlendo","parlato"],"parlando","-are → -ando.","tenses"),
        M("Gérondif régulier de dormire :",["dormendo","dormando","dormito"],"dormendo","-ire → -endo.","tenses"),
        M("Mot qui introduit une cause :",["perché","quindi","allora"],"perché","perché = parce que / pourquoi.","grammar"),
        M("Mot qui exprime une conséquence :",["quindi","mentre","che"],"quindi","quindi = donc.","grammar")
      ],
      encounter:{prompts:[
        Q("Dis : « Je suis en train de travailler. »","Sto lavorando.","stare + gerundio."),
        Q("Dis : « Je reste chez moi parce qu’il pleut. »","Resto a casa perché piove.","perché introduit la cause."),
        Q("Dis : « Il pleut, donc je reste chez moi. »","Piove, quindi resto a casa.","quindi introduit la conséquence.")
      ]}
    }
  ]
};
})();