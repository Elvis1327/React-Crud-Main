import Swal from 'sweetalert2'

import { 
    createOneUserFetch, 
    deleteOneUserFetch, 
    editOneUserFetch, 
    getAllUsersFetch ,
    } from '../helpers/crudFetch';

import { TYPES } from '../types/types';

// GET ALL USERS
const getAllUsers = (users) => {
    return {
        type: TYPES.getAllUsers,
        payload: users
    };
};
export const getAllUsersAction = () => {
    return async (dispatch) => {
        const resp = await getAllUsersFetch();
        dispatch(getAllUsers(resp));
    }
};

// CREATE ONE USER
const createOneUser = (user) => {
    return {
        type: TYPES.createOneUser,
        payload: user
    };
};
export const createOneUserAction = (user) => {
    return async (dispatch) => {
        const resp = await createOneUserFetch(user);
        Swal.fire({
            title: "User",
            icon: "success",
            text: `The User has been created`,
            showConfirmButton: false,
            position: "bottom-left",
            timer: 1500
        })
        dispatch(createOneUser(resp));
    };
};

// DELETE ONE USER
const deleteOneUser = (id) => {
    return {
        type: TYPES.deleteOneUser,
        payload: id
    };
};
export const deleteOneUserAction = (id) => {
    return async (dispatch) => {
        
        const swal = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          });
          if(swal.isConfirmed){
            const resp = await deleteOneUserFetch(id);
            dispatch(deleteOneUser(resp._id))
          };
    };
};

// Edit ONE USER
const editOneUser = (user) => {
    return {
        type: TYPES.editOneUser,
        payload: user
    };
};
export const editOneUserAction = (user) => {
    return async (dispatch) => {
        const resp = await editOneUserFetch(user);
        Swal.fire({
            icon: "success",
            title: "User",
            text: "The User has been edited",
            showConfirmButton: false,
            position: "bottom-left",
            timer: 1500
        })
        dispatch(editOneUser(resp))
    };
};