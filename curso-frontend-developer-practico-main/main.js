const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const arrowIcon = document.querySelector('.arrowIcon');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

//EVENTOS PARA HACER APARECER O DESAPARECER COMPONENTES
menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);
arrowIcon.addEventListener('click', closeShoppingCart);


//FUNCIONES DE TOGGLE PARA AGREGAR O QUITAR CLASE INACTIVE
function toggleProductDetail(){
    productDetailContainer.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}

function toggleCarritoAside() {
    shoppingCartContainer.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}

function openProductDetailAside(){
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}
function closeShoppingCart(){
    shoppingCartContainer.classList.add('inactive');
}

//LISTA DE PRODUCTOS A RENDERIZAR
const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://api.lorem.space/image/watch?w=640&h=480&r=4812'
});

productList.push({
    name: 'Bicycle helmet',
    price: 1200,
    image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=4091'
});

productList.push({
    name: 'Bicycle helmet',
    price: 1600,
    image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=7856'
});

productList.push({
    name: 'Bicycle helmet',
    price: 1500,
    image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=966'
});

productList.push({
    name: 'Seat',
    price: 300,
    image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=6112'
});

productList.push({
    name: 'Tennis Montain Bike',
    price: 2200,
    image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=3384'
});

productList.push({
    name: 'Sunglasses',
    price: 800,
    image: 'https://api.lorem.space/image?w=640&h=480&r=4028'
});

productList.push({
    name: 'Sunglasses',
    price: 600,
    image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=1596'
});

productList.push({
    name: 'Bicycle seat bag',
    price: 876,
    image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=7058'
});

productList.push({
    name: 'Bicycle seat bag',
    price: 876,
    image: 'https://api.lorem.space/image?w=640&h=480&r=4027'
});


productList.push({
    name: 'Bicycle helmet',
    price: 1600,
    image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=7856'
});

productList.push({
    name: 'Bicycle helmet',
    price: 1500,
    image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=966'
});

productList.push({
    name: 'Seat',
    price: 300,
    image: 'https://api.lorem.space/image/furniture?w=640&h=480&r=6112'
});

productList.push({
    name: 'Tennis Montain Bike',
    price: 2200,
    image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=3384'
});

productList.push({
    name: 'Sunglasses',
    price: 800,
    image: 'https://api.lorem.space/image?w=640&h=480&r=4028'
});

//EJEMPLO DE LA MAQUETACION A REALiZAR DESDE JS
/* <div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
    <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
    </figure>
    </div>
</div> */

//Función que recorre el array - SOLUCION 1
function renderArray(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.append(productPrice, productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}
renderArray(productList);


    
//Segunda solución
// for(product of productList) {

// const htmlCards = `<div class="product-card">
// <img src= ${product.image} alt="product-img">
// <div class="product-info">
//     <div>
//         <p>$${product.price}</p>
//         <p>${product.name}</p>
//     </div>
// <figure>
//     <img src="./icons/bt_add_to_cart.svg" alt="icon">
// </figure>
// </div>
// </div>
// `
// cardsContainer.innerHTML += htmlCards;
// }

