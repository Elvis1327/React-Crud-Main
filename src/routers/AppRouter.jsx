import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Navbar } from '../components/shared/Navbar';
import { validateTokenAction } from '../actions/auth-action';
// Routes
import { AuthRouter, CrudRouter, PrivateRoute, PublicRoute } from './index';

export const AppRouter = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(validateTokenAction());
    },[dispatch])

    return (
        <BrowserRouter>    
            <div>
                <Navbar />
                <Routes>

                    <Route path="auth/*" element={
                        <PublicRoute>
                            <AuthRouter />
                        </PublicRoute>
                    } />


                    <Route path='crud/*' element={
                        <PrivateRoute>
                            <CrudRouter />
                        </PrivateRoute>
                    } />

                    <Route path="/" element={<Navigate to="/auth/login" />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}



