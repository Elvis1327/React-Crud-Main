import { TYPES } from '../types/types';

const initialState = {
    loading: null
};

export const spinnerAuthForm = (state = initialState, action) => {
    switch(action.type){
        case TYPES.spinnerStartForm:
            return {
                ...state,
                loading: action.payload
            };
        case TYPES.spinnerFinishForm:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}


