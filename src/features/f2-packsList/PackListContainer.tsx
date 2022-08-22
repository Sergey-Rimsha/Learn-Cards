import React, {useEffect, useState} from 'react';

import {AppDispatch, useAppSelector} from '../../store/store';

import {LoadingStatusType} from '../../store/reducers/appReducer';

import {setParamsCardsCount, setParamsPage} from '../../store/reducers/packListReducer';

import {PacksList} from './PacksList';

export const PackListContainer = () => {

	const dispatch = AppDispatch();

	const [isLoading, setIsLoading] = useState<boolean>(false);

	const loadingStatus = useAppSelector<LoadingStatusType>(state => state.app.status);
	const totalCount = useAppSelector<number>(state => state.packList.cardPacksTotalCount);
	const currentPage = useAppSelector<number>(state => state.packList.page);
	const pageCount = useAppSelector<number>(state => state.packList.pageCount);

	// setParams Pagination
	const setParamsPagination = (pageCount: number, currentPage: number) => {
		dispatch(setParamsPage(pageCount, currentPage));
	};

	const setParamsRange = (min: number, max: number) => {
		dispatch(setParamsCardsCount(min, max));
	};


	// loading status transform boolean -> useState
	useEffect(() => {
		if (loadingStatus === 'loading') {
			setIsLoading(true);
		} else {
			setIsLoading(false);
		}
	},[loadingStatus]);

	return (
		<div>
			<PacksList
				isLoading={isLoading}
				totalCount={totalCount}
				currentPage={currentPage}
				pageCount={pageCount}
				setParamsPagination={setParamsPagination}
				setParamsRange={setParamsRange}
			/>
		</div>

	);
};

