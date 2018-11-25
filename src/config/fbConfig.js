 import firebase from 'firebase/app'
 import 'firebase/firestore'
 import 'firebase/auth'
 
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyD3Sw3A7oA6ZKt0EtqtApd4HWH06Bkvqc8",
    authDomain: "marioplan-c31c4.firebaseapp.com",
    databaseURL: "https://marioplan-c31c4.firebaseio.com",
    projectId: "marioplan-c31c4",
    storageBucket: "marioplan-c31c4.appspot.com",
    messagingSenderId: "972175419706"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;