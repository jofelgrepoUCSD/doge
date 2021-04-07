// Setting up firebase for our project
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyD_AHd28p5nEJ8NmB2CjlXAnsNQYX_Cjps",
    authDomain: "the-doge-project.firebaseapp.com",
    projectId: "the-doge-project",
    storageBucket: "the-doge-project.appspot.com",
    messagingSenderId: "762077217930",
    appId: "1:762077217930:web:2582abfad88006b7ec5973",
    measurementId: "G-T8K144HT98"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const firestore = firebase.firestore();
//firebase.analytics();
//firebase.firestore().setting({ timestapsInSnapshots: true })

//export default firebase;
export {storage, firestore, firebase as default};