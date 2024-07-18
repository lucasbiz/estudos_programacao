
const menuColuna = document.querySelector("#left")
const menuButton = document.querySelector("#button")


menuButton.addEventListener("click", abreMenu)

function abreMenu(){
    if (menuColuna.style.width === "5%") {
        menuColuna.style.width = "20%"
    } else {
        menuColuna.style.width = "5%"
    }
}