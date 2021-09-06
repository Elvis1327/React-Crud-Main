import axios from 'axios';

const MAIN_URL = 'https://crud-practice13.herokuapp.com';

export const authLoginFetch = async (body) => {
    const { data } = await axios.post(`${MAIN_URL}/api/auth/login`, body);
    console.log(data);
    return data;
}



