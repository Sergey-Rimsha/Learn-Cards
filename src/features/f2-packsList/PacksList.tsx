import React from 'react';

import s from './PacksList.module.scss';
import {TablePacksContainer} from './p0-tablePack/TablePacksContainer';

type PacksListPropsType = {
    onHandlerSubmitPackName: () => void
}

export const PacksList = (props: PacksListPropsType) => {

    return (
        <>
            {/*<NavBarContainer/>*/}
            <div className={s.wrapper}>
                <div className={s.table}>
                    <div className={s.leftBar}>
                        <h4 className={s.title}>Show packs cards</h4>
                        {/*<MyAllContainer/>*/}
                        <h4 className={s.title}>Number of cards</h4>
                        {/*<DoubleRange/>*/}
                    </div>
                    <div className={s.main}>
                        <h2 className={s.title}>Packs list</h2>
                        <TablePacksContainer/>
                        {/*<PaginationContainer/>*/}
                    </div>
                </div>
            </div>
        </>
    );
};

