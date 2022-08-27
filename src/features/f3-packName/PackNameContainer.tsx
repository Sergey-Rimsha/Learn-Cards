import {useCallback, useEffect, useState} from 'react';

import {useNavigate, useParams} from 'react-router-dom';

import {AppDispatch, useAppSelector} from '../../store/store';
import {LoadingStatusType} from '../../store/reducers/appReducer';
import {setParamsPackNamePagination} from '../../store/reducers/packNameReducer';

import {PackName} from './PackName';


export const PackNameContainer = ( ) => {

	const [isLoading, setIsLoading] = useState<boolean>(false);

	const loadingStatus = useAppSelector<LoadingStatusType>(state => state.app.status);

	const page = useAppSelector<number>(state => state.packName.page);
	const pageCount = useAppSelector<number>(state => state.packName.pageCount);
	const cardsTotalCount = useAppSelector<number>(state => state.packName.cardsTotalCount);


	const dispatch = AppDispatch();
	const navigate = useNavigate();
	const {name, packId} = useParams();


	const onClickNavigateBack = () => {
		navigate(-1);
	};

	const setParamsPagination = useCallback((pageCount: number, currentPage: number) => {
		dispatch(setParamsPackNamePagination(pageCount, currentPage));
	},[dispatch]);

	useEffect(() => {
		if (loadingStatus === 'loading') {
			setIsLoading(true);
		} else {
			setIsLoading(false);
		}
	},[loadingStatus]);
	
	
	return (
		<>
			<PackName
				name={name}
				isLoading={isLoading}
				page={page}
				pageCount={pageCount}
				cardsTotalCount={cardsTotalCount}
				onClickNavigateBack={onClickNavigateBack}
				setParamsPagination={setParamsPagination}
			/>
		</>
	);
};