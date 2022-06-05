import React, {useEffect} from 'react';
import {Route, useHistory} from "react-router-dom";
import * as ROUTES from '../constants/routes'
const NotFound = () => {
    const history =useHistory()
    useEffect(() => {
        history.location.pathname === '/' && history.push(ROUTES.LOGIN)
    },[])
    return (
        <div className='container  bg-sky-500/100'>
           <div className='flex justify-center items-center h-screen'>
              <h1>Not Found</h1>
           </div>
        </div>
    );
};

export default NotFound;