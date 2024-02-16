// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mer-blog.firebaseapp.com",
  projectId: "mer-blog",
  storageBucket: "mer-blog.appspot.com",
  messagingSenderId: "543381894130",
  appId: "1:543381894130:web:0c64b3016b03f9e348316b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
