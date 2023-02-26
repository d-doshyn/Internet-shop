const cards = document.querySelector(".catalog-container");
const cartItems = document.querySelector(".cart-products-container");
const cartItemsTotal = document.querySelector(".cart-total-price");
const admitionBtn = document.querySelector(".admition-btn-container");

//Rendering products

function renderProducts() {
    products.forEach((product) => {
        cards.innerHTML += `
            <div class="card">
                <div class="img-container">
                    <img src="${product.imgSrc}" alt="${product.imgSrc}" class="card-img">
                </div>
                <div class="product-name-container">
                    <h6 class="product-name">${product.name}</h6>
                </div>
                <div class="price-container">
                    <h6 class="price">${product.price}$</h6>
                </div>
                <div class="add-to-cart-container" onclick="addToCart(${product.id})">
                    <h6 class="add-to-cart">ADD TO CART</h6>
                </div>
            </div>
        `
    })
}

renderProducts();

// cart array

let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

//ADD TO CART

function addToCart(id) {
    if (cart.some((item) => item.id === id)) {
        changeNumberOfUnits("plus", id)
    } else {
        const item = products.find((product) => product.id === id);

        cart.push({
            ...item,
            numberOfUnits: 1
        });
    }

    updateCart();
}

// update cart

function updateCart() {
    renderCartItems();
    renderTotal();
    addAdmitionBtn();

    //save cart to local storage

    localStorage.setItem("CART", JSON.stringify(cart));
}

function addAdmitionBtn() {
    if (cart.length > 0) {
        admitionBtn.classList.add("flex");
    } else {
        admitionBtn.classList.remove("flex");
    }
}

//calculate and render total

function renderTotal() {
    let totalPrice = 0;
    let totalItems = 0;

    cart.forEach((item) => {
        totalPrice += item.price * item.numberOfUnits;
        totalItems += item.numberOfUnits;
    })

    cartItemsTotal.innerHTML = `
    <h2 class="cart-total-price">
        You added <span class="total-items">${totalItems}</span> items to your cart. <br>Total price: <span class="total-price">$${(totalPrice.toFixed(2))}</span>
    </h2>
    `
}

//render cart items

function renderCartItems() {
    cartItems.innerHTML = "";
    cart.forEach((item) => {
        cartItems.innerHTML += `
        <div class="cart-card">
            <div class="cart-card-left">
                <img src="${item.imgSrc}" alt="${item.name}">
            </div>
            <div class="cart-card-right">
                <h3 class="cart-card-title">${item.name}</h3>
                <p class="card-price">${item.price}$</p>
                <p class="card-count"><span class="cart-minus-btn" onclick="changeNumberOfUnits('minus', ${item.id})">-</span> ${item.numberOfUnits} <span class="cart-plus-btn" onclick="changeNumberOfUnits('plus', ${item.id})">+</span></p>
            </div>
            <p class="cart-delete-btn" onclick="removeItemFromCart(${item.id})"><i class="fa-sharp fa-solid fa-xmark"></i></p>
        </div>
        `
    })
}

//change number of units

function changeNumberOfUnits(action, id) {
    cart = cart.map((item) => {
        let numberOfUnits = item.numberOfUnits;
        if (item.id === id) {
            if (action === "minus" && numberOfUnits > 1) {
                numberOfUnits--;
            }
            else if (action === "plus") {
                numberOfUnits++;
            }
        }

        return {
            ...item,
            numberOfUnits,
        };
    });

    updateCart();
}

//remove item from cart

function removeItemFromCart(id) {
    cart = cart.filter((item) => item.id !== id);

    updateCart();
}