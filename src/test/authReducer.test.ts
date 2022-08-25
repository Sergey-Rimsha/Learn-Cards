import {authReducer, AuthStateType, setLoginError, setRegisterStatus} from '../store/reducers/authReducer';


let statrState: AuthStateType;

beforeEach(() => {

	statrState = {
		loginError: '',
		registerStatus: false,
		activeButton: false,
	};
});

test('login error message state', () => {
	const errorMessage = 'password length is small';

	const endState = authReducer(statrState, setLoginError(errorMessage));

	expect(endState.loginError).toBe(errorMessage);
});

test('registration status', () => {
	const status = true;
	const endState = authReducer(statrState, setRegisterStatus(status));

	expect(endState.registerStatus).toBeTruthy();
});
