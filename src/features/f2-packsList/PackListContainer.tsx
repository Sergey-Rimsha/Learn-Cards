import React, {ChangeEvent, useEffect, useState} from 'react';

import {AppDispatch, useAppSelector} from '../../store/store';

import {addCardsPack} from '../../store/reducers/packListReducer';

import {LoadingStatusType} from '../../store/reducers/appReducer';
import {TablePacksContainer} from "./p0-tablePack/TablePacksContainer";
import {PacksList} from "./PacksList";

export const PackListContainer = () => {
	
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const [namePack, setNamePack] = useState<string>('');
	// const isLoading = useSelector<AppRootStateType, boolean>(state => state.app.isLoading);
	
	const loadingStatus = useAppSelector<LoadingStatusType>(state => state.app.status);
	
	const dispatch = AppDispatch();

	const onChangePackName = (e: ChangeEvent<HTMLInputElement>) => {
		setNamePack(e.currentTarget.value);
	};

	const onHandlerSubmitPackName = () => {
		if (namePack.length > 5) {
			dispatch(addCardsPack({name: namePack}));
		}
	};
	
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
				// onChangePackName={onChangePackName}
				onHandlerSubmitPackName={onHandlerSubmitPackName}
			/>
		</div>

	);
};

