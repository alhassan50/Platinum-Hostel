let bookNowBtns = document.querySelectorAll('.book-now-btn')

bookNowBtns.forEach((bookNowbtn) => {
    bookNowbtn.addEventListener('click', () => {
        window.location.href = '/dist/bookingForm.html'
        console.log('baaba');
    })
})




