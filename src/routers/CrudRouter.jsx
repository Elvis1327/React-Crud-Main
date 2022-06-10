import React from 'react';
import { Route, Routes, } from 'react-router-dom'; 

import { CreateUser } from '../components/crud/CreateUser';
import { ManageUsers } from '../components/crud/ManageUsers';

export const CrudRouter = () => {
    return (
        <div>
            <div>
                <Routes>
                    <Route path="create" element={<CreateUser />} />
                    <Route path="create/:id" element={<CreateUser />} />
                    <Route path="manage" element={<ManageUsers />} />
                </Routes>
            </div>
        </div>
    )
}

 