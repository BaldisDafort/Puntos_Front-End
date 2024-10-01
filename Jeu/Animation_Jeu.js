const cells = document.querySelectorAll('td')

cells.forEach(cell => {
    cell.addEventListener("click", colorCase);
});

function colorCase(event) {
    const cell = event.target;
    const currentColor = window.getComputedStyle(cell).backgroundColor
    if (currentColor === "rgba(0, 0, 0, 0)" || currentColor === "transparent") {
        cell.style.backgroundColor = "blue"
    } else {
        alert("vueillez choisir une case vide !")
    }
}