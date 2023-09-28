import { initializeApp } from "firebase/app"
import { getFirestore, getDocs } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDt0pLtSiGeUJnA8uusPFpQRmZywTaEjXs",
    authDomain: "platinum-hostels.firebaseapp.com",
    projectId: "platinum-hostels",
    storageBucket: "platinum-hostels.appspot.com",
    messagingSenderId: "136937087519",
    appId: "1:136937087519:web:e65132ce9006cd825f2b2a"
}

export const app = initializeApp(firebaseConfig)
export const roomsDatabase = getFirestore(app)

export const getDocuments = async (coll) => {
    try {
        return await getDocs(coll)
    } catch (error) {
        console.log('Error: ', error)
    }
}

