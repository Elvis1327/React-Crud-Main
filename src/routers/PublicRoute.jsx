import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';



export const PublicRoute = ({children}) => {

    const { check } = useSelector(state => state.auth)

    return (
        <>
            {check === false ? children : <Navigate to="/crud/manage" />}
        </>
    )
}


