// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-app-421117.firebaseapp.com",
  projectId: "blog-app-421117",
  storageBucket: "blog-app-421117.appspot.com",
  messagingSenderId: "138644023891",
  appId: "1:138644023891:web:cd6156649e9bfa442d34a6",
  measurementId: "G-MK5435EG39"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);