import React, {useState} from 'react';

import Arrow from '../../assets/img/arrow-left.svg';

import {PaginationContainer} from '../../components/c6-Pagination/PaginationContainer';

import {SearchInput} from '../../components/c8-SearchInput/SearchInput';

import {ModalCardInfo} from '../../components/c12-ModalCardInfo/ModalCardInfo';

import s from './PackName.module.scss';
import {TablePackNameContainer} from './p0-TablePackName/TablePackNameContainer';

type PackNamePropsType = {
	name: string | undefined
	isLoading: boolean
	page: number
	pageCount: number
	cardsTotalCount: number

	onClickNavigateBack: () => void
	setParamsPagination: (pageCount: number, currentPage: number) => void
}

export const PackName = React.memo((props: PackNamePropsType) => {

	const [showModal, setShowModal] = useState(false);

	const searchParams = (packName: string) => {

	};


	const onHandlerSaveNewCard = (question: string, answer: string) => {
		console.log({question, answer});
		onHandlerCancelModal(false);
	};

	const onHandlerCancelModal = (show: boolean) => {
		setShowModal(show);
	};

	return (
		<div className={s.packName}>
			{
				showModal &&
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
				<div className={s.packName__btn}>
					<button
						onClick={() => onHandlerCancelModal(true)}
					>
						Add new card
					</button>
				</div>
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

