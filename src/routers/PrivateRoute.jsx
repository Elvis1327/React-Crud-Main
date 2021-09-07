import React from 'react'
import { Redirect, Route } from 'react-router';
import Proptypes from 'prop-types';

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    return (
        <Route 
            {...rest}
            component={(props)=>(
                (isAuthenticated === true)
                ? <Component {...props} />
                : <Redirect to="/auth/login" />
            )}
        />
    )
};

PrivateRoute.prototype = {
    isAuthenticated: Proptypes.bool.isRequired
}

