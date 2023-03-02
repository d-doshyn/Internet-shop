const modal = document.querySelector(".profile-modal-Container")
const profileBtn = document.querySelector(".user-opener")
const modalCloseBtn = document.querySelector(".profile-modal-close-btn-container")

/* Используйте классы (а не стили) для смены визуала на странице */

profileBtn.addEventListener("click", (e) => {
    modal.classList.add("flex")
})

modalCloseBtn.addEventListener("click", () => {
    modal.classList.remove("flex")
})