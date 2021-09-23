//search for item
let searchForm = document.querySelector('.search__form');
let searchBtn = document.getElementById('search__btn');

searchBtn.addEventListener('click', () => {
    searchForm.classList.toggle('show')
})