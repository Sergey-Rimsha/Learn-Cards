import React from 'react';

import s from './ShowPack.module.scss';

type MyAllPropsType = {
    isId: boolean
    isLoading: boolean
    onclickHandlerMy: () => void
    onclickHandlerAll: () => void
}
const ShowPack = (props: MyAllPropsType) => {
    return (
        <div className={s.block}>
            <button className={!props.isId ? s.primary : s.active}
                    onClick={props.onclickHandlerMy}
                    disabled={props.isLoading}
            >My</button>
            <button className={props.isId ? s.primary : s.active}
                    onClick={props.onclickHandlerAll}
                    disabled={props.isLoading}
            >All</button>
        </div>
    );
};

export default ShowPack;