import React from 'react';

import {useParams} from 'react-router-dom';

import Arrow from '../../../assets/img/polygon.svg';

import {CardPackNameType} from '../../../store/reducers/packNameReducer';

import s from './TablePackName.module.scss';

import {FilterPackName} from './TablePackNameContainer';
import {TableLineCard} from './TableLineCard';


type TablePackNamePropsType = {
    data: CardPackNameType[]
    filter: FilterPackName
    changeFilter: (filter: FilterPackName) => void
}

export const TablePackName = (props: TablePackNamePropsType) => {

    const {packId} = useParams();

    // для удаления карточки
    const deleteCard = (id: string) => {
        if (packId) {
            // dispatch(removeCard(id, packId));
        }
    };

    const onClickHandlerFilter = (params: FilterPackName) => {
        props.changeFilter(params);
    };

    return (
        <>
            <table className={s.table}>
                <thead>
                    <tr>
                        <th onClick={() => onClickHandlerFilter('0name')}>
                            <span>Question</span>
                            {props.filter === '0name' && <img src={Arrow} alt='Arrow'/>}
                        </th>
                        <th>
                            <span>Answer</span>
                        </th>
                        <th onClick={() => onClickHandlerFilter('0updated')}>
                            <span>Last Updated</span>
                            {props.filter === '0updated' && <img src={Arrow} alt='Arrow'/>}
                        </th>
                        <th onClick={() => onClickHandlerFilter('0cardsCount')}>
                            <span>Grade</span>
                            {props.filter === '0cardsCount' && <img src={Arrow} alt='Arrow'/>}
                        </th>
                        <th>
                            <span>Actions</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map((el, i) => {
                           return (
                            <TableLineCard
                                key={i}
                                item={el}
                                deleteCard={deleteCard}
                            />
                           );
                        })
                    }
                </tbody>
            </table>
        </>
    );
};

