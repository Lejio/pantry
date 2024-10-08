// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, setLogLevel } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGESENDERID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID!,
  measurementId: process.env.NEXT_PUBLIC_FIREBBASE_MEASUREMENTID!
};

const app = initializeApp(firebaseConfig, "(default)");

const db = getFirestore(app);
// setLogLevel("debug");
export default db;