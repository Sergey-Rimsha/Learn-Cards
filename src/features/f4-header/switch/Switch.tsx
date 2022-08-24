import React, {useState} from 'react';

import {useNavigate} from 'react-router-dom';

import {ReactComponent as Cards} from '../../../assets/img/cards.svg';
import {ReactComponent as User} from '../../../assets/img/profile.svg';
//import {ReactComponent as LogOut} from '../../../assets/img/logout.svg';
import {PATH} from '../../../app/Routing/Routing';

import {AppDispatch} from '../../../store/store';

// import {setActiveMenuItem} from '../../../store/reducers/appReducer';

import s from './Switch.module.scss';

//type FilterType = 'cards' | 'user' | 'logOut'

export const Switch = () => {
    // const activeNav = useSelector<AppRootStateType, string>(state => state.app.activeMenuItem);
    //const [active, setActive] = useState<string>(activeNav);

    const [activeNav, setActiveNav] = useState<string>('sd');

    const navigate = useNavigate();
    const dispatch = AppDispatch();

    const clickHandler = (value: string) => {
        //setActive(value);
        // dispatch(setActiveMenuItem(value));
    };

    return (
        <div className={s.wrapper}>

            <div className={activeNav === 'cards' ? s.active : s.block}
                 onClick={() => {
                     clickHandler('cards');
                     navigate(PATH.packList);
                 }}
            >
                <Cards className={s.icon}/>
                <span>Packs list</span>
            </div>

            <div className={activeNav === 'profile' ? s.active : s.block}
                 onClick={() => {
                     clickHandler('profile');
                     navigate(PATH.profile);
                 }}
            >
                <User className={s.icon}/>
                <span>Profile</span>
            </div>
        </div>
    );
};

