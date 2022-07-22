const menuBtn = document.querySelector('.menu-btn')
const navBar = document.querySelector('.nav-list')
let menuOpen = false

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open')
        menuOpen = true
    } else {
        menuBtn.classList.remove('open')
        menuOpen = false
    }
    navBar.classList.toggle('active')
})