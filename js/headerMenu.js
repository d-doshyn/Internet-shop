let menuTrigger = document.querySelector('.anchors-burger-menu');
let burgerMenu = document.querySelector('.anchors-menu');

let menuIcon = document.querySelector('.fa-solid.fa-bars');

function changeIcon(toAdd, toRemove) {
    menuIcon.classList.add(toAdd);
    menuIcon.classList.remove(toRemove);
};

menuTrigger.addEventListener("click", () => {
    if (burgerMenu.style.display == "none") {
        burgerMenu.style.display = "flex";
        changeIcon("fa-xmark", 'fa-bars');
    } else {
        burgerMenu.style.display = "none";
        changeIcon('fa-bars', 'fa-xmark');
    }
});