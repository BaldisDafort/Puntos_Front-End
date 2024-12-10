// import * as Sentry from "@sentry/browser"
Sentry.init({
    dsn: "https://2cba841176a53feb0b4a468569383c99@o4508363354603520.ingest.de.sentry.io/4508363358994512",
    integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.replayIntegration(),
    ],
    // Tracing
    tracesSampleRate: 1.0, //  Capture 100% of the transactions
    // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
    tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
    // Session Replay
    replaysSessionSampleRate: 0.1,  // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0,  // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  });

// Déclaration des variables
var largeur = 7;
var hauteur = 6;
var plateau = [];
var c1 = "yellow"
var c2 = 'var(--selected-color)'
const tds = document.querySelectorAll('td');
var compteJoueur = false; // false = joueur 1; true = joueur 2
var html = document.getElement
var body = document.getElementById("contenu")
var scoreJ1 = document.getElementById("Score1")
var scoreJ2 = document.getElementById("Score2")
var Tour = document.getElementById("tourJoueur")
var sizeWidht = screen.width;
var sizeHeight = screen.height;
var sizeAdapt;
var currentTour
var terminer = false
// alert("Tour du joueur 1 !")s

    function verifVictoire() {
        // Vérification horizontale
        for (var i = 0; i < hauteur; i++) {
            for (var j = 0; j < largeur - 3; j++) {
                if (plateau[i][j].style.backgroundColor !== "" &&
                    plateau[i][j].style.backgroundColor === plateau[i][j+1].style.backgroundColor &&
                    plateau[i][j].style.backgroundColor === plateau[i][j+2].style.backgroundColor &&
                    plateau[i][j].style.backgroundColor === plateau[i][j+3].style.backgroundColor) {
                    return true;
                }
            }
        } 
    
        // Vérification verticale
        for (var i = 0; i < hauteur - 3; i++) {
            for (var j = 0; j < largeur; j++) {
                if (plateau[i][j].style.backgroundColor !== "" &&
                    plateau[i][j].style.backgroundColor === plateau[i+1][j].style.backgroundColor &&
                    plateau[i][j].style.backgroundColor === plateau[i+2][j].style.backgroundColor &&
                    plateau[i][j].style.backgroundColor === plateau[i+3][j].style.backgroundColor) {
                    return true;
                }
            }
        }
    
        // Vérification diagonale (de gauche-bas à droite-haut)
        for (var i = 3; i < hauteur; i++) {
            for (var j = 0; j < largeur - 3; j++) {
                if (plateau[i][j].style.backgroundColor !== "" &&
                    plateau[i][j].style.backgroundColor === plateau[i-1][j+1].style.backgroundColor &&
                    plateau[i][j].style.backgroundColor === plateau[i-2][j+2].style.backgroundColor &&
                    plateau[i][j].style.backgroundColor === plateau[i-3][j+3].style.backgroundColor) {
                    return true;
                }
            }
        }
    
        // Vérification diagonale (de gauche-haut à droite-bas)
        for (var i = 0; i < hauteur - 3; i++) {
            for (var j = 0; j < largeur - 3; j++) {
                if (plateau[i][j].style.backgroundColor !== "" &&
                    plateau[i][j].style.backgroundColor === plateau[i+1][j+1].style.backgroundColor &&
                    plateau[i][j].style.backgroundColor === plateau[i+2][j+2].style.backgroundColor &&
                    plateau[i][j].style.backgroundColor === plateau[i+3][j+3].style.backgroundColor) {
                    return true;
                }
            }
        }
    
        return false;
    }    

    function egalite() {
        for (var i = 0; i < hauteur; i++) {
            for (var j = 0; j < largeur; j++) {
                if (plateau[i][j].style.backgroundColor === "") {
                    return false; 
                }
            }
        }
        return true; 
    }

function colorCase(event) {
    if(terminer == true){
        return
    }else{
        if(compteJoueur == false) {
            if(event.target.style.backgroundColor == c1 || event.target.style.backgroundColor == c2 ){
                alert("Rejoue en cliquant sur une case vide")
                return 
            }
            event.target.style.backgroundColor = c2
            Tour.innerHTML = "Tour de invité"
            // alert("Tour du joueur 2 !")
            compteJoueur = true
            body.style.backgroundColor = c1
            document.documentElement.style.setProperty('--hover-color', c1);

            
        }else {
            if(event.target.style.backgroundColor == c1 || event.target.style.backgroundColor == c2 ){
                alert("Rejoue en cliquant sur une case vide")
                return 
            }
            event.target.style.backgroundColor = c1
            Tour.innerHTML = "Tour du joueur 1"
            // alert("Tour du joueur 1 !")
            compteJoueur = false
            body.style.backgroundColor = c2
            document.documentElement.style.setProperty('--hover-color', c2);
        }
        if (verifVictoire()){
            terminer = true
            if(compteJoueur == true){
                // alert("Le joueur 1 à gagner !")
                Tour.innerHTML = "Le joueur 1 a gagné !!"
                Tour.style.color = c2
                document.documentElement.style.setProperty('--hover-color', c2);
                var currentScoreJ1 = parseInt (scoreJ1.innerHTML)
                scoreJ1.innerHTML = currentScoreJ1 + 1
                setTimeout(resetPlateau,3000)
                // resetPlateau()
                return
            }else{
                // alert("Le joueur 2 à gagner !")
                Tour.innerHTML = "Invité a gagné !!"
                Tour.style.color = c1
                document.documentElement.style.setProperty('--hover-color', c2);
                var currentScoreJ2 = parseInt (scoreJ2.innerHTML)
                scoreJ2.innerHTML = currentScoreJ2 + 1 
                setTimeout(resetPlateau,3000)
                // resetPlateau()
                return    
            }
        }
        if (egalite()) {
            terminer = true;
            Tour.innerHTML = "Égalité !";
            Tour.style.color = "gray";
            setTimeout(resetPlateau, 3000);
    }
}
}

// Fonction pour initialiser le plateau
function initPlateau() {
    
    var contenuDiv = document.getElementById('contenu');
    var tableau = document.createElement('table');

    // Création des lignes et des cellules
    for (var i = 0; i < hauteur; i++) {
        var ligne = document.createElement('tr');
        plateau[i] = [];
        for (var j = 0; j < largeur; j++) {
            var cellule = document.createElement('td');

            cellule.addEventListener('click', colorCase)
            cellule.style.width = sizeAdapt + "px"
            cellule.style.height = sizeAdapt + "px"

            ligne.appendChild(cellule);
            plateau[i][j] = cellule;
        }
        tableau.appendChild(ligne);
    }

    // Ajout du tableau à la div
    contenuDiv.appendChild(tableau);
    body.style.backgroundColor = c2
}

// fonction servant a reset le jeux en fin de partie
function resetPlateau(){
    terminer = false
    Tour.innerHTML = "Tour du joueur 1"
    Tour.style.color = ""
    compteJoueur = false
    var contenuDiv = document.getElementById('contenu')
    contenuDiv.innerHTML = ""
    plateau=[]
    document.documentElement.style.setProperty('--hover-color', c2);
    initPlateau()
}

// Événement au chargement de la page pour lancer initPlateau
function calcScreen() {
    sizeAdapt = sizeWidht/largeur
    html.style.backgroundColor = "black"
}

// Événement au chargement de la page pour lancer initPlateau
window.addEventListener('load', function() {
    if(this.screen.width < 600){
        calcScreen();
    }

    initPlateau();

});
