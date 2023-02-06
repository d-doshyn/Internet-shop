let menuTrigger = document.querySelector('.anchors-burger-menu');
let burgerMenu = document.querySelector('.anchors-menu');

menuTrigger.addEventListener("click", () => {
    if (burgerMenu.style.display == "none") {
        burgerMenu.style.display = "flex";
    } else {
        burgerMenu.style.display = "none";
    }
});