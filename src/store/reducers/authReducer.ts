import {AppThunkType} from '../store';
import {API, LoginDataType} from '../../api/Api';

import {setIsAuth, setLoadingStatus} from './appReducer';
import {setUserData} from './profileReducer';

type AuthStateType = {
	loginError?: string
	registerStatus: boolean
	activeButton: boolean
}

export type AuthActionType = ReturnType<typeof setUserData> 
	| ReturnType<typeof setLoginError>
	| ReturnType<typeof setIsActiveButton>
	| ReturnType<typeof setRegisterStatus>



const initialState: AuthStateType = {
	loginError: '',
	registerStatus: false,
	activeButton: false,
};

export const authReducer = (state = initialState, action: AuthActionType ): AuthStateType => {

	switch (action.type) {
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
		case 'AUTH/SET_REGISTER_STATUS': {
			return {
				...state,
				registerStatus: action.status,
			};
		}

		default: return state;
	}
};

// action creator

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

export const setRegisterStatus = (status: boolean) => {
	return {
		type: 'AUTH/SET_REGISTER_STATUS',
		status,
	} as const;
};


//Thunk Creator

// login -> post {data-> email password, remember Me}
export const loginUserTC = (data: LoginDataType): AppThunkType => (dispatch) => {

	dispatch(setLoadingStatus('loading'));
	// clear error
	dispatch(setLoginError(''));

	API.login(data)
		.then(res => {
			dispatch(setUserData(res.data));
			dispatch(setIsAuth(true));
		})
		.catch(err => {
			// console.log(err.response.data);
			dispatch(setLoginError(err.response.data.error));
			dispatch(setIsAuth(false));
		})
		.finally(() => {
			dispatch(setLoadingStatus('idle'));
		});
};

export const registerUserTC = (payload: {email: string, password: string}): AppThunkType => (dispatch) => {
	dispatch(setLoadingStatus('loading'));

	API.register(payload)
		.then(res => {
			// console.log(res);
			dispatch(setRegisterStatus(true));
		})
		.catch(err => {
			// console.log(err);
		})
		.finally(() => {
			dispatch(setLoadingStatus('idle'));
		});
};


