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
    console.log(useContext(UserContext))
    return useContext(UserContext)
}
export  const UserProvider = ({children}) => {
    const [user,setUser] = useState(localStorage.getItem('authUser') !== null ?  JSON.stringify(localStorage.getItem('authUser')) : null);

    const auth = getAuth()
    const history = useHistory()
    const signIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log(userCredential)
            setUser(userCredential.user)
            localStorage.setItem('authUser',JSON.stringify(userCredential.user))
          history.push(ROUTES.DASHBOARD)
        })
    }
    const logOut = () => {
        signOut(auth).then(() => {
            setUser(null)
            localStorage.removeItem('authUser')
            // history.push(ROUTES.LOGIN)

        })
    }

    const values = {
        signIn,
        logOut,
        user
    }


    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    )
}
