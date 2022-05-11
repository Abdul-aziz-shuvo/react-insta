import React, {useEffect} from 'react';
import {Redirect, Route} from "react-router-dom";
import * as ROUTES from "../constants/routes";
import {useAuth} from "../context/userContext";

const ProtectedRoute = ({component,path}) => {
    const user = useAuth()
    useEffect(() => {
        console.log(user)
    },[])
    return (
        user.user != null ?
        <Route path={path} component={component} />
            :
            <Redirect to={ROUTES.LOGIN} />
    );
};

export default ProtectedRoute;