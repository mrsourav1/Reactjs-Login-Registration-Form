// Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
import { getFirestore } from "firebase/firestore";

// import firebase from "firebase"

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyD8jCBRXprHN0InSim6W4GCAUAvXoLKOQk",

  authDomain: "posts-e308e.firebaseapp.com",

  projectId: "posts-e308e",

  storageBucket: "posts-e308e.appspot.com",

  messagingSenderId: "77641390095",

  appId: "1:77641390095:web:1da9d102fd0aa8a8fc2b7a"

};


// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const db = getFirestore(firebaseApp);
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
// firebase.initializeApp(firebaseConfig);
// var auth = firebase.auth();
// var provider = new firebase.auth.GoogleAuthProvider(); 
// export {auth , provider};