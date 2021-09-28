import { combineReducers } from 'redux';
import { crudReducer } from './crudReducer';
import { authReducer } from './authReducer';
import { spinnerAuthForm } from './spiner-form';

export const rootReducer = combineReducers({
    crud: crudReducer,
    auth: authReducer,
    spinnerAuth: spinnerAuthForm
});


