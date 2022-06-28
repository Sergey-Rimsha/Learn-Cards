import {AppThunkType} from '../store';
import {AuthAPI, LoginDataType} from '../../api/Api';

import {setIsAuth} from './appReducer';

type AuthStateType = {
	userData: UserDataType,
	
	loginError?: string
	
	activeButton: boolean
}

export type AuthActionType = ReturnType<typeof setUserData> 
	| ReturnType<typeof setLoginError>
	| ReturnType<typeof setIsActiveButton>

export type UserDataType = {
	_id: string
	email: string
	name: string
	avatar?: string
	publicCardPacksCount: number
	created: string
	updated: string
	isAdmin: boolean
	verified: boolean
	rememberMe: boolean
	error?: string;
}


const initialState: AuthStateType = {
	userData: {
		_id: '',
		email: '',
		name: '',
		avatar: '',
		publicCardPacksCount: 0,
		created: '',
		updated: '',
		isAdmin: false,
		verified: false,
		rememberMe: false,
		error: '',
	},

	loginError: '',

	activeButton: false,
};

export const authReducer = (state = initialState, action: AuthActionType ): AuthStateType => {

	switch (action.type) {
		case 'AUTH/SET_USER_DATA': {
			return {
				...state,
				userData: action.data,
			};
		}
		case 'AUTH/SET_LOGIN_ERROR': {
			return {
				...state,
				loginError: action.error,
			};
		}
		case 'AUTH/SET_IS_ACTIVE_BUTTON': {
			return {
				...state,
				activeButton: action.isActive,
			};
		}


		default: return state;
	}
};

// action creator

// save data users
export const setUserData = (data: UserDataType) => {
	return {
		type: 'AUTH/SET_USER_DATA',
		data,
	} as const;
};

// save error message
export const setLoginError = (error: string) => {
	return {
		type: 'AUTH/SET_LOGIN_ERROR',
		error,
	} as const;
};

export const setIsActiveButton = (isActive: boolean) => {
	return {
		type: 'AUTH/SET_IS_ACTIVE_BUTTON',
		isActive,
	} as const;
};


//Thunk Creator
// login -> post {data-> email password, remember Me}
export const loginUserTC = (data: LoginDataType): AppThunkType => (dispatch) => {

	// clear error
	dispatch(setLoginError(''));

	AuthAPI.login(data)
		.then(res => {
			dispatch(setUserData(res.data));
			dispatch(setIsAuth(true));
		})
		.catch(err => {
			// console.log(err.response.data);
			dispatch(setLoginError(err.response.data.error));
			dispatch(setIsAuth(false));
		});
};


