import React, {useCallback} from 'react';

import s from './ModalDelete.module.scss';

type ModalDeletePropsType = {
	title?: string
	name?: string
	onClickHandlerDeletePack: () => void
	showModalDeletePack: (show: boolean) => void
	
}

export const ModalDelete = React.memo((props: ModalDeletePropsType) => {

	const {onClickHandlerDeletePack, showModalDeletePack, ...restProps} = props;

	const onClickHandlerCancel = useCallback(() => {
		showModalDeletePack(false);
	},[showModalDeletePack]);

	const onClickHandlerDelete = useCallback(() => {
		onClickHandlerDeletePack();
	},[onClickHandlerDeletePack]);

	return (
		<div className={s.modal}>
			<div className={s.modal__wrap}>
				<div className={s.modal__block}>
					<div className={s.modal__title}>
						{props.title || 'Delete'}
					</div>
					<div className={s.modal__description}>
						Do you really want to remove
						<span>
							{` Pack Name - ${props.name}? `}
						</span>
						All cards will be excluded from this course.
					</div>
					<div className={s.modal__btnGroup}>
						<button
							className={`${s.modal__button} ${s.modal__button_cansel}`}
							onClick={onClickHandlerCancel}
						>
							Cancel
						</button>
						<button
							className={`${s.modal__button} ${s.modal__button_delete}`}
							onClick={onClickHandlerDelete}
						>
							Delete
						</button>
					</div>
				</div>
			</div>
		</div>
	);
});