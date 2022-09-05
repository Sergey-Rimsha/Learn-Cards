import React, {ChangeEvent, useCallback, useState} from 'react';

import {TextField} from '../c4-Textfield/TextField';

import s from './ModalAdded.module.scss';

type ModalAddedPropsType = {
	title?: string
	onSubmitName: (name: string) => void
	onShowModal: (show: boolean) => void
}

export const  ModalAdded = React.memo((props: ModalAddedPropsType) => {

	const {onSubmitName, onShowModal, ...restProps} = props;

	const [name, setName] = useState<string>('');

	// отменяем и закрываем модалку
	const onClickHandlerCancel = useCallback(() => {
		onShowModal(false);
	},[onShowModal]);

	// сохраняем значение
	const onClickHandlerSave = useCallback(() => {
		if (name) {
			onSubmitName(name);
		}
	},[onSubmitName, name]);

	// считываем занчение из инпута
	const onChangeHandlerInput = (e: ChangeEvent<HTMLInputElement>) => {
		setName(e.currentTarget.value);
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
							value={name}
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
