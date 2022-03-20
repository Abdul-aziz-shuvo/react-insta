import Firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
// import 'firebase/auth';
import 'firebase/compat/auth';
// import {seedDatabase} from "../seed";

const config = {
    apiKey: "AIzaSyD06DGnKmIGzm5fpU1zGHW4zRSp4JjYmG0",
    authDomain: "instagram-yt-f9919.firebaseapp.com",
    projectId: "instagram-yt-f9919",
    storageBucket: "instagram-yt-f9919.appspot.com",
    messagingSenderId: "235665541011",
    appId: "1:235665541011:web:6d5c079dd3572189b34a66"
};
  const  firebase  = Firebase.initializeApp(config)
 const {FieldValue} = Firebase.firestore;

  // seedDatabase(firebase)

export {firebase,FieldValue}