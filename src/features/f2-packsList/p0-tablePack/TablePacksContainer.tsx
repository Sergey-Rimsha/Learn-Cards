import React, {useCallback, useEffect, useState} from 'react';

import {useNavigate} from 'react-router-dom';

import {AppDispatch, useAppSelector} from '../../../store/store';

import {LoadingStatusType} from '../../../store/reducers/appReducer';

import {delCardsPack, editePackName, getCardsPacks, setParamsUserId} from '../../../store/reducers/packListReducer';

import {PATH} from '../../../app/Routing/Routing';

import {getLearnCardsPack} from '../../../store/reducers/learnCardsReducer';

import {TablePacks} from './TablePacks';

export const TablePacksContainer = React.memo(() => {

	const navigate = useNavigate();
	const dispatch = AppDispatch();

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const loadingStatus = useAppSelector<LoadingStatusType>(state => state.app.status);

	const pageCount = useAppSelector<number>(state => state.packList.pageCount);
	const currentPage = useAppSelector<number>(state => state.packList.page);
	const userId = useAppSelector<string>(state => state.packList.params.userId);
	const min = useAppSelector<number>(state => state.packList.params.min);
	const max = useAppSelector<number>(state => state.packList.params.max);
	const packName = useAppSelector<string>(state => state.packList.params.packName);

	const [sortPacks, setSortPacks] = useState<string>('0updated');

	useEffect(() => {
		dispatch(getCardsPacks());
	},[pageCount, currentPage, dispatch, userId, min, max, packName]);


	// показать модалку удаления
	const onHandlerModalDelete = useCallback((id: string, titleCard: string) => {
		dispatch(delCardsPack(id));
	},[dispatch]);

	// навигация на таблицу карточек
	const showCardsPack = useCallback((id: string, name: string) => {
		// (!isLoading) && navigate(`${PATH.PACK_NAME}/${name}/${id}/${pageCount}`);
		navigate(`${PATH.packName}/${name}/${id}`);
	},[navigate]);

	const sortTableValue = (value: string) => {
		setSortPacks(0 + value);
	};

	const learnCardsPack = useCallback((id: string, name: string) => {
		dispatch(getLearnCardsPack(id));
		navigate(`${PATH.learnCards}/${name}`);
	},[dispatch, navigate]);


	const onHandlerNewPackName = (_id: string, name: string) => {
		dispatch(editePackName({_id, name}));
	};


	useEffect(() => {
		if (loadingStatus === 'loading') {
			setIsLoading(true);
		} else {
			setIsLoading(false);
		}
	},[loadingStatus]);


	// set unmount params userId
	useEffect(() => {
		return () => {
			dispatch(setParamsUserId(''));
		};
	}, []);

	return (
		<>
			<TablePacks
				isLoading={isLoading}
				sortTableValue={sortTableValue}
				onHandlerModalDelete={onHandlerModalDelete}
				showCardsPack={showCardsPack}
				learnCardsPack={learnCardsPack}
				onHandlerNewPackName={onHandlerNewPackName}
			/>
		</>
	);
});