import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDxCvC-uit7_PL4M3A7lzN-TGG4dZCaips",
    authDomain: "fireblogsyt-53d01.firebaseapp.com",
    projectId: "fireblogsyt-53d01",
    storageBucket: "fireblogsyt-53d01.appspot.com",
    messagingSenderId: "20799651063",
    appId: "1:20799651063:web:9cc38f10e2901566d4a7f2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {timestamp};
  export default firebaseApp.firestore();