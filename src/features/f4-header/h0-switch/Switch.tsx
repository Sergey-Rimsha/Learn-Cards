import React from 'react';

import {NavLink} from 'react-router-dom';

import {ReactComponent as Cards} from '../../../assets/img/cards.svg';
import {ReactComponent as User} from '../../../assets/img/profile.svg';

import {PATH} from '../../../app/Routing/Routing';

import s from './Switch.module.scss';

export const Switch = () => {

    const setActive = ({isActive}: {isActive:boolean}) => (isActive ? s.active : '');


    return (
        <div className={s.wrapper}>

            <NavLink
                className={setActive}
                to={PATH.packList}>
                <div className={s.block}>
                    <Cards className={s.icon}/>
                    <span>Packs list</span>
                </div>
            </NavLink>
            <NavLink
                className={setActive}
                to={PATH.profile}>
                <div className={s.block}>
                    <User className={s.icon}/>
                    <span>Profile</span>
                </div>
            </NavLink>
        </div>
    );
};

