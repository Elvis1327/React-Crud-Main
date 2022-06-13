import { restApiData } from './auth-fetfch';


// GET ALL USERS
export const getAllUsersFetch = async () => {
    const { data } = await restApiData.get('/api/crud/get-all');
    return data;
};

// CREATE ONE USER
export const createOneUserFetch = async (user) => {
    const { data } = await restApiData.post(`/api/crud/create-user`, user);
    return data
};

// DELETE USER
export const deleteOneUserFetch = async (id) => {
    const { data }  = await restApiData.delete(`/api/crud/delete-user/${id}`);
    return data.deletedUser;
};
// EDIT ONE USER
export const editOneUserFetch = async (body) => {
    const { data } = await restApiData.put(`/api/crud/edit-user/${body._id}`, body);
    return data.user;
};



