// open modal
let addDataBtn = document.querySelector(".profile-sign-in");
let modalUserData = document.querySelector(".profile-modal-Container");
let regModal = document.querySelector(".reg-modal-container");

addDataBtn.addEventListener('click', () => {
    modalUserData.classList.remove("flex")
    regModal.style.display = "flex";
})

// userdata
let userDataObj = {}

let storage = window.localStorage;

// get values from inputs and put them to the storage
let fieldName = document.querySelector(".profile-username");
let fieldEmail = document.querySelector(".profile-user-emial");
let fieldNumber = document.querySelector(".profile-password");

function fillFields() {
    if (storage["USERDATA"]) {
        fieldName.innerHTML = JSON.parse(storage["USERDATA"]).name;
        fieldEmail.innerHTML = JSON.parse(storage["USERDATA"]).email;
        fieldNumber.innerHTML = JSON.parse(storage["USERDATA"]).number;
    }
}
fillFields()

let inputsArr = document.querySelectorAll(".reg-form-input");


let doneButton = document.querySelector(".authorize");

doneButton.onclick = (e) => {
    e.preventDefault();

    let name = document.querySelector('.input-name').value;
    let email = document.querySelector('.input-email').value;
    let number = document.querySelector('.input-number').value;

    userDataObj = {
        name: name,
        email: email,
        number: number,
    }

    storage["USERDATA"] = JSON.stringify(userDataObj);
    
    regModal.style.display = "none";
    
    fillFields()
}


// data termination
let terminateButton = document.querySelector(".profile-delete-data");

function textTermination(field) {
    field.innerHTML = "No data";
}

terminateButton.addEventListener('click', () => {
    storage["USERDATA"] = JSON.stringify({});

    textTermination(fieldName)
    textTermination(fieldEmail)
    textTermination(fieldNumber)
})