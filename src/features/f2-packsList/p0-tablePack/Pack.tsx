import React, {useCallback, useState} from 'react';

import {useSelector} from 'react-redux';

import {AppRootStateType} from '../../../store/store';

import {ModalDelete} from '../../../components/с10-ModalDelete/ModalDelete';

import {ModalAdded} from '../../../components/с11-ModalAdded/ModalAdded';

import s from './TablePacks.module.scss';

type PackPropsType = {
	isLoading: boolean
	_id: string,
	user_id: string,
	name: string,
	cardsCount: number,
	updated: string,
	user_name: string,
	showCardsPack: (_id: string, name: string) => void
	onHandlerDeletePack: (_id: string, name: string) => void
	learnCardsPack: (_id: string, name: string) => void
	onHandlerEditePackName: (_id: string, name: string) => void
}

export const Pack = React.memo((props: PackPropsType) => {

	const {showCardsPack, onHandlerDeletePack, learnCardsPack, onHandlerEditePackName} = props;

	const [showModal, setShowModal] = useState<boolean>(false);
	const [showModalEdite, setShowModalEdite] = useState<boolean>(false);

	const userId = useSelector<AppRootStateType, string>(state => state.profile.userData._id);

	// показывваем карточки всего Pack
	const onClickHandlerShowCardsPack = useCallback(() => {
		showCardsPack(props._id, props.name);
	},[showCardsPack, props._id, props.name]);

	// удаляем Pack Cards
	const onClickHandlerDeletePack = useCallback(() => {
		onHandlerDeletePack(props._id, props.name);
		// закрывем модалку
		setShowModal(false);
	},[onHandlerDeletePack, props._id, props.name]);

	// показываем и прячем модалку Delete Pack
	const showModalDeletePack = (show: boolean) => {
		setShowModal(show);
	};

	const onClickHandlerLearnCardsPack = useCallback(() => {
		learnCardsPack(props._id, props.name);
	},[learnCardsPack, props._id, props.name]);
	
	
	const onHandlerPackName = (name: string) => {
		onHandlerEditePackName(props._id, name);
		onHandlerShowEditeModal(false);
	};
	
	const onHandlerShowEditeModal = (show: boolean) => {
		setShowModalEdite(show);
	};


	return (
		<>
			{
				showModal &&
                <ModalDelete
                    title={'Delete pack'}
                    name={props.name}
                    onClickHandlerDeletePack={onClickHandlerDeletePack}
                    showModalDeletePack={showModalDeletePack}
                />
			}

			{
				showModalEdite &&
				<ModalAdded
					title={'Rename pack'}
					name={props.name}
					onSubmitName={onHandlerPackName} 
					onShowModal={onHandlerShowEditeModal}
				/>
			}
			<tr className={s.table__wrap}>
				<th onClick={onClickHandlerShowCardsPack}>
					{props.name}
				</th>
				<th>{props.cardsCount}</th>
				<th>{new Date(Date.parse(props.updated)).toLocaleDateString()}</th>
				<th>{props.user_name}</th>
				<th className={s.table__wrapBtn}>
					{props.user_id === userId &&
						<span>
							<button
								className={`${s.table__btn} ${s.table__btn_delete}`}
								onClick={() => showModalDeletePack(true)}
								disabled={props.isLoading}
							>
								Delete
							</button>
							<button
								className={s.table__btn}
								disabled={props.isLoading}
								onClick={() => onHandlerShowEditeModal(true)}
							>
								Edit
							</button>
						</span>
					}
					{
						props.cardsCount > 0 &&
						<button
							className={s.table__btn}
							disabled={props.isLoading}
							onClick={onClickHandlerLearnCardsPack}
						>
							Learn
						</button>
					}
				</th>
			</tr>
		</>
	);
});