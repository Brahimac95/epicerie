

let searchForm = document.querySelector(".search-form");
let searchIcon = document.querySelector("#search-btn");
searchIcon.onclick = () =>{
    searchForm.classList.toggle('active')
    shoppinCart.classList.remove('active')
    loginForm.classList.remove('active')
    navBar.classList.remove("active")
}

let shoppinCart = document.querySelector(".shooping-cart");
let cartIcon = document.querySelector("#cart-btn");
cartIcon.onclick = () =>{
    shoppinCart.classList.toggle('active')
    searchForm.classList.remove('active')
    loginForm.classList.remove('active')
    navBar.classList.remove("active")
}
let loginForm = document.querySelector(".login-form");
let loginIcon = document.querySelector("#login-btn");
loginIcon.onclick = () =>{
    loginForm.classList.toggle('active')
    shoppinCart.classList.remove('active')
    searchForm.classList.remove("active")
    navBar.classList.remove("active")
}
let navBar= document.querySelector(".navBar");
let menuIcon = document.querySelector("#menu-btn");
menuIcon.onclick = () =>{
    navBar.classList.toggle('active')
    shoppinCart.classList.remove('active')
    loginForm.classList.remove('active')
    searchForm.classList.remove("active")
}
window.onscroll = () => {
    searchForm.classList.remove('active')
    shoppinCart.classList.remove('active')
    loginForm.classList.remove('active')
    navBar.classList.remove("active")
}

let swiperProducts = new Swiper(".product-slider", {
    Loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });
  let swiperCustomer = new Swiper(".review-slider", {
    Loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  })