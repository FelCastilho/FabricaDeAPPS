import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAsRNEMgt7gEZ66eIjDi7Ulm1uhtC3UgXI",
    authDomain: "apptarefa-46705.firebaseapp.com",
    projectId: "apptarefa-46705",
    storageBucket: "apptarefa-46705.appspot.com",
    messagingSenderId: "774114792799",
    appId: "1:774114792799:web:2a4305c41be5497c9352ea"
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase;