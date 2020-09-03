import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDycEZr2GsP_MnWV_DL6EitlqmgM9FFHsc",
  authDomain: "tinder-clone-1f22e.firebaseapp.com",
  databaseURL: "https://tinder-clone-1f22e.firebaseio.com",
  projectId: "tinder-clone-1f22e",
  storageBucket: "tinder-clone-1f22e.appspot.com",
  messagingSenderId: "1097449060307",
  appId: "1:1097449060307:web:5f161a0f4ef0180f0a6126",
  measurementId: "G-KW9PHHWJTB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();

export default database;
