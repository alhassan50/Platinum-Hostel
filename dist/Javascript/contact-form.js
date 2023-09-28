let contactForm = document.querySelector('.contact-form')
let inputFields = contactForm.querySelectorAll('input')
let textArea = contactForm.querySelector('textarea')


contactForm.addEventListener('submit', (e) => {
    e.preventDefault()
    if (validateAllFields()) {
        clearFields(contactForm)   
    }
    blurredInputs()
})

inputFields.forEach((input) => {
    input.addEventListener('focus', () => {
        let label = input.previousElementSibling
        label.classList.add('move-label')
    })
})

inputFields.forEach((input) => {
    input.addEventListener('blur', () => {
        if (input.value === '') {
            let label = input.previousElementSibling
            label.classList.remove('move-label')
        }
    })
})

textArea.addEventListener('focus', () => {
    let label = textArea.previousElementSibling
    label.classList.add('move-label')
})

textArea.addEventListener('blur', () => {
    if (textArea.value === '') {
        let label = textArea.previousElementSibling
        label.classList.remove('move-label')
    }
})

function blurredInputs() {
    inputFields.forEach((input) => {
        if (input.value === '') {
            let label = input.previousElementSibling
            label.classList.remove('move-label')
        }
    })

    if (textArea.value === '') {
        let label = textArea.previousElementSibling
        label.classList.remove('move-label')
    }
}

function validatePhoneNum(phoneNumber) {
    let regex = /^[0-9]+$/
    return regex.test(phoneNumber)
}

function validateEmail(email) {
    let regex = /^[0-9a-zA-Z_-]+@gmail.com$/
    return regex.test(email)
}

function validateAllFields() {
    let name = contactForm.name.value
    let emailAddress = contactForm.email.value
    let phoneNumber = contactForm.phone.value
    let message = contactForm.message.value

    if (!validatePhoneNum(phoneNumber)) {
        alert('Enter Valid Phone Number')
        return false
    }

    if (!validateEmail(emailAddress)) {
        alert('Enter Valid Gmail')
        return false
    }

    console.log(name,' ', emailAddress,' ', phoneNumber,' ', message)

    return true
}

function clearFields(form) {
    let inputs = form.querySelectorAll('input')
    let textAreas = form.querySelectorAll('textarea')
    if (inputs) {
        inputs.forEach((input) => {
            input.value = ''
        })
    }

    if (textAreas) {
        textAreas.forEach((textarea) => {
            textarea.value = ''
        })
    }
}