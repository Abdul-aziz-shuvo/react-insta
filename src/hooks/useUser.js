import React, {useContext, useEffect, useState} from 'react';
import {useAuth} from "../context/userContext";
import {getFirebaseUserByUserId} from "../services/firebase";

const UseUser = () => {
    const {user} = useAuth()
    const [activeUser,setActiveUser] = useState();
    useEffect(() => {
      async function getUserByUserId () {
          const {user} =   await getFirebaseUserByUserId(user.id)
          setActiveUser(user)
        }

        if (user?.id){
            getUserByUserId()
        }

    },[user?.id])
    return (
        { user: activeUser, setActiveUser }
    );
};

export default UseUser;