import React, {useEffect} from 'react';
import {Redirect, Route} from "react-router-dom";
import * as ROUTES from "../constants/routes";
import {useAuth} from "../context/userContext";


const IsLoggedIn = ({component,path}) => {
    const user = useAuth()

    return (
        user.user == null ?
            <Route path={path} component={component} />
            :
            <Redirect to={ROUTES.DASHBOARD}  />
    );
};

export default IsLoggedIn;