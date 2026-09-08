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

window.DE_A2={
  id:"a2",
  label:"A2 autonome",
  cefr:"A2",
  description:"Relier les idées, raconter plus librement et manier les cas avec davantage d’assurance.",
  units:[
    {
      id:"de-a2-1",title:"Mir, dir, ihm, ihr",goal:"Utiliser les pronoms personnels au datif et distinguer destinataire et objet direct.",
      scene:{title:"Donner et expliquer",lines:[
        {speaker:"Sophie",t:"Kannst du mir das erklären?",fr:"Peux-tu m’expliquer ça ?"},
        {speaker:"Jonas",t:"Natürlich. Ich erkläre es dir später.",fr:"Bien sûr. Je te l’explique plus tard."},
        {speaker:"Sophie",t:"Gibst du ihm auch die Unterlagen?",fr:"Tu lui donnes aussi les documents ?"},
        {speaker:"Jonas",t:"Ja, ich gebe sie ihm morgen.",fr:"Oui, je les lui donne demain."}
      ]},
      grammar:[
        G("Pronoms au datif","mir = à moi, dir = à toi, ihm = à lui/à cela masculin-neutre, ihr = à elle, uns = à nous, euch = à vous.",[["Kannst du mir helfen?","Peux-tu m’aider ?"],["Ich schreibe ihr.","Je lui écris."]]),
        G("Deux compléments","Avec deux pronoms, l’accusatif vient souvent avant le datif : Ich gebe es ihm. Avec deux noms, le datif vient souvent avant l’accusatif : Ich gebe dem Mann das Buch.",[["Ich gebe es ihm.","Je le lui donne."],["Ich gebe dem Kind das Buch.","Je donne le livre à l’enfant."]])
      ],
      verbs:[
        VB("geben","donner",{"ich":"gebe","du":"gibst","er/sie/es":"gibt","wir":"geben","ihr":"gebt","sie/Sie":"geben"},"Changement e → i au singulier du/er."),
        VB("helfen","aider",{"ich":"helfe","du":"hilfst","er/sie/es":"hilft","wir":"helfen","ihr":"helft","sie/Sie":"helfen"},"helfen gouverne le datif.")
      ],
      vocab:[
        V("mir","à moi"),V("dir","à toi"),V("ihm","à lui"),V("ihr","à elle"),V("uns","à nous"),V("euch","à vous"),
        V("geben","donner"),V("helfen","aider"),V("erklären","expliquer"),V("schicken","envoyer")
      ],
      phrases:[
        P("Kannst du mir helfen?","Peux-tu m’aider ?"),P("Ich erkläre es dir.","Je te l’explique."),P("Ich gebe es ihm.","Je le lui donne."),
        P("Wir schicken ihr die E-Mail.","Nous lui envoyons l’e-mail."),P("Er hilft uns.","Il nous aide."),P("Ich gebe dem Kind das Buch.","Je donne le livre à l’enfant.")
      ],
      drills:[
        M("Pronom datif pour « à moi » :",["mir","mich","mein"],"mir","mir est le datif de ich.","cases"),
        M("Pronom datif pour « à elle » :",["ihr","sie","ihre"],"ihr","ihr = à elle.","cases"),
        M("Avec deux pronoms, la phrase naturelle est :",["Ich gebe es ihm.","Ich gebe ihm es."],"Ich gebe es ihm.","Accusatif pronominal avant datif pronominal.","wordorder")
      ],
      encounter:{prompts:[
        Q("Demande : « Peux-tu m’aider ? »","Kannst du mir helfen?","helfen + datif."),
        Q("Dis : « Je te l’explique. »","Ich erkläre es dir.","es accusatif + dir datif."),
        Q("Dis : « Je le lui donne. »","Ich gebe es ihm.","Deux pronoms.")
      ]}
    },
    {
      id:"de-a2-2",title:"weil und dass",goal:"Construire des subordonnées simples en plaçant le verbe conjugué à la fin.",
      scene:{title:"Expliquer pourquoi",lines:[
        {speaker:"Lina",t:"Ich bleibe zu Hause, weil ich krank bin.",fr:"Je reste chez moi parce que je suis malade."},
        {speaker:"Marek",t:"Schade. Ich hoffe, dass du morgen wieder fit bist.",fr:"Dommage. J’espère que tu iras mieux demain."},
        {speaker:"Lina",t:"Ich glaube, dass es nur eine Erkältung ist.",fr:"Je pense que c’est seulement un rhume."},
        {speaker:"Marek",t:"Dann ruh dich aus.",fr:"Alors repose-toi."}
      ]},
      grammar:[
        G("weil","weil introduit une cause et envoie le verbe conjugué à la fin de la subordonnée.",[["Ich bleibe hier, weil ich müde bin.","Je reste ici parce que je suis fatigué."],["Weil es regnet, bleibe ich zu Hause.","Parce qu’il pleut, je reste chez moi."]]),
        G("dass","dass introduit une proposition complétive : je pense que…, je sais que…, j’espère que… Le verbe va à la fin.",[["Ich glaube, dass er kommt.","Je pense qu’il vient."],["Ich weiß, dass sie arbeitet.","Je sais qu’elle travaille."]])
      ],
      verbs:[
        VB("glauben","croire / penser",{"ich":"glaube","du":"glaubst","er/sie/es":"glaubt","wir":"glauben","ihr":"glaubt","sie/Sie":"glauben"},"Régulier."),
        VB("hoffen","espérer",{"ich":"hoffe","du":"hoffst","er/sie/es":"hofft","wir":"hoffen","ihr":"hofft","sie/Sie":"hoffen"},"Souvent suivi de dass.")
      ],
      vocab:[
        V("weil","parce que"),V("dass","que"),V("glauben","croire / penser"),V("hoffen","espérer"),V("wissen","savoir"),
        V("krank","malade"),V("müde","fatigué"),V("gesund","en bonne santé"),V("die Erkältung","le rhume","die","Erkältung"),V("sich ausruhen","se reposer")
      ],
      phrases:[
        P("Ich bleibe zu Hause, weil ich krank bin.","Je reste chez moi parce que je suis malade."),P("Ich glaube, dass er kommt.","Je pense qu’il vient."),
        P("Ich hoffe, dass du morgen fit bist.","J’espère que tu iras bien demain."),P("Weil es regnet, bleibe ich hier.","Parce qu’il pleut, je reste ici."),
        P("Ich weiß, dass sie arbeitet.","Je sais qu’elle travaille."),P("Er sagt, dass er keine Zeit hat.","Il dit qu’il n’a pas le temps.")
      ],
      drills:[
        M("Après weil, le verbe conjugué va généralement :",["à la fin","en première position","toujours en deuxième position"],"à la fin","weil ich krank bin.","wordorder"),
        M("Après dass, le verbe conjugué va généralement :",["à la fin","avant le sujet","au début"],"à la fin","dass er kommt.","wordorder"),
        M("Choisis la bonne phrase :",["weil ich bin müde","weil ich müde bin"],"weil ich müde bin","Verbe final.","wordorder")
      ],
      encounter:{prompts:[
        Q("Dis : « Je reste chez moi parce que je suis malade. »","Ich bleibe zu Hause, weil ich krank bin.","weil + verbe final."),
        Q("Dis : « Je pense qu’il vient. »","Ich glaube, dass er kommt.","dass + verbe final."),
        Q("Dis : « Je sais qu’elle travaille. »","Ich weiß, dass sie arbeitet.","dass-clause.")
      ]}
    },
    {
      id:"de-a2-3",title:"war, hatte, konnte",goal:"Utiliser les formes de Präteritum les plus fréquentes à l’oral : sein, haben et verbes modaux.",
      scene:{title:"Avant, c’était différent",lines:[
        {speaker:"Eva",t:"Früher war ich oft in Berlin.",fr:"Avant, j’étais souvent à Berlin."},
        {speaker:"Tom",t:"Hattest du dort eine Wohnung?",fr:"Tu avais un appartement là-bas ?"},
        {speaker:"Eva",t:"Nein, aber ich konnte bei Freunden wohnen.",fr:"Non, mais je pouvais loger chez des amis."},
        {speaker:"Tom",t:"Musstest du oft arbeiten?",fr:"Tu devais souvent travailler ?"}
      ]},
      grammar:[
        G("Präteritum courant à l’oral","Même si le Perfekt domine à l’oral, sein, haben et les modaux apparaissent très souvent au Präteritum : war, hatte, konnte, musste, wollte.",[["Ich war müde.","J’étais fatigué."],["Ich hatte Zeit.","J’avais le temps."],["Ich konnte kommen.","Je pouvais venir."]]),
        G("Modal au Präteritum","Le modal conjugué reste en position 2 et l’infinitif à la fin.",[["Ich musste arbeiten.","Je devais travailler."],["Wir wollten gehen.","Nous voulions partir."]])
      ],
      verbs:[
        VB("sein","être",{"ich":"war","du":"warst","er/sie/es":"war","wir":"waren","ihr":"wart","sie/Sie":"waren"},"Präteritum très fréquent.","Präteritum","Präteritum"),
        VB("haben","avoir",{"ich":"hatte","du":"hattest","er/sie/es":"hatte","wir":"hatten","ihr":"hattet","sie/Sie":"hatten"},"Präteritum fréquent.","Präteritum","Präteritum"),
        VB("können","pouvoir",{"ich":"konnte","du":"konntest","er/sie/es":"konnte","wir":"konnten","ihr":"konntet","sie/Sie":"konnten"},"Le tréma disparaît au Präteritum.","Präteritum","Präteritum")
      ],
      vocab:[
        V("früher","autrefois"),V("damals","à l'époque"),V("war","était / étais"),V("hatte","avait / avais"),V("konnte","pouvait / pouvais"),
        V("musste","devait / devais"),V("wollte","voulait / voulais"),V("durfte","avait le droit"),V("oft","souvent"),V("selten","rarement")
      ],
      phrases:[
        P("Früher war ich oft hier.","Autrefois, j’étais souvent ici."),P("Ich hatte keine Zeit.","Je n’avais pas le temps."),
        P("Ich konnte nicht kommen.","Je ne pouvais pas venir."),P("Wir mussten arbeiten.","Nous devions travailler."),
        P("Sie wollte nach Hause gehen.","Elle voulait rentrer chez elle."),P("Damals war alles anders.","À l’époque, tout était différent.")
      ],
      drills:[
        M("Präteritum de sein avec ich :",["war","bin gewesen","wäre"],"war","Ich war.","conjugation"),
        M("Präteritum de haben avec wir :",["hatten","haben","hätten"],"hatten","Wir hatten.","conjugation"),
        M("Präteritum de können avec ich :",["konnte","könnte","kann"],"konnte","Forme sans tréma.","conjugation")
      ],
      encounter:{prompts:[
        Q("Dis : « Autrefois, j’étais souvent ici. »","Früher war ich oft hier.","sein au Präteritum."),
        Q("Dis : « Je n’avais pas le temps. »","Ich hatte keine Zeit.","haben au Präteritum."),
        Q("Dis : « Je ne pouvais pas venir. »","Ich konnte nicht kommen.","modal au Präteritum + infinitif.")
      ]}
    },
    {
      id:"de-a2-4",title:"Adjektive vor Nomen",goal:"Comprendre le principe des terminaisons d’adjectifs après der/die/das et ein/eine.",
      scene:{title:"Choisir un hôtel",lines:[
        {speaker:"Gast",t:"Ich suche ein ruhiges Hotel.",fr:"Je cherche un hôtel calme."},
        {speaker:"Mitarbeiterin",t:"Wir haben ein schönes Hotel im Zentrum.",fr:"Nous avons un bel hôtel au centre."},
        {speaker:"Gast",t:"Hat es große Zimmer?",fr:"A-t-il de grandes chambres ?"},
        {speaker:"Mitarbeiterin",t:"Ja, und einen kleinen Garten.",fr:"Oui, et un petit jardin."}
      ]},
      grammar:[
        G("Après article défini","Après der/die/das, l’adjectif porte souvent -e au nominatif singulier : der kleine Mann, die schöne Stadt, das neue Hotel. Au pluriel : die neuen Hotels.",[["der neue Zug","le nouveau train"],["die schöne Stadt","la belle ville"]]),
        G("Après ein/eine","L’adjectif montre davantage le genre : ein neuer Zug, eine schöne Stadt, ein neues Hotel. À l’accusatif masculin : einen neuen Zug.",[["ein gutes Hotel","un bon hôtel"],["einen kleinen Garten","un petit jardin"]])
      ],
      vocab:[
        V("ruhig","calme"),V("laut","bruyant"),V("schön","beau"),V("neu","nouveau"),V("alt","vieux / ancien"),
        V("groß","grand"),V("klein","petit"),V("modern","moderne"),V("zentral","central"),V("gemütlich","agréable / cosy")
      ],
      phrases:[
        P("Ich suche ein ruhiges Hotel.","Je cherche un hôtel calme."),P("Das ist eine schöne Stadt.","C’est une belle ville."),
        P("Wir nehmen den neuen Zug.","Nous prenons le nouveau train."),P("Er hat einen kleinen Garten.","Il a un petit jardin."),
        P("Die Zimmer sind groß.","Les chambres sont grandes."),P("Das Hotel ist modern.","L’hôtel est moderne.")
      ],
      drills:[
        M("Nominatif après der : « der ___ Mann »",["kleine","kleiner","kleinen"],"kleine","Après der au nominatif masculin : -e.","agreement"),
        M("Nominatif après ein : « ein ___ Hotel »",["neues","neue","neuen"],"neues","Neutre après ein : -es.","agreement"),
        M("Accusatif masculin : « einen ___ Garten »",["kleinen","kleiner","kleines"],"kleinen","Après einen : adjectif en -en.","agreement")
      ],
      encounter:{prompts:[
        Q("Dis : « Je cherche un hôtel calme. »","Ich suche ein ruhiges Hotel.","Neutre après ein : ruhiges."),
        Q("Dis : « C’est une belle ville. »","Das ist eine schöne Stadt.","Féminin après eine : schöne."),
        Q("Dis : « Il a un petit jardin. »","Er hat einen kleinen Garten.","Accusatif masculin : einen kleinen.")
      ]}
    },
    {
      id:"de-a2-5",title:"Sich erinnern, sich freuen",goal:"Utiliser des verbes pronominaux fréquents et leurs prépositions fixes.",
      scene:{title:"Se souvenir et se réjouir",lines:[
        {speaker:"Mara",t:"Erinnerst du dich an unseren Urlaub?",fr:"Tu te souviens de nos vacances ?"},
        {speaker:"Felix",t:"Ja, natürlich. Ich freue mich schon auf den nächsten.",fr:"Oui, bien sûr. Je me réjouis déjà des prochaines."},
        {speaker:"Mara",t:"Ich interessiere mich auch für Italienisch.",fr:"Je m’intéresse aussi à l’italien."},
        {speaker:"Felix",t:"Dann können wir zusammen lernen.",fr:"Alors nous pouvons apprendre ensemble."}
      ]},
      grammar:[
        G("Pronoms réfléchis","mich, dich, sich, uns, euch, sich. Certains verbes demandent un pronom réfléchi par nature.",[["Ich freue mich.","Je me réjouis."],["Du erinnerst dich.","Tu te souviens."]]),
        G("Prépositions fixes","sich erinnern an + accusatif ; sich freuen auf + accusatif pour quelque chose à venir ; sich interessieren für + accusatif.",[["Ich erinnere mich an Berlin.","Je me souviens de Berlin."],["Ich freue mich auf den Urlaub.","Je me réjouis des vacances à venir."]])
      ],
      verbs:[
        VB("sich freuen","se réjouir",{"ich":"freue mich","du":"freust dich","er/sie/es":"freut sich","wir":"freuen uns","ihr":"freut euch","sie/Sie":"freuen sich"},"Pronom réfléchi obligatoire."),
        VB("sich erinnern","se souvenir",{"ich":"erinnere mich","du":"erinnerst dich","er/sie/es":"erinnert sich","wir":"erinnern uns","ihr":"erinnert euch","sie/Sie":"erinnern sich"},"Souvent avec an + accusatif.")
      ],
      vocab:[
        V("sich freuen","se réjouir"),V("sich erinnern","se souvenir"),V("sich interessieren","s'intéresser"),V("sich treffen","se retrouver / se rencontrer"),
        V("der Urlaub","les vacances","der","Urlaub"),V("die Erinnerung","le souvenir","die","Erinnerung"),V("auf","sur / vers"),V("an","à / contre"),V("für","pour"),V("zusammen","ensemble")
      ],
      phrases:[
        P("Ich freue mich auf den Urlaub.","Je me réjouis des vacances."),P("Erinnerst du dich an Berlin?","Tu te souviens de Berlin ?"),
        P("Ich interessiere mich für Deutsch.","Je m’intéresse à l’allemand."),P("Wir treffen uns morgen.","Nous nous retrouvons demain."),
        P("Sie freut sich sehr.","Elle se réjouit beaucoup."),P("Ich erinnere mich gut daran.","Je m’en souviens bien.")
      ],
      drills:[
        M("Avec ich : « Ich freue ___ »",["mich","dich","sich"],"mich","Pronom réfléchi de ich : mich.","grammar"),
        M("sich erinnern se construit souvent avec :",["an + accusatif","mit + datif","zu + datif"],"an + accusatif","sich erinnern an.","cases"),
        M("sich interessieren se construit avec :",["für + accusatif","bei + datif","nach"],"für + accusatif","sich interessieren für.","cases")
      ],
      encounter:{prompts:[
        Q("Dis : « Je me réjouis des vacances. »","Ich freue mich auf den Urlaub.","sich freuen auf + accusatif."),
        Q("Demande : « Tu te souviens de Berlin ? »","Erinnerst du dich an Berlin?","dich + an."),
        Q("Dis : « Je m’intéresse à l’allemand. »","Ich interessiere mich für Deutsch.","für + accusatif.")
      ]}
    },
    {
      id:"de-a2-6",title:"Vergleichen",goal:"Comparer avec -er, als, so… wie et former les superlatifs les plus courants.",
      scene:{title:"Comparer deux villes",lines:[
        {speaker:"Lena",t:"Berlin ist größer als Zürich.",fr:"Berlin est plus grande que Zurich."},
        {speaker:"Tom",t:"Ja, aber Zürich ist ruhiger.",fr:"Oui, mais Zurich est plus calme."},
        {speaker:"Lena",t:"Beide Städte sind interessant, aber Berlin ist am lebendigsten.",fr:"Les deux villes sont intéressantes, mais Berlin est la plus animée."},
        {speaker:"Tom",t:"Zürich ist dafür genauso schön.",fr:"En revanche, Zurich est tout aussi belle."}
      ]},
      grammar:[
        G("Comparatif","La plupart des adjectifs prennent -er. On compare avec als : größer als. Pour l’égalité : so… wie / genauso… wie.",[["schneller als","plus rapide que"],["so teuer wie","aussi cher que"]]),
        G("Superlatif","Forme adverbiale fréquente : am + adjectif + -sten/-esten.",[["am schnellsten","le plus rapidement / le plus rapide"],["am interessantesten","le plus intéressant"]])
      ],
      vocab:[
        V("groß","grand"),V("größer","plus grand"),V("klein","petit"),V("kleiner","plus petit"),V("schnell","rapide"),
        V("schneller","plus rapide"),V("ruhig","calme"),V("ruhiger","plus calme"),V("teuer","cher"),V("billig","bon marché")
      ],
      phrases:[
        P("Berlin ist größer als Zürich.","Berlin est plus grande que Zurich."),P("Der Zug ist schneller als der Bus.","Le train est plus rapide que le bus."),
        P("Das Hotel ist so teuer wie das andere.","L’hôtel est aussi cher que l’autre."),P("Heute ist es wärmer.","Aujourd’hui il fait plus chaud."),
        P("Dieser Weg ist am kürzesten.","Ce chemin est le plus court."),P("Das ist am interessantesten.","C’est le plus intéressant.")
      ],
      drills:[
        M("Comparatif de groß :",["größer","großer","größten"],"größer","Umlaut + -er.","agreement"),
        M("Après un comparatif, « que » se traduit par :",["als","wie","dass"],"als","größer als.","grammar"),
        M("Égalité : « aussi cher que » :",["so teuer wie","teurer als","am teuersten"],"so teuer wie","so… wie.","grammar")
      ],
      encounter:{prompts:[
        Q("Dis : « Berlin est plus grande que Zurich. »","Berlin ist größer als Zürich.","Comparatif + als."),
        Q("Dis : « Le train est plus rapide que le bus. »","Der Zug ist schneller als der Bus.","-er + als."),
        Q("Dis : « L’hôtel est aussi cher que l’autre. »","Das Hotel ist so teuer wie das andere.","so… wie.")
      ]}
    },
    {
      id:"de-a2-7",title:"werden und Zukunft",goal:"Parler du futur avec le présent ou Futur I et enchaîner les étapes dans le temps.",
      scene:{title:"Plans pour l’année prochaine",lines:[
        {speaker:"Mila",t:"Nächstes Jahr werde ich mehr reisen.",fr:"L’année prochaine, je voyagerai davantage."},
        {speaker:"Jonas",t:"Wohin wirst du fahren?",fr:"Où iras-tu ?"},
        {speaker:"Mila",t:"Zuerst fahre ich nach Wien, danach werde ich nach Italien reisen.",fr:"D’abord je vais à Vienne, ensuite je voyagerai en Italie."},
        {speaker:"Jonas",t:"Das wird bestimmt schön.",fr:"Ce sera sûrement agréable."}
      ]},
      grammar:[
        G("Présent ou Futur I","L’allemand utilise souvent le présent avec un repère futur : Morgen fahre ich… Futur I insiste davantage sur le futur/prévision.",[["Morgen arbeite ich zu Hause.","Demain je travaille chez moi."],["Ich werde mehr reisen.","Je voyagerai davantage."]]),
        G("Futur I","werden conjugué en position 2 + infinitif à la fin.",[["Ich werde kommen.","Je viendrai."],["Wir werden später sprechen.","Nous parlerons plus tard."]])
      ],
      verbs:[
        VB("werden","devenir / auxiliaire du futur",{"ich":"werde","du":"wirst","er/sie/es":"wird","wir":"werden","ihr":"werdet","sie/Sie":"werden"},"Auxiliaire de Futur I."),
        VB("reisen","voyager",{"ich":"werde reisen","du":"wirst reisen","er/sie/es":"wird reisen","wir":"werden reisen","ihr":"werdet reisen","sie/Sie":"werden reisen"},"Futur I avec werden.","Futur I","Futur I")
      ],
      vocab:[
        V("nächstes Jahr","l'année prochaine"),V("bald","bientôt"),V("später","plus tard"),V("zuerst","d'abord"),V("danach","ensuite"),
        V("am Ende","à la fin"),V("bestimmt","sûrement"),V("wahrscheinlich","probablement"),V("planen","planifier"),V("reisen","voyager")
      ],
      phrases:[
        P("Nächstes Jahr werde ich mehr reisen.","L’année prochaine, je voyagerai davantage."),P("Wohin wirst du fahren?","Où iras-tu ?"),
        P("Wir werden später sprechen.","Nous parlerons plus tard."),P("Morgen fahre ich nach Bern.","Demain je vais à Berne."),
        P("Zuerst arbeite ich, danach ruhe ich mich aus.","D’abord je travaille, ensuite je me repose."),P("Das wird bestimmt gut.","Ce sera sûrement bien.")
      ],
      drills:[
        M("Futur I se forme avec :",["werden + infinitif","haben + participe","sein + adjectif"],"werden + infinitif","Auxiliaire werden + infinitif final.","tenses"),
        M("Complète : « Ich ___ reisen. »",["werde","wirst","wird"],"werde","werden avec ich.","conjugation"),
        M("Le présent peut exprimer le futur si :",["un repère temporel rend le futur clair","jamais","seulement avec sein"],"un repère temporel rend le futur clair","Morgen fahre ich…","tenses")
      ],
      encounter:{prompts:[
        Q("Dis : « L’année prochaine, je voyagerai davantage. »","Nächstes Jahr werde ich mehr reisen.","Futur I."),
        Q("Demande : « Où iras-tu ? »","Wohin wirst du fahren?","wirst + infinitif final."),
        Q("Dis : « Demain je vais à Berne. »","Morgen fahre ich nach Bern.","Présent avec repère futur.")
      ]}
    },
    {
      id:"de-a2-8",title:"Relativsätze und freies Sprechen",goal:"Relier des informations avec une relative simple et combiner les acquis A2 dans des situations réelles.",
      scene:{title:"Présenter un collègue",lines:[
        {speaker:"Anna",t:"Das ist der Kollege, der neu im Team ist.",fr:"C’est le collègue qui est nouveau dans l’équipe."},
        {speaker:"Ben",t:"Ist das der Mann, den du gestern getroffen hast?",fr:"C’est l’homme que tu as rencontré hier ?"},
        {speaker:"Anna",t:"Ja. Er arbeitet an einem Projekt, das sehr wichtig ist.",fr:"Oui. Il travaille sur un projet qui est très important."},
        {speaker:"Ben",t:"Dann stelle ihn mir später vor.",fr:"Alors présente-le-moi plus tard."}
      ]},
      grammar:[
        G("Relative simple","Le pronom relatif reprend le genre/cas de l’antécédent et le verbe conjugué va à la fin.",[["der Mann, der hier arbeitet","l’homme qui travaille ici"],["der Mann, den ich sehe","l’homme que je vois"]]),
        G("Relatif neutre et féminin","das → das au nominatif/accusatif neutre ; die → die au nominatif/accusatif féminin.",[["das Projekt, das wichtig ist","le projet qui est important"],["die Frau, die hier arbeitet","la femme qui travaille ici"]])
      ],
      vocab:[
        V("der Kollege","le collègue","der","Kollege"),V("die Kollegin","la collègue","die","Kollegin"),V("das Projekt","le projet","das","Projekt"),V("das Team","l'équipe","das","Team"),
        V("vorstellen","présenter"),V("treffen","rencontrer"),V("wichtig","important"),V("neu","nouveau"),V("gemeinsam","ensemble"),V("später","plus tard")
      ],
      phrases:[
        P("Das ist der Mann, der hier arbeitet.","C’est l’homme qui travaille ici."),P("Das ist der Mann, den ich gestern gesehen habe.","C’est l’homme que j’ai vu hier."),
        P("Das Projekt, das wir machen, ist wichtig.","Le projet que nous faisons est important."),P("Die Frau, die dort steht, ist meine Kollegin.","La femme qui est là-bas est ma collègue."),
        P("Wir arbeiten gemeinsam an einem Projekt.","Nous travaillons ensemble sur un projet."),P("Ich stelle ihn dir später vor.","Je te le présenterai plus tard.")
      ],
      drills:[
        M("Dans une relative, le verbe conjugué va :",["à la fin","en position 2","toujours au début"],"à la fin","der Mann, der hier arbeitet.","wordorder"),
        M("Relatif nominatif masculin :",["der","den","dem"],"der","der Mann, der…","cases"),
        M("Relatif accusatif masculin :",["den","der","dem"],"den","der Mann, den ich sehe.","cases")
      ],
      encounter:{prompts:[
        Q("Dis : « C’est l’homme qui travaille ici. »","Das ist der Mann, der hier arbeitet.","Relative nominative."),
        Q("Dis : « C’est l’homme que j’ai vu hier. »","Das ist der Mann, den ich gestern gesehen habe.","Relative accusative + Perfekt."),
        Q("Dis : « Le projet que nous faisons est important. »","Das Projekt, das wir machen, ist wichtig.","Relatif neutre das.")
      ]}
    }
  ]
};
})();