// Déclaration des variables
var largeur = 7;
var hauteur = 6;
var plateau = [];
var compteJoueur = false;
var scoreJ1 = document.getElementById("Score1")
var scoreJ2 = document.getElementById("Score2")
alert("Tour du joueur 1 !")

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


function colorCase(event) {
    if(compteJoueur == false) {
        if(event.target.style.backgroundColor == "yellow" || event.target.style.backgroundColor == "red" ){
            alert("Rejoue en cliquant sur une case vide")
            return 
        }
        event.target.style.backgroundColor = "red"
        alert("Tour du joueur 2 !")
        compteJoueur = true
    }else {
        if(event.target.style.backgroundColor == "yellow" || event.target.style.backgroundColor == "red" ){
            alert("Rejoue en cliquant sur une case vide")
            return 
        }
        event.target.style.backgroundColor = "yellow"
        alert("Tour du joueur 1 !")
        compteJoueur = false
    }
    if (verifVictoire()){
        if(compteJoueur == true){
            alert("Le joueur 1 à gagner !")
            var currentScoreJ1 = parseInt (scoreJ1.innerHTML)
            scoreJ1.innerHTML = currentScoreJ1 + 1
            resetPlateau()
            return
        }else{
            alert("Le joueur 2 à gagner !")
            var currentScoreJ2 = parseInt (scoreJ2.innerHTML)
            scoreJ2.innerHTML = currentScoreJ2 + 1 
            resetPlateau()
            return    
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

            ligne.appendChild(cellule);
            plateau[i][j] = cellule;
        }
        tableau.appendChild(ligne);
    }

    // Ajout du tableau à la div
    contenuDiv.appendChild(tableau);
}

function resetPlateau(){
    compteJoueur = false
    var contenuDiv = document.getElementById('contenu')
    contenuDiv.innerHTML = ""
    plateau=[]
    initPlateau()
}

// Événement au chargement de la page pour lancer initPlateau
window.addEventListener('load', initPlateau);
