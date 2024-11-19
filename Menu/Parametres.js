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

function color () {
    // boutons.forEach(bouton => {
    //     bouton.style.backgroundColor = couleurJ1
    // })

    Head.forEach(Heads => {
        Heads.style.backgroundColor = couleurJ1;
    })
    retour.style.backgroundColor = couleurJ1;
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