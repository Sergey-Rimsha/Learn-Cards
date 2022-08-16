import React, {useEffect} from 'react';

import {Outlet} from 'react-router-dom';

import {Preloader} from '../components/c5-Preloader/Preloader';
import {AppDispatch, useAppSelector} from '../store/store';
import {LoadingStatusType} from '../store/reducers/appReducer';


import {HeaderContainer} from '../common/header/HeaderContainer';


export const Layout = () => {

	const dispatch = AppDispatch();

	const status = useAppSelector<LoadingStatusType>(state => state.app.status);
	const isAuth = useAppSelector<boolean>(state => state.app.isAuth);

	useEffect(() => {
		if (!isAuth) {
			// dispatch()
		}
	},[]);

	return (
		<>
			<HeaderContainer/>
			{status === 'loading' && <Preloader/>}
			<Outlet />
		</>
	);
};