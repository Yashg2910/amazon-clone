import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyApJPAnjfzJo17QPVSFbd7b7t8INGk2U64",
    authDomain: "clone-a5e9c.firebaseapp.com",
    databaseURL: "https://clone-a5e9c.firebaseio.com",
    projectId: "clone-a5e9c",
    storageBucket: "clone-a5e9c.appspot.com",
    messagingSenderId: "489656016452",
    appId: "1:489656016452:web:d17b6de98f6d0875702611",
    measurementId: "G-MCEME3TXTR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};