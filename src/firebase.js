
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAiIPdQJNUg-YENFhwH0bgDTctSxEwAmg0",
  authDomain: "portfolio-b2d44.firebaseapp.com",
  projectId: "portfolio-b2d44",
  storageBucket: "portfolio-b2d44.appspot.com",
  messagingSenderId: "480779956701",
  appId: "1:480779956701:web:4fc58ddbd212db41bd0634"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);