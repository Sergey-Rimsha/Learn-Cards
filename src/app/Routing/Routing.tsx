import React from 'react';
import {Route, Routes} from 'react-router-dom';

import {LoginContainer} from '../../features/f0-auth/a1-login/LoginContainer';
import {RegisterContainer} from '../../features/f0-auth/a0-register/RegisterContainer';
import {Layout} from "../Layout";
import {ProfileContainer} from "../../features/f1-profile/ProfileContainer";

export const PATH = {
	login: 'login',
	profile: 'profile',
	register: 'register',
	recovery: 'recovery',
	newPassword: 'newPassword',
	notFound: '404',

	testComponents: 'testComponents',
};

export const Routing = () => {

	return (
		<>
			<Routes>
				<Route path={'/'} element={<Layout/>} >
					<Route path={PATH.login} element={<LoginContainer/>}/>
					<Route path={PATH.register} element={<RegisterContainer/>}/>
					<Route path={PATH.profile} element={<ProfileContainer/>}/>
				</Route>
			</Routes>
		</>
		
	);
};

