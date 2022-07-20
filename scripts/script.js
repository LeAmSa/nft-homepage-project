const menuBtn = document.querySelector('.menu-btn')
let menuOpen = false
const controls = document.querySelectorAll('.control')
let currentItem = 0
const items = document.querySelectorAll('.item')
const maxItems = items.length

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open')
        menuOpen = true
    } else {
        menuBtn.classList.remove('open')
        menuOpen = false
    }
})

controls.forEach( control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains('left-arrow')
        const galleryWrapper = document.querySelector('.gallery-wrapper')

        if (isLeft) {
            currentItem -= 1
        } else {
            currentItem += 1
        }

        if (currentItem >= maxItems) {
            currentItem = 0
        }

        if (currentItem < 0) {
            currentItem = maxItems - 1
        }

        // if (currentItem == (maxItems - 1)) {
        //     galleryWrapper.style.borderRight = '1px solid #fff'
        // } else {
        //     galleryWrapper.style.borderRight = 'none'
        // }

        items.forEach(item => item.classList.remove('current-item'))

        items[currentItem].scrollIntoView({
            inline: 'center',
            block: 'nearest',
            behavior: 'smooth'
        })

        items[currentItem].classList.add('current-item')
    })
})

// function carouselAnimate() {
//     controls[1].click()
// }

// setInterval(() => {
//     carouselAnimate()
// }, 5000)