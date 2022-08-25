import React from 'react';

import s from './Header.module.scss';
import {Switch} from './h0-switch/Switch';
import {LogOutContainer} from './h1-logOut/LogOutContainer';

type HeaderPropsType = {
  
}

export const Header = (props: HeaderPropsType) => {
    return (
        <div className={s.header}>
            <h2 className={s.header__logo}>
                It-incubator
            </h2>
            <div className={s.header__switch}>
                <Switch/>
            </div>
            <div className={s.header__logOut}>
                <LogOutContainer/>
            </div>
        </div>
    );
};

