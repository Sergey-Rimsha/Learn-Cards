import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {AnyAction, applyMiddleware, combineReducers, createStore} from 'redux';

import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {ProfileActionType, profileReducer} from './reducers/profileReducer';
import {PasswordActionType, passwordReducer} from './passwordReducer';
import {RecoveryActionType, recoveryReducer} from './recoveryReducer';
import {RegistrationActionType, registrationReducer} from './registrationReducer';
import {AuthActionType, authReducer} from './reducers/authReducer';
import {AppActionType, appReducer} from './reducers/appReducer';
import {packListReducer} from "./reducers/packListReducer";


export type AppRootStateType = ReturnType<typeof rootReducer>

// RootActionType
export type AppRootActionType = ProfileActionType
	| AuthActionType
	| AppActionType
	| PasswordActionType
	| RecoveryActionType
	| RegistrationActionType


export const AppDispatch = () => useDispatch<ThunkDispatch<AppRootStateType,void,AnyAction>>();

// для типизации thunk
export type AppThunkType = ThunkAction<void, AppRootStateType, unknown, AnyAction>

// универсальный селектор для типизации всего приложения
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;


const rootReducer = combineReducers({
	profile: profileReducer,
	auth: authReducer,
	app: appReducer,
	password: passwordReducer,
	recovery: recoveryReducer,
	registration: registrationReducer,

	packList: packListReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
