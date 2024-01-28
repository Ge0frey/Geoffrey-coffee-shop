const menuBtn = document.querySelector("#menu-btn")
const navbar = document.querySelector(".navbar");
const cartItems = document.querySelector(".cart-items-container")
const cartBtn = document.querySelector("#cart-btn")
const searchForm = document.querySelector(".search-form")
const searchBtn = document.querySelector("#search-btn")

menuBtn.onclick = () => {
    navbar.classList.toggle("active")
    searchForm.classList.remove("active")
    cartItems.classList.remove("active")
}

cartBtn.onclick = () => {
    cartItems.classList.toggle("active")
    navbar.classList.remove("active")
    searchForm.classList.remove("active")
}

searchBtn.onclick = () => {
    searchForm.classList.toggle("active")
    navbar.classList.remove("active")
    cartItems.classList.remove("active")
}

window.onscroll = () => {
    navbar.classList.remove("active")
    searchForm.classList.remove("active")
    cartItems.classList.remove("active")
}




