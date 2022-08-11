import React, {useEffect, useState} from 'react';

import {AppDispatch, useAppSelector} from '../../store/store';

import {LoadingStatusType} from '../../store/reducers/appReducer';

import {PacksList} from './PacksList';

export const PackListContainer = () => {
	
	const [isLoading, setIsLoading] = useState<boolean>(false);

	// const isLoading = useSelector<AppRootStateType, boolean>(state => state.app.isLoading);
	
	const loadingStatus = useAppSelector<LoadingStatusType>(state => state.app.status);
	
	const dispatch = AppDispatch();

	useEffect(() => {
		if (loadingStatus === 'loading') {
			setIsLoading(true);
		} else {
			setIsLoading(false);
		}
	},[loadingStatus]);


	return (
		<div>
			<PacksList/>
		</div>

	);
};

