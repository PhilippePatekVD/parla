(function(){
const mcq=(p,c,a,e,skill="grammar")=>({t:"mcq",p,c,a,e,skill});
const text=(p,a,m,e,skill="production")=>({t:"text",p,a:Array.isArray(a)?a:[a],m,e,skill});
const cloze=(p,c,a,e,skill="grammar")=>({t:"cloze",p,c,a,e,skill});
const build=(p,tokens,a,e,skill="production")=>({t:"build",p,tokens,a,e,skill});
const listen=(audio,p,c,a,e,skill="listening")=>({t:"listen",audio,p,c,a,e,skill});
const dialogue=(lines,p,c,a,e,skill="production")=>({t:"dialogue",lines,p,c,a,e,skill});

window.DEUTSCH_CURRICULUM={
version:"1.0",
level:"A1",
principles:[
"Comprendre l’ordre de la phrase avant de mémoriser des listes",
"Introduire les cas progressivement, uniquement quand ils deviennent utiles",
"Faire entendre et produire l’allemand dès la première unité",
"Réutiliser les mêmes structures dans des situations différentes",
"Transformer les erreurs personnelles en révisions ciblées"
],
units:[
{
id:"u1",title:"Hallo!",subtitle:"Saluer, répondre et utiliser sein.",objective:"Pouvoir ouvrir une conversation simple et utiliser sein au singulier.",
grammar:[
{title:"Sein — être",body:"En allemand, le pronom sujet est généralement exprimé. Le verbe conjugué occupe très souvent la deuxième position de la phrase déclarative.",examples:[["Ich bin müde.","Je suis fatigué(e)."],["Du bist hier.","Tu es ici."],["Sie ist nett.","Elle est sympathique."]]},
{title:"du ou Sie ?",body:"du est familier. Sie, toujours avec une majuscule, est la forme de politesse et se conjugue comme sie au pluriel.",examples:[["Wie geht es dir?","Comment vas-tu ?"],["Wie geht es Ihnen?","Comment allez-vous ?"]]}
],
verbs:[{name:"sein",fr:"être",forms:["ich bin","du bist","er/sie/es ist","wir sind","ihr seid","sie/Sie sind"]}],
vocab:[["Hallo!","Salut / Bonjour !"],["Guten Morgen!","Bonjour ! (matin)"],["Guten Tag!","Bonjour !"],["Guten Abend!","Bonsoir !"],["Tschüss!","Salut / Au revoir !"],["Auf Wiedersehen!","Au revoir !"],["danke","merci"],["bitte","s'il vous plaît / de rien"],["gut","bien"],["Wie geht's?","Comment ça va ?"]],
intro:[
mcq("Vous arrivez au travail à 9 h. Que dites-vous ?",["Guten Morgen!","Gute Nacht!","Tschüss!"],"Guten Morgen!","Guten Morgen s’emploie le matin.","vocab"),
listen("Wie geht's?","Que vient-on de vous demander ?",["Comment ça va ?","Comment vous appelez-vous ?","Où habitez-vous ?"],"Comment ça va ?","Wie geht's? est une forme très courante de Wie geht es dir?","listening"),
text("Répondez : « Bien, merci. »",["gut danke","mir geht es gut danke","mir geht's gut danke"],"Gut, danke.","Une réponse courte est parfaitement naturelle.","production")
],
structure:[
cloze("Ich ___ müde.",["bin","bist","ist"],"bin","Avec ich, sein donne bin.","conjugation"),
cloze("Du ___ hier.",["bin","bist","ist"],"bist","Avec du, sein donne bist.","conjugation"),
build("Construisez : « Elle est très sympathique. »",["nett","ist","sehr","Sie"],"Sie ist sehr nett","Le verbe conjugué est en deuxième position.","production")
],
dialogue:[
dialogue(["A: Guten Tag!","B: Guten Tag!"],"A demande « Wie geht's? ». Quelle réponse est naturelle ?",["Gut, danke.","Ich heiße Bahnhof.","Drei Euro."],"Gut, danke.","Une réponse simple suffit.","production"),
mcq("Quelle forme est polie avec une personne inconnue ?",["Wie geht es dir?","Wie geht es Ihnen?","Wie bist du?"],"Wie geht es Ihnen?","Ihnen correspond ici à la forme de politesse Sie.","grammar"),
text("Dites : « Bonjour, je suis français. »",["guten tag ich bin franzose","hallo ich bin franzose"],"Guten Tag, ich bin Franzose.","Le sujet ich est normalement exprimé en allemand.","production")
]
},
{
id:"u2",title:"Ich stelle mich vor",subtitle:"Nom, origine et lieu de vie.",objective:"Savoir se présenter en quelques phrases et poser les mêmes questions.",
grammar:[
{title:"Le verbe en deuxième position",body:"Dans une phrase déclarative simple, le verbe conjugué vient en deuxième position, même si la phrase commence par un complément.",examples:[["Ich wohne in Lausanne.","J’habite à Lausanne."],["Heute arbeite ich in Genf.","Aujourd’hui je travaille à Genève."]]},
{title:"Questions en W-",body:"Les questions avec wie, wo, woher, was commencent par le mot interrogatif, puis viennent le verbe et le sujet.",examples:[["Wie heißt du?","Comment t’appelles-tu ?"],["Wo wohnst du?","Où habites-tu ?"],["Woher kommst du?","D’où viens-tu ?"]]}
],
verbs:[
{name:"heißen",fr:"s'appeler",forms:["ich heiße","du heißt","er/sie heißt","wir heißen","ihr heißt","sie/Sie heißen"]},
{name:"wohnen",fr:"habiter",forms:["ich wohne","du wohnst","er/sie wohnt","wir wohnen","ihr wohnt","sie/Sie wohnen"]}
],
vocab:[["ich heiße","je m'appelle"],["wohnen","habiter"],["kommen","venir"],["aus","de / originaire de"],["Frankreich","France"],["die Schweiz","Suisse"],["Deutschland","Allemagne"],["die Stadt","ville"],["Woher?","D'où ?"],["Wo?","Où ?"]],
intro:[
listen("Ich heiße Anna und wohne in Zürich.","Que dit Anna ?",["Elle donne son nom et son lieu de vie.","Elle commande un café.","Elle parle de sa famille."],"Elle donne son nom et son lieu de vie.","heißen donne le nom ; wohnen indique le lieu de vie.","listening"),
text("Dites : « Je m’appelle Thomas. »",["ich heiße thomas","ich heisse thomas"],"Ich heiße Thomas.","Le pronom ich est exprimé.","production"),
mcq("« Woher kommst du? » signifie :",["Où habites-tu ?","D'où viens-tu ?","Quel âge as-tu ?"],"D'où viens-tu ?","Woher interroge l’origine.","vocab")
],
structure:[
cloze("Ich ___ in Lausanne.",["wohne","wohnst","wohnt"],"wohne","wohnen avec ich : wohne.","conjugation"),
build("Construisez : « Je viens de France. »",["Frankreich","komme","aus","Ich"],"Ich komme aus Frankreich","La structure est kommen aus + pays.","production"),
mcq("Quelle question demande le lieu de vie ?",["Wo wohnst du?","Woher kommst du?","Wie heißt du?"],"Wo wohnst du?","Wo = où ; wohnen = habiter.","grammar")
],
dialogue:[
dialogue(["A: Hallo! Ich heiße Lukas.","B: ..."],"Quelle réponse poursuit naturellement la présentation ?",["Freut mich. Ich heiße Claire.","Eine Rechnung, bitte.","Links."],"Freut mich. Ich heiße Claire.","Freut mich = enchanté(e), ravi(e).","production"),
text("Posez : « Comment t’appelles-tu ? »",["wie heißt du","wie heisst du"],"Wie heißt du?","Wie + heißt + du.","production"),
text("Dites : « Aujourd'hui, j'habite à Genève. »",["heute wohne ich in genf"],"Heute wohne ich in Genf.","Quand Heute est en première position, le verbe reste deuxième : wohne, puis le sujet ich.","production")
]
},
{
id:"u3",title:"Zahlen & persönliche Infos",subtitle:"Nombres, âge, téléphone et avoir.",objective:"Donner des informations personnelles simples et utiliser haben.",
grammar:[
{title:"Haben — avoir",body:"haben est irrégulier au singulier : ich habe, du hast, er/sie hat.",examples:[["Ich habe eine Frage.","J’ai une question."],["Du hast Zeit.","Tu as du temps."],["Sie hat ein Auto.","Elle a une voiture."]]},
{title:"Dire son âge",body:"En allemand on utilise sein, pas haben : Ich bin dreißig Jahre alt.",examples:[["Ich bin 30 Jahre alt.","J’ai 30 ans."],["Wie alt bist du?","Quel âge as-tu ?"]]}
],
verbs:[{name:"haben",fr:"avoir",forms:["ich habe","du hast","er/sie/es hat","wir haben","ihr habt","sie/Sie haben"]}],
vocab:[["null","zéro"],["eins","un"],["zwei","deux"],["drei","trois"],["zehn","dix"],["zwanzig","vingt"],["dreißig","trente"],["die Nummer","numéro"],["das Jahr","année"],["Wie alt?","Quel âge ?"]],
intro:[
listen("Meine Telefonnummer ist null sieben neun, zwei drei vier, fünf sechs sieben.","Que donne la personne ?",["Son numéro de téléphone","Son adresse","Son prix"],"Son numéro de téléphone","Telefonnummer = numéro de téléphone.","listening"),
mcq("Comment dit-on « J’ai 35 ans » ?",["Ich habe 35 Jahre.","Ich bin 35 Jahre alt.","Ich ist 35."],"Ich bin 35 Jahre alt.","L’âge se construit avec sein.","grammar"),
text("Dites : « J’ai une question. »",["ich habe eine frage"],"Ich habe eine Frage.","haben avec ich : habe.","production")
],
structure:[
cloze("Du ___ Zeit.",["habe","hast","hat"],"hast","haben avec du : hast.","conjugation"),
cloze("Wie alt ___ du?",["bin","bist","ist"],"bist","sein avec du : bist.","conjugation"),
build("Construisez : « Mon numéro est vingt-trois. »",["ist","Nummer","Meine","dreiundzwanzig"],"Meine Nummer ist dreiundzwanzig","Le verbe ist occupe la deuxième position.","production")
],
dialogue:[
dialogue(["A: Wie alt bist du?","B: ..."],"Vous avez 30 ans.",["Ich bin dreißig Jahre alt.","Ich habe dreißig.","Dreißig Euro."],"Ich bin dreißig Jahre alt.","L’âge se formule avec sein.","production"),
text("Demandez : « Quel est votre numéro ? » (forme polie)",["wie ist ihre nummer","wie lautet ihre nummer"],"Wie ist Ihre Nummer?","Ihre prend une majuscule dans la forme de politesse.","production"),
mcq("« Ich habe keine Zeit » signifie :",["Je n’ai pas le temps.","J’ai beaucoup de temps.","Je suis en retard."],"Je n’ai pas le temps.","keine nie ici le nom féminin Zeit.","vocab")
]
},
{
id:"u4",title:"Meine Familie",subtitle:"Articles, genres et possessifs.",objective:"Présenter sa famille avec der/die/das et mein/dein au nominatif.",
grammar:[
{title:"der, die, das",body:"Chaque nom allemand a un genre grammatical. Il faut apprendre le nom avec son article : der Mann, die Frau, das Kind.",examples:[["der Bruder","le frère"],["die Schwester","la sœur"],["das Kind","l’enfant"]]},
{title:"mein / meine",body:"Au nominatif, mein s’emploie avec un nom masculin ou neutre, meine avec un nom féminin ou pluriel.",examples:[["mein Vater","mon père"],["meine Mutter","ma mère"],["mein Kind","mon enfant"],["meine Eltern","mes parents"]]}
],
verbs:[{name:"haben",fr:"avoir",forms:["ich habe","du hast","er/sie hat","wir haben","ihr habt","sie/Sie haben"]}],
vocab:[["die Familie","famille"],["die Mutter","mère"],["der Vater","père"],["der Bruder","frère"],["die Schwester","sœur"],["das Kind","enfant"],["die Eltern","parents"],["der Mann","homme / mari"],["die Frau","femme / épouse"],["mein / meine","mon / ma / mes"]],
intro:[
mcq("Quel article accompagne Bruder ?",["der","die","das"],"der","On apprend : der Bruder.","grammar"),
listen("Ich habe einen Bruder und eine Schwester.","Combien de frères et sœurs la personne mentionne-t-elle ?",["Un","Deux","Trois"],"Deux","un frère + une sœur = deux personnes.","listening"),
text("Dites : « Ma mère s’appelle Anna. »",["meine mutter heißt anna","meine mutter heisst anna"],"Meine Mutter heißt Anna.","Mutter est féminin : meine Mutter.","production")
],
structure:[
cloze("___ Vater wohnt in Bern.",["Mein","Meine","Meinen"],"Mein","Vater est masculin nominatif : mein Vater.","grammar"),
cloze("___ Schwester ist Ärztin.",["Mein","Meine","Meiner"],"Meine","Schwester est féminin nominatif : meine.","grammar"),
build("Construisez : « Mes parents habitent à Zurich. »",["wohnen","Meine","Zürich","in","Eltern"],"Meine Eltern wohnen in Zürich","Eltern est pluriel : meine Eltern.","production")
],
dialogue:[
dialogue(["A: Hast du Geschwister?","B: ..."],"Répondez : « J’ai une sœur. »",["Ich habe eine Schwester.","Ich bin eine Schwester.","Meine eine Schwester."],"Ich habe eine Schwester.","haben exprime la possession.","production"),
text("Dites : « Mon frère est étudiant. »",["mein bruder ist student"],"Mein Bruder ist Student.","Bruder est masculin nominatif : mein Bruder.","production"),
mcq("Pourquoi apprendre « das Kind » plutôt que seulement « Kind » ?",["Parce que l’article fait partie de l’information grammaticale du nom.","Parce que das signifie toujours petit.","Parce que Kind est un verbe."],"Parce que l’article fait partie de l’information grammaticale du nom.","Le genre conditionnera ensuite articles, pronoms et adjectifs.","grammar")
]
},
{
id:"u5",title:"Mein Alltag",subtitle:"Présent, ordre des mots et verbes séparables.",objective:"Décrire une journée simple et comprendre la position du verbe.",
grammar:[
{title:"Présent régulier",body:"Pour beaucoup de verbes : ich -e, du -st, er/sie -t, wir -en, ihr -t, sie/Sie -en.",examples:[["ich arbeite","je travaille"],["du lernst","tu apprends"],["wir wohnen","nous habitons"]]},
{title:"Verbes séparables",body:"Avec un verbe séparable, le préfixe part à la fin de la phrase : aufstehen → Ich stehe um sieben Uhr auf.",examples:[["Ich stehe früh auf.","Je me lève tôt."],["Wir kaufen heute ein.","Nous faisons les courses aujourd’hui."]]}
],
verbs:[
{name:"arbeiten",fr:"travailler",forms:["ich arbeite","du arbeitest","er/sie arbeitet","wir arbeiten","ihr arbeitet","sie/Sie arbeiten"]},
{name:"aufstehen",fr:"se lever",forms:["ich stehe ... auf","du stehst ... auf","er/sie steht ... auf","wir stehen ... auf","ihr steht ... auf","sie/Sie stehen ... auf"]}
],
vocab:[["arbeiten","travailler"],["lernen","apprendre / étudier"],["aufstehen","se lever"],["frühstücken","prendre le petit-déjeuner"],["essen","manger"],["schlafen","dormir"],["morgens","le matin"],["abends","le soir"],["um sieben Uhr","à sept heures"],["jeden Tag","chaque jour"]],
intro:[
listen("Ich stehe um sieben Uhr auf und arbeite ab acht Uhr.","Que décrit la personne ?",["Sa routine du matin","Une commande","Sa famille"],"Sa routine du matin","aufstehen est un verbe séparable.","listening"),
cloze("Ich arbeit___ in Genf.",["e","st","t"],"e","Avec ich : arbeite.","conjugation"),
mcq("Où va le préfixe de aufstehen dans une phrase simple ?",["Juste après le sujet","À la fin","Il disparaît"],"À la fin","Ich stehe um sieben Uhr auf.","grammar")
],
structure:[
cloze("Du lern___ Deutsch.",["e","st","t"],"st","Avec du : lernst.","conjugation"),
build("Construisez : « Je me lève à sept heures. »",["Uhr","stehe","sieben","Ich","auf","um"],"Ich stehe um sieben Uhr auf","stehe est en deuxième position ; auf part à la fin.","production"),
mcq("Quelle phrase respecte l’ordre allemand ?",["Heute ich arbeite in Bern.","Heute arbeite ich in Bern.","Heute in Bern ich arbeite."],"Heute arbeite ich in Bern.","Le verbe reste en deuxième position, donc avant le sujet si Heute est premier.","grammar")
],
dialogue:[
dialogue(["A: Wann stehst du auf?","B: ..."],"Vous vous levez à 6 h 30.",["Ich stehe um halb sieben auf.","Ich bin halb sieben.","Um auf sieben."],"Ich stehe um halb sieben auf.","halb sieben signifie 6 h 30 en allemand.","production"),
text("Dites : « Le soir, j’apprends l’allemand. »",["abends lerne ich deutsch"],"Abends lerne ich Deutsch.","Abends occupe la première position, donc le verbe lerne reste deuxième.","production"),
text("Demandez : « À quelle heure travailles-tu ? »",["wann arbeitest du","um wie viel uhr arbeitest du"],"Wann arbeitest du?","Dans une question W-, le verbe vient juste après le mot interrogatif.","production")
]
},
{
id:"u6",title:"Im Café",subtitle:"Commander et découvrir l’accusatif.",objective:"Commander poliment et utiliser les articles à l’accusatif dans des phrases fréquentes.",
grammar:[
{title:"L’accusatif : le masculin change",body:"Au singulier, seul l’article masculin change nettement : der → den, ein → einen. Féminin et neutre restent die/eine et das/ein.",examples:[["Ich nehme einen Kaffee.","Je prends un café."],["Ich möchte eine Suppe.","Je voudrais une soupe."],["Ich nehme das Wasser.","Je prends l’eau."]]},
{title:"möchte — je voudrais",body:"möchte est la forme la plus utile pour commander poliment. Elle est suivie directement de ce que l’on souhaite.",examples:[["Ich möchte einen Kaffee.","Je voudrais un café."],["Wir möchten zahlen.","Nous voudrions payer."]]}
],
verbs:[{name:"möchten",fr:"voudrais / souhaiter",forms:["ich möchte","du möchtest","er/sie möchte","wir möchten","ihr möchtet","sie/Sie möchten"]}],
vocab:[["der Kaffee","café"],["der Tee","thé"],["das Wasser","eau"],["die Suppe","soupe"],["das Brot","pain"],["die Rechnung","addition"],["zahlen","payer"],["nehmen","prendre"],["möchte","voudrais"],["noch etwas?","autre chose ?"]],
intro:[
dialogue(["Kellner: Was möchten Sie?","Sie: ..."],"Vous voulez un café.",["Ich möchte einen Kaffee.","Ich bin Kaffee.","Ich wohne Kaffee."],"Ich möchte einen Kaffee.","Kaffee est masculin et objet direct : einen Kaffee.","production"),
listen("Das macht vier Euro zwanzig.","Quel prix entendez-vous ?",["4,20 €","14,20 €","40,20 €"],"4,20 €","vier Euro zwanzig = 4,20 €.","listening"),
mcq("Pourquoi dit-on « einen Kaffee » ?",["Parce que Kaffee est masculin à l’accusatif.","Parce que Kaffee est pluriel.","Parce que einen signifie chaud."],"Parce que Kaffee est masculin à l’accusatif.","ein devient einen au masculin accusatif.","grammar")
],
structure:[
cloze("Ich möchte ___ Tee.",["ein","einen","eine"],"einen","Tee est masculin : einen Tee.","grammar"),
cloze("Sie nimmt ___ Suppe.",["eine","einen","ein"],"eine","Suppe est féminin : eine reste une à l’accusatif.","grammar"),
build("Construisez : « Nous voudrions payer, s’il vous plaît. »",["bitte","möchten","Wir","zahlen"],"Wir möchten zahlen bitte","La structure essentielle est wir möchten + infinitif.","production")
],
dialogue:[
dialogue(["Kellner: Noch etwas?","Sie: ..."],"Vous ne voulez rien d’autre.",["Nein, danke. Das ist alles.","Ich bin Frankreich.","Links, bitte."],"Nein, danke. Das ist alles.","Das ist alles = c’est tout.","production"),
text("Demandez : « L’addition, s’il vous plaît. »",["die rechnung bitte","ich möchte die rechnung bitte"],"Die Rechnung, bitte.","Formule courte et très courante.","production"),
text("Commandez : « Je voudrais une eau et un thé. »",["ich möchte ein wasser und einen tee"],"Ich möchte ein Wasser und einen Tee.","Wasser est neutre ; Tee est masculin accusatif.","production")
]
},
{
id:"u7",title:"Einkaufen",subtitle:"Prix, quantités et kein.",objective:"Acheter quelque chose, demander un prix et nier un nom avec kein.",
grammar:[
{title:"kein — aucun / pas de",body:"kein se décline comme ein. À l’accusatif masculin : keinen. Au féminin : keine. Au neutre : kein.",examples:[["Ich habe keinen Hund.","Je n’ai pas de chien."],["Ich brauche keine Tüte.","Je n’ai pas besoin de sac."],["Ich habe kein Bargeld.","Je n’ai pas d’espèces."]]},
{title:"Combien ?",body:"Wie viel? s’emploie avec une quantité ou un prix. Wie viele? avec des éléments comptables au pluriel.",examples:[["Wie viel kostet das?","Combien ça coûte ?"],["Wie viele Äpfel?","Combien de pommes ?"]]}
],
verbs:[{name:"brauchen",fr:"avoir besoin de",forms:["ich brauche","du brauchst","er/sie braucht","wir brauchen","ihr braucht","sie/Sie brauchen"]}],
vocab:[["kosten","coûter"],["kaufen","acheter"],["brauchen","avoir besoin"],["billig","bon marché"],["teuer","cher"],["das Geld","argent"],["die Karte","carte"],["bar","en espèces"],["die Tüte","sac"],["Wie viel?","combien ?"]],
intro:[
listen("Das kostet zwölf Euro fünfzig.","Quel est le prix ?",["12,50 €","20,50 €","2,50 €"],"12,50 €","zwölf Euro fünfzig = 12,50 €.","listening"),
mcq("« Wie viel kostet das? » signifie :",["Combien ça coûte ?","Où est-ce ?","Quelle taille ?"],"Combien ça coûte ?","Wie viel interroge ici le prix.","vocab"),
text("Dites : « Je n’ai pas d’espèces. »",["ich habe kein bargeld"],"Ich habe kein Bargeld.","Bargeld est neutre : kein Bargeld.","production")
],
structure:[
cloze("Ich brauche ___ Tüte.",["keine","keinen","kein"],"keine","Tüte est féminin : keine Tüte.","grammar"),
cloze("Er kauft ___ Pullover.",["einen","eine","ein"],"einen","Pullover est masculin et objet direct : einen.","grammar"),
build("Construisez : « Je paie par carte. »",["mit","zahle","Karte","Ich","der"],"Ich zahle mit der Karte","mit impose le datif : mit der Karte. Ici, retenez surtout l’expression fixe.","production")
],
dialogue:[
dialogue(["Verkäuferin: Brauchen Sie eine Tüte?","Sie: ..."],"Vous n’avez pas besoin de sac.",["Nein, danke. Ich brauche keine Tüte.","Ich bin Tüte.","Zwölf Uhr."],"Nein, danke. Ich brauche keine Tüte.","keine Tüte nie le nom féminin.","production"),
text("Demandez : « Combien coûte ce pull ? »",["wie viel kostet dieser pullover","was kostet dieser pullover"],"Wie viel kostet dieser Pullover?","Wie viel kostet...? est une question standard sur le prix.","production"),
mcq("« Das ist zu teuer » signifie :",["C’est trop cher.","C’est très loin.","C’est fermé."],"C’est trop cher.","zu + adjectif = trop...","vocab")
]
},
{
id:"u8",title:"Freizeit",subtitle:"Aimer, faire volontiers et pouvoir.",objective:"Parler de loisirs et utiliser gern, mögen et können.",
grammar:[
{title:"gern",body:"Pour dire que l’on aime faire une activité, l’allemand utilise très souvent gern avec le verbe : Ich lese gern.",examples:[["Ich koche gern.","J’aime cuisiner."],["Wir reisen gern.","Nous aimons voyager."]]},
{title:"Verbe modal + infinitif final",body:"Avec können, le modal est conjugué en deuxième position et l’autre verbe part à l’infinitif en fin de phrase.",examples:[["Ich kann Deutsch sprechen.","Je peux parler allemand."],["Wir können heute kommen.","Nous pouvons venir aujourd’hui."]]}
],
verbs:[
{name:"können",fr:"pouvoir / savoir faire",forms:["ich kann","du kannst","er/sie kann","wir können","ihr könnt","sie/Sie können"]},
{name:"mögen",fr:"aimer",forms:["ich mag","du magst","er/sie mag","wir mögen","ihr mögt","sie/Sie mögen"]}
],
vocab:[["gern","volontiers / aimer faire"],["lesen","lire"],["reisen","voyager"],["kochen","cuisiner"],["Sport machen","faire du sport"],["Musik hören","écouter de la musique"],["schwimmen","nager"],["das Kino","cinéma"],["mögen","aimer"],["können","pouvoir"]],
intro:[
mcq("Comment dire naturellement « J’aime lire » ?",["Ich lese gern.","Ich bin gern lesen.","Ich mag lese."],"Ich lese gern.","gern accompagne le verbe pour exprimer le plaisir de faire l’activité.","grammar"),
listen("Ich kann ein bisschen Deutsch sprechen.","Que sait faire la personne ?",["Parler un peu allemand","Écrire un roman","Conduire"],"Parler un peu allemand","kann + sprechen exprime une capacité.","listening"),
text("Dites : « J’aime beaucoup voyager. »",["ich reise sehr gern","ich reise gern"],"Ich reise sehr gern.","sehr gern renforce le plaisir.","production")
],
structure:[
cloze("Ich ___ heute schwimmen.",["kann","kannst","können"],"kann","können avec ich : kann.","conjugation"),
build("Construisez : « Nous pouvons cuisiner ce soir. »",["heute","können","Wir","kochen","Abend"],"Wir können heute Abend kochen","Le modal est conjugué ; l’infinitif kochen va en fin de phrase.","production"),
mcq("Quelle phrase est correcte ?",["Ich kann sprechen Deutsch.","Ich kann Deutsch sprechen.","Ich Deutsch kann sprechen."],"Ich kann Deutsch sprechen.","Avec un modal, l’infinitif est à la fin.","grammar")
],
dialogue:[
dialogue(["A: Was machst du gern?","B: ..."],"Vous aimez faire du sport.",["Ich mache gern Sport.","Ich bin Sport.","Ich kann gern."],"Ich mache gern Sport.","machen + gern est très naturel.","production"),
text("Demandez : « Peux-tu venir aujourd’hui ? »",["kannst du heute kommen"],"Kannst du heute kommen?","Dans une question oui/non, le verbe conjugué vient en première position.","production"),
text("Dites : « J’aime la musique, mais je préfère le cinéma. »",["ich mag musik aber ich mag kino lieber","ich mag musik aber kino mag ich lieber"],"Ich mag Musik, aber Kino mag ich lieber.","lieber = de préférence / plus volontiers.","production")
]
},
{
id:"u9",title:"In der Stadt",subtitle:"Lieux, directions et es gibt.",objective:"Demander son chemin et comprendre des indications simples.",
grammar:[
{title:"es gibt + accusatif",body:"es gibt signifie « il y a » et est suivi de l’accusatif.",examples:[["Es gibt einen Bahnhof.","Il y a une gare."],["Es gibt eine Apotheke.","Il y a une pharmacie."],["Es gibt ein Museum.","Il y a un musée."]]},
{title:"Directions simples",body:"geradeaus = tout droit, links = à gauche, rechts = à droite. Les indications utilisent souvent dann = puis.",examples:[["Gehen Sie geradeaus.","Allez tout droit."],["Dann links.","Puis à gauche."]]}
],
verbs:[{name:"gehen",fr:"aller à pied",forms:["ich gehe","du gehst","er/sie geht","wir gehen","ihr geht","sie/Sie gehen"]}],
vocab:[["der Bahnhof","gare"],["die Apotheke","pharmacie"],["das Museum","musée"],["die Straße","rue"],["links","à gauche"],["rechts","à droite"],["geradeaus","tout droit"],["hier","ici"],["dort","là-bas"],["Es gibt...","Il y a..."]],
intro:[
listen("Gehen Sie geradeaus und dann rechts.","Quelle direction ?",["Tout droit puis à droite","À gauche puis tout droit","Retour en arrière"],"Tout droit puis à droite","geradeaus = tout droit ; rechts = droite.","listening"),
text("Demandez : « Où est la gare ? »",["wo ist der bahnhof"],"Wo ist der Bahnhof?","Wo + ist + sujet.","production"),
mcq("Pourquoi dit-on « Es gibt einen Bahnhof » ?",["Parce que es gibt prend l’accusatif.","Parce que Bahnhof est pluriel.","Parce que einen signifie près."],"Parce que es gibt prend l’accusatif.","der Bahnhof devient einen Bahnhof après es gibt.","grammar")
],
structure:[
cloze("Es gibt ___ Apotheke hier.",["eine","einen","ein"],"eine","Apotheke est féminin : eine.","grammar"),
cloze("Es gibt ___ Museum in der Stadt.",["ein","einen","eine"],"ein","Museum est neutre : ein.","grammar"),
build("Construisez : « Allez tout droit, puis à gauche. »",["links","Sie","dann","geradeaus","gehen"],"Gehen Sie geradeaus dann links","Dans l’impératif poli : Gehen Sie...","production")
],
dialogue:[
dialogue(["A: Entschuldigung, wo ist die Apotheke?","B: ..."],"Quelle réponse est plausible ?",["Geradeaus, dann links.","Einen Kaffee, bitte.","Ich bin dreißig."],"Geradeaus, dann links.","Réponse typique pour une direction.","production"),
text("Dites : « Il y a un musée près d’ici. »",["es gibt ein museum hier in der nähe","es gibt hier ein museum"],"Es gibt hier ein Museum.","es gibt + accusatif neutre : ein Museum.","production"),
mcq("« Ist das weit? » signifie :",["C’est loin ?","C’est cher ?","C’est ouvert ?"],"C’est loin ?","weit = loin.","vocab")
]
},
{
id:"u10",title:"Zu Hause",subtitle:"Datif de base et localisation.",objective:"Décrire où se trouvent les choses avec quelques prépositions fréquentes au datif.",
grammar:[
{title:"Datif après mit, bei, von, zu",body:"Certaines prépositions imposent toujours le datif. À ce niveau, retenez surtout des blocs utiles : mit dem Bus, bei der Arbeit, mit der Karte.",examples:[["mit dem Bus","en bus"],["mit der Karte","par carte"],["bei der Arbeit","au travail"]]},
{title:"in pour une position",body:"Avec une localisation sans mouvement, in se construit souvent avec le datif : in der Küche, im Zimmer. im = in dem.",examples:[["Ich bin in der Küche.","Je suis dans la cuisine."],["Das Buch ist im Zimmer.","Le livre est dans la chambre."]]}
],
verbs:[{name:"liegen / stehen",fr:"être posé / se trouver",forms:["Das Buch liegt hier.","Die Flasche steht dort.","Die Schlüssel liegen auf dem Tisch."],note:"Ces verbes servent à préciser la position d’un objet."}],
vocab:[["das Haus","maison"],["die Wohnung","appartement"],["das Zimmer","pièce / chambre"],["die Küche","cuisine"],["der Tisch","table"],["der Stuhl","chaise"],["im Zimmer","dans la pièce"],["in der Küche","dans la cuisine"],["mit dem Bus","en bus"],["mit der Karte","par carte"]],
intro:[
listen("Die Schlüssel liegen auf dem Tisch.","Où sont les clés ?",["Sur la table","Dans la cuisine","Sous la chaise"],"Sur la table","auf dem Tisch indique ici une position.","listening"),
mcq("Que signifie « im Zimmer » ?",["dans la pièce","vers la pièce","avec la pièce"],"dans la pièce","im = in dem, datif neutre/masculin.","grammar"),
text("Dites : « Je suis dans la cuisine. »",["ich bin in der küche"],"Ich bin in der Küche.","Position statique : in der Küche.","production")
],
structure:[
cloze("Ich fahre mit ___ Bus.",["dem","den","der"],"dem","mit impose le datif : mit dem Bus.","grammar"),
cloze("Ich zahle mit ___ Karte.",["der","die","den"],"der","mit + nom féminin : mit der Karte.","grammar"),
build("Construisez : « Le livre est dans la chambre. »",["ist","Zimmer","Buch","im","Das"],"Das Buch ist im Zimmer","im = in dem.","production")
],
dialogue:[
dialogue(["A: Wo sind die Schlüssel?","B: ..."],"Ils sont sur la table.",["Sie liegen auf dem Tisch.","Sie sind einen Kaffee.","Sie fahren links."],"Sie liegen auf dem Tisch.","liegen décrit naturellement un objet posé à plat.","production"),
text("Dites : « Je vais au travail en bus. »",["ich fahre mit dem bus zur arbeit"],"Ich fahre mit dem Bus zur Arbeit.","mit demande le datif ; zur = zu der.","production"),
mcq("Quelle préposition impose toujours le datif ?",["mit","für","durch"],"mit","mit est une préposition toujours suivie du datif.","grammar")
]
},
{
id:"u11",title:"Unterwegs",subtitle:"Projets, transports et verbes modaux.",objective:"Parler de projets et obligations avec müssen et wollen.",
grammar:[
{title:"müssen / wollen + infinitif",body:"Comme avec können, le modal est conjugué et l’infinitif va en fin de phrase.",examples:[["Ich muss arbeiten.","Je dois travailler."],["Wir wollen nach Berlin fahren.","Nous voulons aller à Berlin."]]},
{title:"nach / in",body:"nach s’emploie avec la plupart des villes et pays sans article : nach Berlin, nach Deutschland. in avec les pays ayant un article : in die Schweiz.",examples:[["Ich fahre nach Berlin.","Je vais à Berlin."],["Wir fahren in die Schweiz.","Nous allons en Suisse."]]}
],
verbs:[
{name:"müssen",fr:"devoir",forms:["ich muss","du musst","er/sie muss","wir müssen","ihr müsst","sie/Sie müssen"]},
{name:"wollen",fr:"vouloir",forms:["ich will","du willst","er/sie will","wir wollen","ihr wollt","sie/Sie wollen"]}
],
vocab:[["fahren","aller / conduire"],["der Zug","train"],["der Bus","bus"],["das Ticket","billet"],["abfahren","partir (transport)"],["ankommen","arriver"],["müssen","devoir"],["wollen","vouloir"],["nach Berlin","à Berlin"],["in die Schweiz","en Suisse"]],
intro:[
listen("Morgen muss ich nach Zürich fahren.","Quel est le projet ?",["Aller à Zurich demain","Rester à Zurich hier","Commander à Zurich"],"Aller à Zurich demain","Morgen + muss + sujet + infinitif final.","listening"),
cloze("Ich ___ morgen arbeiten.",["muss","musst","müssen"],"muss","müssen avec ich : muss.","conjugation"),
mcq("Quelle phrase est correcte ?",["Wir wollen nach Berlin fahren.","Wir wollen fahren nach Berlin.","Wir nach Berlin wollen fahren."],"Wir wollen nach Berlin fahren.","L’infinitif fahren se place à la fin.","grammar")
],
structure:[
cloze("Du ___ ein Ticket kaufen.",["musst","muss","müsst"],"musst","müssen avec du : musst.","conjugation"),
build("Construisez : « Demain, nous voulons aller en Suisse. »",["Schweiz","morgen","wollen","Wir","die","in","fahren"],"Wir wollen morgen in die Schweiz fahren","Modal conjugué + infinitif en fin de phrase.","production"),
mcq("Pourquoi dit-on « nach Deutschland » mais « in die Schweiz » ?",["Parce que Schweiz porte normalement un article.","Parce que Deutschland est une ville.","Parce que nach signifie toujours nord."],"Parce que Schweiz porte normalement un article.","Les pays avec article se construisent souvent avec in + accusatif pour une destination.","grammar")
],
dialogue:[
dialogue(["A: Wann fährt der Zug ab?","B: ..."],"Le train part à 10 h 15.",["Um Viertel nach zehn.","Mit der Karte.","Ich heiße Zug."],"Um Viertel nach zehn.","Viertel nach zehn = 10 h 15.","production"),
text("Demandez : « Où puis-je acheter un billet ? »",["wo kann ich ein ticket kaufen"],"Wo kann ich ein Ticket kaufen?","Le modal kann est juste après Wo ; kaufen part à la fin.","production"),
text("Dites : « Nous devons arriver à huit heures. »",["wir müssen um acht uhr ankommen"],"Wir müssen um acht Uhr ankommen.","ankommen reste à l’infinitif complet après müssen.","production")
]
},
{
id:"u12",title:"Gestern",subtitle:"Premiers pas au Perfekt.",objective:"Raconter quelques actions terminées dans un passé proche.",
grammar:[
{title:"Perfekt avec haben",body:"Beaucoup de verbes utilisent haben + participe passé. Pour un verbe régulier : ge- + radical + -t.",examples:[["Ich habe gearbeitet.","J’ai travaillé."],["Wir haben Deutsch gelernt.","Nous avons appris l’allemand."]]},
{title:"Perfekt avec sein",body:"Plusieurs verbes de déplacement ou de changement d’état utilisent sein, notamment gehen, fahren, kommen.",examples:[["Ich bin nach Hause gegangen.","Je suis rentré(e) à la maison."],["Wir sind nach Berlin gefahren.","Nous sommes allés à Berlin."]]}
],
verbs:[{name:"Perfekt",fr:"passé composé",forms:["ich habe gemacht","du hast gelernt","er hat gegessen","wir sind gefahren","ihr seid gekommen","sie haben gearbeitet"],note:"Les participes irréguliers fréquents doivent être appris progressivement : gegessen, gesehen, gefahren."}],
vocab:[["gestern","hier"],["heute Morgen","ce matin"],["gemacht","fait"],["gearbeitet","travaillé"],["gelernt","appris / étudié"],["gegessen","mangé"],["gesehen","vu"],["gefahren","allé / conduit"],["gekommen","venu"],["gewesen","été"]],
intro:[
listen("Gestern habe ich gearbeitet und danach Freunde gesehen.","Que raconte la personne ?",["Sa journée d’hier","Son programme de demain","Une habitude future"],"Sa journée d’hier","Gestern + Perfekt raconte des événements terminés.","listening"),
cloze("Gestern ___ ich gearbeitet.",["habe","bin","hat"],"habe","arbeiten forme son Perfekt avec haben.","conjugation"),
mcq("Quelle phrase signifie « Je suis allé à Berlin » ?",["Ich habe nach Berlin gegangen.","Ich bin nach Berlin gegangen.","Ich bin Berlin gehen."],"Ich bin nach Berlin gegangen.","gehen forme son Perfekt avec sein.","grammar")
],
structure:[
cloze("Wir ___ nach Zürich gefahren.",["sind","haben","seid"],"sind","fahren comme déplacement se construit ici avec sein.","conjugation"),
build("Construisez : « Hier, j’ai appris l’allemand. »",["Deutsch","Gestern","gelernt","ich","habe"],"Gestern habe ich Deutsch gelernt","Le participe gelernt se place en fin de phrase.","production"),
mcq("Quel participe correspond à essen ?",["geesst","gegessen","geesstet"],"gegessen","essen a un participe irrégulier fréquent : gegessen.","grammar")
],
dialogue:[
dialogue(["A: Was hast du gestern gemacht?","B: ..."],"Vous avez travaillé puis vu des amis.",["Ich habe gearbeitet und Freunde gesehen.","Ich arbeite morgen Freunde.","Ich bin gearbeitet."],"Ich habe gearbeitet und Freunde gesehen.","haben + participes gearbeitet / gesehen.","production"),
text("Dites : « Ce matin, j’ai bu un café. »",["heute morgen habe ich einen kaffee getrunken"],"Heute Morgen habe ich einen Kaffee getrunken.","trinken → getrunken ; Kaffee est masculin accusatif : einen Kaffee.","production"),
text("Dites : « Nous sommes arrivés à huit heures. »",["wir sind um acht uhr angekommen"],"Wir sind um acht Uhr angekommen.","ankommen forme son Perfekt avec sein et le participe angekommen.","production")
]
}
]
};
})();