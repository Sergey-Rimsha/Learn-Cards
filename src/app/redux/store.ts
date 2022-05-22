import {combineReducers, createStore} from 'redux';

import {LoginActionType, loginReducer} from './loginReducer';
import {ProfileActionType, profileReducer} from './profileReducer';
import {PasswordActionType, passwordReducer} from './passwordReducer';
import {RecoveryActionType, recoveryReducer} from './recoveryReducer';
import {RegistrationActionType, registrationReducer} from './registrationReducer';


export type AppRootStateType = ReturnType<typeof rootReducer>

// RootActionType
export type AppRootActionType = ProfileActionType
	| LoginActionType
	| PasswordActionType
	| RecoveryActionType
	| RegistrationActionType


const rootReducer = combineReducers({
	profile: profileReducer,
	login: loginReducer,
	password: passwordReducer,
	recovery: recoveryReducer,
	registration: registrationReducer,
});

export const store = createStore(rootReducer);
