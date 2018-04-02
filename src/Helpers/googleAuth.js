import {RefFirebase, firestore} from '../FirebaseCore'

export default function googleAuth() {
    let provider = new RefFirebase.auth.GoogleAuthProvider()
    RefFirebase.auth().signInWithPopup(provider).then((result) => {
        SaveOrUpdateUser(result)
    })
}

function SaveOrUpdateUser(userData) {
    let Fstore = firestore.collection('users').doc(userData.user.email)
    let username = userData.user.email.split("@")
    return Fstore.set({
        username: username[0],
        email: userData.user.email,
        displayName: userData.user.displayName,
    })
}