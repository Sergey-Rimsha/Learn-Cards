import React, {useCallback} from 'react';

import {useSelector} from 'react-redux';

import {AppRootStateType} from '../../../store/store';

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
	showModalDeleteHandler: (_id: string, name: string) => void
	learnCardsPack: (_id: string, name: string) => void

}

export const Pack = React.memo((props: PackPropsType) => {

	const {showCardsPack, showModalDeleteHandler, learnCardsPack, ...restProps} = props;

	const userId = useSelector<AppRootStateType, string>(state => state.profile.userData._id);

	const onClickHandlerShowCardsPack = useCallback(() => {
		showCardsPack(props._id, props.name);
	},[showCardsPack]);

	const onClickHandlerDeletePack = useCallback(() => {
		showModalDeleteHandler(props._id, props.name);
	},[showModalDeleteHandler]);

	const onClickHandlerLearnCardsPack = useCallback(() => {
		learnCardsPack(props._id, props.name);
	},[learnCardsPack]);

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
							<button className={s.table__btn}
							        disabled={props.isLoading}
							>Edit</button>
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