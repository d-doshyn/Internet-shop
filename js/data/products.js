/* 
    Этому приёму с id меня научили туториалы Vue.js =)
*/

let id = 0;

/* 
    Слегка улучшил ваши данные: 
    теперь они меньше привязаны к статичным цифрам
    Они завязаны на id
*/

function randomPrice(id) {
    return Math.round(Math.random() * 100 + id);
}

const products = [
    {
        id: id++,
        name: "Product" + id,
        price: randomPrice(id),
        imgSrc: `https://dummyimage.com/100x100/003330/ffffff.png?text=Product${id}`,
    },
    {
        id: id++,
        name: "Product" + id,
        price: randomPrice(id),
        imgSrc: `https://dummyimage.com/100x100/440000/ffffff.png?text=Product${id}`,
    },
    {
        id: id++,
        name: "Product" + id,
        price: randomPrice(id),
        imgSrc: `https://dummyimage.com/100x100/186/ffffff.png?text=Product${id}`,
    },
    {
        id: id++,
        name: "Product" + id,
        price: randomPrice(id),
        imgSrc: `https://dummyimage.com/100x100/ffdd00/0.png?text=Product${id}`,
    },
    {
        id: id++,
        name: "Product" + id,
        price: randomPrice(id),
        imgSrc: `https://dummyimage.com/100x100/ff00f7/000000.png?text=Product${id}`,
    },
    {
        id: id++,
        name: "Product" + id,
        price: randomPrice(id),
        imgSrc: `https://dummyimage.com/100x100/0033ff/000000.png?text=Product${id}`,
    },
]