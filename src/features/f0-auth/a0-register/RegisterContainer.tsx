import {AppDispatch} from '../../../store/store';
import {registerUserTC} from '../../../store/reducers/authReducer';

import {Register} from './Register';

export type RegisterDataType = {
	email: string
	pass1: string
	pass2: string
}


export const RegisterContainer = () => {

	const dispatch = AppDispatch();

	console.log('Register render');

	const onRegister = (payload: RegisterDataType) => {
		const data = {
			email: payload.email,
			password: payload.pass1,
		};
		if (payload.pass1 === payload.pass2) {
			dispatch(registerUserTC(data));
		}
	};



	return (
		<>
			<Register onRegister={onRegister}/>
		</>
	);
};
