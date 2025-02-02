let label = document.getElementById("label");
let shoppingCart = document.getElementById("shoppingCart");

let basket = JSON.parse(localStorage.getItem("data")) || [];

// This file is used to calculate the total amount of items in the cart and display it in the cart icon.

let calculation = () => {
let cartIcon = document.getElementById('cartAmount');
cartIcon.innerHTML = basket.map((x) => x.item).reduce((a,b) => a + b, 0);
};

calculation();

// generate the cart items

let generateCartItems = () => {
if(basket.length !==0){
return shoppingCart.innerHTML = basket.map((x) => {
console.log(x);
let{id,item} = x;
let search = shopItemData.find((y) => y.id === id) || [];
return `
<div class="cartItem">
<img width="100" src=${search.img} alt="">
<div class="detalsCart">
<div class="titelPriceX">
<h4 class="titel-price">
<p>${search.name}</p>
<p class="cart-item-price">$ ${search.price}</p>
</h4>
<i class="fa-solid fa-x"></i>
</div>
<div class="buttons">
<i onclick="decrement(${id})" class="fa-solid fa-minus"></i>
<div id=${id} class="quantity">${item}</div>
<i onclick="increment(${id})" class="fa-solid fa-plus"></i>
</div>
<h3></h3>
</div>
</div>
`
}).join('');
}else {
shoppingCart.innerHTML = ``
label.innerHTML = `
<h2>Your cart is empty</h2>
<a href="index.html">
<button class="HomeBtn">Back to Home</button>
</a>
`
}
};

generateCartItems();