import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDNtizIyZfu8d6O-fHzw0buv0wOsNR07fU",
    authDomain: "imc-33131.firebaseapp.com",
    databaseURL: "https://imc-33131-default-rtdb.firebaseio.com",
    projectId: "imc-33131",
    storageBucket: "imc-33131.appspot.com",
    messagingSenderId: "1059596141193",
    appId: "1:1059596141193:web:4209a52f8f9e7fd804fc58",
    measurementId: "G-G81W6PXX1S"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase;