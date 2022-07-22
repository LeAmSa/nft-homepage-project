import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

const swiperGallery = new Swiper(".swiper-gallery", {
    loop: true,
    lazy: true,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".btn-next-gallery",
        prevEl: ".btn-prev-gallery",
    },
    pagination: {
        el: ".pagination-gallery",
        clickable: true,
    },
    keyboard: true,
    grabCursor: true,
})