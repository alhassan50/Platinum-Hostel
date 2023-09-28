let mainHeader = document.querySelector('.main-header')
let menuIcon = document.querySelector('.hamburger-icon')
let mainNavBar = document.querySelector('.main-navbar')
let closeNavBar = document.querySelector('.close-btn')
let mainNavLinks = mainNavBar.querySelectorAll('li')
let reviewCards = document.querySelectorAll('.review-card')

window.addEventListener('scroll', () => {
    if ( scrollY > 74) {
        mainHeader.classList.add('show-main-header')
    } else {
        mainHeader.classList.remove('show-main-header')
    }
})

document.addEventListener('DOMContentLoaded', () =>{
    let moreReviewsBtn = document.querySelector('.show-more-btn')

    if (moreReviewsBtn) {
        moreReviewsBtn.addEventListener('click', () => {
            reviewCards.forEach((card) => {
                card.classList.remove('hide-review')
            })
        
            moreReviewsBtn.style.display = 'none'
            lessReviewsBtn.style.display = 'block'
        })
    }

    let lessReviewsBtn = document.querySelector('.show-less-btn')
    
    if (lessReviewsBtn) {
        lessReviewsBtn.addEventListener('click', () => {
            for(i = 0; i < reviewCards.length; i++) {
                if (i >= 0 && i <= 3) {
                    continue
                }
                reviewCards[i].classList.add('hide-review')
            }
        
            moreReviewsBtn.style.display = 'block'
            lessReviewsBtn.style.display = 'none'
        })
    }
})

menuIcon.addEventListener('click', () => {
    showNavBar()
})

closeNavBar.addEventListener('click', () => {
    hideNavBar()
})

mainNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
        hideNavBar()
    })
})

function showNavBar() {
    mainNavBar.classList.add('show-navbar')
}

function hideNavBar() {
    mainNavBar.classList.remove('show-navbar')
}


