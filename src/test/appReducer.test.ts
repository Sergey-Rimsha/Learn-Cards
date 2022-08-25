import {appReducer, AppStateType, LoadingStatusType, setIsAuth, setLoadingStatus} from '../store/reducers/appReducer';

let startState: AppStateType;

beforeEach(() => {

	startState = {
		isAuth: false,
		status: 'idle',
	};
});


test('login status true or false', () => {
	const isAuth = true;

	const endState = appReducer(startState, setIsAuth(isAuth));

	expect(endState.isAuth).toBeTruthy();

});

test('loading status state', () => {
	const status: LoadingStatusType = 'loading';

	const endState = appReducer(startState, setLoadingStatus(status));

	expect(endState.status).toBe(status);
});