//search for item
let searchForm = document.querySelector('.search__form');
let searchBtn = document.getElementById('search__btn');
let shoppingCart = document.querySelector('.shopping__cart');
let cartBtn = document.getElementById('cart__btn');
let loginForm = document.querySelector('.login__form');
let loginBtn = document.getElementById('login__btn')

//toggle search input
searchBtn.addEventListener('click', () => {
    searchForm.classList.toggle('show');
});

//toggle cart items
cartBtn.addEventListener('click', () => {
    shoppingCart.classList.toggle('show');
})

//toggle login form
loginBtn.addEventListener('click', () => {
    loginForm.classList.toggle('show');
})
