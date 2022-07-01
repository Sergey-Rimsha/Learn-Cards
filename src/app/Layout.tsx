import {Preloader} from "../components/c5-Preloader/Preloader";
import React from "react";
import {useAppSelector} from "../store/store";
import {LoadingStatusType} from "../store/reducers/appReducer";
import {NavLink, Outlet} from "react-router-dom";
import {HeaderContainer} from "../common/header/HeaderContainer";


export const Layout = () => {

	const status = useAppSelector<LoadingStatusType>(state => state.app.status);

	return (
		<>
			<HeaderContainer/>
			{status === 'loading' && <Preloader/>}
			<Outlet />
		</>
	)
};