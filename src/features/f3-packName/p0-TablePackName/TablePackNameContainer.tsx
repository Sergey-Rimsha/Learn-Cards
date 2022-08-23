import React, {useEffect, useState} from 'react';

import {useSelector} from 'react-redux';

import {useParams} from 'react-router-dom';

// import {CardPackNameType, getCards} from '../../store/reducers/packNameReducer';
import {AppDispatch, AppRootStateType, useAppSelector} from '../../../store/store';


import {getCards, PackNameStateType} from '../../../store/reducers/packNameReducer';

import {TablePackName} from './TablePackName';


export type CardsType = {
    answer: string
    question: string
    comments: string
    cardsPack_id: string
    grade: number
    shots: number
    user_id: string
    created: string
    updated: string
    _id: string
}

export type FilterPackName = '0name' | '0cardsCount' | '0updated'

interface ITablePackNameContainer {
    filterTitle: string
}

export const TablePackNameContainer = (props: ITablePackNameContainer) => {
    const [filter, setFilter] = useState<FilterPackName>('0updated');

    const packName = useAppSelector<PackNameStateType>(state => state.packName);

    // const cards = useSelector<AppRootStateType, CardPackNameType[]>(state => state.packName.cards);
    const {packId} = useParams();
    const dispatch = AppDispatch();

    useEffect(() => {
        if (packId) {
            // dispatch(getCards(packId, 10, filter));

            dispatch(getCards({cardsPack_id: packId}));
        }
    }, []);

    // const filteredCards = cards.filter(card => {
    //     return card.question.toLowerCase().includes(props.filterTitle.toLowerCase());
    // });



    return (
        <div>
            <TablePackName
                data={packName.cards}
                filter={filter}
                changeFilter={setFilter}/>
        </div>
    );
};

