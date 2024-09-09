// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJrF9F-PJE4iIX3f0tRnBPEpL-l1ADWz8",
  authDomain: "pantry-project-21131.firebaseapp.com",
  projectId: "pantry-project-21131",
  storageBucket: "pantry-project-21131.appspot.com",
  messagingSenderId: "668491637333",
  appId: "1:668491637333:web:a64721591838222468aadc",
  measurementId: "G-RFGQWKRM6Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}