function redirect(path) {
    window.location.href = path;
}

function checkToken ( ) {
    const token=localStorage.getItem("refresh_token");

    return Boolean(token);
}

const token =checkToken();

if(!token) {
    window.location.href = "/login.html";
};


const titleInput =document.getElementById("title");
const priceInput =document.getElementById("price");
const descriptionInput =document.getElementById("description");
const exitBtn =document.querySelector("#LogOut");



let products =[];

document.addEventListener("DOMContentLoaded" , function() {
    const addBtn =document.getElementById("addBtn");
    const productsList =document.getElementById("products-list");


    addBtn.onclick =function (event) {
        event.preventDefault();


        const newProduct ={
            id:Date.now(),
            title: titleInput.value,
            price: parseInt(priceInput.value),
            description:descriptionInput.value,
        };

        products.push(newProduct);

        titleInput.value= "";
        priceInput.value ="";
        descriptionInput.value="";

        
        renderProductsList();
    }

    function renderProductsList() {
        productsList.innerHTML = "";
        products.map((p) => {
            const productHTML =`
                <div class="product">
                    <h2>${p.title}</h2>
                    <p>Price: ${p.price} USD</p>
                    <p>Description: ${p.description}</p>
                </div>
            `;
            productsList.innerHTML +=productHTML;
        })
    }
})

exitBtn.addEventListener("click" , function() {
    localStorage.removeItem("refresh_token");
    sessionStorage.removeItem("access_token");

    window.location.href = "/login.html";
})

function deleteProduct () {
    console.log("hello")
}