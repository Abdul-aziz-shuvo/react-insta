import React, {useContext, useEffect, useState} from 'react';
import {useAuth} from "../context/userContext";
import {getFirebaseUserByUserId} from "../services/firebase";

const UseUser = () => {
    const {user} = useAuth()
    const [activeUser,setActiveUser] = useState();
    useEffect(() => {
      async function getUserByUserId () {
          const [response] =   await getFirebaseUserByUserId(user?.uid)

          setActiveUser(response)
        }

        if (user?.uid){
            getUserByUserId()
        }

    },[user?.uid])
    return (
        { user : activeUser }
    );
};

export default UseUser;