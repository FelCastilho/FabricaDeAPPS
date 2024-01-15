import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC_yONvJkS7seHL-0iV2LaF9uVS78YFJws",
    authDomain: "curso-react-fd8a2.firebaseapp.com",
    projectId: "curso-react-fd8a2",
    storageBucket: "curso-react-fd8a2.appspot.com",
    messagingSenderId: "373677439789",
    appId: "1:373677439789:web:02ccc2f22aa41a7482f1a4"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };