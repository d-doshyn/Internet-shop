let buyBtn = document.querySelector(".admition-btn");

let parsedUserdata = JSON.parse(window.localStorage["USERDATA"]);
let parsedProductsdata = JSON.parse(window.localStorage["CART"]);

let totalPrice = document.querySelector("span.total-price").innerHTML;

let namesArr = [];

let allTheInfo = {
    "name": parsedUserdata.name,
    "email": parsedUserdata.email,
    "number": parsedUserdata.number,
    "productName": namesArr,
    "toPay": totalPrice,
}

function getOrder() {
    if (!window.localStorage["USERDATA"] || window.localStorage["USERDATA"] == {
        "name": "No data",
        "email": "No data",
        "number": "No data",
    }) {
        let regModal = document.querySelector(".reg-modal-container");

        regModal.style.display = "flex";
        alert('At first, give us your contact info!');
    } else {

        for (let dataPiece of parsedProductsdata) {
            namesArr.push(dataPiece.name + ' ' + dataPiece.numberOfUnits + 'pcs')
        }

        emailjs.init("kBOW8N-Edy7yi5g_l");

        emailjs.send('service_n5l8fiv', 'template_p71hhka', allTheInfo)
            .then(function (response) {
                alert('Thank you for your order! We will contact you ASAP!')
            }, function (error) {
                alert('Error! Try again later!')
            });
    }
}

buyBtn.onclick = getOrder;