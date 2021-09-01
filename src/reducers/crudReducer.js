import { TYPES } from "../types/types";

const initialState = {
    users: [],
    user: {}
}

export const crudReducer = (state = initialState, action) => {
    switch(action.type){
        case TYPES.getAllUsers:
            return {
                ...state,
                users: action.payload
            };
        case TYPES.getOneUser:
            return {
                ...state,
                user: action.payload
            }
        case TYPES.createOneUser:
            return {
                ...state,
                users: [action.payload]
            };
        case TYPES.deleteOneUser:
            return {
                ...state,
                users: state.users.filter(user => user._id !== action.payload)
            };
        case TYPES.editOneUser:
            return {
                ...state,
                users: state.users.map(user => user._id === action.payload._id ? action.payload : user)
            };
        default:
            return state;
    };
}

