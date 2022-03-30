import React, {useEffect} from 'react';
import User from "./user";
import Suggestion from "./suggestion";
import useUser from "../../hooks/useUser";

const Sidebar = () => {
    const {user  : fullName,username,userId} = useUser()
    useEffect(() => {

    },)
    return (
        <div>
           <User  fullname={fullName} username={username} userId={userId}/>
            <Suggestion />
        </div>
    );
};

export default Sidebar;