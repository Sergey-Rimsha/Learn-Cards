

export type LoadingStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

export type AppStateType = {
	isAuth: boolean
	status: LoadingStatusType
}

export type AppActionType = ReturnType<typeof setIsAuth>
	| ReturnType<typeof setLoadingStatus>

const initialState: AppStateType = {
	isAuth: false,
	status: 'idle',
};

export const appReducer = (state= initialState, action: AppActionType): AppStateType => {
	switch (action.type) {
		case 'APP/SET_IS_AUTH': {
			return {
				...state,
				isAuth: action.isAuth,
			};
		}
		case 'APP/SET_STATUS_LOADING': {
			return {
				...state,
				status: action.status,
			};
		}

		default: return state;
	}
};


// set login or no
export const setIsAuth = (isAuth: boolean) => {
	return {
		type: 'APP/SET_IS_AUTH',
		isAuth,
	} as const;
};

// set status loading
export const setLoadingStatus = (status: LoadingStatusType) => {
	return {
		type: 'APP/SET_STATUS_LOADING',
		status,
	} as const;
};