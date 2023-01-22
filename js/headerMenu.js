// Burger opener

const menu = document.querySelector('.header-menu')
const menuIcon = document.querySelector('.burger-menu-icon')

menuIcon.addEventListener("click", () => {
    menu.classList.toggle('-active')
    menuIcon.classList.toggle('-active-menu-icon')
})