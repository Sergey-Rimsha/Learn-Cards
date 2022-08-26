import React, {useState} from 'react';

import {useNavigate, useParams} from 'react-router-dom';

import {useSelector} from 'react-redux';

import Arrow from '../../assets/img/arrow-left.svg';

import {CardPackNameType} from '../../store/reducers/packNameReducer';
import {AppDispatch, AppRootStateType} from '../../store/store';

// import {changeModalAddCard} from '../../store/reducers/modalsReducer';
import s from './PackName.module.scss';
import {TablePackNameContainer} from './p0-TablePackName/TablePackNameContainer';
import Pagination from "../../components/c6-Pagination/Pagination";
import {PaginationContainer} from "../../components/c6-Pagination/PaginationContainer";


export const PackName = () => {
    const [search, setSearch] = useState<string>('');
    // const isModal = useSelector<AppRootStateType, boolean>(state => state.modals.modalAddCard);
    const navigate = useNavigate();
    const {name, packId, pageCount = 10} = useParams();
    const cards = useSelector<AppRootStateType, CardPackNameType[]>(state => state.packName.cards);
    // const isLoading = useSelector<AppRootStateType, boolean>(state => state.app.isLoading);

    const dispatch = AppDispatch();

    const getFilteredCardsAfterSearch = search === ''
        ? cards
        : cards.filter(c => c.question.toLowerCase().includes(search.toLowerCase()));


    const onClickNavigateBack = () => {
        navigate(-1);
    };

    const setParamsPagination = (pageCount: number, currentPage: number) => {

    }

    return (
        <div>
            {/*<HeaderContainerTest/>*/}
            <div className={s.table}>
                <h2 className={s.title}>
                    <img onClick={onClickNavigateBack} src={Arrow} alt='arrow left'/>
                    <span>Pack Name "{name}"</span>
                </h2>
                <div className={s.search}>
                    {/*<TableSearch title={search}*/}
                    {/*             changeTitle={setSearch}*/}
                    {/*             isLoading={isLoading}/>*/}
                    <div className={s.buttonWrap}>
                        {/*<Button width={'200px'}*/}
                        {/*        onClick={() => dispatch(changeModalAddCard(true))}*/}
                        {/*        disabled={isLoading}*/}
                        {/*>*/}
                        {/*    Add new question*/}
                        {/*</Button>*/}
                    </div>
                </div>
                <TablePackNameContainer filterTitle={search}/>
            </div>
            <PaginationContainer
                isLoading={false}
                totalCount={+pageCount}
                currentPage={1}
                pageCount={4}
                setParamsPagination={setParamsPagination}/>
            {/*<Modal visibility={isModal}>*/}
            {/*    <ModalAddCard cardID={packId}/>*/}
            {/*</Modal>*/}
        </div>
    );
};

