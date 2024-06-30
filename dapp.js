//تعريف بعض المتغيرات المهمة لدينا
let listProductHTML = document.querySelector('.listProduct');
let body = document.querySelector('body');
let products = [];

    const addDataToHTML = () =>
    {
    // remove datas default from HTML
        // add new datas
        if(products.length > 0) // if has data
        {
            products.forEach(product => {
                let newProduct = document.createElement('div');
                newProduct.dataset.id = product.id;
                newProduct.classList.add('item');
                newProduct.innerHTML = 
                `<img src="${product.image}" alt="">
                <h2>${product.name}</h2>
                <h2>${product.inf}</h2>
                <div class="price">$${product.price}</div>
                <button class="Inf">show informtion</button>`;
                listProductHTML.appendChild(newProduct);
            });
        }
    }
const initApp = () => {
    // get data product
    fetch('products.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        addDataToHTML();

        // get data cart from memory
        if(localStorage.getItem('cart')){
            cart = JSON.parse(localStorage.getItem('cart'));
            addCartToHTML();
        }
    })
}
initApp();