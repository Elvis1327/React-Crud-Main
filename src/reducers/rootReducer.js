import { combineReducers } from 'redux';
import { crudReducer } from './crudReducer';

export const rootReducer = combineReducers({
    crud: crudReducer
});


