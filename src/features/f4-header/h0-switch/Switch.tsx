import React from 'react';

import {NavLink} from 'react-router-dom';

import {ReactComponent as Cards} from '../../../assets/img/cards.svg';
import {ReactComponent as User} from '../../../assets/img/profile.svg';

import {PATH} from '../../../app/Routing/Routing';

import s from './Switch.module.scss';

export const Switch = () => {

    const setActive = ({isActive}: {isActive:boolean}) => (isActive ? s.switch__item_active : '');


    return (
        <div className={s.switch}>
            <NavLink
                className={setActive}
                to={PATH.packList}>
                <div className={s.switch__item}>
                    <Cards className={s.switch__icon}/>
                    <span className={s.switch__name}>
                        Packs list
                    </span>
                </div>
            </NavLink>
            <NavLink
                className={setActive}
                to={PATH.profile}>
                <div className={s.switch__item}>
                    <User className={s.switch__icon}/>
                    <span className={s.switch__name}>
                        Profile
                    </span>
                </div>
            </NavLink>
        </div>
    );
};

