// Déclaration des variables
var largeur = 7;
var hauteur = 6;
var plateau = [];
var compteJoueur = false;

function colorCase(event) {
    if (event.target.style.backgroundColor === "" || event.target.style.backgroundColor === "green") {
        event.target.style.backgroundColor = "red"
    }else if(event.target.style.backgroundColor === "red"){
        event.target.style.backgroundColor = "green"
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



// Événement au chargement de la page pour lancer initPlateau
window.addEventListener('load', initPlateau);