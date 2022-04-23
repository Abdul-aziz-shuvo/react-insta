import React, {memo, useEffect, useState} from 'react';
import User from "./user";
import Suggestion from "./suggestion";
import useUser from "../../hooks/useUser";
import {coolGray} from "tailwindcss/colors";

const Sidebar = () => {
    const {user}   = useUser()
    useEffect(() => {

    },[user])
    return (
        <div className=' mx-auto'>
           <User  fullname={user?.fullName} username={user?.username} />
           <Suggestion userId={user?.userId} loggedInUserDocId={user?.docId}  following={user?.following}/>
        </div>
    );
};
export default Sidebar;
Sidebar.whyDidYouRender = true
