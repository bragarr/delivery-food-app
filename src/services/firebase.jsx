import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"; 


const firebaseConfig = {
    apiKey: "AIzaSyAFV2lbGEUXKOR_qyk4E_PJPKiMwLSTVaY",
    authDomain: "delivery-app-c90be.firebaseapp.com",
    projectId: "delivery-app-c90be",
    storageBucket: "delivery-app-c90be.appspot.com",
    messagingSenderId: "1003638083561",
    appId: "1:1003638083561:web:50da25ce05b355fa454578"
  };

  const app = firebase.initializeApp(firebaseConfig);

  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };