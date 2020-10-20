import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
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
};

export const creerUserProfilDocument = async (userAuth, autreData) => {
        if (!userAuth) return //on quitte si pas de connexion ( null )

        const userRef = firestore.doc('users/KbclthMtw1SgFt9HLL6polCrKel2')

        const capture = await userRef.get()

                if (!capture.exists) {
                        const { displayName, email } = userAuth
                        const createAt = new Date()


                        try {
                                await userRef.set({
                                        displayName,
                                        email,
                                        createAt,
                                        ...autreData
                                })
                        } catch (error) {
                                console.log("Erreur a la creation utilisateur",error.message)
                        }
                }

        return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()


const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const loginAvecGoogle = () => auth.signInWithPopup(provider)

export default firebase