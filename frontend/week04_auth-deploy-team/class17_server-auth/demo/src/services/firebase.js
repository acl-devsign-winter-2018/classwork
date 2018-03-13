import firebase from 'firebase';

export const config = {
  apiKey: 'AIzaSyBAQnvZMn-y0TwNym8NCx9ZMyJbInmqQgg',
  authDomain: 'alchemy-rock-paper-scissors.firebaseapp.com',
  databaseURL: 'https://alchemy-rock-paper-scissors.firebaseio.com',
  projectId: 'alchemy-rock-paper-scissors',
  storageBucket: 'alchemy-rock-paper-scissors.appspot.com',
  messagingSenderId: '480451737824'
};

const firebaseApp = firebase.initializeApp(config);

export const db = firebaseApp.database(); //the real-time database
export const storage = firebase.storage(); //the firebase storage adjunct for images
export const auth = firebaseApp.auth(); //the firebase auth namespace

export const providers = firebase.auth;