import React, {useCallback} from 'react';

import s from './ShowPack.module.scss';

type MyAllPropsType = {
    isId: boolean
    isLoading: boolean
    onClickHandlerMy: () => void
    onClickHandlerAll: () => void
}
const ShowPack = React.memo((props: MyAllPropsType) => {

    const {onClickHandlerMy, onClickHandlerAll} = props;

    const onClickShowMyPack = useCallback(() => {
        onClickHandlerMy();
    },[onClickHandlerMy]);

    const onClickShowAllPack = useCallback(() => {
        onClickHandlerAll();
    },[onClickHandlerAll]);

    return (
        <div className={s.block}>
            <button className={!props.isId ? s.primary : s.active}
                    onClick={onClickShowMyPack}
                    disabled={props.isLoading}
            >My</button>
            <button className={props.isId ? s.primary : s.active}
                    onClick={onClickShowAllPack}
                    disabled={props.isLoading}
            >All</button>
        </div>
    );
})

export default ShowPack;