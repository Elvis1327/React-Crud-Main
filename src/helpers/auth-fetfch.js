import axios from 'axios';

const MAIN_URL = 'https://crud-practice13.herokuapp.com';

// LOGIN
export const authLoginFetch = async (body) => {
    const { data } = await axios.post(`${MAIN_URL}/api/auth/login`, body);
    return data;
}
// REGISTER
export const authRegisterFetch = async (body) => {
    const { data } = await axios.post(`${MAIN_URL}/api/auth/register`, body);
    return data;
}
// VALIDATE TOKEN 
export const authValidateToken = async () => {
    const token = localStorage.getItem('token') || '';
    const { data } = await axios.get(`${MAIN_URL}/api/auth/validate-token`, {
        headers: { 'x-token': token }
    });
    return data;
}



