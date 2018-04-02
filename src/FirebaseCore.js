import * as firebase from 'firebase'
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyBGTApMK1selj6ikoNa5JDGLEBKSgSL_dY",
    authDomain: "posreact-2a75a.firebaseapp.com",
    databaseURL: "https://posreact-2a75a.firebaseio.com",
    projectId: "posreact-2a75a",
    storageBucket: "posreact-2a75a.appspot.com",
    messagingSenderId: "747855836539"
  };
  firebase.initializeApp(config);

  export default firebase
  export const firestore =  firebase.firestore()
  export const auth = firebase.auth()
  export const store = firebase.storage()