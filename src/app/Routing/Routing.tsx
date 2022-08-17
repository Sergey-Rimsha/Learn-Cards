import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';

import {LoginContainer} from '../../features/f0-auth/a1-login/LoginContainer';
import {RegisterContainer} from '../../features/f0-auth/a0-register/RegisterContainer';
import {Layout} from '../Layout';
import {ProfileContainer} from '../../features/f1-profile/ProfileContainer';
import {PackListContainer} from '../../features/f2-packsList/PackListContainer';
import {NotFound} from '../../common/notFound/NotFound';
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

export const PATH = {
	login: '/login',
	profile: '/profile',
	register: '/register',
	recovery: '/recovery',
	newPassword: '/newPassword',
	notFound: '/404',
	packList: '/packList',

	testComponents: 'testComponents',
};

export const Routing = () => {

	return (
		<>
			<Routes>
				<Route path={'/'} element={<Layout/>}>
					<Route index element={<Navigate to={PATH.profile}/>}/>
					<Route path={PATH.login} element={<LoginContainer/>}/>
					<Route path={PATH.register} element={<RegisterContainer/>}/>
					<Route
						path={PATH.profile}
						element={
							<WithAuthRedirect>
								<ProfileContainer/>
							</WithAuthRedirect>
						}
					/>
					<Route
						path={PATH.packList}
						element={
							<WithAuthRedirect>
								<PackListContainer/>
							</WithAuthRedirect>
						}
					/>

					<Route path={'*'} element={<NotFound/>}/>
				</Route>
			</Routes>
		</>
		
	);
};

