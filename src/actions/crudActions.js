import { 
    createOneUserFetch, 
    deleteOneUserFetch, 
    editOneUserFetch, 
    getAllUsersFetch ,
    getOneUserFetch
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
        dispatch(getAllUsers(resp.users));
    }
};
// GET ONE USER
const getOneUser = (user) => {
    return {
        type: TYPES.getOneUser,
        payload: user
    };
};
export const getOneUserAction = (id) => {
    return async (dispatch) => {
        const resp = await getOneUserFetch(id);
        dispatch(getOneUser(resp))
    }
}
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
        const resp = await deleteOneUserFetch(id)
        dispatch(deleteOneUser(resp._id))
    };
};
const editOneUser = (user) => {
    return {
        type: TYPES.editOneUser,
        payload: user
    };
};
export const editOneUserAction = (user) => {
    return async (dispatch) => {
        const resp = editOneUserFetch(user);
        dispatch(editOneUser(resp))
    };
};