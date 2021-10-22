import firebase from 'firebase';
import 'firebase/firestore'

const app = firebase.initializeApp({
  apiKey: "AIzaSyAQh4F9n7r7kQm6gA-bFcXwuRQeo-jhqUs",
  authDomain: "klein-ch.firebaseapp.com",
  projectId: "klein-ch",
  storageBucket: "klein-ch.appspot.com",
  messagingSenderId: "687286344168",
  appId: "1:687286344168:web:b6e1a1e7554fe5420a2c5d"
});

export const getFirebase = () => app
export const getFirestore = () => firebase.firestore(app)