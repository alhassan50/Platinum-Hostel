const loginForm = document.querySelector('form')
const inputFields = loginForm.querySelectorAll('input')
const mainHeading = document.querySelector('.more-info-h1')
const subHeading = document.querySelector('.more-info-h2')
const moreInfoBox = document.querySelector('.more-info')
const navBallsContainer = document.querySelector('.info-nav')

inputFields.forEach((inputField) => {
    inputField.addEventListener('focus', () => {
        if (!inputField.previousElementSibling.classList.contains('static-label')) {
            inputField.previousElementSibling.classList.add('move-label')
        }
    })
})

inputFields.forEach((inputField) => {
    inputField.addEventListener('blur', () => {
        if (inputField.value === '') {
            inputField.previousElementSibling.classList.remove('move-label')
        }
    })
})

const infodesc = [
    {
        h1: "We are platinum",
        h2: "Experience the pinnacle of comfort and convenience at Platinum Hostels. Your home away from home awaits, where every stay is a journey into the unparallel hospitality."
    },

    
    {
        h1: "We are hospitable",
        h2: "At Platinum Hostels, hospitability is at the heart of everything we do. We're more than just a place to stay; we're your gracious hosts, ready to make your stay exceptional. Let us extend a warm welcome and ensure your stay is filled with unforgettable moments."
    },

    {
        h1: "Guided by integrity",
        h2: "At Platinum Hostels, integrity is paramount. We uphold unwavering honesty and ethical standards, ensuring your trust in us. Your comfort and peace of mind are our top priorities. Approved and endorsed by the KNUST, SRC-KNUST and NUGS."
    },

    {
        h1: "Powered by teamwork",
        h2: "Our close-knit team at Platinum Hostels works harmoniously to craft exceptional stays. Our synergy guarantees seamless, memorable moments, making your experience truly remarkable."
    },
    
    {
        h1: "-Kwame Mensah, bomso",
        h2: '"Absolutely loved my stay at Platinum Hostels! The atmosphere was electric, the staff was friendly and helpful, and the facilities were top-notch. Highly recommended for any college student looking for an unforgettable experience. 5 stars!"'
    }
]

const updateMoreInfo = (updatedIndex, message) => {
    const triggerManual = message === 'trigger manual'
    if (triggerManual) {
        console.log('manual');
        index = updatedIndex
    } else {
        index++
        console.log('auto');
    }

    index = index > infodesc.length - 1 ? 0 : index

    activateNavBall(index)

    mainHeading.textContent = infodesc[index].h1
    subHeading.textContent = infodesc[index].h2
}

const activateNavBall = (ballIndex) => {
    const navBalls = document.querySelectorAll('.nav-ball')
    
    for (let index = 0; index < navBalls.length; index++) {
        if (index === ballIndex) {
            navBalls[index].classList.add(`active-nav-ball`)
            //updatedIndex = index
            //console.log('ball ', index,' clicked');
        } else {
            navBalls[index].classList.remove(`active-nav-ball`)
        }    
    }

    /* let updatedIndex
    for (let index = 0; index < navBalls.length; index++) {
        if (navBall === navBalls[index]) {
            navBall.classList.add(`active-nav-ball`)
            updatedIndex = index
            console.log('ball ', index,' clicked');
        } else {
            navBalls[index].classList.remove(`active-nav-ball`)
        }    
    }
    const message = 'trigger manual'
    updateMoreInfo(updatedIndex, message) */
}

const createNavBalls = (ballLen) => {
    for (let index = 0; index < ballLen; index++) {
        const navBall = document.createElement('div')
        navBall.classList.add(`${index}`)
        navBall.classList.add(`nav-ball`)
        navBallsContainer.appendChild(navBall)
    }
}

let index = -1
createNavBalls(infodesc.length)
const navBalls = document.querySelectorAll('.nav-ball')
navBalls.forEach((navBall, index) => {
    navBall.addEventListener('click', () => {
        activateNavBall(index)
        const message = 'trigger manual'
        updateMoreInfo(index, message)
    })
})
updateMoreInfo()
setInterval(updateMoreInfo, 10000)
