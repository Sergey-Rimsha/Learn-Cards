import React from 'react';

import Arrow from '../../assets/img/arrow-left.svg';

// import {changeModalAddCard} from '../../store/reducers/modalsReducer';
import {PaginationContainer} from '../../components/c6-Pagination/PaginationContainer';

import s from './PackName.module.scss';
import {TablePackNameContainer} from './p0-TablePackName/TablePackNameContainer';

type PackNamePropsType = {
    name: string | undefined
    isLoading: boolean
    page: number
    pageCount: number
    cardsTotalCount: number

    onClickNavigateBack: () => void
    setParamsPagination: (pageCount: number, currentPage: number) => void
}

export const PackName = React.memo((props: PackNamePropsType) => {

    return (
        <div>
            <div className={s.table}>
                <h2 className={s.title}>
                    <img onClick={props.onClickNavigateBack} src={Arrow} alt='arrow left'/>
                    <span>Pack Name "{props.name}"</span>
                </h2>
                <div className={s.search}>
                    <div className={s.buttonWrap}></div>
                </div>
                <TablePackNameContainer />
            </div>
            <div>
                <PaginationContainer
                    isLoading={props.isLoading}
                    totalCount={props.cardsTotalCount}
                    currentPage={props.page}
                    pageCount={props.pageCount}
                    setParamsPagination={props.setParamsPagination}/>
            </div>
        </div>
    );
});

