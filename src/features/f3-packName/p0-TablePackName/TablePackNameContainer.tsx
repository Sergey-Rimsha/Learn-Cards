import React, {useEffect, useState} from 'react';

import {useParams} from 'react-router-dom';

// import {CardPackNameType, getCards} from '../../store/reducers/packNameReducer';
import {AppDispatch, useAppSelector} from '../../../store/store';


import {CardPackNameType, getCards} from '../../../store/reducers/packNameReducer';

import {TablePackName} from './TablePackName';

export type FilterPackName = '0name' | '0cardsCount' | '0updated'


export const TablePackNameContainer = () => {

    const [filter, setFilter] = useState<FilterPackName>('0updated');

    const cards = useAppSelector<CardPackNameType[]>(state => state.packName.cards);
    const page = useAppSelector<number>(state => state.packName.page);
    const pageCount = useAppSelector<number>(state => state.packName.pageCount);

    const {packId} = useParams();
    const dispatch = AppDispatch();

    useEffect(() => {
        if (packId) {
            // dispatch(getCards(packId, 10, filter));
            dispatch(getCards({cardsPack_id: packId}));
        }
    }, [packId, dispatch, page, pageCount]);

    // const filteredCards = cards.filter(card => {
    //     return card.question.toLowerCase().includes(props.filterTitle.toLowerCase());
    // });

    return (
        <div>
            <TablePackName
                data={cards}
                filter={filter}
                changeFilter={setFilter}/>
        </div>
    );
};

