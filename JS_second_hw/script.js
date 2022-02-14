let productType = {
    category_name:"burger",
    permissions: [
        "*://developer.mozilla.org/*",
        "webRequest"
    ],
}

async function getAllProducts(data) {
    let response = await fetch("http://localhost:7777/get-items-by-category",{
        mode: "cors",
        method: "POST",
        headers: {
            "Accept":"*/*",
            "Content-type":"application/json"
        },
        body: JSON.stringify(data)
    })

    htmlConstructor(await response.json())
}

function htmlConstructor(obj) {
    let element = document.getElementById("elements")

    console.log(obj)

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

window.onload = getAllProducts(productType)


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

