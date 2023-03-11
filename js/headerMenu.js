let menuTrigger = document.querySelector('.anchors-burger-menu');
let burgerMenu = document.querySelector('.anchors-menu');
let menuIcon = document.querySelector('.fa-solid.fa-bars');

function changeIcon(toRemove, toAdd) {
    menuIcon.classList.remove(toRemove);
    menuIcon.classList.add(toAdd);
};

function swapIcon(icon1, icon2) {
    let classes = Array.from(menuIcon.classList);
    classes.includes(icon1) ? changeIcon(icon1, icon2) : changeIcon(icon2, icon1);
};

menuTrigger.onclick = () => {
    burgerMenu.classList.toggle('flex');
    swapIcon('fa-bars', 'fa-xmark')
}