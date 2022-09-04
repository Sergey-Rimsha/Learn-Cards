
import s from './ModalDelete.module.scss';

type ModalDeletePropsType = {
	title?: string
}

export const ModalDelete = (props: ModalDeletePropsType) => {

	const onClickHandlerCancel = () => {

	};

	const onClickHandlerDelete = () => {

	};

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
							{' Pack Name - Name Pack? '}
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
};