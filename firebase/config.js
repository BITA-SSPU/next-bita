import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCYVOkdIr2wP-24bgNO-6JYjvtdXiFljTA",
    authDomain: "bita-9c97b.firebaseapp.com",
    databaseURL: "https://bita-9c97b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "bita-9c97b",
    storageBucket: "bita-9c97b.appspot.com",
    messagingSenderId: "705016414570",
    appId: "1:705016414570:web:1540f7defef7fdd3bbe513",
    measurementId: "G-QQBCBM9165"
  };
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig)

}


export default firebase

