import React, {ChangeEvent, useState} from 'react';

import {TextField} from '../../../components/c4-Textfield/TextField';

import s from './Register.module.scss';
import {RegisterDataType} from './RegisterContainer';

type RegisterPropsType = {
	onRegister: (payload: RegisterDataType) => void
	onRedirect: () => void
}

export const Register = (props: RegisterPropsType) => {

	const {onRegister, onRedirect} = props;
	
	const [email, setEmail] = useState<string | undefined>('');
	const [pass1, setPass1] = useState<string | undefined>('');
	const [pass2, setPass2] = useState<string | undefined>('');

	const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
		setEmail(e.currentTarget.value.trim());
	};

	const onChangePass1 = (e: ChangeEvent<HTMLInputElement>) => {
		setPass1(e.currentTarget.value.trim());
	};

	const onChangePass2 = (e: ChangeEvent<HTMLInputElement>) => {
		setPass2(e.currentTarget.value.trim());
	};

	const onClickHandlerRegister = () => {
		if (email && pass1 && pass2) {
			onRegister({email, pass1, pass2});
		}
	};

	const onClickHandlerCancel = () => {
		onRedirect();
	};


	return (
		<div className={s.block}>
			<section className={s.reg}>
				<div className={s.reg__logo}>
					It-incubator
				</div>
				<div className={s.reg__title}>
					Sign Up
				</div>
				<form className={s.form}>
					<div className={s.form__input}>
						<TextField value={email} onChange={onChangeEmail} label={'email'} type={'email'}/>
					</div>
					<div className={s.form__input}>
						<TextField value={pass1} onChange={onChangePass1} label={'password'} type={'password'}/>
					</div>
					<div className={s.form__input}>
						<TextField value={pass2} onChange={onChangePass2} label={'password'} type={'password'}/>
					</div>

					<div className={s.form__wrapBtn}>
						<button
							className={`${s.form__btn} ${s.form__btn_cancel}`}
							disabled={false}
							onClick={onClickHandlerCancel}>
							Cancel
						</button>
						<button
							className={`${s.form__btn} ${s.form__btn_reg}`}
							onClick={onClickHandlerRegister}
							disabled={false}>
							Register
						</button>
					</div>
				</form>
			</section>
		</div>
	);
};

