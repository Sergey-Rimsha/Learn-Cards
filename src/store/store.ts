import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {AnyAction, applyMiddleware, combineReducers, createStore} from 'redux';

import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {composeWithDevTools} from 'redux-devtools-extension';

import {ProfileActionType, profileReducer} from './reducers/profileReducer';

import {AuthActionType, authReducer} from './reducers/authReducer';
import {AppActionType, appReducer} from './reducers/appReducer';
import {PackListActionType, packListReducer} from './reducers/packListReducer';
import {packNameReducer} from './reducers/packNameReducer';
import {learnCardsReducer} from "./reducers/learnCardsReducer";


export type AppRootStateType = ReturnType<typeof rootReducer>

// RootActionType
export type AppRootActionType = ProfileActionType
	| AuthActionType
	| AppActionType
	| PackListActionType



export const AppDispatch = () => useDispatch<ThunkDispatch<AppRootStateType, void, AnyAction>>();

// для типизации thunk
export type AppThunkType = ThunkAction<void, AppRootStateType, unknown, AnyAction>

// универсальный селектор для типизации всего приложения
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;


const rootReducer = combineReducers({
	profile: profileReducer,
	auth: authReducer,
	app: appReducer,
	packList: packListReducer,
	packName: packNameReducer,
	learnCards: learnCardsReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
