import { TYPES } from "../types/types"
import { authLoginFetch, authRegisterFetch, authValidateToken } from '../helpers/auth-fetfch';

// LOGIN
const login = (user) => {
    return {
        type: TYPES.authLogin,
        payload: user
    }
};
export const loginAction = (user) => {
    return async (dispatch) => {
        try{
            const resp = await authLoginFetch(user);
            if(resp.ok === true){
                localStorage.setItem('token', resp.token)
                dispatch(login(resp));
            }
        }catch(err){
            console.log(err)
        }
    };
};
// REGISTER
const register = (body) => {
    return {
        type: TYPES.authRegister,
        payload: body
    };
};
export const registerAction = (body) => {
    return async (dispatch) => {
        try{
            const resp = await authRegisterFetch(body)
            if(resp.ok === true){
                localStorage.setItem('token', resp.token)
                const bodyy = {
                    nombre: resp.nombre,
                    email: resp.email
                }
                dispatch(register(bodyy))
            }
        }catch(err){
            console.log(err)
        }
    };
};
// VALIDATE TOKEN
export const validateTokenAction = () => {
    return async (dispatch) => {
        try{
            const resp = await authValidateToken();
            dispatch(login(resp));
            dispatch(register({
                email: resp.email
            }));
        }catch(err){
            console.log(err)
        }
    };
}
// LOGOUT
const logout = () => {
    return {
        type: TYPES.logoutRegister,
        payload: false
    };
};
export const logoutAction = () => {
    return async (dispatch) => {
        localStorage.clear();
        dispatch(logout());
    }
}




