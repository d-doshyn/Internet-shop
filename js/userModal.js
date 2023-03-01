/* 

    Вообще, мне не нравится этот файл. Я бы начисто его переписал.
    Почему? Много повторяющегося кода. Логика верная, а глазки плачут
    😭

    В этом файле столько логики и нет ни одной функции....
    Даня. Ну Даня.... Уволю!

*/

// open modal
let addDataBtn = document.querySelector(".profile-sign-in");
let modalUserData = document.querySelector(".profile-modal-Container");
let regModal = document.querySelector(".reg-modal-container");

/* Не меняй стили через style */
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

/*
    Используй вместо циклов методы map() и forEach():
    они более эргономны и читабельны
*/

for (let oneInput of inputsArr) {
    oneInput.oninput = () => {
        // повторяющийся код detected
        // можно оптимизировать (и не говори, что не знаешь, как!)
        if (oneInput.dataset.val == "name") {
            userDataObj.name = oneInput.value;
            fieldName.innerHTML = userDataObj.name;
            if (oneInput.value == "") {
                fieldName.innerHTML = "No data";
            }
        }

        // повторяющийся код detected
        // можно оптимизировать (и не говори, что не знаешь, как!)
        if (oneInput.dataset.val == "email") {
            userDataObj.email = oneInput.value;
            fieldEmail.innerHTML = userDataObj.email;
            if (oneInput.value == "") {
                fieldEmail.innerHTML = "No data";
            }
        }

        // повторяющийся код detected
        // можно оптимизировать (и не говори, что не знаешь, как!)
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


/* 
    Используй onclick, а не вот этот страшный addEventListener
    у addEventListener слегка другое предназначение 
    (если захочешь, расскажу, в чём разница)
*/

// document.querySelector(".authorize"), без переменной - вот это крутой костыль =)
// такого крутого ещё не видел

document.querySelector(".authorize").addEventListener('click', (e) => {
    e.preventDefault();
    regModal.style.display = "none";
});

// data termination
let terminator = document.querySelector(".profile-delete-data");

// два раза пустой объект (видел такой в начале файла)
// можешь что-то придумать с этим?

// и создай функцию для обнуление HTML-элементов. А то вот те 3 строчки глазки режут-то
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