import firebase from "firebase";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC70UKzAuK6DEq6MfdTxTN9WnEep7vZuvA",
    authDomain: "tuanngo-me.firebaseapp.com",
    databaseURL: "https://tuanngo-me.firebaseio.com",
    projectId: "tuanngo-me",
    storageBucket: "tuanngo-me.appspot.com",
    messagingSenderId: "443650652301",
    appId: "1:443650652301:web:e0d7abfeb2ea551977cac4"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

