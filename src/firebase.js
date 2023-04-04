import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAp8jagi1yOf3sEVOBi99yX35asZBkHqng",
    authDomain: "linkedin-9cb6f.firebaseapp.com",
    projectId: "linkedin-9cb6f",
    storageBucket: "linkedin-9cb6f.appspot.com",
    messagingSenderId: "598452412249",
    appId: "1:598452412249:web:ccc1a30f2e20f31c3eb648"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth()
  
  export { db , auth};
  export default firebaseApp;