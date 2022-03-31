import {createContext, useContext, useState} from "react";
// import { initializeApp } from 'firebase/app';
import {useHistory} from "react-router-dom";
import * as ROUTES from '../constants/routes'
import { getAuth, signOut,signInWithEmailAndPassword } from "firebase/auth";
//
// const firebaseConfig = {
//     apiKey: "AIzaSyD06DGnKmIGzm5fpU1zGHW4zRSp4JjYmG0",
//     authDomain: "instagram-yt-f9919.firebaseapp.com",
//     projectId: "instagram-yt-f9919",
//     storageBucket: "instagram-yt-f9919.appspot.com",
//     messagingSenderId: "235665541011",
//     appId: "1:235665541011:web:6d5c079dd3572189b34a66"
// };
// const firebase = initializeApp(firebaseConfig);
// const FieldValue = getFirestore(firebase);
const UserContext = createContext(null);


export const useAuth = () => {

    return useContext(UserContext)
}
export  const UserProvider = ({children}) => {
    const [user,setUser] = useState(localStorage.getItem('authUser') !== null ?  JSON.parse(localStorage.getItem('authUser')) : null);
    const auth = getAuth()
    const history = useHistory()

    const signIn = (email, password) => {
      return ( signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
          setUser(userCredential.user)
          localStorage.setItem('authUser',JSON.stringify(userCredential.user))
          const signIn = true
          return {signIn}
        }).catch((error) => {
            const errorMessage = error.message;
            const signIn = false
            return {signIn,errorMessage}
        })
    )
    }
    const logOut = () => {
        signOut(auth).then(() => {
            setUser(null)
            localStorage.removeItem('authUser')
        })
    }

    const values = {
        signIn,
        logOut,
        user,
    }


    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    )
}
