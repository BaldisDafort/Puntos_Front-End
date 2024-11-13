var couleurJ1 ="blue"

var deconnexion = document.getElementById("Retour")

deconnexion.addEventListener("click", () => {
    window.location.href = "../Menu/Menu.html"
})

var rouge = document.getElementById("red");

rouge.addEventListener("click", () => {
    couleurJ1 = "red"
})

rouge.addEventListener("click", () => {
    var Header = document.getElementById("head")
    Header.style.backgroundColor = "red";
})