import React, {useEffect, useState} from 'react';

import {Pagination} from './Pagination';

type PaginationContainerPropsType = {
    isLoading: boolean
    totalCount: number
    currentPage: number
    pageCount: number
    setParamsPagination: (pageCount: number, currentPage: number) => void
}

export const PaginationContainer = React.memo((props: PaginationContainerPropsType) => {

    const {setParamsPagination, ...restProps} = props;

    const [currentPage, setCurrentPage] = useState<number>(props.currentPage);
    const [pageCount, setPageCount] = useState<number>(props.pageCount);

    useEffect(() => {
        setParamsPagination(pageCount, currentPage);
    }, [currentPage, pageCount,  setParamsPagination]);

    useEffect(() => {
        setCurrentPage(1);
    }, []);

    const totalPages = Math.ceil(props.totalCount / pageCount);

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
            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                pageCount={pageCount}
                setPageCount={setPageCount}
                setCurrentPage={setCurrentPage}
                prevPage={prevPage}
                nextPage={nextPage}
                isLoading={props.isLoading}
            />
        </div>);
});