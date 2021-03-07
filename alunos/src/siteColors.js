var color = localStorage.getItem("color")
if (color === null){
    localStorage.setItem("color","#000")
}
var color = localStorage.getItem("color")

if (color === "#fff" || color === "#ffffff" || 
    color === "rgb(255,255,255)"
){color = "#000"}

// Variaveis do dom
var navbar = document.querySelector("nav")
var nameText = document.getElementById("text-aluno")
var UserMenu = document.querySelector(".user-div")
var UserMenuNames = document.querySelector(".user-names")
var navColorMenu = document.querySelector(".nav-color-menu")
var caseMenu  = document.querySelector(".case-menu")
var iconHome = document.querySelector(".icon-home")
var iconPerfil = document.querySelector(".icon-perfil")
var iconAulas = document.querySelector(".icon-aulas")
var iconBook = document.querySelector(".icon-book")

navbar.style.backgroundColor = color
nameText.style.color = color
UserMenu.style.backgroundColor = color
UserMenuNames.style.backgroundColor = color
navColorMenu.style.backgroundColor = color
caseMenu.style.color = color
iconHome.style.color = color
iconPerfil.style.color = color
iconAulas.style.color = color
iconBook.style.color = color
/////////////////////////////////////////////////

try{
    let itemColorMenu = document.getElementById(color)
    itemColorMenu.innerHTML = '<i class="fas fa-check check"></i>'
} catch {
    console.log("Essa corr fucionara mais ela não está em nossa paleta de cores")
}

let ColorButton = document.querySelectorAll("button.color-item")

let blackColorButton = document.getElementById("black")
blackColorButton.addEventListener("click",() => {
    if(localStorage.getItem("color") != "black"){
        localStorage.setItem("color","black")
        // blackColorButton.innerHTML = '<i class="fas fa-check check"></i>'
        location.reload()
    } 
})

let blueColorButton = document.getElementById("blue")
blueColorButton.addEventListener("click",() => {
    if(localStorage.getItem("color") != "blue"){
        localStorage.setItem("color","blue")
        // blueColorButton.innerHTML = '<i class="fas fa-check check"></i>'
        location.reload()
    } 
})

let redColorButton = document.getElementById("red")
redColorButton.addEventListener("click",() => {
    if(localStorage.getItem("color") != "red"){
        localStorage.setItem("color","red")
        // redColorButton.innerHTML = '<i class="fas fa-check check"></i>'
        location.reload()
    } 
})
