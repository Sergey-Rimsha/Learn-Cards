import React, {useCallback, useEffect, useState} from 'react';

import {AppDispatch, useAppSelector} from '../../../store/store';
import {setParamsUserId} from '../../../store/reducers/packListReducer';

import {LoadingStatusType} from '../../../store/reducers/appReducer';

import ShowPack from './ShowPack';

export const ShowPackContainer = React.memo(() => {

    console.log('render ShowPack ALL or MY');

    const dispatch = AppDispatch();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isId, setIsId] = useState<boolean>(false);

    const loadingStatus = useAppSelector<LoadingStatusType>(state => state.app.status);
    const userId = useAppSelector<string>(state => state.profile.userData._id);

    const onclickHandlerMy = useCallback(() => {
        dispatch(setParamsUserId(userId));
        setIsId(true);
    },[dispatch, userId]);

    const onclickHandlerAll = useCallback(() => {
        dispatch(setParamsUserId(''));
        setIsId(false);
    },[dispatch]);

    useEffect(() => {
        if (loadingStatus === 'loading') {
            setIsLoading(true);
        } else {
            setIsLoading(false);
        }
    },[loadingStatus]);

    return (
        <div>
            <ShowPack
                onclickHandlerMy={onclickHandlerMy}
                onclickHandlerAll={onclickHandlerAll}
                isId={isId}
                isLoading={isLoading}
            />
        </div>
    );
});

