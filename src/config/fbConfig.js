import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
    apiKey: "AIzaSyDSQql-YyNWp_IE8O7yQZNDk8O-e8I4kUk",
    authDomain: "campus-management-system-2cf07.firebaseapp.com",
    databaseURL: "https://campus-management-system-2cf07.firebaseio.com",
    projectId: "campus-management-system-2cf07",
    storageBucket: "campus-management-system-2cf07.appspot.com",
    messagingSenderId: "389849603773"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 