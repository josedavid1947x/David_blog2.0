const iconmenu = document.querySelector("#iconMenu")
const menu = document.querySelector("#menu")

iconmenu.addEventListener("click", function (){
    menu.classList.toggle("menu_show")
})