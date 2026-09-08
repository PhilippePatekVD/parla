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

window.DE_A1={
  id:"a1",
  label:"A1 essentiel",
  cefr:"A1",
  description:"Construire des phrases fiables et gérer les situations du quotidien.",
  units:[
    {
      id:"de-a1-1",title:"Sich vorstellen",goal:"Se présenter, parler de son origine et de son lieu de vie avec heißen, kommen et wohnen.",
      scene:{title:"Une première rencontre",lines:[
        {speaker:"Mia",t:"Hallo, ich heiße Mia. Und du?",fr:"Salut, je m’appelle Mia. Et toi ?"},
        {speaker:"Lucas",t:"Ich heiße Lucas. Ich komme aus Frankreich.",fr:"Je m’appelle Lucas. Je viens de France."},
        {speaker:"Mia",t:"Wo wohnst du?",fr:"Où habites-tu ?"},
        {speaker:"Lucas",t:"Ich wohne in Lausanne, in der Schweiz.",fr:"J’habite à Lausanne, en Suisse."}
      ]},
      grammar:[
        G("heißen","heißen sert à donner le nom : ich heiße… Pour demander : Wie heißt du?",[["Ich heiße Mia.","Je m’appelle Mia."],["Wie heißen Sie?","Comment vous appelez-vous ?"]]),
        G("aus / in","aus indique l’origine : aus Frankreich. in indique ici le lieu de vie : in Lausanne, in der Schweiz.",[["Ich komme aus Deutschland.","Je viens d’Allemagne."],["Ich wohne in Zürich.","J’habite à Zurich."]])
      ],
      verbs:[
        VB("heißen","s'appeler",{"ich":"heiße","du":"heißt","er/sie/es":"heißt","wir":"heißen","ihr":"heißt","sie/Sie":"heißen"},"Verbe fréquent avec ß."),
        VB("wohnen","habiter",{"ich":"wohne","du":"wohnst","er/sie/es":"wohnt","wir":"wohnen","ihr":"wohnt","sie/Sie":"wohnen"},"Verbe régulier.")
      ],
      vocab:[
        V("der Name","le nom","der","Name"),V("die Stadt","la ville","die","Stadt"),V("das Land","le pays","das","Land"),
        V("Frankreich","France"),V("Deutschland","Allemagne"),V("die Schweiz","Suisse","die","Schweiz"),
        V("kommen","venir"),V("wohnen","habiter"),V("heißen","s'appeler"),V("aus","de / originaire de")
      ],
      phrases:[
        P("Ich heiße Lucas.","Je m’appelle Lucas."),P("Wie heißt du?","Comment t’appelles-tu ?"),P("Ich komme aus Frankreich.","Je viens de France."),
        P("Wo wohnst du?","Où habites-tu ?"),P("Ich wohne in Lausanne.","J’habite à Lausanne."),P("Ich wohne in der Schweiz.","J’habite en Suisse.")
      ],
      drills:[
        M("Complète : « Ich ___ Lucas. »",["heiße","heißt","heißen"],"heiße","heißen avec ich : heiße.","conjugation"),
        M("Pour l’origine, on emploie surtout :",["aus","in","zu"],"aus","Ich komme aus Frankreich.","grammar"),
        M("Pour demander le lieu de vie :",["Wo wohnst du?","Woher kommst du?","Wie heißt du?"],"Wo wohnst du?","Wo = où.","grammar"),
        T("Traduis : « Je viens de France. »",["ich komme aus frankreich"],"Ich komme aus Frankreich.","kommen aus + pays.")
      ],
      encounter:{prompts:[
        Q("Présente-toi : « Je m’appelle … »","Ich heiße …","heißen avec ich."),
        Q("Dis : « Je viens de France. »","Ich komme aus Frankreich.","aus pour l’origine."),
        Q("Dis : « J’habite à Lausanne. »","Ich wohne in Lausanne.","in + ville pour le lieu de vie.")
      ]}
    },
    {
      id:"de-a1-2",title:"Meine Familie",goal:"Présenter sa famille et utiliser mein/dein au nominatif avec les trois genres.",
      scene:{title:"Photos de famille",lines:[
        {speaker:"Tom",t:"Das ist meine Mutter und das ist mein Vater.",fr:"Voici ma mère et voici mon père."},
        {speaker:"Eva",t:"Hast du Geschwister?",fr:"Tu as des frères et sœurs ?"},
        {speaker:"Tom",t:"Ja, ich habe einen Bruder und eine Schwester.",fr:"Oui, j’ai un frère et une sœur."},
        {speaker:"Eva",t:"Wohnen deine Eltern hier?",fr:"Tes parents habitent ici ?"}
      ]},
      grammar:[
        G("mein / meine","Au nominatif : mein avec masculin et neutre ; meine avec féminin et pluriel.",[["mein Vater","mon père"],["meine Mutter","ma mère"],["mein Kind","mon enfant"],["meine Eltern","mes parents"]]),
        G("dein / deine","Le même modèle vaut pour dein : dein Bruder, deine Schwester, deine Freunde.",[["dein Bruder","ton frère"],["deine Familie","ta famille"]])
      ],
      vocab:[
        V("die Mutter","la mère","die","Mutter"),V("der Vater","le père","der","Vater"),V("der Bruder","le frère","der","Bruder"),V("die Schwester","la sœur","die","Schwester"),
        V("die Eltern","les parents","die","Eltern"),V("das Kind","l'enfant","das","Kind"),V("der Sohn","le fils","der","Sohn"),V("die Tochter","la fille","die","Tochter"),
        V("die Familie","la famille","die","Familie"),V("die Geschwister","les frères et sœurs","die","Geschwister")
      ],
      phrases:[
        P("Das ist meine Mutter.","Voici ma mère."),P("Das ist mein Vater.","Voici mon père."),P("Ich habe einen Bruder.","J’ai un frère."),
        P("Ich habe eine Schwester.","J’ai une sœur."),P("Meine Eltern wohnen hier.","Mes parents habitent ici."),P("Hast du Geschwister?","Tu as des frères et sœurs ?")
      ],
      drills:[
        M("Complète : « ___ Vater »",["mein","meine","meinen"],"mein","Vater est masculin nominatif.","grammar"),
        M("Complète : « ___ Mutter »",["mein","meine","meiner"],"meine","Mutter est féminin nominatif.","grammar"),
        M("Complète : « ___ Eltern »",["mein","meine","meinen"],"meine","Plural : meine.","grammar")
      ],
      encounter:{prompts:[
        Q("Dis : « Voici ma mère. »","Das ist meine Mutter.","Féminin : meine."),
        Q("Dis : « J’ai un frère. »","Ich habe einen Bruder.","Bruder masculin objet direct : einen."),
        Q("Demande : « Tu as des frères et sœurs ? »","Hast du Geschwister?","Question oui/non : verbe en tête.")
      ]}
    },
    {
      id:"de-a1-3",title:"Mein Alltag",goal:"Décrire sa routine, dire l’heure et maîtriser le principe des verbes séparables.",
      scene:{title:"Une journée normale",lines:[
        {speaker:"Lea",t:"Ich stehe um sieben Uhr auf.",fr:"Je me lève à sept heures."},
        {speaker:"Lea",t:"Dann frühstücke ich und fahre zur Arbeit.",fr:"Ensuite je prends le petit-déjeuner et vais au travail."},
        {speaker:"Lea",t:"Um zwölf Uhr esse ich zu Mittag.",fr:"À midi je déjeune."},
        {speaker:"Lea",t:"Abends sehe ich oft fern.",fr:"Le soir je regarde souvent la télévision."}
      ]},
      grammar:[
        G("Verbes séparables","Le préfixe se place à la fin de la phrase principale : aufstehen → ich stehe … auf ; fernsehen → ich sehe … fern.",[["Ich stehe früh auf.","Je me lève tôt."],["Wir kaufen heute ein.","Nous faisons les courses aujourd’hui."]]),
        G("Le verbe reste en position 2","Même si un complément ouvre la phrase, le verbe conjugué reste deuxième : Um sieben Uhr stehe ich auf.",[["Heute arbeite ich zu Hause.","Aujourd’hui je travaille chez moi."],["Abends sehe ich fern.","Le soir je regarde la télévision."]])
      ],
      verbs:[
        VB("aufstehen","se lever",{"ich":"stehe … auf","du":"stehst … auf","er/sie/es":"steht … auf","wir":"stehen … auf","ihr":"steht … auf","sie/Sie":"stehen … auf"},"Préfixe auf séparé en phrase principale."),
        VB("fernsehen","regarder la télévision",{"ich":"sehe … fern","du":"siehst … fern","er/sie/es":"sieht … fern","wir":"sehen … fern","ihr":"seht … fern","sie/Sie":"sehen … fern"},"Verbe séparable et irrégulier au singulier.")
      ],
      vocab:[
        V("aufstehen","se lever"),V("frühstücken","prendre le petit-déjeuner"),V("arbeiten","travailler"),V("zu Mittag essen","déjeuner"),
        V("nach Hause gehen","rentrer chez soi"),V("fernsehen","regarder la télévision"),V("morgens","le matin"),V("abends","le soir"),
        V("um sieben Uhr","à sept heures"),V("jeden Tag","chaque jour")
      ],
      phrases:[
        P("Ich stehe um sieben Uhr auf.","Je me lève à sept heures."),P("Um acht Uhr fahre ich zur Arbeit.","À huit heures je vais au travail."),
        P("Mittags esse ich zu Hause.","À midi je mange à la maison."),P("Abends sehe ich fern.","Le soir je regarde la télévision."),
        P("Wann stehst du auf?","À quelle heure te lèves-tu ?"),P("Wir kaufen am Samstag ein.","Nous faisons les courses samedi.")
      ],
      drills:[
        M("Dans une phrase principale, le préfixe de aufstehen va :",["à la fin","juste après le sujet","avant le sujet"],"à la fin","Ich stehe um sieben Uhr auf.","wordorder"),
        M("Choisis la phrase correcte :",["Heute ich arbeite zu Hause.","Heute arbeite ich zu Hause.","Heute zu Hause ich arbeite."],"Heute arbeite ich zu Hause.","Le verbe reste en position 2.","wordorder"),
        M("Complète : « Ich ___ um sieben Uhr ___. »",["stehe / auf","auf / stehe","steht / auf"],"stehe / auf","aufstehen se sépare.","conjugation")
      ],
      encounter:{prompts:[
        Q("Dis : « Je me lève à sept heures. »","Ich stehe um sieben Uhr auf.","Verbe séparable."),
        Q("Commence par abends : « Le soir je regarde la télévision. »","Abends sehe ich fern.","Verbe conjugué en position 2."),
        Q("Demande : « À quelle heure te lèves-tu ? »","Wann stehst du auf?","Question W- + verbe + sujet + préfixe final.")
      ]}
    },
    {
      id:"de-a1-4",title:"Im Café",goal:"Commander poliment et consolider l’accusatif avec den/einen/keinen.",
      scene:{title:"Commander",lines:[
        {speaker:"Kellner",t:"Guten Tag. Was möchten Sie?",fr:"Bonjour. Que désirez-vous ?"},
        {speaker:"Gast",t:"Ich möchte einen Kaffee und ein Wasser, bitte.",fr:"Je voudrais un café et une eau, s’il vous plaît."},
        {speaker:"Kellner",t:"Möchten Sie auch einen Kuchen?",fr:"Voulez-vous aussi un gâteau ?"},
        {speaker:"Gast",t:"Nein, danke. Die Rechnung, bitte.",fr:"Non merci. L’addition, s’il vous plaît."}
      ]},
      grammar:[
        G("möchte","möchte est une forme très utile pour exprimer un souhait poli : ich möchte…",[["Ich möchte einen Kaffee.","Je voudrais un café."],["Wir möchten zahlen.","Nous voudrions payer."]]),
        G("Accusatif","Objet direct masculin : der → den ; ein → einen ; kein → keinen. Féminin et neutre restent die/eine et das/ein.",[["Ich nehme den Tee.","Je prends le thé."],["Ich möchte einen Kaffee.","Je voudrais un café."],["Ich nehme eine Suppe.","Je prends une soupe."]])
      ],
      verbs:[
        VB("möchten","voudrais / souhaiter",{"ich":"möchte","du":"möchtest","er/sie/es":"möchte","wir":"möchten","ihr":"möchtet","sie/Sie":"möchten"},"Forme polie très fréquente."),
        VB("nehmen","prendre",{"ich":"nehme","du":"nimmst","er/sie/es":"nimmt","wir":"nehmen","ihr":"nehmt","sie/Sie":"nehmen"},"Changement e → i au singulier du/er.")
      ],
      vocab:[
        V("der Kaffee","le café","der","Kaffee"),V("der Tee","le thé","der","Tee"),V("das Wasser","l'eau","das","Wasser"),V("die Suppe","la soupe","die","Suppe"),
        V("der Kuchen","le gâteau","der","Kuchen"),V("die Rechnung","l'addition","die","Rechnung"),V("zahlen","payer"),V("nehmen","prendre"),
        V("möchten","souhaiter / voudrais"),V("bitte","s'il vous plaît")
      ],
      phrases:[
        P("Ich möchte einen Kaffee.","Je voudrais un café."),P("Ich nehme eine Suppe.","Je prends une soupe."),P("Ein Wasser, bitte.","Une eau, s’il vous plaît."),
        P("Die Rechnung, bitte.","L’addition, s’il vous plaît."),P("Wir möchten zahlen.","Nous voudrions payer."),P("Ich nehme keinen Kuchen.","Je ne prends pas de gâteau.")
      ],
      drills:[
        M("Masculin accusatif de ein :",["einen","ein","einem"],"einen","ein Kaffee → einen Kaffee.","cases"),
        M("Masculin accusatif de der :",["den","der","dem"],"den","der Tee → den Tee.","cases"),
        M("Formule la plus polie :",["Ich will Kaffee.","Ich möchte einen Kaffee.","Kaffee!"],"Ich möchte einen Kaffee.","möchte adoucit la demande.","grammar")
      ],
      encounter:{prompts:[
        Q("Commande un café poliment.","Ich möchte einen Kaffee, bitte.","Masculin accusatif : einen."),
        Q("Demande l’addition.","Die Rechnung, bitte.","Formule courte naturelle."),
        Q("Dis : « Nous voudrions payer. »","Wir möchten zahlen.","möchten + infinitif.")
      ]}
    },
    {
      id:"de-a1-5",title:"In der Stadt",goal:"Demander son chemin, comprendre des directions et utiliser es gibt + accusatif.",
      scene:{title:"Chercher la gare",lines:[
        {speaker:"Tourist",t:"Entschuldigung, wo ist der Bahnhof?",fr:"Excusez-moi, où est la gare ?"},
        {speaker:"Passantin",t:"Gehen Sie geradeaus und dann links.",fr:"Allez tout droit puis à gauche."},
        {speaker:"Tourist",t:"Gibt es hier eine Apotheke?",fr:"Y a-t-il une pharmacie ici ?"},
        {speaker:"Passantin",t:"Ja, es gibt eine Apotheke neben dem Bahnhof.",fr:"Oui, il y a une pharmacie à côté de la gare."}
      ]},
      grammar:[
        G("es gibt + accusatif","es gibt signifie « il y a » et demande l’accusatif.",[["Es gibt einen Bahnhof.","Il y a une gare."],["Es gibt eine Apotheke.","Il y a une pharmacie."],["Es gibt ein Museum.","Il y a un musée."]]),
        G("Impératif poli","Avec Sie : verbe + Sie. Gehen Sie…, Fahren Sie…, Nehmen Sie…",[["Gehen Sie geradeaus.","Allez tout droit."],["Nehmen Sie den Bus.","Prenez le bus."]])
      ],
      verbs:[
        VB("gehen","aller à pied",{"ich":"gehe","du":"gehst","er/sie/es":"geht","wir":"gehen","ihr":"geht","sie/Sie":"gehen"},"Verbe régulier."),
        VB("fahren","aller / conduire",{"ich":"fahre","du":"fährst","er/sie/es":"fährt","wir":"fahren","ihr":"fahrt","sie/Sie":"fahren"},"ä au singulier du/er.")
      ],
      vocab:[
        V("der Bahnhof","la gare","der","Bahnhof"),V("die Apotheke","la pharmacie","die","Apotheke"),V("das Museum","le musée","das","Museum"),V("die Straße","la rue","die","Straße"),
        V("links","à gauche"),V("rechts","à droite"),V("geradeaus","tout droit"),V("neben","à côté de"),V("hier","ici"),V("dort","là-bas")
      ],
      phrases:[
        P("Wo ist der Bahnhof?","Où est la gare ?"),P("Gehen Sie geradeaus.","Allez tout droit."),P("Dann rechts.","Puis à droite."),
        P("Gibt es hier ein Museum?","Y a-t-il un musée ici ?"),P("Es gibt einen Bahnhof.","Il y a une gare."),P("Die Apotheke ist neben dem Bahnhof.","La pharmacie est à côté de la gare.")
      ],
      drills:[
        M("Après es gibt, on utilise :",["l'accusatif","le nominatif seulement","le génitif"],"l'accusatif","Es gibt einen Bahnhof.","cases"),
        M("Complète : « Es gibt ___ Bahnhof. »",["einen","ein","einem"],"einen","Bahnhof masculin accusatif.","cases"),
        M("Impératif poli de gehen :",["Gehen Sie","Sie gehen","Geht du"],"Gehen Sie","Verbe + Sie.","grammar")
      ],
      encounter:{prompts:[
        Q("Demande : « Où est la gare ? »","Wo ist der Bahnhof?","Question de lieu."),
        Q("Dis poliment : « Allez tout droit. »","Gehen Sie geradeaus.","Impératif avec Sie."),
        Q("Demande : « Y a-t-il un musée ici ? »","Gibt es hier ein Museum?","Question avec es gibt.")
      ]}
    },
    {
      id:"de-a1-6",title:"können, müssen, wollen",goal:"Exprimer capacité, obligation et volonté en plaçant l’infinitif à la fin.",
      scene:{title:"Organiser la soirée",lines:[
        {speaker:"Nina",t:"Willst du heute ins Kino gehen?",fr:"Tu veux aller au cinéma aujourd’hui ?"},
        {speaker:"Max",t:"Ich kann nicht. Ich muss arbeiten.",fr:"Je ne peux pas. Je dois travailler."},
        {speaker:"Nina",t:"Kannst du morgen kommen?",fr:"Tu peux venir demain ?"},
        {speaker:"Max",t:"Ja, morgen kann ich kommen.",fr:"Oui, demain je peux venir."}
      ]},
      grammar:[
        G("Modal + infinitif final","Le modal est conjugué en deuxième position ; le deuxième verbe reste à l’infinitif tout à la fin.",[["Ich kann Deutsch sprechen.","Je peux parler allemand."],["Wir müssen heute arbeiten.","Nous devons travailler aujourd’hui."]]),
        G("V2 reste valable","Morgen kann ich kommen : le complément Morgen est premier, kann deuxième, le sujet vient ensuite.",[["Heute muss ich arbeiten.","Aujourd’hui je dois travailler."],["Am Samstag wollen wir reisen.","Samedi nous voulons voyager."]])
      ],
      verbs:[
        VB("können","pouvoir / savoir faire",{"ich":"kann","du":"kannst","er/sie/es":"kann","wir":"können","ihr":"könnt","sie/Sie":"können"},"Modal irrégulier."),
        VB("müssen","devoir",{"ich":"muss","du":"musst","er/sie/es":"muss","wir":"müssen","ihr":"müsst","sie/Sie":"müssen"},"Modal irrégulier."),
        VB("wollen","vouloir",{"ich":"will","du":"willst","er/sie/es":"will","wir":"wollen","ihr":"wollt","sie/Sie":"wollen"},"Modal irrégulier.")
      ],
      vocab:[
        V("können","pouvoir"),V("müssen","devoir"),V("wollen","vouloir"),V("kommen","venir"),V("gehen","aller"),
        V("arbeiten","travailler"),V("reisen","voyager"),V("heute","aujourd'hui"),V("morgen","demain"),V("zusammen","ensemble")
      ],
      phrases:[
        P("Ich kann Deutsch sprechen.","Je peux parler allemand."),P("Ich muss heute arbeiten.","Je dois travailler aujourd’hui."),P("Wir wollen reisen.","Nous voulons voyager."),
        P("Kannst du morgen kommen?","Peux-tu venir demain ?"),P("Morgen kann ich kommen.","Demain je peux venir."),P("Wir müssen jetzt gehen.","Nous devons partir maintenant.")
      ],
      drills:[
        M("Avec un modal, l’infinitif va :",["en fin de phrase","juste après le sujet","avant le modal"],"en fin de phrase","Ich kann Deutsch sprechen.","wordorder"),
        M("Complète : « Ich ___ arbeiten. »",["muss","musst","müssen"],"muss","müssen avec ich.","conjugation"),
        M("Choisis la bonne phrase :",["Morgen ich kann kommen.","Morgen kann ich kommen.","Morgen kommen kann ich."],"Morgen kann ich kommen.","V2 : kann en deuxième position.","wordorder")
      ],
      encounter:{prompts:[
        Q("Dis : « Je peux parler allemand. »","Ich kann Deutsch sprechen.","Modal + infinitif final."),
        Q("Dis : « Je dois travailler aujourd’hui. »","Ich muss heute arbeiten.","müssen + infinitif."),
        Q("Demande : « Peux-tu venir demain ? »","Kannst du morgen kommen?","Question oui/non : modal en tête.")
      ]}
    },
    {
      id:"de-a1-7",title:"Mit dem Bus: le datif",goal:"Comprendre le datif après des prépositions fréquentes et transformer der/die/das correctement.",
      scene:{title:"Se déplacer et rencontrer",lines:[
        {speaker:"Lara",t:"Ich fahre mit dem Bus zur Arbeit.",fr:"Je vais au travail en bus."},
        {speaker:"Jan",t:"Ich bin heute bei meiner Schwester.",fr:"Je suis aujourd’hui chez ma sœur."},
        {speaker:"Lara",t:"Kommst du später zu mir?",fr:"Tu viens chez moi plus tard ?"},
        {speaker:"Jan",t:"Ja, ich komme mit einem Freund.",fr:"Oui, je viens avec un ami."}
      ]},
      grammar:[
        G("Prépositions toujours au datif","mit, bei, von, zu demandent le datif.",[["mit dem Bus","en bus"],["bei der Arbeit","au travail"],["von einem Freund","d’un ami"],["zu meiner Schwester","chez ma sœur"]]),
        G("Articles au datif","der → dem ; die → der ; das → dem ; pluriel die → den (+ souvent -n au nom). ein → einem ; eine → einer.",[["mit dem Mann","avec l’homme"],["mit der Frau","avec la femme"],["mit einem Kind","avec un enfant"]])
      ],
      vocab:[
        V("der Bus","le bus","der","Bus"),V("der Zug","le train","der","Zug"),V("die Arbeit","le travail","die","Arbeit"),V("der Freund","l'ami","der","Freund"),
        V("die Freundin","l'amie","die","Freundin"),V("mit","avec"),V("bei","chez / auprès de"),V("von","de / depuis"),V("zu","vers / chez"),V("später","plus tard")
      ],
      phrases:[
        P("Ich fahre mit dem Bus.","Je vais en bus."),P("Ich komme mit einem Freund.","Je viens avec un ami."),P("Ich bin bei meiner Schwester.","Je suis chez ma sœur."),
        P("Kommst du zu mir?","Tu viens chez moi ?"),P("Das ist von einem Freund.","C’est d’un ami."),P("Ich zahle mit der Karte.","Je paie par carte.")
      ],
      drills:[
        M("mit demande toujours :",["le datif","l'accusatif","le nominatif"],"le datif","mit + datif.","cases"),
        M("Datif de der :",["dem","den","der"],"dem","der Mann → mit dem Mann.","cases"),
        M("Datif de die au féminin :",["der","die","den"],"der","die Frau → mit der Frau.","cases"),
        M("Datif de ein masculin/neutre :",["einem","einen","ein"],"einem","mit einem Freund.","cases")
      ],
      encounter:{prompts:[
        Q("Dis : « Je vais en bus. »","Ich fahre mit dem Bus.","mit + datif."),
        Q("Dis : « Je viens avec un ami. »","Ich komme mit einem Freund.","ein → einem au datif."),
        Q("Dis : « Je paie par carte. »","Ich zahle mit der Karte.","die Karte → der Karte au datif.")
      ]}
    },
    {
      id:"de-a1-8",title:"Wo? Wohin?",goal:"Distinguer position et mouvement avec les prépositions à double cas les plus utiles.",
      scene:{title:"À la maison",lines:[
        {speaker:"Mila",t:"Wo ist das Buch?",fr:"Où est le livre ?"},
        {speaker:"Noah",t:"Es liegt auf dem Tisch.",fr:"Il est posé sur la table."},
        {speaker:"Mila",t:"Und wohin legst du die Schlüssel?",fr:"Et où poses-tu les clés ?"},
        {speaker:"Noah",t:"Ich lege sie auf den Tisch.",fr:"Je les pose sur la table."}
      ]},
      grammar:[
        G("Wo? = position → datif","Avec in, an, auf… une position répondant à Wo? prend généralement le datif.",[["Das Buch liegt auf dem Tisch.","Le livre est sur la table."],["Ich bin in der Küche.","Je suis dans la cuisine."]]),
        G("Wohin? = direction → accusatif","Un mouvement vers une destination répondant à Wohin? prend généralement l’accusatif.",[["Ich lege das Buch auf den Tisch.","Je pose le livre sur la table."],["Ich gehe in die Küche.","Je vais dans la cuisine."]])
      ],
      vocab:[
        V("der Tisch","la table","der","Tisch"),V("die Küche","la cuisine","die","Küche"),V("das Zimmer","la pièce","das","Zimmer"),V("die Wand","le mur","die","Wand"),
        V("auf","sur"),V("in","dans"),V("an","contre / à"),V("liegen","être posé à plat"),V("stehen","être debout / se trouver"),V("legen","poser à plat")
      ],
      phrases:[
        P("Das Buch liegt auf dem Tisch.","Le livre est sur la table."),P("Ich lege das Buch auf den Tisch.","Je pose le livre sur la table."),
        P("Ich bin in der Küche.","Je suis dans la cuisine."),P("Ich gehe in die Küche.","Je vais dans la cuisine."),
        P("Das Bild hängt an der Wand.","Le tableau est au mur."),P("Ich hänge das Bild an die Wand.","J’accroche le tableau au mur.")
      ],
      drills:[
        M("Question Wo? appelle généralement :",["le datif","l'accusatif"],"le datif","Position sans déplacement.","cases"),
        M("Question Wohin? appelle généralement :",["l'accusatif","le datif"],"l'accusatif","Direction vers une destination.","cases"),
        M("Complète : « auf ___ Tisch » (position)",["dem","den","der"],"dem","Tisch masculin datif.","cases"),
        M("Complète : « auf ___ Tisch » (direction)",["den","dem","der"],"den","Tisch masculin accusatif.","cases")
      ],
      encounter:{prompts:[
        Q("Dis : « Le livre est sur la table. »","Das Buch liegt auf dem Tisch.","Position → datif."),
        Q("Dis : « Je pose le livre sur la table. »","Ich lege das Buch auf den Tisch.","Direction → accusatif."),
        Q("Dis : « Je vais dans la cuisine. »","Ich gehe in die Küche.","Mouvement → accusatif.")
      ]}
    },
    {
      id:"de-a1-9",title:"Gestern: Perfekt mit haben",goal:"Raconter des actions terminées avec haben + participe passé.",
      scene:{title:"Hier soir",lines:[
        {speaker:"Emma",t:"Was hast du gestern gemacht?",fr:"Qu’as-tu fait hier ?"},
        {speaker:"Ben",t:"Ich habe gearbeitet und später gekocht.",fr:"J’ai travaillé puis cuisiné."},
        {speaker:"Emma",t:"Hast du auch ferngesehen?",fr:"Tu as aussi regardé la télévision ?"},
        {speaker:"Ben",t:"Ja, ich habe einen Film gesehen.",fr:"Oui, j’ai regardé un film."}
      ]},
      grammar:[
        G("Perfekt","À l’oral, le Perfekt est le passé principal. Structure : haben conjugué en position 2 + participe passé en fin de phrase.",[["Ich habe gearbeitet.","J’ai travaillé."],["Wir haben einen Film gesehen.","Nous avons vu un film."]]),
        G("Participes","Verbe régulier : ge- + radical + -t, sauf certains préfixes/verbes en -ieren. Irréguliers fréquents : sehen → gesehen, essen → gegessen, nehmen → genommen.",[["machen → gemacht","faire → fait"],["sehen → gesehen","voir → vu"]])
      ],
      verbs:[
        VB("machen","faire",{"ich":"habe gemacht","du":"hast gemacht","er/sie/es":"hat gemacht","wir":"haben gemacht","ihr":"habt gemacht","sie/Sie":"haben gemacht"},"Perfekt avec haben.","Perfekt","Perfekt"),
        VB("sehen","voir",{"ich":"habe gesehen","du":"hast gesehen","er/sie/es":"hat gesehen","wir":"haben gesehen","ihr":"habt gesehen","sie/Sie":"haben gesehen"},"Participe irrégulier gesehen.","Perfekt","Perfekt")
      ],
      vocab:[
        V("gestern","hier"),V("gemacht","fait"),V("gearbeitet","travaillé"),V("gekocht","cuisiné"),V("gesehen","vu"),
        V("gegessen","mangé"),V("getrunken","bu"),V("gelernt","appris / étudié"),V("später","plus tard"),V("danach","après cela")
      ],
      phrases:[
        P("Ich habe gestern gearbeitet.","J’ai travaillé hier."),P("Was hast du gemacht?","Qu’as-tu fait ?"),P("Wir haben einen Film gesehen.","Nous avons vu un film."),
        P("Ich habe Deutsch gelernt.","J’ai étudié l’allemand."),P("Sie hat Pizza gegessen.","Elle a mangé une pizza."),P("Danach habe ich gekocht.","Après cela, j’ai cuisiné.")
      ],
      drills:[
        M("Dans une phrase au Perfekt, le participe va généralement :",["à la fin","en position 2","avant le sujet"],"à la fin","Ich habe gestern gearbeitet.","wordorder"),
        M("Participe de machen :",["gemacht","gemachen","gemachte"],"gemacht","Verbe régulier : ge- + radical + -t.","tenses"),
        M("Participe de sehen :",["gesehen","geseht","gesieht"],"gesehen","Participe irrégulier.","tenses")
      ],
      encounter:{prompts:[
        Q("Dis : « J’ai travaillé hier. »","Ich habe gestern gearbeitet.","haben + participe final."),
        Q("Demande : « Qu’as-tu fait ? »","Was hast du gemacht?","hast en position 2 après Was."),
        Q("Dis : « Nous avons vu un film. »","Wir haben einen Film gesehen.","gesehen en fin de phrase.")
      ]}
    },
    {
      id:"de-a1-10",title:"Perfekt mit sein",goal:"Raconter déplacements et changements d’état avec sein + participe passé.",
      scene:{title:"Un week-end à Berlin",lines:[
        {speaker:"Nora",t:"Am Samstag bin ich nach Berlin gefahren.",fr:"Samedi je suis allée à Berlin."},
        {speaker:"Leo",t:"Wann bist du angekommen?",fr:"Quand es-tu arrivée ?"},
        {speaker:"Nora",t:"Ich bin um zehn Uhr angekommen.",fr:"Je suis arrivée à dix heures."},
        {speaker:"Leo",t:"Und wann bist du zurückgekommen?",fr:"Et quand es-tu revenue ?"}
      ]},
      grammar:[
        G("Perfekt avec sein","De nombreux verbes de déplacement/changement utilisent sein : gehen, fahren, kommen, ankommen, aufstehen.",[["Ich bin gegangen.","Je suis parti / allé."],["Wir sind gefahren.","Nous sommes allés en véhicule."]]),
        G("Participe des verbes séparables","Le ge se place souvent entre préfixe et radical : ankommen → angekommen ; aufstehen → aufgestanden.",[["angekommen","arrivé"],["aufgestanden","levé"]])
      ],
      verbs:[
        VB("fahren","aller / conduire",{"ich":"bin gefahren","du":"bist gefahren","er/sie/es":"ist gefahren","wir":"sind gefahren","ihr":"seid gefahren","sie/Sie":"sind gefahren"},"Perfekt de déplacement avec sein.","Perfekt","Perfekt"),
        VB("ankommen","arriver",{"ich":"bin angekommen","du":"bist angekommen","er/sie/es":"ist angekommen","wir":"sind angekommen","ihr":"seid angekommen","sie/Sie":"sind angekommen"},"Verbe séparable : angekommen.","Perfekt","Perfekt")
      ],
      vocab:[
        V("gefahren","allé / conduit"),V("gegangen","allé à pied"),V("gekommen","venu"),V("angekommen","arrivé"),V("zurückgekommen","revenu"),
        V("aufgestanden","levé"),V("die Reise","le voyage","die","Reise"),V("das Hotel","l'hôtel","das","Hotel"),V("der Zug","le train","der","Zug"),V("am Samstag","samedi")
      ],
      phrases:[
        P("Ich bin nach Berlin gefahren.","Je suis allé à Berlin."),P("Wann bist du angekommen?","Quand es-tu arrivé ?"),P("Wir sind spät gekommen.","Nous sommes venus tard."),
        P("Sie ist früh aufgestanden.","Elle s’est levée tôt."),P("Ich bin um zehn Uhr angekommen.","Je suis arrivé à dix heures."),P("Wann seid ihr zurückgekommen?","Quand êtes-vous revenus ?")
      ],
      drills:[
        M("Perfekt de fahren dans le sens déplacement :",["sein + gefahren","haben + gefahren"],"sein + gefahren","Ich bin nach Berlin gefahren.","tenses"),
        M("Participe de ankommen :",["angekommen","geankommen","ankommt"],"angekommen","Préfixe an + ge + kommen.","tenses"),
        M("Complète : « Wir ___ gefahren. »",["sind","haben","seid"],"sind","sein avec wir : sind.","conjugation")
      ],
      encounter:{prompts:[
        Q("Dis : « Je suis allé à Berlin. »","Ich bin nach Berlin gefahren.","fahren avec sein dans ce contexte."),
        Q("Demande : « Quand es-tu arrivé ? »","Wann bist du angekommen?","bist + angekommen."),
        Q("Dis : « Nous sommes arrivés à dix heures. »","Wir sind um zehn Uhr angekommen.","sein + angekommen.")
      ]}
    }
  ]
};
})();