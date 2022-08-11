import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';

import {TextField} from '../../../components/c4-Textfield/TextField';

import s from './ProfileForm.module.scss';

type ProfileFormType = {
	name: string
	onClickEditMode: (edit: boolean) => void
	onChangeProfile: (name?: string, avatar?: string) => void
}

export const ProfileForm = (props: ProfileFormType) => {

	const {onClickEditMode, name, onChangeProfile} = props;

	const [newName, setNewName] = useState('');
	const [avatar, setAvatar] = useState<any>();

	const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
		setNewName(e.currentTarget.value);
	};


	const sevData = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onChangeProfile(newName, avatar);
		onClickEditMode(false);
	};

	const cancelData = () => {
		onClickEditMode(false);
	};

	const onLoadedFile = (e: ChangeEvent<HTMLInputElement>) => {
		let files = e.currentTarget.files;
		if (files) setAvatar(files);
	};

	useEffect(() => {
		setNewName(name);
	},[name]);


	return (
		<form onSubmit={sevData} className={s.form}>
			<div className={s.form__input}>
				<TextField onChange={onChangeName} value={newName} label={'name'} type={'text'}/>
			</div>
			<div className={s.form__input}>
				<input onChange={onLoadedFile} type={'file'} name={'ava'}/>
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
					type={'submit'}>
					Save
				</button>
			</div>
		</form>
	);
};