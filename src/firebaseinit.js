import router from '@/router'
import * as firebase from "firebase/app";
import "firebase/database"

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

firebase.initializeApp(firebaseConfig);

export const db = {
  refId() {
    if (!router.currentRoute.params.id) throw 'Error: ref not set!'
    return ['/drawings', router.currentRoute.params.id, 'elements'].join('/')
  },
	updateDrawingMeta(data) {
		firebase.database().ref('/drawings/' + router.currentRoute.params.id).update(data)
	},
  createNewElementKey() {
    return firebase.database().ref(this.refId()).push().key
  },
  updateElementById(id, data) {
    firebase.database().ref(this.refId() + '/' + id).update(data)
  },
  removeElementById(id) {
    firebase.database().ref(this.refId() + '/' + id).remove()
  },
}

export default firebase