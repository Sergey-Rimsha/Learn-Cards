import React, {useCallback} from 'react';

import {useSelector} from 'react-redux';

import {AppRootStateType} from '../../../store/store';

import s from './TablePacks.module.scss';
import {StateDeletePackModal, StateRenamePackModal} from './TablePacksContainer';

type PackPropsType = {
	isLoading: boolean
	_id: string,
	user_id: string,
	name: string,
	cardsCount: number,
	updated: string,
	user_name: string,
	showCardsPack: (_id: string, name: string) => void
	learnCardsPack: (_id: string, name: string) => void
	onHandlerOpenRenameModal: (params: StateRenamePackModal) => void
	onHandlerOpenModalRemovePack: (state: StateDeletePackModal) => void
}

export const Pack = React.memo((props: PackPropsType) => {

	const {showCardsPack, learnCardsPack, onHandlerOpenRenameModal, onHandlerOpenModalRemovePack} = props;

	const userId = useSelector<AppRootStateType, string>(state => state.profile.userData._id);

	// показывваем карточки всего Pack
	const onClickHandlerShowCardsPack = useCallback(() => {
		showCardsPack(props._id, props.name);
	},[showCardsPack, props._id, props.name]);

	// set state delete modal pack
	const onClickHandlerDeletePack = useCallback(() => {
		onHandlerOpenModalRemovePack({_id: props._id, name: props.name, show: true});
	},[onHandlerOpenModalRemovePack, props._id, props.name]);

	const onClickHandlerLearnCardsPack = useCallback(() => {
		learnCardsPack(props._id, props.name);
	},[learnCardsPack, props._id, props.name]);

	
	const onClickHandlerRenamePackModal = () => {
		const params = {
			_id: props._id,
			name: props.name,
			show: true,
		};
		onHandlerOpenRenameModal(params);
	};


	return (
		<>
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
								onClick={onClickHandlerDeletePack}
								disabled={props.isLoading}
							>
								Delete
							</button>
							<button
								className={s.table__btn}
								disabled={props.isLoading}
								onClick={onClickHandlerRenamePackModal}
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