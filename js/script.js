let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click" , function() {
    navbar.classList.toggle("apper");
    menu.classList.toggle("fa-window-close");
})


window.onscroll = () =>{
    
    navbar.classList.remove("apper");
    menu.classList.remove("fa-window-close");

}

function loader(){
    document.querySelector(".loader-container").classList.add('fade-out');
}

function fadeout(){
    setInterval(loader, 2000);
}

window.onload = fadeout();