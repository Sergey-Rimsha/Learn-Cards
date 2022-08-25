import {authReducer, AuthStateType, setLoginError, setRegisterStatus} from '../store/reducers/authReducer';


let setState: AuthStateType;

beforeEach(() => {

	setState = {
		loginError: '',
		registerStatus: false,
		activeButton: false,
	};
});

test('login error message state', () => {
	const errorMessage = 'password length is small';

	const endState = authReducer(setState, setLoginError(errorMessage));

	expect(endState.loginError).toBe(errorMessage);
});

test('registration status', () => {
	const status = true;
	const endState = authReducer(setState, setRegisterStatus(status));

	expect(endState.registerStatus).toBeTruthy();
});
