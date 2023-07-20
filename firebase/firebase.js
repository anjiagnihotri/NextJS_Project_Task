import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-bF6HUpwzF5gnWCy8bmwW1R-aNT7N1Fc",
  authDomain: "web-app-bceb6.firebaseapp.com",
  projectId: "web-app-bceb6",
  storageBucket: "web-app-bceb6.appspot.com",
  messagingSenderId: "646754752809",
  appId: "1:646754752809:web:3ae1cda67ba51b4ee47f38",
  measurementId: "G-N3C1J0ZS30"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)