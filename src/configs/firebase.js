import firebase from "firebase/app";
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyCnfWMIDjipL7UDYBSlCRuL7urFzZnIA6U",
    authDomain: "lacuestadario.firebaseapp.com",
    projectId: "lacuestadario",
    storageBucket: "lacuestadario.appspot.com",
    messagingSenderId: "444383356791",
    appId: "1:444383356791:web:160420b5accb2e6dd36372"
  });
  // Initialize Firebase

  export function getFirestore(){
      return firebase.firestore();
  }