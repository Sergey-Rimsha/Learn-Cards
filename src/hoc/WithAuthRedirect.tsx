import React, {DetailedHTMLProps, HTMLAttributes, useEffect} from 'react';

import {Navigate, useNavigate} from 'react-router-dom';

import {useAppSelector} from '../store/store';
import {PATH} from '../app/Routing/Routing';

type DivPropsType = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const WithAuthRedirect = (props: DivPropsType) => {
	const {children} = props;
	
	const navigate = useNavigate();
	const isAuth = useAppSelector<boolean>(state => state.app.isAuth); 
	
	const redirect = PATH.login;

	useEffect(() => {
		if (!isAuth) navigate(redirect);
	}, [isAuth, navigate, redirect]);

	if (!isAuth) return <Navigate to={redirect}/>;

	return (
		<>
			{children}
		</>
	);
};