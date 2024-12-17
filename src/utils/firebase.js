// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth,GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
  apiKey: "AIzaSyBmHRmJrdrO4mSOd0rn-HL6UIzrhdtx7UU",
  authDomain: "netflixgpt-7197f.firebaseapp.com",
  projectId: "netflixgpt-7197f",
  storageBucket: "netflixgpt-7197f.firebasestorage.app",
  messagingSenderId: "944107124418",
  appId: "1:944107124418:web:c3085aa2e7ba1950696d5b",
  measurementId: "G-Q5SDP8NMV8"
};
initializeApp(firebaseConfig)

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth=getAuth(app);
 export  const googleProvider = new GoogleAuthProvider();
 