import React from 'react';

import photoDefault from '../../../assets/img/ava_default.jpg';

import s from './LogOut.module.scss';


type LogOutPropsType = {
	profilePhoto: string | undefined
	onClickHandlerLogOut: () => void
}

export const LogOut = (props: LogOutPropsType) => {
	
	
	return (
		<>
			<div className = {s.logOut}
				 onClick={() => {
					 props.onClickHandlerLogOut();
				 }}
			>
				<div className={s.logOut__img}>
					<img
						src={props.profilePhoto || photoDefault}
						alt={'ava'}
					/>
				</div>
				<span className={s.logOut__element}>
					LogOut
				</span>
			</div>
		</>
	);
};