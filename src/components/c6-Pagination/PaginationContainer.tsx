import React, {useEffect, useState} from 'react';

import {AppDispatch, useAppSelector} from '../../store/store';
import {LoadingStatusType} from '../../store/reducers/appReducer';

import {setParamsPage} from '../../store/reducers/packListReducer';

import Pagination from './Pagination';

const PaginationContainer = () => {
    const dispatch = AppDispatch();
    
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageCount, setPageCount] = useState<number>(8);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    
    
    // const isId = useSelector<AppRootStateType, boolean>(state => state.app.isId);
    // const params = useSelector<AppRootStateType, ParamsType>(state => state.tablePacks.params);

  
    const totalCount = useAppSelector<number>(state => state.packList.cardPacksTotalCount);
    const loadingStatus = useAppSelector<LoadingStatusType>(state => state.app.status);

    useEffect(() => {
        dispatch(setParamsPage(pageCount, currentPage));
    }, [currentPage, pageCount, dispatch]);

    useEffect(() => {
        setCurrentPage(1);
    }, []);
    
    
    // loading status transform boolean -> useState
    useEffect(() => {
        if (loadingStatus === 'loading') {
            setIsLoading(true);
        } else {
            setIsLoading(false);
        }
    },[loadingStatus]);
    
    
    const totalPages = Math.ceil(totalCount / pageCount);

    const prevPage = () => {
        return currentPage > 1
            ? setCurrentPage(currentPage - 1)
            : 1;
    };
    const nextPage = () => {
        return currentPage < totalPages
            ? setCurrentPage(currentPage + 1)
            : 1;
    };

    return (
        <div>
            <Pagination totalPages={totalPages}
                        currentPage={currentPage}
                        setPageCount={setPageCount}
                        setCurrentPage={setCurrentPage}
                        prevPage={prevPage}
                        nextPage={nextPage}
                        isLoading={isLoading}
            />
        </div>);
};

export default PaginationContainer;