// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyD17NZR5wHXtKn1v2x7mM5aL0r_oHyFnYA',
  authDomain: 'clone-5e662.firebaseapp.com',
  databaseURL: 'https://clone-5e662.firebaseio.com',
  projectId: 'clone-5e662',
  storageBucket: 'clone-5e662.appspot.com',
  messagingSenderId: '399450026976',
  appId: '1:399450026976:web:f2c428d4c11c5c6a8e7185',
  measurementId: 'G-RTKMN58L7Q',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
