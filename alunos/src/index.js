var User = String(localStorage.getItem("nome")).split(' ')[0]
var Instrumento = String(localStorage.getItem("instrumento"))

document.querySelector("h2#name-text").innerHTML = "Olá, " + User + "!"
// document.querySelector("h2#name-instrumento").innerHTML = Instrumento


let pencilButton = document.querySelector("i.pencil")
let menuColor = document.getElementById("color-menu")
let closeColorMenuButton = document.getElementById("close-menu-color")

pencilButton.addEventListener(
    'click',
    () => {
        menuColor.style.top = "0%"
    }
)

closeColorMenuButton.addEventListener(
    "click",
    () => {
        menuColor.style.top = "-100%"
    }
)