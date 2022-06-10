import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Login } from '../components/auth/Login';
import { Register } from '../components/auth/Register';

export const AuthRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
            </Routes>
        </div>
    )
}


