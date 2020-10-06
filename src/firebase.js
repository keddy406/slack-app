import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDQu-_Bj0BpXZBOQl-f_9pyR38WPbCmnSM",
  authDomain: "slack-app-3facb.firebaseapp.com",
  databaseURL: "https://slack-app-3facb.firebaseio.com",
  projectId: "slack-app-3facb",
  storageBucket: "slack-app-3facb.appspot.com",
  messagingSenderId: "918400666113",
  appId: "1:918400666113:web:91fd90d0e58be3bf8d0e00",
  measurementId: "G-1Z1FJR6YZG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
