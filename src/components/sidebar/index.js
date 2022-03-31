import React, {useEffect} from 'react';
import User from "./user";
import Suggestion from "./suggestion";
import useUser from "../../hooks/useUser";

const Sidebar = () => {
    const {user}   = useUser()

    useEffect(() => {
        console.log(user)
    },[])


    return (
        <div className='flex flex-col items-center'>
           <User  fullname={user?.fullName} username={user?.username} />
           <Suggestion userId={user?.userId}/>
        </div>
    );
};

export default Sidebar;