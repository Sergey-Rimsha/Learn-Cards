import React, {useEffect} from 'react';

import {Outlet} from 'react-router-dom';

import {Preloader} from '../components/c5-Preloader/Preloader';
import {AppDispatch, useAppSelector} from '../store/store';
import {LoadingStatusType} from '../store/reducers/appReducer';

import {getMeProfile} from '../store/reducers/profileReducer';
import {HeaderContainer} from '../features/f4-header/HeaderContainer';

import s from './Layout.module.scss';

export const Layout = () => {

	const dispatch = AppDispatch();

	const status = useAppSelector<LoadingStatusType>(state => state.app.status);
	const isAuth = useAppSelector<boolean>(state => state.app.isAuth);

	useEffect(() => {
		if (!isAuth) {
			dispatch(getMeProfile());
		}
	},[]);

	return (
		<div className={s.layout}>

			{/*<HeaderContainerTest/>*/}
			{
				isAuth &&
                <div className={s.layout__headerWrap}>
                    <div className={s.layout__header}>
                        <HeaderContainer />
                    </div>
                    <div className={s.layout__loading}>
						{status === 'loading' && <Preloader/>}
                    </div>
                </div>
			}
			<div className={s.layout__main}>
				<Outlet />
			</div>
		</div>
	);
};