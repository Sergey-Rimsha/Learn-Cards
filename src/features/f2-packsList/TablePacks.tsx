import React, {useEffect, useState} from 'react';

import {CardPacksType, delCardsPack, getCardsPacks} from '../../store/reducers/packListReducer';

import {AppDispatch, useAppSelector} from '../../store/store';

import {LoadingStatusType} from '../../store/reducers/appReducer';

import s from './TablePacks.module.scss';


export const TablePacks = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    const dispatch = AppDispatch();
    const cardPacks = useAppSelector<Array<CardPacksType>>(state => state.packList.cardPacks);

    const loadingStatus = useAppSelector<LoadingStatusType>(state => state.app.status);


    useEffect(() => {
        dispatch(getCardsPacks());
    }, []);

    useEffect(() => {
        if (loadingStatus === 'loading') {
            setIsLoading(true);
        } else {
            setIsLoading(false);
        }
    },[loadingStatus]);

    // для удаления pack карточек
    const onClickDeletePack = (id: string) => {
        dispatch(delCardsPack(id));
    };

    const renderCardsPacks = (): any => {
        return cardPacks.map(el => {
            return (
                <tr key={el._id} className={s.table__wrap}>
                    <th>{el.name}</th>
                    <th>{el.cardsCount}</th>
                    <th>18.03.2021-date</th>
                    <th>{el.user_name}</th>
                    <th>
                        <button onClick={() => onClickDeletePack(el._id)}
                                disabled={isLoading}
                        >Delete</button>
                        <button disabled={isLoading}>Edit</button>
                        <button disabled={isLoading}>Learn</button>
                    </th>
                </tr>
            );
        });
    };

    return (
        <div className={s.tablePacks}>
            <table className={s.table}>
                <thead className={s.table__head}>
                <tr className={s.table__wrap}>
                    <th>Name</th>
                    <th>Cards</th>
                    <th>Last Updated</th>
                    <th>Created by</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody className={s.table__body}>
                {renderCardsPacks()}
                </tbody>
            </table>
        </div>
    );
};

