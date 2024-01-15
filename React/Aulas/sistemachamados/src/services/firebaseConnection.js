
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBXNj_OqZ_u5uQUDjbJaPTaUZIqed9N0iM",
  authDomain: "sistema-chamados-fb4a6.firebaseapp.com",
  projectId: "sistema-chamados-fb4a6",
  storageBucket: "sistema-chamados-fb4a6.appspot.com",
  messagingSenderId: "786083281726",
  appId: "1:786083281726:web:5c59f4bd3b5f58a49d4a6f",
  measurementId: "G-3Q24JHRC3Z"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };