let lang = 'de';

let text = {
    "de": {
        "title": "Spiel des Lebens",
        "subtitle": "Wie funktioniert das Spiel des Lebens?",
        "intro": "Die Regeln sind ganz einfach: Jede Zelle (= Kästchen auf dem Feld) kann entweder «lebendig» (= rotes Feld) oder «tot» (= weisses Feld) sein. Das Programm überprüft für jede Zelle die acht Zellen, die sie umgeben, und berechnet ihren neuen Zustand. Und zwar wie folgt:",
        "rules1": "Wenn eine lebendige Zelle 2 oder 3 lebendige Nachbarszellen hat, bleibt sie in der nächsten Runde aktiviert.",
        "rules2": "Wenn eine lebendige Zelle weniger als 2 oder mehr als 3 aktive Nachbarszellen hat, stirbt sie in der nächsten Runde.",
        "rules3": "Wenn eine tote Zelle genau drei lebendige Nachbarszellen hat, wird sie in der nächsten Runde wieder aktiviert.",
        "believe": "Es ist kaum zu glauben, dass aus drei so einfachen Regeln so komplizierte Gebilde entstehen können!",
        "cta": "Willst du dir anschauen, wie es funktioniert? Dann zeichne mit der Maus eine beliebige Form in das Feld, klicke auf das Symbol >>, um die Animation zu starten, und warte ab, was passiert!"
    },
    "fr": {
        "title": "Le jeu de la vie",
        "subtitle": "Comment fonctionne le jeu de la vie?",
        "intro": "Chaque cellule (= petit carré sur la grille) peut avoir deux états : « vivante » (case colorée)  ou « morte » (case blanche). Le programme détermine et calcule l’état d’une cellule et son évolution en fonction des huit autres cellules (vivantes ou morte) qui l’entourent. Pour ce faire, le programme se base sur les règles suivantes :",
        "rules1": "Si une cellule vivante est entourée par 2 ou 3 cellules vivantes, elle reste en vie à la génération suivante.",
        "rules2": "Si une cellule vivante est entourée par moins de 2 cellules vivantes, elle meurt à la génération suivante.",
        "rules3": "Si une cellule morte se retrouve entourée par exactement 3 cellules vivantes, elle renaît à la génération suivante.",
        "believe": "Incroyable comme trois règles aussi simples sont capables de créer des motifs aussi élaborés !",
        "cta": "Pour voir comment cela fonctionne, dessine avec ta souris une forme quelconque dans la grille, puis clique sur le symbole >> pour lancer l’animation et attends de voir ce qui se passe !"
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



function setLanguage( lang ) {
    for ( i in text[ lang ] ) {
        console.log( i + " : " + text[ lang ][ i ] );
        document.getElementById( i ).innerHTML = text[ lang ][ i ] ;
    };
}