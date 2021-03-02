var User = String(localStorage.getItem("nome")).split(' ')[0]
var Instrumento = String(localStorage.getItem("instrumento"))


document.querySelector("h2#name-text").innerHTML = "Olá, " + User + "!"
// document.querySelector("h2#name-instrumento").innerHTML = Instrumento
