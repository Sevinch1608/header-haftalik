const down = document.querySelector(".download")
const overly = document.querySelector(".overly")
const modal = document.querySelector(".modal")
const closeModal = document.querySelector(".i")

down.addEventListener("click",()=>{
    overly.classList.remove("hidden")
    modal.classList.remove("hidden")
})

closeModal.addEventListener("click",()=>{
    overly.classList.add("hidden")
    modal.classList.add("hidden")
})
overly.addEventListener("click",()=>{
    overly.classList.add("hidden")
    modal.classList.add("hidden")
    barsMenu.classList.remove("open")
})


const barsMenu = document.querySelector(".barsMenu")
const barsBtn = document.querySelector(".fa-bars")
const barsClouse = document.querySelector(".x")

barsBtn.addEventListener("click",()=>{
    overly.classList.remove("hidden")
    barsMenu.classList.add("open")
})
barsClouse.addEventListener("click",()=>{
    overly.classList.add("hidden")
    barsMenu.classList.remove("open")
})