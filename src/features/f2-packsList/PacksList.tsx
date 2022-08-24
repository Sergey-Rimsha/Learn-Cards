import React from 'react';


import {PaginationContainer} from '../../components/c6-Pagination/PaginationContainer';

import {DoubleRange} from '../../components/c7-DoubleRange/DoubleRange';

import {SearchInput} from '../../components/c8-SearchInput/SearchInput';

import s from './PacksList.module.scss';
import {TablePacksContainer} from './p0-tablePack/TablePacksContainer';
import ShowPackContainer from './f1-showPack/ShowPackContainer';


type PacksListPropsType = {
    isLoading: boolean
    totalCount: number
    currentPage: number
    pageCount: number
    setParamsPagination: (pageCount: number, currentPage: number) => void
    setParamsRange: (min: number, max: number) => void
    setParamsSearch: (packName: string) => void

}

export const PacksList = (props: PacksListPropsType) => {

    return (
        <>
            <div className={s.packsList}>
                <div className={s.packsList__block}>
                    <div className={s.sidebar}>
                        <h4 className={s.sidebar__title}>Show packs cards</h4>
                        <ShowPackContainer/>
                        <h4 className={s.title}>Number of cards</h4>
                        <DoubleRange
                            setParamsRange={props.setParamsRange}
                        />
                    </div>
                    <div className={s.main}>
                        <h2 className={s.main__title}>Packs list</h2>
                        <div className={s.main__params}>
                            <SearchInput
                                setParamsSearch={props.setParamsSearch}
                            />
                        </div>
                       <div className={s.main__content}>
                           <TablePacksContainer/>
                       </div>
                        <div className={s.main__pagination}>
                            <PaginationContainer
                                isLoading={props.isLoading}
                                totalCount={props.totalCount}
                                currentPage={props.currentPage}
                                pageCount={props.pageCount}
                                setParamsPagination={props.setParamsPagination}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

