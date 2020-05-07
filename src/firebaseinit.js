import * as firebase from "firebase/app";
import "firebase/database"
import store from '@/store/'

const firebaseConfig = {
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_FIREBASE_DATAASE_URL,
    projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_FIREBASE_APP_ID,
    measurementId: process.env.VUE_APP_FIREBASE_MEASURMENT_ID
};

const _firebaseConfig = {
    apiKey: "AIzaSyDPQiAJJt4t9wRFiPS3udDYvq-RXb8MeM8",
    authDomain: "draw-8c2a3.firebaseapp.com",
    databaseURL: "https://draw-8c2a3.firebaseio.com",
    projectId: "draw-8c2a3",
    storageBucket: "draw-8c2a3.appspot.com",
    messagingSenderId: "35954692481",
    appId: "1:35954692481:web:7bd6a54671e1787b375880"
};

firebase.initializeApp(_firebaseConfig);

//store.dispatch("fetchUser", user);


export default firebase;