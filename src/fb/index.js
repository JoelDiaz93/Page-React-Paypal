import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDQmalSLRj_2exAyNvVThiw45VTWkdDvf4",
  authDomain: "mascotas-c83e9.firebaseapp.com",
  databaseURL: "https://mascotas-c83e9-default-rtdb.firebaseio.com",
  projectId: "mascotas-c83e9",
  storageBucket: "mascotas-c83e9.appspot.com",
  messagingSenderId: "229931941297",
  appId: "1:229931941297:web:618aa82463da71530e9190",
  measurementId: "G-YDDJZNETYZ",
};
const app = firebase.initializeApp(firebaseConfig);

export const db = app.database();
export const auth = app.auth();
export const storage = app.storage();
