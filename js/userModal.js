// open modal
let addDataBtn = document.querySelector(".profile-sign-in");
let modalUserData = document.querySelector(".profile-modal-Container");
let regModal = document.querySelector(".reg-modal-container");

addDataBtn.addEventListener('click', () => {
    modalUserData.classList.remove("flex")
    regModal.style.display = "flex";
})

// userdata
let userDataObj = {
    "name": "No data",
    "email": "No data",
    "number": "No data",
}

let storage = window.localStorage;

// get values from inputs and put them to the storage
let fieldName = document.querySelector(".profile-username");
let fieldEmail = document.querySelector(".profile-user-emial");
let fieldNumber = document.querySelector(".profile-password");

if (storage["USERDATA"]) {
    fieldName.innerHTML = JSON.parse(storage["USERDATA"]).name;
    fieldEmail.innerHTML = JSON.parse(storage["USERDATA"]).email;
    fieldNumber.innerHTML = JSON.parse(storage["USERDATA"]).number;
}

let inputsArr = document.querySelectorAll(".reg-form-input");

for (let oneInput of inputsArr) {
    oneInput.oninput = () => {
        if (oneInput.dataset.val == "name") {
            userDataObj.name = oneInput.value;
            fieldName.innerHTML = userDataObj.name;
            if (oneInput.value == "") {
                fieldName.innerHTML = "No data";
            }
        }
        
        if (oneInput.dataset.val == "email") {
            userDataObj.email = oneInput.value;
            fieldEmail.innerHTML = userDataObj.email;
            if (oneInput.value == "") {
                fieldEmail.innerHTML = "No data";
            }
        }
        
        if (oneInput.dataset.val == "number") {
            userDataObj.number = oneInput.value;
            fieldNumber.innerHTML = userDataObj.number;
            if (oneInput.value == "") {
                fieldNumber.innerHTML = "No data";
            }
        }
        
        storage["USERDATA"] = JSON.stringify(userDataObj);
    }
}

// "done" button cant reload the page
document.querySelector(".authorize").addEventListener('click', (e) => {
    e.preventDefault();
    regModal.style.display = "none";
});

// data termination
let terminator = document.querySelector(".profile-delete-data");

terminator.addEventListener('click', () => {
    storage["USERDATA"] = JSON.stringify({
        "name": "No data",
        "email": "No data",
        "number": "No data",
    });

    fieldName.innerHTML = "No data";
    fieldEmail.innerHTML = "No data";
    fieldNumber.innerHTML = "No data";
})