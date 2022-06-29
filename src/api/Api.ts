import axios from 'axios';
import {RegisterDataType} from "../features/f0-auth/a0-register/RegisterContainer";

export type LoginDataType = {
	email: string,
	password: string,
	rememberMe: boolean
}

export type AuthResponseType = {
	_id: string;
	email: string;
	name: string;
	avatar?: string;
	publicCardPacksCount: number;
// количество колод
	created: '';
	updated: '';
	isAdmin: boolean;
	verified: boolean; // подтвердил ли почту
	rememberMe: boolean;
	error?: string;
}

export type AuthResponseError = {
	emailRegExp: {}
	error: string
	in: string
	isEmailValid: boolean
	isPassValid: boolean
	passwordRegExp: string
}

const instance = axios.create({
	// process.env.REACT_APP_BACK_URL || для gh-page
	// https://neko-back.herokuapp.com/2.0/ для gh-page
	// http://localhost:7542/2.0/
	baseURL: 'http://localhost:7542/2.0/',
	// baseURL: 'https://neko-back.herokuapp.com/2.0/',
	withCredentials: true,
});



export const AuthAPI = {

	login(data: LoginDataType) {
		return instance.post<AuthResponseType>('auth/login', data);
	},
	register(payload: {email: string, password: string}) {
		return instance.post<AuthResponseType>('auth/register', payload);
	},
};
