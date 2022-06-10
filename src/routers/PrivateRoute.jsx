import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';



export const PrivateRoute = ({children}) => {

    const { check } = useSelector(state => state.auth)

    return (
        <>
            {check === true ? children : <Navigate to="/auth/login" />}
        </>
    )
}


