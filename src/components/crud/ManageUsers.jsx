import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteOneUserAction, getAllUsersAction } from '../../actions/crudActions';

export const ManageUsers = () => {
    const dispatch = useDispatch();
    const { users, loading } = useSelector(state => state.crud); 

    useEffect(()=> {
        dispatch(getAllUsersAction());
    },[dispatch]);

    const handleDeleteUser = (id) => {
        dispatch(deleteOneUserAction(id))
        dispatch(getAllUsersAction());
    };

    if(loading === true){
        return <div className="loader"></div>
    }

    return (
        <div className="_main-container-manage">
            {users.length <= 0 
                ?

                <div class="alert alert-danger">
                    There are not Users
                </div>
                :
                <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Sueldo</th>
                        <th>Edit User</th>
                        <th>Delete User</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td>{user.nombre}</td>
                            <td>{user.email}</td>
                            <td>{user.sueldo}</td>
                            <td> 
                                <Link 
                                    className="_manage-button-edit" 
                                    to={`/crud/create/${user._id}`}
                                    > 
                                    <i className="fas fa-edit"></i> 
                                    Edit
                                </Link>
                            </td>
                            <td> 
                                <button 
                                    className="_manage-button-delete"
                                    onClick={() => handleDeleteUser(user._id)}
                                    > 
                                    <i className="fas fa-trash-alt"></i>
                                    Delete 
                                </button> 
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            }
            
        </div>
    )
}


