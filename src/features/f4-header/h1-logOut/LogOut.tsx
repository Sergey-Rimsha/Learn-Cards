import React from 'react';

import photoDefault from '../../../assets/img/ava_default.jpg';

import s from './LogOut.module.scss';


type LogOutPropsType = {
	profilePhoto: string | undefined
	onClickHandlerLogOut:() => void
}

export const LogOut = (props: LogOutPropsType) => {
	
	
	return (
		<>
			<div className = {s.logOut}
				 onClick={() => {
					 props.onClickHandlerLogOut();
				 }}
			>
				<div>
					<img
						className={s.profileIcon}
						src={props.profilePhoto || photoDefault}
						alt={'ava'}
					/>
				</div>
				<span>LogOut</span>
			</div>
		</>
	);
};