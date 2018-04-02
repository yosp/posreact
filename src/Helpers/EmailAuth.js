import {auth, firestore} from '../FirebaseCore'

export function createUser(email, password, password2, fullname) {
    if (password === password2) {
        return auth.createUserWithEmailAndPassword(email, password)
           .then(saveUser(email, fullname))
    } else {
        
        throw new Error("Contraseñas no coinciden")
    }   
}

export function logout(){
    return auth.signOut()
}

export function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
}

export function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
}

function saveUser(email, fullname) {
    let Fstore = firestore.collection('users').doc(email)
    let username = email.split("@")
    
    return Fstore.set({
        username: username[0],
        fullname: fullname,
        imagepath: null
    })
}

// function updateUserInfo(email, data) {
//     let Fstore = firestore.collection('users').doc(email)

// }