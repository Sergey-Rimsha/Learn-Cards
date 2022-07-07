import {API, ChangeProfileType} from "../../api/Api";
import {AppThunkType} from "../store";


type ProfileStateType = {
	userData: UserDataType
}

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

export type ProfileActionType = ReturnType<typeof setUserData> 

const initialState: ProfileStateType = {
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
};

export const profileReducer = (state = initialState, action: ProfileActionType): ProfileStateType => {

	switch (action.type) {
		case 'PROFILE/SET_USER_DATA': {
			return {
				...state,
				userData: action.data,
			};
		}

		default: return state;
	}
};


// action creator 

// save data users

export const setUserData = (data: UserDataType) => {
	return {
		type: 'PROFILE/SET_USER_DATA',
		data,
	} as const;
};


export const putProfile = (data: ChangeProfileType): AppThunkType => (dispatch) => {
	API.changeProfile(data)
		.then(res => {
			dispatch(setUserData(res.data.updatedUser));
			// console.log(res.data.updatedUser);
		});
};