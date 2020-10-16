import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
        apiKey: "AIzaSyBu44mZSvEUYtOufGaCu4D5rIl9CKdAYQs",
        authDomain: "projet-vente-6b2c8.firebaseapp.com",
        databaseURL: "https://projet-vente-6b2c8.firebaseio.com",
        projectId: "projet-vente-6b2c8",
        storageBucket: "projet-vente-6b2c8.appspot.com",
        messagingSenderId: "832168023569",
        appId: "1:832168023569:web:8e8b876bd34641d90983b0",
        measurementId: "G-G4P2VMLWC0"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const loginAvecGoogle = () => auth.signInWithPopup(provider)

export default firebase