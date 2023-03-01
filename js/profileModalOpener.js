const modal = document.querySelector(".profile-modal-Container")
const profileBtn = document.querySelector(".user-opener")
const modalCloseBtn = document.querySelector(".profile-modal-close-btn-container")

profileBtn.addEventListener("click", (e) => {
    modal.classList.add("flex")
})

modalCloseBtn.addEventListener("click", () => {
    modal.classList.remove("flex")
})