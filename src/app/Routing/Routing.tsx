import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';

import {LoginContainer} from '../../features/f0-auth/a1-login/LoginContainer';

export const PATH = {
	login: 'login',
	profile: 'profile',
	registration: 'registration',
	recovery: 'recovery',
	newPassword: 'newPassword',
	notFound: '404',

	testComponents: 'testComponents',
};

export const Routing = () => {
	
	return (
		<Routes>
			<Route path={PATH.login} element={<LoginContainer/>}/>
		</Routes>
	);
};

