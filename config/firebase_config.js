import firebase from 'firebase';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPo3HSi6r7VM_naR1D0vxND3wk09rKEqE",
  authDomain: "nextjs-firebase-85f69.firebaseapp.com",
  projectId: "nextjs-firebase-85f69",
  storageBucket: "nextjs-firebase-85f69.appspot.com",
  messagingSenderId: "676362942155",
  appId: "1:676362942155:web:47eecbfa0d9d29a1274d4e"
};
// Initialize Firebase
//const fb = firebase.initializeApp(firebaseConfig);
//export const db = fb.firestore();

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
  }
}

const fire = firebase;
export default fire;
