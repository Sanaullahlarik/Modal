let openModal = document.getElementById ('btn')
let modal = document.getElementById('myModal')
let closeModal = document.getElementById("closeModal")
let closeBtn = document.getElementById("closeBtn")

console.log(modal);


openModal.addEventListener("click", function(){
    modal.style.display = "block"  
})


closeModal.addEventListener("click", function(){
    modal.style.display = "none"
}) 

closeBtn.addEventListener("click", function(){
    modal.style.display = "none"
}) 