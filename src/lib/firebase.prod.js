import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// config
const config = {
  apiKey: "AIzaSyCbHmcUWNq0fYiPYrkE6CPjrKDxieCyx6M",
  authDomain: "netfilx-ed25c.firebaseapp.com",
  projectId: "netfilx-ed25c",
  storageBucket: "netfilx-ed25c.appspot.com",
  messagingSenderId: "1007207793032",
  appId: "1:1007207793032:web:1c2fba6839a861f65afa3d",
};

const firebase = Firebase.initializeApp(config);
export { firebase };
