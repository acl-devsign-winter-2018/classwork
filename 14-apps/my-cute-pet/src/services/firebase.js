import firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyAPEFm0mVl6YvX8nd65nx4meZkhD9Qv-vc',
  authDomain: 'my-cute-pet.firebaseapp.com',
  databaseURL: 'https://my-cute-pet.firebaseio.com',
  projectId: 'my-cute-pet',
  storageBucket: 'my-cute-pet.appspot.com',
  messagingSenderId: '803889156424'
};

const firebaseApp = firebase.initializeApp(config);

export const db = firebaseApp.database(); //the real-time database
export const storage = firebase.storage(); //the firebase storage adjunct for images
export const auth = firebaseApp.auth(); //the firebase auth namespace


// auth.onAuthStateChanged(user => {
//   if (user) {
//     user.getIdToken().then(token => {
//       store.dispatch(userFromToken(token));
//     });
//   }
//     store.dispatch({ type: LOGOUT });
//   }
//   else {
//     store.dispatch({ type: TOKEN_CHECK });
//   }
// });
