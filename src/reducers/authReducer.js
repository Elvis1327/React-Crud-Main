import { TYPES } from '../types/types';

const initialState = {
    user: {},
    check: false,
};

export const authReducer = (state = initialState, action) => {
    switch(action.type){
        case TYPES.authLogin:
            return {
                ...state,
                user: action.payload.email,
                check: true,
            };
        case TYPES.authRegister:
            return {
                ...state,
                user: action.payload,
                check: true,
            }
        case TYPES.logoutRegister:
            return {
                ...state,
                check: action.payload
            };
        default:
            return state
    };
};



