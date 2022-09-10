import React, {useCallback, useState} from 'react';

import {useAppSelector} from '../../../store/store';

import Arrow from '../../../assets/img/polygon.svg';

import {CardPacksType} from '../../../store/reducers/packListReducer';

import s from './TablePacks.module.scss';
import {Pack} from './Pack';
import {StateDeletePackModal, StateRenamePackModal} from './TablePacksContainer';

type TablePacksPropsType = {
	isLoading: boolean
	showCardsPack: (id: string, name: string) => void
	sortTableValue: (value: string) => void
	learnCardsPack: (id: string, name: string) => void
	openModalRenamePack: (params: StateRenamePackModal) => void
	openModalRemovePack: (state: StateDeletePackModal) => void
}


export const TablePacks = React.memo((props: TablePacksPropsType) => {

	const {showCardsPack, sortTableValue, learnCardsPack, openModalRenamePack, openModalRemovePack} = props;

	const cardPacks = useAppSelector<Array<CardPacksType>>(state => state.packList.cardPacks);

	const [sortName, setSortName] = useState<string>('updated');

	const onClickSort = (name: string) => {
		setSortName(name);
		sortTableValue(name);
	};

	// открываем модалку для удаления
	const onHandlerOpenModalRemovePack = useCallback((state: StateDeletePackModal) => {
		openModalRemovePack(state);
	},[openModalRemovePack]);

	const onHandlerOpenRenameModal = useCallback((params: StateRenamePackModal) => {
		openModalRenamePack(params);
	},[openModalRenamePack]);

	return (
		<div className={s.tablePacks}>
			<table className={s.table}>
				<thead className={s.table__head}>
				<tr className={s.table__wrap}>
					<th onClick={() => onClickSort('name')}>
						Name
						{sortName === 'name' && <img src={Arrow} alt='Arrow'/>}
					</th>
					<th	onClick={() => onClickSort('cardsCount')}>
						Cards
						{sortName === 'cardsCount' && <img src={Arrow} alt='Arrow'/>}
					</th>
					<th	onClick={() => onClickSort('updated')}>
						Last Updated
						{sortName === 'updated' && <img src={Arrow} alt='Arrow'/>}
					</th>
					<th>Created by</th>
					<th>Actions</th>
				</tr>
				</thead>
				<tbody className={s.table__body}>
				{
					cardPacks.map((el) => {
						return (
							<Pack
								key={el._id}
								isLoading={props.isLoading}
								_id={el._id}
								user_id={el.user_id}
								name={el.name}
								cardsCount={el.cardsCount}
								updated={el.updated}
								user_name={el.user_name}
								learnCardsPack={learnCardsPack}
								showCardsPack={showCardsPack}
								onHandlerOpenModalRemovePack={onHandlerOpenModalRemovePack}
								onHandlerOpenRenameModal={onHandlerOpenRenameModal}
							/>
						);
					})
				}
				</tbody>
			</table>
		</div>
	);
});

