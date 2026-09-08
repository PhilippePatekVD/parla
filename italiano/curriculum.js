(function(){
const mcq=(p,c,a,e,skill="grammar")=>({t:"mcq",p,c,a,e,skill});
const text=(p,a,m,e,skill="production")=>({t:"text",p,a:Array.isArray(a)?a:[a],m,e,skill});
const cloze=(p,c,a,e,skill="grammar")=>({t:"cloze",p,c,a,e,skill});
const build=(p,tokens,a,e,skill="production")=>({t:"build",p,tokens,a,e,skill});
const listen=(audio,p,c,a,e,skill="listening")=>({t:"listen",audio,p,c,a,e,skill});
const dialogue=(lines,p,c,a,e,skill="production")=>({t:"dialogue",lines,p,c,a,e,skill});

window.PARLA_CURRICULUM={
version:"1.1",
level:"A1",
principles:[
"Comprendre avant de mémoriser",
"Manipuler immédiatement la grammaire en contexte",
"Réutiliser les mêmes structures dans des situations différentes",
"Faire produire de l’italien dès la première unité",
"Réviser davantage ce qui pose problème"
],
units:[
{
id:"u1",title:"Ciao!",subtitle:"Saluer, répondre et dire qui l’on est.",objective:"Pouvoir ouvrir une conversation très simple et utiliser essere au singulier.",
grammar:[
{title:"Essere — être",body:"En italien le pronom sujet est souvent omis : la terminaison du verbe suffit généralement.",examples:[["(Io) sono francese.","Je suis français(e)."],["(Tu) sei italiano?","Tu es italien(ne) ?"],["Lei è svizzera.","Elle est suisse."]]},
{title:"Tu ou Lei ?",body:"Tu s’emploie dans un contexte familier. Lei est la forme de politesse courante avec un adulte que l’on ne connaît pas.",examples:[["Come stai?","Comment vas-tu ?"],["Come sta?","Comment allez-vous ?"]]}
],
verbs:[{name:"essere",fr:"être",forms:["io sono","tu sei","lui/lei è","noi siamo","voi siete","loro sono"]}],
vocab:[["ciao","salut / au revoir"],["buongiorno","bonjour"],["buonasera","bonsoir"],["arrivederci","au revoir"],["grazie","merci"],["prego","de rien / je vous en prie"],["bene","bien"],["male","mal"],["essere","être"],["come va?","comment ça va ?"]],
intro:[
mcq("Vous entrez dans un café à 10 h. Que dites-vous ?",["Buongiorno","Buonanotte","Arrivederci"],"Buongiorno","Buongiorno convient le matin et une bonne partie de la journée.","vocab"),
listen("Come va?","Que vient-on de vous demander ?",["Comment ça va ?","Comment vous appelez-vous ?","Où habitez-vous ?"],"Comment ça va ?","Come va? est une formule très courante et neutre.","listening"),
text("Répondez simplement : « Je vais bien, merci. »",["sto bene grazie","bene grazie"],"Sto bene, grazie.","Sto bene = je vais bien. Grazie = merci.","production")
],
structure:[
cloze("Io ___ francese.",["sono","sei","è"],"sono","Avec io, essere donne sono.","conjugation"),
cloze("Tu ___ italiano?",["sono","sei","è"],"sei","Avec tu, essere donne sei.","conjugation"),
build("Construisez : « Elle est suisse. »",["svizzera","è","Lei"],"Lei è svizzera","Le verbe è porte déjà l’information de personne.","production")
],
dialogue:[
dialogue(["A: Buongiorno!","B: Buongiorno!"],"A demande : « Come va? » Quelle réponse est naturelle ?",["Bene, grazie.","Mi chiamo stazione.","A sinistra."],"Bene, grazie.","Une réponse courte et naturelle suffit.","production"),
mcq("Quelle forme est polie avec une personne inconnue ?",["Come stai?","Come sta?","Come sei?"],"Come sta?","Lei / troisième personne du singulier sert à la politesse.","grammar"),
text("Dites : « Bonjour, je suis français. »",["buongiorno sono francese","buongiorno io sono francese"],"Buongiorno, sono francese.","Le pronom io est possible mais n’est pas nécessaire.","production")
]
},
{
id:"u2",title:"Mi presento",subtitle:"Nom, nationalité et profession.",objective:"Savoir se présenter en 3 ou 4 phrases et poser les mêmes questions à quelqu’un.",
grammar:[
{title:"Chiamarsi — s’appeler",body:"Chiamarsi est un verbe pronominal. Pour se présenter : mi chiamo. Pour demander à quelqu’un : come ti chiami?",examples:[["Mi chiamo Luca.","Je m’appelle Luca."],["Come ti chiami?","Comment t’appelles-tu ?"]]},
{title:"Nationalités",body:"Les adjectifs de nationalité s’accordent souvent avec le genre : italiano/italiana, francese reste identique au singulier.",examples:[["Sono italiano.","Je suis italien."],["Sono italiana.","Je suis italienne."],["Sono francese.","Je suis français(e)."]]}
],
verbs:[{name:"chiamarsi",fr:"s’appeler",forms:["io mi chiamo","tu ti chiami","lui/lei si chiama","noi ci chiamiamo","voi vi chiamate","loro si chiamano"]}],
vocab:[["mi chiamo","je m’appelle"],["piacere","enchanté"],["francese","français(e)"],["italiano / italiana","italien / italienne"],["svizzero / svizzera","suisse"],["medico","médecin"],["insegnante","enseignant(e)"],["lavorare","travailler"],["di dove sei?","tu viens d’où ?"],["e tu?","et toi ?"]],
intro:[
listen("Mi chiamo Giulia. Piacere!","Que dit Giulia ?",["Elle se présente.","Elle commande un café.","Elle demande son chemin."],"Elle se présente.","Mi chiamo sert à donner son nom.","listening"),
text("Dites : « Je m’appelle Marco. »",["mi chiamo marco","io mi chiamo marco"],"Mi chiamo Marco.","Le pronom io est facultatif.","production"),
mcq("« Di dove sei? » signifie :",["Où habites-tu ?","D’où viens-tu ?","Quel âge as-tu ?"],"D’où viens-tu ?","Di dove interroge l’origine.","vocab")
],
structure:[
cloze("Lei ___ chiama Anna.",["mi","ti","si"],"si","Avec lei, chiamarsi donne si chiama.","conjugation"),
build("Construisez : « Je suis suisse et je travaille à Genève. »",["a","svizzero","Ginevra","Sono","lavoro","e"],"Sono svizzero e lavoro a Ginevra","Avec une ville, on utilise généralement a.","production"),
mcq("Une femme dit qu’elle est italienne. Quelle phrase ?",["Sono italiano.","Sono italiana.","Sono italieni."],"Sono italiana.","Italiano devient italiana au féminin singulier.","grammar")
],
dialogue:[
dialogue(["A: Ciao! Mi chiamo Paolo.","B: ..."],"Quelle réponse poursuit naturellement la présentation ?",["Piacere, mi chiamo Claire.","Il conto, per favore.","Sempre dritto."],"Piacere, mi chiamo Claire.","Piacere est la formule naturelle lors d’une rencontre.","production"),
text("Posez la question : « Comment t’appelles-tu ? »",["come ti chiami"],"Come ti chiami?","Ti est le pronom réfléchi associé à tu.","production"),
text("Présentez-vous en une phrase : « Je suis français et je m’appelle Paul. »",["sono francese e mi chiamo paul","io sono francese e mi chiamo paul"],"Sono francese e mi chiamo Paul.","On relie simplement les deux informations avec e.","production")
]
},
{
id:"u3",title:"Dove abiti?",subtitle:"Dire où l’on vit et ce que l’on a.",objective:"Parler de son lieu de vie avec abitare, avere, a/in et c’è.",
grammar:[
{title:"A ou in ?",body:"On emploie généralement a avec une ville et in avec un pays ou une grande région.",examples:[["Abito a Losanna.","J’habite à Lausanne."],["Abito in Svizzera.","J’habite en Suisse."]]},
{title:"C’è / ci sono",body:"C’è signifie « il y a » au singulier. Ci sono est la forme plurielle.",examples:[["C’è un parco.","Il y a un parc."],["Ci sono due bar.","Il y a deux bars."]]}
],
verbs:[{name:"avere",fr:"avoir",forms:["io ho","tu hai","lui/lei ha","noi abbiamo","voi avete","loro hanno"]},{name:"abitare",fr:"habiter",forms:["io abito","tu abiti","lui/lei abita","noi abitiamo","voi abitate","loro abitano"]}],
vocab:[["abitare","habiter"],["casa","maison"],["appartamento","appartement"],["città","ville"],["paese","pays / village"],["vicino","près"],["lontano","loin"],["parco","parc"],["stazione","gare"],["c’è","il y a"]],
intro:[
text("Dites : « J’habite à Lausanne. »",["abito a lausanne","io abito a lausanne"],"Abito a Lausanne.","Une ville est normalement introduite par a.","production"),
mcq("Quelle phrase est correcte ?",["Abito a Svizzera.","Abito in Svizzera.","Abito da Svizzera."],"Abito in Svizzera.","Avec un pays, on emploie généralement in.","grammar"),
listen("C'è un parco vicino a casa.","Que trouve-t-on près de la maison ?",["Un parc","Une gare","Un restaurant"],"Un parc","C’è introduit ici un seul élément.","listening")
],
structure:[
cloze("Io ___ un appartamento.",["ho","hai","ha"],"ho","Avere avec io : ho.","conjugation"),
cloze("___ due bar vicino alla stazione.",["C'è","Ci sono","Sono c'è"],"Ci sono","Le nom qui suit est pluriel : due bar.","grammar"),
build("Construisez : « Il y a une gare près de chez moi. »",["casa","una","vicino","C'è","a","stazione"],"C'è una stazione vicino a casa","C’è + singulier ; vicino a = près de.","production")
],
dialogue:[
dialogue(["A: Dove abiti?","B: ..."],"Quelle réponse convient ?",["Abito a Ginevra.","Sono un caffè.","Ho buongiorno."],"Abito a Ginevra.","Dove abiti? demande le lieu où l’on habite.","production"),
text("Demandez : « Il y a un restaurant ici ? »",["c'è un ristorante qui","c e un ristorante qui"],"C'è un ristorante qui?","C’è convient avec un ristorante, singulier.","production"),
mcq("« Hai una macchina? » signifie :",["As-tu une voiture ?","Où est la voiture ?","La voiture est loin ?"],"As-tu une voiture ?","Hai est la forme de avere avec tu.","vocab")
]
},
{
id:"u4",title:"La mia famiglia",subtitle:"Famille, articles et possessifs.",objective:"Présenter quelques proches avec les articles, les possessifs et le pluriel.",
grammar:[
{title:"Articles définis",body:"Les formes les plus fréquentes au début sont il, la, i et le. Lo et gli apparaissent devant certains groupes consonantiques.",examples:[["il fratello","le frère"],["la sorella","la sœur"],["i genitori","les parents"],["le sorelle","les sœurs"]]},
{title:"Possessifs",body:"Mio, tuo, suo s’accordent avec le nom possédé. Avec les membres de la famille au singulier, on omet souvent l’article : mia madre.",examples:[["mia madre","ma mère"],["mio fratello","mon frère"],["i miei genitori","mes parents"]]}
],
verbs:[{name:"avere",fr:"avoir",forms:["io ho","tu hai","lui/lei ha","noi abbiamo","voi avete","loro hanno"]}],
vocab:[["famiglia","famille"],["madre","mère"],["padre","père"],["fratello","frère"],["sorella","sœur"],["marito","mari"],["moglie","épouse"],["figlio / figlia","fils / fille"],["genitori","parents"],["mio / mia","mon / ma"]],
intro:[
mcq("Comment dit-on « ma sœur » ?",["la mio sorella","mia sorella","mio sorella"],"mia sorella","Sorella est féminin : mia sorella.","grammar"),
listen("Ho un fratello e una sorella.","Combien de frères et sœurs la personne mentionne-t-elle ?",["Un seul","Deux","Trois"],"Deux","Un fratello + una sorella = deux personnes.","listening"),
text("Dites : « J’ai un frère. »",["ho un fratello","io ho un fratello"],"Ho un fratello.","Ho est la forme de avere avec io.","production")
],
structure:[
cloze("___ madre si chiama Anna.",["Mio","Mia","Miei"],"Mia","Madre est féminin singulier.","grammar"),
mcq("Quel pluriel correspond à « le sorelle » ?",["les sœurs","les frères","les mères"],"les sœurs","Le est un article féminin pluriel.","vocab"),
build("Construisez : « Mes parents habitent à Milan. »",["Milano","genitori","a","I","abitano","miei"],"I miei genitori abitano a Milano","Au pluriel, on garde l’article : i miei genitori.","production")
],
dialogue:[
dialogue(["A: Hai fratelli o sorelle?","B: ..."],"Répondez : « J’ai une sœur. »",["Ho una sorella.","Sono una sorella.","Mia una sorella."],"Ho una sorella.","Avere sert à exprimer la possession.","production"),
text("Dites : « Mon père s’appelle Luca. »",["mio padre si chiama luca"],"Mio padre si chiama Luca.","Padre est masculin singulier : mio padre.","production"),
mcq("Pourquoi dit-on souvent « mia madre » sans article ?",["Parce qu’il s’agit d’un membre de la famille au singulier.","Parce que madre est un verbe.","Parce que mia remplace toujours tous les articles."],"Parce qu’il s’agit d’un membre de la famille au singulier.","C’est une particularité fréquente des possessifs avec la famille proche.","grammar")
]
},
{
id:"u5",title:"Al bar",subtitle:"Commander, compter et payer.",objective:"Commander poliment une boisson ou un snack et comprendre un prix simple.",
grammar:[
{title:"Vorrei — je voudrais",body:"Vorrei est le conditionnel de volere, mais à ce niveau il faut surtout le retenir comme une formule très naturelle et polie pour commander.",examples:[["Vorrei un caffè.","Je voudrais un café."],["Vorrei due cornetti.","Je voudrais deux croissants."]]},
{title:"Un / uno / una",body:"Un s’emploie devant la plupart des noms masculins, uno devant certains débuts comme s+consonne ou z, una devant les noms féminins et un’ devant une voyelle.",examples:[["un caffè","un café"],["uno spuntino","un en-cas"],["una birra","une bière"]]}
],
verbs:[{name:"volere",fr:"vouloir",forms:["io voglio","tu vuoi","lui/lei vuole","noi vogliamo","voi volete","loro vogliono"],note:"Pour commander poliment : vorrei."}],
vocab:[["caffè","café"],["acqua","eau"],["cornetto","croissant italien"],["panino","sandwich"],["vorrei","je voudrais"],["per favore","s’il vous plaît"],["quanto costa?","combien ça coûte ?"],["euro","euro"],["conto","addition"],["altro","autre"]],
intro:[
dialogue(["Barista: Buongiorno, cosa prende?","Vous: ..."],"Quelle réponse est la plus naturelle ?",["Vorrei un caffè, per favore.","Sono francese.","Dov'è la stazione?"],"Vorrei un caffè, per favore.","Vorrei + nom est une structure idéale pour commander.","production"),
listen("Sono tre euro e cinquanta.","Quel prix entendez-vous ?",["3,50 €","13,50 €","30,50 €"],"3,50 €","Tre = trois ; cinquanta = cinquante.","listening"),
mcq("« Quanto costa? » signifie :",["Combien ça coûte ?","Qu’est-ce que vous prenez ?","Où est le bar ?"],"Combien ça coûte ?","Quanto = combien ; costa = coûte.","vocab")
],
structure:[
cloze("Vorrei ___ acqua, per favore.",["un","un’","uno"],"un’","Acqua est féminin et commence par une voyelle : una s’élide en un’.","grammar"),
build("Construisez : « Je voudrais deux cafés, s’il vous plaît. »",["due","per","caffè","Vorrei","favore"],"Vorrei due caffè per favore","Caffè reste inchangé au pluriel.","production"),
mcq("Laquelle est la commande la plus polie ?",["Voglio caffè.","Vorrei un caffè, per favore.","Caffè!"],"Vorrei un caffè, per favore.","Voglio est grammatical mais beaucoup plus direct dans ce contexte.","pragmatics")
],
dialogue:[
dialogue(["Barista: Altro?","Vous: ..."],"Vous ne voulez rien d’autre.",["No, grazie. Basta così.","Sono a Roma.","Ho una sorella."],"No, grazie. Basta così.","Basta così = cela suffit / c’est tout.","production"),
text("Demandez : « Combien coûte le café ? »",["quanto costa il caffè","quanto costa un caffè"],"Quanto costa il caffè?","Quanto costa? est la structure standard pour demander un prix.","production"),
text("Commandez : « Une eau et un café, s’il vous plaît. »",["un'acqua e un caffè per favore","una acqua e un caffè per favore"],"Un'acqua e un caffè, per favore.","Una s’élide couramment devant une voyelle : un’acqua.","production")
]
},
{
id:"u6",title:"La giornata",subtitle:"Routine, présent et heure.",objective:"Décrire une journée simple et maîtriser le schéma du présent régulier.",
grammar:[
{title:"Présent des verbes réguliers",body:"Pour -are : -o, -i, -a, -iamo, -ate, -ano. Pour -ere : -o, -i, -e, -iamo, -ete, -ono. Pour -ire : -o, -i, -e, -iamo, -ite, -ono.",examples:[["lavoro","je travaille"],["prendi","tu prends"],["dormiamo","nous dormons"]]},
{title:"Dire l’heure",body:"È l’una pour une heure. Sono le... pour les autres heures.",examples:[["È l’una.","Il est une heure."],["Sono le otto.","Il est huit heures."],["Alle nove lavoro.","À neuf heures je travaille."]]}
],
verbs:[{name:"lavorare",fr:"travailler",forms:["lavoro","lavori","lavora","lavoriamo","lavorate","lavorano"]},{name:"prendere",fr:"prendre",forms:["prendo","prendi","prende","prendiamo","prendete","prendono"]},{name:"dormire",fr:"dormir",forms:["dormo","dormi","dorme","dormiamo","dormite","dormono"]}],
vocab:[["svegliarsi","se réveiller"],["lavorare","travailler"],["mangiare","manger"],["pranzare","déjeuner"],["cenare","dîner"],["dormire","dormir"],["mattina","matin"],["pomeriggio","après-midi"],["sera","soir"],["alle otto","à huit heures"]],
intro:[
listen("Lavoro dalle otto alle cinque.","De quoi parle la personne ?",["De ses horaires de travail.","De sa famille.","D’un prix."],"De ses horaires de travail.","Dalle... alle... indique ici une plage horaire.","listening"),
cloze("Io lavor___ a Ginevra.",["o","i","a"],"o","Avec io et un verbe régulier en -are : terminaison -o.","conjugation"),
mcq("Comment dit-on « Il est huit heures » ?",["È otto.","Sono le otto.","Sono otto."],"Sono le otto.","Pour toutes les heures sauf une heure, on utilise sono le.","grammar")
],
structure:[
cloze("Noi mang___ a casa.",["iamo","ate","ano"],"iamo","Mangiare avec noi : mangiamo.","conjugation"),
build("Construisez : « À neuf heures je travaille. »",["lavoro","nove","Alle"],"Alle nove lavoro","Alle + heure situe l’action dans la journée.","production"),
mcq("Quelle terminaison correspond à voi avec parlare ?",["-iamo","-ate","-ano"],"-ate","Voi parlate.","conjugation")
],
dialogue:[
dialogue(["A: A che ora pranzi?","B: ..."],"Répondez : « À midi. »",["A mezzogiorno.","A sinistra.","Tre euro."],"A mezzogiorno.","Mezzogiorno = midi.","production"),
text("Dites : « Le soir, je dîne à la maison. »",["la sera ceno a casa","di sera ceno a casa"],"La sera ceno a casa.","Cenare → ceno à la première personne.","production"),
text("Posez : « À quelle heure travailles-tu ? »",["a che ora lavori"],"A che ora lavori?","Lavorare avec tu : lavori.","production")
]
},
{
id:"u7",title:"Mi piace",subtitle:"Goûts, loisirs et préférences.",objective:"Dire ce que l’on aime, ce que l’on n’aime pas et ce que l’on préfère.",
grammar:[
{title:"Piacere",body:"Pour une chose au singulier ou une activité : mi piace. Pour plusieurs choses : mi piacciono.",examples:[["Mi piace il caffè.","J’aime le café."],["Mi piace viaggiare.","J’aime voyager."],["Mi piacciono i libri.","J’aime les livres."]]},
{title:"Préférer",body:"Preferire est un verbe en -ire avec insertion -isc- à certaines personnes : preferisco, preferisci, preferisce.",examples:[["Preferisco il tè.","Je préfère le thé."],["Preferisci il mare?","Tu préfères la mer ?"]]}
],
verbs:[{name:"fare",fr:"faire",forms:["faccio","fai","fa","facciamo","fate","fanno"]},{name:"preferire",fr:"préférer",forms:["preferisco","preferisci","preferisce","preferiamo","preferite","preferiscono"]}],
vocab:[["mi piace","j’aime"],["non mi piace","je n’aime pas"],["mi piacciono","j’aime (pluriel)"],["preferire","préférer"],["leggere","lire"],["viaggiare","voyager"],["sport","sport"],["musica","musique"],["mare","mer"],["montagna","montagne"]],
intro:[
mcq("Vous aimez voyager. Quelle phrase ?",["Mi piace viaggiare.","Mi piacciono viaggiare.","Sono viaggiare."],"Mi piace viaggiare.","Une activité à l’infinitif se construit avec mi piace.","grammar"),
listen("Mi piacciono molto i libri italiani.","Qu’est-ce que la personne aime ?",["Les livres italiens","Les cafés italiens","Les villes italiennes"],"Les livres italiens","Piacciono annonce un sujet pluriel.","listening"),
text("Dites : « Je n’aime pas le café. »",["non mi piace il caffè"],"Non mi piace il caffè.","La négation non se place avant mi piace.","production")
],
structure:[
cloze("Mi ___ le città italiane.",["piace","piacciono","preferisco"],"piacciono","Le città est pluriel : mi piacciono.","grammar"),
cloze("Io ___ la montagna.",["preferisco","preferisci","preferisce"],"preferisco","Preferire avec io : preferisco.","conjugation"),
build("Construisez : « J’aime la musique mais je préfère le sport. »",["lo","ma","Mi","musica","sport","piace","preferisco","la"],"Mi piace la musica ma preferisco lo sport","Ma = mais ; préférer se conjugue normalement.","production")
],
dialogue:[
dialogue(["A: Ti piace il mare?","B: ..."],"Vous aimez beaucoup la mer.",["Sì, mi piace molto.","No, sono mare.","Alle otto."],"Sì, mi piace molto.","Ti piace...? appelle naturellement mi piace... dans la réponse.","production"),
text("Demandez : « Tu préfères la mer ou la montagne ? »",["preferisci il mare o la montagna"],"Preferisci il mare o la montagna?","Preferire avec tu : preferisci.","production"),
mcq("Pourquoi dit-on « mi piacciono i film » ?",["Parce que film est pluriel dans la phrase.","Parce que mi impose toujours le pluriel.","Parce que piacciono veut dire regarder."],"Parce que film est pluriel dans la phrase.","Le verbe s’accorde avec la chose qui plaît.","grammar")
]
},
{
id:"u8",title:"In città",subtitle:"Se déplacer et demander son chemin.",objective:"Demander où se trouve un lieu et comprendre des indications simples.",
grammar:[
{title:"Andare — aller",body:"Andare est irrégulier. Avec une ville : andare a. Pour certains lieux : al, alla, in.",examples:[["Vado a Roma.","Je vais à Rome."],["Vado al museo.","Je vais au musée."],["Andiamo in centro.","Nous allons au centre."]]},
{title:"Prépositions articulées",body:"a + il = al, a + la = alla. Elles apparaissent constamment pour parler des lieux.",examples:[["al bar","au bar"],["alla stazione","à la gare"]]}
],
verbs:[{name:"andare",fr:"aller",forms:["vado","vai","va","andiamo","andate","vanno"]},{name:"venire",fr:"venir",forms:["vengo","vieni","viene","veniamo","venite","vengono"]}],
vocab:[["dov'è?","où est ?"],["destra","droite"],["sinistra","gauche"],["dritto","tout droit"],["stazione","gare"],["museo","musée"],["centro","centre-ville"],["vicino","près"],["lontano","loin"],["andare","aller"]],
intro:[
listen("La stazione è a destra, dopo il bar.","Où est la gare ?",["À droite après le bar","À gauche avant le bar","Tout droit après le musée"],"À droite après le bar","A destra = à droite ; dopo = après.","listening"),
text("Demandez : « Où est la gare ? »",["dov'è la stazione","dove è la stazione"],"Dov'è la stazione?","Dove è se contracte très souvent en dov’è.","production"),
mcq("« Sempre dritto » signifie :",["Toujours tout droit","Tournez à gauche","C’est très loin"],"Toujours tout droit","Dritto = droit / tout droit.","vocab")
],
structure:[
cloze("Io ___ al museo.",["vado","vai","va"],"vado","Andare avec io : vado.","conjugation"),
cloze("Andiamo ___ stazione.",["alla","al","a il"],"alla","a + la = alla.","grammar"),
build("Construisez : « Le musée est près de la gare. »",["stazione","Il","vicino","museo","alla","è"],"Il museo è vicino alla stazione","Vicino a + la → vicino alla.","production")
],
dialogue:[
dialogue(["A: Scusi, dov'è il museo?","B: ..."],"Quelle indication est plausible ?",["Sempre dritto, poi a sinistra.","Vorrei un caffè.","Sono francese."],"Sempre dritto, poi a sinistra.","Poi = puis, utile pour enchaîner des indications.","production"),
text("Dites : « Nous allons au centre. »",["andiamo in centro"],"Andiamo in centro.","In centro est une expression très fréquente.","production"),
mcq("« Vieni con me? » signifie :",["Tu viens avec moi ?","Tu vas à Rome ?","Tu habites ici ?"],"Tu viens avec moi ?","Venire avec tu : vieni.","vocab")
]
},
{
id:"u9",title:"Al ristorante",subtitle:"Choisir, préciser et demander l’addition.",objective:"Gérer une commande simple au restaurant et comprendre quelques questions du serveur.",
grammar:[
{title:"Prendere",body:"Prendere signifie « prendre » et s’utilise très naturellement pour choisir un plat ou une boisson.",examples:[["Prendo la pasta.","Je prends les pâtes."],["Prendiamo due pizze.","Nous prenons deux pizzas."]]},
{title:"Avec / sans",body:"Con = avec, senza = sans. Ces mots sont très utiles pour préciser une commande.",examples:[["con formaggio","avec fromage"],["senza cipolla","sans oignon"]]}
],
verbs:[{name:"prendere",fr:"prendre",forms:["prendo","prendi","prende","prendiamo","prendete","prendono"]}],
vocab:[["menu","menu"],["antipasto","entrée"],["primo","premier plat"],["secondo","plat principal"],["pasta","pâtes"],["carne","viande"],["pesce","poisson"],["senza","sans"],["con","avec"],["il conto","l’addition"]],
intro:[
dialogue(["Cameriere: Cosa prende?","Vous: ..."],"Vous choisissez les pâtes.",["Prendo la pasta.","Sono la pasta.","Vado la pasta."],"Prendo la pasta.","Prendo est une réponse naturelle à Cosa prende?","production"),
listen("La pasta è senza carne.","Quelle précision entendez-vous ?",["Sans viande","Avec viande","Sans pâtes"],"Sans viande","Senza = sans.","listening"),
mcq("Comment demander l’addition ?",["Il conto, per favore.","Dov'è il conto?","Sono il conto."],"Il conto, per favore.","Formule courte, polie et très courante.","vocab")
],
structure:[
cloze("Noi ___ due pizze.",["prendiamo","prendete","prendono"],"prendiamo","Prendere avec noi : prendiamo.","conjugation"),
build("Construisez : « Je prends le poisson sans sauce. »",["senza","pesce","Prendo","salsa","il"],"Prendo il pesce senza salsa","Senza introduit directement ce que l’on exclut.","production"),
mcq("Le serveur demande « Da bere? ». Il demande :",["Ce que vous voulez boire.","Votre nom.","Votre adresse."],"Ce que vous voulez boire.","Da bere = à boire.","vocab")
],
dialogue:[
dialogue(["Cameriere: Desidera altro?","Vous: ..."],"Vous ne voulez plus rien.",["No, grazie. Basta così.","A destra.","Mi chiamo Luca."],"No, grazie. Basta così.","Basta così = c’est tout.","production"),
text("Dites : « Une eau sans gaz, s’il vous plaît. »",["un'acqua naturale per favore","acqua naturale per favore"],"Un'acqua naturale, per favore.","Acqua naturale désigne une eau plate.","production"),
text("Demandez : « Puis-je payer par carte ? »",["posso pagare con la carta"],"Posso pagare con la carta?","Posso = je peux ; con la carta = par carte.","production")
]
},
{
id:"u10",title:"Fare shopping",subtitle:"Couleurs, tailles et accords.",objective:"Demander une taille, décrire un vêtement et comprendre un prix.",
grammar:[
{title:"Accord des adjectifs",body:"Un adjectif s’accorde généralement en genre et en nombre avec le nom : rosso/rossa, rossi/rosse.",examples:[["un vestito nero","une robe noire"],["una camicia bianca","une chemise blanche"],["scarpe rosse","chaussures rouges"]]},
{title:"Questo / questa",body:"Questo signifie « ce/cet », questa « cette ». Au pluriel : questi / queste.",examples:[["questo maglione","ce pull"],["questa giacca","cette veste"]]}
],
verbs:[{name:"provare",fr:"essayer",forms:["provo","provi","prova","proviamo","provate","provano"]}],
vocab:[["taglia","taille"],["grande","grand(e)"],["piccolo / piccola","petit / petite"],["rosso / rossa","rouge"],["nero / nera","noir / noire"],["bianco / bianca","blanc / blanche"],["giacca","veste"],["camicia","chemise"],["scarpe","chaussures"],["provare","essayer"]],
intro:[
mcq("Une veste noire se dit :",["una giacca nero","una giacca nera","un giacca nera"],"una giacca nera","Giacca est féminin : una giacca nera.","grammar"),
listen("Avete una taglia più grande?","Que demande la personne ?",["Une taille plus grande","Un prix plus bas","Une autre couleur"],"Une taille plus grande","Taglia = taille ; più grande = plus grande.","listening"),
text("Demandez : « Puis-je l’essayer ? »",["posso provarlo","posso provarla"],"Posso provarlo?","Le pronom varie selon l’objet ; les deux formes peuvent être correctes selon le nom.","production")
],
structure:[
cloze("Questa camicia è ___ .",["bianco","bianca","bianchi"],"bianca","Camicia est féminin singulier.","grammar"),
cloze("___ scarpe sono rosse.",["Queste","Questa","Questo"],"Queste","Scarpe est féminin pluriel.","grammar"),
build("Construisez : « Je voudrais cette veste noire. »",["questa","Vorrei","nera","giacca"],"Vorrei questa giacca nera","Cette + veste = questa giacca ; l’adjectif s’accorde.","production")
],
dialogue:[
dialogue(["Commesso: Che taglia porta?","Vous: ..."],"Vous portez du M.",["Porto la M.","Sono M euro.","Vado M."],"Porto la M.","Portare peut signifier porter une taille.","production"),
text("Demandez : « Avez-vous cette chemise en bleu ? »",["avete questa camicia in blu"],"Avete questa camicia in blu?","In + couleur est courant pour demander une variante.","production"),
mcq("« Lo prendo » veut dire :",["Je le prends.","Je l’essaie.","Je le cherche."],"Je le prends.","Lo reprend un objet masculin singulier.","vocab")
]
},
{
id:"u11",title:"Il weekend",subtitle:"Projets, envies et verbes modaux.",objective:"Parler de projets proches avec potere, dovere, volere et l’infinitif.",
grammar:[
{title:"Verbes modaux + infinitif",body:"Potere, dovere et volere se construisent directement avec un infinitif.",examples:[["Posso venire.","Je peux venir."],["Devo lavorare.","Je dois travailler."],["Voglio partire.","Je veux partir."]]},
{title:"Présent pour un futur proche",body:"Comme en français oral, le présent peut exprimer un projet futur si le contexte temporel est clair.",examples:[["Domani vado a Milano.","Demain je vais à Milan."],["Sabato ceniamo fuori.","Samedi nous dînons dehors."]]}
],
verbs:[{name:"potere",fr:"pouvoir",forms:["posso","puoi","può","possiamo","potete","possono"]},{name:"dovere",fr:"devoir",forms:["devo","devi","deve","dobbiamo","dovete","devono"]},{name:"volere",fr:"vouloir",forms:["voglio","vuoi","vuole","vogliamo","volete","vogliono"]}],
vocab:[["weekend","week-end"],["sabato","samedi"],["domenica","dimanche"],["uscire","sortir"],["partire","partir"],["restare","rester"],["posso","je peux"],["devo","je dois"],["voglio","je veux"],["insieme","ensemble"]],
intro:[
listen("Domani voglio andare a Firenze.","Quel est le projet ?",["Aller à Florence demain","Travailler à Florence aujourd’hui","Venir de Florence"],"Aller à Florence demain","Voglio + andare = je veux aller.","listening"),
cloze("Io ___ lavorare sabato.",["devo","devi","deve"],"devo","Dovere avec io : devo.","conjugation"),
mcq("Quelle structure est correcte ?",["Posso venire.","Posso vengo.","Posso venuto."],"Posso venire.","Après un modal, on utilise l’infinitif.","grammar")
],
structure:[
cloze("Tu ___ uscire stasera?",["puoi","posso","può"],"puoi","Potere avec tu : puoi.","conjugation"),
build("Construisez : « Dimanche nous voulons aller à la mer. »",["andare","Domenica","mare","vogliamo","al"],"Domenica vogliamo andare al mare","Volere + infinitif ; al mare est l’expression usuelle.","production"),
mcq("« Sabato ceniamo fuori » se comprend comme :",["Samedi nous dînons dehors.","Samedi nous avons dîné dehors.","Samedi nous devons cuisiner."],"Samedi nous dînons dehors.","Le présent peut exprimer un programme futur.","grammar")
],
dialogue:[
dialogue(["A: Vuoi venire al cinema?","B: ..."],"Vous acceptez avec enthousiasme.",["Sì, volentieri!","Sono cinema.","Devo ieri."],"Sì, volentieri!","Volentieri = volontiers, très naturel pour accepter.","production"),
text("Dites : « Je ne peux pas venir demain. »",["non posso venire domani"],"Non posso venire domani.","La négation se place avant posso.","production"),
text("Demandez : « Qu’est-ce que tu veux faire ce week-end ? »",["cosa vuoi fare questo weekend","che cosa vuoi fare questo weekend"],"Cosa vuoi fare questo weekend?","Vuoi + fare : que veux-tu faire ?","production")
]
},
{
id:"u12",title:"Ieri e oggi",subtitle:"Premiers pas au passato prossimo.",objective:"Raconter quelques actions terminées dans un passé proche.",
grammar:[
{title:"Passato prossimo avec avere",body:"Pour beaucoup de verbes : avere au présent + participe passé. -are → -ato, -ere → souvent -uto, -ire → -ito.",examples:[["Ho mangiato.","J’ai mangé."],["Hai lavorato.","Tu as travaillé."],["Abbiamo dormito.","Nous avons dormi."]]},
{title:"Avec essere",body:"Plusieurs verbes de déplacement ou de changement d’état se construisent avec essere. Le participe s’accorde alors avec le sujet.",examples:[["Sono andato a Roma.","Je suis allé à Rome."],["Sono andata a Roma.","Je suis allée à Rome."],["Siamo arrivati.","Nous sommes arrivés."]]}
],
verbs:[{name:"passato prossimo",fr:"passé composé",forms:["ho parlato","hai mangiato","ha dormito","siamo andati/e","avete visto","hanno fatto"],note:"Certains participes sont irréguliers : fatto, visto, preso."}],
vocab:[["ieri","hier"],["stamattina","ce matin"],["ho fatto","j’ai fait"],["ho visto","j’ai vu"],["ho mangiato","j’ai mangé"],["sono andato / andata","je suis allé(e)"],["arrivato / arrivata","arrivé(e)"],["partito / partita","parti(e)"],["prima","avant"],["dopo","après"]],
intro:[
listen("Ieri ho lavorato e poi ho cenato con amici.","Que raconte la personne ?",["Sa journée d’hier","Son programme de demain","Une habitude quotidienne"],"Sa journée d’hier","Ieri + passato prossimo situe des actions terminées.","listening"),
cloze("Ieri ___ mangiato una pizza.",["ho","sono","hai"],"ho","Mangiare se construit normalement avec avere au passato prossimo.","conjugation"),
mcq("Une femme dit « Je suis allée à Rome ». Quelle phrase ?",["Sono andato a Roma.","Sono andata a Roma.","Ho andata a Roma."],"Sono andata a Roma.","Avec essere, le participe s’accorde : andata au féminin.","grammar")
],
structure:[
cloze("Noi ___ visto il museo.",["abbiamo","siamo","hanno"],"abbiamo","Vedere se construit ici avec avere : abbiamo visto.","conjugation"),
build("Construisez : « Hier, j’ai fait du sport. »",["sport","Ieri","fatto","ho"],"Ieri ho fatto sport","Fare a un participe irrégulier : fatto.","production"),
mcq("Quel participe est correct pour dormire ?",["dormato","dormuto","dormito"],"dormito","Les verbes réguliers en -ire forment le participe en -ito.","grammar")
],
dialogue:[
dialogue(["A: Cosa hai fatto ieri?","B: ..."],"Vous avez travaillé et vu des amis.",["Ho lavorato e ho visto degli amici.","Lavoro e vedo domani.","Sono lavorato amici."],"Ho lavorato e ho visto degli amici.","Deux actions terminées peuvent être enchaînées au passato prossimo.","production"),
text("Dites : « Ce matin, j’ai bu un café. »",["stamattina ho bevuto un caffè"],"Stamattina ho bevuto un caffè.","Bere a un participe irrégulier très fréquent : bevuto.","production"),
text("Dites : « Nous sommes arrivés à huit heures. »",["siamo arrivati alle otto","siamo arrivate alle otto"],"Siamo arrivati alle otto.","Avec essere, arrivati s’accorde avec le groupe ; arrivate convient à un groupe entièrement féminin.","production")
]
}
]
};
})();