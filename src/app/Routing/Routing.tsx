import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';

import {LoginContainer} from '../../features/f0-auth/a1-login/LoginContainer';
import {useAppSelector} from '../../store/store';
import {LoadingStatusType} from '../../store/reducers/appReducer';
import {Preloader} from '../../components/c5-Preloader/Preloader';

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

	const status = useAppSelector<LoadingStatusType>(state => state.app.status);
	
	return (
		<>
			{status === 'loading' && <Preloader/>}
			<Routes>
				<Route path={PATH.login} element={<LoginContainer/>}/>
			</Routes>
		</>
		
	);
};

