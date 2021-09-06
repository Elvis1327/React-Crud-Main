import { TYPES } from '../types/types';

const initialState = {
    user: {},
    check: false
};

export const authReducer = (state = initialState, action) => {
    switch(action.type){
        case TYPES.authLogin:
            return {
                ...state,
                user: action.payload,
                check: true
            }
        default:
            return state
    };
};



