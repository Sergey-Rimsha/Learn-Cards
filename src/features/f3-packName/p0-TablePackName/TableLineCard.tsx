import React, {useCallback} from 'react';

import {CardPackNameType} from '../../../store/reducers/packNameReducer';

import {useAppSelector} from '../../../store/store';

import s from './TablePackName.module.scss';
import {ModalCardEditeStateType} from "./TablePackNameContainer";


export type TableLineCardPropsType = {
    item: CardPackNameType
    deleteCard:(_id: string) => void
    onHandlerShowEditeModal: (params: ModalCardEditeStateType) => void
}

export const TableLineCard = React.memo((props: TableLineCardPropsType) => {

    const myUserId = useAppSelector<string>(state => state.profile.userData._id);

    const {item, deleteCard} = props;

    const onClickHandlerDeleteCard = useCallback( () => {
        deleteCard(item._id);
    }, [deleteCard, item._id]);

    const onClickHandlerShowEditeModal = () => {
        const params = {
            show: true,
            question: item.question,
            answer: item.answer,
            _id: item._id,
        };
        props.onHandlerShowEditeModal(params);
    };


    // onClick={() => dispatch(changeModalEditCard(true, c._id, c.question,'', c.answer))}
    
    return (
        <>
            <tr key={item.updated}>
                <td>{item.question}</td>
                <td>{item.answer}</td>
                <td>{new Date(Date.parse(item.updated)).toLocaleDateString()}</td>
                <td>{item.grade}</td>
                <td>
                    {
                        myUserId === item.user_id ?
                            <div className={s.buttonsGroup}>
                                <button
                                    className={s.buttonsGroup__btn}
                                    onClick={onClickHandlerShowEditeModal}
                                >
                                    Edit
                                </button>
                                <button
                                    className={`${s.buttonsGroup__btn} ${s.buttonsGroup__btn_active}`}
                                    onClick={onClickHandlerDeleteCard}
                                >
                                    Delete
                                </button>
                            </div> : null
                    }
                </td>
            </tr>
        </>
    );
});
