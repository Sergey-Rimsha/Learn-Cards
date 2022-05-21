import { combineReducers, createStore } from 'redux';

import {authReducer} from './authReducer';


export type AppRootStateType = ReturnType<typeof rootReducer>


const rootReducer = combineReducers({
	auth: authReducer,
});

export const store = createStore(rootReducer);
