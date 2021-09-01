import axios from 'axios';

const mainUrl = 'https://crud-practice13.herokuapp.com';

// GET ALL USERS
export const getAllUsersFetch = async () => {
    const { data } = await axios.get(`${mainUrl}/api/get-all`);
    return data;
};
// GET ONE USER
export const getOneUserFetch = async (id) => {
    const { data } = await axios.get(`${mainUrl}/api/get-one/${id}`);
    return data.oneUser;
};
// CREATE ONE USER
export const createOneUserFetch = async (user) => {
    const { data } = await axios.post(`${mainUrl}/api/create-user`, user);
    return data.usuario;
};
// DELETE USER
export const deleteOneUserFetch = async (id) => {
    const { data }  = await axios.delete(`${mainUrl}/api/delete-user/${id}`);
    return data.deletedUser;
};
// EDIT ONE USER
export const editOneUserFetch = async (body) => {
    const { data } = await axios.put(`${mainUrl}/api/edit-user/${body._id}`, body);
    return data.user;
}



