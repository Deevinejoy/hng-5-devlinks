import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "hng-4-file-sharing.firebaseapp.com",
  projectId: "hng-4-file-sharing",
  storageBucket: "hng-4-file-sharing.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Initialize Firebase
const app = getApps.length ? getApp():initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app)
const firestore = getFirestore(app)
export {app, auth, firestore, storage } 