import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyC6nqA0Bx1oLn94a6oubWZWsL4LuoZuKoQ",
    authDomain: "meuapp-8fb50.firebaseapp.com",
    databaseURL: "https://meuapp-8fb50-default-rtdb.firebaseio.com",
    projectId: "meuapp-8fb50",
    storageBucket: "meuapp-8fb50.appspot.com",
    messagingSenderId: "593142173397",
    appId: "1:593142173397:web:ee6cc229fbb571b8619c5c",
    measurementId: "G-D7MPQ7RF0T"
  };
  
if(!firebase.apps.length){
    //Abrir minha conexão
    firebase.initializeApp(firebaseConfig);
}

export default firebase;