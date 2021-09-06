import { combineReducers } from 'redux';
import { crudReducer } from './crudReducer';
import { authReducer } from './authReducer';

export const rootReducer = combineReducers({
    crud: crudReducer,
    auth: authReducer
});


