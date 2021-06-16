let lang = 'de';

let text = {
    "de": {
        "title": "Spiel des Lebens",
        "subtitle": "Wie funktioniert das Spiel des Lebens?",
        "intro": "Die Regeln sind ganz einfach: Jede Zelle (= K&#228;stchen auf dem Feld) kann entweder &laquo;lebendig&raquo; (= rotes Feld) oder &laquo;tot&raquo; (= weisses Feld) sein. Das Programm &uuml;berpr&uuml;ft f&uuml;r jede Zelle die acht Zellen, die sie umgeben, und berechnet ihren neuen Zustand. Und zwar wie folgt:",
        "rules1": "Wenn eine lebendige Zelle 2 oder 3 lebendige Nachbarszellen hat, bleibt sie in der n&#228;chsten Runde aktiviert.",
        "rules2": "Wenn eine lebendige Zelle weniger als 2 oder mehr als 3 aktive Nachbarszellen hat, stirbt sie in der n&#228;chsten Runde.",
        "rules3": "Wenn eine tote Zelle genau drei lebendige Nachbarszellen hat, wird sie in der n&#228;chsten Runde wieder aktiviert.",
        "believe": "Es ist kaum zu glauben, dass aus drei so einfachen Regeln so komplizierte Gebilde entstehen k&ouml;nnen!",
        "cta": "Willst du dir anschauen, wie es funktioniert? Dann zeichne mit der Maus eine beliebige Form in das Feld, klicke auf das Symbol >>, um die Animation zu starten, und warte ab, was passiert!"
    },
    "fr": {
        "title": "Le jeu de la vie",
        "subtitle": "Comment fonctionne le jeu de la vie?",
        "intro": "Chaque cellule (= petit carr&eacute; sur la grille) peut avoir deux &eacute;tats : &laquo; vivante &raquo; (case color&eacute;e)  ou &laquo; morte &raquo; (case blanche). Le programme d&eacute;termine et calcule l&rsquo;&eacute;tat d&rsquo;une cellule et son &eacute;volution en fonction des huit autres cellules (vivantes ou morte) qui l&rsquo;entourent. Pour ce faire, le programme se base sur les r&egrave;gles suivantes :",
        "rules1": "Si une cellule vivante est entour&eacute;e par 2 ou 3 cellules vivantes, elle reste en vie &agrave; la g&eacute;n&eacute;ration suivante.",
        "rules2": "Si une cellule vivante est entour&eacute;e par moins de 2 cellules vivantes, elle meurt &agrave; la g&eacute;n&eacute;ration suivante.",
        "rules3": "Si une cellule morte se retrouve entour&eacute;e par exactement 3 cellules vivantes, elle rena&icirc;t &agrave; la g&eacute;n&eacute;ration suivante.",
        "believe": "Incroyable comme trois r&egrave;gles aussi simples sont capables de cr&eacute;er des motifs aussi &eacute;labor&eacute;s !",
        "cta": "Pour voir comment cela fonctionne, dessine avec ta souris une forme quelconque dans la grille, puis clique sur le symbole >> pour lancer l&rsquo;animation et attends de voir ce qui se passe !"
    }
}

document.onreadystatechange = function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams( queryString );

    if( urlParams.has( "lang" ) ) {
        setLanguage( urlParams.get( 'lang' ) );
    } else {
        setLanguage( 'de' );
    }
   
    document.getElementById( "de" ).onclick = function () {
        setLanguage( "de" );
    }
    
    document.getElementById( "fr" ).onclick = function () {
        setLanguage( "fr" );
    }    
}



function setLanguage( newLang ) {
    if ( lang !== newLang ) {
        for ( i in text[ newLang ] ) {
            document.getElementById( i ).innerHTML = text[ newLang ][ i ] ;
        };
        document.title = text[ newLang ][ "title" ];
    }
    lang = newLang;
}