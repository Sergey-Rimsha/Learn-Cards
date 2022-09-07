import React, {useEffect, useState} from 'react';

import {useParams} from 'react-router-dom';

// import {CardPackNameType, getCards} from '../../store/reducers/packNameReducer';
import {AppDispatch, useAppSelector} from '../../../store/store';


import {CardPackNameType, getCards, updateCard} from '../../../store/reducers/packNameReducer';

import {ModalCardInfo} from '../../../components/c12-ModalCardInfo/ModalCardInfo';

import {TablePackName} from './TablePackName';

export type FilterPackName = '0name' | '0cardsCount' | '0updated'


export type ModalCardEditeStateType = {
    title?: string
    question?: string
    answer?: string
    _id: string
    show: boolean
}


export const TablePackNameContainer = () => {

    const [filter, setFilter] = useState<FilterPackName>('0updated');

    const [stateModal, setStateModal] = useState<ModalCardEditeStateType>({show: false, _id: 'id'});

    const cards = useAppSelector<CardPackNameType[]>(state => state.packName.cards);
    const page = useAppSelector<number>(state => state.packName.page);
    const pageCount = useAppSelector<number>(state => state.packName.pageCount);

    const {packId} = useParams();
    const dispatch = AppDispatch();

    const onShowEditeModal = (params: ModalCardEditeStateType) => {
        setStateModal({...params});
    };


    const onHandlerCancelEditeMode = (show: boolean) => {
        setStateModal({...stateModal, show});
    };

    const onHandlerSaveCard = (question: string, answer: string) => {
       if (packId) {
           const params = {
               cardsPack_id: packId,
               _id: stateModal._id,
               question,
               answer,
           };
           dispatch(updateCard(params));
       }

        onHandlerCancelEditeMode(false);
    };

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
            {
                !stateModal.show ||
                <ModalCardInfo
                    title={'Edite card'}
                    question={stateModal.question}
                    answer={stateModal.answer}
                    onSaveCard={onHandlerSaveCard}
                    onCancelModal={onHandlerCancelEditeMode}
                />
            }
            <TablePackName
                data={cards}
                filter={filter}
                changeFilter={setFilter}
                onShowEditeModal={onShowEditeModal}
            />
        </div>
    );
};

