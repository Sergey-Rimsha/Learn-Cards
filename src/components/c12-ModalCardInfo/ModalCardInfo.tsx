
import React, {ChangeEvent, useCallback, useState} from 'react';

import {TextField} from '../c4-Textfield/TextField';

import s from './ModalCardInfo.module.scss';

type ModalCardInfoPropsType = {
	title?: string
	question?: string
	answer?: string
	onSaveCard: (question: string, answer: string) => void
	onCancelModal: (show: boolean) => void
}


export const ModalCardInfo = React.memo((props: ModalCardInfoPropsType) => {

	const {onSaveCard, onCancelModal, question = '', answer= ''} = props;

	const [valueQuestion, setValueQuestion] = useState(question);
	const [valueAnswer, setValueAnswer] = useState(answer);

	const onChangeHandlerQuestion = (e: ChangeEvent<HTMLInputElement>) => {
		setValueQuestion(e.currentTarget.value);
	};

	const onChangeHandlerAnswer = (e: ChangeEvent<HTMLInputElement>) => {
		setValueAnswer(e.currentTarget.value);
	};

	const onClickHandlerCancel = useCallback(() => {
		onCancelModal(false);
	},[onCancelModal]);

	const onClickHandlerSave = useCallback(() => {
		onSaveCard(valueQuestion, valueAnswer);
	},[onSaveCard, valueQuestion, valueAnswer]);

	return (
		<div className={s.modalCard}>
			<div className={s.modalCard__wrap}>
				<div className={s.modalCard__block}>
					<div className={s.modalCard__title}>
						{props.title || 'Card Info'}
					</div>
					<div className={s.modalCard__wrapInputs}>
						<div className={s.modalCard__question}>
							<TextField
								type={'text'}
								label={'Question'}
								value={valueQuestion}
								onChange={onChangeHandlerQuestion}
							/>
						</div>
						<div className={s.modalCard__answer}>
							<TextField
								type={'text'}
								label={'Answer'}
								value={valueAnswer}
								onChange={onChangeHandlerAnswer}
							/>
						</div>
					</div>
					<div className={s.modalCard__btnGroup}>
						<button
							className={`${s.modalCard__button} ${s.modalCard__button_cansel}`}
							onClick={onClickHandlerCancel}
						>
							Cancel
						</button>
						<button
							className={`${s.modalCard__button} ${s.modalCard__button_save}`}
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