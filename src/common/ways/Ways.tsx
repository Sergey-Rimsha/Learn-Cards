import {Route, Routes, Navigate} from 'react-router-dom';

import {LoginContainer} from '../auth/login/LoginContainer';
import {ProfileContainer} from '../profile/ProfileContainer';
import {RegistrationContainer} from '../auth/registration/RegistrationContainer';
import {RecoveryContainer} from '../auth/recovery/RecoveryContainer';
import {Password} from '../auth/password/Password';
import {NotFound} from '../notFound/NotFound';
import {TestComponents} from '../testComponents/TestComponents';

export const pathWays = {
	login: 'login',
	profile: 'profile',
	registration: 'registration',
	recovery: 'recovery',
	newPassword: 'newPassword',
	notFound: '404',

	testComponents: 'testComponents',
};


export const Ways = () => {

	return (
		<>
			<Routes>
				<Route path='/' element={<h1>APP</h1>}/>
				<Route path={pathWays.profile} element={<ProfileContainer/>}/>
				<Route path={pathWays.login} element={<LoginContainer/>}/>
				<Route path={pathWays.registration} element={<RegistrationContainer/>}/>
				<Route path={pathWays.recovery} element={<RecoveryContainer/>}/>
				<Route path={pathWays.newPassword} element={<Password/>}/>

				<Route path={pathWays.testComponents} element={<TestComponents />}/>

				<Route path={pathWays.notFound} element={<NotFound/>}/>
				<Route path={'*'} element={<Navigate to={pathWays.notFound}/>}/>
			</Routes>
		</>
	);
};