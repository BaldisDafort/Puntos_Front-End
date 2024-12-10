var couleurJ1 ="blue"
var boutons = document.querySelectorAll("button")
var Head = document.querySelectorAll("header")
var retour = document.getElementById("Retour")
var rouge = document.getElementById("red");
var vert = document.getElementById("green");
var bleu = document.getElementById("blue");

retour.addEventListener("click", () => {
    window.location.href = "../Menu/Menu.html"
})

function color (color) {

    localStorage.setItem('selected-color', color);
    console.log("couleur ", color, " enregistrée dans local storage");
    

    if(color != 'red' && color != 'green' && color != 'blue') {
        console.error("la couleur n'existe pas dans les variables CSS");
    }
        document.documentElement.style.setProperty('--selected-color', `var(--${color}-color)`);
        document.documentElement.style.setProperty('--selected-color-transparent', `var(--${color}-color-transparent)`);

    }

rouge.addEventListener("click", () => {
    color('red');
})

vert.addEventListener("click", () => {
    color('green');
})

bleu.addEventListener("click", () => {
    color('blue');
})
