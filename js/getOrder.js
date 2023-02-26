let buyBtn = document.querySelector(".admition-btn");

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
        let parsedUserdata = JSON.parse(window.localStorage["USERDATA"]);
        let parsedProductsdata = JSON.parse(window.localStorage["CART"]);

        for (let dataPiece of parsedProductsdata) {
            let allTheInfo = {
                "name": parsedUserdata.name,
                "email": parsedUserdata.email,
                "number": parsedUserdata.number,
                "productName": dataPiece.name,
                "productCount": dataPiece.numberOfUnits,
            }

            emailjs.init("kBOW8N-Edy7yi5g_l");
    
            emailjs.send('service_n5l8fiv', 'template_p71hhka', allTheInfo)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
             }, function(error) {
                console.log('FAILED...', error);
            });
        }
    }
}

buyBtn.onclick = getOrder;

console.log(document.querySelector('.sum'))