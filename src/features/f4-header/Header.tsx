import React from 'react';

import s from './NavBar.module.scss';
import {Switch} from './switch/Switch';

type navPropsType = {
    onClickHandlerLogOut: () => void
    profileIcon: string | undefined
    avatar: string|undefined
}

export const Header = (props: navPropsType) => {
    return (
        <div className={s.wrapper}>
            <h2 className={s.logo}>It-incubator</h2>
            <div className={s.switch}>
                <Switch/>
            </div>
            <div className = {s.logOut}
                 onClick={() => {
                     props.onClickHandlerLogOut();
                 }}
            >
                <div>
                    <img
                        className={s.profileIcon}
                        src={props.avatar}
                        alt={'photo'}
                    />
                </div>
                <span>LogOut</span>
            </div>
        </div>
    );
};

