import React, {useCallback, useState} from 'react';

import {AppDispatch, useAppSelector} from '../../../store/store';
import {setParamsUserId} from '../../../store/reducers/packListReducer';

import ShowPack from './ShowPack';

type ShowPackContainerPropsType = {
    isLoading: boolean
}

export const ShowPackContainer = React.memo((props:ShowPackContainerPropsType) => {

    const dispatch = AppDispatch();

    const [isId, setIsId] = useState<boolean>(false);

    const userId = useAppSelector<string>(state => state.profile.userData._id);

    const onClickHandlerMy = useCallback(() => {
        dispatch(setParamsUserId(userId));
        setIsId(true);
    },[dispatch, userId]);

    const onClickHandlerAll = useCallback(() => {
        dispatch(setParamsUserId(''));
        setIsId(false);
    },[dispatch]);


    return (
        <div>
            <ShowPack
                onClickHandlerMy={onClickHandlerMy}
                onClickHandlerAll={onClickHandlerAll}
                isId={isId}
                isLoading={props.isLoading}
            />
        </div>
    );
});

