

type AuthStateType = {
	email: string | null
	password: string | null
	rememberMe: boolean
}

type AuthActionType = {

}

const initialState: AuthStateType = {
	email: null,
	password: null,
	rememberMe: false,
};

export const authReducer = (state = initialState, action: AuthActionType ) => {

	switch (action) {

		default: return state;
	}
};