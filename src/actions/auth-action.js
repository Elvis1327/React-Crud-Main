import { TYPES } from "../types/types"
import { authLoginFetch, authRegisterFetch, authValidateToken } from '../helpers/auth-fetfch';
import { spinnerFinishForm, spinnerStartForm } from './spiner-form-action';

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
            dispatch(spinnerStartForm());
            const resp = await authLoginFetch(user);
            if(resp.ok === true){
                localStorage.setItem('token', resp.token);
                dispatch(login(resp));
            }
            dispatch(spinnerFinishForm());
        }catch(err){
            dispatch(spinnerFinishForm());
            console.log(err);
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
            dispatch(spinnerStartForm());
            const resp = await authRegisterFetch(body)
            if(resp.ok === true){
                localStorage.setItem('token', resp.token);
                const bodyy = {
                    nombre: resp.nombre,
                    email: resp.email
                }
                dispatch(register(bodyy));
                dispatch(spinnerFinishForm());
            }
        }catch(err){
            console.log(err)
            dispatch(spinnerFinishForm());
        }
    };
};
// VALIDATE TOKEN
export const validateTokenAction = () => {
    return async (dispatch) => {
        const resp = await authValidateToken();
            dispatch(login(resp));
            dispatch(register({
                email: resp.email
            }));
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




