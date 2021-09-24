//search for item
let searchForm = document.querySelector('.search__form');
let searchBtn = document.getElementById('search__btn');
let shoppingCart = document.querySelector('.shopping__cart');
let cartBtn = document.getElementById('cart__btn');
let loginForm = document.querySelector('.login__form');
let loginBtn = document.getElementById('login__btn');
let menuBtn = document.getElementById('menu__btn');
let navBar = document.querySelector('.navbar')

//toggle search input
searchBtn.addEventListener('click', () => {
    searchForm.classList.toggle('show');
    shoppingCart.classList.remove('show');
    navBar.classList.remove('show');
    loginForm.classList.remove('show');
});

//toggle cart items
cartBtn.addEventListener('click', () => {
    shoppingCart.classList.toggle('show');
    searchForm.classList.remove('show');
    navBar.classList.remove('show');
    loginForm.classList.remove('show');
})

//toggle login form
loginBtn.addEventListener('click', () => {
    loginForm.classList.toggle('show');
    searchForm.classList.remove('show');
    shoppingCart.classList.remove('show');
    navBar.classList.remove('show');
});

//toggle menu
menuBtn.addEventListener('click', () => {
    navBar.classList.toggle('show');
    searchForm.classList.remove('show');
    shoppingCart.classList.remove('show');
    loginForm.classList.remove('show');
});

window.onscroll = () => {
    searchForm.classList.remove('show');
    shoppingCart.classList.remove('show');
    navBar.classList.remove('show');
    loginForm.classList.remove('show');
}


//Product Slider 
var swiper = new Swiper(".product__slider", {
        loop: true,
        spaceBetween: 20,
        autoplay: {
            delay: 6000,
            disableInteraction: false,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        },
      }
    );
    

    //Review Slider
    var swiper = new Swiper(".review__slider", {
        loop: true,
        spaceBetween: 20,
        autoplay: {
            delay: 6000,
            disableInteraction: false,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        },
      }
    );