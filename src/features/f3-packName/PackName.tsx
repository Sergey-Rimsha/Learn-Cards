import React, {useCallback} from 'react';

import Arrow from '../../assets/img/arrow-left.svg';

import {PaginationContainer} from '../../components/c6-Pagination/PaginationContainer';

import {SearchInput} from '../../components/c8-SearchInput/SearchInput';

import {ModalCardInfo} from '../../components/c12-ModalCardInfo/ModalCardInfo';

import {useAppSelector} from '../../store/store';

import s from './PackName.module.scss';
import {TablePackNameContainer} from './p0-TablePackName/TablePackNameContainer';

type PackNamePropsType = {
	name: string | undefined
	isLoading: boolean
	page: number
	pageCount: number
	cardsTotalCount: number
	showModal: boolean
	onClickNavigateBack: () => void
	setParamsPagination: (pageCount: number, currentPage: number) => void
	saveNewCard: (question: string, answer: string) => void
	showModalNewCard: (show: boolean) => void
}

export const PackName = React.memo((props: PackNamePropsType) => {

	const cardsPackUserID = useAppSelector<string>(state => state.packName.packUserId);
	const myUserID = useAppSelector<string>(state => state.profile.userData._id);

	const {saveNewCard, showModalNewCard} = props;

	const searchParams = (packName: string) => {

	};


	const onHandlerSaveNewCard = useCallback((question: string, answer: string) => {
		saveNewCard(question, answer);
	}, [saveNewCard]);

	const onHandlerCancelModal = useCallback((show: boolean) => {
		showModalNewCard(show);
	}, [showModalNewCard]);

	return (
		<div className={s.packName}>
			{
				props.showModal &&
                <ModalCardInfo
					// title={'Edite Card'}
                    onSaveCard={onHandlerSaveNewCard}
                    onCancelModal={onHandlerCancelModal}
                />
			}
			<div className={s.packName__header}>
				<div className={s.packName__title}>
					<div className={s.packName__arrow}>
						<img
							onClick={props.onClickNavigateBack}
							src={Arrow}
							width={'20px'}
							height={'20px'}
							alt='arrow left'/>
					</div>
					<div className={s.packName__name}>
						Pack Name "{props.name}"
					</div>
				</div>
			</div>
			<div className={s.packName__params}>
				<div className={s.packName__input}>
					<SearchInput
						setParamsSearch={searchParams}/>
				</div>
				{
					cardsPackUserID === myUserID &&
                    <div className={s.packName__btn}>
                        <button
                            onClick={() => onHandlerCancelModal(true)}
                        >
                            Add new card
                        </button>
                    </div>
				}
			</div>
			<div className={s.packName__table}>
				<TablePackNameContainer/>
			</div>
			<div className={s.packName__pagination}>
				<PaginationContainer
					isLoading={props.isLoading}
					totalCount={props.cardsTotalCount}
					currentPage={props.page}
					pageCount={props.pageCount}
					setParamsPagination={props.setParamsPagination}/>
			</div>
		</div>
	);
});

