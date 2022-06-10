import axios from 'axios';



export const restApiData = axios.create({
    baseURL: 'https://fullstack-project13.herokuapp.com'
});

// LOGIN
export const authLoginFetch = async (body) => {
    const { data } = await restApiData.post('/api/auth/login', body);
    return data;
}
// REGISTER
export const authRegisterFetch = async (body) => {
    const { data } = await restApiData.post('/api/auth/register', body);
    return data;
};

// VALIDATE TOKEN 
export const authValidateToken = async () => {
    const token = localStorage.getItem('token') || '';
    const { data } = await restApiData.get('/api/auth/validate-token', {
        headers: {
            'x-token': token
        }
    });
    return data;
};



