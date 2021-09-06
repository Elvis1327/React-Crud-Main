import { TYPES } from "../types/types"
import { authLoginFetch } from '../helpers/auth-fetfch';

const login = (user) => {
    return {
        type: TYPES.authLogin,
        payload: user
    }
};
export const loginAction = (user) => {
    return async (dispatch) => {
        const resp = await authLoginFetch(user);
        dispatch(login(resp));
    };
};



