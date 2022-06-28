

export type AppStateType = {
	isAuth: boolean
}

export type AppActionType = ReturnType<typeof setIsAuth>

const initialState: AppStateType = {
	isAuth: false,
};

export const appReducer = (state= initialState, action: AppActionType): AppStateType => {
	switch (action.type) {
		case 'APP/SET_IS_AUTH': {
			return {
				...state,
				isAuth: action.isAuth,
			};
		}

		default: return state;
	}
};


// set залогинен или нет
export const setIsAuth = (isAuth: boolean) => {
	return {
		type: 'APP/SET_IS_AUTH',
		isAuth,
	} as const;
};