import React, {ChangeEvent, useCallback, useState} from 'react';

import {TextField} from '../c4-Textfield/TextField';

import s from './ModalAdded.module.scss';

type ModalAddedPropsType = {
	title?: string
	name?: string
	onSubmitName: (name: string) => void
	onShowModal: (show: boolean) => void
}

export const  ModalAdded = React.memo((props: ModalAddedPropsType) => {

	const {onSubmitName, onShowModal, name = '', ...restProps} = props;

	const [namePack, setNamePack] = useState<string>(name);

	// отменяем и закрываем модалку
	const onClickHandlerCancel = useCallback(() => {
		onShowModal(false);
	},[onShowModal]);

	// сохраняем значение
	const onClickHandlerSave = useCallback(() => {
		if (namePack) {
			onSubmitName(namePack);
		}
	},[onSubmitName, namePack]);

	// считываем занчение из инпута
	const onChangeHandlerInput = (e: ChangeEvent<HTMLInputElement>) => {
		setNamePack(e.currentTarget.value);
		console.log(e.currentTarget.value);
	};

	return (
		<div className={s.modal}>
			<div className={s.modal__wrap}>
				<div className={s.modal__block}>
					<div className={s.modal__title}>
						{props.title || 'Modal Added'}
					</div>
					<div className={s.modal__input} >
						<TextField
							type={'text'}
							label={'Name pack'}
							value={namePack}
							onChange={onChangeHandlerInput}
						/>
					</div>
					<div className={s.modal__btnGroup}>
						<button
							className={`${s.modal__button} ${s.modal__button_cansel}`}
							onClick={onClickHandlerCancel}
						>
							Cancel
						</button>
						<button
							className={`${s.modal__button} ${s.modal__button_save}`}
							onClick={onClickHandlerSave}
						>
							Save
						</button>
					</div>
				</div>
			</div>
		</div>
	);
});
