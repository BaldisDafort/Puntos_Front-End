var couleurJ1 ="blue"
var bouton = document.querySelectorAll("button")
var Head = document.querySelectorAll("header")
var deconnexion = document.getElementById("Retour")
var rouge = document.getElementById("red");
var vert = document.getElementById("green");
var bleu = document.getElementById("blue");

deconnexion.addEventListener("click", () => {
    window.location.href = "../Menu/Menu.html"
})

function color () {
    bouton.forEach(boutons => {
        boutons.style.backgroundColor = couleurJ1
    })

    Head.forEach(Heads => {
        Heads.style.backgroundColor = couleurJ1
    })
    
}

rouge.addEventListener("click", () => {
    couleurJ1 = "red"
    color();
})

vert.addEventListener("click", () => {
    couleurJ1 = "green"
    color();
})

bleu.addEventListener("click", () => {
    couleurJ1 = "blue"
    color();
})
// rouge.addEventListener("click", () => {
//     var Header = document.getElementById("head")
//     Header.style.backgroundColor = "red";
// })

console.log(couleurJ1)