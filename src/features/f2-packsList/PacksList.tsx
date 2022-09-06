import React, {useCallback} from 'react';

import {PaginationContainer} from '../../components/c6-Pagination/PaginationContainer';

import {DoubleRange} from '../../components/c7-DoubleRange/DoubleRange';

import {SearchInput} from '../../components/c8-SearchInput/SearchInput';

import {ModalAdded} from '../../components/с11-ModalAdded/ModalAdded';

import s from './PacksList.module.scss';
import {TablePacksContainer} from './p0-tablePack/TablePacksContainer';
import {ShowPackContainer} from './f1-showPack/ShowPackContainer';


type PacksListPropsType = {
	isLoading: boolean
	showModal: boolean
	totalCount: number
	currentPage: number
	pageCount: number
	minRange: number
	maxRange: number
	packNameSearch: string
	setParamsPagination: (pageCount: number, currentPage: number) => void
	setParamsRange: (min: number, max: number) => void
	setParamsSearch: (packName: string) => void
	onHandlerSubmitPackName: (packName: string) => void
	onHandlerShowModal: (show: boolean) => void
}

export const PacksList = React.memo((props: PacksListPropsType) => {

	const {onHandlerSubmitPackName, onHandlerShowModal, ...restProps} = props;

	const onHandlerSubmit = useCallback((packName: string) => {
		onHandlerSubmitPackName(packName);
	},[onHandlerSubmitPackName]);

	const onClickHandlerShowModal = useCallback((show: boolean) => {
		onHandlerShowModal(show);
	},[onHandlerShowModal]);

	return (
		<div className={s.packsList}>
			{
				props.showModal &&
				<ModalAdded
					title={'Add new pack'}
					onSubmitName={onHandlerSubmit}
					onShowModal={onClickHandlerShowModal}
				/>
			}
			<div className={s.packsList__block}>
				<div className={s.sidebar}>
					<h4 className={s.sidebar__title}>Show packs cards</h4>
					<ShowPackContainer
						isLoading={props.isLoading}
					/>
					<h4 className={s.title}>
						Number of cards
					</h4>
					<DoubleRange
						isLoading={props.isLoading}
						minRange={props.minRange}
						maxRange={props.maxRange}
						setParamsRange={props.setParamsRange}
					/>
				</div>
				<div className={s.main}>
					<h2 className={s.main__title}>
						Packs list
					</h2>
					<div className={s.main__params}>
						<SearchInput
							packNameSearch={props.packNameSearch}
							setParamsSearch={props.setParamsSearch}
						/>
						<div className={s.main__btn}>
							<button
								onClick={() => onClickHandlerShowModal(true)}
							>
								Add new pack
							</button>
						</div>
					</div>
					<div className={s.main__content}>
						<TablePacksContainer/>
					</div>
					<div className={s.main__pagination}>
						<PaginationContainer
							isLoading={props.isLoading}
							totalCount={props.totalCount}
							currentPage={props.currentPage}
							pageCount={props.pageCount}
							setParamsPagination={props.setParamsPagination}
						/>
					</div>
				</div>
			</div>
		</div>
	);
});

