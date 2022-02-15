let serverResp = [
    {
        "Id": "4",
        "Product_name": "Original burger",
        "Prod_type_name": "burger",
        "Price": 3,
        "Img": "https://316024.selcdn.ru/wiget/4d4c871a-107f-11e7-80df-d8d38565926f/ba3a1ca2-2ec6-4cf4-a843-f7f0fc0f175a_Medium_.jpg",
        "Supplier": "Burger Club",
        "Quantity": 0
    },
    {
        "Id": "5",
        "Product_name": "Crispy Chicken burger",
        "Prod_type_name": "burger",
        "Price": 4,
        "Img": "https://316024.selcdn.ru/wiget/4d4c871a-107f-11e7-80df-d8d38565926f/93bce037-709e-41a0-9beb-ab3670663b40_Medium_.jpg",
        "Supplier": "Burger Club",
        "Quantity": 0
    },
    {
        "Id": "6",
        "Product_name": "Bacon Cheese Burger",
        "Prod_type_name": "burger",
        "Price": 7,
        "Img": "https://316024.selcdn.ru/wiget/4d4c871a-107f-11e7-80df-d8d38565926f/49e75c35-6fff-4a0f-8d6a-959cf4721c74_Medium_.jpg",
        "Supplier": "Burger Club",
        "Quantity": 0
    }
]

async function getAllProducts() {
    let response = await fetch("http://localhost:7777/get-items-by-category",{
        mode: "cors",
        method: "POST",
        headers: {
            "Accept":"*/*",
            "Content-type":"application/json"
        },
        body: JSON.stringify({category_name:"burger",})
    })

    htmlConstructor(await response.json())
}

function htmlConstructor(obj) {
    let element = document.getElementById("elements")

    for (let i = 0; i < obj.length; i++) {
        element.innerHTML +=
            `<div id="element">
                 <h3 id="name">${obj[i].Product_name}</h3>
                 <p id="prod_type">${obj[i].Prod_type_name}</p>
                 <h2 id="price">${obj[i].Price}</h2>
                 <img id="image" src="${obj[i].Img}" alt="#">
                 <p id="supp_name">${obj[i].Supplier}</p>
            </div>`
    }
}

window.onload = getAllProducts()

// 2
const copy = obj => {
    const clone = {}
    Object.keys(obj).forEach((key) => {
        let value = obj[key];
        if (value === null) {
            clone[key] = null;
        } else if (value instanceof Object) {
            clone[key] = copy(value);
        } else {
            clone[key] = value;
        }
    });
    return clone
}

