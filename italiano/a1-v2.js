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

window.IT_A1={
  id:"a1",
  label:"A1 essentiel",
  cefr:"A1",
  description:"Construire une autonomie réelle dans les situations quotidiennes.",
  units:[
    {
      id:"it-a1-1",title:"Presentarsi",goal:"Se présenter, donner son origine, sa profession et son lieu de vie avec des phrases naturelles.",
      scene:{title:"Une première rencontre",lines:[
        {speaker:"Giulia",t:"Ciao, mi chiamo Giulia. E tu?",fr:"Salut, je m’appelle Giulia. Et toi ?"},
        {speaker:"Thomas",t:"Mi chiamo Thomas. Sono francese.",fr:"Je m’appelle Thomas. Je suis français."},
        {speaker:"Giulia",t:"Dove abiti?",fr:"Où habites-tu ?"},
        {speaker:"Thomas",t:"Abito a Losanna, in Svizzera. Lavoro in ospedale.",fr:"J’habite à Lausanne, en Suisse. Je travaille à l’hôpital."}
      ]},
      grammar:[
        G("Chiamarsi","Chiamarsi est pronominal : mi chiamo, ti chiami, si chiama… Il sert à donner et demander le nom.",[["Mi chiamo Sofia.","Je m’appelle Sofia."],["Come ti chiami?","Comment t’appelles-tu ?"]]),
        G("a + ville, in + pays","On emploie normalement a avec une ville et in avec un pays ou une grande région.",[["Abito a Roma.","J’habite à Rome."],["Vivo in Italia.","Je vis en Italie."]])
      ],
      verbs:[
        VB("chiamarsi","s’appeler",{"io":"mi chiamo","tu":"ti chiami","lui/lei":"si chiama","noi":"ci chiamiamo","voi":"vi chiamate","loro":"si chiamano"},"Verbe pronominal très fréquent."),
        VB("abitare","habiter",{"io":"abito","tu":"abiti","lui/lei":"abita","noi":"abitiamo","voi":"abitate","loro":"abitano"},"Verbe régulier en -are.")
      ],
      vocab:[
        V("il nome","le prénom / nom","il","nome"),V("la città","la ville","la","città"),V("il paese","le pays","il","paese"),
        V("francese","français(e)"),V("italiano","italien"),V("italiana","italienne"),V("svizzero","suisse (m.)"),V("svizzera","suisse (f.)"),
        V("il lavoro","le travail","il","lavoro"),V("l'ospedale","l'hôpital","l'","ospedale")
      ],
      phrases:[
        P("Mi chiamo Thomas.","Je m’appelle Thomas."),P("Come ti chiami?","Comment t’appelles-tu ?"),P("Sono francese.","Je suis français(e)."),
        P("Abito a Losanna.","J’habite à Lausanne."),P("Vivo in Svizzera.","Je vis en Suisse."),P("Lavoro in ospedale.","Je travaille à l’hôpital.")
      ],
      drills:[
        M("Complète : « Io ___ Thomas. »",["mi chiamo","ti chiami","si chiama"],"mi chiamo","Avec io : mi chiamo.","conjugation"),
        M("Quelle préposition avec une ville ?",["a","in","da"],"a","a Roma, a Milano, a Losanna.","grammar"),
        M("Quelle préposition avec un pays ?",["a","in","su"],"in","in Italia, in Svizzera.","grammar"),
        T("Traduis : « Je m’appelle Anna et j’habite à Genève. »",["mi chiamo anna e abito a ginevra"],"Mi chiamo Anna e abito a Ginevra.","Les deux verbes sont à la première personne.")
      ],
      encounter:{prompts:[
        Q("Présente-toi : nom + nationalité.","Mi chiamo … Sono …","Deux phrases courtes sont naturelles."),
        Q("Demande le nom de ton interlocuteur.","Come ti chiami?","Question de base avec chiamarsi."),
        Q("Dis où tu habites : « J’habite à Lausanne, en Suisse. »","Abito a Losanna, in Svizzera.","a + ville ; in + pays.")
      ]}
    },
    {
      id:"it-a1-2",title:"La famiglia",goal:"Présenter sa famille et utiliser les possessifs avec les articles au pluriel.",
      scene:{title:"Photos de famille",lines:[
        {speaker:"Luca",t:"Questa è mia madre e questo è mio padre.",fr:"Voici ma mère et voici mon père."},
        {speaker:"Emma",t:"Hai fratelli o sorelle?",fr:"Tu as des frères ou des sœurs ?"},
        {speaker:"Luca",t:"Sì, ho un fratello e due sorelle.",fr:"Oui, j’ai un frère et deux sœurs."},
        {speaker:"Emma",t:"I tuoi genitori abitano qui?",fr:"Tes parents habitent ici ?"}
      ]},
      grammar:[
        G("Possessifs","mio/mia, tuo/tua, suo/sua s’accordent avec la chose possédée, pas avec le possesseur. Avec un proche au singulier, l’article est souvent omis : mia madre.",[["mio padre","mon père"],["mia sorella","ma sœur"],["i miei genitori","mes parents"]]),
        G("Articles définis au pluriel","il → i ; lo/l’ masculin → gli ; la/l’ féminin → le.",[["i fratelli","les frères"],["gli amici","les amis"],["le sorelle","les sœurs"]])
      ],
      vocab:[
        V("la madre","la mère","la","madre"),V("il padre","le père","il","padre"),V("il fratello","le frère","il","fratello"),V("la sorella","la sœur","la","sorella"),
        V("i genitori","les parents","i","genitori"),V("il figlio","le fils","il","figlio"),V("la figlia","la fille","la","figlia"),V("il marito","le mari","il","marito"),
        V("la moglie","l'épouse","la","moglie"),V("la famiglia","la famille","la","famiglia")
      ],
      phrases:[
        P("Mia madre si chiama Laura.","Ma mère s’appelle Laura."),P("Mio padre lavora a Roma.","Mon père travaille à Rome."),P("Ho un fratello.","J’ai un frère."),
        P("Ho due sorelle.","J’ai deux sœurs."),P("I miei genitori abitano qui.","Mes parents habitent ici."),P("La mia famiglia è grande.","Ma famille est grande.")
      ],
      drills:[
        M("Complète : « ___ madre »",["mio","mia","miei"],"mia","Madre est féminin singulier.","agreement"),
        M("Complète : « ___ miei genitori »",["il","i","gli"],"i","Genitori est masculin pluriel régulier : i genitori.","articles"),
        M("Article pluriel de « l'amico » :",["i","gli","le"],"gli","l’amico → gli amici.","articles")
      ],
      encounter:{prompts:[
        Q("Dis : « J’ai un frère et une sœur. »","Ho un fratello e una sorella.","Avere exprime la possession."),
        Q("Dis : « Ma mère s’appelle Laura. »","Mia madre si chiama Laura.","Avec un proche au singulier, pas d’article ici."),
        Q("Demande : « Tu as des frères ou des sœurs ? »","Hai fratelli o sorelle?","Question directe avec avere.")
      ]}
    },
    {
      id:"it-a1-3",title:"La giornata",goal:"Décrire sa routine, dire l’heure et utiliser les verbes pronominaux courants.",
      scene:{title:"Une journée normale",lines:[
        {speaker:"Nora",t:"Mi sveglio alle sette.",fr:"Je me réveille à sept heures."},
        {speaker:"Nora",t:"Faccio colazione e poi vado al lavoro.",fr:"Je prends le petit-déjeuner puis je vais au travail."},
        {speaker:"Nora",t:"Pranzo a mezzogiorno.",fr:"Je déjeune à midi."},
        {speaker:"Nora",t:"La sera torno a casa e mi rilasso.",fr:"Le soir, je rentre chez moi et je me détends."}
      ]},
      grammar:[
        G("Verbes pronominaux","Le pronom change avec la personne : mi, ti, si, ci, vi, si.",[["mi sveglio","je me réveille"],["ti alzi","tu te lèves"],["ci rilassiamo","nous nous détendons"]]),
        G("Dire l’heure","È l’una pour une heure ; Sono le… pour les autres. Pour situer une action : alle otto, a mezzogiorno.",[["Sono le otto.","Il est huit heures."],["Lavoro alle nove.","Je travaille à neuf heures."]])
      ],
      verbs:[
        VB("svegliarsi","se réveiller",{"io":"mi sveglio","tu":"ti svegli","lui/lei":"si sveglia","noi":"ci svegliamo","voi":"vi svegliate","loro":"si svegliano"},"Pronominal régulier."),
        VB("andare","aller",{"io":"vado","tu":"vai","lui/lei":"va","noi":"andiamo","voi":"andate","loro":"vanno"},"Verbe irrégulier essentiel.")
      ],
      vocab:[
        V("la mattina","le matin","la","mattina"),V("il pomeriggio","l'après-midi","il","pomeriggio"),V("la sera","le soir","la","sera"),
        V("svegliarsi","se réveiller"),V("alzarsi","se lever"),V("fare colazione","prendre le petit-déjeuner"),V("pranzare","déjeuner"),
        V("cenare","dîner"),V("tornare","rentrer / retourner"),V("rilassarsi","se détendre")
      ],
      phrases:[
        P("Mi sveglio alle sette.","Je me réveille à sept heures."),P("Faccio colazione alle sette e mezza.","Je prends le petit-déjeuner à sept heures et demie."),
        P("Vado al lavoro alle otto.","Je vais au travail à huit heures."),P("Pranzo a mezzogiorno.","Je déjeune à midi."),
        P("La sera torno a casa.","Le soir, je rentre à la maison."),P("Mi rilasso dopo cena.","Je me détends après le dîner.")
      ],
      drills:[
        M("Complète : « Io ___ sveglio alle sette. »",["mi","ti","si"],"mi","Avec io : mi sveglio.","grammar"),
        M("Comment dit-on « Il est une heure » ?",["È l'una.","Sono le una.","È le una."],"È l'una.","Une heure est singulier.","grammar"),
        M("Complète : « Noi ___ al lavoro. »",["vado","andiamo","vanno"],"andiamo","Andare avec noi : andiamo.","conjugation")
      ],
      encounter:{prompts:[
        Q("Dis à quelle heure tu te réveilles.","Mi sveglio alle …","Structure : mi sveglio alle + heure."),
        Q("Dis : « Je vais au travail à huit heures. »","Vado al lavoro alle otto.","andare + al lavoro."),
        Q("Dis : « Le soir, je rentre à la maison. »","La sera torno a casa.","a casa sans article.")
      ]}
    },
    {
      id:"it-a1-4",title:"Al bar e al ristorante",goal:"Commander poliment, choisir un plat et demander l’addition.",
      scene:{title:"Au restaurant",lines:[
        {speaker:"Cameriere",t:"Buonasera. Cosa prende?",fr:"Bonsoir. Qu’est-ce que vous prenez ?"},
        {speaker:"Cliente",t:"Vorrei una pasta e un'acqua, per favore.",fr:"Je voudrais des pâtes et une eau, s’il vous plaît."},
        {speaker:"Cameriere",t:"Da bere altro?",fr:"Autre chose à boire ?"},
        {speaker:"Cliente",t:"No, grazie. E poi il conto, per favore.",fr:"Non merci. Et ensuite l’addition, s’il vous plaît."}
      ]},
      grammar:[
        G("Vorrei","Vorrei signifie « je voudrais ». C’est une formule polie à mémoriser comme un bloc avant même d’étudier le conditionnel.",[["Vorrei un caffè.","Je voudrais un café."],["Vorrei pagare.","Je voudrais payer."]]),
        G("Prendere","Prendere = prendre et s’utilise naturellement pour choisir au restaurant.",[["Prendo la pasta.","Je prends les pâtes."],["Prendiamo due pizze.","Nous prenons deux pizzas."]])
      ],
      verbs:[
        VB("prendere","prendre",{"io":"prendo","tu":"prendi","lui/lei":"prende","noi":"prendiamo","voi":"prendete","loro":"prendono"},"Très courant pour commander."),
        VB("volere","vouloir",{"io":"voglio","tu":"vuoi","lui/lei":"vuole","noi":"vogliamo","voi":"volete","loro":"vogliono"},"Pour commander poliment, préfère vorrei.")
      ],
      vocab:[
        V("il caffè","le café","il","caffè"),V("l'acqua","l'eau","l'","acqua"),V("la pasta","les pâtes","la","pasta"),V("la pizza","la pizza","la","pizza"),
        V("il pesce","le poisson","il","pesce"),V("la carne","la viande","la","carne"),V("il conto","l'addition","il","conto"),V("il menù","le menu","il","menù"),
        V("senza","sans"),V("con","avec")
      ],
      phrases:[
        P("Vorrei un caffè, per favore.","Je voudrais un café, s’il vous plaît."),P("Prendo la pasta.","Je prends les pâtes."),P("Senza formaggio, per favore.","Sans fromage, s’il vous plaît."),
        P("Un'acqua naturale, grazie.","Une eau plate, merci."),P("Il conto, per favore.","L’addition, s’il vous plaît."),P("Possiamo pagare con la carta?","Pouvons-nous payer par carte ?")
      ],
      drills:[
        M("Formule la plus polie pour commander :",["Voglio un caffè.","Vorrei un caffè.","Caffè!"],"Vorrei un caffè.","Vorrei est la formule standard et polie.","grammar"),
        M("Complète : « Noi ___ due pizze. »",["prendiamo","prendete","prendono"],"prendiamo","Prendere avec noi : prendiamo.","conjugation"),
        M("« senza cipolla » signifie :",["avec oignon","sans oignon","beaucoup d'oignon"],"sans oignon","senza = sans.","vocab")
      ],
      encounter:{prompts:[
        Q("Commande un café poliment.","Vorrei un caffè, per favore.","Vorrei + nom."),
        Q("Dis : « Je prends les pâtes. »","Prendo la pasta.","Prendere avec io : prendo."),
        Q("Demande l’addition.","Il conto, per favore.","Formule courte et naturelle.")
      ]}
    },
    {
      id:"it-a1-5",title:"In città",goal:"Dire ce qu’il y a, demander où se trouve un lieu et utiliser les prépositions articulées de base.",
      scene:{title:"Chercher la gare",lines:[
        {speaker:"Turista",t:"Scusi, dov'è la stazione?",fr:"Excusez-moi, où est la gare ?"},
        {speaker:"Passante",t:"È vicino al museo.",fr:"Elle est près du musée."},
        {speaker:"Turista",t:"C'è un bar vicino?",fr:"Il y a un bar à proximité ?"},
        {speaker:"Passante",t:"Sì, ci sono due bar davanti alla stazione.",fr:"Oui, il y a deux bars devant la gare."}
      ]},
      grammar:[
        G("c’è / ci sono","c’è = il y a au singulier ; ci sono = il y a au pluriel.",[["C'è un museo.","Il y a un musée."],["Ci sono due bar.","Il y a deux bars."]]),
        G("Prépositions articulées","a + il = al ; a + la = alla ; di + il = del ; in + il = nel. Elles fusionnent très souvent avec l’article.",[["al museo","au musée"],["alla stazione","à la gare"],["nel centro","dans le centre"]])
      ],
      vocab:[
        V("la stazione","la gare","la","stazione"),V("il museo","le musée","il","museo"),V("la farmacia","la pharmacie","la","farmacia"),V("il centro","le centre","il","centro"),
        V("la strada","la rue","la","strada"),V("a destra","à droite"),V("a sinistra","à gauche"),V("dritto","tout droit"),V("vicino","près"),V("lontano","loin")
      ],
      phrases:[
        P("Dov'è la stazione?","Où est la gare ?"),P("C'è un museo qui vicino.","Il y a un musée tout près."),P("Ci sono due bar.","Il y a deux bars."),
        P("È vicino al museo.","C’est près du musée."),P("Vai sempre dritto.","Va toujours tout droit."),P("Poi gira a sinistra.","Puis tourne à gauche.")
      ],
      drills:[
        M("Complète : « ___ un museo. »",["C'è","Ci sono"],"C'è","Singulier : c’è.","grammar"),
        M("Complète : « ___ due ristoranti. »",["C'è","Ci sono"],"Ci sono","Pluriel : ci sono.","grammar"),
        M("a + il =",["al","alla","nel"],"al","a + il fusionne en al.","grammar"),
        M("a + la =",["al","alla","della"],"alla","a + la fusionne en alla.","grammar")
      ],
      encounter:{prompts:[
        Q("Demande : « Où est la gare ? »","Dov'è la stazione?","Dove è se contracte couramment en dov’è."),
        Q("Dis : « Il y a deux bars. »","Ci sono due bar.","Pluriel : ci sono."),
        Q("Indique : « Tout droit puis à gauche. »","Dritto, poi a sinistra.","Expression très courante.")
      ]}
    },
    {
      id:"it-a1-6",title:"Mi piace",goal:"Exprimer ses goûts avec piacere et comprendre pourquoi le verbe s’accorde avec la chose appréciée.",
      scene:{title:"Goûts et loisirs",lines:[
        {speaker:"Sara",t:"Ti piace la musica italiana?",fr:"Tu aimes la musique italienne ?"},
        {speaker:"Leo",t:"Sì, mi piace molto.",fr:"Oui, j’aime beaucoup."},
        {speaker:"Sara",t:"E i film italiani?",fr:"Et les films italiens ?"},
        {speaker:"Leo",t:"Mi piacciono, ma preferisco i film francesi.",fr:"Je les aime, mais je préfère les films français."}
      ]},
      grammar:[
        G("mi piace / mi piacciono","Le sujet grammatical est la chose qui plaît. Singulier ou infinitif : piace ; pluriel : piacciono.",[["Mi piace il caffè.","J’aime le café."],["Mi piace viaggiare.","J’aime voyager."],["Mi piacciono i libri.","J’aime les livres."]]),
        G("ti / gli / le piace","Le petit pronom indique à qui la chose plaît : mi = à moi, ti = à toi, gli = à lui, le = à elle.",[["Ti piace Roma?","Tu aimes Rome ?"],["Le piace il tè.","Elle aime le thé."]])
      ],
      verbs:[
        VB("preferire","préférer",{"io":"preferisco","tu":"preferisci","lui/lei":"preferisce","noi":"preferiamo","voi":"preferite","loro":"preferiscono"},"Verbe en -ire avec insertion -isc- à certaines personnes.")
      ],
      vocab:[
        V("la musica","la musique","la","musica"),V("il film","le film","il","film"),V("il libro","le livre","il","libro"),V("lo sport","le sport","lo","sport"),
        V("viaggiare","voyager"),V("leggere","lire"),V("cucinare","cuisiner"),V("ascoltare","écouter"),V("preferire","préférer"),V("molto","beaucoup")
      ],
      phrases:[
        P("Mi piace la musica.","J’aime la musique."),P("Mi piacciono i libri.","J’aime les livres."),P("Ti piace viaggiare?","Tu aimes voyager ?"),
        P("Non mi piace il tè.","Je n’aime pas le thé."),P("Preferisco il caffè.","Je préfère le café."),P("Mi piace molto cucinare.","J’aime beaucoup cuisiner.")
      ],
      drills:[
        M("Complète : « Mi ___ il caffè. »",["piace","piacciono"],"piace","Le sujet il caffè est singulier.","grammar"),
        M("Complète : « Mi ___ i libri. »",["piace","piacciono"],"piacciono","Le sujet i libri est pluriel.","grammar"),
        M("Complète : « Io ___ il mare. »",["preferisco","preferisci","preferisce"],"preferisco","Preferire avec io : preferisco.","conjugation")
      ],
      encounter:{prompts:[
        Q("Dis : « J’aime la musique. »","Mi piace la musica.","Singulier : piace."),
        Q("Dis : « J’aime les livres. »","Mi piacciono i libri.","Pluriel : piacciono."),
        Q("Demande : « Tu aimes voyager ? »","Ti piace viaggiare?","Un infinitif se construit avec piace.")
      ]}
    },
    {
      id:"it-a1-7",title:"Posso, devo, voglio",goal:"Exprimer capacité, obligation et volonté avec les verbes modaux suivis d’un infinitif.",
      scene:{title:"Organiser le week-end",lines:[
        {speaker:"Marta",t:"Vuoi venire al cinema stasera?",fr:"Tu veux venir au cinéma ce soir ?"},
        {speaker:"Tom",t:"Vorrei, ma devo lavorare.",fr:"J’aimerais, mais je dois travailler."},
        {speaker:"Marta",t:"Puoi venire domani?",fr:"Tu peux venir demain ?"},
        {speaker:"Tom",t:"Sì, domani posso venire.",fr:"Oui, demain je peux venir."}
      ]},
      grammar:[
        G("Modal + infinitif","potere, dovere et volere se conjuguent puis sont suivis d’un infinitif non conjugué.",[["Posso venire.","Je peux venir."],["Devo lavorare.","Je dois travailler."],["Voglio partire.","Je veux partir."]]),
        G("Ordre souple","Un complément comme domani peut venir au début sans changer la conjugaison : Domani posso venire.",[["Oggi devo studiare.","Aujourd’hui je dois étudier."],["Domani vogliamo partire.","Demain nous voulons partir."]])
      ],
      verbs:[
        VB("potere","pouvoir",{"io":"posso","tu":"puoi","lui/lei":"può","noi":"possiamo","voi":"potete","loro":"possono"},"Modal irrégulier."),
        VB("dovere","devoir",{"io":"devo","tu":"devi","lui/lei":"deve","noi":"dobbiamo","voi":"dovete","loro":"devono"},"Modal irrégulier."),
        VB("volere","vouloir",{"io":"voglio","tu":"vuoi","lui/lei":"vuole","noi":"vogliamo","voi":"volete","loro":"vogliono"},"Modal irrégulier.")
      ],
      vocab:[
        V("potere","pouvoir"),V("dovere","devoir"),V("volere","vouloir"),V("venire","venir"),V("partire","partir"),
        V("restare","rester"),V("uscire","sortir"),V("stasera","ce soir"),V("domani","demain"),V("insieme","ensemble")
      ],
      phrases:[
        P("Posso venire domani.","Je peux venir demain."),P("Devo lavorare stasera.","Je dois travailler ce soir."),P("Voglio partire presto.","Je veux partir tôt."),
        P("Puoi aiutarmi?","Peux-tu m’aider ?"),P("Dobbiamo andare.","Nous devons partir."),P("Vogliamo cenare insieme.","Nous voulons dîner ensemble.")
      ],
      drills:[
        M("Après un modal, le deuxième verbe reste :",["à l'infinitif","au participe passé","conjugué à la même personne"],"à l'infinitif","Posso venire, devo lavorare.","grammar"),
        M("Complète : « Io ___ venire. »",["posso","puoi","può"],"posso","Potere avec io : posso.","conjugation"),
        M("Complète : « Noi ___ andare. »",["dobbiamo","dovete","devono"],"dobbiamo","Dovere avec noi : dobbiamo.","conjugation")
      ],
      encounter:{prompts:[
        Q("Dis : « Je dois travailler. »","Devo lavorare.","Modal + infinitif."),
        Q("Demande : « Peux-tu venir demain ? »","Puoi venire domani?","Potere avec tu : puoi."),
        Q("Dis : « Nous voulons dîner ensemble. »","Vogliamo cenare insieme.","Volere + infinitif.")
      ]}
    },
    {
      id:"it-a1-8",title:"Ieri: passato prossimo con avere",goal:"Raconter des actions terminées avec avere + participe passé.",
      scene:{title:"Hier",lines:[
        {speaker:"Elena",t:"Ieri ho lavorato fino alle sei.",fr:"Hier, j’ai travaillé jusqu’à six heures."},
        {speaker:"Marco",t:"Poi cosa hai fatto?",fr:"Puis qu’est-ce que tu as fait ?"},
        {speaker:"Elena",t:"Ho mangiato con amici e ho visto un film.",fr:"J’ai mangé avec des amis et j’ai vu un film."},
        {speaker:"Marco",t:"Hai dormito bene?",fr:"Tu as bien dormi ?"}
      ]},
      grammar:[
        G("Formation","Passato prossimo = auxiliaire avere au présent + participe passé. Régulier : -are → -ato ; -ere → -uto ; -ire → -ito.",[["ho parlato","j’ai parlé"],["ho creduto","j’ai cru"],["ho dormito","j’ai dormi"]]),
        G("Participes irréguliers fréquents","Certains participes doivent être mémorisés : fare → fatto, vedere → visto, prendere → preso, leggere → letto.",[["Ho fatto sport.","J’ai fait du sport."],["Ho visto Anna.","J’ai vu Anna."]])
      ],
      verbs:[
        VB("lavorare","travailler",{"io":"ho lavorato","tu":"hai lavorato","lui/lei":"ha lavorato","noi":"abbiamo lavorato","voi":"avete lavorato","loro":"hanno lavorato"},"Passato prossimo avec avere.","passato prossimo","passato prossimo"),
        VB("fare","faire",{"io":"ho fatto","tu":"hai fatto","lui/lei":"ha fatto","noi":"abbiamo fatto","voi":"avete fatto","loro":"hanno fatto"},"Participe irrégulier fatto.","passato prossimo","passato prossimo")
      ],
      vocab:[
        V("ieri","hier"),V("stamattina","ce matin"),V("ho lavorato","j'ai travaillé"),V("ho mangiato","j'ai mangé"),V("ho dormito","j'ai dormi"),
        V("ho fatto","j'ai fait"),V("ho visto","j'ai vu"),V("ho preso","j'ai pris"),V("prima","avant"),V("poi","puis")
      ],
      phrases:[
        P("Ieri ho lavorato.","Hier, j’ai travaillé."),P("Ho mangiato una pizza.","J’ai mangé une pizza."),P("Hai dormito bene?","Tu as bien dormi ?"),
        P("Abbiamo visto un film.","Nous avons vu un film."),P("Ho fatto sport.","J’ai fait du sport."),P("Poi ho preso il treno.","Puis j’ai pris le train.")
      ],
      drills:[
        M("Participe régulier d’un verbe en -are :",["-ato","-uto","-ito"],"-ato","parlare → parlato.","tenses"),
        M("Participe de fare :",["fato","fatto","facito"],"fatto","Fare → fatto.","tenses"),
        M("Complète : « Noi ___ visto un film. »",["abbiamo","siamo","avete"],"abbiamo","Vedere se construit ici avec avere.","conjugation")
      ],
      encounter:{prompts:[
        Q("Dis : « Hier, j’ai travaillé. »","Ieri ho lavorato.","Passato prossimo avec avere."),
        Q("Dis : « J’ai fait du sport. »","Ho fatto sport.","Fare → fatto."),
        Q("Demande : « Tu as bien dormi ? »","Hai dormito bene?","Avere avec tu : hai.")
      ]}
    },
    {
      id:"it-a1-9",title:"Sono andato / andata",goal:"Employer essere au passato prossimo avec les verbes de déplacement et accorder le participe.",
      scene:{title:"Un week-end à Florence",lines:[
        {speaker:"Giada",t:"Sabato sono andata a Firenze.",fr:"Samedi, je suis allée à Florence."},
        {speaker:"Paolo",t:"A che ora sei partita?",fr:"À quelle heure es-tu partie ?"},
        {speaker:"Giada",t:"Sono partita alle otto e sono arrivata alle dieci.",fr:"Je suis partie à huit heures et arrivée à dix heures."},
        {speaker:"Paolo",t:"Quando sei tornata?",fr:"Quand es-tu rentrée ?"}
      ]},
      grammar:[
        G("Essere comme auxiliaire","De nombreux verbes de déplacement/changement utilisent essere : andare, venire, arrivare, partire, tornare, entrare, uscire.",[["Sono arrivato.","Je suis arrivé."],["Siamo partiti.","Nous sommes partis."]]),
        G("Accord du participe","Avec essere, le participe s’accorde avec le sujet : -o/-a au singulier, -i/-e au pluriel.",[["Marco è arrivato.","Marco est arrivé."],["Anna è arrivata.","Anna est arrivée."],["Le ragazze sono partite.","Les filles sont parties."]])
      ],
      verbs:[
        VB("andare","aller",{"io m.":"sono andato","io f.":"sono andata","tu m.":"sei andato","tu f.":"sei andata","noi m./mixte":"siamo andati","noi f.":"siamo andate"},"Avec essere, le participe s’accorde.","passato prossimo","passato prossimo"),
        VB("arrivare","arriver",{"io m.":"sono arrivato","io f.":"sono arrivata","lui":"è arrivato","lei":"è arrivata","noi m./mixte":"siamo arrivati","noi f.":"siamo arrivate"},"Auxiliaire essere.","passato prossimo","passato prossimo")
      ],
      vocab:[
        V("andare","aller"),V("venire","venir"),V("partire","partir"),V("arrivare","arriver"),V("tornare","rentrer / revenir"),
        V("entrare","entrer"),V("uscire","sortir"),V("sabato","samedi"),V("domenica","dimanche"),V("il viaggio","le voyage","il","viaggio")
      ],
      phrases:[
        P("Sono andato a Roma.","Je suis allé à Rome."),P("Sono andata a Roma.","Je suis allée à Rome."),P("Siamo arrivati alle dieci.","Nous sommes arrivés à dix heures."),
        P("Lei è partita ieri.","Elle est partie hier."),P("Quando sei tornato?","Quand es-tu rentré ?"),P("Le ragazze sono uscite.","Les filles sont sorties.")
      ],
      drills:[
        M("Avec essere, le participe :",["s'accorde avec le sujet","reste toujours masculin singulier"],"s'accorde avec le sujet","Anna è arrivata ; Marco è arrivato.","agreement"),
        M("Une femme dit « je suis allée » :",["sono andato","sono andata","ho andata"],"sono andata","Auxiliaire essere + accord féminin.","tenses"),
        M("Complète : « Noi ___ arrivati. »",["siamo","abbiamo","sono"],"siamo","Arrivare se construit avec essere.","conjugation")
      ],
      encounter:{prompts:[
        Q("Une femme dit : « Je suis allée à Rome. »","Sono andata a Roma.","Accord féminin en -a."),
        Q("Dis : « Nous sommes arrivés à dix heures. »","Siamo arrivati alle dieci.","Essere + arrivati."),
        Q("Demande : « Quand es-tu rentré ? »","Quando sei tornato?","Pour une interlocutrice : tornata.")
      ]}
    },
    {
      id:"it-a1-10",title:"Viaggiare e fare acquisti",goal:"Réunir les acquis A1 dans des situations de voyage, hôtel et shopping.",
      scene:{title:"En voyage",lines:[
        {speaker:"Cliente",t:"Buongiorno, ho una prenotazione.",fr:"Bonjour, j’ai une réservation."},
        {speaker:"Receptionist",t:"A che nome?",fr:"À quel nom ?"},
        {speaker:"Cliente",t:"A nome Martin. Domani vorrei visitare il centro.",fr:"Au nom de Martin. Demain, je voudrais visiter le centre."},
        {speaker:"Receptionist",t:"Perfetto. La stazione è vicino all'hotel.",fr:"Parfait. La gare est près de l’hôtel."}
      ]},
      grammar:[
        G("Présent pour un futur proche","Quand le moment est clair, l’italien utilise très souvent le présent pour un projet : Domani parto, stasera ceniamo fuori.",[["Domani vado a Roma.","Demain je vais à Rome."],["Stasera restiamo qui.","Ce soir nous restons ici."]]),
        G("Comparer simplement","più… di = plus… que ; meno… di = moins… que ; più/meno + adjectif.",[["Questo hotel è più caro.","Cet hôtel est plus cher."],["La camera è meno grande.","La chambre est moins grande."]])
      ],
      verbs:[
        VB("pagare","payer",{"io":"pago","tu":"paghi","lui/lei":"paga","noi":"paghiamo","voi":"pagate","loro":"pagano"},"Le h maintient le son dur devant i."),
        VB("cercare","chercher",{"io":"cerco","tu":"cerchi","lui/lei":"cerca","noi":"cerchiamo","voi":"cercate","loro":"cercano"},"Le h maintient le son /k/ devant i.")
      ],
      vocab:[
        V("la prenotazione","la réservation","la","prenotazione"),V("l'hotel","l'hôtel","l'","hotel"),V("la camera","la chambre","la","camera"),
        V("il biglietto","le billet","il","biglietto"),V("la taglia","la taille","la","taglia"),V("il prezzo","le prix","il","prezzo"),
        V("caro","cher"),V("economico","économique / bon marché"),V("pagare","payer"),V("cercare","chercher")
      ],
      phrases:[
        P("Ho una prenotazione.","J’ai une réservation."),P("A che nome?","À quel nom ?"),P("Cerco una camera per due notti.","Je cherche une chambre pour deux nuits."),
        P("Quanto costa?","Combien ça coûte ?"),P("Posso pagare con la carta?","Puis-je payer par carte ?"),P("Domani parto alle nove.","Demain je pars à neuf heures.")
      ],
      drills:[
        M("Pour un projet clairement situé demain, l’italien peut utiliser :",["le présent","seulement le futur","seulement le passé"],"le présent","Domani parto est parfaitement naturel.","tenses"),
        M("« più caro » signifie :",["plus cher","moins cher","aussi cher"],"plus cher","più + adjectif = plus…","grammar"),
        M("Complète : « Noi ___ con la carta. »",["paghiamo","pagamo","pagate"],"paghiamo","Pagare conserve le son dur avec h : paghiamo.","conjugation")
      ],
      encounter:{prompts:[
        Q("À l’hôtel, dis : « J’ai une réservation. »","Ho una prenotazione.","Formule très utile."),
        Q("Demande : « Combien ça coûte ? »","Quanto costa?","Question directe sur le prix."),
        Q("Dis : « Demain je pars à neuf heures. »","Domani parto alle nove.","Présent + repère temporel futur.")
      ]}
    }
  ]
};
})();