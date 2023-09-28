import { app, roomsDatabase, getDocuments } from "../dist/Javascript/firebase"
import { query, where } from "firebase/firestore"

const roomLocation = document.getElementById('hostelLocation')
const roomType = document.getElementById('room-type')
const occupantFilter = document.getElementById('occupants')
const occupantOptions = occupantFilter.querySelectorAll('option')
const submitFilter = document.querySelector('.submit-filter')
const roomsTable = document.querySelector('.rooms-info')
const roomBody = roomsTable.querySelector('tbody')
const roomsInfo = roomBody.querySelectorAll('tr')
const confirmationDetails = document.querySelector('.confirmation')
const closeBtn = document.querySelector('.close-confirmation')
const screenLoader = document.querySelector('.screen-loader')

console.log(123);


closeBtn.addEventListener('click', () => {
    confirmationDetails.classList.add('hide-confirmation')
})

roomsInfo.forEach((room) => {
    room.addEventListener('click', () => {
        let roomDetails = {
            location: room.querySelector('.location').innerHTML.trim(),
            roomNumber: room.querySelector('.room-number').innerHTML.trim(),
            roomType: room.querySelector('.room-type').innerHTML.trim(),
            occupants: room.querySelector('.occupants').innerHTML.trim(),
            price: room.querySelector('.price').innerHTML.trim()
        }


        confirmationDetails.querySelector('.location').innerHTML = `hostel location:&nbsp;&nbsp;${roomDetails.location}`

        confirmationDetails.querySelector('.room-number').innerHTML = `room number:&nbsp;&nbsp;${roomDetails.roomNumber}`

        confirmationDetails.querySelector('.room-type').innerHTML = `room capacity:&nbsp;&nbsp;${roomDetails.roomType}`

        confirmationDetails.querySelector('.occupants').innerHTML = `current occupants:&nbsp;&nbsp;${roomDetails.occupants}`

        confirmationDetails.querySelector('.price').innerHTML = `price:&nbsp;&nbsp;${roomDetails.price}`

        confirmationDetails.classList.remove('hide-confirmation')      

    })
})

submitFilter.addEventListener('click', () => {
    console.log(screenLoader)

    let location = roomLocation.value
    let room = roomType.value
    let occupants = occupantFilter.value

    /* console.log('location: ', location);
    console.log('room type: ', room);
    console.log('occupants: ', occupants); */

    let filterQuery = query(
        roomsDatabase,
        where('location', '==', location),
        (room !== 'all' ? [where('capacity', '==', room)] : []),
        (occupants !== 'none' ? [where('occupants', '==', occupants)] : [])        
    )

    const filteredRooms = getDocuments(filterQuery)
    filteredRooms.forEach((room) => {
        console.log(room.data())
    })
})

roomType.addEventListener('change', (e) => {
    let room = e.target.value

    occupantOptions.forEach((option) => {
        if (room === 'all') {
            option.classList.remove('show-option')
        } else if (room > option.value) {
            option.classList.remove('show-option')
        } else {
            option.classList.add('show-option')
        }
    })
})



