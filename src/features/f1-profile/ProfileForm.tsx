import React from 'react';

import {TextField} from '../../components/c4-Textfield/TextField';

import s from './ProfileForm.module.scss';

type ProfileFormType = {
	onClickEditMode: (edit: boolean) => void
}

export const ProfileForm = (props: ProfileFormType) => {

	const {onClickEditMode } = props;

	const sevData = () => {
		onClickEditMode(false);
	};

	const cancelData = () => {
		onClickEditMode(false);
	};


	return (
		<form className={s.form}>
			<div className={s.form__input}>
				<TextField label={'name'} type={'text'}/>
			</div>
			<div className={s.form__input}>
				<TextField label={'email'} type={'email'}/>
			</div>
			<div className={s.form__wrapBtn}>
				<button
					className={`${s.form__btn} ${s.form__btn_cancel}`}
					disabled={false}
					onClick={cancelData}>
					Cancel
				</button>
				<button
					className={`${s.form__btn} ${s.form__btn_reg}`}
					disabled={false}
					onClick={sevData}>
					Save
				</button>
			</div>
		</form>
	);
};