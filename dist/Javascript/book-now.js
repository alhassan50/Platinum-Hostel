let bookingForm = document.querySelector('.book-now-form')
let inputFields = bookingForm.querySelectorAll('input')
let loader = document.querySelector('.loader')
let goToROom = document.querySelector('.goto-room')


bookingForm.addEventListener('submit', (e) => {
    e.preventDefault()

    
    let stdRecord = {
        stdName : bookingForm.studentName.value,
        stdCourse : bookingForm.studentCourse.value,
        stdId : bookingForm.studentId.value,
        stdTel : bookingForm.studentTel.value,
        stdEmail : bookingForm.studentEmail.value,
        stdPassword : bookingForm.studentPassword.value,
        stdHostel : bookingForm.hostelLocation.value,
        stdPic : bookingForm.querySelector('#studentPic').files[0]
    }

    /* if (stdRecord.stdPic) {
        console.log(stdRecord.stdPic.type.startsWith('image/'))
    } else {
        console.log('no pic')
    } */

    if (!validateAllFields(stdRecord)) {
        alert('Please fill required fields correctly')
        return
    }

    goToROom.style.display = 'none'
    loader.style.display = 'block'
    
})

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

function validatePhoneNum(phoneNumber) {
    let regex = /^[0-9]+$/
    return regex.test(phoneNumber) && phoneNumber.length === 10
}

function validateEmail(email) {
    let regex = /^[0-9a-zA-Z_-]+@gmail.com$/
    return regex.test(email)
}

function validateStdID(ID) {
    let regex = /^[0-9]+$/
    return regex.test(ID)
}

function validateStdPic(pic) {
    return pic.type.startsWith('image/')
}

function validatePassword(password) {
    return password.length >= 8
}

function validateVisuals(status, inputElement) {
    if (status) {
        inputElement.classList.add('valid-input')
        inputElement.classList.remove('invalid-input')
    } else {
        inputElement.classList.add('invalid-input')
        inputElement.classList.remove('valid-input')
    }

    return status
}

function validateAllFields(stdRecord) {
    let status
    let allValid = true

    status = validateVisuals(
        validateStdID(stdRecord.stdId),
        document.querySelector('.ID-section')
    )

    if (!status && allValid ) {
        allValid = false
    }

    status = validateVisuals(
        validatePhoneNum(stdRecord.stdTel),
        document.querySelector('.phone-section')
    )

    if (!status && allValid) {
        allValid = false
    }

    status = validateVisuals(
        validateEmail(stdRecord.stdEmail),
        document.querySelector('.email-section')
    )
    
    if (!status && allValid) {
        allValid = false
    }

    status = validateVisuals(
        validatePassword(stdRecord.stdPassword),
        document.querySelector('.pwd-section')
    )

    if (!status && allValid) {
        allValid = false
    }
    
    status = validateVisuals(
        stdRecord.stdHostel != 'none',
        document.querySelector('.hostel-section')
    )

    if (!status && allValid) {
        allValid = false
    }

    if (stdRecord.stdPic) {
        status = validateVisuals(
            validateStdPic(stdRecord.stdPic),
            document.querySelector('.pic-section')
        )
    }

    if (!status && allValid) {
        allValid = false
    }

    return allValid
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