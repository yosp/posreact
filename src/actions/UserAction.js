import { firestore, auth } from '../FirebaseCore'

export function getUser(email) {
    return dispatch => {
        dispatch(getUserRequestAction())
        return firestore.collection('users').doc(email).get().then(doc => {
            if(!doc.exists){
                dispatch(getUserRejectAction());   
            } else {
                const users = doc.data()
                dispatch(getUserFulfillerAction(users))
            }
          })
          .catch((error) => {
            console.log(error);
            dispatch(getUserRejectAction());
          });
    }
}

export function registerUser(email, fullname, password, password2){
    return dispatch => {
        dispatch(registerUserRequestAction())
        if(password === password2){
            auth.createUserWithEmailAndPassword(email, password)
                .then( ()=> {
                    let username = email.split('@')[0]
                    dispatch(registerUserFulfilledAction())
                    dispatch(saveUser(email, username, fullname ))
                } ).catch( e => {
                    let authError =e.message
                    dispatch(registerUserRejectAction(authError))
                })
        } else {
            let authError = 'Passwords do not match'
            dispatch(registerUserRejectAction(authError))
        }
    }
}

function saveUser(email, username, fullname) {
    return dispatch => {
        dispatch(saveUserRequestAction())
        let newUser = {
            username,
            fullname,
            imagepath: ''
        }
        try {
            firestore.collection('users').doc(email).set(newUser)
            dispatch(saveUserFulfilledAction(newUser))
        }
        catch (e) {
            let errorMessage = e.message
            dispatch(saveUserRejectAction(errorMessage))
        }
    }
}

function getUserRequestAction() {
    return {
        type: 'GET_USER_REQUEST'
    }
}

function getUserRejectAction() {
    return {
        type: 'GET_USER_REJECT'
    }
}

function getUserFulfillerAction(users) {
    return {
        type: 'GET_USER_FULFILLED',
        users
    }
}

function registerUserRequestAction() {
    return {
        type: 'REGISTER_USER_REQUEST'
    }
}

function registerUserRejectAction(authError) {
    return {
        type: 'REGISTER_USER_REJECT',
        authError
    }
}

function registerUserFulfilledAction() {

    return {
        type: 'REGISTER_USER_FULFILLED'
    }
}

function saveUserRequestAction() {
    return {
        type: 'SAVE_USER_REQUEST'
    }
}

function saveUserFulfilledAction(newUser) {
    return {
        type: 'SAVE_USER_FULFILLED',
        newUser
    }
}

function saveUserRejectAction(errorMessage) {
    return {
        type: 'SAVE_USER_REJECT',
        errorMessage
    }
}