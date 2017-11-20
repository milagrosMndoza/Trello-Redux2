import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBolRHuVkBG6inAWnPXBcfGO3dYN0_sPxI",
    authDomain: "trello-redux-firebase.firebaseapp.com",
    databaseURL: "https://trello-redux-firebase.firebaseio.com",
    projectId: "trello-redux-firebase",
    storageBucket: "trello-redux-firebase.appspot.com",
    messagingSenderId: "459256786270"
  };
 firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
