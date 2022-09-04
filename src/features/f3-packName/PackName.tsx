import React from 'react';

import Arrow from '../../assets/img/arrow-left.svg';

// import {changeModalAddCard} from '../../store/reducers/modalsReducer';
import {PaginationContainer} from '../../components/c6-Pagination/PaginationContainer';

import {SearchInput} from '../../components/c8-SearchInput/SearchInput';

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

	const searchParams = (packName: string) => {

	};

	return (
		<div className={s.packName}>
			<div className={s.packName__header}>
				<h2 className={s.packName__title}>
					<img onClick={props.onClickNavigateBack} src={Arrow}
						 alt='arrow left'/>
					<span className={s.packName__name}>
                        Pack Name "{props.name}"
                    </span>
				</h2>
			</div>
			<div className={s.packName__params}>
				<SearchInput
					setParamsSearch={searchParams}/>
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

