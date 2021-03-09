let greenColorButton = document.getElementById("green")
greenColorButton.addEventListener("click",() => {
    if(localStorage.getItem("color") != "green"){
        localStorage.setItem("color","green")
        // redColorButton.innerHTML = '<i class="fas fa-check check"></i>'
        location.reload()
    } 
})
