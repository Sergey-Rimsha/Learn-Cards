import React, {useCallback} from 'react';

import {CardPackNameType} from '../../../store/reducers/packNameReducer';

import {useAppSelector} from '../../../store/store';

import s from './TablePackName.module.scss';


export type TableLineCardPropsType = {
    item: CardPackNameType
    deleteCard:(_id: string) => void
}

export const TableLineCard = React.memo((props: TableLineCardPropsType) => {

    const myUserId = useAppSelector<string>(state => state.profile.userData._id);

    const {item, deleteCard} = props;

    const onClickHandlerDeleteCard = useCallback( () => {
        deleteCard(item._id);
    }, [deleteCard, item._id]);
    
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
                            <div className={s.buttons}>
                                <button
                                    className={s.btn}
                                    // onClick={() => dispatch(changeModalEditCard(true, c._id, c.question,'', c.answer))}
                                >
                                    Edit
                                </button>
                                <button
                                    className={`${s.btn} ${s.active}`}
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