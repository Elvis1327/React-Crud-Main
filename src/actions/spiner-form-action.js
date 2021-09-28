import { TYPES } from '../types/types';

export const spinnerStartForm = () => {
    return {
        type: TYPES.spinnerStartForm,
        payload: true
    };
};

export const spinnerFinishForm = () => {
    return {
        type: TYPES.spinnerFinishForm,
        payload: false
    };
};


