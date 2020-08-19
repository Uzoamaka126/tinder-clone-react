import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCob8D5Lcs5g6N0b9TuHnJYdIBqZPGvp-I",
    authDomain: "tinder-clone-64e48.firebaseapp.com",
    databaseURL: "https://tinder-clone-64e48.firebaseio.com",
    projectId: "tinder-clone-64e48",
    storageBucket: "tinder-clone-64e48.appspot.com",
    messagingSenderId: "102776456452",
    appId: "1:102776456452:web:f12730b3eceac7f45c3c51",
    measurementId: "G-NE5NK74QFY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;