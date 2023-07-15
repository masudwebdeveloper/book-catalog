import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCJwn4Op0qDCv0ahcOAosipC5dswiFOed0",
    authDomain: "book-catalog-464b6.firebaseapp.com",
    projectId: "book-catalog-464b6",
    storageBucket: "book-catalog-464b6.appspot.com",
    messagingSenderId: "1043968792588",
    appId: "1:1043968792588:web:eccec067a0be31dba43629"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
