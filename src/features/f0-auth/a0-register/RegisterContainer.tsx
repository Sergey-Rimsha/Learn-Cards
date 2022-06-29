import {useEffect} from 'react';

import {useNavigate} from 'react-router-dom';

import {AppDispatch, useAppSelector} from '../../../store/store';
import {registerUserTC} from '../../../store/reducers/authReducer';

import {PATH} from '../../../app/Routing/Routing';

import {Register} from './Register';


export type RegisterDataType = {
	email: string
	pass1: string
	pass2: string
}


export const RegisterContainer = () => {

	const dispatch = AppDispatch();
	const navigate = useNavigate();

	const registerStatus = useAppSelector<boolean>(state => state.auth.registerStatus);

	useEffect(() => {
		if (registerStatus) navigate(PATH.login);
	}, [registerStatus, navigate]);

	const onRegister = (payload: RegisterDataType) => {
		const data = {
			email: payload.email,
			password: payload.pass1,
		};
		if (payload.pass1 === payload.pass2) {
			dispatch(registerUserTC(data));
		}
	};

	const onRedirect = () => {
		navigate(PATH.login);
	};

	return (
		<>
			<Register
				onRegister={onRegister}
				onRedirect={onRedirect}
			/>
		</>
	);
};
