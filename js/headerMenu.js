let menuTrigger = document.querySelector('.anchors-burger-menu');
let burgerMenu = document.querySelector('.anchors-menu');
let menuIcon = document.querySelector('.fa-solid.fa-bars');

/* Метод можно улучшить - сделать из него swap icons */
function changeIcon(toRemove, toAdd) {
    menuIcon.classList.remove(toRemove);
    menuIcon.classList.add(toAdd);
};

/* В общем-то, так и сделал */
function swapIcon(icon1, icon2) {
    // convert tokenList to regular array (for further includes() usage )
    let classes = Array.from(menuIcon.classList);
    classes.includes(icon1) ? changeIcon(icon1, icon2) : changeIcon(icon2, icon1);
};

/* 
    Такое решение более элегантно и функционально. 
    Бонус: меньше кода 
*/

menuTrigger.onclick = () => {
    burgerMenu.classList.toggle('flex');
    swapIcon('fa-bars', 'fa-xmark')
}


/*
    А вот ваше старое решение

    Пожалуйста, никогда не меняйте стили прямо через JS (style.display и т.д).
    Куда эффективнее добавлять/удалять классы - быстрее работают, можно делать переходы, меньше кода
*/

// menuTrigger.addEventListener("click", () => {
//     if (burgerMenu.style.display == "none") {
//         burgerMenu.style.display = "flex";
//         changeIcon("fa-xmark", 'fa-bars');
//     } else {
//         burgerMenu.style.display = "none";
//         changeIcon('fa-bars', 'fa-xmark');
//     }
// });

