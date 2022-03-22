import React,{useContext,useState,useEffect} from 'react';
import FirebaseContext from '../context/firebase'
const UseAuthListener = () => {
   const [user,setUser] =  useState(JSON.parse(localStorage.getItem('authUser')))
    const {firebase} = useContext(FirebaseContext)
    useEffect(() => {
         const listener =    firebase.auth().onAuthStateChanged((authUser) => {
                if (authUser){
                    localStorage.setItem('authUser',JSON.stringify(authUser))
                    setUser(authUser)
                }else {
                    localStorage.removeItem('authUser')
                    setUser(null)
                }
            })
        return listener()
    },[firebase])
    return {user};
};
export default UseAuthListener;