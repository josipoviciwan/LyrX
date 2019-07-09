import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBoTxoYqKOpLd4CBzxau1G8tHvQOlF9kGY",
  authDomain: "lyrx-app.firebaseapp.com",
  databaseURL: "https://lyrx-app.firebaseio.com",
  projectId: "lyrx-app",
  storageBucket: "lyrx-app.appspot.com",
  messagingSenderId: "104087623318",
  appId: "1:104087623318:web:e69d843653905449"
});

const db = firebaseApp.firestore();
const rtdb = firebaseApp.database();

db.settings({
  cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
});

db.enablePersistence();

export { db, rtdb };
